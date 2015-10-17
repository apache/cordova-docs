---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: September 9th, 2015"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@5.3.1](https://www.npmjs.org/package/cordova-lib)
* [cordova@5.3.1](https://www.npmjs.org/package/cordova)
* [plugman@1.0.2](https://www.npmjs.org/package/plugman)
* [cordova-js@4.1.1](https://www.npmjs.org/package/cordova-js)

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova

  * If you have `plugman` installed:

        npm install -g plugman

<!--more-->

# Changes include:

## Platform updates
When adding these platforms to your project, the following versions are now used by default.
These platform versions were released recently, and the tools' defaults were updated:

* [Cordova Windows ~4.1.0](http://cordova.apache.org/announcements/2015/08/18/cordova-windows-4.1.0.html)
* [Cordova Browser ~4.0.0](https://github.com/apache/cordova-browser/blob/master/RELEASENOTES.md#400-aug-13-2015)
* [Cordova WebOS ~3.7.0](https://github.com/apache/cordova-webos/blob/master/RELEASENOTES.md#370)
* [Cordova Blackberry10 ~3.8.0](http://cordova.apache.org/announcements/2015/09/05/cordova-blackberry-3.8.0.html)

## cordova-lib
* pinned browser@~4.0.0, windows@~4.1.0, blackberry10@~3.8.0, webos@~3.7.0
* [CB-9559](https://issues.apache.org/jira/browse/CB-9559) Adding a plugin with caret in version results in an error
* Update cordova-serve required version to 0.1.3.
* [CB-6506](https://issues.apache.org/jira/browse/CB-6506) RTC: Add support for **OSX** (closes #278)
* [CB-9517](https://issues.apache.org/jira/browse/CB-9517) Adding a plugin on **iOS/OSX** that uses a private framework does not work (closes #281)
* [CB-9549](https://issues.apache.org/jira/browse/CB-9549) Removes excess JS files from browserified app
* [CB-9505](https://issues.apache.org/jira/browse/CB-9505) Correct plugin modules loading within browserify flow
* [CB-8532](https://issues.apache.org/jira/browse/CB-8532) Adding Windows Plugin Failed with "Cannot read property 'text' of null" Updated elementtree API according 0.1.6 release. This closes #277

## cordova-cli
* Updated cordova-lib dependency to 5.3.1

## cordova-js
* [CB-9505](https://issues.apache.org/jira/browse/CB-9505) Correct plugin modules loading within browserify flow. This closes #126
* [CB-9342](https://issues.apache.org/jira/browse/CB-9342) Fix deviceReady event not fired on **Windows 10** in hosted environment

## plugman
* Updated cordova-lib dependency to 5.3.1
* [CB-7143](https://issues.apache.org/jira/browse/CB-7143) Added support for **OSX**

## Pinned Platform Versions for **Cordova CLI 5.3.1**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~4.1.0 (4.1.1)
* Cordova BlackBerry10: ~3.8.0
* Cordova Browser: ~4.0.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~3.9.0 (3.9.1)
* Cordova Ubuntu: ~4.0.0
* Cordova Windows: ~4.1.0
* Cordova WP8: ~3.8.1
* Cordova Webos: ~3.7.0

Other News:

* [plugins.cordova.io](http://plugins.cordova.io) has switched to read-only and will be shutting down Oct.15th. Plugin authors, please move your plugins to npm! Read more [here](http://cordova.apache.org/news/2015/09/08/CPR-readonly.html).

Come chat with us about Cordova development on our slack channel! Sign up at [slack.cordova.io](http://slack.cordova.io).
