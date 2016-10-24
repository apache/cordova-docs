---
layout: post
author:
    name: Sergey Shakhnazarov
    url: https://github.com/daserge
title:  "Apache Cordova Windows 4.4.3"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.4.3` has been released!

This release fixes some major issues with application activation, splashscreen and VS project generation.  
See release notes below for more detals and the rest of the changes.

Cordova CLI starting from version 6.3.0 will automatically start using this version of **cordova-windows** when creating new projects.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.4.3

To add it explicitly:

    cordova platform add windows@4.4.3

<!--more-->
## What's new in Windows platform

* [CB-12044](https://issues.apache.org/jira/browse/CB-12044) Fix splashscreen image path for ms-appx on Windows
* [CB-12042](https://issues.apache.org/jira/browse/CB-12042) Copy base.js to www directory at create
* [CB-11933](https://issues.apache.org/jira/browse/CB-11933) Add uap prefixes for capabilities at plugin install
* [CB-11933](https://issues.apache.org/jira/browse/CB-11933) Remove capabilities from manifest
* [CB-11825](https://issues.apache.org/jira/browse/CB-11825) Windows dll file won't be copied as resource while adding custom plugin to a UWP project
* output message, catch exception if require fails, change eventEmitter to events to be consistent with ios+android
* [CB-11522](https://issues.apache.org/jira/browse/CB-11522) [windows] Make cordova-js handle 'unknown' type
* [CB-11857](https://issues.apache.org/jira/browse/CB-11857) Fixed VS 2015 detection on Windows 10 Anniversary
* [CB-10738](https://issues.apache.org/jira/browse/CB-10738) Use hardcoded Id attribute in Win10 manifest
* Update bundled cordova-common dependency to 1.4.1
* [CB-11658](https://issues.apache.org/jira/browse/CB-11658) activated event is not fired on Windows 10 RS1
* [CB-11657](https://issues.apache.org/jira/browse/CB-11657) Add bom to www after plugin operations
* [CB-11478](https://issues.apache.org/jira/browse/CB-11478) Parse --archs option consistently
* [CB-11558](https://issues.apache.org/jira/browse/CB-11558) Make windows plugin rm remove ProjectReference items
* [CB-11579](https://issues.apache.org/jira/browse/CB-11579) windows: fix bug with 'cordova clean windows'
