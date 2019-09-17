---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 8.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 8.1.0`!  This is one of Cordova's supported platforms for building Android mobile applications.

* [cordova-android@8.1.0](https://www.npmjs.com/package/cordova-android)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@8.1.0
```

The most notable improvement in this minor release is the support to build `.aab` bundle packages.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-827](https://github.com/apache/cordova-android/pull/827) chore: bump dependencies for release 8.1.0
* [GH-651](https://github.com/apache/cordova-android/pull/651) feat: added multiple selection for filepicker
* [GH-672](https://github.com/apache/cordova-android/pull/672) chore: compress files in /res with tinypng.com
* [GH-815](https://github.com/apache/cordova-android/pull/815) fix: `clean` command
* [GH-750](https://github.com/apache/cordova-android/pull/750) Don't request focus explicitly if not needed
* [GH-800](https://github.com/apache/cordova-android/pull/800) [GH-799](https://github.com/apache/cordova-android/pull/799) (android) Stop webview from restarting when activity resizes
* [GH-764](https://github.com/apache/cordova-android/pull/764) feat: Build app bundles (.aab files)
* [GH-788](https://github.com/apache/cordova-android/pull/788) Simplify `apkSorter` using `compare-func` package
* [GH-787](https://github.com/apache/cordova-android/pull/787) Simplify and fix promise handling in specs
* [GH-784](https://github.com/apache/cordova-android/pull/784) Properly handle promise in create script
* [GH-783](https://github.com/apache/cordova-android/pull/783) Do not clobber process properties with test mocks
* [GH-782](https://github.com/apache/cordova-android/pull/782) Do not clobber `console.log` to spy on it
* [GH-724](https://github.com/apache/cordova-android/pull/724) Add Node.js 12 to CI Services
* [GH-777](https://github.com/apache/cordova-android/pull/777) ci(travis): set `dist: trusty` in `.travis.yml`
* [GH-779](https://github.com/apache/cordova-android/pull/779) Consistent order from `ProjectBuilder.apkSorter`
* [GH-778](https://github.com/apache/cordova-android/pull/778) test: use verbose spec reporter
* [GH-774](https://github.com/apache/cordova-android/pull/774) `rewire` workaround for NodeJS 12
* [GH-772](https://github.com/apache/cordova-android/pull/772) `nyc@14` update in devDependencies
* [GH-765](https://github.com/apache/cordova-android/pull/765) ci(travis): Fix **Android** SDK
* [GH-713](https://github.com/apache/cordova-android/pull/713) Do not explicitly require modules from project directory
* [GH-676](https://github.com/apache/cordova-android/pull/676) Added allprojects repositories for Framework Release Builds
* [GH-699](https://github.com/apache/cordova-android/pull/699) Improve Gradle Build Arguments
* [GH-710](https://github.com/apache/cordova-android/pull/710) Fix deprecation warning in `SystemCookieManager`
* [GH-691](https://github.com/apache/cordova-android/pull/691) [GH-690](https://github.com/apache/cordova-android/pull/690): Run `prepare` with the correct `ConfigParser`
* [GH-673](https://github.com/apache/cordova-android/pull/673) Updated `Android_HOME` Test to Follow [GH-656](https://github.com/apache/cordova-android/pull/656) Change
