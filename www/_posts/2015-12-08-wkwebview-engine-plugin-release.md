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

* cordova-plugin-wkwebview-engine@1.0.0

This is the initial release of this plugin. This plugin requires `cordova-ios@4.0.0`. Please read the [iOS 4.0.0 release blog](http://cordova.apache.org/announcements/2015/12/08/cordova-ios-4.0.0.html) for instructions to update. 

To install:

    cordova plugin add cordova-plugin-wkwebview-engine --save

If you are thinking of migrating from using the UIWebView on iOS, please read the [README](https://github.com/apache/cordova-plugin-wkwebview-engine/blob/master/README.md) and also take note of the [limitations of this plugin](https://issues.apache.org/jira/issues/?jql=project%20%3D%20CB%20AND%20labels%20%3D%20wkwebview-known-issues).

Changes include:
<!--more-->

cordova-plugin-wkwebview-engine@1.0.0

* [CB-10146](https://issues.apache.org/jira/browse/CB-10146) - Add to README `WKWebViewEngine` quirks that will affect migration from `UIWebView`
* [CB-10133](https://issues.apache.org/jira/browse/CB-10133) - DataClone DOM Exception 25 thrown for postMessage
* [CB-10106](https://issues.apache.org/jira/browse/CB-10106) - added bridge proxy
* [CB-10107](https://issues.apache.org/jira/browse/CB-10107) - `nativeEvalAndFetch` called for all bridges
* [CB-10106](https://issues.apache.org/jira/browse/CB-10106) - **iOS** bridges need to take into account bridge changes
* [CB-10073](https://issues.apache.org/jira/browse/CB-10073) - `WKWebViewEngine` should post `CDVPluginResetNotification`
* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) - Updated RELEASENOTES to be newest to oldest
* [CB-10002](https://issues.apache.org/jira/browse/CB-10002) - `WKWebView` should propagate shouldOverrideLoadWithRequest to plugins
* [CB-9979](https://issues.apache.org/jira/browse/CB-9979) [CB-9972](https://issues.apache.org/jira/browse/CB-9972) Change **ATS** link to new link
* [CB-9636](https://issues.apache.org/jira/browse/CB-9636) - Plugin should detect at runtime **iOS** 8 and use of `file://` url and present an error
* [CB-8839](https://issues.apache.org/jira/browse/CB-8839) - `WKWebView` ignores `DisallowOverscroll` preference
* [CB-8556](https://issues.apache.org/jira/browse/CB-8556) - fix `handleOpenURL` for `WKWebViewEngine` plugin
* [CB-8666](https://issues.apache.org/jira/browse/CB-8666) - Update `CDVWKWebViewEngine` plugin to use 4.0.x branch code

