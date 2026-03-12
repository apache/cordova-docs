---
layout: post
author:
    name: Darryl Pogue
    url: https://dpogue.ca
title:  "Cordova iOS 8.0.1 is now available!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 8.0.1`! This is one of Cordova's supported platforms for building iOS applications.

This release contains fixes for several bugs that were reported against the 8.0.0 version.

* [cordova-ios@8.0.1](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@8.0.1
```

**To install:**

```bash
cordova platform add ios@8.0.1
```

## Release Highlights

* **Fixed search paths for plugin libraries/frameworks**

    Plugins that included frameworks as embedded libraries were causing app builds to fail due to Xcode using the wrong path when trying to link the framework bundle. Xcode should now look for these frameworks at the correct path.

* **Fix for local file `/_app_file_/` URLs not loading**

    URLs returned by `window.WkWebView.convertFilePath()` and the File plugin's `FileEntry.getUrl()` were not being handled properly by the WebView to return file contents from the device filesystem. This should now work as expected, matching the behaviour from earlier cordova-ios versions.

* **Fix crash on cancelled WebView requests**

    When serving content from a custom scheme, if a request was started and cancelled before it finished loading, there was a chance the app could crash. We now ensure that scheme requests are properly closed when cancelled and avoid race conditions.

* **Ensure Swift package deployment targets are set**

    If a custom deployment target was set and a plugin relied on that deployment target, it was possible for Xcode to report errors due to the Swift package manager not reflecting that updated deployment target. We now propagate the `<preference name="deployment-target">` value to the Package.swift file that references plugins.

* **Ensure consistent normalization of the app name**

    If an app name contained non-ASCII characters, Xcode could produce an app bundle that failed App Store validation checks. By ensuring the app product name is consistently normalized, apps should pass validation regardless of the characters in their name.


<!--more-->
## Changes include:

**Fixes:**

* [GH-1618](https://github.com/apache/cordova-ios/pull/1618) fix(xcode): Fix library search paths for target
* [GH-1621](https://github.com/apache/cordova-ios/pull/1621) fix(xcode): Ensure we do NFD normalization on `PRODUCT_NAME`
* [GH-1616](https://github.com/apache/cordova-ios/pull/1616) fix(spm): Ensure the deployment target always gets set
* [GH-1606](https://github.com/apache/cordova-ios/pull/1606) fix(webview): Ensure scheme task is always finished
* [GH-1610](https://github.com/apache/cordova-ios/pull/1610) fix(scheme): Fix `/_app_file_/` URLs not working
* [GH-1612](https://github.com/apache/cordova-ios/pull/1612) fix(spm): Set deployment target in Package.swift
* [GH-1597](https://github.com/apache/cordova-ios/pull/1597) fix(spm): git-ignore Swift Package Manager build artifacts

**Others:**

* [GH-1614](https://github.com/apache/cordova-ios/pull/1614) doc(readme): improve badges
* [GH-1622](https://github.com/apache/cordova-ios/pull/1622) refactor(versions): Refactor version code for test reliability
* [GH-1619](https://github.com/apache/cordova-ios/pull/1619) chore(deps): Update to latest jasmine & c8 versions
* [GH-1623](https://github.com/apache/cordova-ios/pull/1623) chore(ci): draft release
* [GH-1624](https://github.com/apache/cordova-ios/pull/1624) chore: cleanup license headers
* [GH-1625](https://github.com/apache/cordova-ios/pull/1625) chore: add DEVELOPMENT.md & cleanup README.md
* [GH-1598](https://github.com/apache/cordova-ios/pull/1598) Add missing trailing new line
* [GH-1601](https://github.com/apache/cordova-ios/pull/1601) chore: Remove compileBitcode from export options
* [GH-1611](https://github.com/apache/cordova-ios/pull/1611) chore: set swift-tools-version to 5.9
* [GH-1599](https://github.com/apache/cordova-ios/pull/1599) chore(deps): bump lodash from 4.17.21 to 4.17.23
* [GH-1592](https://github.com/apache/cordova-ios/pull/1592) doc(readme): add minimum **iOS** version
* [GH-1591](https://github.com/apache/cordova-ios/pull/1591) doc(readme): add Link to **iOS** Platform Guide
* [GH-1588](https://github.com/apache/cordova-ios/pull/1588) chore: update release audit workflow & license headers
