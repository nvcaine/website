import * as path from 'node:path';
import { Construct } from 'constructs';
import { RemovalPolicy, StackProps } from 'aws-cdk-lib/core';
import { AbstractConfigStack } from './AbstractConfigStack';
import { Bucket, BucketProps, IBucket } from 'aws-cdk-lib/aws-s3';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { ILogGroup, LogGroup, LogGroupProps } from 'aws-cdk-lib/aws-logs';
import { Certificate, ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
    S3BucketOrigin,
    S3BucketOriginWithOACProps
} from 'aws-cdk-lib/aws-cloudfront-origins';
import {
    CfnIPSet,
    CfnIPSetProps,
    CfnLoggingConfiguration,
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
    Function,
    IDistribution,
    IOrigin,
    ViewerProtocolPolicy,
    FunctionProps,
    FunctionCode,
    IFunction,
    FunctionAssociation,
    FunctionEventType
} from 'aws-cdk-lib/aws-cloudfront';

interface CustomFunctionAssociation {
    comment: string;
    eventType: FunctionEventType;
    functionName: string;
}

export class ClientStack extends AbstractConfigStack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const bucket: IBucket = this.getS3Bucket();
        const rules: CfnWebACL.RuleProperty[] = this.getRules();
        const logGroup: ILogGroup = this.getLogGroup();
        const webAcl: IWebACLRef = this.getWebAcl(rules);
        const { webAclArn } = webAcl.webAclRef;
        const origin: IOrigin = this.getOrigin(bucket);
        const associations: FunctionAssociation[] = this.getAssociations();
        const certificate: ICertificate = this.getCertificate();
        const distribution: IDistribution = this.getDistribution(
            webAclArn,
            origin,
            certificate,
            associations
        );
        const zone: IHostedZone = this.getHostedZone();
        const target: RecordTarget = this.getRecordTarget(distribution);

        this.getARecord(zone, target);
        this.getAaaaRecord(zone, target);
        this.getLogConfig(webAclArn, logGroup.logGroupArn);
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
     * Create a log group to integrate with the Web ACL
     * @private
     */
    private getLogGroup(): ILogGroup {
        const props: LogGroupProps = this.config.get('acl.logs');

        return new LogGroup(this, this.getId('acllogs'), props);
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
     * Create a CloudFront function by reading the code from the file with the same name
     * @param functionName the name of the function; needs to match the file in the cf-functions folder
     * @param comment the description of the function
     * @private
     */
    private getCloudFrontFunction(
        functionName: string,
        comment?: string
    ): IFunction {
        const filePath: string = path.join(
            __dirname,
            'cf-functions',
            functionName + '.js'
        );
        const code: FunctionCode = FunctionCode.fromFile({
            filePath
        });
        const props: FunctionProps = {
            autoPublish: true,
            code,
            comment,
            functionName
        };

        return new Function(this, this.getId('cffunction'), props);
    }

    /**
     * Parse the function associations list and create the functions from files
     * @private
     */
    private getAssociations(): FunctionAssociation[] {
        const functions: CustomFunctionAssociation[] = this.config.get(
            'cloudfront.functions'
        );
        const mapper = (
            value: CustomFunctionAssociation
        ): FunctionAssociation => {
            const { comment, eventType, functionName } = value;

            return {
                function: this.getCloudFrontFunction(functionName, comment),
                eventType
            };
        };

        return functions.map(mapper);
    }

    /**
     * Create a CloudFront distribution
     * @param webAclId the access control list ID
     * @param origin the default behavior origin object
     * @param certificate the TLS certificate
     * @param functionAssociations the CloudFront functions to associate with the default behaviour
     * @private
     */
    private getDistribution(
        webAclId: string,
        origin: IOrigin,
        certificate?: ICertificate,
        functionAssociations?: FunctionAssociation[]
    ): IDistribution {
        const configProps: Object = this.config.get('cloudfront.props');
        const defaultBehavior: BehaviorOptions = {
            origin,
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
            functionAssociations
        };
        const props: DistributionProps = {
            ...configProps,
            certificate,
            defaultBehavior,
            webAclId
        };

        return new Distribution(this, this.getId('cdn'), props);
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
     * Callback function for creating a WAF rule from an IP set
     * @param props
     * @param priority
     * @private
     */
    private ipSetParser(
        props: CfnIPSetProps,
        priority: number
    ): CfnWebACL.RuleProperty {
        const { ipAddressVersion } = props;
        const postFix: string = ipAddressVersion === 'IPV6' ? 'V6' : 'V4';
        const setId: string = this.getId('IPSet' + postFix);
        const set: IIPSetRef = new CfnIPSet(this, setId, props);
        const ruleName: string = 'allowList' + ipAddressVersion;
        const metricName: string = 'rhc_acl_metric_' + ipAddressVersion;

        return this.getIpSetRule(
            set.ipSetRef.ipSetArn,
            ruleName,
            priority,
            metricName
        );
    }

    /**
     * Create the ACL rules
     * @private
     */
    private getRules(): CfnWebACL.RuleProperty[] {
        const ipSetInfo: CfnIPSetProps[] = this.config.get('acl.ipSets');
        const ipSetRules: CfnWebACL.RuleProperty[] = ipSetInfo.map(
            this.ipSetParser,
            this
        );

        return [...ipSetRules, ...this.config.get('acl.rules')];
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

    private getRecordTarget(distribution: IDistribution): RecordTarget {
        return RecordTarget.fromAlias(new CloudFrontTarget(distribution));
    }

    /**
     * Create an A record to add a custom domain for the distribution
     * @param zone the hosted zone used to create the domain record
     * @param target the target object that the record points to
     * @private
     */
    private getARecord(zone: IHostedZone, target: RecordTarget): ARecord {
        const props: ARecordProps = {
            zone,
            target
        };

        return new ARecord(this, this.getId('record'), props);
    }

    /**
     * Create an AAAA record to add a custom domain for the distribution
     * @param zone the hosted zone used to create the domain record
     * @param target the target object that the record points to
     * @private
     */
    private getAaaaRecord(zone: IHostedZone, target: RecordTarget): AaaaRecord {
        const props: AaaaRecordProps = {
            zone,
            target
        };

        return new AaaaRecord(this, this.getId('aaaarecord'), props);
    }

    /**
     * Create logging configuration for a supporting resource
     * @param resourceArn the resource to configure for logging
     * @param logGroupArn the destination log group
     * @private
     */
    private getLogConfig(
        resourceArn: string,
        logGroupArn: string
    ): CfnLoggingConfiguration {
        return new CfnLoggingConfiguration(this, this.getId('logconfig'), {
            resourceArn,
            logDestinationConfigs: [logGroupArn]
        });
    }
}
