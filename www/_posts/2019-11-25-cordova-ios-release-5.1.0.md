---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 5.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 5.1.0`! This is Cordova's official platform for building iOS mobile applications.

* [cordova-ios@5.1.0](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@5.1.0
```

The most notable improvements in this minor release are:

* The ability to disable `UIWebView` during the compile-time.
* Avoid locking when adding platforms on a non-synced pods repo. (CocoaPods >=1.8.0)
* Bumped the `minDeploymentTarget` to `10.0` in Podfile.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-719](https://github.com/apache/cordova-ios/pull/719) Add check for newer versions of cocoapods to avoid locking adding platforms on non synced pods repo
* [GH-715](https://github.com/apache/cordova-ios/pull/715) feat: add optional compile-time decision for disabling `UIWebView`
* [GH-712](https://github.com/apache/cordova-ios/pull/712) Update Xcode versions used in CI to latest minor release
* [GH-710](https://github.com/apache/cordova-ios/pull/710) Lint everything
* [GH-614](https://github.com/apache/cordova-ios/pull/614) Don't use whitespace as an indent indicator
* [GH-704](https://github.com/apache/cordova-ios/pull/704) Reuse common `xcodebuild` arguments in npm scripts
* [GH-705](https://github.com/apache/cordova-ios/pull/705) Let Jasmine handle `async` test results
* [GH-703](https://github.com/apache/cordova-ios/pull/703) Reduce verbosity of `xcodebuild` output during tests
* [GH-702](https://github.com/apache/cordova-ios/pull/702) Fix, simplify and improve tests
* [GH-695](https://github.com/apache/cordova-ios/pull/695) fix: Support all valid SemVer syntax in version comparison helper
* [GH-608](https://github.com/apache/cordova-ios/pull/608) chore: add Node.js 12 to CI services
* [GH-650](https://github.com/apache/cordova-ios/pull/650) fix(`build.json`): spacing in error message and missing path in log
* [GH-646](https://github.com/apache/cordova-ios/pull/646) `tmp@0.1` update in devDependencies
* [GH-635](https://github.com/apache/cordova-ios/pull/635) Bump default `minDeploymentTarget` to 10.0 in Podfile
* [GH-632](https://github.com/apache/cordova-ios/pull/632) Update jasmine & fix broken tests
* [GH-622](https://github.com/apache/cordova-ios/pull/622) Remove outdated component/duo package manager package definition
