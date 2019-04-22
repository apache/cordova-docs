---
layout: post
author:
    name: Darryl Pogue
    url: https://twitter.com/dpogue
title:  "Cordova iOS 5.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova iOS 5.0.1` has been released! This release fixes various bugs related to Xcode 10.2 simulators and Cocoapod support.

To upgrade:

    cd my_project
    npx cordova platform remove ios
    npx cordova platform add ios@5.0.1

To add it explicitly:

    npx cordova platform add ios@5.0.1

<!--more-->

## Curated Changelog

* [GH-596](https://github.com/apache/cordova-ios/pull/596) More logging for simulator selection and deployment
* [GH-540](https://github.com/apache/cordova-ios/pull/540) Fix copy-www-build-step without shelljs
* [GH-589](https://github.com/apache/cordova-ios/pull/589) Bump `ios-sim` dependency version to fix simulator listing
* [GH-577](https://github.com/apache/cordova-ios/pull/577) Don't write spec to podfile when it's an empty string
* [GH-535](https://github.com/apache/cordova-ios/pull/535) Run prepare with the correct ConfigParser
* [GH-581](https://github.com/apache/cordova-ios/pull/571) Null check for missing pathname
* [GH-566](https://github.com/apache/cordova-ios/pull/566) Override id with `ios-CFBundleIdentifier`
* [GH-450](https://github.com/apache/cordova-ios/pull/450) Fix deadlocks in iOS 12 when `UIWebView loadRequest` is called multiple times
* [GH-546](https://github.com/apache/cordova-ios/pull/546) Fix setting of target-device to handset in combination with plugins and resource-file
* [GH-560](https://github.com/apache/cordova-ios/pull/560) Fixing dynamic framework installation path
* [GH-528](https://github.com/apache/cordova-ios/pull/528) ignore Swift version settings of Cocoapods library on non-macOS environments
* [GH-542](https://github.com/apache/cordova-ios/pull/542) Enabling `Defines Module` flag
