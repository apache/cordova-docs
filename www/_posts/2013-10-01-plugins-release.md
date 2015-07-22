---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: October 1st, 2013"
categories: news
tags: release
---

Today we are doing a plugin release in preparation for Apache Cordova 3.1.0, which is scheduled to be released later this week.

The main change for this release is removing 'core' from the plugin ID fields. This was done to make installing plugins simpler in 3.1.0. We are switching over to using plugin IDs and our [plugin registry](http://plugins.cordova.io/) for plugin installation instead of directly installing from the plugin git urls.

These plugins are compatible with Cordova 3.0.0. Feel free to upgrade your current plugins if you can't wait for 3.1.0 next week. Keep in mind that after you install these updated plugins, if you decide to remove these plugins from your project, you will have to reference the new IDs instead of the old ones that our docs show.

E.g. To update your camera plugin:

    cordova plugin rm org.apache.cordova.core.camera
    cordova plugin add org.apache.cordova.camera

<br />

<!--more-->

*Other Notable Changes:*

* Firefox OS support for Vibration and Device plugins
* Windows 8 support for multiple plugins
* Fixed warnings that arose with XCode 5
* [CB-4847](https://issues.apache.org/jira/browse/CB-4847) iOS 7 microphone access requires user permission (media plugin)
* [CB-4799](https://issues.apache.org/jira/browse/CB-4799) Fix incorrect JS references within native code for iOS & Android (media plugin)
* [CB-4806](https://issues.apache.org/jira/browse/CB-4806) Update splashscreen image bounds for iOS 7 (splashscreen plugin)
* [CB-4593](https://issues.apache.org/jira/browse/CB-4593) Added vibration support for BB10 (vibration plugin)

<br />
You can check out the individual release notes in each of the plugin repos for more details.

