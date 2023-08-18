---
layout: post
author:
    name: Bryan Ellis
title:  "Media-Capture Plugin 5.0.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-media-capture`!

* [cordova-plugin-media-capture@5.0.0](https://www.npmjs.com/package/cordova-plugin-media-capture)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-media-capture
cordova plugin add cordova-plugin-media-capture@5.0.0
```

## Release Highlights

### Breaking Changes

* **Android 13+ Support**

    Beginning from Android 13 (SDK 33), the `READ_EXTERNAL_STORAGE` permission no longer has any effect. Instead, this permission has been replaced with more granular permissions: `READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO`, and `READ_MEDIA_AUDIO`. Also the `WRITE_EXTERNAL_STORAGE` has [stopped providing write access starting from API level 30 and above](https://developer.android.com/reference/android/Manifest.permission#WRITE_EXTERNAL_STORAGE).

    To adapt to this change, we have introduced these three new permissions. This ensures that the existing functionality and behavior related to reading various media file are maintained for Android 13 and higher versions.

    The `READ_EXTERNAL_STORAGE` and  `WRITE_EXTERNAL_STORAGE` permissions are still defined but has declared the `maxSdkVersion` attribute with the value of `32` to ensure that the are not used in API 33 of higher.

    Furthermore, to support the new granular permissions on Android 13 (SDK 33), we have raised the minimum requirement for `cordova-android` to version `12.0.0`. This version of Cordova-Android specifically includes the necessary updates to handle Android 13 and compile your project with the new permissions successfully.

### Features & Fixes

* **Added video `quality` option for iOS**

    You can now change the quality of the video that is being captured for iOS. By default, it will capture the highest quality.

* **Fixes for various iOS crashes**

    Various fixes were implemented to enhance stability and user experience on iOS. Here are some example changes:

    1. Implement an alert dialog to guide users to enable necessary permissions if they had previously denied them. This will occur when users attempt to use the capture feature.
    2. Improve the layout of the audio capture interface to fit and use the entire device screen.
    3. Implement safeguards to prevent application crashes in scenarios where audio data is unavailable ensuring a smoother and more reliable user experience.
    4. Implement measures to maintain the functionality of the capture feature even when users dismiss the capture window by swiping, ensuring consistent and uninterrupted functionality.

Please report any issues you find by following the this [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
## Changes Log

**Breaking Changes:**

* [GH-274](https://github.com/apache/cordova-plugin-media-capture/pull/274) feat(android)!: bump file & **Android** requirements
* [GH-262](https://github.com/apache/cordova-plugin-media-capture/pull/262) feat(android)!: support API 33+ permissions

**Features:**

* [GH-214](https://github.com/apache/cordova-plugin-media-capture/pull/214) feat(ios): support capture '`quality`' param for videos
* [GH-256](https://github.com/apache/cordova-plugin-media-capture/pull/256) feat(ios): improve `Localizable.strings` & add `FR`

**Fixes:**

* [GH-184](https://github.com/apache/cordova-plugin-media-capture/pull/184) fix(ios): UI issues with main thread and added alert for permission.
* [GH-279](https://github.com/apache/cordova-plugin-media-capture/pull/279) fix(ios): UI sizing of the audio capture controller according to parent view size
* [GH-278](https://github.com/apache/cordova-plugin-media-capture/pull/278) fix(ios): `CAPTURE_APPLICATION_BUSY` error when dismissing modal by swipe
* [GH-197](https://github.com/apache/cordova-plugin-media-capture/pull/197) fix(ios): set type attribute for captured audio
* [GH-232](https://github.com/apache/cordova-plugin-media-capture/pull/232) fix(android): prevent app crash caused by NPE on intent data or `mediaFile`
* [GH-195](https://github.com/apache/cordova-plugin-media-capture/pull/195) fix(MediaFiles): return missing '`lastModified`' and '`end`' attributes
* [GH-212](https://github.com/apache/cordova-plugin-media-capture/pull/212) fix: use single version in `cordovaDependencies`
* [GH-269](https://github.com/apache/cordova-plugin-media-capture/pull/269) fix(ios): set category before creating `AVAudioRecorder`

**Other Changes:**

* [GH-276](https://github.com/apache/cordova-plugin-media-capture/pull/276) dep: bump `@cordova/eslint-config@^5.0.0` w/ lint fix & `package-lock` rebuild
* [GH-270](https://github.com/apache/cordova-plugin-media-capture/pull/270) chore: Update `SUPPORT_QUESTION.md` template
* [GH-252](https://github.com/apache/cordova-plugin-media-capture/pull/252) chore(npm): rebuilt `package-lock`
* [GH-273](https://github.com/apache/cordova-plugin-media-capture/pull/273) ci: sync github action workflow w/ paramedic base configs
* [GH-254](https://github.com/apache/cordova-plugin-media-capture/pull/254) ci: sync workflow with paramedic
* [GH-251](https://github.com/apache/cordova-plugin-media-capture/pull/251) ci(android): update java requirement for `cordova-android@11`
