---
layout: post
author:
    name: Niklas Merz
title:  "Cordova iOS 8.1.0 is now available!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 8.1.0`! This is one of Cordova's supported platforms for building iOS applications.

This release contains fixes for several bugs that were reported against the 8.0.1 version.

* [cordova-ios@8.1.0](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@8.1.0
```

**To install:**

```bash
cordova platform add ios@8.1.0
```

## Release Highlights

* **Fix for Ionic WebView plugin**

    Re-add an implementation of the deprecated shouldOverrideLoadWithRequest:navigationType: selector because the Ionic WebView plugin relies on it.

* **Fix /_app_file_/ URLs not working**

    During refactoring of the URLSchemeTask handler for cordova-ios 8, an error was introduced where /_app_file_ URLs were treated as being relative to the resources directory rather than as filesystem paths.

* **Fixes various build issues**

<!--more-->
## Changes include:

**Fixes:**

* [GH-1653](https://github.com/apache/cordova-ios/pull/1653) fix(actions): fix CDVURLSchemeHandlerTest warnings
* [GH-1652](https://github.com/apache/cordova-ios/pull/1652) fix(actions): IPhone 16e not found on macOS 26 for latest OS
* [GH-1640](https://github.com/apache/cordova-ios/pull/1640) fix: `NSInternalInconsistencyException: "No response has been sent for this task"` - second attempt
* [GH-1637](https://github.com/apache/cordova-ios/pull/1637) fix(build): Target a generic **iOS** simulator for building
* [GH-1632](https://github.com/apache/cordova-ios/pull/1632) fix(ionic): Add workaround for Ionic WebView plugin
* [GH-1618](https://github.com/apache/cordova-ios/pull/1618) fix(xcode): Fix library search paths for target
* [GH-1621](https://github.com/apache/cordova-ios/pull/1621) fix(xcode): Ensure we do NFD normalization on PRODUCT_NAME
* [GH-1616](https://github.com/apache/cordova-ios/pull/1616) fix(spm): Ensure the deployment target always gets set
* [GH-1606](https://github.com/apache/cordova-ios/pull/1606) fix(webview): Ensure scheme task is always finished
* [GH-1610](https://github.com/apache/cordova-ios/pull/1610) fix(scheme): Fix /_app_file_/ URLs not working
* [GH-1612](https://github.com/apache/cordova-ios/pull/1612) fix(spm): Set deployment target in Package.swift
* [GH-1597](https://github.com/apache/cordova-ios/pull/1597) fix: ignore spm build artifacts

**Others:**


* [GH-1650](https://github.com/apache/cordova-ios/pull/1650) chore: remove redundant Hello World template files
* [GH-1647](https://github.com/apache/cordova-ios/pull/1647) chore(deps): bump @xmldom/xmldom from 0.8.12 to 0.8.13
* [GH-1634](https://github.com/apache/cordova-ios/pull/1634) doc: `keepCallback` and `setKeepCallbackAsBool:` of `CDVPluginResult`
* [GH-1646](https://github.com/apache/cordova-ios/pull/1646) chore(deps): bump lodash from 4.17.23 to 4.18.1
* [GH-1644](https://github.com/apache/cordova-ios/pull/1644) chore(deps): bump @xmldom/xmldom from 0.8.11 to 0.8.12
* [GH-1642](https://github.com/apache/cordova-ios/pull/1642) chore(deps): bump picomatch
* [GH-1639](https://github.com/apache/cordova-ios/pull/1639) chore: update package-lock
* [GH-1635](https://github.com/apache/cordova-ios/pull/1635) chore: Fix improperly ignored deprecation warning
* [GH-1633](https://github.com/apache/cordova-ios/pull/1633) chore: Bump patch level for ongoing dev work
* [GH-1628](https://github.com/apache/cordova-ios/pull/1628) chore: Fix missing licence headers
* [GH-1627](https://github.com/apache/cordova-ios/pull/1627) release(8.0.1): Update release notes and version
* [GH-1623](https://github.com/apache/cordova-ios/pull/1623) chore(ci): draft release
* [GH-1624](https://github.com/apache/cordova-ios/pull/1624) chore: cleanup license headers
* [GH-1625](https://github.com/apache/cordova-ios/pull/1625) chore: add DEVELOPMENT.md & cleanup `README`.md
* [GH-1622](https://github.com/apache/cordova-ios/pull/1622) refactor(versions): Refactor version code for test reliability
* [GH-1619](https://github.com/apache/cordova-ios/pull/1619) chore(deps): Update to latest jasmine & c8 versions
* [GH-1614](https://github.com/apache/cordova-ios/pull/1614) doc(readme): improve badges
* [GH-1601](https://github.com/apache/cordova-ios/pull/1601) chore: Remove compileBitcode from export options
* [GH-1611](https://github.com/apache/cordova-ios/pull/1611) chore: set swift-tools-version to 5.9
* [GH-1599](https://github.com/apache/cordova-ios/pull/1599) chore(deps): bump lodash from 4.17.21 to 4.17.23
* [GH-1598](https://github.com/apache/cordova-ios/pull/1598) Add missing trailing new line
* [GH-1592](https://github.com/apache/cordova-ios/pull/1592) doc(readme): add minimum **iOS** version
* [GH-1591](https://github.com/apache/cordova-ios/pull/1591) doc(readme): add Link to **iOS** Platform Guide
* [GH-1588](https://github.com/apache/cordova-ios/pull/1588) chore: update release audit workflow & license headers
