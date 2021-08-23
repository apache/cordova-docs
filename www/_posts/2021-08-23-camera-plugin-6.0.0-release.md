---
layout: post
author:
    name: Bryan Ellis
title:  "Camera Plugin 6.0.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to our Camera plugin!

We are happy to announce that we have just released an update for `Cordova Camera Plugin (6.0.0)`!

* [cordova-plugin-camera@6.0.0](https://www.npmjs.com/package/cordova-plugin-camera)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-camera
cordova plugin add cordova-plugin-camera@6.0.0
```

## Release Highlights

* Requires **`Cordova-Android` 10.x of higher**

    This major release has bumped the minimum Cordova-Android requirement to 10.x or higher. This requirement change was made for the **AndroidX Only Support** initiative.

    If your project is using an older Cordova-Android release, please upgrade the Android platform before using it.

    ```bash
    cordova platform remove android
    cordova platform add android@10.x
    ```

* **`AndroidX` Only Support**

    In this release, we have completely migrated to the AndroidX library and no longer support the Android Support Library. 

     If you were using the [cordova-plugin-androidx-adapter](https://www.npmjs.com/package/cordova-plugin-androidx-adapter) plugin to migrate the Camera's legacy Android Support Library references to the new AndroidX references, it can be removed unless your project is using other third-party plugins that have not migrated to AndroidX.

* **HEIC** Support

    We introduced support to encode the HEIC file formats to the defined `EncodingType` for WebView display.

* Package Visibility Support

    We have updated this plugin to support the breaking changes that were introduced in Android 11 around package visibility.

    For more information on package visibility, please check out the following Google's resources:

  * [Package visibility in Android 11](ttps://medium.com/androiddevelopers/package-visibility-in-android-11-cc857f221cd9)
  * [Package visibility filtering on Android](https://developer.android.com/training/package-visibility)

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

**Feature:**

* [GH-751](https://github.com/apache/cordova-plugin-camera/pull/751) feat(android)!: support **AndroidX**
* [GH-750](https://github.com/apache/cordova-plugin-camera/pull/750) feat(android): bump `cordova-android` requirements for `10.x`
* [GH-731](https://github.com/apache/cordova-plugin-camera/pull/731) feat(android): encode `heic` format to `EncodingType` for webview display [#711](https://github.com/apache/cordova-plugin-camera/issues/711)
* [GH-684](https://github.com/apache/cordova-plugin-camera/pull/684) feat(android): `sdk-30` package visibility support

**Fix:**

* [GH-687](https://github.com/apache/cordova-plugin-camera/pull/687) fix(android): return exception message (where it exists)
* [GH-585](https://github.com/apache/cordova-plugin-camera/pull/585) fix(android): file path correction if `Uri` authority is `FileProvider`
