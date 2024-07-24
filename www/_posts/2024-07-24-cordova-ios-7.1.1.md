---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 7.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 7.1.1`! This is one of Cordova's supported platforms for building iOS applications.

* [cordova-ios@7.1.1](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@7.1.1
```

**To install:**

```bash
cordova platform add ios@7.1.1
```

## Release Highlights

### Fixes

* **Properly uninstall plugins with asset tags**

    Fixed issues where plugins were not uninstalling properly if the plugin had `<asset>` tags defined in `plugin.xml`.

* **Version warnings during plugin add**

    Fixed an issue that displayed version check failure warnings when installing plugins.

* **Moved `CODE_SIGN_ENTITLEMENTS` to the target settings of the application target within the Xcode project.**

Please report any issues you find on our [Cordova-iOS](https://github.com/apache/cordova-iOS/issues) GitHub issue tracker!

<!--more-->
# Changes include:

**Fixes:**

* [GH-1446](https://github.com/apache/cordova-ios/pull/1446) fix: uninstall plugin with `asset` tag
* [GH-1435](https://github.com/apache/cordova-ios/pull/1435) fix: Fix version checking helper scripts
* [GH-1436](https://github.com/apache/cordova-ios/pull/1436) fix: Properly set the webview config when it is provided
* [GH-1438](https://github.com/apache/cordova-ios/pull/1438) fix: Set CodeSigning Entitlements in Xcode Project at Target level

**Others:**

* [GH-1426](https://github.com/apache/cordova-ios/pull/1426) chore: Update CordovaLib.xcodeproj fixture
* [GH-1419](https://github.com/apache/cordova-ios/pull/1419) ci: update codecov@v4 w/ token