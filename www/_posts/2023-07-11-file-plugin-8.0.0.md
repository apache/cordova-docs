---
layout: post
author:
    name: Bryan Ellis
title:  "File Plugin 8.0.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-file`!

* [cordova-plugin-file@8.0.0](https://www.npmjs.com/package/cordova-plugin-file)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-file
cordova plugin add cordova-plugin-file@8.0.0
```

## Release Highlights

### Breaking Changes

* **Removed `WRITE_EXTERNAL_STORAGE` permission**

    According to the official documentation on [Storage updates in Android 11](https://developer.android.com/about/versions/11/privacy/storage), the [`WRITE_EXTERNAL_STORAGE`](https://developer.android.com/reference/android/Manifest.permission#WRITE_EXTERNAL_STORAGE) permission is no longer operational and does not grant access to write to external storage.

    > If this permission is not allowlisted for an app that targets an API level before [`Build.VERSION_CODES.Q`](https://developer.android.com/reference/android/os/Build.VERSION_CODES#Q) (SDK 29) this permission cannot be granted to apps.

    Although Cordova has removed this permission from the plugin by default, you can still add it back if needed by using the `config-file` tag in your project's `config.xml` file.

    Example:

    ```xml
    <config-file target="AndroidManifest.xml" parent="/*" xmlns:android="http://schemas.android.com/apk/res/android">
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="32" />
    </config-file>
    ```

    It's important to note that other plugins used in your Cordova project may still include the `WRITE_EXTERNAL_STORAGE` permission. To verify whether the permission is added by other plugins, you can check the merged `AndroidManifest.xml` file.

    The merged `AndroidManifest.xml` file can be found at the following location:

    ```text
    platforms/android/app/build/intermediates/merged_manifest/debug/AndroidManifest.xml
    ```

    Please keep in mind that the example file path provided above is specific to debug builds. For release builds or different build variants, the file path may vary slightly.

* **Android 13+ Support**

    Beginning from Android 13 (SDK 33), the `READ_EXTERNAL_STORAGE` permission no longer has any effect. Instead, this permission has been replaced with more granular permissions: `READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO`, and `READ_MEDIA_AUDIO`.

    To adapt to this change, we have introduced these three new permissions. This ensures that the existing functionality and behavior related to reading various media file are maintained for Android 13 and higher versions.

    Furthermore, to support the new granular permissions and Android 13 (SDK 33), we have raised the minimum requirement for `cordova-android` to version `12.0.0`. This version of Cordova-Android specifically includes the necessary updates to handle Android 13 and compile your project with the new permissions successfully.

Please report any issues you find by following the this [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
## Changes Log

* [GH-534](https://github.com/apache/cordova-plugin-file/pull/534) fix(android): `FileError` on a content `resolveLocalFileSystemURL`
* [GH-566](https://github.com/apache/cordova-plugin-file/pull/566) feat(android): add `READ_MEDIA_*` permissions for Android 13+
* [GH-576](https://github.com/apache/cordova-plugin-file/pull/576) feat(android)!: bump `cordova-android@12` requirement
* [GH-575](https://github.com/apache/cordova-plugin-file/pull/575) ci: sync github workflow with paramedic base configs
* [GH-574](https://github.com/apache/cordova-plugin-file/pull/574) chore: update `@cordova/eslint-config@5.0.0` w/ fixes
* [GH-556](https://github.com/apache/cordova-plugin-file/pull/556) feat(android)!: remove `WRITE_EXTERNAL_STORAGE` permission from `plugin.xml`
* [GH-554](https://github.com/apache/cordova-plugin-file/pull/554) spec(android): fix spec based on testing environment
* [GH-547](https://github.com/apache/cordova-plugin-file/pull/547) fix(types): Mark `FileWriter.write` to support `ArrayBuffer` data
* [GH-535](https://github.com/apache/cordova-plugin-file/pull/535) ci: sync workflow with paramedic
* [GH-531](https://github.com/apache/cordova-plugin-file/pull/531) dep(npm): bump package-lock v2 w/ rebuild
* [GH-529](https://github.com/apache/cordova-plugin-file/pull/529) ci(android): update java requirement for `cordova-android@11`
