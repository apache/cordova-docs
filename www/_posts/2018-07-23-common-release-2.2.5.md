---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-Common Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-common 2.2.5` was released in July 2018. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like config.xml parsing.

## Release Highlights

The purpose of this release is to resolve an issue with NodeJS 4.x which is now deprecated. Here is the major change:

* `package.json` use plist@2 to avoid warning on NodeJS 4.x

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
