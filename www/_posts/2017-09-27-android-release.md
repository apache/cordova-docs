---
layout: post
author:
    name: Joe Bowser
    url: https://twitter.com/infil00p
title:  "Cordova Android 6.3.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 6.3.0` has been released! 

This release now targets the latest Android API level of API 26 and has fixed issues related to the **Android SDK Tools 26.0.2** release. **Google** changed how the Android emulator was executed, causing errors when deploying to the emulator. 

This release contains the integration of `cordova-plugin-compat`, so please remove that plugin from projects once you update to this version of `cordova-android`.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.3.0

To add it explicitly:

    cordova platform add android@6.3.0

<!--more-->
## What's new in Android
* [CB-6936](https://issues.apache.org/jira/browse/CB-6936) fix crash when calling methods on a destroyed webview
* [CB-12981](https://issues.apache.org/jira/browse/CB-12981) handle SDK 26.0.2 slightly different AVD list output for **Android** 8+ AVDs. Would cause "cannot read property replace of undefined" errors when trying to deploy an **Android** 8 emulator.
* Updated maven repo to include most recent lib versions
* [CB-13177](https://issues.apache.org/jira/browse/CB-13177) Updating to API Level 26
* Revert [CB-12015](https://issues.apache.org/jira/browse/CB-12015) initial-scale values less than 1.0 are ignored on **Android**
* [CB-12730](https://issues.apache.org/jira/browse/CB-12730) The Cordova Compatibility Plugin is now integrated into `cordova-android`
* [CB-12453](https://issues.apache.org/jira/browse/CB-12453) Remove unnecessary double quotes from .bat files which are the causes of crash if project path contains spaces
* [CB-13031](https://issues.apache.org/jira/browse/CB-13031) Fix bug with case-sensitivity of **Android**-packageName
* [CB-10916](https://issues.apache.org/jira/browse/CB-10916) Support display name for **Android**
* [CB-12423](https://issues.apache.org/jira/browse/CB-12423) make explicit JDK 1.8 or greater is needed in the `README`, we require 1.8 for compilation, but do not have 1.8 Java features yet
* [CB-12605](https://issues.apache.org/jira/browse/CB-12605) In **Windows** get **Android** studio path from the registry
* [CB-12617](https://issues.apache.org/jira/browse/CB-12617) : removed node0.x support for platforms and added engineStrict

