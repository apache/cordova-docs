---
layout: post
author:
    name: Fil Maj
    url: https://twitter.com/filmaj
title:  "Cordova Android 6.2.3 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 6.2.3` has been released! This patch release _actually_ adds support for the Android SDK Tools v26 and newer. Unfortunately, we forgot to include these changes in the 6.2.2 release.

We strongly recommend upgrading to this version if you are using the latest Android SDK Tools. Older versions of `cordova-android` do not work with the latest Android SDK Tools!

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.2.3

To add it explicitly:

    cordova platform add android@6.2.3

This release will have to be explicitly added until the upcoming `cordova@7` release, where it will be pinned as the default android platform.

<!--more-->
## What's new in Android

* [CB-12640](https://issues.apache.org/jira/browse/CB-12640) Support for Android SDK Tools v26 and newer. Flipped AVD parsing logic so that it always tries to use `avdmanager` to retrieve AVDs first, then falls back to `android` command if `avdmanager` cannot be found. Improve handling of SDK tools commands on Windows.

