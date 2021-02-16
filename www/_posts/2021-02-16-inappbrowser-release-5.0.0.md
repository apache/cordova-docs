---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Cordova Plugin InAppBrowser 5.0.0 Released!"
categories: announcements
tags: news releases plugins
---

We are happy to announce that we have just released an update to `cordova-plugin-inappbrowser`! 

* [cordova-plugin-inappbrowser@5.0.0](https://www.npmjs.com/package/cordova-plugin-inappbrowser)

## Release Highlights

This is a new major version with breaking changes which requires at least `cordova-android@9.0.0` and `cordova-ios@6.0.0`. Make sure to check and update your platforms.

The most notable improvements in this major release are:

* The InAppBrowser and main webview now share web resources again (like cookies, sessions etc.).
* You can now set `InAppBrowserStatusBarStyle` to 'darkcontent'.
* The Android part got some code cleanup.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-828](https://github.com/apache/cordova-plugin-inappbrowser/pull/828) feat(ios): add `InAppBrowserStatusBarStyle` 'darkcontent' configuration option
* [GH-823](https://github.com/apache/cordova-plugin-inappbrowser/pull/823) chore: bump engines requirements
* [GH-824](https://github.com/apache/cordova-plugin-inappbrowser/pull/824) breaking: cleanup code for old **Android** versions
* [GH-825](https://github.com/apache/cordova-plugin-inappbrowser/pull/825) (ios): rename CDVWKProcessPoolFactory
* [GH-826](https://github.com/apache/cordova-plugin-inappbrowser/pull/826) ci: add node-14.x to workflow
* [GH-821](https://github.com/apache/cordova-plugin-inappbrowser/pull/821) breaking(android): replace magic numbers with **Android**.os.Build constants
* [GH-717](https://github.com/apache/cordova-plugin-inappbrowser/pull/717) ci(ios): remove wkwebview plugin
