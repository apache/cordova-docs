---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Node Xcode 2.0.0 Released!"
categories: news
tags: release tools
---

We are happy to announce that we have just released an update to `cordova-node-xcode`! This is one of the libraries used behind-the-scenes for parsing, editing, and writing xcodeproj project files.

* [cordova-node-xcode@2.0.0](https://www.npmjs.com/package/xcode)

## Release Highlights

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-14](https://github.com/apache/cordova-node-xcode/pull/14) Updated to use ECMAScript 2015 Object.assign.
* [GH-30](https://github.com/apache/cordova-node-xcode/pull/30) fix: simple-plist@1 update in dependencies
* [GH-29](https://github.com/apache/cordova-node-xcode/pull/29) drop support for Node.js pre-6.0
