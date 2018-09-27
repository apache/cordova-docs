---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-CLI Hotfix Release"
categories: news
tags: release tools
---

We are happy to announce that Cordova CLI `8.1.1` hotfix was released in September 2018.

## Release Highlights

The purpose of this hotfix release is to resolve a couple items that were broken in the Cordova CLI `8.1.0` release:

* [GH-339](https://github.com/apache/cordova-cli/issues/339) Fix bin/cordova on Node.js 4
* [GH-337](https://github.com/apache/cordova-cli/issues/337) Revert messing with transitive dependencies in `npm-shrinkwrap.json` (re-introduces a _low-severity_ `npm audit` warning)

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
