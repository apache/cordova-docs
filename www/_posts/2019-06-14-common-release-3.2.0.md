---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-Common Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-common 3.2.0` was released in June 2019. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

* (ios) `plist` document not indented with tabs ([#69](https://github.com/apache/cordova-common/pull/69))
* Update `fs-extra` to v8 ([#70](https://github.com/apache/cordova-common/pull/70))
* Add example usage of `podspec` declarations ([#67](https://github.com/apache/cordova-common/pull/67))
* implement `setPreference` and `setPlatformPreference` ([#63](https://github.com/apache/cordova-common/pull/63))
* Catch leaked exceptions in `superspawn` and convert them to rejections ([#66](https://github.com/apache/cordova-common/pull/66))
