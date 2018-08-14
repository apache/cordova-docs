---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova OSX (macOS) 4.0.2 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova OSX 4.0.2` (for macOS) has been released! This release fixes various bugs releated to the previous `cordova-osx@4.0.1` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm osx
    cordova platform add osx@latest

To add it explicitly:

    cordova platform add osx@4.0.2

<!--more-->

## Curated Changelog

* [CB-14145](https://issues.apache.org/jira/browse/CB-14145) update dependencies to resolve `npm audit` issues, pinned in 4.0.x only ([GH-50](https://github.com/apache/cordova-osx/pull/50))
* [CB-9366](https://issues.apache.org/jira/browse/CB-9366) - log `error.stack` in `cordova.js` (update from `cordova-js@4.2.4`) in `4.0.x`
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) - `cordova.js` updates to pass eslint from cordova-js@4.2.2
* cordova.js updates from cordova-js@4.2.0
  - [CB-3785](https://issues.apache.org/jira/browse/CB-3785) enable EventListener interface support
  - [CB-3785](https://issues.apache.org/jira/browse/CB-3785) Channel.prototype.subscribe to support EventListener interface
  - [CB-9967](https://issues.apache.org/jira/browse/CB-9967) deleted legacy platform specific files from cordova-js
  - [CB-11522](https://issues.apache.org/jira/browse/CB-11522) [windows] Make cordova-js handle 'unknown' type
  - [CB-11522](https://issues.apache.org/jira/browse/CB-11522) Make utils.clone handle properties gracefully
