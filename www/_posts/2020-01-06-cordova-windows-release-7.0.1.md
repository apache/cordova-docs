---
layout: post
author:
    name: Christopher J. Brody
title:  "Cordova Windows 7.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released Cordova Windows version `7.0.1`!  This is one of Cordova's supported platforms for building Windows applications.

* [cordova-windows@7.0.1](https://www.npmjs.com/package/cordova-windows)

## Release Highlights

**To upgrade:**

```
cordova platform remove windows
cordova platform add windows@7.0.1
```

Patch release to resolve issue with path to `winjs` dependency ([#331](https://github.com/apache/cordova-windows/pull/331))

<!--more-->
# Changes include:

* Support latest Visual Studio 2017 (15.9.x) ([#329](https://github.com/apache/cordova-windows/pull/329))
* Fix path to `winjs` dependency ([#331](https://github.com/apache/cordova-windows/pull/331))
