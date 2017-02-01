---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Released!"
categories: news
tags: release tools
---

New updates of our tools are now available!

* [cordova@6.5.0](https://www.npmjs.org/package/cordova)
* [cordova-lib@6.5.0](https://www.npmjs.org/package/cordova-lib)
* [plugman@1.4.1](https://www.npmjs.com/package/plugman)
* [cordova-js@4.2.1](https://www.npmjs.com/package/cordova-js)
* [cordova-common@2.0.0](https://www.npmjs.com/package/cordova-common)
* [cordova-create@1.0.2](https://www.npmjs.com/package/cordova-create)
* [cordova-fetch@1.0.2](https://www.npmjs.com/package/cordova-fetch)

To update your cordova CLI:

    npm install -g cordova@latest

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-12018](https://issues.apache.org/jira/browse/CB-12018): updated `jshint` and updated `jasmine` tests to work with `jasmine` instead of `jasmine-node`
* [CB-12314](https://issues.apache.org/jira/browse/CB-12314): updated pinned `cordova-android` to `6.1.1`
* [CB-12261](https://issues.apache.org/jira/browse/CB-12261): fix `subdirectories` deprecated warning always shows and stop fetch caused by [CB-11979](https://issues.apache.org/jira/browse/CB-11979)
* [CB-12284](https://issues.apache.org/jira/browse/CB-12284): Include project root as additional root for static router
* [CB-12088](https://issues.apache.org/jira/browse/CB-12088): Fix misleading warning when adding platform without `Api.js`

## cordova-cli

* [CB-12018](https://issues.apache.org/jira/browse/CB-12018): updated tests to function with `jasmine` instead of `jasmine-node`

## plugman

* [CB-12358](https://issues.apache.org/jira/browse/CB-12358): Updated `cordova-lib` dependency.

## cordova-js

* [CB-12358](https://issues.apache.org/jira/browse/CB-12358): updated deps for release

## cordova-common

* [CB-8978](https://issues.apache.org/jira/browse/CB-8978): Add `resource-file` parsing to `config.xml`
* [CB-12018](https://issues.apache.org/jira/browse/CB-12018): updated `jshint` and updated tests to work with `jasmine@2` instead of `jasmine-node`
* [CB-12163](https://issues.apache.org/jira/browse/CB-12163): Add reference `attrib` to `resource-file` for **Windows**
* Move windows-specific logic to `cordova-windows`
* [CB-12189](https://issues.apache.org/jira/browse/CB-12189): Add implementation attribute to framework

## cordova-fetch

* [CB-12358](https://issues.apache.org/jira/browse/cb-12358): updated cordova-common dep for cordova-fetch to 2.0.0

## cordova-create

* change event from `warn` to `verbose`
* Add github pull request template
