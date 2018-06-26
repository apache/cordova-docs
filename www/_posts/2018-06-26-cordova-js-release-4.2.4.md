---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-JS release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-js 4.2.4` has been released. This is the source of the JavaScript code in `cordova.js` used in each of the Cordova platform implementations.

## Release Highlights

The purpose of this release is to include a recent logging update with internal `npm audit` messages resolved in the package build. Here are the major changes:

* [CB-9366](https://issues.apache.org/jira/browse/CB-9366) log `error.stack` data
* [CB-14145](https://issues.apache.org/jira/browse/CB-14145) `package.json` resolve `npm audit` warnings in `devDependencies` (for build and test scripts)
* [CB-14155](https://issues.apache.org/jira/browse/CB-14155) fix btest build target (by using `express` instead of `connect` in `devDependencies`)
* Other internal test fixes
