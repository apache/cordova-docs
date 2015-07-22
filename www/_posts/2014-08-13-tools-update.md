---
layout: post
author:
    name: Marcel Kinard
    url: https://twitter.com/MarcelKinard
title:  "Tools Release: August 13, 2014"
categories: news
tags: release tools security
---

An updated version of `cordova` and `cordova-lib` are available starting today.

* [cordova@3.5.0-0.2.7](https://www.npmjs.org/package/cordova)
* [cordova-lib@0.21.7](https://www.npmjs.org/package/cordova-lib)

To update your tools:

    npm install -g cordova

These contain only one minor function change, which is related to the recent release of [Cordova Android 3.5.1](http://cordova.apache.org/announcements/2014/08/04/android-351.html). Before today's update, when adding the Android platform to a project, by default it would use version 3.5.0 of Cordova Android. In order to get the latest 3.5.1 of Cordova Android, you would need to manually specify the 3.5.1 version number on the `platform add` command. Today's update changes the default version of Cordova Android used when adding the Android platform to a project, so that you no longer need to manually specify the 3.5.1 version number to get the 3.5.1 version. You'll now get 3.5.1 by default.

