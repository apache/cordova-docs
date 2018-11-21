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

* Incorrect default sdk version issue fix ([#495](https://github.com/apache/cordova-android/pull/495))
* Update comments in `build.gradle` ([#496](https://github.com/apache/cordova-android/pull/496))
* Fix dest overwrite, in case of of plugin `source-file` element with `target-dir` that does not need remapping ([#539](https://github.com/apache/cordova-android/pull/539))
* Support plugin `source-file` element with any app `target-dir` value ([#542](https://github.com/apache/cordova-android/pull/542))
* Compatibility of old plugins with non-Java `source-file` entries (individual files) ([#550](https://github.com/apache/cordova-android/pull/550))
* add missing cast for cdvMinSdkVersion to `build.gradle` ([#551](https://github.com/apache/cordova-android/pull/551))
* Check for `build-extras.gradle` in the parent app directory ([#553](https://github.com/apache/cordova-android/pull/553))
