---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 8.2.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 8.2.0`! This is one of Cordova's supported platforms for building iOS applications.

This release includes general improvements and fixes for several bugs.

* [cordova-ios@8.2.0](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@8.2.0
```

**To install:**

```bash
cordova platform add ios@8.2.0
```

## Release Highlights

* Replaced `ios-deploy` with `devicectl` to support deployment to newer iOS versions.
* Changed the appearance of the statusbar according to background color.
* Added support to use plugin variables within the `Package.swift` file. Plugin variables are the variables specified from CLI or default `preference` in `plugin.xml`.
* Added support to build with Xcode 27's strict minimum OS version of 15.0 while maintaining the current minimum of 13.0 on older Xcode versions.

The following fixes were also included:

* Fixed an issue where `window.handleOpenURL` was never called on a cold launch from a custom-scheme deep link under the UIScene lifecycle.
* Fixed the deliver of universal links on cold launch.
* Fixed the ability to allow apps to display any Unicode characters for its app bundle and display name while the `EXECUTABLE_NAME` uses ASCII.
* Fixed an issue where `CordovaPlugins` deployment target was not being synced correctly across prepares.
* Fixed the StatusBar for iPhone Duo to dynamically adjust the background UIView depending on the vertical edge on which the status bar is displayed.
* Fixed a regression that caused UIDelegate to not be retained and ensure that alert, confirm, and prompt dialogs works as expected.

<!--more-->
## Changes include:

## 8.2.0

**Features:**

* feat(devicectl): Use devicectl for deploying to devices ([#1636](https://github.com/apache/cordova-ios/pull/1636)) [[8c2f680b](https://github.com/apache/cordova-ios/commit/8c2f680b)]
* feat(statusbar): change dark/light appearance according to background color ([#1689](https://github.com/apache/cordova-ios/pull/1689)) [[c1d4cafa](https://github.com/apache/cordova-ios/commit/c1d4cafa)]
* feat: Replace plugin variables with their actual values ([#1724](https://github.com/apache/cordova-ios/pull/1724)) [[97254540](https://github.com/apache/cordova-ios/commit/97254540)]

**Fixes:**

* fix: deliver cold-launch deep link URLs after page load ([#1681](https://github.com/apache/cordova-ios/pull/1681)) [[15d090dc](https://github.com/apache/cordova-ios/commit/15d090dc)]
* fix(CDVSceneDelegate): deliver universal links on cold launch ([#1717](https://github.com/apache/cordova-ios/pull/1717)) [[cbffdab9](https://github.com/apache/cordova-ios/commit/cbffdab9)]
* fix(CDVStatusBarTests): wait for native exec ([#1680](https://github.com/apache/cordova-ios/pull/1680)) [[bad09df9](https://github.com/apache/cordova-ios/commit/bad09df9)]
* fix(ci): disable parallel testing ([#1690](https://github.com/apache/cordova-ios/pull/1690)) [[21eebe98](https://github.com/apache/cordova-ios/commit/21eebe98)]
* fix(codesigning): Use an ASCII EXECUTABLE_NAME ([#1697](https://github.com/apache/cordova-ios/pull/1697)) [[0ac0fcfa](https://github.com/apache/cordova-ios/commit/0ac0fcfa)]
* fix(spm): keep `CordovaPlugins` deployment target synced across prepares ([#1687](https://github.com/apache/cordova-ios/pull/1687)) [[8e6e86b4](https://github.com/apache/cordova-ios/commit/8e6e86b4)]
* fix(statusbar): Fix status bar on iPhone Duo ([#1733](https://github.com/apache/cordova-ios/pull/1733)) [[930a5e6c](https://github.com/apache/cordova-ios/commit/930a5e6c)]
* fix(tests): Fix test warnings about nil UISceneSession ([#1694](https://github.com/apache/cordova-ios/pull/1694)) [[f525ec9e](https://github.com/apache/cordova-ios/commit/f525ec9e)]
* fix(wkwebview): retain UIDelegate to restore alert/confirm/prompt ([#1686](https://github.com/apache/cordova-ios/pull/1686)) [[ba8b9ecb](https://github.com/apache/cordova-ios/commit/ba8b9ecb)]

**Others:**

* chore: action workflow updates & add dependabot ([#1704](https://github.com/apache/cordova-ios/pull/1704)) [[74c8cd44](https://github.com/apache/cordova-ios/commit/74c8cd44)]
* chore(dep): bump xcode@4.0.0, update package-lock, and remove overrides ([#1739](https://github.com/apache/cordova-ios/pull/1739)) [[0f8edd6c](https://github.com/apache/cordova-ios/commit/0f8edd6c)]
* chore(deps-dev): bump brace-expansion from 1.1.18 to 1.1.21 ([#1729](https://github.com/apache/cordova-ios/pull/1729)) [[d2c79225](https://github.com/apache/cordova-ios/commit/d2c79225)]
* chore(deps-dev): bump js-yaml from 4.3.1 to 4.3.2 ([#1719](https://github.com/apache/cordova-ios/pull/1719)) [[7c145afe](https://github.com/apache/cordova-ios/commit/7c145afe)]
* chore(deps-dev): bump js-yaml from 4.3.0 to 4.3.1 ([#1691](https://github.com/apache/cordova-ios/pull/1691)) [[7b91086a](https://github.com/apache/cordova-ios/commit/7b91086a)]
* chore(deps): bump the gh-actions-patch-minor group with 2 updates ([#1741](https://github.com/apache/cordova-ios/pull/1741)) [[29596ce3](https://github.com/apache/cordova-ios/commit/29596ce3)]
* chore(deps): bump the gh-actions-patch-minor group with 3 updates ([#1738](https://github.com/apache/cordova-ios/pull/1738)) [[4087d860](https://github.com/apache/cordova-ios/commit/4087d860)]
* chore(deps): bump the gh-actions-patch-minor group with 2 updates ([#1727](https://github.com/apache/cordova-ios/pull/1727)) [[18da7760](https://github.com/apache/cordova-ios/commit/18da7760)]
* chore(deps): bump codecov/codecov-action ([#1726](https://github.com/apache/cordova-ios/pull/1726)) [[67d882f5](https://github.com/apache/cordova-ios/commit/67d882f5)]
* chore(deps): bump bplist-parser in the npm-minor group ([#1721](https://github.com/apache/cordova-ios/pull/1721)) [[ae548eb6](https://github.com/apache/cordova-ios/commit/ae548eb6)]
* chore(deps): bump the gh-actions-patch-minor group with 2 updates ([#1722](https://github.com/apache/cordova-ios/pull/1722)) [[6c81a9cb](https://github.com/apache/cordova-ios/commit/6c81a9cb)]
* chore(deps): bump actions/deploy-pages ([#1718](https://github.com/apache/cordova-ios/pull/1718)) [[80528eb4](https://github.com/apache/cordova-ios/commit/80528eb4)]
* chore(deps): bump the gh-actions-patch-minor group with 2 updates ([#1715](https://github.com/apache/cordova-ios/pull/1715)) [[05eb5be3](https://github.com/apache/cordova-ios/commit/05eb5be3)]
* chore(deps): Update npm dependencies ([#1703](https://github.com/apache/cordova-ios/pull/1703)) [[bfe72898](https://github.com/apache/cordova-ios/commit/bfe72898)]
* chore(deps): bump the gh-actions-patch-minor group with 2 updates ([#1710](https://github.com/apache/cordova-ios/pull/1710)) [[9bb2a60a](https://github.com/apache/cordova-ios/commit/9bb2a60a)]
* chore(deps): bump the npm-minor group with 2 updates ([#1705](https://github.com/apache/cordova-ios/pull/1705)) [[4de09945](https://github.com/apache/cordova-ios/commit/4de09945)]
* chore(doc): document deprecation of `CDVPluginResult.associatedObject` with samples ([#1682](https://github.com/apache/cordova-ios/pull/1682)) [[30d53bec](https://github.com/apache/cordova-ios/commit/30d53bec)]
* chore(docs): pass new EventEmitter when creating iOS project instance ([#1678](https://github.com/apache/cordova-ios/pull/1678)) [[4ef1687c](https://github.com/apache/cordova-ios/commit/4ef1687c)]
* chore(post-release): bump v8.2.0-dev.0 ([#1677](https://github.com/apache/cordova-ios/pull/1677)) [[ede64044](https://github.com/apache/cordova-ios/commit/ede64044)]
* chore(versions): Vary minimum version based on compile SDK ([#1663](https://github.com/apache/cordova-ios/pull/1663)) [[0b7e76b0](https://github.com/apache/cordova-ios/commit/0b7e76b0)]
* chore(workflow): update upload-to-atr action ([#1716](https://github.com/apache/cordova-ios/pull/1716)) [[2dcd6758](https://github.com/apache/cordova-ios/commit/2dcd6758)]
* doc(CDVViewController): document `scrollViewDidChangeAdjustedContentInset:` ([#1699](https://github.com/apache/cordova-ios/pull/1699)) [[2df10328](https://github.com/apache/cordova-ios/commit/2df10328)]
* doc(statusbar.js): document `visible` property and `setBackgroundColor` method ([#1670](https://github.com/apache/cordova-ios/pull/1670)) [[04fccb98](https://github.com/apache/cordova-ios/commit/04fccb98)]
* doc(statusbar): Hide/Show mechanism for Mac Catalyst by `HideDesktopTitlebar` ([#1696](https://github.com/apache/cordova-ios/pull/1696)) [[36db6c31](https://github.com/apache/cordova-ios/commit/36db6c31)]
* refactor: RELEASENOTES.md ([#1742](https://github.com/apache/cordova-ios/pull/1742)) [[0d1c88e4](https://github.com/apache/cordova-ios/commit/0d1c88e4)]
* refactor(CDVViewController): use property dot syntax ([#1713](https://github.com/apache/cordova-ios/pull/1713)) [[17e473ee](https://github.com/apache/cordova-ios/commit/17e473ee)]
* refactor(CDVViewController): rename `statusBarBackground` to `statusBarBackgroundView` ([#1712](https://github.com/apache/cordova-ios/pull/1712)) [[c627a6d3](https://github.com/apache/cordova-ios/commit/c627a6d3)]
* refactor(CDVViewController): rename method `createStatusBarView` to `createStatusBarBackgroundView` ([#1711](https://github.com/apache/cordova-ios/pull/1711)) [[e5575018](https://github.com/apache/cordova-ios/commit/e5575018)]
* refactor(CDVViewController): rename `statusBar` to `statusBarBackground` ([#1700](https://github.com/apache/cordova-ios/pull/1700)) [[4503f6c8](https://github.com/apache/cordova-ios/commit/4503f6c8)]
* refactor(statusbar): Refactor the status bar hiding code ([#1701](https://github.com/apache/cordova-ios/pull/1701)) [[3b3c7578](https://github.com/apache/cordova-ios/commit/3b3c7578)]
* test: Silence 2 test case warnings ([#1702](https://github.com/apache/cordova-ios/pull/1702)) [[01d5288f](https://github.com/apache/cordova-ios/commit/01d5288f)]
