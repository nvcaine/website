NODE_VERSION=$(node -p -e "require('./package.json').version")
#echo $NODE_VERSION

aws s3 sync ./out s3://rhc-app-files-stage/latest --delete --exact-timestamps --profile stage --dryrun
aws s3 sync ./out s3://rhc-app-files-stage/$NODE_VERSION --delete --exact-timestamps --profile stage --dryrun
