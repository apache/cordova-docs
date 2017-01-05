---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Android 6.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 6.1.1` has been released! 

Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.1.1

To add it explicitly:

    cordova platform add android@6.1.1

<!--more-->
## What's new in Android
* [CB-12159](https://issues.apache.org/jira/browse/CB-12159) **Android** Keystore password prompt won't show up
* [CB-12169](https://issues.apache.org/jira/browse/CB-12169) Check for build directory before running a clean
* Fixed `AndroidStudio` tests to actually run, removed `app/src/main/assets/` as a requirement and added `app/src/main/res` instead, added placeholder for `build/` folder, Removed dupe `gitignore`

