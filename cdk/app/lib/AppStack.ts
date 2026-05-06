import { Construct } from 'constructs';
import { StackProps } from 'aws-cdk-lib/core';
import { Bucket, BucketProps, IBucket } from 'aws-cdk-lib/aws-s3';
import { Certificate, ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
    BehaviorOptions,
    Distribution,
    DistributionProps
} from 'aws-cdk-lib/aws-cloudfront';
import {
    S3BucketOrigin,
    S3BucketOriginWithOACProps
} from 'aws-cdk-lib/aws-cloudfront-origins';
import { AbstractConfigStack } from './AbstractConfigStack';

export class AppStack extends AbstractConfigStack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const bucket: IBucket = this.getS3Bucket();

        this.getDistribution(bucket);
    }

    private getS3Bucket(): IBucket {
        const bucketName: string = this.config.get('s3.name');
        const bucketProps: BucketProps = {
            bucketName
        };

        return new Bucket(this, 'bucket', bucketProps);
    }

    private getDistribution(bucket: IBucket): Distribution {
        const props: DistributionProps = {
            certificate: this.getCertificate(),
            defaultBehavior: this.getDefaultBehavior(bucket),
            errorResponses: this.config.get('cloudfront.errorResponses')
        };

        return new Distribution(this, 'cdn', props);
    }

    private getDefaultBehavior(bucket: IBucket): BehaviorOptions {
        const originPath: string = this.config.get('s3.path');
        const props: S3BucketOriginWithOACProps = {
            originPath
        };

        return {
            origin: S3BucketOrigin.withOriginAccessControl(bucket, props)
        };
    }

    private getCertificate(): ICertificate {
        const certificateArn: string = this.config.get(
            'cloudfront.certificateArn'
        );

        return Certificate.fromCertificateArn(
            this,
            'certificate',
            certificateArn
        );
    }
}
