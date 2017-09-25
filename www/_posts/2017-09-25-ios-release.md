---
layout: post
author:
    name: Suraj Pindoria
    url: https://twitter.com/surajpindoria
title:  "Cordova iOS 4.5.1"
categories: announcements
tags: news releases
---

We are happy to announce a minor version of `Cordova iOS 4.5.1` has been released!

This version provides updates for the latest iOS 11 and Xcode 9. You can now create builds for this new version and properly deploy to either the emulator or device.

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.5.1

To add it explicitly:

    cordova platform add ios@4.5.1

<!--more-->
## What's new in iOS

* [CB-13310](https://issues.apache.org/jira/browse/CB-13310) Updated checked-in node_modules
* [CB-13191](https://issues.apache.org/jira/browse/CB-13191) (ios) Support marketing icon (#337)
* [CB-12888](https://issues.apache.org/jira/browse/CB-12888) - cordova emulate **iOS** doesn't work in **iOS** 11
