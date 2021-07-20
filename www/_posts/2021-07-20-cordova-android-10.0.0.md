---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 10.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 10.0.0`!  This is one of Cordova's supported platforms for building Android mobile applications.

* [cordova-android@10.0.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@10.0.0
```

## Release Highlights

* **`AndroidX` Only Support**

    In this release, we have completely migrated to the AndroidX library and no longer support the Android Support Library. All plugins that continue to use the Android Support Library will need to be updated to reference the new AndroidX library.

    If plugins have not been updated, you can still use the [cordova-plugin-androidx-adapter](https://www.npmjs.com/package/cordova-plugin-androidx-adapter) plugin, which can be used to migrate the legacy references to the new AndroidX references.

* **`WebViewAssetLoader` Support**

   By default, the `WebViewAssetLoader` is enabled and allows apps to serve their content from a 'proper' origin. This will makes routing work easily for frameworks like Angular.

    With no additional configurations, the app content is served from `https://localhost/`. You can configure the hostname by setting the preference option `hostname`.

    ```xml
    <preference name="hostname" value="localhost" />
    ```

    The scheme, `https`, is not configurable by nature.

    Please note that this is a breaking change that will cause data associated with the `file://` scheme, such as cookies, local storage, local cache, and web-based databases, to be lost. You will need to handle the migration of data. If you are unable to migrate the data at this time, you can revert this setting by setting the `AndroidInsecureFileModeEnabled` preference flag.

    ```xml
    <preference name="AndroidInsecureFileModeEnabled" value="true" />
    ```

    Setting this flag will keep the content on the  `file://` scheme, which Google reports to be insecure.

* **Android App Bundles `aab` Support**

    By default, release builds will now generate an `aab` formatted package type for release.

    By nature, `aab` packages can not be deployed or pushed manually to a device for testing. If you need to test a release build, you will need to change the package type back to `apk` with the `packageType` flag.

    Debug builds will continue to create an `apk` formatted package.

* **Tooling and Default Support Bump**

    * Target SDK (`targetSdk`): `30`
    * SDK Build Tool: `30.0.3`
    * Gradle: `7.1.1`
    * Kotlin: `1.5.20`
    * Android Gradle Plugin (AGP): `4.2.2`
    * Google Services Gradle Plugin: `4.3.5`

* **Node Support**

    Since Node 10 is no longer being supported by the Node.js team, we have dropped support for Node 10.

* **Java 11 Support**

    With the current release of Android Studio 4.2, the Android tooling can now support running on Java 11. Please note that this does not mean you can start compiling Java 11 source code.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

## Notice of Issue

There is a known issue for users or plugins that enable the Google Services Gradle plugin.

https://github.com/apache/cordova-android/issues/1284

We are preparing and aiming for a patch release vote within the next three days.

<!--more-->
## Full Changelog

**Breaking:**

* [GH-1052](https://github.com/apache/cordova-android/pull/1052) feat!: only support `AndroidX`
* [GH-1137](https://github.com/apache/cordova-android/pull/1137) feat!: implement `WebViewAssetLoader`
* [GH-1268](https://github.com/apache/cordova-android/pull/1268) feat!: release build defaults to `aab` package type
* [GH-1182](https://github.com/apache/cordova-android/pull/1182) feat!: bump `target sdk@30` w/ `build-tool@30.0.3`
* [GH-1257](https://github.com/apache/cordova-android/pull/1257) feat!: upgrade `gradle@7.1.1`
* [GH-1197](https://github.com/apache/cordova-android/pull/1197) feat!: upgrade `gradle@6.8.3`
* [GH-1256](https://github.com/apache/cordova-android/pull/1256) feat!: upgrade `kotlin@1.5.20`
* [GH-1204](https://github.com/apache/cordova-android/pull/1204) feat!: upgrade `kotlin@1.4.32`
* [GH-1200](https://github.com/apache/cordova-android/pull/1200) feat!: upgrade `kotlin@1.4.31`
* [GH-1255](https://github.com/apache/cordova-android/pull/1255) feat!: upgrade `android-gradle-plugin@4.2.2`
* [GH-1232](https://github.com/apache/cordova-android/pull/1232) feat!: upgrade `android-gradle-plugin@4.2.1`
* [GH-1198](https://github.com/apache/cordova-android/pull/1198) feat!: upgrade `android-gradle-plugin@4.1.3`
* [GH-1199](https://github.com/apache/cordova-android/pull/1199) feat!: upgrade `Google Services Gradle Plugin@4.3.5`
* [GH-1262](https://github.com/apache/cordova-android/pull/1262) feat!: bump `appcompat@1.3.0`
* [GH-1258](https://github.com/apache/cordova-android/pull/1258) feat!: bump `android.webkit@1.4.0`
* [GH-1252](https://github.com/apache/cordova-android/pull/1252) feat!: drop abandoned `com.github.dcendents:android-maven-gradle-plugin`
* [GH-1212](https://github.com/apache/cordova-android/pull/1212) feat!: unify & fix gradle library/tooling overrides
* [GH-1138](https://github.com/apache/cordova-android/pull/1138) feat(allow-list)!: integrate and refactor core plugin
* [GH-1201](https://github.com/apache/cordova-android/pull/1201) feat!: upgrade jfrog `gradle-bintray-plugin@1.8.5`
* [GH-1279](https://github.com/apache/cordova-android/pull/1279) chore!: bump all dependencies
* [GH-1278](https://github.com/apache/cordova-android/pull/1278) chore!: drop `node` 10 support
* [GH-1205](https://github.com/apache/cordova-android/pull/1205) chore! (`npm`): update all dependencies
* [GH-1274](https://github.com/apache/cordova-android/pull/1274) cleanup!: remove deprecated settings & add todo comments
* [GH-1048](https://github.com/apache/cordova-android/pull/1048) cleanup!: remove `keystore` password prompt
* [GH-1251](https://github.com/apache/cordova-android/pull/1251) cleanup!: drop `jcenter` & update dependencies
* [GH-1269](https://github.com/apache/cordova-android/pull/1269) refactor!: do not copy JS lib to platform project
* [GH-1270](https://github.com/apache/cordova-android/pull/1270) refactor(Api)!: use version from `package.json`
* [GH-1266](https://github.com/apache/cordova-android/pull/1266) refactor(run)!: `run` method
* [GH-1083](https://github.com/apache/cordova-android/pull/1083) refactor!: drop support for `android` SDK tool
* [GH-1100](https://github.com/apache/cordova-android/pull/1100) refactor!: remove most platform binaries

**Features:**

* [GH-1241](https://github.com/apache/cordova-android/pull/1241) feat: remove `java` 1.8 version check
* [GH-1254](https://github.com/apache/cordova-android/pull/1254) feat: support `webkit` version override
* [GH-1229](https://github.com/apache/cordova-android/pull/1229) feat: `CORDOVA_JAVA_HOME` env variable
* [GH-1222](https://github.com/apache/cordova-android/pull/1222) feat: add backwards compatibility mode for `WebViewAssetLoader`
* [GH-1166](https://github.com/apache/cordova-android/pull/1166) feat: overload `PluginEntry` constructor to set onload property
* [GH-1208](https://github.com/apache/cordova-android/pull/1208) feat: allow `appcompat` version to be configurable
* [GH-1047](https://github.com/apache/cordova-android/pull/1047) feat: Deprecated `onRequestPermissionResult` in favour for `onRequestPermissionsResult` for consistency

**Fixes:**

* [GH-1283](https://github.com/apache/cordova-android/pull/1283) fix: add missing apache-license header to `getASPath.bat`
* [GH-1275](https://github.com/apache/cordova-android/pull/1275) fix: add `WebViewAssetloader` to default allow list
* [GH-1216](https://github.com/apache/cordova-android/pull/1216) fix: request focus after custom view hided
* [GH-1264](https://github.com/apache/cordova-android/pull/1264) fix: missing `super.onRequestPermissionsResult` error (`MissingSuperCall`)
* [GH-563](https://github.com/apache/cordova-android/pull/563) fix(build): support tilde expansion on Windows
* [GH-1220](https://github.com/apache/cordova-android/pull/1220) fix(`requirements` check): use regex to get java version from javac output
* [GH-1227](https://github.com/apache/cordova-android/pull/1227) fix(prepare): delete splash screens if none are used
* [GH-1228](https://github.com/apache/cordova-android/pull/1228) fix: java checks
* [GH-1276](https://github.com/apache/cordova-android/pull/1276) fix: remove forced default `gradle.daemon` setting

**Refactors:**

* [GH-1265](https://github.com/apache/cordova-android/pull/1265) refactor: do not infer project root from script location
* [GH-1267](https://github.com/apache/cordova-android/pull/1267) refactor: use target SDK of built APK to determine best emulator
* [GH-1253](https://github.com/apache/cordova-android/pull/1253) refactor: `gradle` cleanup
* [GH-1260](https://github.com/apache/cordova-android/pull/1260) refactor(`check_reqs`): drop `originalError` param from `check_android_target`
* [GH-1246](https://github.com/apache/cordova-android/pull/1246) refactor(`env/java`): improve tests and implementation

**Chores & Cleanup:**

* [GH-1273](https://github.com/apache/cordova-android/pull/1273) chore: remove old `VERSION` file
* [GH-1272](https://github.com/apache/cordova-android/pull/1272) cleanup: delete old ANT & Eclipse files
* [GH-1141](https://github.com/apache/cordova-android/pull/1141) cleanup: remove app cache settings

**CI, Build & Testing:**

* [GH-1218](https://github.com/apache/cordova-android/pull/1218) ci: Add `Node16` to CI matrix
* [GH-1271](https://github.com/apache/cordova-android/pull/1271) build: build `cordova.js` during npm prepare
* [GH-1207](https://github.com/apache/cordova-android/pull/1207) test(`AndroidManifest`): update theme to `Theme.AppCompat.NoActionBar`
* [GH-1263](https://github.com/apache/cordova-android/pull/1263) test(`check_reqs`): do not hardcode `DEFAULT_TARGET_API`
* [GH-1259](https://github.com/apache/cordova-android/pull/1259) test(`prepare`): factor out common vars
