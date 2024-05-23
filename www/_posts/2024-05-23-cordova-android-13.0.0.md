---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 13.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 13.0.0`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@13.0.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@13.0.0
```

**To install:**

```bash
cordova platform add android@13.0.0
```

## Release Highlights

### BREAKING CHANGES

* **Increased Target SDK**

    This release has increased the target SDK to 34 (Android 14).

* **Increased Android Studio Requirement**

    Android Studio Jellyfish is required if building and running from Android Studio.

* **Required Build Tools**

    To use `cordova-android@13`, SDK Platform `34` and SDK Build Tools `34.0.0` must be installed. Older build tools version can be uninstalled if older versions of cordova-android is no longer used in your projects.

    To install SDK Platform 34:

    1. Open Android Studio's **SDK Manager**:
    2. Click on `SDK Platforms` tab
    3. Check `Android 14.0 ("UpsideDownCake")` which has the `API Level` of `34`
    4. Click `Apply`

    <img src="{{ site.baseurl }}/static/img/blog/2024/cordova-android-13-platform-sdk-34.png" style="width: 100%;" alt="Android SDK Platform" />

    To install SDK Build Tools 34.0.0:

    5. Open Android Studio's **SDK Manager**:
    6. Click on `SDK Tools` tab
    7. Check `Show Package Details`
    8. Expand `Android SDK Build-Tools`
    9. Check `34.0.0`
    10. Click `Apply`

    <img src="{{ site.baseurl }}/static/img/blog/2024/cordova-android-13-sdk-build-tools-3400.png" style="width: 100%;" alt="Android SDK Build Tools" />

* **Project Dependencies**

    The following project dependencies were bumpped:

    * Kotlin: `1.9.24`
    * Gradle: `8.7`
    * Android Gradle Plugin (AGP): `8.3.0`

    If you or a plugin has made changes to any of the following configuration preferences, the build results might not match the expected outcomes with this release:

    * `android-minSdkVersion`
    * `android-maxSdkVersion`
    * `android-targetSdkVersion`
    * `android-compileSdkVersion`
    * `android-buildToolsVersion`
    * `GradleVersion`
    * `AndroidGradlePluginVersion`
    * `GradlePluginKotlinVersion`

    Please take note of the versions that have been updated in this release. If you have manually modified any of these values, it is recommended to review and update the preference values accordingly.

* **Increased Java Requirement**

    The Java Development Kit (JDK) requirement has been increased to version 17 due to the new versions of dependencies and tooling previously described.

* **Removed `kotlin-android-extensions`**

    `kotlin-android-extensions` will no longer be checked out when kotlin is less than or equal to version `1.8.0`.

### Feature

* **Added `SplashScreenBackgroundColor` Preference Support**

    Added support for a general preference to be consistent across platforms for setting the splash screen background color.

    The following order of priority is applied when it comes to the Cordova Android platform:

    * `AndroidWindowSplashScreenBackground` preference
    * `SplashScreenBackgroundColor` preference
    * `BackgroundColor` preference
    * `#ffffff` hardcoded

* **Add Camera Intent Support for File Input Capture**

    Allows user to access and use the camera when the HTML file `input` tag contains the `capture` flag.

    Example:

    ```html
    <input type="file" capture />
    ```

* **Added `ResolveServiceWorkerRequests` Preference Support**

    Added a preference that makes it possible for service worker requests to go through the asset loader. By default this is enabled.

    This can be disabled with the following preference.

    ```xml
    <preference name="ResolveServiceWorkerRequests" value="false" />
    ```

Please report any issues you find on our [Cordova-android](https://github.com/apache/cordova-android/issues) GitHub issue tracker!

<!--more-->
# Changes include:

**Breaking Changes:**

* [GH-1678](https://github.com/apache/cordova-android/pull/1678) feat!: API 34 Support
* [GH-1543](https://github.com/apache/cordova-android/pull/1543) feat!: bump `kotlin@1.9.24` & drop `kotlin-android-extensions` when kotlin `>=1.8.0`

**Features:**

* [GH-1700](https://github.com/apache/cordova-android/pull/1700) feat(splash): Support `SplashScreenBackgroundColor` preference
* [GH-1609](https://github.com/apache/cordova-android/pull/1609) feat: add camera intent with file input capture
* [GH-1696](https://github.com/apache/cordova-android/pull/1696) feat: Add `ResolveServiceWorkerRequests` preference

**Chores, Dependencies & CI:**

* [GH-1677](https://github.com/apache/cordova-android/pull/1677) chore(deps-dev): bump `@babel/traverse` from `7.22.10` to `7.23.2`
* [GH-1713](https://github.com/apache/cordova-android/pull/1713) dep: bump npm dependencies 20240515
  * `semver@7.6.2`
  * `rewire@7.0.0`
  * `nopt@7.2.1`
  * `jasmine@5.1.0`
  * `fs-extra@11.2.0`
  * `fast-glob@3.3.2`
  * `dedent@1.5.3`
  * `@cordova/eslint-config@5.1.0`
  * `which@4.0.0`
  * `properties-parser@0.6.0`
  * `android-versions@2.0.0`
* [GH-1711](https://github.com/apache/cordova-android/pull/1711) ci: Set up CodeQL analysis w/ fixes
* [GH-1687](https://github.com/apache/cordova-android/pull/1687) ci(release-audit): add license header and dependency checker
* [GH-1703](https://github.com/apache/cordova-android/pull/1703) ci: update `codecov@v4` w/ token
