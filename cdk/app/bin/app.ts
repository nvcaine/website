#!/usr/bin/env node
import config from 'config';
import { App } from 'aws-cdk-lib/core';
import { AppStack } from '../lib/AppStack';

const app: App = new App();

new AppStack(app, 'RHCApp', {
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT
    },
    stackName: 'RHCApp',
    description: 'RHC project infrastructure',
    tags: config.get('tags')
});
