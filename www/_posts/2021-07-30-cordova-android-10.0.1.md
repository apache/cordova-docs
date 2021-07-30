---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 10.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 10.0.1`!  This is one of Cordova's supported platforms for building Android mobile applications.

* [cordova-android@10.0.1](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@10.0.1
```

## Release Highlights

In this patch release, we had fixed three reported issues that caused build issues.

* **Fixed `GradlePluginGoogleServicesEnabled` Invalid Version Error**

    Projects that set the `GradlePluginGoogleServicesEnabled` config flag to `true` saw an invalid version error. The error was caused by the build process reading a bad variable reference. 

    We corrected the variable reference and fixed this issue.

* **Fixed Incorrect Fetching of Latest Build Tools:**

    Users who have installed build tools 31.x noticed Cordova attempting to use the newer build tools by default.

    By default, Cordova-Android 10.x tries to fetch the latest installed build tools, but it should be only selecting within the supported major release range.

    For example, Cordova-Android 10.x supports SDK build tools 30.0.3. If a newer version of build tools within 30.x was released and installed, Cordova should fetch and use it. If the environment has 31.x or higher, those should be ignored. 

    Newer major release versions are not tested and may not be compatible with Cordova.

    We corrected this by ensuring that only within the supported major range was being discovered and used.

* **Fixed Issue with Pinning Build Tools:**

    This issue was also noticed by users who have installed the latest Android build tools SDK 31.

    Since SDK 31 contains breaking that makes it incompatible with Cordova, users tried to pin the build tools version to 30.0.3.

    Because of the above issue **Fixed Incorrect Fetching of Latest Build Tools**, the provided pinned version was being ignored.

    We have corrected this issue where pinned versions take higher priority over the fetched the latest version functionality.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
## Full Changelog

**Fixes:**

* [GH-1295](https://github.com/apache/cordova-android/pull/1295) fix: `maven-publish` setup
* [GH-1293](https://github.com/apache/cordova-android/pull/1293) fix: `gradle` build tools config
* [GH-1294](https://github.com/apache/cordova-android/pull/1294) fix: automatic latest build tools finding
* [GH-1287](https://github.com/apache/cordova-android/pull/1287) fix: Google Services Gradle Plugin version check failure

**Chores:**

* [GH-1291](https://github.com/apache/cordova-android/pull/1291) chore: add missing release notes
* [GH-1286](https://github.com/apache/cordova-android/pull/1286) chore: update `README` requirements
