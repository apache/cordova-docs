---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 10.1.2 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 10.1.2`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@10.1.2](https://www.npmjs.com/package/cordova-android)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@10.1.2
```

**To install:**

```bash
cordova platform add android@10.1.2
```

The notable fixes in this release are to detect the `JAVA_HOME` environment variable with Java 11, properly escape the app's name, and explicitly define the `android:exported` attribute on the `activity`.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

**Fixes:**

* [GH-1372](https://github.com/apache/cordova-android/pull/1372) fix(`AndroidManifest`): explicitly define the `activity` attribute `android:exported`
* [GH-1406](https://github.com/apache/cordova-android/pull/1406) fix: detect `JAVA_HOME` with Java 11
* [GH-1401](https://github.com/apache/cordova-android/pull/1401) fix(GH-1391): Reword minimum build tools version to make it more clear what is actually required.
* [GH-1384](https://github.com/apache/cordova-android/pull/1384) fix: escape `strings.xml` app name
