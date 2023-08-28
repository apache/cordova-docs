---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 12.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 12.0.1`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@12.0.1](https://www.npmjs.com/package/cordova-android)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@12.0.1
```

**To install:**

```bash
cordova platform add android@12.0.1
```

**Fixes:**

* **Adaptive Icon Fix**

    In Cordova-Android 12.0.0, an issue arose with the introduction of Android 13's Themed Icons support. This issue resulted in adaptive icons not being generated due to an incorrect validation check.

    In this release, the problematic validation check was rectified. As a result, the adaptive icon will be generated even when monochrome attributes are not provided.

Please report any issues you find on our [Cordova-Android](https://github.com/apache/cordova-android/issues) GitHub issue tracker!

<!--more-->
# Changes include:

* [GH-1632](https://github.com/apache/cordova-android/pull/1632) fix(android): `monochrome` checks
* [GH-1649](https://github.com/apache/cordova-android/pull/1649) chore: rebuild `package-lock` w/ lint corrections
