---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Android 6.2.2 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 6.2.2` has been released! This patch release adds support for `android sdk tools 26.0.1`. We strongly recommend upgrading to this version if you are using the latest **Android sdk tools**. Older versions of **Cordova-Android** do not work with the latest **Android sdk tools**!

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.2.2

To add it explicitly:

    cordova platform add android@6.2.2

This release will have to be explicitly added until the upcoming `cordova@7` release, where it will be pinned as the default android platform.

<!--more-->
## What's new in Android
* [CB-12697](https://issues.apache.org/jira/browse/CB-12697) Updated checked-in `node_modules`
* [CB-12640](https://issues.apache.org/jira/browse/CB-12640) better handling of unrecognized commands on **windows**.
* [CB-12640](https://issues.apache.org/jira/browse/CB-12640) flipped avd parsing logic so that it always tries to use `avdmanager` to retrieve avds first, then falls back to `android` command if `avdmanager` cannot be found.
* [CB-12640](https://issues.apache.org/jira/browse/CB-12640) support for `android sdk tools 26.0.1`.

