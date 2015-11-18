---
layout: post
author:
    name: Vladimir Kotikov
title:  "Apache Cordova iOS 3.9.2"
categories: announcements
tags: news releases
---
We are happy to announce that `Cordova iOS 3.9.2` has been released and will be the default iOS version.

This release addresses multiple iOS 9/9.1 and XCode 7/7.1 issues. It also deprecates a number of APIs, which will be removed in `Cordova iOS 4.0.0`. For a full list of API changes see [API changes in 4.0.md](https://github.com/apache/cordova-ios/blob/master/guides/API%20changes%20in%204.0.md)

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ios@3.9.2

<!--more-->    
To add it explicitly:

    cordova platform add ios@3.9.2 --save

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

Warning: Some people are seeing the following error when adding the new platform:

    CordovaError: Failed to fetch platform ios@~3.9.1
    Probably this is either a connection problem, or platform spec is incorrect.
    Check your connection and platform name/version/URL.
    Error: version not found: cordova-ios@3.9.2

If you see this, you will need to clear your cache. Run the following command to do so.

    rm -rf ~/.cordova

Please report any issues at [issues.cordova.io](http://issues.cordova.io). 

## What's new in iOS platform
* [CB-9690](https://issues.apache.org/jira/browse/CB-9690) Can't submit iPad apps to the App Store for iOS 9
* [CB-9679](https://issues.apache.org/jira/browse/CB-9679) Resource rules issue with iOS 9
* [CB-9656](https://issues.apache.org/jira/browse/CB-9656) Xcode can't find CDVViewController.h when archiving in Xcode 7.1 beta
* [CB-9721](https://issues.apache.org/jira/browse/CB-9721) Set ENABLE_BITCODE to NO in build.xcconfig
* [CB-9610](https://issues.apache.org/jira/browse/CB-9610) Fix warning in cordova-ios under Xcode 7
* [CB-9046](https://issues.apache.org/jira/browse/CB-9046) `cordova run ios --emulator --target "iPhone-5, 7.1"` (target with runtime) does not work
* Adds deprecation warnings for upcoming 4.0.0 release
