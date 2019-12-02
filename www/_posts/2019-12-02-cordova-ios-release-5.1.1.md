---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 5.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 5.1.1`! This is Cordova's official platform for building iOS mobile applications.

* [cordova-ios@5.1.1](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@5.1.1
```

The most notable fix in this patch release was to make the prepare step to wait for the platform add step to finish. This resolved the bug that was seen when setting the `WKWebViewOnly` flag before adding the platform.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-726](https://github.com/apache/cordova-ios/pull/726) fix: make prepare wait for add to finish
* [GH-728](https://github.com/apache/cordova-ios/pull/728) chore: delete some useless characters
