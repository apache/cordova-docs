---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova Android 7.1.3 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 7.1.3` has been released! This release resolves a couple more issues releated to plugin compatibility.

If you have been staying on Cordova Android 6.x due to compatibility issues with 3rd party plugins, we strongly encourage you to try an update to Cordova Android 7.1.3. Please [file issues](https://github.com/apache/cordova-android/issues) if you run into any plugin compatibility issues with this new release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform remove android
    cordova platform add android@latest

To add it explicitly:

    cordova platform add android@7.1.3

<!--more-->

## Curated Changelog

* [GH-495](https://github.com/apache/cordova-android/pull/495) Incorrect default sdk version issue fix
* [GH-496](https://github.com/apache/cordova-android/pull/496) update comments in `build.gradle`
* [GH-539](https://github.com/apache/cordova-android/pull/539) Fix dest overwrite, in case of of plugin `source-file` element with `target-dir` that does not need remapping
* [GH-540](https://github.com/apache/cordova-android/issues/540) support plugin `source-file` element with any app `target-dir` value
* [GH-547](https://github.com/apache/cordova-android/issues/547) Compatibility of old plugins with non-Java `source-file` entries (individual files)
* [GH-551](https://github.com/apache/cordova-android/pull/551) add missing cast for cdvMinSdkVersion to `build.gradle`
* [GH-552](https://github.com/apache/cordova-android/issues/552) check for `build-extras.gradle` in the parent app directory
