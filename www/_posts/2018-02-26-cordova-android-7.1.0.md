---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Android 7.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 7.1.0` has been released! This release fixes various bugs releated to the previous `cordova-android@7.0.0` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform remove android
    cordova platform add android@7.1.0

To add it explicitly:

    cordova platform add android@7.1.0

<!--more-->
## Curated Changelog
* [CB-13879](https://issues.apache.org/jira/browse/CB-13879) updated gradle tools dependency to 3.0.1 for project template
* [CB-13831](https://issues.apache.org/jira/browse/CB-13831) Update `android-versions` to 1.3.0 to support SDK 27.
* [CB-13800](https://issues.apache.org/jira/browse/CB-13800) Drop pre-4.4. (KitKat) specific code
* [CB-13724](https://issues.apache.org/jira/browse/CB-13724) Updated the **Android** Tooling required for the latest version on both the test project, and the template
* [CB-13724](https://issues.apache.org/jira/browse/CB-13724) Bump Target SDK to API 27 (Android 8.1)
* [CB-13646](https://issues.apache.org/jira/browse/CB-13646) Using the deprecated `NDK` by default breaks the build.  Crosswalk users need to specify the Gradle parameters to keep it working.
* [CB-12218](https://issues.apache.org/jira/browse/CB-12218) Fix consistency of null result message
* [CB-13571](https://issues.apache.org/jira/browse/CB-13571) Prevent crash with unrecognized **Android** version
* [CB-13721](https://issues.apache.org/jira/browse/CB-13721) Fix build apps that use `cdvHelpers.getConfigPreference`
* [CB-13621](https://issues.apache.org/jira/browse/CB-13621) We no longer support `cordova update` command.
