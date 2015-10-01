---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: Dec 4, 2013"
categories: news
tags: release
---

Today we are doing a plugins release in preparation for Cordova 3.3.0. Most plugins now have support for our upcoming platform additions, Amazon Fire OS & Ubuntu! Most notable changes include:

* Ubuntu support for most plugins
* Amazon Fire OS support for most plugins
* WP8 add support for battery-level
* Camera Plugin now supports Firefox OS
* Geolocation Plugin now supports Firefox OS
* [CB-3420](https://issues.apache.org/jira/browse/CB-3420) WP feature hidden=yes implemented for inappbrowser
* [CB-4724](https://issues.apache.org/jira/browse/CB-4724) WP8 - Fixed UriFormatException for inappbrowser
* [CB-5291](https://issues.apache.org/jira/browse/CB-5291) iOS - Media Capture Audio - status bar issues under iOS 7
* [CB-5275](https://issues.apache.org/jira/browse/CB-5275) Fixed media-capture's ability to select images & videos on Android
* [CB-4747](https://issues.apache.org/jira/browse/CB-4747) Fixed BlackBerry background vibrate

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

The new & improved file plugin did not get released with todays release. It requires more work & testing. We hope to have it out before 3.3.0 lands next week.

<!--more-->

E.g. To update your vibration plugin:

    cordova plugin rm org.apache.cordova.vibration
    cordova plugin add org.apache.cordova.vibration
