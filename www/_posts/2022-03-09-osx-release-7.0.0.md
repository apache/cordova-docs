---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Cordova OSX 7.0.0 released and deprecation notice"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova OSX 7.0.0`!  This is one of Cordova's supported platforms for building macOS desktop applications.

* [cordova-osx@7.0.0](https://www.npmjs.com/package/cordova-osx)

## Release Highlights

This version includes various dependency updates and makes the platform run on AppleSilicon Macs.

We have raised the minimum required NodeJS version for this release to 12.x.


## Deprecation Notice

We are planning to deprecate the `cordova-osx` platform soon. Please migrate to the `cordova-electron` platform or try Mac Catalyst with the `cordova-ios` platform.

Feel free to check out the discussions on the mailing list [1](https://lists.apache.org/thread/wjwx2y9roptq941gg96809fvhwt3rdto) [2](https://lists.apache.org/thread/lqq2xoy3pjqcyl052gv0qom2f31zgg8k) for more information and leave a comment if you have anything to add.


Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-117](https://github.com/apache/cordova-osx/pull/117) Prepare release 7.0.0
* [GH-105](https://github.com/apache/cordova-osx/pull/105) Fix to make Cordova OSX build successfully on AppleSilicon target.
* [GH-115](https://github.com/apache/cordova-osx/pull/115) refactor!: drop q
* chore: update GH description, homepage and labels
* [GH-114](https://github.com/apache/cordova-osx/pull/114) refactor(versions): remove duplicated function
* [GH-108](https://github.com/apache/cordova-osx/pull/108) ci: add node-14.x to workflow
* [GH-107](https://github.com/apache/cordova-osx/pull/107) chore: clean up `package.json`
