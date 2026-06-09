import { Construct } from 'constructs';
import { NestedStack, StackProps } from 'aws-cdk-lib/core';

export class AbstractNestedStack extends NestedStack {
    protected readonly simpleId: string;

    protected constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        this.simpleId = id;
    }

    protected getId(postfix: string): string {
        return this.simpleId + '.' + postfix;
    }
}
