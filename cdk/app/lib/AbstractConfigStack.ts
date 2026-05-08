import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib/core';

import config from 'config';

export abstract class AbstractConfigStack extends Stack {
    protected readonly config: any;
    protected readonly prefix: string;

    protected constructor(
        scope: Construct,
        id: string,
        prefix: string,
        props?: StackProps
    ) {
        super(scope, id, props);

        this.config = config;
        this.prefix = prefix;
    }

    protected getId(postfix: string): string {
        return this.prefix + '.' + postfix;
    }
}
