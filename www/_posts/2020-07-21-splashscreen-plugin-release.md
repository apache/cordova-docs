---
layout: post
author:
    name: Bryan Ellis
title:  "Splash Screen Plugin Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to our Splash Screen plugin!

* [cordova-plugin-splashscreen@6.0.0](https://www.npmjs.org/package/cordova-plugin-splashscreen)

## Release Highlights

### Splash Screen

In this major release, the iOS related source code has been completely removed since it has been integrated into the core of the Cordova-iOS 6.x platform.

* [GH-263](https://github.com/apache/cordova-plugin-splashscreen/pull/263) breaking: remove **iOS** platform code from plugin repo
* [GH-282](https://github.com/apache/cordova-plugin-splashscreen/pull/282) fix: js `clobber` only on supported platforms

<!--more-->
# Changes include:

* [GH-282](https://github.com/apache/cordova-plugin-splashscreen/pull/282) fix: js `clobber` only on supported platforms
* [GH-281](https://github.com/apache/cordova-plugin-splashscreen/pull/281) chore: adds `package-lock` file
* [GH-280](https://github.com/apache/cordova-plugin-splashscreen/pull/280) doc(android): various improvements including size specs
* [GH-200](https://github.com/apache/cordova-plugin-splashscreen/pull/200) fix(windows): implementation structure
* [GH-279](https://github.com/apache/cordova-plugin-splashscreen/pull/279) chore: add missing supported platform **Browser** to `npm` keywords
* [GH-278](https://github.com/apache/cordova-plugin-splashscreen/pull/278) chore: update `engine` checks to cover newer versions
* [GH-277](https://github.com/apache/cordova-plugin-splashscreen/pull/277) breaking: replace `jshint` with `eslint`
* [GH-276](https://github.com/apache/cordova-plugin-splashscreen/pull/276) breaking: drop `node` `engine` requirement
* [GH-275](https://github.com/apache/cordova-plugin-splashscreen/pull/275) chore: cleanup repo
* [GH-274](https://github.com/apache/cordova-plugin-splashscreen/pull/274) breaking: bump `engine` restriction for cordova dependencies
* [GH-263](https://github.com/apache/cordova-plugin-splashscreen/pull/263) breaking: remove **iOS** platform code from plugin repo
* [GH-267](https://github.com/apache/cordova-plugin-splashscreen/pull/267) test: force `cordova-ios`@^5.1.1