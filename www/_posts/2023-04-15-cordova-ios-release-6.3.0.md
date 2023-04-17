---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Cordova iOS 6.3.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 6.3.0`! This is Cordova's official platform for building iOS mobile applications. **This minor release contains three important fixes in preparation for the upcoming major release.**

* [cordova-ios@6.3.0](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

This release contains a fix to allow inspecting of WebView content with the latest iOS and Xcode versions. It also fixes an iOS 16 bug and issues with NodeJS 18.

This release adds the preference `InspectableWebview` for iOS 16.4 or later. Please check out the [Pull request](https://github.com/apache/cordova-docs/pull/1291) for the documentation.

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@6.3.0
```

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* chore: npm audit fix
* [GH-1302](https://github.com/apache/cordova-ios/pull/1302) URL parsing for ATS in node 18
* [GH-1258](https://github.com/apache/cordova-ios/pull/1258) workaround for DisallowOverscroll on iOS 16
* [GH-1300](https://github.com/apache/cordova-ios/pull/1300) set webView.inspectable to true for Debug builds on iOS >= 16.4 
