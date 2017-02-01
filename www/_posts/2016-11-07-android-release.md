---
layout: post
author:
    name: Joe Bowser
    url: https://twitter.com/infil00p
title:  "Cordova Android 6.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 6.1.0` has been released! 

Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.1.0

To add it explicitly:

    cordova platform add android@6.1.0

<!--more-->
## What's new in Android
* [CB-12108](https://issues.apache.org/jira/browse/CB-12108) Updating gradle files to work with the latest version of Android Studio
* [CB-12102](https://issues.apache.org/jira/browse/CB-12102) Bump travis to build to API 25
* Bumping up the version
* [CB-12101](https://issues.apache.org/jira/browse/CB-12101) Fix so that CLI builds don't conflict with Android Studio builds
* [CB-12077](https://issues.apache.org/jira/browse/CB-12077) Fix paths for Android icons/splashscreens


