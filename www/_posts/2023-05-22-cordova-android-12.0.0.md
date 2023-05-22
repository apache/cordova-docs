---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 12.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 12.0.0`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@12.0.0](https://www.npmjs.com/package/cordova-android)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@12.0.0
```

**To install:**

```bash
cordova platform add android@12.0.0
```

* **Increased Minimum & Target SDK**

    This release has increased the minimum supported SDK version to 24 which is Android 7.0. It also has increased the target SDK to 33, Android 13.

* **Tooling and Default Support Bump**

  * Target SDK (`targetSdk`): `33`
  * SDK Build Tool: `33.0.2`
  * Kotlin: `1.7.21`
  * Gradle: `7.6`
  * Android Gradle Plugin (AGP): `7.4.2`
  * Google Services Gradle Plugin: `4.3.15`
  * AndroidX App Compat Library: `1.6.1`
  * AndroidX WebKit Library: `1.6.0`
  * AndroidX SplashScreen Core Library: `1.0.0`

* **Monochrome Support**

    Android 13 has added Themed Icons support which is also known as Monochrome. This release has introduced support for Themed icons.

* **Node Support**

    We have dropped support for Node 14.x and increase the minimum Node requirement to greater than or equal to 16.13.0.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

**Breaking:**

* [GH-1605](https://github.com/apache/cordova-android/pull/1605) fix!: Make `CoreAndroid` plugin instantiate on load
* [GH-1539](https://github.com/apache/cordova-android/pull/1539) feat!: bump Gradle 7.6 & AGP 7.4.2
* [GH-1571](https://github.com/apache/cordova-android/pull/1571) feat!: bump min SDK to 24
* [GH-1538](https://github.com/apache/cordova-android/pull/1538) feat!: bump target sdk & build tools for SDK 33 support
* [GH-1540](https://github.com/apache/cordova-android/pull/1540) feat!: bump node engine requirement `>=16.13.0`
* [GH-1597](https://github.com/apache/cordova-android/pull/1597) deprecate: `CoreAndroid.getBuildConfigValue`
* [GH-1541](https://github.com/apache/cordova-android/pull/1541) dep(npm)!: bump acceptable modules w/ rebuilt `package-lock`
* [GH-1566](https://github.com/apache/cordova-android/pull/1566) dep(npm)!: bump `cordova-common@5.0.0`

**Features:**

* [GH-1602](https://github.com/apache/cordova-android/pull/1602) feat: add `listTarget` api
* [GH-1574](https://github.com/apache/cordova-android/pull/1574) feat: add plugin hooks for `WebViewClient.onRenderProcessGone`
* [GH-1594](https://github.com/apache/cordova-android/pull/1594) feat: bump default `kotlin` to version 1.7.21
* [GH-1550](https://github.com/apache/cordova-android/pull/1550) feat: add `monochrome` app icon support
* [GH-1589](https://github.com/apache/cordova-android/pull/1589) feat: `InspectableWebview` preference
* [GH-1568](https://github.com/apache/cordova-android/pull/1568) feat: bump `androidx.appcompat.appcompat` 1.6.1
* [GH-1567](https://github.com/apache/cordova-android/pull/1567) feat: bump `androidx.webkit.webkit` 1.6.0
* [GH-1547](https://github.com/apache/cordova-android/pull/1547) feat: bump `com.google.gms.google-services` 4.3.15
* [GH-1546](https://github.com/apache/cordova-android/pull/1546) feat: bump `androidx.core.core-splashscreen` 1.0.0

**Fixes:**

* [GH-1606](https://github.com/apache/cordova-android/pull/1606) fix: Gradle Args parsing
* [GH-1575](https://github.com/apache/cordova-android/pull/1575) fix(`BuildHelper`): get package name from `ApplicationInfo`
* [GH-1595](https://github.com/apache/cordova-android/pull/1595) fix(test): Native test namespace refactor
* [GH-1471](https://github.com/apache/cordova-android/pull/1471) fix: `ANDROID_HOME` is the new default, to check first and give advice
* [GH-1573](https://github.com/apache/cordova-android/pull/1573) fix(GH-1432): Default `content` `src` when content tag is missing
* [GH-1506](https://github.com/apache/cordova-android/pull/1506) fix: only do fadeout animation if `FadeSplashScreen` is true
* [GH-1505](https://github.com/apache/cordova-android/pull/1505) fix: correctly flag API dependency on `AppCompat` for Maven
* [GH-1487](https://github.com/apache/cordova-android/pull/1487) fix: Add **Android** prefix to `WindowSplashScreenBrandingImage`
* [GH-1489](https://github.com/apache/cordova-android/pull/1489) fix: import type definitions from obsolete `cordova-plugin-splashscreen`

**Chores, Refactor,  Dependencies & CI:**

* [GH-1493](https://github.com/apache/cordova-android/pull/1493) chore: add `lint:fix` script for fixing lint errors
* [GH-1491](https://github.com/apache/cordova-android/pull/1491) chore: Use gradle 7.4.2 distribution url
* [GH-1588](https://github.com/apache/cordova-android/pull/1588) refactor: Removed obsolete version code checks
* [GH-1492](https://github.com/apache/cordova-android/pull/1492) refactor: replace deprecated `Handler` constructor
* [GH-1587](https://github.com/apache/cordova-android/pull/1587) dep: bump npm dependencies
  * `fs-extra@11.1.1`
  * `nopt@7.1.0`
  * `@cordova/eslint-config@5.0.0`
  * `jasmine@4.6.0`
* [GH-1607](https://github.com/apache/cordova-android/pull/1607) ci: Added NodeJS 20.x to the workflow matrix
* [GH-1542](https://github.com/apache/cordova-android/pull/1542) ci(workflow): update `codecov/codecov-action@v3`
* [GH-1532](https://github.com/apache/cordova-android/pull/1532) ci: update `codecov/codecov-action` reporting format
