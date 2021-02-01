---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Cordova iOS 6.2.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 6.2.0`! This is Cordova's official platform for building iOS mobile applications.

* [cordova-ios@6.2.0](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

This release contains small bug fixes, dependency updates and resolves some splashscreen issues. Plugin developers can now hook into the `WKURLSchemeHandler ([see more](https://github.com/apache/cordova-ios/pull/1030)).

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@6.2.0
```

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-1069](https://github.com/apache/cordova-ios/pull/1069) (chore): update dependencies for minor release
* [GH-1067](https://github.com/apache/cordova-ios/pull/1067) fix: plugin podspec with no config elements
* [GH-1014](https://github.com/apache/cordova-ios/pull/1014) fix(splashscreen): Don't show splashscreen when used as a lib
* [GH-1030](https://github.com/apache/cordova-ios/pull/1030) Allow plugins to hook into the WKURLSchemeHandler
* [GH-1036](https://github.com/apache/cordova-ios/pull/1036) (ios): add console output for simulator selectio
* [GH-1060](https://github.com/apache/cordova-ios/pull/1060) GH-1059: Add VALIDATE_WORKSPACE setting to XcodeProj
* [GH-1031](https://github.com/apache/cordova-ios/pull/1031) Set CDVWebViewProcessPoolFactory to public
* [GH-1041](https://github.com/apache/cordova-ios/pull/1041) Document breaking changes in 4.3.0 & 4.4.0
* [GH-1035](https://github.com/apache/cordova-ios/pull/1035) (ios): nil check in didReceiveData in schemehandler
* [GH-1023](https://github.com/apache/cordova-ios/pull/1023) Reinstate verification of main navigation in case of navigationType other
* [GH-1018](https://github.com/apache/cordova-ios/pull/1018) (iOS) Skip Cocoapods checkTool on non-darwin platform
* [GH-1015](https://github.com/apache/cordova-ios/pull/1015) Project changes to allow consuming cordova as submodule
* [GH-1006](https://github.com/apache/cordova-ios/pull/1006) Hide splash sceen immediately on .hide()
* [GH-1005](https://github.com/apache/cordova-ios/pull/1005) Fix BackgroundColor parsing for lowercase letters
* [GH-1002](https://github.com/apache/cordova-ios/pull/1002) chore(asf): Update GitHub repo metadata
* Add release notes from version 6.1.1
* [GH-976](https://github.com/apache/cordova-ios/pull/976) chore: Update npm dependencies
* [GH-973](https://github.com/apache/cordova-ios/pull/973) fix: Append startURL to the initial url loaded
* [GH-936](https://github.com/apache/cordova-ios/pull/936) (ios) issue-912: fix deployment to device
* [GH-932](https://github.com/apache/cordova-ios/pull/932) ci: add node 14 to workflow
