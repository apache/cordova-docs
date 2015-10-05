---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: October 10th, 2013"
categories: news
tags: release
---

Today we are doing a release for the plugins that have been updated since our last release. We are also excited to announce three new plugins that have recently been added to our registry.

The new plugins include:

* websql for Android
* keyboard for iOS
* statusbar for iOS

The following plugins have been updated for this release:

* cordova-plugin-contacts
* cordova-plugin-file
* cordova-plugin-file-transfer
* cordova-plugin-inappbrowser
* cordova-plugin-media
* cordova-plugin-media-capture
* cordova-plugin-splashscreen
* cordova-plugin-vibration

<br />

These plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io).

<br />

<!--more-->

E.g. To update your camera plugin:

    cordova plugin rm org.apache.cordova.camera
    cordova plugin add org.apache.cordova.camera


*Notable Changes:*

* [CB-4950](https://issues.apache.org/jira/browse/CB-4950) Remove the dependence on concrete component android.webkit.WebView. (contacts)
* [CB-5020](https://issues.apache.org/jira/browse/CB-5020) File plugin should execute on a separate thread (file)
* Fixed file-transfer issues for windows 8 (file-transfer)
* [CB-4926](https://issues.apache.org/jira/browse/CB-4926) Fixes inappbrowser plugin loading for windows8 (inappbrowser)
* [CB-4928](https://issues.apache.org/jira/browse/CB-4928) plugin-media doesn't load on windows8 (media)
* [CB-4806](https://issues.apache.org/jira/browse/CB-4806) (Re-fix) Update splashscreen image bounds for iOS 7 (splashscreen)
* [CB-4934](https://issues.apache.org/jira/browse/CB-4934) plugin-splashscreen should not show by default on Windows8 (splashscreen)
* [CB-4929](https://issues.apache.org/jira/browse/CB-4929) plugin-splashscreen not loading proxy windows8 (splashscreen)

<br />
You can check out the individual release notes in each of the plugin repos for more details.

