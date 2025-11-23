---
layout: post
author:
    name: Darryl Pogue
    url: https://dpogue.ca
title:  "Cordova iOS 8.0.0 is now available!"
categories: announcements
tags: news releases
---

After nearly 2 years of work, we are excited to finally announce that we have released **Cordova iOS 8.0.0**! This is Cordova's platform supporting the development of applications for iOS & iPadOS; now with better support for the latest platform features.

* [cordova-ios@8.0.0](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@8.0.0
```

**This is a major version release which includes some breaking changes!**  
We have tried hard to make the update process as smooth as possible for both application and plugin developers, while improving the experience for developers embedding Cordova iOS as a library.

For plugin authors, we've written a guide about [Upgrading Plugins to Cordova iOS 8.x](https://apache.github.io/cordova-ios/documentation/cordova/upgrading-8?language=objc).

## Release Highlights

* **Supported version minimums**
    * The minimum supported **iOS** version is now 13.
    * The minimum supported **Xcode** version is now 15.
    * The minimum supported **NodeJS** version is now 20.17.

* **Embracing Swift**
    * The platform project now uses Swift classes and a storyboard file.
    * Plugins can now be set up as Swift packages, including other Swift packages as dependencies.
    * CordovaLib is available as a Swift package to be embedded in existing projects.

* **Platform project modernizing**
    * The Xcode project, and build target are now always named `App`.  
      This resolves numerous issues around CocoaPods, multi-target projects, and Info.plist additions, but potentially breaks some hooks that assume the project name matches what's defined in config.xml.
    * The platform project now supports building for macOS using Catalyst.
    * The platform project has adopted the iOS Scene APIs, which are required for iOS 26 support.
    * CordovaLib (used as a library) supports targeting the visionOS platform.

* **Build-in status bar handling**
    * Status bar handling is now built-in to Cordova iOS, and the StatusBar plugin is no longer required in most cases.
    * Whether the status bar is shown or not is controlled by the viewport meta tag's `viewport-fit` directive.
    * The background color of the status bar is controlled by the theme-color meta tag.

* **App icon simplification**
    * Projects can now provide a single 1024px × 1024px icon in config.xml.
    * Projects building with Xcode 16 or newer can provide monochrome and dark mode icon variants.
    * See [GH-1465](https://github.com/apache/cordova-ios/pull/1465) for details.
    * **NOTE:** Cordova iOS 8.0.0 does not include support for the new Xcode 26 Icon Composer file format. We hope to introduce support in the near future.

* **Bunches of bugs fixed**
    * Range requests are now supported for large media files when using a custom protocol.
    * Opening system alert boxes from JavaScript code should no longer freeze the application.
    * Improved error messaging when no iOS simulators are installed.
    * Configurable behavior for recovering from web view crashes that sometimes left blank screens.
    * Fix for `handleOpenURL()` not firing reliably when the app is launched.
    * Improve handling for the `deployment-target` preference with CocoaPods.

* **Embedded framework improvements**
    * Several memory leaks have been fixed when disposing of a Cordova view controller.
    * Several API improvements for specifying background colours and splash screen behaviour.
    * Introduced `CDVSceneDelegate` for integrating with the iOS Scene API.
    * Added nullability annotations to several classes and API methods.
    * New [API documentation](https://apache.github.io/cordova-ios/) is published for the CordovaLib classes.

The full changelog is available to read [here](https://github.com/apache/cordova-ios/blob/rel/8.0.0/RELEASENOTES.md). Please report any issues you find on our [Cordova-iOS](https://github.com/apache/cordova-ios/issues) GitHub issue tracker!
