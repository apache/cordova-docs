---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 14.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 14.0.0`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@14.0.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@14.0.0
```

**To install:**

```bash
cordova platform add android@14.0.0
```

## Release Highlights

### BREAKING CHANGES

* **Increased Target SDK**

    This release has increased the target SDK to 35 (Android 15).

* **Project Dependencies**

    The following Gradle dependencies were bumpped:

    * Gradle: `8.13`
    * Android Gradle Plugin (AGP): `8.7.3`

    Additionally, the following libraries have been upgraded:

    * AndroidX App Compat - `1.7.0`
    * AndroidX WebKit - `1.12.1`
    * AndroidX SplashScreen Core - `1.0.1`
    * Google Services Gradle Plugin - `4.4.2`

    If you or a plugin has made changes to any of the following configuration preferences, the build results might not match the expected outcomes with this release:

    |Preference|Default Value|
    |---|---|
    |`android-minSdkVersion`|24|
    |`android-maxSdkVersion`|_Not set_|
    |`android-targetSdkVersion`|35|
    |`android-compileSdkVersion`|_android-targetSdkVersion configured value_|
    |`android-buildToolsVersion`|35.0.0|
    |`GradleVersion`|8.13|
    |`AndroidGradlePluginVersion`|8.7.3|
    |`GradlePluginKotlinVersion`|1.9.24|
    |`AndroidXAppCompatVersion`|1.7.0|
    |`AndroidXWebKitVersion`|1.12.1|
    |`GradlePluginGoogleServicesVersion`|4.4.2|

    Please take note of the versions that have been updated in this release. If you have manually modified any of these values, it is recommended to review and update the preference values accordingly.

* **Increased Android Studio Requirement**

    With the increase of Android Gradle Plugin, Android Studio Ladybug is the minimum required version for building and running projects in Android Studio. This aligns with the [Android Gradle plugin and Android Studio compatibility](https://developer.android.com/build/releases/gradle-plugin#android_gradle_plugin_and_android_studio_compatibility) documentation.

* **Required Build Tools**

    To use `cordova-android@14.0.0`, SDK Platform `35` and SDK Build Tools `35.0.0` must be installed. Older build tools version can be uninstalled if older versions of cordova-android is no longer used in any of your projects.

    To install SDK Platform 35:

    1. Open Android Studio's **SDK Manager**:
    2. Click on `SDK Platforms` tab
    3. Check `Android 15.0 ("VanillaIceCream")` which has the `API Level` of `35`
    4. Click `Apply`

    <img src="{{ site.baseurl }}/static/img/blog/2025/cordova-android-14-platform-sdk-35.png" style="width: 100%;" alt="Android SDK Platform" />

    To install SDK Build Tools 35.0.0:

    5. Open Android Studio's **SDK Manager**:
    6. Click on `SDK Tools` tab
    7. Check `Show Package Details`
    8. Expand `Android SDK Build-Tools`
    9. Check `35.0.0`
    10. Click `Apply`

    <img src="{{ site.baseurl }}/static/img/blog/2025/cordova-android-14-sdk-build-tools-3500.png" style="width: 100%;" alt="Android SDK Build Tools" />

* **Increased Java Source & Target Compatibility**

    The Java Source & Target Compatibility has been increased to version 11. This aligns with the default settings used when creating a blank native project.

* **Increased Node.js Engine Requirement**

    The Node.js engine requirement in this release has been increased to version 20.5.0 or later.

* **Deprecated `CordovaPlugin`'s `initialize` Method**

    The `initialize` method of the `CordovaPlugin` class has been marked as deprecated and will be removed in a future release. While this method was always considered deprecated, it was not properly annotated to notify plugin developers.

    We recommend using the `pluginInitialize` method as a replacement for `initialize`.

* **Replaced Library `kotlin-stdlib-jdk*` with `kotlin-stdlib`**

    The `kotlin-stdlib-jdk*` libraries have been replaced with `kotlin-stdlib`. Both `kotlin-stdlib-jdk7` and `kotlin-stdlib-jdk8` are merged into `kotlin-stdlib`.

### Feature

* **Added `AndroidEdgeToEdge` Preference Support**

    By default, Android 15 enforces the Edge-to-Edge feature, which may affect some Apache Cordova apps.

    In this major release, Apache Cordova has opted out of the Edge-to-Edge feature to retain the original behavior and allow app developers ample time to make the necessary adjustments to support Edge-to-Edge.

    Users can re-enable the Edge-to-Edge feature using this new preference flag.

    It is expected that in Android's next major release, opting out of Edge-to-Edge will no longer be possible.

    Apache Cordova will continue to prepare for this expected future behavior change.

<!--more-->
# Changes include:

**Breaking Changes:**

* [GH-1788](https://github.com/apache/cordova-android/pull/1788) dep!: bump npm packages
  * nyc@17.1.0
  * which@5.0.0
  * semver@7.7.1
  * jasmine@5.6.0
  * android-versions@2.1.0
  * cordova-common@5.0.1
  * fast-glob@3.3.3
  * nopt@8.1.0
* [GH-1789](https://github.com/apache/cordova-android/pull/1789) feat!: bump node engine requirement `>=20.5.0`
* [GH-1784](https://github.com/apache/cordova-android/pull/1784) feat!: bump java default targets to 11
* [GH-1771](https://github.com/apache/cordova-android/pull/1771) feat!: deprecate CordovaPlugin's method initialize
* [GH-1767](https://github.com/apache/cordova-android/pull/1767) feat!: use kotlin-stdlib instead of kotlin-stdlib-jdk*
* [GH-1763](https://github.com/apache/cordova-android/pull/1763) feat!: SDK 35 Support

**Features:**

* [GH-1785](https://github.com/apache/cordova-android/pull/1785) feat: bump gradle to 8.13
* [GH-1779](https://github.com/apache/cordova-android/pull/1779) feat: add `AndroidEdgeToEdge` preference & theme flag
* [GH-1778](https://github.com/apache/cordova-android/pull/1778) feat: Account for Node security patch
* [GH-1768](https://github.com/apache/cordova-android/pull/1768) feat: `androidx.core:core-splashscreen@1.0.1`
* [GH-1766](https://github.com/apache/cordova-android/pull/1766) feat: `com.google.gms:google-services@4.4.2`
* [GH-1765](https://github.com/apache/cordova-android/pull/1765) feat: `androidx.webkit:webkit@1.12.1`
* [GH-1764](https://github.com/apache/cordova-android/pull/1764) feat: `androidx.appcompat:appcompat@1.7.0`

**Fixes:**

* [GH-1790](https://github.com/apache/cordova-android/pull/1790) fix: replace fs-extra.ensureFileSync with fs.writeFileSync
* [GH-1781](https://github.com/apache/cordova-android/pull/1781) fix: copy gradle wrapper from tools to platform root dir
* [GH-1770](https://github.com/apache/cordova-android/pull/1770) fix: creation of cdv-gradle-config.json w/ --link flag
* [GH-1739](https://github.com/apache/cordova-android/pull/1739) fix(docs): Incorrect JDK requirement stated in README
* [GH-1718](https://github.com/apache/cordova-android/pull/1718) fix: app restart when BT keyboard is connected in some devices

**Chores & Refactoring:**

* [GH-1786](https://github.com/apache/cordova-android/pull/1786) chore: add AndroidX build test to gitignore
* [GH-1774](https://github.com/apache/cordova-android/pull/1774) style: update & resolve doc block warnings
* [GH-1772](https://github.com/apache/cordova-android/pull/1772) refactor: replace fs-extra with node:fs
* [GH-1769](https://github.com/apache/cordova-android/pull/1769) refactor: prefix node:*
* [GH-1748](https://github.com/apache/cordova-android/pull/1748) chore(deps): bump cross-spawn from 7.0.3 to 7.0.6
* [GH-1750](https://github.com/apache/cordova-android/pull/1750) chore(ci): Fix dependabot PR failures
* [GH-1736](https://github.com/apache/cordova-android/pull/1736) chore(deps): bump micromatch from 4.0.5 to 4.0.8
* [GH-1716](https://github.com/apache/cordova-android/pull/1716) chore(deps): bump braces from 3.0.2 to 3.0.3
