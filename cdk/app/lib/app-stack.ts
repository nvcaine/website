import { Stack, StackProps } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';

export class AppStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const d = new Distribution(this, '', {
            defaultBehavior: {
                origin: {}
            }
        });
    }
}
