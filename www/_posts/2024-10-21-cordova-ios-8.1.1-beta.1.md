---
layout: post
author:
    name: Darryl Pogue
    url: https://dpogue.ca
title:  "Cordova iOS 8.0.0 Beta1 is Now Available!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released a beta for the next Cordova iOS version. This is Cordova iOS 8.0.0-beta.1!

This is a developer preview of Cordova's supported platforms for building iOS applications. The intention of this beta release is for plugin authors and app developers to test their plugins and projects and provide feedback and bug reports before the final release of Cordova iOS 8.0.0. This version includes several breaking API changes and project structure changes, which is why we are providing this beta release for testing purposes.

This beta is **not intended to be used for production App Store submissions**.

* [cordova-ios@8.0.0-beta.1](https://www.npmjs.com/package/cordova-ios/v/8.0.0-beta.1) on npm
* [cordova-ios@8.0.0-beta.1.tgz](https://archive.apache.org/dist/cordova/platforms/cordova-ios-8.0.0-beta.1.tgz) source code

For plugin authors, we've written a guide about [Upgrading Plugins to Cordova iOS 8.x](https://apache.github.io/cordova-ios/documentation/cordova/upgrading-8?language=objc).

**To test an upgrade in your projects:**

```bash
cordova platform remove ios
cordova platform add ios@8.0.0-beta.1
```

**To install for testing:**

```bash
cordova platform add ios@8.0.0-beta.1
```

## Release Highlights

* **The minimum supported versions have been increased.**
    * The minimum supported **iOS** version is now 13.
    * The minimum supported **Xcode** version is now 15.
    * The minimum supported **NodeJS** version is now 18.

* **The platform project has been modernized with some significant changes.**
    * The Xcode project, and build target are now always named `App`.  
      This resolves numerous issues around CocoaPods, multi-target projects, and Info.plist additions, but potentially breaks some hooks that assume the project name matches what's defined in config.xml.
    * The platform project now uses Swift classes and a storyboard file.
    * The platform project now supports building for macOS using Catalyst.

* **App Icon handling has been simplified.**
    * Projects can now provide a single 1024px × 1024px icon in config.xml.
    * Projects building with Xcode 16 can now provide monochrome and dark mode icon variants.
    * See [GH-1465](https://github.com/apache/cordova-ios/pull/1465) for details.

* **Fixes for numerous bug reports and pain points.**
    * Range requests are now supported for large media files when using a custom protocol.
    * Opening system alert boxes from JavaScript code should no longer freeze the application.
    * Improved error messaging when no iOS simulators are installed.

* **Fixes for apps that use Cordova as a framework.**
    * Several memory leaks have been fixed when disposing of a Cordova view controller.
    * Several API improvements for specifying background colours and splash screen behaviour.
    * New [API documentation](https://apache.github.io/cordova-ios/) is published for the CordovaLib classes.

The full changelog is available to read [here](https://github.com/apache/cordova-ios/blob/8.0.0-beta.1/RELEASENOTES.md#800-beta1-oct-17-2024). Please report any issues you find on our [Cordova-iOS](https://github.com/apache/cordova-iOS/issues) GitHub issue tracker!
