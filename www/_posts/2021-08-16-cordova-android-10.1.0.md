---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 10.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released a minor update for `Cordova Android (10.1.0)`!  This is one of Cordova's supported platforms for building Android mobile applications.

* [cordova-android@10.1.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@10.1.0
```

## Release Highlights

In this minor release, we:

* **Bump Core Libraries**

  * AndroidX AppCompat@1.3.1
  * Google Services Gradle Plugin@4.3.8
  * Kotlin@1.5.21

* **Added `HTTP` Scheme Support**

    In the Cordova-Android 10.0.0 release, we introduced support for the `WebViewAssetLoader`. By default, we only supported the `https` scheme. Some users requested `http` scheme support; as not all users were able to loading resources through a secure protocol.

    Users are now able to use either `https` (default) or `http` by setting the `scheme` `preference` flag.

    ```xml
    <preference name="scheme" value="http" />
    ```

    The default `scheme` will remain as `https`, as we believe apps should be secure.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
## Full Changelog

**Features:**

* [GH-1213](https://github.com/apache/cordova-android/pull/1213) feat: unify `create` default values & stop project name transform
* [GH-1306](https://github.com/apache/cordova-android/pull/1306) feat: bump `ANDROIDX_APP_COMPAT@1.3.1`
* [GH-1303](https://github.com/apache/cordova-android/pull/1303) feat: bump `Google Services Gradle Plugin@4.3.8`
* [GH-1302](https://github.com/apache/cordova-android/pull/1302) feat: bump `kotlin@1.5.21`
* [GH-1298](https://github.com/apache/cordova-android/pull/1298) feat: support `http` w/ `content` `src` fix

**Fixes:**

* [GH-1214](https://github.com/apache/cordova-android/pull/1214) fix: display project name in Android Studio
* [GH-1300](https://github.com/apache/cordova-android/pull/1300) fix: fall back to project root `repositories.gradle`

**Docs:**

* [GH-1308](https://github.com/apache/cordova-android/pull/1308) doc: update `README` about development & testing