---
layout: post
author:
    name: Niklas Merz
title:  "Cordova Plugin InAppBrowser 3.2.0 Released!"
categories: announcements
tags: news releases plugins
---

We are happy to announce that we have just released an update to `cordova-plugin-inappbrowser`! 

* [cordova-plugin-inappbrowser@3.2.0](https://www.npmjs.com/package/cordova-plugin-inappbrowser)

## Release Highlights

The most notable improvements in this minor release are:

* The support of the `WKWebViewOnly` preference.
* A patch for an [issue](https://github.com/apache/cordova-plugin-inappbrowser/issues/492) with WKWebView introduced with **iOS 13**.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-503](https://github.com/apache/cordova-plugin-inappbrowser/pull/503) Defensive code to prevent NULL reference exceptions for async
* [GH-584](https://github.com/apache/cordova-plugin-inappbrowser/pull/584) Add compile-time decision for disabling UIWebView
* [GH-401](https://github.com/apache/cordova-plugin-inappbrowser/pull/401) Move createIframeBridge to injectDeferredObject
* [GH-534](https://github.com/apache/cordova-plugin-inappbrowser/pull/534) Fix `InAppBrowser` not opening on **iOS** 13
