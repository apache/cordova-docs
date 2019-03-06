---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 1.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 1.0.1`!  This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@1.0.1](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To upgrade:**

Pre-Cordova 9
```
cordova platform add cordova-electron@1.0.1
```

Cordova 9 (Not Released as of 2018/03/06)
```
cordova platform add electron@1.0.1
```

The original release was targeted for **Cordova CLI 9.x**. The decision to support on **Cordova CLI 8.x** was in the post-release phase. The **pre-Cordova 9** steps in the [previous release post](https://cordova.apache.org/announcements/2019/02/28/cordova-electron-release-1.0.0.html) were meant to be for this release.

This release contains the changes to allow Electron to work correctly with **Cordova CLI 8.x**.

Please note that all commands on **Cordova CLI 8.x** and that has the platform argument should use `cordova-electron`.

Example:

```
cordova run cordova-electron --nobuild
cordova build cordova-electron
```

Once **Cordova 9.x** is released, please remove the existing Electron platform and re-add the platform with the `electron` alias as the platform argument.
This will let you use the `electron` argument instead of `cordova-electron`.

Example:

```
cordova create projectName
cd projectName
cordova platform add cordova-electron@1.0.1
npm i -g cordova@latest
cordova platform rm cordova-electron
cordova platform add electron
cordova run electron --nobuild
```

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documention](https://github.com/apache/cordova-electron/blob/rel/1.0.1/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-33](https://github.com/apache/cordova-electron/pull/33) Update `cordova run` to Work with Pre-Cordova 9.x CLI