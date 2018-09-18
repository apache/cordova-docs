---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-lib Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-lib 8.1.0` was released in September 2018.

## Release Highlights

The purpose of this release is to resolve `npm audit` issues, use recent releases of cordova-android and cordova-windows, and include some other recent updates.  Here are the important changes:

* [GH-691](https://github.com/apache/cordova-lib/pull/691) update to use cordova-windows@~6.0.x by default
* [GH-646](https://github.com/apache/cordova-lib/pull/646) Update **Android** platform to latest release
* [CB-14148](https://issues.apache.org/jira/browse/CB-14148) remove nonsense "www" platform from Cordova listing ([GH-620](https://github.com/apache/cordova-lib/pull/620))
* [CB-14243](https://issues.apache.org/jira/browse/CB-14243) change dash to underscore for save-exact key reference ([GH-631](https://github.com/apache/cordova-lib/pull/631))
* [GH-630](https://github.com/apache/cordova-lib/pull/630) Improve plugman/uninstall.js messages
* [GH-628](https://github.com/apache/cordova-lib/pull/621) Fix promise handling when removing multiple plugins
* [CB-14033](https://issues.apache.org/jira/browse/CB-14033) Support symbolic dir links on **Windows** ([GH-621](https://github.com/apache/cordova-lib/pull/621))
* [CB-13055](https://issues.apache.org/jira/browse/CB-13055) Fold all fetch options to `true` ([GH-624](https://github.com/apache/cordova-lib/pull/624))
* [GH-617](https://github.com/apache/cordova-lib/pull/617) Set the fetch option to true in plugman
* [CB-13532](https://issues.apache.org/jira/browse/CB-13532) Find plugins in devDependencies
* [GH-611](https://github.com/apache/cordova-lib/pull/611) Fix ElementTree error about unclosed XML tag
* [GH-611](https://github.com/apache/cordova-lib/pull/611) Dependency cleanup - update and remove several dependencies
* [GH-693](https://github.com/apache/cordova-lib/pull/693) Add **browser** default engine

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
