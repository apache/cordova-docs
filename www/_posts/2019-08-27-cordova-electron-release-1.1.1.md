---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 1.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 1.1.1`!  This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@1.1.1](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To upgrade:**

```
cordova platform remove electron
cordova platform add electron@1.1.1
```

**To install:**

```
cordova platform add electron@1.1.1
```

Some of the notable fixes in this patch releae are:

* Builds no longer fails when icons with incorrect requirements are defined as long as one of the icons meet the requirements.
* Prepare no longer fails  when `package.json` is missing the `dependencies` property.

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documentation](https://github.com/apache/cordova-electron/blob/rel/1.1.1/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-94](https://github.com/apache/cordova-electron/pull/94) chore: rebuilt `package-lock.json` for audit fix
* [GH-79](https://github.com/apache/cordova-electron/pull/79) fix: filter icons only matching requirements
* [GH-89](https://github.com/apache/cordova-electron/pull/89) fix: prepare missing dependencies failure
* [GH-86](https://github.com/apache/cordova-electron/pull/86) refactor: improve create test spec speed
* [GH-85](https://github.com/apache/cordova-electron/pull/85) fix: use `spyOn` for process global var
