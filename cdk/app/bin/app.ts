#!/usr/bin/env node
import { App } from 'aws-cdk-lib/core';
import { AppStack } from '../lib/AppStack';

const app: App = new App();

new AppStack(app, 'AppStack', {
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT
    }
    /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
