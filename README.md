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
# This is optional as cdk deploy also does this. Sometimes its useful to look at the cloudformation before it deploys, particularly to see some of the items that can be abstracted away.
cdk synth
# Deploy cloudformation stack, cloudfront url in outputs
# NOTE: this takes about 5 minutes to deploy
cdk deploy
# Teardown
cdk destroy
```

![Cdk Deploy Output](./images/Screen%20Shot%202022-02-27%20at%2010.49.38%20AM.png)

![Cloudformation Output](./images/Screen%20Shot%202022-02-27%20at%209.20.40%20AM.png)

Put this into your browzer where url path is github account: `d329wkepyps7wt.cloudfront.net/ConorWright`

## Get Repos

Get repos implemented with python.

```bash
# Install pipenv to manage deps
pip install --user pipenv
pipenv shell
python get_repos.py
exit # To leave your virtual environment
```

Tested with [webpack](https://github.com/webpack) repo. There are 49 repos here which are displayed in the count. The `requests.json()` returns an array which we merge together and count. If you remove the `len()` you can see the repos. If it returns a count of 2, you have probably hit the github api requests limit and need to add your token to the request. See `github-api-fe` for how this is done.

## Next Steps

- Have `npm run build` run in a docker container and then use codebuild / code pipeline to deploy on a git hook.
- Have `/` redirect to a github user
- Error handling for user not found
- Pagination for repos greater than 30 (Done in python)
- Break out InfraStack into a frontend deploy stack
- Move python code to a lambda function backed by api gateway and have frontend call it.

## Stack

Frontend: create-react-app, grommet
Backend: cdk
