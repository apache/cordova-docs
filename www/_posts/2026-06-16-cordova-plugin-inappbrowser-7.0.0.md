---
layout: post
author:
    name: Manuel Beck
    url: https://github.com/GitToTheHub
title:  "Cordova Plugin InAppBrowser 7.0.0 Released!"
categories: announcements
tags: news releases plugins
---

We are happy to announce that we have just released an update to `cordova-plugin-inappbrowser`! 

* [cordova-plugin-inappbrowser@7.0.0](https://www.npmjs.com/package/cordova-plugin-inappbrowser)

## Release Highlights

This major update makes the plugin compatible with cordova-ios 8.0.0, fixes layout issues with [XCode 26 compiling for iOS 26](https://github.com/apache/cordova-plugin-inappbrowser/pull/1132), layout issues regarding not respecting the [safe areas of the iPhone X](https://github.com/apache/cordova-plugin-inappbrowser/pull/1099) and newer (iPhone 11, 12, etc.) and layout issues on [Android when the footer is used](https://github.com/apache/cordova-plugin-inappbrowser/pull/1148).

Some other relvant changes:
* Make zoom on-screen controls configurable on Android
* Fixes issues ragarding the `beforeload` event on Android and iOS
* Cookies or data were not properly cleared when the options `cleardata`, `clearcache` or `clearsessioncache` were set on Android and iOS
* The callback context will only be changed for non-whitelisted urls (Android) or target `_blank` (Android/iOS)
* Fix XCode deprecations warnings
* In-app browser did not show when using cordova-ios 8.0.0

Please report any issues you find on [GitHub](https://github.com/apache/cordova-plugin-inappbrowser/issues)!

<!--more-->
## Changes include

### Breaking Changes

* chore(ios)!: Remove unused private method ([#1113](https://github.com/apache/cordova-plugin-inappbrowser/pull/1113)) [[b7ab3d0](https://github.com/apache/cordova-plugin-inappbrowser/commit/b7ab3d0)]
* refactor(ios)!: remove property `instance` and getter method `getInstance` ([#1116](https://github.com/apache/cordova-plugin-inappbrowser/pull/1116)) [[c5a0979](https://github.com/apache/cordova-plugin-inappbrowser/commit/c5a0979)]

### Features

* feat(android): make zoom on-screen controls configurable ([#1023](https://github.com/apache/cordova-plugin-inappbrowser/pull/1023)) [[24c6738](https://github.com/apache/cordova-plugin-inappbrowser/commit/24c6738)]
* feat(ios): use `UIBarButtonSystemItemClose` since iOS 26 ([#1138](https://github.com/apache/cordova-plugin-inappbrowser/pull/1138)) [[5cf7c2d](https://github.com/apache/cordova-plugin-inappbrowser/commit/5cf7c2d)]
* feat(ios): Support custom scheme event for iOS ([#1112](https://github.com/apache/cordova-plugin-inappbrowser/pull/1112)) [[03831d7](https://github.com/apache/cordova-plugin-inappbrowser/commit/03831d7)]
* feat(ios): correct code formatting ([#1100](https://github.com/apache/cordova-plugin-inappbrowser/pull/1100)) [[fb5b469](https://github.com/apache/cordova-plugin-inappbrowser/commit/fb5b469)]

### Fixes

* fix: add `data` property for `InAppBrowserEvnet` type ([#1118](https://github.com/apache/cordova-plugin-inappbrowser/pull/1118)) [[18ef50d](https://github.com/apache/cordova-plugin-inappbrowser/commit/18ef50d)]
* fix: defer navigation until async cookie or data clearing completes ([#1150](https://github.com/apache/cordova-plugin-inappbrowser/pull/1150)) [[1b0be4a](https://github.com/apache/cordova-plugin-inappbrowser/commit/1b0be4a)]
* fix(android): change callback context only on non-whitelisted urls or target `_blank` ([#1147](https://github.com/apache/cordova-plugin-inappbrowser/pull/1147)) [[694adb0](https://github.com/apache/cordova-plugin-inappbrowser/commit/694adb0)]
* fix(android): `beforeload` event fires only once ([#1146](https://github.com/apache/cordova-plugin-inappbrowser/pull/1146)) [[160e414](https://github.com/apache/cordova-plugin-inappbrowser/commit/160e414)]
* fix(android): place footer below WebView instead of overlaying content ([#1148](https://github.com/apache/cordova-plugin-inappbrowser/pull/1148)) [[56fb083](https://github.com/apache/cordova-plugin-inappbrowser/commit/56fb083)]
* fix(ios): fix white screen on iOS 13+ when in-app browser window scene is nil ([#1131](https://github.com/apache/cordova-plugin-inappbrowser/pull/1131)) [[c1c6544](https://github.com/apache/cordova-plugin-inappbrowser/commit/c1c6544)]
* fix(ios): render in-app browser underneath the status bar ([#1158](https://github.com/apache/cordova-plugin-inappbrowser/pull/1158)) [[40ff663](https://github.com/apache/cordova-plugin-inappbrowser/commit/40ff663)]
* fix(ios): replace macro `kCloseButtonSystemItem` with static function to fix XCode warning ([#1153](https://github.com/apache/cordova-plugin-inappbrowser/pull/1153)) [[60a5c73](https://github.com/apache/cordova-plugin-inappbrowser/commit/60a5c73)]
* fix(ios): check callbackId with regex ([#1152](https://github.com/apache/cordova-plugin-inappbrowser/pull/1152)) [[e0bd9dc](https://github.com/apache/cordova-plugin-inappbrowser/commit/e0bd9dc)]
* fix(ios): suppress expected cancellation errors when `beforeload` is set ([#1145](https://github.com/apache/cordova-plugin-inappbrowser/pull/1145)) [[0cea6cc](https://github.com/apache/cordova-plugin-inappbrowser/commit/0cea6cc)]
* fix(ios): Don't call `beforeload` on POST and `beforeload=yes` ([#1144](https://github.com/apache/cordova-plugin-inappbrowser/pull/1144)) [[f71de8f](https://github.com/apache/cordova-plugin-inappbrowser/commit/f71de8f)]
* fix(ios): set callbackId only on target=_blank, update readme ([#1143](https://github.com/apache/cordova-plugin-inappbrowser/pull/1143)) [[6106897](https://github.com/apache/cordova-plugin-inappbrowser/commit/6106897)]
* fix(ios): constraint warnings in iOS 18 and older ([#1123](https://github.com/apache/cordova-plugin-inappbrowser/pull/1123)) [[bad3830](https://github.com/apache/cordova-plugin-inappbrowser/commit/bad3830)]
* fix(ios): add custom toolbar background ([#1132](https://github.com/apache/cordova-plugin-inappbrowser/pull/1132)) [[c140eaf](https://github.com/apache/cordova-plugin-inappbrowser/commit/c140eaf)]
* fix(ios): constrain address label horizontal to safe area for landscape ([#1126](https://github.com/apache/cordova-plugin-inappbrowser/pull/1126)) [[de95bb2](https://github.com/apache/cordova-plugin-inappbrowser/commit/de95bb2)]
* fix(ios): full width WebView on landscape ([#1120](https://github.com/apache/cordova-plugin-inappbrowser/pull/1120)) [[22ebb87](https://github.com/apache/cordova-plugin-inappbrowser/commit/22ebb87)]
* fix(ios): suppress deprecation warning for `processPool` for`deployment-target` greater than 14 ([#1119](https://github.com/apache/cordova-plugin-inappbrowser/pull/1119)) [[105b0ae](https://github.com/apache/cordova-plugin-inappbrowser/commit/105b0ae)]
* fix(ios): remove use of deprecated `CDVWebViewProcessPoolFactory` ([#1115](https://github.com/apache/cordova-plugin-inappbrowser/pull/1115)) [[f76988e](https://github.com/apache/cordova-plugin-inappbrowser/commit/f76988e)]
* fix(ios): simplify using `CDVSettingsDictionary` in older cordova-ios versions ([#1105](https://github.com/apache/cordova-plugin-inappbrowser/pull/1105)) [[f67412f](https://github.com/apache/cordova-plugin-inappbrowser/commit/f67412f)]
* fix(ios): use `cordovaSettingForKey:` instead of `objectForKey:` ([#1106](https://github.com/apache/cordova-plugin-inappbrowser/pull/1106)) [[540bfe3](https://github.com/apache/cordova-plugin-inappbrowser/commit/540bfe3)]
* fix(ios): set minimum cordova-ios to 6.2.0 ([#1107](https://github.com/apache/cordova-plugin-inappbrowser/pull/1107)) [[15714f4](https://github.com/apache/cordova-plugin-inappbrowser/commit/15714f4)]
* fix(ios): Use `CDVSettingsDictionary` since cordova-ios 8 [[b52242a](https://github.com/apache/cordova-plugin-inappbrowser/commit/b52242a)]
* fix(ios): deprecation of `UIActivityIndicatorViewStyleGray` ([#1104](https://github.com/apache/cordova-plugin-inappbrowser/pull/1104)) [[6f413e0](https://github.com/apache/cordova-plugin-inappbrowser/commit/6f413e0)]
* fix(ios): replace `UIBarStyleBlackOpaque` with `UIBarStyleBlack` ([#1103](https://github.com/apache/cordova-plugin-inappbrowser/pull/1103)) [[d4ae06d](https://github.com/apache/cordova-plugin-inappbrowser/commit/d4ae06d)]
* fix(ios): remove use of `CDVScreenOrientationDelegate` ([#1101](https://github.com/apache/cordova-plugin-inappbrowser/pull/1101)) [[246f2a0](https://github.com/apache/cordova-plugin-inappbrowser/commit/246f2a0)]
* fix(ios): use auto layout to respect safe areas ([#1099](https://github.com/apache/cordova-plugin-inappbrowser/pull/1099)) [[375c02b](https://github.com/apache/cordova-plugin-inappbrowser/commit/375c02b)]
* fix(iOS): IAB not showing up in apps using UIScenes ([#1067](https://github.com/apache/cordova-plugin-inappbrowser/pull/1067)) [[e2d8429](https://github.com/apache/cordova-plugin-inappbrowser/commit/e2d8429)]
* fix(types): support beforeload listener signature in TypeScript defs ([#1149](https://github.com/apache/cordova-plugin-inappbrowser/pull/1149)) [[e28ca69](https://github.com/apache/cordova-plugin-inappbrowser/commit/e28ca69)]

### Others

* doc(readme): improve `addEventListener` examples ([#1142](https://github.com/apache/cordova-plugin-inappbrowser/pull/1142)) [[7a90dde](https://github.com/apache/cordova-plugin-inappbrowser/commit/7a90dde)]
* doc(readme): update badges ([#1140](https://github.com/apache/cordova-plugin-inappbrowser/pull/1140)) [[d922047](https://github.com/apache/cordova-plugin-inappbrowser/commit/d922047)]
* chore(ios): remove pre ios 11 code in `show:withNoAnimate:` ([#1135](https://github.com/apache/cordova-plugin-inappbrowser/pull/1135)) [[8d2845b](https://github.com/apache/cordova-plugin-inappbrowser/commit/8d2845b)]
* chore(ios): resolve variable `safeArea` ([#1121](https://github.com/apache/cordova-plugin-inappbrowser/pull/1121)) [[89cd5fe](https://github.com/apache/cordova-plugin-inappbrowser/commit/89cd5fe)]
* chore(ios): Cleanup code ([#1117](https://github.com/apache/cordova-plugin-inappbrowser/pull/1117)) [[6b28d2d](https://github.com/apache/cordova-plugin-inappbrowser/commit/6b28d2d)]
* refactor(ios): refactor code for clearing data ([#1137](https://github.com/apache/cordova-plugin-inappbrowser/pull/1137)) [[f40f41b](https://github.com/apache/cordova-plugin-inappbrowser/commit/f40f41b)]
* refactor(ios): adding toolbar items ([#1124](https://github.com/apache/cordova-plugin-inappbrowser/pull/1124)) [[b83a9b7](https://github.com/apache/cordova-plugin-inappbrowser/commit/b83a9b7)]
* refactor(ios): handle constraints in cases ([#1125](https://github.com/apache/cordova-plugin-inappbrowser/pull/1125)) [[ddab657](https://github.com/apache/cordova-plugin-inappbrowser/commit/ddab657)]
* refactor(ios): remove unused method `invertFrameIfNeeded` ([#1102](https://github.com/apache/cordova-plugin-inappbrowser/pull/1102)) [[dfce3c7](https://github.com/apache/cordova-plugin-inappbrowser/commit/dfce3c7)]
* doc(ios): constraint warnings on iOS 26 and using `initWithBarButtonSystemItem` ([#1127](https://github.com/apache/cordova-plugin-inappbrowser/pull/1127)) [[42e12dd](https://github.com/apache/cordova-plugin-inappbrowser/commit/42e12dd)]
* chore: Remove unused inappbrowser.css file ([#1038](https://github.com/apache/cordova-plugin-inappbrowser/pull/1038)) [[eac7303](https://github.com/apache/cordova-plugin-inappbrowser/commit/eac7303)]
* chore: bump to major 7.0.0-dev ([#1156](https://github.com/apache/cordova-plugin-inappbrowser/pull/1156)) [[cc727aa](https://github.com/apache/cordova-plugin-inappbrowser/commit/cc727aa)]
* chore: bump version to 6.1.0-dev ([#1108](https://github.com/apache/cordova-plugin-inappbrowser/pull/1108)) [[322182a](https://github.com/apache/cordova-plugin-inappbrowser/commit/322182a)]
* chore: incremented plugin version 6.0.1-dev [[f27c663](https://github.com/apache/cordova-plugin-inappbrowser/commit/f27c663)]
* chore: add changelog from 6.0.1 ([#1159](https://github.com/apache/cordova-plugin-inappbrowser/pull/1159)) [[92a53a9](https://github.com/apache/cordova-plugin-inappbrowser/commit/92a53a9)]
* chore: update npm package ([#1134](https://github.com/apache/cordova-plugin-inappbrowser/pull/1134)) [[4f9d07d](https://github.com/apache/cordova-plugin-inappbrowser/commit/4f9d07d)]
* chore: gh-action workflow, license header formatting & cleanups ([#1095](https://github.com/apache/cordova-plugin-inappbrowser/pull/1095)) [[1e4ab4b](https://github.com/apache/cordova-plugin-inappbrowser/commit/1e4ab4b)]
* chore(ci): add/update release workflows ([#1157](https://github.com/apache/cordova-plugin-inappbrowser/pull/1157)) [[e1cb106](https://github.com/apache/cordova-plugin-inappbrowser/commit/e1cb106)]
* chore(deps-dev): bump @cordova/eslint-config to 6.0.0 w/ lint fixes ([#1096](https://github.com/apache/cordova-plugin-inappbrowser/pull/1096)) [[4cf5c24](https://github.com/apache/cordova-plugin-inappbrowser/commit/4cf5c24)]
* chore(gitattributes): normalize line endings and binary detection ([#1139](https://github.com/apache/cordova-plugin-inappbrowser/pull/1139)) [[675002f](https://github.com/apache/cordova-plugin-inappbrowser/commit/675002f)]
* chore(INFRA): Set up default protection ruleset for default and release branches ([#1151](https://github.com/apache/cordova-plugin-inappbrowser/pull/1151)) [[efd32a9](https://github.com/apache/cordova-plugin-inappbrowser/commit/efd32a9)]
* chore(workflow): update workflows to the latest one of cordova-paramedic ([#1141](https://github.com/apache/cordova-plugin-inappbrowser/pull/1141)) [[3fdfc96](https://github.com/apache/cordova-plugin-inappbrowser/commit/3fdfc96)]
* ci: remove osx ([#1111](https://github.com/apache/cordova-plugin-inappbrowser/pull/1111)) [[c1eaf3b](https://github.com/apache/cordova-plugin-inappbrowser/commit/c1eaf3b)]
* ci: sync workflow w/ paramedic ([#1068](https://github.com/apache/cordova-plugin-inappbrowser/pull/1068)) [[dfde59d](https://github.com/apache/cordova-plugin-inappbrowser/commit/dfde59d)]
