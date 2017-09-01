---
layout: post
author:
    name: Audrey So
    url: https://twitter.com/aud_rey_so
title:  "Cordova-Common@2.1.0 Released!"
date: 2017-09-05
categories: news
tags: release tools cordova-common
---

We just released some changes to `cordova-common`!

* [cordova-common@2.1.0](https://www.npmjs.com/package/cordova-common)

Release Highlights:
* Support added for `<config-file>` in `config.xml`.
* `allows-arbitrary-loads-for-media` attribute parsing added for `getAccesses`.
* Added variable replacing the `framework` tag.
* `JSON` uses 2 spaces for indentation.

Watch for this release to start rolling into upcoming platform and `cordova-cli` releases.

<!--more-->
# Changes include:

## cordova-common

* [CB-13145](https://issues.apache.org/jira/browse/CB-13145) Added variable replacing the `framework` tag.
* [CB-13211](https://issues.apache.org/jira/browse/CB-13211) Added `allows-arbitrary-loads-for-media` attribute parsing for `getAccesses`.
* [CB-11968](https://issues.apache.org/jira/browse/CB-11968) Added support for `<config-file>` in `config.xml`.
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) Set up `eslint` and removed `jshint`.
* [CB-12785](https://issues.apache.org/jira/browse/CB-12785) Added `.gitignore`, `travis`, and `appveyor` support.
* [CB-12250](https://issues.apache.org/jira/browse/CB-12250) & [CB-12409](https://issues.apache.org/jira/browse/CB-12409) *iOS*: Fixed bug with escaping properties from `plist` file.
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) Updated `common`, `fetch`, and `serve` `pkgJson` to point `pkgJson` repo items to github mirrors.
* [CB-12766](https://issues.apache.org/jira/browse/CB-12766) Consistently write `JSON` with 2 spaces indentation.