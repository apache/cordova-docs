---
layout: post
author:
    name: Suraj Pindoria
    url: https://twitter.com/surajpindoria
title:  "Cordova iOS 4.5.4"
categories: announcements
tags: news releases
---

We are happy to announce a minor version of `Cordova iOS 4.5.4` has been released!

This version continues to add updates for the latest iOS 11 and also includes some fixes for the iPhone X.

Things to note:

* Added flag for Xcode-managed provisioning
* Fixed compile error when compile source as objective-c++
* Adjusted storyboard constraints

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.5.4

To add it explicitly:

    cordova platform add ios@4.5.4

<!--more-->
## What's new in iOS

* [CB-13579](https://issues.apache.org/jira/browse/CB-13579) Updated checked in node_modules
* [CB-13523](https://issues.apache.org/jira/browse/CB-13523) Add flag for Xcode-managed provisioning
* Fix compile error when compile source as objective-c++
* [CB-13505](https://issues.apache.org/jira/browse/CB-13505) (ios) adjust storyboard constraints
