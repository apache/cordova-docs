---
layout: post
author:
    name: Darryl Pogue
    url: https://twitter.com/dpogue
title:  "Cordova iOS 6.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 6.1.1`! This is Cordova's official platform for building iOS mobile applications.

* [cordova-ios@6.1.1 on npm](https://www.npmjs.com/package/cordova-ios)
* [Cordova@6.1.1 on CocoaPods](https://cocoapods.org/pods/Cordova)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@6.1.1
```

## Release Highlights

This release contains primarily a fix for deploying to devices, as well as an update to the cordova-common library which we hope will address several issues around `Info.plist` modifications.

* **Resolve deploying to a connected device** *(since 6.0.0)*

    The Cordova iOS 6.0.0 release was unable to deploy apps to connected iPhone and iPad devices. Thanks to first-time contributor imgos for tracking down the source of the problem and providing a fix.


* **Fix for identifying the correct `Info.plist` file**

    This has been a long-standing pain point for Cordova iOS users, particularly when plugins attempt to use `edit-config` or `config-file` to add directives to the `Info.plist` file. In some cases, depending on which plugins and CocoaPods were installed, those config changes would end up in the wrong plist file.

    This issue was fixed in Cordova Common 4.0.2, and we've pulled that dependency into this release.  More details can be found in the [pull request](https://github.com/apache/cordova-common/pull/148) and [original bug ticket](https://github.com/apache/cordova-common/issues/144).


* **Append `startURL` to the initial URL when using custom schemes** *(since 6.0.0)*

    When using a custom scheme in Cordova iOS 6.0.0 and a `config.xml` `content` path that pointed to a subfolder of `www`, that subfolder would be treated as the root of the custom scheme.  While this is not a common situation, it turns out that is how the [mobilespec](https://github.com/apache/cordova-mobile-spec) test suite is implemented.

    The fix here is that the root of the custom scheme will always map to the `www` folder. More details can be found in the [pull request](https://github.com/apache/cordova-ios/pull/973).

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
## Full Changelog

* [GH-976](https://github.com/apache/cordova-ios/pull/976) Update npm dependencies to pull in `cordova-common@4.0.2`
    * This should resolve several issues affecting Info.plist files, including [#764](https://github.com/apache/cordova-ios/issues/764) and [#775](https://github.com/apache/cordova-ios/issues/775)
* [GH-973](https://github.com/apache/cordova-ios/pull/973) Append `startURL` to the initial url loaded
* [GH-912](https://github.com/apache/cordova-ios/issues/912) fix deployment to device ([#936](https://github.com/apache/cordova-ios/pull/936))
* [GH-932](https://github.com/apache/cordova-ios/pull/932) add node 14 to CI workflow
