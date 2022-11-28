### Serverless Framework
* [Serverless single page application](https://github.com/serverless/examples/tree/v3/aws-node-single-page-app-via-cloudfront)
* [serverless-single-page-app-plugin](https://github.com/jonathanconway/serverless-single-page-app-plugin)
* [Serverless offline](https://www.serverless.com/plugins/serverless-offline)
* [Package and deploy any frontend with your serverless backend.](https://www.serverless.com/plugins/serverless-frontend-plugin)
* [Serverless S3 local](https://www.serverless.com/plugins/serverless-s3-local)
* [AWS CI/CD Pipeline to Deploy a Serverless Framework Project](https://www.serverlessguru.com/blog/aws-ci-cd-pipeline-to-deploy-a-serverless-framework-project)
* [Full Stack Serverless CI/CD On AWS With The Serverless Framework – Part 2](https://cevo.com.au/post/full-stack-serverless-ci-cd-on-aws-with-the-serverless-framework-part-2/)
* [Tutorial: Create a pipeline that publishes your serverless application to the AWS Serverless Application Repository](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-serverlessrepo-auto-publish.html)


#### Deployment setup from a remote to AWS.
##### Requirements
* [Node.js version 16.x](https://nodejs.org/en/about/releases/#releases)
* [Setting Up Serverless Framework With AWS](https://www.serverless.com/framework/docs/getting-started)
##### Deployment steps
```
# Install the serverless CLI
> npm install -g serverless
> npm install
> npm run build

# Configure serverless with AWS
# AWS requirements:
# Create a IAM user group, afterwards assign AdministratorAccess Policya  /
# Create an IAM user, afterwards assign it to the previously created user group.
# For the newley created user, generate your AWS Access keys for CLI: Access Key and Secrets Key.
> serverless config credentials \
  --provider aws \
  --key your_aws_access_key \
  --secret your_aws_secrets_key

# Deploy the stack to a specific region.
> serverless deploy --region eu-central-1 --verbose

# Upload static files to s3
> serverless syncToS3 --region eu-central-1

# The domain name from the CloudFront will be printed in the console.
> serverless domainInfo --region eu-central-1

# Remove stack
> serverless remove --region eu-central-1 --verbose
```

#### Deployment setup from GitHub to AWS.
