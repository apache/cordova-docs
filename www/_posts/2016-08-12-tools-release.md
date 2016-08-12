---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-Kotikov
title:  "Tools Release"
categories: news
tags: release tools
---

New updates of `cordova` and `cordova-lib` are now available!

* [cordova@6.3.1](https://www.npmjs.org/package/cordova)
* [cordova-lib@6.3.1](https://www.npmjs.org/package/cordova-lib)

In this release we've fixed a couple of bugs, including regression that was causing `cordova run` and `cordova emulate`
commands ignore `--nobuild` option.

To update your cordova CLI:

    npm install -g cordova@latest

Make sure to report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-11652](https://issues.apache.org/jira/browse/CB-11652) Update run and emulate to skip build
* [CB-11194](https://issues.apache.org/jira/browse/CB-11194) Defer creating of libDir folder until something actually requests it
* [CB-11493](https://issues.apache.org/jira/browse/CB-11493) Add cordova emulate option to skip prepare
* [CB-11205](https://issues.apache.org/jira/browse/CB-11205) Respect saved variables when installing plugin
* [CB-11589](https://issues.apache.org/jira/browse/CB-11589) Fix missing plugin files after restore

## cordova-cli

* [CB-11685](https://issues.apache.org/jira/browse/CB-11685) Updated cordova-lib dependency to 6.3.1
