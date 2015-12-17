---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Cordova iOS 4.0.1"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova iOS 4.0.1` has been released. This is a patch release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ios@4.0.1

To add it explicitly:

    cordova platform add ios@4.0.1

<!--more-->
## What's new in iOS platform

* [CB-10185](https://issues.apache.org/jira/browse/CB-10185) - Update CordovaLib.xcodeproj to recommended settings in Xcode 7.2
* [CB-10171](https://issues.apache.org/jira/browse/CB-10171) - WebKit Error after migration to iOS@4.0.0
* [CB-10155](https://issues.apache.org/jira/browse/CB-10155) - DisallowOverscroll not working
* [CB-10168](https://issues.apache.org/jira/browse/CB-10168) - CDVViewController appURL is nil if wwwFolderName is the path to a resource bundle
* [CB-10162](https://issues.apache.org/jira/browse/CB-10162) - update reference url for icon images
* [CB-10162](https://issues.apache.org/jira/browse/CB-10162) - correct the paths for iOS icon and splashscreen resources
