---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 8.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 8.1.1`! This is one of Cordova's supported platforms for building iOS applications.

This release includes general improvements and fixes for several bugs.

* [cordova-ios@8.1.1](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@8.1.1
```

**To install:**

```bash
cordova platform add ios@8.1.1
```

## Release Highlights

* Updated the status bar's `setBackgroundColor` JS API to support alpha.
* Fixed a **CordovaLib** build issue that prevented compilation for `visionOS` by removing status bar related incompatibilities.
* Fixed `WKWebView` to avoid registering the plugin as the script message handler when the `ViewController` already implements `WKScriptMessageHandler`.
* Added missing **CordovaLib** version availability macros and tests to ensure future releases include the required version definitions.

<!--more-->
## Changes include:

**Fixes:**

* fix: dont call nativeFetchMessages if not implemented ([#1643](https://github.com/apache/cordova-ios/pull/1643)) [[355f39be](https://github.com/apache/cordova-ios/commit/355f39be)]
* fix: proper macro check for `TARGET_OS_VISION` ([#1667](https://github.com/apache/cordova-ios/pull/1667)) [[fefb9316](https://github.com/apache/cordova-ios/commit/fefb9316)]
* fix(statusbar): Support setting alpha from the JS API ([#1661](https://github.com/apache/cordova-ios/pull/1661)) [[410ada64](https://github.com/apache/cordova-ios/commit/410ada64)]
* fix(visionOS): Fix CordovaLib visionOS errors ([#1665](https://github.com/apache/cordova-ios/pull/1665)) [[25486db2](https://github.com/apache/cordova-ios/commit/25486db2)]
* fix(wkwebview): fix ViewController being the ScriptMessageHandler ([#1664](https://github.com/apache/cordova-ios/pull/1664)) [[5669c2c9](https://github.com/apache/cordova-ios/commit/5669c2c9)]
* fix: add missing availability macros and add tests to ensure it's set ([#1662](https://github.com/apache/cordova-ios/pull/1662)) [[49230b01](https://github.com/apache/cordova-ios/commit/49230b01)]

**Others:**

* chore: ignore SPM dependency resolution `Package.resolved` ([#1666](https://github.com/apache/cordova-ios/pull/1666)) [[0f404b10](https://github.com/apache/cordova-ios/commit/0f404b10)]
* chore: release notes for 8.1.0 [[3d52d7b3](https://github.com/apache/cordova-ios/commit/3d52d7b3)]
* chore: bump version to 8.1.1-dev.0 [[a2f0cc54](https://github.com/apache/cordova-ios/commit/a2f0cc54)]
* chore(ci): update & clean workflow ([#1673](https://github.com/apache/cordova-ios/pull/1673)) [[4994749e](https://github.com/apache/cordova-ios/commit/4994749e)]
* chore(deps-dev): bump js-yaml from 4.1.1 to 4.3.0 ([#1672](https://github.com/apache/cordova-ios/pull/1672)) [[bd0c99b4](https://github.com/apache/cordova-ios/commit/bd0c99b4)]
* chore(deps-dev): bump tmp from 0.2.6 to 0.2.7 ([#1668](https://github.com/apache/cordova-ios/pull/1668)) [[c20cdc93](https://github.com/apache/cordova-ios/commit/c20cdc93)]
* chore(deps-dev): bump tmp from 0.2.5 to 0.2.6 ([#1657](https://github.com/apache/cordova-ios/pull/1657)) [[7db38623](https://github.com/apache/cordova-ios/commit/7db38623)]
* chore(workflow): more refactoring ([#1674](https://github.com/apache/cordova-ios/pull/1674)) [[eb65a51e](https://github.com/apache/cordova-ios/commit/eb65a51e)]
