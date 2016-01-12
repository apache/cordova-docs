---
layout: post
author:
    name: David Barth
    url: https://twitter.com/dbarthc
title:  "Cordova Ubuntu 4.3.2"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Ubuntu 4.3.2` has been released. This is a patch release, with several usability improvements and an update of the default framework to `ubuntu-sdk-15.04`.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ubuntu@4.3.2

To add it explicitly:

    cordova platform add ubuntu@4.3.2

<!--more-->
## What's new in Cordova Ubuntu

* [CB-10119](https://issues.apache.org/jira/browse/CB-10119) Change click framework to 15.04 by default
* check_reqs only verifies node dependencies now, not ubuntu build deps which are checked once trying to build

