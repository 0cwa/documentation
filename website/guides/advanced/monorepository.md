---
last_modified_on: "2021-12-15"
$schema: "/.meta/.schemas/guides.json"
title: Mono repository
description: How to deploy applications using Monorepository with Qovery
author_github: https://github.com/pjeziorowski
tags: ["type: guide", "technology: qovery"]
---

import Alert from '@site/src/components/Alert';

import Steps from '@site/src/components/Steps';

Qovery provides a very simple way of working with [monorepositories](https://en.wikipedia.org/wiki/Monorepo).
You can deploy multiple applications using the same git repository or deploy the same application in many different modes/configurations.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/advanced/monorepository.md.erb
-->

## Deploying multiple applications using one repository

<Steps headingDepth={3}>

<ol>
<li>

Navigate to [Console][urls.qovery_console]

</li>

<li>

[Create new applications](https://hub.qovery.com/guides/getting-started/deploy-your-first-application/) or navigate to existing ones

</li>

<li>

Navigate to application settings

<p align="center">
  <img src="/img/monorepo/monorepo-6.png" alt="Monorepository" />
</p>

</li>

<li>

To deploy multiple apps using one repository, set up the app to target your monorepo. Additionally, you need to set up the folder in which your application resides.

### First application

<p align="center">
  <img src="/img/monorepo/monorepo-1.png" alt="Monorepository" />
</p>

### Second application

<p align="center">
  <img src="/img/monorepo/monorepo-2.png" alt="Monorepository" />
</p>

As you see in the examples above, we used one repository (`poc-factory/tweetifier`) in two applications:

- timescale
- core

All we need to do to deploy multiple applications using one repository is:

- Select the application name
- Select our repository
- Select the application root folder

That's it. Using monorepositories with Qovery is that simple. 

Those applications may be a part of the same project or different projects; it's all up to you and your configuration.

<Alert type="info">
  Each commit to the repository will make sure all applications affected will be redeployed and up-to-date.
</Alert>

</li>
</ol>
</Steps>

## Deploying application with multiple configurations using one repository

A special case of monorepository is a situation when one repository is used to deploy multiple applications with the same source code but different configurations or modes. Application behaviour depends on provided config, like environment variables and secrets.

Qovery supports this case well. The steps do not differ much from the steps from the previous example:

<Steps headingDepth={3}>
<ol>
<li>

Navigate to [Console][urls.qovery_console]

</li>

<li>

[Create new applications](https://hub.qovery.com/guides/getting-started/deploy-your-first-application/) or navigate to existing ones

</li>

<li>

Navigate to application settings

<p align="center">
  <img src="/img/monorepo/monorepo-6.png" alt="Monorepository" />
</p>

</li>
<li>

Configure application repositories:

### First application

<p align="center">
    <img src="/img/monorepo/monorepo-3.png" alt="Monorepository" />
</p>

### Second application
  
<p align="center">
    <img src="/img/monorepo/monorepo-4.png" alt="Monorepository" />
</p>    

</li>

As you see in the examples above, we used one repository (`poc-factory/tweetifier`) in two applications:

- app-1
- app-2

<br/>

Those applications use the same application root path - `/`, so they can be build using the same source code. To adjust the behavior of applications to meet your needs, use [environment variables or secrets][docs.using-qovery.configuration.environment-variable].
It allows you to run multiple applications using the same source code in different modes.

You can set up secret or env variables in your application `Environment Variables` section:

<p align="center">
    <img src="/img/monorepo/monorepo-5.png" alt="Monorepository" />
</p>    

</ol>
</Steps>


[docs.using-qovery.configuration.environment-variable]: /docs/using-qovery/configuration/environment-variable/
[urls.qovery_console]: https://console.qovery.com
