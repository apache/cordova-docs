---
layout: post
author:
    name: Bryan Ellis
title:  "Camera Plugin Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to our camera plugin!

* [cordova-plugin-camera@5.0.0](https://www.npmjs.org/package/cordova-plugin-camera)

## Release Highlights

In this major release, we have:

* removed the `DestinationType` of `NATIVE_URI` that was used only in the iOS and Windows platform. For iOS, the `NATIVE_URI` returned an `ALAssetsLibrary` that had been deprecated and does not work with the `WKWevView`.
* removed the `CordovaUri` class helper that used fuzzy logic to guess the image path from the content URL. This process was not necessary as we know the file path beforehand.
* bumped the project requirement definition. This plugin version requires Cordova CLI >= 9.0.0. If building for Android, this plugin version will also require the Cordova Android platform >= 9.0.0.
* changed the location of the temporary saved images from external to internal cache.

<!--more-->
# Changes include:

## Breaking

* [GH-637](https://github.com/apache/cordova-plugin-camera/pull/637) breaking: remove `NATIVE_URI` DestinationType
* [GH-628](https://github.com/apache/cordova-plugin-camera/pull/628) breaking: bump project requirements
* [GH-627](https://github.com/apache/cordova-plugin-camera/pull/627) breaking: bump version 5.0.0-dev
* [GH-617](https://github.com/apache/cordova-plugin-camera/pull/617) breaking(android): stop using `CordovaUri` helper class

## Feature

* [GH-629](https://github.com/apache/cordova-plugin-camera/pull/629) feat: migrate to `@cordova/eslint-config@3.x`
* [GH-588](https://github.com/apache/cordova-plugin-camera/pull/588) feat(android): Cache images in device storage, devices have enough space now.

## Fix

* [GH-632](https://github.com/apache/cordova-plugin-camera/pull/632) fix(android): return error if file url is null
* [GH-510](https://github.com/apache/cordova-plugin-camera/pull/510) fix(android): use provider prefix to avoid conflicts other plugin providers
* [GH-612](https://github.com/apache/cordova-plugin-camera/pull/612) fix(ios): `tempFilePath` called twice if using `CameraUsesGeolocation`
* [GH-580](https://github.com/apache/cordova-plugin-camera/pull/580) fix(ios): return copy of video when picking from gallery on iOS 13
* [GH-551](https://github.com/apache/cordova-plugin-camera/pull/551) fix: UI API called on a background thread ([#550](https://github.com/apache/cordova-plugin-camera/pull/550), [#530](https://github.com/apache/cordova-plugin-camera/pull/530), [#447](https://github.com/apache/cordova-plugin-camera/pull/447))
* [GH-306](https://github.com/apache/cordova-plugin-camera/pull/306) fix: ImagePicker returning same image

## Chore

* [GH-634](https://github.com/apache/cordova-plugin-camera/pull/634) chore: remove deprecated `file-transfer` plugin
* [GH-630](https://github.com/apache/cordova-plugin-camera/pull/630) chore: add `package-lock.json`
* [GH-631](https://github.com/apache/cordova-plugin-camera/pull/631) chore(package): use short notation
* [GH-575](https://github.com/apache/cordova-plugin-camera/pull/575) chore(npm): adds ignore list
* chore(asf): update git notification settings
* chore: Update CONTRIBUTING.md

## CI

* [GH-648](https://github.com/apache/cordova-plugin-camera/pull/648) ci(travis): update osx xcode image
* [GH-626](https://github.com/apache/cordova-plugin-camera/pull/626) ci: fix additional tests
* [GH-576](https://github.com/apache/cordova-plugin-camera/pull/576) ci: updates Node.js versions

# Docs

* [GH-508](https://github.com/apache/cordova-plugin-camera/pull/508) docs(readme): app renamed to Google Photos
* [GH-513](https://github.com/apache/cordova-plugin-camera/pull/513) docs(README): remove confusing comment
* [GH-512](https://github.com/apache/cordova-plugin-camera/pull/512) docs(README): remove orphan Windows phone 7 note
