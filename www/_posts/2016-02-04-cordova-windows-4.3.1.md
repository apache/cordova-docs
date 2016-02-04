---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Apache Cordova Windows 4.3.1"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.3.1` has been released!

This is a patch release which fixes a couple of small bugs related to plugins installation, and the significant issue that caused Windows 10 Universal apps to restart instead of resume in some cases.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.3.1

To add it explicitly:

    cordova platform add windows@4.3.1

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guide](http://cordova.apache.org/docs/en/dev/guide/platforms/win8/upgrade.html).

<!--more-->
## What's new in Windows platform

* [CB-10487](https://issues.apache.org/jira/browse/CB-10487) WindowsStoreIdentityName should be lowercased in Application.StartPage
* [CB-10446](https://issues.apache.org/jira/browse/CB-10446) Windows 10 Cordova Application restart instead of resume
* [CB-10440](https://issues.apache.org/jira/browse/CB-10440) Add CSS color names support for BackgroundColor on Windows
* [CB-10394](https://issues.apache.org/jira/browse/CB-10394) Do not cache manifest file while getting package name
* [CB-10381](https://issues.apache.org/jira/browse/CB-10381) fix the bug when removing a plugin with a `<frame>` tag
* [CB-10234](https://issues.apache.org/jira/browse/CB-10234) Better error message when Windows10 requires 'arch' flag
