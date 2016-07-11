---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Cordova Android 5.2.1"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 5.2.1` has been released!

This release fixes a small yet annoying bug that results in impossibility to deploy app on emulator with API 23 image.

This version will be used by default in next Cordova versions. As for now to install this version of **Cordova-android** you'll need to specify version explicitly.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@5.2.1

To add it explicitly:

    cordova platform add android@5.2.1

<!--more-->
## What's new in Android platform

* [CB-9489](https://issues.apache.org/jira/browse/CB-9489) Fixed "endless waiting for emulator" issue
* [CB-11481](https://issues.apache.org/jira/browse/CB-11481) android-library is deprecated use com.android.library instead

You can also take a look at the changes included in the previous release of `Android` platform - `cordova-android 5.2.0` - [here](http://cordova.apache.org/announcements/2016/07/02/android-5.2.0.html).
