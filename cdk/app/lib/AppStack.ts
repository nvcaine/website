import { Construct } from 'constructs';
import { StackProps } from 'aws-cdk-lib/core';
import { Bucket, BucketProps, IBucket } from 'aws-cdk-lib/aws-s3';
import { Certificate, ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
    AllowedMethods,
    BehaviorOptions,
    Distribution,
    DistributionProps,
    IDistribution,
    ViewerProtocolPolicy
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
import {
    ARecord,
    ARecordProps,
    HostedZone,
    HostedZoneAttributes,
    IHostedZone,
    RecordTarget
} from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';

export class AppStack extends AbstractConfigStack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, 'rhc', props);

        const bucket: IBucket = this.getS3Bucket();
        const ipSetV6: IIPSetRef = this.getIpSetV6();
        const ipSetV4: IIPSetRef = this.getIpSetV4();
        const webAcl: IWebACLRef = this.getWebAcl(ipSetV6, ipSetV4);
        const distribution: IDistribution = this.getDistribution(
            bucket,
            webAcl
        );

        this.getARecord(distribution);
    }

    private getS3Bucket(): IBucket {
        const bucketName: string = this.config.get('s3.name');
        const props: BucketProps = {
            bucketName
        };

        return new Bucket(this, this.getId('bucket'), props);
    }

    private getIpSetV6(): IIPSetRef {
        const props: CfnIPSetProps = this.config.get('acl.ipSetV6');

        return new CfnIPSet(this, this.getId('IPSetV6'), props);
    }

    private getIpSetV4(): IIPSetRef {
        const props: CfnIPSetProps = this.config.get('acl.ipSetV4');

        return new CfnIPSet(this, this.getId('IPSetV4'), props);
    }

    private getWebAcl(ipSetV6: IIPSetRef, ipSetV4: IIPSetRef): IWebACLRef {
        const configProps: any = this.config.get('acl.props');
        const props: CfnWebACLProps = {
            ...configProps,
            rules: this.getAclRules(ipSetV6, ipSetV4)
        };

        return new CfnWebACL(this, this.getId('acl'), props);
    }

    /**
     * Create a RuleProperty object
     * @param arn the ARN of the IP Set
     * @param name the name of the rule
     * @param priority rule priority
     * @param metricName the name of the metric for CloudWatch
     * @private
     */
    private getIpSetRule(
        arn: string,
        name: string,
        priority: number,
        metricName: string
    ): CfnWebACL.RuleProperty {
        return {
            name,
            action: {
                allow: {}
            },
            priority,
            visibilityConfig: {
                sampledRequestsEnabled: true,
                cloudWatchMetricsEnabled: true,
                metricName
            },
            statement: {
                ipSetReferenceStatement: {
                    arn
                }
            }
        };
    }

    /**
     * Create a list of rules for allowing traffic using IPV6 and IPV4 addresses
     * @param ipSetV6 list V6 IPs to allow access to
     * @param ipSetV4 list V4 IPs to allow access to
     * @private
     */
    private getAclRules(
        ipSetV6: IIPSetRef,
        ipSetV4: IIPSetRef
    ): CfnWebACL.RuleProperty[] {
        return [
            this.getIpSetRule(
                ipSetV6.ipSetRef.ipSetArn,
                'ipSetV6AllowList',
                0,
                'rhc_acl_metric_ipv6'
            ),
            this.getIpSetRule(
                ipSetV4.ipSetRef.ipSetArn,
                'ipSetV4AllowList',
                1,
                'rhc_acl_metric_ipv4'
            )
        ];
    }

    private getDistribution(bucket: IBucket, acl: IWebACLRef): IDistribution {
        const props: DistributionProps = {
            certificate: this.getCertificate(),
            defaultBehavior: this.getDefaultBehavior(bucket),
            errorResponses: this.config.get('cloudfront.errorResponses'),
            webAclId: acl.webAclRef.webAclId,
            domainNames: this.config.get('cloudfront.domainNames')
        };

        return new Distribution(this, this.getId('cdn'), props);
    }

    private getDefaultBehavior(bucket: IBucket): BehaviorOptions {
        const originPath: string = this.config.get('s3.path');
        const props: S3BucketOriginWithOACProps = {
            originPath
        };

        return {
            origin: S3BucketOrigin.withOriginAccessControl(bucket, props),
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            allowedMethods: AllowedMethods.ALLOW_GET_HEAD
        };
    }

    private getCertificate(): ICertificate {
        const certificateArn: string = this.config.get('cloudfront.certArn');

        return Certificate.fromCertificateArn(
            this,
            this.getId('certificate'),
            certificateArn
        );
    }

    private getHostedZone(): IHostedZone {
        const attributes: HostedZoneAttributes =
            this.config.get('route53.hostedZone');

        return HostedZone.fromHostedZoneAttributes(
            this,
            this.getId('zone'),
            attributes
        );
    }

    private getARecord(distribution: IDistribution): ARecord {
        const zone: IHostedZone = this.getHostedZone();
        const props: ARecordProps = {
            zone,
            recordName: this.config.get('route53.name'),
            target: RecordTarget.fromAlias(new CloudFrontTarget(distribution))
        };

        return new ARecord(this, this.getId('record'), props);
    }
}
