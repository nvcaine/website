import { Construct } from 'constructs';
import { RemovalPolicy, StackProps } from 'aws-cdk-lib/core';
import { AbstractConfigStack } from './AbstractConfigStack';
import { Bucket, BucketProps, IBucket } from 'aws-cdk-lib/aws-s3';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Certificate, ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
    S3BucketOrigin,
    S3BucketOriginWithOACProps
} from 'aws-cdk-lib/aws-cloudfront-origins';
import {
    CfnIPSet,
    CfnIPSetProps,
    CfnWebACL,
    CfnWebACLProps,
    IIPSetRef,
    IWebACLRef
} from 'aws-cdk-lib/aws-wafv2';
import {
    AaaaRecord,
    AaaaRecordProps,
    ARecord,
    ARecordProps,
    HostedZone,
    HostedZoneAttributes,
    IHostedZone,
    RecordTarget
} from 'aws-cdk-lib/aws-route53';
import {
    AllowedMethods,
    BehaviorOptions,
    Distribution,
    DistributionProps,
    ErrorResponse,
    IDistribution,
    IOrigin,
    ViewerProtocolPolicy
} from 'aws-cdk-lib/aws-cloudfront';

export class ClientStack extends AbstractConfigStack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const bucket: IBucket = this.getS3Bucket();
        const ipSetV6: IIPSetRef = this.getIpSetV6();
        const ipSetV4: IIPSetRef = this.getIpSetV4();
        const rules: CfnWebACL.RuleProperty[] = this.getRules(
            ipSetV6.ipSetRef.ipSetArn,
            ipSetV4.ipSetRef.ipSetArn
        );
        const webAcl: IWebACLRef = this.getWebAcl(rules);
        const origin: IOrigin = this.getOrigin(bucket);
        const certificate: ICertificate = this.getCertificate();
        const distribution: IDistribution = this.getDistribution(
            webAcl.webAclRef.webAclArn,
            origin,
            certificate
        );
        const zone: IHostedZone = this.getHostedZone();

        this.getARecord(zone, distribution);
        this.getAaaaRecord(zone, distribution);
    }

    /**
     * Create a bucket using the name in the config
     * @private
     */
    private getS3Bucket(): IBucket {
        const bucketName: string = this.config.get('s3.name');
        const props: BucketProps = {
            bucketName,
            removalPolicy: RemovalPolicy.DESTROY
        };

        return new Bucket(this, this.getId('bucket'), props);
    }

    /**
     * Create a version 6 IP set
     * @private
     */
    private getIpSetV6(): IIPSetRef {
        const props: CfnIPSetProps = this.config.get('acl.ipSetV6');

        return new CfnIPSet(this, this.getId('IPSetV6'), props);
    }

    /**
     * Create a version 4 IP set
     * @private
     */
    private getIpSetV4(): IIPSetRef {
        const props: CfnIPSetProps = this.config.get('acl.ipSetV4');

        return new CfnIPSet(this, this.getId('IPSetV4'), props);
    }

    /**
     * Create web access control list
     * @param rules the list of rules to attach to the ACL
     * @private
     */
    private getWebAcl(rules: CfnWebACL.RuleProperty[]): IWebACLRef {
        const configProps: any = this.config.get('acl.props');
        const props: CfnWebACLProps = {
            ...configProps,
            rules
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
            action: {
                allow: {}
            },
            name,
            priority,
            visibilityConfig: {
                cloudWatchMetricsEnabled: true,
                metricName,
                sampledRequestsEnabled: true
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
     * @param ipSetV6Arn the ARN of the version 6 IP set
     * @param ipSetV4Arn the ARN of the version 4 IP set
     * @private
     */
    private getRules(
        ipSetV6Arn: string,
        ipSetV4Arn: string
    ): CfnWebACL.RuleProperty[] {
        return [
            this.getIpSetRule(
                ipSetV6Arn,
                'ipSetV6AllowList',
                0,
                'rhc_acl_metric_ipv6'
            ),
            this.getIpSetRule(
                ipSetV4Arn,
                'ipSetV4AllowList',
                1,
                'rhc_acl_metric_ipv4'
            )
        ];
    }

    /**
     * Create a CloudFront distribution
     * @param webAclId the access control list ID
     * @param origin the default behavior origin object
     * @param certificate the TLS certificate
     * @private
     */
    private getDistribution(
        webAclId: string,
        origin: IOrigin,
        certificate?: ICertificate
    ): IDistribution {
        const errorResponses: ErrorResponse[] = this.config.get(
            'cloudfront.errorResponses'
        );
        const domainNames: string[] = this.config.get('cloudfront.domainNames');
        const defaultRootObject: string | undefined = this.config.get(
            'cloudfront.defaultRootObject'
        );
        const defaultBehavior: BehaviorOptions = {
            origin,
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            allowedMethods: AllowedMethods.ALLOW_GET_HEAD
        };
        const props: DistributionProps = {
            certificate,
            defaultBehavior,
            // errorResponses,
            defaultRootObject,
            webAclId,
            domainNames
        };

        return new Distribution(this, this.getId('cdn'), props);
    }

    /**
     * Create a distribution origin object for a given bucket
     * @param bucket the bucket to use an origin for the default behavior of the distribution
     * @private
     */
    private getOrigin(bucket: IBucket): IOrigin {
        const originPath: string = this.config.get('s3.path');
        const props: S3BucketOriginWithOACProps = {
            originPath
        };

        return S3BucketOrigin.withOriginAccessControl(bucket, props);
    }

    /**
     * Create a certificate object
     * @private
     */
    private getCertificate(): ICertificate {
        const certificateArn: string = this.config.get(
            'cloudfront.certificateArn'
        );

        return Certificate.fromCertificateArn(
            this,
            this.getId('certificate'),
            certificateArn
        );
    }

    /**
     * Get an existing hosted zone object
     * @private
     */
    private getHostedZone(): IHostedZone {
        const attributes: HostedZoneAttributes =
            this.config.get('route53.hostedZone');

        return HostedZone.fromHostedZoneAttributes(
            this,
            this.getId('zone'),
            attributes
        );
    }

    /**
     * Create an A record to add a custom domain for the distribution
     * @param zone the hosted zone used to create the domain record
     * @param distribution the object that the record points to
     * @private
     */
    private getARecord(
        zone: IHostedZone,
        distribution: IDistribution
    ): ARecord {
        const recordName: string = this.config.get('route53.name');
        const target: RecordTarget = RecordTarget.fromAlias(
            new CloudFrontTarget(distribution)
        );
        const props: ARecordProps = {
            zone,
            recordName,
            target
        };

        return new ARecord(this, this.getId('record'), props);
    }

    /**
     * Create an AAAA record to add a custom domain for the distribution
     * @param zone the hosted zone used to create the domain record
     * @param distribution the object that the record points to
     * @private
     */
    private getAaaaRecord(
        zone: IHostedZone,
        distribution: IDistribution
    ): AaaaRecord {
        const recordName: string = this.config.get('route53.name');
        const target: RecordTarget = RecordTarget.fromAlias(
            new CloudFrontTarget(distribution)
        );
        const props: AaaaRecordProps = {
            zone,
            recordName,
            target
        };

        return new AaaaRecord(this, this.getId('aaaarecord'), props);
    }
}
