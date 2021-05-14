---
layout: post
author:
    name: Pieter Van Poyer
title:  "Camera Plugin Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to our Camera plugin!

* [cordova-plugin-camera@5.0.2](https://github.com/apache/cordova-plugin-camera)

## Release Highlights

### Camera

The 5.0.2 patch release fixes a bug on Android.
After taking a picture with the camera plugin on Android, the app could occasionally crash. 
This crash did occur when the main activity was destroyed by the Android OS to free up memory, when the app would resume afterwards with a PendingIntent the restoring of the state was not correctly handled.


* [GH-700](https://github.com/apache/cordova-plugin-camera/pull/700) Bugfix [issue 665](https://github.com/apache/cordova-plugin-camera/issues/665) - app crashes after taking a picture due to a bug in the camera plugin when app is resumed

<!--more-->
# Changes include:

* [GH-691](https://github.com/apache/cordova-plugin-camera/pull/691) ci: add node-14.x to workflow (#691)

