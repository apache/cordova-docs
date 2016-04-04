---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Tools Release"
categories: news
tags: release tools
---

New patch update of `cordova-cli` and `cordova` are now live!

* [cordova-lib@6.1.1](https://www.npmjs.org/package/cordova-lib)
* [cordova@6.1.1](https://www.npmjs.org/package/cordova)
* [plugman@1.2.1](https://www.npmjs.org/package/plugman)

We had to fix a few issues that were discovered with the recent 6.1.0 release.

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova@latest

  * If you have `plugman` installed:

        npm install -g plugman@latest

<!--more-->
# Changes include:

## cordova-lib

* [CB-10961](https://issues.apache.org/jira/browse/CB-10961) Error no such file or directory adding ios platform when plugins present or required
* [CB-10908](https://issues.apache.org/jira/browse/CB-10908) Reload the config.xml before writing the saved plugin

## cordova-cli

* [CB-10980](https://issues.apache.org/jira/browse/CB-10980) updated cordova-lib dependency to 6.1.1

Also the error was fixed when `cordova --version` reports `undefined` version of `cordova-lib`

## plugman

* [CB-10980](https://issues.apache.org/jira/browse/CB-10980) updated cordova-lib dependency to 6.1.1

## Pinned Platform Versions for **Cordova CLI 6.1.1**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~5.1.1
* Cordova BlackBerry10: ~3.8.0
* Cordova Browser: ~4.1.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~4.1.0
* Cordova OSX: ~4.0.1
* Cordova Ubuntu: ~4.3.3
* Cordova Windows: ~4.3.1
* Cordova WebOS: ~3.7.0
* Cordova WP8: ~3.8.2
