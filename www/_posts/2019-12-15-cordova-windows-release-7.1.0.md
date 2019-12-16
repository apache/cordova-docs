---
layout: post
author:
    name: Christopher J. Brody
title:  "Cordova Windows 7.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Windows 7.1.0`!  This is one of Cordova's supported platforms for building Windows applications.

* [cordova-windows@7.1.0](https://www.npmjs.com/package/cordova-windows)

## Release Highlights

**To upgrade:**

```
cordova platform remove windows
cordova platform add windows@7.1.0
```

Minor release to fix path to winjs dependency ([#331](https://github.com/apache/cordova-windows/pull/331)) and include other minor fixes

<!--more-->
# Changes include:

* cordova-common@^3.2.0 update in dependencies ([#356](https://github.com/apache/cordova-windows/pull/356)), with fs-extra@8 update to resolve random build failures that were reported on Windows
* create empty defaults.xml ([#335](https://github.com/apache/cordova-windows/pull/335))
* Workaround for unknown splashscreen ([#301](https://github.com/apache/cordova-windows/pull/301))
* Support latest Visual Studio 2017 (15.9.x) ([#329](https://github.com/apache/cordova-windows/pull/329))
* Fix path to winjs dependency ([#331](https://github.com/apache/cordova-windows/pull/331))
