![image](https://user-images.githubusercontent.com/3314957/140314572-9c26fc82-76b4-44b7-9f16-795da179195c.png)
## Quasar App
[![build (16.x)](https://github.com/alecsandrapetruescu/quasar2app/actions/workflows/build.yml/badge.svg)](https://github.com/alecsandrapetruescu/quasar2app/actions/workflows/build.yml)
[![CodeQL](https://github.com/alecsandrapetruescu/quasar2app/actions/workflows/codeql.yml/badge.svg)](https://github.com/alecsandrapetruescu/quasar2app/actions/workflows/codeql.yml)
[![Dependency Review](https://github.com/alecsandrapetruescu/quasar2app/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/alecsandrapetruescu/quasar2app/actions/workflows/dependency-review.yml)
[![license](https://img.shields.io/github/license/alecsandrapetruescu/vue3app)](https://github.com/alecsandrapetruescu/vue3app/blob/main/LICENSE)
> Initially started with Quasar on Codesandbox.io.

![Codesanbox Entry Server Screen](https://cdn.quasar.dev/codesandbox/codesandbox-entry.jpg)

### Purpose
Learn Quasar Framework build with Vue3.

### Motivation
* [7 Reasons to migrate from Vuetify to Quasar Framework](https://medium.com/@charliegilmanuk/7-reasons-to-migrate-from-vuetify-to-quasar-framework-8ea47358262)
* [Composition API](https://v3.vuejs.org/api/composition-api.html)

### Inspiration
- [appsmith](https://www.appsmith.com/)
- [Vue CRUD](https://github.com/what-crud/vue-crud)

### Usage
### Requirements
[Node.js version 16.x](https://nodejs.org/en/about/releases/#releases)

[Install Node.js version 16.x on Ubuntu 20.x](https://gist.github.com/alecsandrapetruescu/9e5d1b02f2a9644b14257c101c8dd332)
### Install the dependencies
```bash
npm install --omit=optional
```

#### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

#### Lint the files

```bash
npm run lint
```

#### Build the app for production

```bash
npm run build
```

### Quasar Repositories

- [Quasar Framework](https://github.com/quasarframework/quasar)

### Resources

- [Component Building with Quasar](https://medium.com/quasar-framework/component-building-with-quasar-fc101b6730ae)
- [Component Building with Quasar - Demo](https://jsfiddle.net/smolinari/mc2s5pk6/)

#### Serverless Framework
* [Serverless single page application](https://github.com/serverless/examples/tree/v3/aws-node-single-page-app-via-cloudfront)
* [serverless-single-page-app-plugin](https://github.com/jonathanconway/serverless-single-page-app-plugin)
* [Serverless offline](https://www.serverless.com/plugins/serverless-offline)
* [Serverless S3 local](https://www.serverless.com/plugins/serverless-frontend-plugin)
* [Package and deploy any frontend with your serverless backend.](https://www.serverless.com/plugins/serverless-s3-local)
* [AWS CI/CD Pipeline to Deploy a Serverless Framework Project](https://www.serverlessguru.com/blog/aws-ci-cd-pipeline-to-deploy-a-serverless-framework-project)
* [Full Stack Serverless CI/CD On AWS With The Serverless Framework – Part 2](https://cevo.com.au/post/full-stack-serverless-ci-cd-on-aws-with-the-serverless-framework-part-2/)
##### Requirements
* [Setting Up Serverless Framework With AWS](https://www.serverless.com/framework/docs/getting-started)
##### Setup
```
# Install the serverless CLI
> npm install -g serverless
> npm install
# Configure serverless
> serverless config credentials \
  --provider aws \
  --key key \
  --secret secrets
# Deploy stack
> serverless deploy --region eu-central-1 --verbose
# Upload static files to s3
> serverless syncToS3 --region eu-central-1
# Domain name from the CloudFront
> serverless domainInfo --region eu-central-1
# Remove stack
> serverless remove --region eu-central-1 --verbose
```

### [Code of conduct](https://javascript-conference.com/code-of-conduct/)

### License

Copyright (c) 2022

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

