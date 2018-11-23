---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova Android 7.1.4 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that Cordova Android `7.1.4` has been released! This resolves a bug that was introduced in the recent `7.1.3` release. Thanks to our users for the quick reports on [GitHub issues](https://github.com/apache/cordova-android/issues) and the help in identifying the problem.

If you have been staying on Cordova Android 6.x due to compatibility issues with 3rd party plugins, we strongly encourage you to try an update to Cordova Android `7.1.4`. Please [file issues](https://github.com/apache/cordova-android/issues) if you run into any plugin compatibility issues with this new release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform remove android
    cordova platform add android@latest

To add it explicitly:

    cordova platform add android@7.1.4

<!--more-->

## Curated Changelog

* Update android-versions to `1.4.0`, with added support for Android Pie ([#573](https://github.com/apache/cordova-android/pull/573))
* Output current package name if package name can't be validated ([#567](https://github.com/apache/cordova-android/pull/567))
* Resolve issue with plugin `target-dir="*app*"` subdirs ([#572](https://github.com/apache/cordova-android/pull/572))
