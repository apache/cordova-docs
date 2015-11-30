---
layout: post
author:
    name: Joe Bowser
    url: https://twitter.com/infil00p
title:  "Apache Cordova Android 3.7.1"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 3.7.1` has been released!

This release has numerous bug fixes, and sets the target-sdk to android-21 (which yields a pretty good graphics speed-up on Lollipop devices!). It will be the default Android version when the cordova-cli 4.1.0 is released.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@3.7.1

To add it explicitly:

    cordova platform add android@3.7.1



For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->

## What's new in Android

* [CB-8411](https://issues.apache.org/jira/browse/CB-8411) Fixed regression with view hierarchy not being initialized before plugins.
* [CB-8328](https://issues.apache.org/jira/browse/CB-8328) Allow plugins to handle certificate challenges
* [CB-8201](https://issues.apache.org/jira/browse/CB-8201) Add support for auth dialogs into Cordova Android
* [CB-8017](https://issues.apache.org/jira/browse/CB-8017) Add support for `<input type=file>` for Lollipop
* [CB-8329](https://issues.apache.org/jira/browse/CB-8239) Cancel outstanding `ActivityResult` requests when a new `startActivityForResult` occurs
* [CB-8026](https://issues.apache.org/jira/browse/CB-8026) Bumping up Android Version and setting it up to allow third-party cookies *This might change later*
* [CB-8210](https://issues.apache.org/jira/browse/CB-8210) Eliminate usages of `sendJavascript()` to be CSP compliant
* [CB-8143](https://issues.apache.org/jira/browse/CB-8143) Numerous gradle changes. Try it out with `cordova build android -- --gradle`
* [CB-8079](https://issues.apache.org/jira/browse/CB-8079) Use activity class package name, but fallback to application package name when looking for splash screen drawable
* [CB-8147](https://issues.apache.org/jira/browse/CB-8147) Have `cordova/build` warn about unrecognized flags rather than fail
* [CB-8119](https://issues.apache.org/jira/browse/CB-8119) Restart `adb` when we detect it's hung
* [CB-8112](https://issues.apache.org/jira/browse/CB-8112) Turn off `mediaPlaybackRequiresUserGesture`
* [CB-6153](https://issues.apache.org/jira/browse/CB-6153) Add a preference for controlling hardware button audio stream (`DefaultVolumeStream`)
* [CB-8081](https://issues.apache.org/jira/browse/CB-8081) Allow gradle builds to use **Java 6** instead of requiring **Java 7**
* [CB-8031](https://issues.apache.org/jira/browse/CB-8031) Fix race condition that shows as `ConcurrentModificationException`
* [CB-7976](https://issues.apache.org/jira/browse/CB-7976) Use `webView`'s context rather than `Activity`'s context for intent receiver
* [CB-7974](https://issues.apache.org/jira/browse/CB-7974) Cancel timeout timer if view is destroyed
* [CB-7940](https://issues.apache.org/jira/browse/CB-7940) Disable exec bridge if bridgeSecret is wrong
* [CB-7758](https://issues.apache.org/jira/browse/CB-7758) Allow content-url-hosted pages to access the bridge
* [CB-6511](https://issues.apache.org/jira/browse/CB-6511) Fixes build for android when app name contains unicode characters
* [CB-7707](https://issues.apache.org/jira/browse/CB-7707) Added multipart `PluginResult`
* [CB-6837](https://issues.apache.org/jira/browse/CB-6837) Fix leaked window when hitting back button while alert being rendered
* [CB-7674](https://issues.apache.org/jira/browse/CB-7674)  Move preference activation back into `onCreate()`
* [CB-7499](https://issues.apache.org/jira/browse/CB-7499)  Support RTL text direction
* [CB-7511](https://issues.apache.org/jira/browse/CB-7511) Vastly improve auto-detection of Android SDK and JDK instll locations


