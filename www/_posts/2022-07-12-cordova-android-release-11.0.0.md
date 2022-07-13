---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 11.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 11.0.0`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@11.0.0](https://www.npmjs.com/package/cordova-android)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@11.0.0
```

**To install:**

```bash
cordova platform add android@11.0.0
```

* **Android 12 SplashScreen API Integration**

    As of Android 12, all Android 12 or higher devices display the new app launch animation. Google has applied this requirement to bring a standard design to all app launch screens.

    Due to this requirement, users have seen and reported the display of multiple SplashScreens during the app launch. Since the new SplashScreen API can not be disabled, the old SplashScreen plugin is deprecated for Cordova-Android 11+.

    We have integrated the Android 12 SplashScreen API including the compatibility library into the core of the Cordova-Android platform to provide support for Android API 22+.

    Only some of the exisiting SplashScreen configurations from the old plugin are still supported. For example: `AutoHideSplashScreen`, `SplashScreenDelay`, `FadeSplashScreen`, & `FadeSplashScreenDuration`.

    With the integration of SplashScreen API 12, the following settings have been introduced:

    * `AndroidWindowSplashScreenAnimatedIcon`: Contains the path of the resource image of the SplashScreen Icon. Either an `XML Android Drawable` or `PNG`
    * `AndroidWindowSplashScreenBackground`: Contains the hex value of the SplashScreen background color. Default is white (#FFFFFF)
    * `AndroidWindowSplashScreenIconBackgroundColor`: Contains the hex value of the SplashScreen Icon's background color. Default is not defined.

    Also, there were also small behavior changes:

    * `SplashScreenDelay` with `AutoHideSplashScreen` enabled will automatically hide the SplashScreen after the `onPageFinished` is triggered. The original behavior can be restored by setting the setting the `SplashScreenDelay` preference to `3000`, if preferred.
    * `FadeSplashScreen` only controls the fade out.

    For more information, please refer to the [PR](https://github.com/apache/cordova-android/pull/1441) and [Cordova Docs](https://cordova.apache.org/docs/en/latest/core/features/splashscreen/index.html).

* **Tooling and Default Support Bump**

  * Target SDK (`targetSdk`): `32`
  * SDK Build Tool: `32.0.0`
  * Gradle: `7.4.2`
  * Kotlin: `1.5.21`
  * Android Gradle Plugin (AGP): `7.2.1`
  * Google Services Gradle Plugin: `4.3.10`
  * AndroidX App Compat Library: `1.4.2`
  * AndroidX WebKit Library: `1.4.0`
  * AndroidX SplashScreen Core Library: `1.0.0-rc01`

* **Environment Variable `ANDROID_HOME`**

    As of April 27, 2022, It appears Google has reversed its statement and declared that `ANDROID_HOME` is now the correct environment variable to set with the path of the SDK installation directory. It also notes that `ANDROID_SDK_ROOT` that also points to the SDK installation directory is deprecated.

* **Custom Compile SDK**

    We added back the ability to set a custom compileSdk value with the preference flag `android-compileSdkVersion`.

    Example:

    ```xml
    <preference name="android-compileSdkVersion" value="31" />
    ```

* **Node Support**

    Since Node 12 is no longer being supported by the Node.js team, we have dropped support for Node 12.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

**Breaking:**

* [GH-1441](https://github.com/apache/cordova-android/pull/1441) feat!: **Android** 12 splash screen
* [GH-1427](https://github.com/apache/cordova-android/pull/1427) feat!: API 32 support
* [GH-1410](https://github.com/apache/cordova-android/pull/1410) feat!: API 31 support
* [GH-1444](https://github.com/apache/cordova-android/pull/1444) fix!: set & use `ANDROID_HOME` as default
* [GH-1411](https://github.com/apache/cordova-android/pull/1411) chore!: Drop Node 12 support

**Features:**

* [GH-1448](https://github.com/apache/cordova-android/pull/1448) feat: Update `androidx.appcompat` version
* [GH-1446](https://github.com/apache/cordova-android/pull/1446) feat: Update gradle plugin version
* [GH-1447](https://github.com/apache/cordova-android/pull/1447) feat: Update google services pluging
* [GH-1431](https://github.com/apache/cordova-android/pull/1431) feat: support custom `compileSdk` setting
* [GH-1311](https://github.com/apache/cordova-android/pull/1311) feat: added support for BoM imports

**Fixes:**

* [GH-1455](https://github.com/apache/cordova-android/pull/1455) fix(`prepare`): `destFile` path separator
* [GH-1453](https://github.com/apache/cordova-android/pull/1453) fix: support installing platfrom from local git checkout
* [GH-1449](https://github.com/apache/cordova-android/pull/1449) fix: accept file cookies only if `AndroidInsecureFileModeEnabled`
* [GH-1443](https://github.com/apache/cordova-android/pull/1443) fix: force `hostname` to lowercase
* [GH-1434](https://github.com/apache/cordova-android/pull/1434) fix: restore `checkReqs` in `prepare.js`
* [GH-1154](https://github.com/apache/cordova-android/pull/1154) fix: move `MainActivity.java` to folder that tracks the app package name (widget id)

**Chores, Dependencies & CI:**

* [GH-1451](https://github.com/apache/cordova-android/pull/1451) chore: display warning on deprecated `<splash>` tag usage
* [GH-1430](https://github.com/apache/cordova-android/pull/1430) chore: remove unneeded deprecated annotation
* [GH-1421](https://github.com/apache/cordova-android/pull/1421) chore(npm): bump `@cordova/eslint-config@^4.0.0`
* [GH-1420](https://github.com/apache/cordova-android/pull/1420) chore(npm): bump dependencies
* [GH-1452](https://github.com/apache/cordova-android/pull/1452) dep: bump `jasmine@4.2.1` w/ `package-lock` rebuild
* [GH-1439](https://github.com/apache/cordova-android/pull/1439) ci: update github action workflow
* [GH-1424](https://github.com/apache/cordova-android/pull/1424) ci: Added Node 18 to test matrix