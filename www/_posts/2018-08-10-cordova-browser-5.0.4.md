---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova browser 5.0.4 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova browser 5.0.4` has been released! This release fixes various bugs releated to the previous `cordova-browser@5.0.3` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm browser
    cordova platform add browser@latest

To add it explicitly:

    cordova platform add browser@5.0.4

<!--more-->

## Curated Changelog

* [CB-14145](https://issues.apache.org/jira/browse/CB-14145) update dependencies to resolve `npm audit` issues, pinned in `5.0.x` only ([GH-53](https://github.com/apache/cordova-browser/pull/53))
* [CB-9366](https://issues.apache.org/jira/browse/CB-9366) - log `error.stack` in `cordova.js` (update from `cordova-js@4.2.4`) in `5.0.x`
