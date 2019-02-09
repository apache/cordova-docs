---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 5.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 5.0.0`!  This is one of Cordova's supported platforms for building iOS mobile applications.

* [cordova-ios@5.0.0](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

**To upgrade:**

```
cordova platform remove ios
cordova platform add ios@5.0.0
```

In addition to the various improvements and bug fixes, this release also comes packed with some major features.

Some of the key features are:
* [GH-409](https://github.com/apache/cordova-ios/pull/409) [GH-489](https://github.com/apache/cordova-ios/pull/489) Supports Xcode 10 New Build System
* [GH-405](https://github.com/apache/cordova-ios/pull/405) Improved Cocoapods Support
* [GH-395](https://github.com/apache/cordova-ios/pull/395) Improved Swift Support
* [GH-508](https://github.com/apache/cordova-ios/pull/508) Improved Automatic Provisioning Profile Signing

This release only supports Xcode 9 and up. It is important to know that starting March 2019, Apple requires all new apps submitted to the App store to be built with the iOS 12.1 SDK or later (Xcode 10). [source](https://developer.apple.com/ios/submit/)

Additional, as NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-515](https://github.com/apache/cordova-ios/pull/515) Remove Deprecated Local and Remote Push Notification Constants
* [GH-512](https://github.com/apache/cordova-ios/pull/512) AppIcon and LaunchImage Updates
* [GH-254](https://github.com/apache/cordova-ios/pull/254) Expose `CDVCommandStatus` enum to Swift
* [GH-508](https://github.com/apache/cordova-ios/pull/508) Remove removing certificates functions in xcode post scripts
* [GH-489](https://github.com/apache/cordova-ios/pull/489) CordovaLib.xcodeproj file upgraded for Xcode 10
* [GH-501](https://github.com/apache/cordova-ios/pull/501) `cordova-common` backwards compatability for `getPodSpecs` function
* [GH-496](https://github.com/apache/cordova-ios/pull/496) iOS Platform Release Preparation (Cordova 9)
* [GH-494](https://github.com/apache/cordova-ios/pull/494) Fixes `$(PRODUCT_BUNDLE_IDENTIFIER)` not being resolved for a product archive
* [GH-481](https://github.com/apache/cordova-ios/pull/481) Add warning that function in spawn.js is deprecated
* [GH-461](https://github.com/apache/cordova-ios/pull/461) `cordova run --list --device` fails for Virtualhere devices
* [GH-355](https://github.com/apache/cordova-ios/pull/355) [CB-13927](https://issues.apache.org/jira/browse/CB-13927) - Modified xcodeProjDir to filter out files/folders that contain "._"
* [GH-483](https://github.com/apache/cordova-ios/pull/483) Restore stdio behavior from previous spawn approach
* [GH-479](https://github.com/apache/cordova-ios/pull/479) emit xcodebuild & other spawned CLI commands
* [GH-482](https://github.com/apache/cordova-ios/pull/482) Copy node_modules if the directory exists
* [GH-478](https://github.com/apache/cordova-ios/pull/478) Use `cross-spawn` & `shelljs` instead of `child-process`
* [GH-409](https://github.com/apache/cordova-ios/pull/409) Update project files for Xcode 10
* [GH-474](https://github.com/apache/cordova-ios/pull/474) Fix issue after updating to macOS 10.14.2.
* [GH-405](https://github.com/apache/cordova-ios/pull/405) Cocoapods support improvement, using podspec tag in `plugin.xml`
* [GH-451](https://github.com/apache/cordova-ios/pull/451) Fix running `cordova build ios` for emulators with Xcode 10.1 RELEASE
* [GH-406](https://github.com/apache/cordova-ios/pull/406) Added missing `unorm` dependency
* [GH-398](https://github.com/apache/cordova-ios/pull/398) Removal of xcconfig build flag
* [CB-14141](https://issues.apache.org/jira/browse/CB-14141) Don't duplicate resource files in xcodeproj
* [GH-397](https://github.com/apache/cordova-ios/pull/397) Update Objc-Test for Local & TravisCI
* [GH-395](https://github.com/apache/cordova-ios/pull/395) Implement Swift Support and Testing
* [CB-14242](https://issues.apache.org/jira/browse/CB-14242) remove committed node_modules
* [CB-14242](https://issues.apache.org/jira/browse/CB-14242) `package.json` remove bundledDependencies
* [CB-14074](https://issues.apache.org/jira/browse/CB-14074) Remove Node 4 from CI
* [CB-14244](https://issues.apache.org/jira/browse/CB-14244) [CB-9366](https://issues.apache.org/jira/browse/CB-9366) log error.stack in cordova.js
* [GH-376](https://github.com/apache/cordova-ios/pull/376) Fixed Get Apple OSX Version method
* [CB-13581](https://issues.apache.org/jira/browse/CB-13581) open **iOS** simulator by using child_process
* [CB-14045](https://issues.apache.org/jira/browse/CB-14045) Reinit url after app freezes
* [CB-14076](https://issues.apache.org/jira/browse/CB-14076) Setting UIWebViewDelegate on CDVWebViewEngineProtocol doesn't work
* [CB-14039](https://issues.apache.org/jira/browse/CB-14039) Inputs type text don't work on **iOS**
* [CB-13921](https://issues.apache.org/jira/browse/CB-13921) Update Xcode requirement to Xcode 9
* [CB-13382](https://issues.apache.org/jira/browse/CB-13382) dealloc the webViewEngine
* [CB-13523](https://issues.apache.org/jira/browse/CB-13523) Pass automaticProvisioning to build step
* [CB-12940](https://issues.apache.org/jira/browse/CB-12940) Use deployment-target from `config.xml` for platform version in Podfile
* [CB-13824](https://issues.apache.org/jira/browse/CB-13824) Xcode 9/Swift 4 support
* [GH-354](https://github.com/apache/cordova-ios/pull/354) exec purgeProjectFileCache when pod install
* [GH-356](https://github.com/apache/cordova-ios/pull/356) Fix prototype declaration warnings
* [CB-13510](https://issues.apache.org/jira/browse/CB-13510) Removed clipboard workaround, which was braking copy/paste functional **iOS** 11
* [GH-343](https://github.com/apache/cordova-ios/pull/343) [CB-13513](https://issues.apache.org/jira/browse/CB-13513) Declare ProvisioningStyle as Automatic in project.pbxproj template.
* [GH-351](https://github.com/apache/cordova-ios/pull/351) Prevent a memory leak when converting to JSON
* [CB-13597](https://issues.apache.org/jira/browse/CB-13597) update podfile with **iOS** version 9.0
