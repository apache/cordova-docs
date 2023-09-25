---
layout: post
author:
    name: Bryan Ellis
title:  "Camera 7.0.0, Media 7.0.0 & File-Transfer 2.0.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for the following plugins!

* [cordova-plugin-camera@7.0.0](https://www.npmjs.com/package/cordova-plugin-camera)
* [cordova-plugin-media@7.0.0](https://www.npmjs.com/package/cordova-plugin-media)
* [cordova-plugin-file-transfer@2.0.0](https://www.npmjs.com/package/cordova-plugin-file-transfer)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-camera
cordova plugin add cordova-plugin-camera@7.0.0

cordova plugin remove cordova-plugin-media
cordova plugin add cordova-plugin-media@7.0.0

cordova plugin remove cordova-plugin-file-transfer
cordova plugin add cordova-plugin-file-transfer@2.0.0
```

## Release Highlights

### `cordova-plugin-camera`

* **Android 13 Support**

    In this release of the `camera` plugin, the `maxSdkTarget` for the `WRITE_EXTERNAL_STORAGE` permission has been set to `32`. This change was made as the permission has been deprecated and replaced by Android 13's more granular permissions, `READ_MEDIA_IMAGES` and `READ_MEDIA_VIDEO`. Additionally, the `getPermissions` method has been improved to accurately fetch the required permissions based on the Android version. If Android 13 and above, it will also fetch based on media type.

    Furthermore, to support the new granular permissions and Android 13 (SDK 33), we have raised the minimum requirement for `cordova-android` to version `12.0.0`. This version of Cordova-Android specifically includes the necessary updates to handle Android 13 and compile your project with the new permissions successfully.

* **Removed Deprecated Platforms**

    As the Cordova-Windows and Cordova-OSX platform has been deprecated, the supporting logic for these platforms has been removed from this plugin.

* **Retain Image Exif Data from Photo Library (iOS)**

    This release contains a fix to preserve image's EXIF data for iOS.

### `cordova-plugin-media`

* **Android 13 Support**

    In this release of the `media` plugin, the depdendency of the file plugin has been bumped to `8.0.0` which introduced Android 13 support. This support includes the Android 13's more granular permissions `READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO`, and `READ_MEDIA_AUDIO`.

    Additional we have raised the minimum requirement for `cordova-android` to version `12.0.0`.

    For more information, check out the [Cordova's File Plugin 8.0.0 release blog post](https://cordova.apache.org/news/2023/07/11/file-plugin-8.0.0.html).

* **Removed Deprecated Windows Platforms**

    As the Cordova-Windows platform has been deprecated, the supporting logic for that platform has been removed from this plugin.

* **Ability to load files from custom scheme and leading slash directory paths**

    The file plugin can now accept URL constructed with a custom scheme or a leading slash.

    **Custom Scheme Example:**

    By default, iOS uses the following custom scheme `app://localhost/`. You can now pass in `app://localhost/file.txt` to prepresent a file in the root directory which the app content is loaded from, `www`.

    **Leading Slash Example:**

    It can also load the same file `file.txt` from the above example if the provided URL was `/file.txt`. It will navigate from the root directory of which the app content is loaded from, `www`.

* **Increased Android's Audio Quality**

### `cordova-plugin-file-transfer`

* **Bumped File Dependecy for Android 13 Support**

    In this release of the `file-transfer` plugin, the dependency on the file plugin has been updated to version `8.0.0`, enabling Android 13 support. Consequently, the minimum requirement for `cordova-android` has been raised to version `12.0.0` to align with the updated file plugin.

    For more information, check out the [Cordova's File Plugin 8.0.0 release blog post](https://cordova.apache.org/news/2023/07/11/file-plugin-8.0.0.html).

* **Removed Deprecated Platforms**

    As the Cordova Windows/WP8, OSX, Amazon Fire OS, Blackberry 10, Windows Phone & Firefox OS platform has been deprecated, the supporting logic for these platforms has been removed from this plugin.

* **Removed Deprecated `whitelist` Plugin**

    The legacy `whitelist` plugin has been deprecated for a long time and is no longer needed in the `file-transfer` plugin. This plugin will continue call and check against the `shouldAllowRequest` method which is apart of the platform core coding.

    Refer to the [Allow List](https://cordova.apache.org/docs/en/12.x/guide/appdev/allowlist/index.html) page of the Cordova Documentation for more information in how to configure the list.

* **Fixed Download Functionality for Android Q+**
* **Removed Hardcoded `X-Requested-With` Header**
* **Fixed Missing Headers on File Upload**
* **Re-implemented UserAgent Overwrites**

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-plugin-camera

**Breaking Changes:**

* [GH-848](https://github.com/apache/cordova-plugin-camera/pull/848) fix!: remove deprecated platforms
* [GH-844](https://github.com/apache/cordova-plugin-camera/pull/844) feat(android)!: Android 13 support

**Fixes:**

* [GH-827](https://github.com/apache/cordova-plugin-camera/pull/827) fix(android): set `applicationId`
* [GH-810](https://github.com/apache/cordova-plugin-camera/pull/810) fix(browser): use `navigator.mediaDevices.getUserMedia`
* [GH-712](https://github.com/apache/cordova-plugin-camera/pull/712) fix(ios): preserving `EXIF` data
* [GH-780](https://github.com/apache/cordova-plugin-camera/pull/780) fix(android): update queries in `plugin.xml`

**Chores, Dependencies, Docs:**

* [GH-850](https://github.com/apache/cordova-plugin-camera/pull/850) chore: remove windows/osx from `plugin.xml`
* [GH-849](https://github.com/apache/cordova-plugin-camera/pull/849) chore: Update `SUPPORT_QUESTION.md` template
* [GH-831](https://github.com/apache/cordova-plugin-camera/pull/831) chore(android): Cleanup obsolete `BuildConfig` comments
* [GH-846](https://github.com/apache/cordova-plugin-camera/pull/846) dep(dev)!: bump `@cordova/eslint-config@5.0`
* [GH-800](https://github.com/apache/cordova-plugin-camera/pull/800) dep(npm): bump package-lock v2 w/ rebuild
* [GH-808](https://github.com/apache/cordova-plugin-camera/pull/808) docs(README): Document `ANDROIDX_CORE_VERSION` variable

**CI:**

* [GH-851](https://github.com/apache/cordova-plugin-camera/pull/851) ci(gh-action): sync with `paramedic` configs
* [GH-835](https://github.com/apache/cordova-plugin-camera/pull/835) ci(android): Drop API 22 & 31. Added API 24 & 33
* [GH-804](https://github.com/apache/cordova-plugin-camera/pull/804) ci: sync workflow with `paramedic`
* [GH-798](https://github.com/apache/cordova-plugin-camera/pull/798) ci(android): update java requirement for `cordova-android@11`
* [GH-770](https://github.com/apache/cordova-plugin-camera/pull/770) ci(ios): update workflow w/ iOS 15
* [GH-766](https://github.com/apache/cordova-plugin-camera/pull/766) ci: remove old ci workflow
* [GH-765](https://github.com/apache/cordova-plugin-camera/pull/765) ci: add action-badge
* [GH-764](https://github.com/apache/cordova-plugin-camera/pull/764) ci: remove `travis` & `appveyor`
* [GH-762](https://github.com/apache/cordova-plugin-camera/pull/762) ci: add `gh-actions` workflows

## cordova-plugin-media

**Breaking Changes:**

* [GH-384](https://github.com/apache/cordova-plugin-media/pull/384) fix!: remove deprecated `windows` platform
* [GH-378](https://github.com/apache/cordova-plugin-media/pull/378) feat(android)!: bump file & **Android** requirements

**Features:**

* [GH-362](https://github.com/apache/cordova-plugin-media/pull/362) feat(ios): load media files with custom scheme+hostname and leading directory paths
* [GH-383](https://github.com/apache/cordova-plugin-media/pull/383) feat(android): increase audio encoding bitrate and sampling rate
* [GH-382](https://github.com/apache/cordova-plugin-media/pull/382) feat(android): support Android 13 permission checks and requests

**Others:**

* [GH-381](https://github.com/apache/cordova-plugin-media/pull/381) dep(dev)!: bump `@cordova/eslint-config@5.0.0`
* [GH-377](https://github.com/apache/cordova-plugin-media/pull/377) ci: sync github action workflow w/ paramedic base configs

## cordova-plugin-file-transfer

**Breaking Changes:**

* [GH-360](https://github.com/apache/cordova-plugin-file-transfer/pull/360) feat(android)!: bump `cordova-plugin-file@8.0.0` & `cordova-android >= 12.0.0`
* [GH-346](https://github.com/apache/cordova-plugin-file-transfer/pull/346) feat(windows)!: remove deprecated platform Windows
* [GH-307](https://github.com/apache/cordova-plugin-file-transfer/pull/307) feat!: remove deprecated `whitelist` usage
* [GH-270](https://github.com/apache/cordova-plugin-file-transfer/pull/270) feat!: remove deprecated platforms (Amazon Fire OS, BlackBerry, Windows Phone, Firefox OS, Windows 8)
* [GH-370](https://github.com/apache/cordova-plugin-file-transfer/pull/370) dep(server)!: bump `forever@4.0.3`, `iconv@3.0.1`, `busboy@1.6.0` & rebuilt `package-lock`

**Fixes:**

* [GH-372](https://github.com/apache/cordova-plugin-file-transfer/pull/372) fix(tests): Use `https` on file urls
* [GH-371](https://github.com/apache/cordova-plugin-file-transfer/pull/371) fix(tests): change default server port
* [GH-361](https://github.com/apache/cordova-plugin-file-transfer/pull/361) fix: test version
* [GH-310](https://github.com/apache/cordova-plugin-file-transfer/pull/310) fix(android): enable download functionality with **Android** Q
* [GH-313](https://github.com/apache/cordova-plugin-file-transfer/pull/313) fix: incorrect asset file paths in test
* [GH-287](https://github.com/apache/cordova-plugin-file-transfer/pull/287) fix(ios): remove hardcoded `X-Requested-With` header
* [GH-284](https://github.com/apache/cordova-plugin-file-transfer/pull/284) fix(ios): headers are not being sent
* [GH-268](https://github.com/apache/cordova-plugin-file-transfer/pull/268) fix(ios): re-implement user agent overwrite
* [GH-199](https://github.com/apache/cordova-plugin-file-transfer/pull/199) fix(windows): js error "The parameter is incorrect"

**Chores:**

* [GH-373](https://github.com/apache/cordova-plugin-file-transfer/pull/373) chore: add missing license header
* [GH-368](https://github.com/apache/cordova-plugin-file-transfer/pull/368) chore: remove windows leftovers
* [GH-335](https://github.com/apache/cordova-plugin-file-transfer/pull/335) chore: remove use-permission `WRITE_EXTERNAL_STORAGE`
* [GH-324](https://github.com/apache/cordova-plugin-file-transfer/pull/324) chore: `package-lock` upgrade
* [GH-323](https://github.com/apache/cordova-plugin-file-transfer/pull/323) chore: .npmrc
* [GH-299](https://github.com/apache/cordova-plugin-file-transfer/pull/299) chore: bump 'protective' entry for major release 2.0 to come
* [GH-274](https://github.com/apache/cordova-plugin-file-transfer/pull/274) chore: adds `package-lock` file
* [GH-272](https://github.com/apache/cordova-plugin-file-transfer/pull/272) chore: package cleanup
* [GH-269](https://github.com/apache/cordova-plugin-file-transfer/pull/269) chore(npm): adds ignore list

**Dependencies, CI, and Doc:**

* [GH-369](https://github.com/apache/cordova-plugin-file-transfer/pull/369) dep: bump `@cordova/eslint-config@5.0.0` & rebuilt `package-lock`
* [GH-344](https://github.com/apache/cordova-plugin-file-transfer/pull/344) dep(npm): bump `package-lock` v2 & rebuilt
* [GH-341](https://github.com/apache/cordova-plugin-file-transfer/pull/341) dep(server): bump `i` from `0.3.6` to `0.3.7`
* [GH-329](https://github.com/apache/cordova-plugin-file-transfer/pull/329) dep: bump `minimist` from `1.2.5` to `1.2.6`
* [GH-362](https://github.com/apache/cordova-plugin-file-transfer/pull/362) ci: sync github action workflow w/ paramedic base configs
* [GH-348](https://github.com/apache/cordova-plugin-file-transfer/pull/348) ci: sync workflow with paramedic
* [GH-343](https://github.com/apache/cordova-plugin-file-transfer/pull/343) ci(android): update java requirement for `cordova-android@11`
* [GH-318](https://github.com/apache/cordova-plugin-file-transfer/pull/318) ci(ios): update workflow w/ **iOS** 15
* [GH-315](https://github.com/apache/cordova-plugin-file-transfer/pull/315) ci: add action-badge
* [GH-314](https://github.com/apache/cordova-plugin-file-transfer/pull/314) ci: remove `travis` & `appveyor`
* [GH-311](https://github.com/apache/cordova-plugin-file-transfer/pull/311) ci: add `gh-actions` workflows
* [GH-280](https://github.com/apache/cordova-plugin-file-transfer/pull/280) doc: Improve `progressEvent` documentation
* [GH-267](https://github.com/apache/cordova-plugin-file-transfer/pull/267) doc: undeprecate the plugin
* [GH-211](https://github.com/apache/cordova-plugin-file-transfer/pull/211) doc: remove outdated translations