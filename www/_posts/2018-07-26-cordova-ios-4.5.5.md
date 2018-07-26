---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova iOS 4.5.5 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova iOS 4.5.5` has been released! This release fixes various bugs releated to the previous `cordova-ios@4.5.4` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@latest

To add it explicitly:

    cordova platform add ios@4.5.5

<!--more-->

## Curated Changelog

* [CB-14145](https://issues.apache.org/jira/browse/CB-14145) - update dependencies to resolve `npm audit` issues, pinned in 4.5.x only ([GH-379](https://github.com/apache/cordova-ios/pull/379))
* [CB-9366](https://issues.apache.org/jira/browse/CB-9366) - log `error.stack` in `cordova.js` (update from `cordova-js@4.2.4`) in `4.5.x`
