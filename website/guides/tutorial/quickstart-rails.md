---
last_modified_on: "2021-10-18"
$schema: "/.meta/.schemas/guides.json"
title: Getting started with Rails on Qovery
description: How to quickly deploy a Rails app on Qovery
author_github: https://github.com/pjeziorowski
tags: ["type: guide", "framework: rails",]
hide_pagination: true
---
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';
import Jump from '@site/src/components/Jump';

This tutorial will have you deploying a **Rails** app in minutes.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/tutorial/quickstart-rails.md.erb
-->

## Source Code

In the tutorial, we will use a sample application ready to be deployed on Qovery. To get the application source code, please [fork this repository](https://github.com/Qovery/qovery-ruby-rails-sample).

## App Setup

In [Qovery Console](https://console.qovery.com), choose or create your project and environment. Then, add a new application:

<p>
    <img src="/img/quickstart-1.png" alt="Rails" />
</p>

In **Git Repository**, pick the forked application source code repository.

In the **Port** section type **3000**.

That's it, create!

## Env Vars

The last step is to add a **PORT** environment variable. To do so, navigate to your application and add a new **PORT** variable with value **3000**:

<p>
    <img src="/img/quickstart-3.png" alt="Rails" />
</p>

## Deploy

It's all ready. Click on **Actions** and **Deploy** your application.

## Logs

To see the progress of your deployment and the output of your application, click on **Show Logs** button. You can navigate between build/deployment logs as well as your application runtime logs.

## Push Changes

Now, anytime you push new changes to your repository, Qovery will automatically update your application with the latest code!


