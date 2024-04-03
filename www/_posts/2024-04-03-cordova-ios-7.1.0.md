---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 7.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 7.1.0`! This is one of Cordova's supported platforms for building iOS applications.

* [cordova-ios@7.1.0](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@7.1.0
```

**To install:**

```bash
cordova platform add ios@7.1.0
```

## Release Highlights

### Features

* **`SplashScreenBackgroundColor` preference support**

    This preference allows you to set the splashscreen's background colour. If no `SplashScreenBackgroundColor` is provided, it will fall back to the `BackgroundColor`, which is the current behavior, and then fallback to the system background colour when nothing is defined.

* **`privacy-manifest` Support**

    This release supplies the templated blank privacy manifest file, `PrivacyInfo.xcprivacy` which can be configured from `config.xml`.

    This release focuses specifically on providing support for app developers to set this configuration, while a later release will introduce support for plugin developers.

    It is recommended that plugin developers help app developers by providing in their plugin documentation the necessary configuration setup.

    Below is an example config.xml entry that app developers can define to configure the privacy manifest file.

    ```xml
    <platform name="ios">
        <privacy-manifest>
            <key>NSPrivacyTracking</key>
            <true/>
            <key>NSPrivacyCollectedDataTypes</key>
            <array/>
            <key>NSPrivacyAccessedAPITypes</key>
            <array/>
            <key>NSPrivacyTrackingDomains</key>
            <array/>
        </privacy-manifest>
    </platform>
    ```

    The contents and values of `NSPrivacyTracking`, `NSPrivacyCollectedDataTypes`, `NSPrivacyAccessedAPITypes`, and `NSPrivacyTrackingDomains` will depend on the specific native APIs being utilized.

    It is recommended to read the Apple Developer documentation to better understand these parameters.

    * [Privacy manifest files](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files)
    * [Describing use of required reason API](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)
    * [Describing data use in privacy manifests](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)

### Fixes

* **Use `PROVISIONING_PROFILE_SPECIFIER` for manual codesigning**

    Previously, the `PROVISIONING_PROFILE` flag was being set for manual codesigning. This flag only accepted the provisioning profile's `UUID`. To accept the provisioning profile's `name` value, the `PROVISIONING_PROFILE_SPECIFIER` flag should be set instead. The `PROVISIONING_PROFILE_SPECIFIER` flag accepts both `name` and `UUID` values for the specified provisioning profile.

* **WASM MIME type error**

    This release added the `application/wasm` MIME type to `Info.plist` so that WebAssembly can load.

Please report any issues you find on our [Cordova-iOS](https://github.com/apache/cordova-iOS/issues) GitHub issue tracker!

<!--more-->
# Changes include:

**Features:**

* [GH-1411](https://github.com/apache/cordova-ios/pull/1411) feat: `SplashScreenBackgroundColor` preference support
* [GH-1406](https://github.com/apache/cordova-ios/pull/1406) feat: add `privacy-manifest` config support
* [GH-1383](https://github.com/apache/cordova-ios/pull/1383) feat: add PrivacyInfo.xcprivacy for CordovaLib & app template

**Fixes:**

* [GH-1405](https://github.com/apache/cordova-ios/pull/1405) fix: use `PROVISIONING_PROFILE_SPECIFIER` for manual codesigning
* [GH-1374](https://github.com/apache/cordova-ios/pull/1374) fix: WASM MIME type error by specifying it in Info.plist template

**Chores:**

* [GH-1413](https://github.com/apache/cordova-ios/pull/1413) chore(deps): Modernize some dependencies
* [GH-1404](https://github.com/apache/cordova-ios/pull/1404) chore: update package & package-lock
* [GH-1382](https://github.com/apache/cordova-ios/pull/1382) chore(deps-dev): bump `@babel/traverse` from 7.21.4 to 7.23.2
* [GH-1380](https://github.com/apache/cordova-ios/pull/1380) chore: Update Slack signup link in SUPPORT_QUESTION.md

**CI:**

* [GH-1412](https://github.com/apache/cordova-ios/pull/1412) ci: Fix ObjC testing with latest Xcode
* [GH-1408](https://github.com/apache/cordova-ios/pull/1408) ci(gh-action): add Apache RAT & package license checker workflow w/ license header additions
