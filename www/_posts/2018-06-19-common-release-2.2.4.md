---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-Common Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-common 2.2.4` has been released. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like config.xml parsing.

## Release Highlights

The purpose of this release is to resolve issues with dependencies on cordova-ios@4. Here are the major changes:

* Revert change to use strip-bom package to strip BOM
* Revert change to update dependencies in package.json (needed to resolve issues with cordova-ios@4) but keep using plist@^3.0.1 to avoid `npm audit` issue

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
