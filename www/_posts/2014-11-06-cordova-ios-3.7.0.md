---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Apache Cordova iOS 3.7.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova iOS 3.7.0` has been released!

This release has various bug fixes, and will be the default iOS version when the cordova-cli 4.1.0 is released.
This release also requires Xcode 6.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ios

To add it explicitly:

    cordova platform add ios@3.7.0



For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->

## What's new in iOS

* [CB-6510](https://issues.apache.org/jira/browse/CB-6510) Support for `ErrorUrl` preference
* [CB-7857](https://issues.apache.org/jira/browse/CB-7857) Load `appURL` after plugins have loaded
* [CB-7606](https://issues.apache.org/jira/browse/CB-7606) `handleOpenURL` handler firing more than necessary
* [CB-7597](https://issues.apache.org/jira/browse/CB-7597) `Localizable.strings` for Media Capture are in the default template, it should be in the plugin
* [CB-7818](https://issues.apache.org/jira/browse/CB-7818) CLI builds ignore Distribution certificates
* [CB-7813](https://issues.apache.org/jira/browse/CB-7813) `CDVWebViewDelegate` fails to update the webview state properly
* [CB-7643](https://issues.apache.org/jira/browse/CB-7643) Made `isValidCallbackId` threadsafe
* [CB-2520](https://issues.apache.org/jira/browse/CB-2520) Built interim js from cordova-js for custom user agent support
* [CB-2520](https://issues.apache.org/jira/browse/CB-2520) "original" user agent needs to be overridable
* [CB-7777](https://issues.apache.org/jira/browse/CB-7777) In `AppDelegate`, before calling `handleOpenURL` check whether it exists first to prevent exceptions
* [CB-7775](https://issues.apache.org/jira/browse/CB-7775) Add `component.json` for component and duo package managers
* [CB-7493](https://issues.apache.org/jira/browse/CB-7493) Adds `test-build` command to package.json
* [CB-7630](https://issues.apache.org/jira/browse/CB-7630) Deprecate `CDV_IsIPhone5` and `CDV_IsIPad` macro in `CDVAvailability.h`
* [CB-7727](https://issues.apache.org/jira/browse/CB-7727) Add resolution part to **backup to icloud** warning message
because screen size is now orientation dependent
* [CB-7560](https://issues.apache.org/jira/browse/CB-7560) `tel:` and `mailto:` links don't work in `<iframe>`
* [CB-7502](https://issues.apache.org/jira/browse/CB-7502) Default template is missing `CFBundleShortVersionString` key in `Info.plist`, prevents **iTunes Connect** submission
* [CB-7546](https://issues.apache.org/jira/browse/CB-7546) **Contacts** Prevent exception when index is out of range
* [CB-7648](https://issues.apache.org/jira/browse/CB-7648) **iOS 8** Add **iPhone 6 Plus** icon to default template
* [CB-7632](https://issues.apache.org/jira/browse/CB-7632) **iOS 8** Add launch image definitions to `Info.plist`
* [CB-7631](https://issues.apache.org/jira/browse/CB-7631) **iOS 8** `CDVUrlProtocol` - the `NSHttpUrlResponse` is not initialized with the `statuscode`
* [CB-7596](https://issues.apache.org/jira/browse/CB-7596) **iOS 8** `CDV_IsIPhone5()` Macro needs to be updated * [CB-7882](https://issues.apache.org/jira/browse/CB-7882) `viewDidUnload` instance method is missing `[super viewDidUnload]` call
* [CB-7872](https://issues.apache.org/jira/browse/CB-7872) **XCode 6.1**'s `xcrun` `PackageApplication` fails at packaging / resigning Cordova applications
* [CB-7729](https://issues.apache.org/jira/browse/CB-7729) **Xcode 6** Support `ios-sim` **3.0** and new targets (**iPhone 6/6+**)
* **Xcode 6** Fix `cordova/lib/list-started-emulators`
* Add `ios-sim` version check **3.0** to `cordova/lib/list-emulator-images`
* Fix `cordova/lib/install-emulator` to pass in the correct prefix for `ios-sim --devicetypeid`
* Remove non-working applescript to start emulator, use `Instruments` to start **iOS Simulator** now.
* Add support for the **iPod** in `cordova/lib/list-devices` script.
* Remove `Valid values for --target` in script headers. Use `cordova/lib/list-emulator-images` to get the list.
* Update `cordova/lib/list-emulator-images` for `ios-sim` **3.0**
* Increment `ios-deploy` min version to **1.2.0** and `ios-sim` min version to **3.0**
* Updated `cordova/build` script to use specific `SHARED_PRECOMPS_DIR` variable.
* Update `.gitignore` to not ignore `.xcworkspace` files
