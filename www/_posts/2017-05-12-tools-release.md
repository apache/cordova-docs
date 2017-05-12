---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Released!"
categories: news
tags: release tools
---

We just released a small update to our tools!

* [cordova@7.0.1](https://www.npmjs.org/package/cordova)
* [cordova-lib@7.0.1](https://www.npmjs.org/package/cordova-lib)
* [cordova-create@1.1.1](https://www.npmjs.com/package/cordova-create)

With this release, creating a new cordova app with our default template will include a `package.json` file by default.

To update your cordova CLI:

    npm install -g cordova@latest

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-12773](https://issues.apache.org/jira/browse/CB-12773): fixed incorrect plugin version fetching issue
* [CB-12769](https://issues.apache.org/jira/browse/CB-12769): updated `cordova-create` dependency to 1.1.1
* [CB-12757](https://issues.apache.org/jira/browse/CB-12757): if there's a plugin dependency in `package.json`, use that one for `config.xml`

## cordova-cli

* [CB-12769](https://issues.apache.org/jira/browse/CB-12769): Updated `cordova-lib` dependency to 7.0.1.

## cordova-create

* [CB-12765](https://issues.apache.org/jira/browse/CB-12765) default app `cordova-app-hello-world` is now treated like a template

