---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-lib Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-lib 8.1.1` was released in October 2018.

## Release Highlights

The purpose of this release is to resolve possible dependency breakage that was introduced in version `8.1.0`, as reported in [GH-706](https://github.com/apache/cordova-lib/issues/706). Here are the important changes:

* [GH-708](https://github.com/apache/cordova-lib/pull/708) reintroduce `xcode` dependency to to avoid breaking plugins such as `branch-cordova-sdk` before next major release
* [GH-708](https://github.com/apache/cordova-lib/pull/708) reintroduce other dependencies that were dropped in version `8.1.0` to better ensure that any other plugins or applications using `requireCordovaModule` would not be broken by a minor release upgrade

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
