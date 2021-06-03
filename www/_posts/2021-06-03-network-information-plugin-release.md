---
layout: post
author:
    name: Pieter Van Poyer
title:  "Network Information Plugin Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to our Network Information plugin!

* [cordova-plugin-network-information@3.0.0](https://github.com/apache/cordova-plugin-network-information)

## Release Highlights

### Network Information

The 3.0.0 major release fixes behaviour on Android.
The connection event was running at unexpected times.

All references of the deprecated `navigator.network` are removed.


* [GH-114](https://github.com/apache/cordova-plugin-network-information/pull/114) Bugfix [issue 110](https://github.com/apache/cordova-plugin-network-information/issues/110) - online event was firing at unexpected times on Android, due to a missing equals implementation on the Android JSONObject.
* [GH-117](https://github.com/apache/cordova-plugin-network-information/pull/117) Removes deprecated navigator.network access.

<!--more-->
# Changes include:

* [GH-128](https://github.com/apache/cordova-plugin-network-information/pull/128) ci: add node-14.x to workflow
