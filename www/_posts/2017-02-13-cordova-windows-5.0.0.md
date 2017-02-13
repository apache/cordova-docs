---
layout: post
author:
    name: Sergey Shakhnazarov
    url: https://github.com/daserge
title:  "Apache Cordova Windows 5.0.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 5.0.0` has been released!

This release introduces [a major change in resource-file behavior](https://issues.apache.org/jira/browse/CB-12163) (see [the docs](https://github.com/apache/cordova-docs/pull/679) on how to get the previous behavior back for referenced files) and adds [WinMD + C++ based DLL combination support for plugins](https://issues.apache.org/jira/browse/CB-12189).  
Another highlight is [a new feature of `buildFlag`](http://cordova.apache.org/docs/en/dev/guide/platforms/win8/index.html#msbuild-build-flags) similar to `--gradleArg` on Android and `--buildFlag` on iOS allowing to pass custom flags to MSBuild.  
The release also fixes some issues with SplashScreen and VS project generation.  
See release notes below for more detals and the rest of the changes.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@5.0.0

To add it explicitly:

    cordova platform add windows@5.0.0

<!--more-->
## What's new in Windows platform

* [CB-12163](https://issues.apache.org/jira/browse/CB-12163) Add resource-file reference functionality through a flag
* [CB-12163](https://issues.apache.org/jira/browse/CB-12163) Make resource-file copy files again
* Upgrade cordova-common to 2.0.0
* [CB-12298](https://issues.apache.org/jira/browse/CB-12298) [Windows] bundle.appxupload not generated for Windows 10 target
* [CB-12189](https://issues.apache.org/jira/browse/CB-12189) Add support for WinMD and DLL combination
* [CB-12238](https://issues.apache.org/jira/browse/CB-12238) [Windows] Colorize titlebar to match splash bg color
* [CB-11177](https://issues.apache.org/jira/browse/CB-11177) SplashScreen gets shifted on Windows devices with soft navbar
* [CB-12239](https://issues.apache.org/jira/browse/CB-12239) Add buildFlag option similar to iOS
* [CB-12193](https://issues.apache.org/jira/browse/CB-12193) cordova.js crashes windows app if there is no CoreWindow Also made confighelper to load after WinJS as it depends on it
* [CB-11751](https://issues.apache.org/jira/browse/CB-11751) 'extendedSplashScreen' is undefined
* [CB-12192](https://issues.apache.org/jira/browse/CB-12192) No SplashScreen on Windows when content.src is subpage
* [CB-9287](https://issues.apache.org/jira/browse/CB-9287) Not enough Icons and Splashscreens for Windows 8.1 and Windows Phone 8.1
* [CB-11933](https://issues.apache.org/jira/browse/CB-11933) Do not ignore already prefixed capabilities at plugin add/rm
* [CB-11933](https://issues.apache.org/jira/browse/CB-11933) Fix pattern for extracting capabilities names
* [CB-12142](https://issues.apache.org/jira/browse/CB-12142) Move windows-specific logic from cordova-common
* [CB-12147](https://issues.apache.org/jira/browse/CB-12147) (windows) Fix typo in verbose output
* [CB-12124](https://issues.apache.org/jira/browse/CB-12124) Make available device capabilities in package.windows10.appxmanifest
* [CB-12071](https://issues.apache.org/jira/browse/CB-12071) Fix for [CB-11825](https://issues.apache.org/jira/browse/CB-11825) breaks usage of InProcessServer in Cordova Windows
* [CB-12036](https://issues.apache.org/jira/browse/CB-12036) Fix setSplashBgColor exception when no splashscreen is found
