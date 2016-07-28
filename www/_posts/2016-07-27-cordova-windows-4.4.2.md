---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Apache Cordova Windows 4.4.2"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.4.2` has been released!

This release fixes some issues we've missed in 4.4.1. In particular, we have fixed build issues experienced with
the new install experience in Visual Studio "15" previews. For the rest of changes see release notes below.

Cordova CLI 6.3.0 will automatically start using this version of **cordova-windows** when creating new projects.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.4.2

To add it explicitly:

    cordova platform add windows@4.4.2

<!--more-->
## What's new in Windows platform

* [CB-11548](https://issues.apache.org/jira/browse/CB-11548) Fix issues where MSBuild cannot be found
* [CB-11241](https://issues.apache.org/jira/browse/CB-11241) Return adding BOM to www back to prepare
* [CB-11582](https://issues.apache.org/jira/browse/CB-11582) Remove duplicate capabilities when writing the appxmanifest
