---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 1.0.2 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 1.0.2`!  This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@1.0.2](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To install:**

Cordova 8.x
```
cordova platform add cordova-electron@1.0.2
```

As original release was for **Cordova CLI 9.x**, the decision to support on **Cordova CLI 8.x** was in the post-release phase.

With this release, **Cordova CLI 8.x** now supports Electron.

Please note that any command that accept the platform argument, on **Cordova CLI 8.x**, must be `cordova-electron`.

Example:

```
cordova run cordova-electron --nobuild
cordova build cordova-electron
```

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documention](https://github.com/apache/cordova-electron/blob/rel/1.0.2/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-38](https://github.com/apache/cordova-electron/pull/38) Support User Defined **Electron** Settings
* [GH-37](https://github.com/apache/cordova-electron/pull/37) Remove `nodeIntegration` Warning by Setting Default to `false`
* [GH-36](https://github.com/apache/cordova-electron/pull/36) Rename **Electron** Main Entry File
* [GH-35](https://github.com/apache/cordova-electron/pull/35) Refactor `build.js` and Include Test Coverage
* [GH-33](https://github.com/apache/cordova-electron/pull/33) Update `cordova run` to Work with Pre-Cordova 9.x CLI
