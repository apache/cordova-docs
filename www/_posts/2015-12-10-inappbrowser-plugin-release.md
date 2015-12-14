---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "InAppBrowser 1.1.1 Plugin Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-inappbrowser@1.1.1

This release brings `cordova-ios@4.0.0` platform compatibility to the plugin, and it is also backwards compatible with cordova-ios@3.


To install:

    cordova plugin add cordova-plugin-inappbrowser --save

Changes include:
<!--more-->

cordova-plugin-inappbrowser@1.1.1

* [CB-9445](https://issues.apache.org/jira/browse/CB-9445) Improves executeScript callbacks on iOS
* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Incremented plugin version.
* [CB-10040](https://issues.apache.org/jira/browse/CB-10040) - re-fix: backwards compatible with cordova-ios < 4.0
* [CB-8534](https://issues.apache.org/jira/browse/CB-8534): Allow plugins to respond to onReceivedHttpAuthRequest. This closes #82
* [CB-3750](https://issues.apache.org/jira/browse/CB-3750): Fixes spinner on iOS. This closes #89
* [CB-7696](https://issues.apache.org/jira/browse/CB-7696) Document target=_self behavior for Windows
* [CB-10040](https://issues.apache.org/jira/browse/CB-10040) - Compile Error in InAppBrowser Plugin for iOS - No known instance method for selector 'URLIsWhitelisted:'
