---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 9.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 9.1.0`!  This is one of Cordova's supported platforms for building Android mobile applications.

* [cordova-android@9.1.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@9.1.0
```

## Release Highlights

In this minor release, there are various refactoring and bug fixes. Additionally, there were a few new features.

Some of the new feature highlights are:

* **Added Custom Gradle Repositories Support**

    Sometimes there are third-party libraries that do not exist in the repositories that we have defined. With this feature, developers now have an easier way to override the default repository list that we have defined in the Gradle build scripts.

    Additionally, as JFrog is sunsetting the JCenter repository, developers can remove it, at their own risk. Since this a minor release, we have not removed JCenter as one of the default repositories as it would be considered a breaking change.

* **Support `webp` Images for SplashScreen**

    Previously we only supported `png` file formats for splash screens as `webp` support was only introduced starting from API 17. Since `cordova-android@9.x` minimum SDK version was raised to 22, the introduction of `webp` support became possible.

    `webp` file formats are known to support transparency and provide the same or similar quality as `png` files, but its greatest benefit is that it can reduce the image file size by around 25%.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
## Full Changelog

**Features:**

* [GH-1104](https://github.com/apache/cordova-android/pull/1104) feat: support `gzip` encoding requests & use `GZIPInputStream`
* [GH-1167](https://github.com/apache/cordova-android/pull/1167) feat: handle `intent://` scheme links with `browser_fallback_url` param
* [GH-1179](https://github.com/apache/cordova-android/pull/1179) feat: add `repositories` support
* [GH-1173](https://github.com/apache/cordova-android/pull/1173) feat(android-studio): display app name as project name
* [GH-1113](https://github.com/apache/cordova-android/pull/1113) feat: `webp` support for splashscreen
* [GH-1125](https://github.com/apache/cordova-android/pull/1125) feat(Adb): list `devices` _and_ `emulators` in one go

**Fixes:**

* [GH-1186](https://github.com/apache/cordova-android/pull/1186) fix: copy `repositories.gradle` to project on create
* [GH-1184](https://github.com/apache/cordova-android/pull/1184) fix: unit-test failure
* [GH-733](https://github.com/apache/cordova-android/pull/733) fix(splashscreen): nav & title bar showing in fullscreen mode
* [GH-1157](https://github.com/apache/cordova-android/pull/1157) fix: restore key event handlers when DOM element is fullscreen
* [GH-1073](https://github.com/apache/cordova-android/pull/1073) fix(android): Avoid Crash Report: ConcurrentModificationException
* [GH-1148](https://github.com/apache/cordova-android/pull/1148) fix: add not null checks to prevent running on destroyed activity
* [GH-1091](https://github.com/apache/cordova-android/pull/1091) fix: concurrent modification exception (#924)
* [GH-1153](https://github.com/apache/cordova-android/pull/1153) fix: optional arch parameter
* [GH-1136](https://github.com/apache/cordova-android/pull/1136) fix(prepare): `mapImageResources` always returning `[]`
* [GH-1111](https://github.com/apache/cordova-android/pull/1111) fix(android): allow file access for existing behavior
* [GH-1045](https://github.com/apache/cordova-android/pull/1045) fix: Reflect minimum required NodeJS
* [GH-1084](https://github.com/apache/cordova-android/pull/1084) fix(prepare): fix pattern used to collect image resources
* [GH-1014](https://github.com/apache/cordova-android/pull/1014) fix(`pluginHandlers`): properly check if path is inside another
* [GH-1018](https://github.com/apache/cordova-android/pull/1018) fix: gradle ignore properties
* [GH-1185](https://github.com/apache/cordova-android/pull/1185) fix(regression): Cannot read version of undefined caused by Java refactor
* [GH-1117](https://github.com/apache/cordova-android/pull/1117) fix: allow changing min sdk version

**Refactors:**

* [GH-1101](https://github.com/apache/cordova-android/pull/1101) refactor: unify target resolution for devices & emulators
* [GH-1130](https://github.com/apache/cordova-android/pull/1130) refactor: java checks
* [GH-1099](https://github.com/apache/cordova-android/pull/1099) refactor(`ProjectBuilder`): clean up output file collection code
* [GH-1123](https://github.com/apache/cordova-android/pull/1123) refactor: unify installation on devices & emulators
* [GH-1102](https://github.com/apache/cordova-android/pull/1102) refactor(`check_reqs`): cleanup default Java location detection on **Windows**
* [GH-1103](https://github.com/apache/cordova-android/pull/1103) refactor: do not kill adb on UNIX-like systems
* [GH-1086](https://github.com/apache/cordova-android/pull/1086) refactor(retry): simplify retryPromise using modern JS
* [GH-1085](https://github.com/apache/cordova-android/pull/1085) refactor(utils): reduce number of utils
* [GH-1046](https://github.com/apache/cordova-android/pull/1046) refactor: Stop suppressing un-needed TruelyRandom lints
* [GH-1016](https://github.com/apache/cordova-android/pull/1016) refactor: save `ProjectBuilder` instance in Api instance
* [GH-1108](https://github.com/apache/cordova-android/pull/1108) refactor: remove copied Adb.install from `emulator.install`

**Chores:**

* [GH-1196](https://github.com/apache/cordova-android/pull/1196) chore: add missing header license
* chore(asf): Update GitHub repo metadata
* [GH-1183](https://github.com/apache/cordova-android/pull/1183) chore: rebuilt package-lock
* [GH-1015](https://github.com/apache/cordova-android/pull/1015) chore: remove unnecessary stuff
* [GH-1081](https://github.com/apache/cordova-android/pull/1081) chore(pkg): remove deprecated `no-op` field `"engineStrict"`
* [GH-1019](https://github.com/apache/cordova-android/pull/1019) chore: remove unused `emulator.create_image` and its dependencies

**Tests & CI:**

* [GH-1017](https://github.com/apache/cordova-android/pull/1017) test(java): fix, improve and move clean script
* [GH-1012](https://github.com/apache/cordova-android/pull/1012) test: fix missing stack traces in jasmine output
* [GH-1013](https://github.com/apache/cordova-android/pull/1013) test(`pluginHandlers/common`): better setup & teardown
* [GH-1094](https://github.com/apache/cordova-android/pull/1094) test: fix unit test failures for certain random orders
* [GH-1094](https://github.com/apache/cordova-android/pull/1094) test: ensure single top-level describe block in test file
* [GH-1129](https://github.com/apache/cordova-android/pull/1129) test(java): remove duplicate code in `BackButtonMultipageTest`
* [GH-975](https://github.com/apache/cordova-android/pull/975) ci: Added Node 14.x
