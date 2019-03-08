---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Windows 7.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Windows 7.0.0`!  This is one of Cordova's supported platforms for building Windows applications.

* [cordova-windows@7.0.0](https://www.npmjs.com/package/cordova-windows)

## Release Highlights

**To upgrade:**

```
cordova platform remove windows
cordova platform add windows@7.0.0
```

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-324](https://github.com/apache/cordova-windows/pull/324) Change Temporary Directories for Tests
* [GH-319](https://github.com/apache/cordova-windows/pull/319) Windows Platform Release Preparation (Cordova 9)
* [GH-317](https://github.com/apache/cordova-windows/pull/317) Copy `node_modules` if the directory exists
* [GH-293](https://github.com/apache/cordova-windows/pull/293) Remove Bundled Dependencies
* [GH-286](https://github.com/apache/cordova-windows/pull/286) [CB-14225](https://issues.apache.org/jira/browse/CB-14225) Fix Sample Namespace Serialize Attribute in `template/Properties/Default.rd.xml`
* [GH-289](https://github.com/apache/cordova-windows/pull/293) [CB-14075](https://issues.apache.org/jira/browse/CB-14075) Remove Node 4 from CI
* [GH-284](https://github.com/apache/cordova-windows/pull/284) [CB-14224](https://issues.apache.org/jira/browse/CB-14224) `Default.rd.xml` header fixes
