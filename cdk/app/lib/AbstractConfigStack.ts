import config from 'config';
import { Construct } from 'constructs';
import { StackProps } from 'aws-cdk-lib/core';
import { AbstractNestedStack } from './AbstractNestedStack';

export abstract class AbstractConfigStack extends AbstractNestedStack {
    protected readonly config: any;

    protected constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        this.config = config;
    }
}
