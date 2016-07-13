---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Apache Cordova Windows 4.4.1"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.4.1` has been released!

In this release we have fixed a number of issues, related to application resuming, splash screen functionality and others.
Also we have added an ability to specify location of `msbuild` executable to build project.

The next Cordova CLI version will automatically start using this version of **Cordova-Windows** when creating new projects.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.4.1

To add it explicitly:

    cordova platform add windows@4.4.1

<!--more-->
## What's new in Windows platform

* [CB-11522](https://issues.apache.org/jira/browse/CB-11522) Save raw 'detail' object to activation context
* [CB-11538](https://issues.apache.org/jira/browse/CB-11538) Update README with information about logging
* [CB-11537](https://issues.apache.org/jira/browse/CB-11537) Do not duplicate log entries when printing logs
* [CB-11548](https://issues.apache.org/jira/browse/CB-11548) windows: Respect user-specified msbuild location
* [CB-11516](https://issues.apache.org/jira/browse/CB-11516) windows: Preparing icons w/ target fails
* [CB-11470](https://issues.apache.org/jira/browse/CB-11470) App crashes when trying to open from another app using Custom URL (Protocol)
* [CB-11443](https://issues.apache.org/jira/browse/CB-11443) Splashscreen is created the second time on resume on Windows
