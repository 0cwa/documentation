---
last_modified_on: "2021-10-19"
title: NodeJS
description: Learn how to build your NodeJS application with Buildpacks on Qovery
---

The [NodeJS buildpack](https://github.com/heroku/nodejs-npm-buildpack) detects
if your build is Node by looking for a `package.json` file. If found, the build
will execute the following NPM (or Yarn) commands.

```bash
npm install
npm build
```

If no Procfile is found, a web process will be started with `npm start`
.

You can customize the node version using the [engines field](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines) of your `package.json`. For example

```json
{
  "engines": {
    "node": ">=0.10.3 <15"
  }
}
```


