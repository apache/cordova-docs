---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-CLI 8.1.2 Patch Release"
categories: news
tags: release tools
---

We are happy to announce that Cordova CLI `8.1.2` patch version was released in October 2018.

## Release Highlights

The purpose of this patch release is to include `cordova-lib@8.1.1` bugfix update as follows:

* Updated `cordova-lib@8.1.1` dependency to reintroduce `xcode` and other dependencies that were removed in `cordova-lib@8.1.0` minor release ([GH-706](https://github.com/apache/cordova-lib/issues/706))

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is possibly the last release that will support Node.js 4.x.
