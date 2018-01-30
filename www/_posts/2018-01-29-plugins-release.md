---
layout: post
author:
    name: Suraj Pindoria
    url: https://twitter.com/surajpindoria
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-camera@4.0.2
* cordova-plugin-file-transfer@1.7.1
* cordova-plugin-inappbrowser@2.0.2
* cordova-plugin-media@5.0.2
* cordova-plugin-splashscreen@5.0.2

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera
    cordova plugin add cordova-plugin-camera@latest

Changes include:
<!--more-->
cordova-plugin-camera@4.0.2
* [CB-13781](https://issues.apache.org/jira/browse/CB-13781) (android) Fixed permissions request on **Android** 8 to save a photo into the photo album
* [CB-13747](https://issues.apache.org/jira/browse/CB-13747) Add build-tools-26.0.2 to travis

cordova-plugin-file-transfer@1.7.1
* [CB-13749](https://issues.apache.org/jira/browse/CB-13749) Add build-tools-26.0.2 to travis

cordova-plugin-inappbrowser@2.0.2
* [CB-13791](https://issues.apache.org/jira/browse/CB-13791) Add **Android** support for a footer close button
* [CB-13409](https://issues.apache.org/jira/browse/CB-13409) Lets user adjust color of toolbar, hide navigation buttons and set custom text on close button
* [CB-13746](https://issues.apache.org/jira/browse/CB-13746) Add build-tools-26.0.2 to travis

cordova-plugin-media@5.0.2
* [CB-13751](https://issues.apache.org/jira/browse/CB-13751) Add build-tools-26.0.2 to travis (#163)
* Fix for [CB-11513](https://issues.apache.org/jira/browse/CB-11513)
* [CB-7684](https://issues.apache.org/jira/browse/CB-7684) (#143)

cordova-plugin-splashscreen@5.0.2
* [CB-13750](https://issues.apache.org/jira/browse/CB-13750) Add build-tools-26.0.2 to travis
* [CB-13737](https://issues.apache.org/jira/browse/CB-13737) (iOS): fix Splash screen images for iPhone X
