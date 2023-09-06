---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 7.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 7.0.1`! This is one of Cordova's supported platforms for building iOS applications.

* [cordova-ios@7.0.1](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@7.0.1
```

**To install:**

```bash
cordova platform add ios@7.0.1
```

**Fixes:**

* **Building on Xcode 11**

    "Cordova-iOS 7 is documented to support Xcode 11 and later. However, due to recent changes to support `LimitsNavigationsToAppBoundDomains`, builds fail on Xcode 11. To address this issue, we have added conditional checks to ensure that the app can be built with Xcode 11. Please note that the `LimitsNavigationsToAppBoundDomains` feature will not be available when building with Xcode 11.

Please report any issues you find on our [Cordova-iOS](https://github.com/apache/cordova-iOS/issues) GitHub issue tracker!

<!--more-->
# Changes include:

* [GH-1369](https://github.com/apache/cordova-ios/pull/1369) fix: `xcodebuild` version check to 11
* [GH-1358](https://github.com/apache/cordova-ios/pull/1358) fix: ensure Xcode project file references use `path`
* [GH-1368](https://github.com/apache/cordova-ios/pull/1368) fix: make code compile on Xcode 11
* [GH-1360](https://github.com/apache/cordova-ios/pull/1360) fix: add missing cordova versions to `CDVAvailability.h`
