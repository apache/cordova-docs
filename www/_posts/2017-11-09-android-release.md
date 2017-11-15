---
layout: post
author:
    name: Joe Bowser
    url: https://twitter.com/infil00p
title:  "Cordova Android 6.4.0 Released!"
categories: announcements
tags: news releases
---

We would like to announce that `Cordova Android 6.4.0` has been released! 

This release now uses the latest Android Gradle plugin that was released with Android Studio 3.0.

Due to the recent changes Google made to Android Studio, Cordova Android now requires that Gradle is installed as a standalone dependency for Android development on all platforms. You can do so by [following these instructions at gradle.org](https://gradle.org/install/).  
We will be removing the code that uses Android Studio to provide Gradle as a dependency in the near future.

Google also has changed the Gradle DSL used and currently support for the Crosswalk WebView is broken in this version of Cordova as a result. Unfortunately, since Crosswalk is no longer supported by the [Crosswalk Project](https://crosswalk-project.org/), we do not know whether [this issue](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview/issues/183) will be fixed.  
If you require support for Crosswalk, we recommend that you continue using cordova-android 6.3.0 at this time and avoid using or upgrading your project with Android Studio.


To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.4.0

To add it explicitly:

    cordova platform add android@6.4.0

<!--more-->
## What's new in Android
* [CB-13289](https://issues.apache.org/jira/browse/CB-13289) Fixing build problems with Studio Three, but keeping **Windows** Gradle fix for now, will be deprecated
* [CB-13289](https://issues.apache.org/jira/browse/CB-13289) Fix test to work with new Google **Android** Gradle DSL
* [CB-13499](https://issues.apache.org/jira/browse/CB-13499) Remove duplicate "setting" in error strings
* [CB-13406](https://issues.apache.org/jira/browse/CB-13406) Fixed AVD API level comparison when choosing sub-par API level match. Added tests for the best_image method.
* [CB-13404](https://issues.apache.org/jira/browse/CB-13404) add **Android**-versions to bundledDependencies. Ignore best emulator selection when parsed AVD information does not include API level in the target
