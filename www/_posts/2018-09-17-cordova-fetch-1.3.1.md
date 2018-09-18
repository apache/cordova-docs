---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-fetch Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-fetch 1.3.1` was released in September 2018.

## Release Highlights

The purpose of this release is to resolve the project URL in `package.json` and include a few minor bug fixes. Here are the important changes:

* [GH-20](https://github.com/apache/cordova-fetch/pull/20) Fix repo url in `package.json`
* [CB-13503](https://issues.apache.org/jira/browse/CB-13503) fix trimID bug when using file:path/to/plugin ([GH-13](https://github.com/apache/cordova-fetch/pull/13))

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
