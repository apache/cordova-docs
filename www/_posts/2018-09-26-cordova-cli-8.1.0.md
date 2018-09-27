---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-CLI Release"
categories: news
tags: release tools
---

We are happy to announce that Cordova CLI `8.1.0` was released in September 2018.

## Release Highlights

The purpose of this release is to resolve `npm audit` issues, use recent releases of cordova-android and cordova-windows, and include some other recent updates.  Here are the important changes:

* README.md fixes
* [GH-333](https://github.com/apache/cordova-cli/pull/333) Update to use `cordova-lib@8.1.0`
* [GH-295](https://github.com/apache/cordova-cli/pull/295) Proper error code and message when failing
* [GH-296](https://github.com/apache/cordova-cli/pull/296) Remove leftover makeshift benchmarking code
* [GH-296](https://github.com/apache/cordova-cli/pull/296) Use multi-line comment for license headers
* [CB-13772](https://issues.apache.org/jira/browse/CB-13772) print version numbers correctly in cordova requirements [GH-291](https://github.com/apache/cordova-cli/pull/291)
* [GH-307](https://github.com/apache/cordova-cli/pull/307) Remove outdated docs translations
* [GH-306](https://github.com/apache/cordova-cli/pull/306) Remove mentions of 'cordova plugin search' from docs
* [GH-312](https://github.com/apache/cordova-cli/pull/312) Update ESLint and fix linting errors
* [GH-312](https://github.com/apache/cordova-cli/pull/312) Update dependencies
* [GH-300](https://github.com/apache/cordova-cli/issues/300) Update `insight` to resolve `npm audit` warning

## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
