---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-battery-status: 1.2.2
* cordova-plugin-inappbrowser: 1.6.1

----
You can update any plugin by removing it, and then re-adding it.

 e.g. To update your inappbrowser plugin:

    cordova plugin rm cordova-plugin-inappbrowser --save
    cordova plugin add cordova-plugin-inappbrowser@latest --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.2.2
* [CB-12227](https://issues.apache.org/jira/browse/CB-12227) (windows) Fixed Browserify error

cordova-plugin-inappbrowser@1.6.1
* version fix for previous release

cordova-plugin-inappbrowser@1.6.0
* [CB-7608](https://issues.apache.org/jira/browse/CB-7608) (android) document useWidthViewPort
* add option useWidthViewPort
* [CB-12184](https://issues.apache.org/jira/browse/CB-12184) executeScript leads to a null pointer on exception on Android.
* fix(close button): Set correct content description
* [CB-9274](https://issues.apache.org/jira/browse/CB-9274) Adds missing methods to InAppBrowser to allow compilation for Amazon FireOS.
* [CB-10973](https://issues.apache.org/jira/browse/CB-10973) inAppBrowser for Windows Platform: wrong height of webview with location=yes
* Increment plugin minor version because of new hide feature
* removed duplicate hide method in ios source and add jasmine test cases
* [CB-8467](https://issues.apache.org/jira/browse/CB-8467)
* [CB-12010](https://issues.apache.org/jira/browse/CB-12010) (android) Catch FileUriExposedException
* [CB-11955](https://issues.apache.org/jira/browse/CB-11955) Added Initial OSX platform support
* [CB-11694](https://issues.apache.org/jira/browse/CB-11694) Android: Set hadwareBackButton value according option in cordova.InAppBrowser.open
