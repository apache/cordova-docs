---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova OSX 5.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova OSX 5.0.0`!  This is one of Cordova's supported platforms for building macOS desktop applications.

* [cordova-osx@5.0.0](https://www.npmjs.com/package/cordova-osx)

## Release Highlights

In addition to various fixes, this release also includes support for Swift 4 and the app store icon.

Additional, as NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.


Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-83](https://github.com/apache/cordova-osx/pull/83) OSX Platform Release Preparation (Cordova 9)
* [GH-66](https://github.com/apache/cordova-osx/pull/66) explicit `plist@3` dependency
* [GH-54](https://github.com/apache/cordova-osx/pull/54) Remove Bundled Dependencies
* [GH-53](https://github.com/apache/cordova-osx/pull/53) Add Node 10 & Drop Node 4 Support
* [CB-13449](https://issues.apache.org/jira/browse/CB-13449) Assign 1024x1024 app icon
* [CB-3021](https://issues.apache.org/jira/browse/CB-3021) Can no longer import CDVPlugin.h from plugin Objective-C++ code
* [CB-13824](https://issues.apache.org/jira/browse/CB-13824) Swift 4 support
* [CB-13424](https://issues.apache.org/jira/browse/CB-13424) Replaces undefined `self` with `this`
* [CB-13424](https://issues.apache.org/jira/browse/CB-13424) When running `cordova plugin add/remove` plugins are added and removed properly to the osx platform `config.xml` file
* [CB-13449](https://issues.apache.org/jira/browse/CB-13449) Added support for 1024x1024 app icon
* [CB-13304](https://issues.apache.org/jira/browse/CB-13304) expose preference to control WebView navigation
* [CB-12339](https://issues.apache.org/jira/browse/CB-12339) handle re-open app window
* [CB-11948](https://issues.apache.org/jira/browse/CB-11948) Modal dialog (window.confirm) opens behind fullscreen window and cannot be closed
* [CB-11510](https://issues.apache.org/jira/browse/CB-11510) OSX app doesn't properly span all vertical displays
* [CB-9918](https://issues.apache.org/jira/browse/CB-9918) CDVInvokedUrlCommand.argumentAtIndex returns WebUndefined instead of nil
* [CB-11002](https://issues.apache.org/jira/browse/CB-11002) Enable hidden accelerated rendering settings by default
