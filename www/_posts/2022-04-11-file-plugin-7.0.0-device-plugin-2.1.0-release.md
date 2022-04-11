---
layout: post
author:
    name: Bryan Ellis
title:  "File Plugin 7.0.0 & Device Plugin 2.1.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-file` & `cordova-plugin-device`!

* [cordova-plugin-file@7.0.0](https://www.npmjs.com/package/cordova-plugin-file)
* [cordova-plugin-device@2.1.0](https://www.npmjs.com/package/cordova-plugin-device)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-file
cordova plugin add cordova-plugin-file@7.0.0

cordova plugin remove cordova-plugin-device
cordova plugin add cordova-plugin-device@2.1.0
```

## Release Highlights

### `cordova-plugin-file`

For Android, a `WebViewAssetLoader` proxy handler has been added to support loading `cdvfile` URLs while using a custom scheme. It is recommended to use the `toURL` method to fetch the consumable URL. When the app is served from the `http` or `https` protocol, the `toURL` will return the appropriate consumable `cdvfile` URL. If the app is used from the `file` protocol, `toURL` will return the native `file` URL.

### `cordova-plugin-device`

Electron native support has been added.

For Android, the `sdkVersion` property is now included on the `window.device` object, and returned within the `getInfo` response object.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-plugin-file

* [GH-519](https://github.com/apache/cordova-plugin-file/pull/519) chore!: removed old platform code & lint cleanup
* [GH-517](https://github.com/apache/cordova-plugin-file/pull/517) fix(android): support cdvfile assets for custom scheme
* [GH-516](https://github.com/apache/cordova-plugin-file/pull/516) fix(android): create `toURL` override to preserve other platforms
* [GH-487](https://github.com/apache/cordova-plugin-file/pull/487) fix(android): Request external read permission when listing external directories
* [GH-513](https://github.com/apache/cordova-plugin-file/pull/513) feat(android): add `WebViewAssetLoader` proxy handler for cdvfile
* [GH-490](https://github.com/apache/cordova-plugin-file/pull/490) chore: `npmrc`
* [GH-489](https://github.com/apache/cordova-plugin-file/pull/489) fix: Brought back the return statement
* [GH-470](https://github.com/apache/cordova-plugin-file/pull/470) fix: Remove test log
* [GH-447](https://github.com/apache/cordova-plugin-file/pull/447) fix(browser): typo in `preparing.js`
* [GH-439](https://github.com/apache/cordova-plugin-file/pull/439) chore: Require **Android** 9
* [GH-433](https://github.com/apache/cordova-plugin-file/pull/433) refactor(android): Removed obsolete copyResource function
* [GH-417](https://github.com/apache/cordova-plugin-file/pull/417) fix(android): Use legacy storage

## cordova-plugin-device

* [GH-167](https://github.com/apache/cordova-plugin-device/pull/167) feat(ios): detect if app is running on a macOS desktop with Apple Silicon
* [GH-157](https://github.com/apache/cordova-plugin-device/pull/157) feat(android): `getInfo` response to include `sdkVersion`
* [GH-152](https://github.com/apache/cordova-plugin-device/pull/152) fix(osx): rename classes to fix plugin
* [GH-135](https://github.com/apache/cordova-plugin-device/pull/135) feat(electron): add support
* [GH-109](https://github.com/apache/cordova-plugin-device/pull/109) Log error to `console`, not to `dialog` box
