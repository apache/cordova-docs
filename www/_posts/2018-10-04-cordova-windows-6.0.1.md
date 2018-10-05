---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova Windows 6.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 6.0.1` has been released! This release fixes various bugs releated to the previous `cordova-windows@6.0.0` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm windows
    cordova platform add windows@latest

To add it explicitly:

    cordova platform add windows@6.0.1

<!--more-->

## Curated Changelog

* [CB-14224](https://issues.apache.org/jira/browse/CB-14224) add license text and GitHub link to `template/Properties/Default.rd.xml`
* [CB-14145](https://issues.apache.org/jira/browse/CB-14145) update dependencies to resolve `npm audit` issues, pinned in 6.0.x only ([GH-281](https://github.com/apache/cordova-windows/pull/281))
* [CB-9366](https://issues.apache.org/jira/browse/CB-9366) - log `error.stack` in `cordova.js` (update from `cordova-js@4.2.4`) in `6.0.x`
