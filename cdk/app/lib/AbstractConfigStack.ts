import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib/core';

import config from 'config';

export abstract class AbstractConfigStack extends Stack {
    protected readonly config: any;

    protected constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        this.config = config;
    }
}
