# Github API

## Getting Started

Sign in to aws cli via sso or credentials.

### Building the frontend

```bash
cd github-api-fe/
cp .env.example .env # Put in GH token
npm install
npm run build
```

### Deploying

```bash
cd infra/
npm install
# Bootstrap your aws environment, will set up role, cloudformation bucket,etc
# More information can be found in the CDKToolkit stack
cdk bootstrap
# Builds cloudformation, can be found in cdk.out
cdk synth
# Deploy cloudformation stack, cloudfront url in outputs
# NOTE: this takes about 5 minutes to deploy
cdk deploy
# Teardown
cdk destroy
```

![Cloudformation Output](./images/Screen%20Shot%202022-02-27%20at%209.20.40%20AM.png)

## Next Steps

- Have `npm run build` run in a docker container and then use codebuild / code pipeline to deploy on a git hook.
- Have `/` redirect to a github user
- Error handling for user not found
- Pagination for repos greater than 30

## Stack

Frontend: create-react-app, grommmet
Backend: cdk
