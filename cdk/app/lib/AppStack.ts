import { Construct } from 'constructs';
import { ClientStack } from './ClientStack';
import { CfnElement, Stack, StackProps } from 'aws-cdk-lib/core';

export class AppStack extends Stack {
    public constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        new ClientStack(this, 'Client', {
            ...props,
            description: 'RHC client infrastructure',
            stackName: 'Client'
        });
    }

    public override getLogicalId(element: CfnElement): string {
        const regex: RegExp = /([a-zA-Z0-9]+)\.NestedStackResource/;

        if (element.node.id.includes('NestedStackResource'))
            return regex.exec(element.node.id)![1];

        return super.getLogicalId(element);
    }
}
