---
layout: post
author:
    name: Sergey Grebnov
    url: https://twitter.com/sgrebnov
title:  "Apache Cordova Windows 3.8.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 3.8.0` has been released!

This release adds support for new Visual Studio 2015 Tools and has various other improvements. It will be the default Windows version when the cordova-cli 4.3.0 is released.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows

To add it explicitly:

    cordova platform add windows@3.8.0



For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->

## What's new in Windows

* [CB-7985](https://issues.apache.org/jira/browse/CB-7985) Support Visual Studio 14 CTP tools
* [CB-8515](https://issues.apache.org/jira/browse/CB-8515) Support `DefaultLanguage` selection
* [CB-8321](https://issues.apache.org/jira/browse/CB-8321) Add supported orientations `config.xml` preference handling
* [CB-8417](https://issues.apache.org/jira/browse/CB-8417) Moved platform specific js into platform
