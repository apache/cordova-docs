---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Apache Cordova Windows 4.3.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.3.0` has been released!

This release mostly aims to bring support for [Platform Api](https://github.com/cordova/cordova-discuss/pull/12) interface and [unified message logging](https://github.com/cordova/cordova-discuss/issues/14) for **Windows**. It will be the default **Windows** version after the next `cordova-cli` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.3.0

To add it explicitly:

    cordova platform add windows@4.3.0

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->
## What's new in Windows

* [CB-10193](https://issues.apache.org/jira/browse/CB-10193) Add `BOM` to `www` files at build stage instead of prepare
* [CB-10303](https://issues.apache.org/jira/browse/CB-10303) Fixes build arguments parsing
* [CB-10292](https://issues.apache.org/jira/browse/CB-10292) **Windows** platform support for next version of `VS/MSBuild`
* [CB-10224](https://issues.apache.org/jira/browse/CB-10224) Removes duplicated/incorrect console line
* [CB-9828](https://issues.apache.org/jira/browse/CB-9828) Implement and expose `PlatformApi` for **Windows**.
