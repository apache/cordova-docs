---
layout: post
author:
    name: Suraj Pindoria
    url: https://twitter.com/surajpindoria
title:  "Cordova iOS 4.5.2"
categories: announcements
tags: news releases
---

We are happy to announce a minor version of `Cordova iOS 4.5.2` has been released!

This version continues to add updates for the latest iOS 11 and Xcode 9.

Things to note:

* Fixed a major issue that prevented building binaries when using a build config file
* Updated the icon mapping to include new iOS 11 icons as well as added Apple Watch icons

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.5.2

To add it explicitly:

    cordova platform add ios@4.5.2

<!--more-->
## What's new in iOS

* [CB-13417](https://issues.apache.org/jira/browse/CB-13417) Updated checked in node_modules
* [CB-12896](https://issues.apache.org/jira/browse/CB-12896) (ios) Update icon mapping (#341)
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) - ignoring cordova.js file (#339)
* [CB-13315](https://issues.apache.org/jira/browse/CB-13315) - (ios) fixed bug building for ios using Xcode 9 (#338)
