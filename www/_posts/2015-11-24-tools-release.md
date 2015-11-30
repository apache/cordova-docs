---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release"
categories: news
tags: release tools
---
New patch update of `cordova-cli` and `cordova` are now live!

* [cordova-lib@5.4.1](https://www.npmjs.org/package/cordova-lib)
* [cordova@5.4.1](https://www.npmjs.org/package/cordova)

We had to fix a few issues that were discovered with the recent 5.4.0 release.

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova@latest

<!--more-->
# Changes include:

## cordova-lib

* [CB-9976](https://issues.apache.org/jira/browse/CB-9976) Reinstall plugins for platforms if they were installed with `cordova@<5.4.0`. 
* [CB-9981](https://issues.apache.org/jira/browse/CB-9981) `path.parse` only available on `node 0.12+`.
* [CB-9987](https://issues.apache.org/jira/browse/CB-9987) Adds compatibility layer for `cordova.raw.*` methods
* [CB-9975](https://issues.apache.org/jira/browse/CB-9975) Fix issue with using `all` as orientation value
* [CB-9984](https://issues.apache.org/jira/browse/CB-9984) Bumps `plist` version and fixes failing `cordova-common` test

## cordova-cli

* [CB-10049](https://issues.apache.org/jira/browse/CB-10049) updated cordova-lib dependency to 5.4.1

## Pinned Platform Versions for **Cordova CLI 5.4.0**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~4.1.0 (4.1.1)
* Cordova BlackBerry10: ~3.8.0
* Cordova Browser: ~4.0.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~3.9.0 (3.9.2)
* Cordova OSX: ~4.0.0
* Cordova Ubuntu: ~4.0.0
* Cordova Windows: ~4.1.0
* Cordova WebOS: ~3.7.0
* Cordova WP8: ~3.8.1
