---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova Android 7.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 7.1.1` has been released! This release fixes various bugs releated to the previous `cordova-android@7.1.0` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform remove android
    cordova platform add android@7.1.1

To add it explicitly:

    cordova platform add android@7.1.1

<!--more-->

## Curated Changelog

* [CB-14101](https://issues.apache.org/jira/browse/CB-14101) Fix Java version check for Java >= 9 ([GH-446](https://github.com/apache/cordova-android/pull/446))
* [GH-445](https://github.com/apache/cordova-android/pull/445): Fix unsafe property access in run.js
* [GH-452](https://github.com/apache/cordova-android/pull/452): Emit log event instead of logging directly
* [CB-14127](https://issues.apache.org/jira/browse/CB-14127) (android) Move google maven repo ahead of jcenter
* [CB-13923](https://issues.apache.org/jira/browse/CB-13923) (android) fix -1 length for compressed files
* [CB-14145](https://issues.apache.org/jira/browse/CB-14145) use cordova-common@2.2.5 and update other dependencies to resolve `npm audit` warnings
* [CB-9366](https://issues.apache.org/jira/browse/CB-9366) log error.stack in cordova.js
