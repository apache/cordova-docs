---
layout: post
author:
    name: Darryl Pogue
    url: https://twitter.com/dpogue
title:  "Cordova Android 7.1.2 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 7.1.2` has been released! This release fixes various bugs releated to gradle repositories and plugin compatibility.

If you have been staying on Cordova Android 6.x due to compatibility issues with 3rd party plugins, we strongly encourage you to try an update to Cordova Android 7.1.2. Please [file issues](https://github.com/apache/cordova-android/issues) if you run into any plugin compatibility issues with this new release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform remove android
    cordova platform add android@7.1.2

To add it explicitly:

    cordova platform add android@7.1.2

<!--more-->

## Curated Changelog

* [CB-14127](https://issues.apache.org/jira/browse/CB-14127): Always put the Google repo above jcenter
* [CB-14165](https://issues.apache.org/jira/browse/CB-14165): Emulator: handle "device still connecting" error (#457)
* [CB-14125](https://issues.apache.org/jira/browse/CB-14125): Increase old plugin compatibility
* [CB-13830](https://issues.apache.org/jira/browse/CB-13830): Add handlers for plugins that use non-Java source files, such as Camera
* [CB-14038](https://issues.apache.org/jira/browse/CB-14038): fix false positive detecting project type
