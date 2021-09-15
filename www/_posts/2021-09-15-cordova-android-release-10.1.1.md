---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 10.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 10.1.1`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@10.1.1](https://www.npmjs.com/package/cordova-android)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@10.1.1
```

**To install:**

```bash
cordova platform add android@10.1.1
```

The notable fixes in this release are around the handling of the default policy for the Allow Navigation & Allow Bridge Access, which also covers the scheme & hostname use cases.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

#### Fixes

* [GH-1349](https://github.com/apache/cordova-android/pull/1349) fix(`PluginManager`): `AllowNavigation` default policy to handle scheme & hostname
* [GH-1342](https://github.com/apache/cordova-android/pull/1342) fix(`AllowListPlugin`): Safely handle default allow navigation policy in allow request
* [GH-1332](https://github.com/apache/cordova-android/pull/1332) fix(`PluginManager`): `AllowBridgeAccess` default policy to handle scheme & hostname
