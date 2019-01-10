---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Create 2.0.0 Released!"
categories: news
tags: release tools
---

We are happy to announce that we have just released an update to `cordova-create`! This is one of the libraries used behind-the-scenes for creating Cordova style projects and incudes support for Cordova templates.

* [cordova-create@2.0.0](https://www.npmjs.com/package/cordova-create)

## Release Highlights

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-36](https://github.com/apache/cordova-create/pull/36), [GH-38](https://github.com/apache/cordova-create/pull/38) Updated Cordova Package Dependencies (`cordova-common@^3.1.0`)
* [GH-35](https://github.com/apache/cordova-create/pull/36), [GH-38](https://github.com/apache/cordova-create/pull/38) Updated External Package Dependencies
* [GH-33](https://github.com/apache/cordova-create/pull/33) Drop `Q`, use native promises
* [GH-28](https://github.com/apache/cordova-create/pull/28) Commit `package-lock.json`
* [GH-20](https://github.com/apache/cordova-create/pull/20) Non-breaking cleanup & improvements
* [GH-19](https://github.com/apache/cordova-create/pull/19) [CB-14140](https://issues.apache.org/jira/browse/CB-14140) Use `fs-extra` instead of `shelljs`
* [GH-18](https://github.com/apache/cordova-create/pull/18) Drop support for reading from `.cordova/config.json`
* [GH-15](https://github.com/apache/cordova-create/pull/15) Fix error messages for toExist matcher
* [GH-13](https://github.com/apache/cordova-create/pull/13) Major code cleanup (Remove deadcode, cleanup, refactor, update dependencies, etc.)
* [GH-12](https://github.com/apache/cordova-create/pull/12) Update node versions for CI and drop support for node 4