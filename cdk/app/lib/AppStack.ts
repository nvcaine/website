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
import {
    CfnIPSet,
    CfnIPSetProps,
    CfnWebACL,
    CfnWebACLProps,
    IIPSetRef,
    IWebACLRef
} from 'aws-cdk-lib/aws-wafv2';

export class AppStack extends AbstractConfigStack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const bucket: IBucket = this.getS3Bucket();
        const ipSetV6: CfnIPSet = this.getIpSetV6();
        const ipSetV4: CfnIPSet = this.getIpSetV4();
        const webAcl: IWebACLRef = this.getWebAcl(ipSetV6, ipSetV4);

        this.getDistribution(bucket, webAcl);
    }

    private getS3Bucket(): IBucket {
        const bucketName: string = this.config.get('s3.name');
        const props: BucketProps = {
            bucketName
        };

        return new Bucket(this, 'bucket', props);
    }

    private getIpSetV6(): CfnIPSet {
        const props: CfnIPSetProps = this.config.get('acl.ipSetV6');

        return new CfnIPSet(this, 'IPSetV6', props);
    }

    private getIpSetV4(): CfnIPSet {
        const props: CfnIPSetProps = this.config.get('acl.ipSetV4');

        return new CfnIPSet(this, 'IPSetV4', props);
    }

    private getWebAcl(ipSetV6: IIPSetRef, ipSetV4: IIPSetRef): IWebACLRef {
        const configProps: any = this.config.get('acl.props');
        const props: CfnWebACLProps = {
            ...configProps,
            rules: this.getAclRules(ipSetV6, ipSetV4)
        };

        return new CfnWebACL(this, 'acl', props);
    }

    private getAclRules(
        ipSetV6: IIPSetRef,
        ipSetV4: IIPSetRef
    ): CfnWebACL.RuleProperty[] {
        return [
            {
                name: 'allowed',
                action: {
                    allow: {}
                },
                priority: 0,
                visibilityConfig: {
                    sampledRequestsEnabled: true,
                    cloudWatchMetricsEnabled: true,
                    metricName: 'cdn_acl_allowed_rule_ipv6'
                },
                statement: {
                    ipSetReferenceStatement: {
                        arn: ipSetV6.ipSetRef.ipSetArn
                    }
                }
            },
            {
                name: 'allowed',
                action: {
                    allow: {}
                },
                priority: 1,
                visibilityConfig: {
                    sampledRequestsEnabled: true,
                    cloudWatchMetricsEnabled: true,
                    metricName: 'cdn_acl_allowed_rule_ipv4'
                },
                statement: {
                    ipSetReferenceStatement: {
                        arn: ipSetV4.ipSetRef.ipSetArn
                    }
                }
            }
        ];
    }

    private getDistribution(bucket: IBucket, acl: IWebACLRef): Distribution {
        const props: DistributionProps = {
            certificate: this.getCertificate(),
            defaultBehavior: this.getDefaultBehavior(bucket),
            errorResponses: this.config.get('cloudfront.errorResponses'),
            webAclId: acl.webAclRef.webAclId
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
        const certificateArn: string = this.config.get('cloudfront.certArn');

        return Certificate.fromCertificateArn(
            this,
            'certificate',
            certificateArn
        );
    }
}
