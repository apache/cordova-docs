---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 14.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 14.0.1`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@14.0.1](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@14.0.1
```

**To install:**

```bash
cordova platform add android@14.0.1
```

## Release Highlights

### Fixes

* **Fetching Gradle Path for Windows**

Resolved an issue in Windows environments where projects containing spaces in their paths could not be built due to changes in how the Gradle path was fetched.

* **Setting Gradle's java.home**

Resolved an issue where the user-defined environment variable `JAVA_HOME` or `CORDOVA_JAVA_HOME` was not being used to set the `java.home` property for the Gradle Wrapper.

<!--more-->
# Changes include:

**Fixes:**

* [GH-1795](https://github.com/apache/cordova-android/pull/1795) fix: configure gradle `java.home`
* [GH-1793](https://github.com/apache/cordova-android/pull/1793) fix(windows): get gradle path with `which` command
