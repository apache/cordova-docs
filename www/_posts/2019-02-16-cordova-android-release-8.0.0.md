---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 8.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 8.0.0`!  This is one of Cordova's supported platforms for building Android mobile applications.

* [cordova-android@8.0.0](https://www.npmjs.com/package/cordova-android)

## Release Highlights

**To upgrade:**

```
cordova platform remove android
cordova platform add android@8.0.0
```

In addition to the various improvements and bug fixes, this release also comes packed with some major features.

Some of the key features are:

* Bump Gradle to 4.10.3
  * Support Android SDK 28
  * Support Android Studio 3.3.0
* Added Adaptive Icon Support

Additional, as NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-655](https://github.com/apache/cordova-android/pull/655) Use custom Gradle properties to read minSdkVersion value from `config.xml`
* [GH-656](https://github.com/apache/cordova-android/pull/656) Quick fix to support **Android**_SDK_ROOT
* [GH-642](https://github.com/apache/cordova-android/pull/642) **Android** tools 3.3 & **Gradle** 4.10.3 update
* [GH-654](https://github.com/apache/cordova-android/pull/654) Quick updates to top-level `project.properties`
* [GH-624](https://github.com/apache/cordova-android/pull/624) Add missing log to Java version check
* [GH-630](https://github.com/apache/cordova-android/pull/630) Update `emulator.js` to fix issue [GH-608](https://github.com/apache/cordova-android/pull/608)
* [GH-620](https://github.com/apache/cordova-android/pull/620) Fix requirements error messages for JDK 8
* [GH-619](https://github.com/apache/cordova-android/pull/619) javac error message fixes in requirements check
* [GH-612](https://github.com/apache/cordova-android/pull/612) Android Platform Release Preparation (Cordova 9)
* [GH-607](https://github.com/apache/cordova-android/pull/607) Copy `node_modules` if the directory exists
* [GH-589](https://github.com/apache/cordova-android/pull/589) Rewrite install dir resolution for legacy plugins
* [GH-572](https://github.com/apache/cordova-android/pull/572) Resolve issue with plugin `target-dir="app*"` subdirs
* [GH-567](https://github.com/apache/cordova-android/pull/567) Output current package name if package name can't be validated
* [GH-507](https://github.com/apache/cordova-android/pull/507) Gradle Updates
* [GH-550](https://github.com/apache/cordova-android/pull/550) Fix for old plugins with non-Java sources
* [GH-558](https://github.com/apache/cordova-android/pull/558) Update `cordova.js` from `cordova-js@4.2.3`
* [GH-553](https://github.com/apache/cordova-android/pull/553) Check for `build-extras.gradle` in the app-parent directory
* [GH-551](https://github.com/apache/cordova-android/pull/551) Add missing cast for `cdvMinSdkVersion`
* [GH-539](https://github.com/apache/cordova-android/pull/539) Fix destination path fallback
* [GH-544](https://github.com/apache/cordova-android/pull/544) Remove obsolete check for JellyBean
* [GH-465](https://github.com/apache/cordova-android/pull/465) Removes Gradle property in-line command arguments for `gradle.properties`
* [GH-523](https://github.com/apache/cordova-android/pull/523) Always put the Google repo above jcenter
* [GH-486](https://github.com/apache/cordova-android/pull/486) Change deprecated "compile" to "implementation"
* [GH-495](https://github.com/apache/cordova-android/pull/495) Incorrect default sdk version issue fix
* [GH-493](https://github.com/apache/cordova-android/pull/493) Remove bundled dependencies
* [GH-490](https://github.com/apache/cordova-android/pull/490) Fixes build & run related bugs from builder refactor
* [GH-448](https://github.com/apache/cordova-android/pull/448) [CB-13685](https://issues.apache.org/jira/browse/CB-13685) Adaptive Icon Support
* [GH-487](https://github.com/apache/cordova-android/pull/487) Do not attempt an activity intent AND a url load into the webview, return from the internal webview load.
* [GH-461](https://github.com/apache/cordova-android/pull/461) Remove old builders code
* [GH-463](https://github.com/apache/cordova-android/pull/463) Emulator: Add unit tests and remove Q
* [GH-462](https://github.com/apache/cordova-android/pull/462) Device: Add unit tests and remove Q
* [GH-457](https://github.com/apache/cordova-android/pull/457) Emulator: handle "device still connecting" error
* [GH-445](https://github.com/apache/cordova-android/pull/445) Run and retryPromise improvements and tests
* [GH-452](https://github.com/apache/cordova-android/pull/452) Emit log event instead of logging directly
* [GH-449](https://github.com/apache/cordova-android/pull/449) Increase old plugin compatibility
* [GH-446](https://github.com/apache/cordova-android/pull/446) [CB-14101](https://issues.apache.org/jira/browse/CB-14101) Fix Java version check for Java >= 9
* [CB-14127](https://issues.apache.org/jira/browse/CB-14127) Move google maven repo ahead of jcenter
* [CB-14038](https://issues.apache.org/jira/browse/CB-14038) Fix false positive detecting project type
* [CB-13975](https://issues.apache.org/jira/browse/CB-13975) Fix to fire pause event when cdvStartInBackground=true
* [CB-13830](https://issues.apache.org/jira/browse/CB-13830) Add handlers for plugins that use non-Java source files, such as Camera
* [CB-13923](https://issues.apache.org/jira/browse/CB-13923) Fix -1 length for compressed files
