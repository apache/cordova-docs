---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Common 4.0.2 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-common@4.0.2` was released in July 2020. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

The most notable fix in this patch release is the ability to update the correct app's `plist` file when multiple `plist` files are present within the project. More details can be found in the [pull request](https://github.com/apache/cordova-common/pull/148) and [original bug ticket](https://github.com/apache/cordova-common/issues/144).

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-148](https://github.com/apache/cordova-common/pull/148) fix(ios): resolve correct path to app info `plist` when multiple `plist` files are present
* [GH-147](https://github.com/apache/cordova-common/pull/147) chore: remove trailing whitespace
* [GH-146](https://github.com/apache/cordova-common/pull/146) chore: bump `devDependencies` `nyc` -> `^15.1.0`
* [GH-145](https://github.com/apache/cordova-common/pull/145) test: remove unused test fixtures
