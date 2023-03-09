---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Common 5.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-common@5.0.0` has been released. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

The most notable changes in this major release are:

* [GH-186](https://github.com/apache/cordova-common/pull/186) feat!: bump package requirement `node>=16`

As Node.js 14 nears the end-of-life (April 2023), we have bumped the minimum requirement to 16.0.0. This update has also increased the minimum npm requirement to 7.10.0.

* [GH-197](https://github.com/apache/cordova-common/pull/197) feat(android): added `monochrome` attribute

In preparation for Cordova-Android's next major release, supporting logic for Android's monochrome icons has been included.

<!--more-->
# Changes include:

* [GH-186](https://github.com/apache/cordova-common/pull/186) feat!: bump package requirement node>=16
* [GH-197](https://github.com/apache/cordova-common/pull/197) feat(android): added monochrome attribute
* [GH-99](https://github.com/apache/cordova-common/pull/99) chore: drop q where possible
* [GH-198](https://github.com/apache/cordova-common/pull/198) test: Removed obsolete test
* [GH-196](https://github.com/apache/cordova-common/pull/196) dep: bump @cordova/eslint-config@^5.0.0
* [GH-192](https://github.com/apache/cordova-common/pull/192) dep!: bump all available packages
* [GH-193](https://github.com/apache/cordova-common/pull/193) refactor: replace underscore w/ lodash module pkgs
* [GH-194](https://github.com/apache/cordova-common/pull/194) refactor: renamed variable
* [GH-188](https://github.com/apache/cordova-common/pull/188) ci(actions): test w/ node 14, 16, 18
* [GH-187](https://github.com/apache/cordova-common/pull/187) ci(actions): update workflow
