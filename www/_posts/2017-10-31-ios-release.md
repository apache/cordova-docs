---
layout: post
author:
    name: Suraj Pindoria
    url: https://twitter.com/surajpindoria
title:  "Cordova iOS 4.5.3"
categories: announcements
tags: news releases
---

We are happy to announce a minor version of `Cordova iOS 4.5.3` has been released!

This version continues to add updates for the latest iOS 11 and Xcode 9.

Things to note:

* Updated splash screen mapping for new and missing devices
* Re-added an icon mapping that was accidentally removed

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.5.3

To add it explicitly:

    cordova platform add ios@4.5.3

<!--more-->
## What's new in iOS

* [CB-13493](https://issues.apache.org/jira/browse/CB-13493) Updated checked-in node_modules
* [CB-13290](https://issues.apache.org/jira/browse/CB-13290) (ios) Update splash screen mapping for missing devices
* [CB-13454](https://issues.apache.org/jira/browse/CB-13454) (ios) re-add icon-40@2x.png that was accidentally removed
