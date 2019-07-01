---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 1.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 1.1.0`!  This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@1.1.0](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To upgrade:**

```
cordova platform remove electron
cordova platform add electron@1.1.0
```

**To install:**

```
cordova platform add electron@1.1.0
```

Some of the notable features that were introduced in this release are the ability to:
* Bundle node modules with your Electron app
* Append overridable/top-level platform and package options
* Append an installer icon for custom builds
* Use splash screens

As well, we have bumped the `cordova-common@^3.2.0` and `fs-extra@^8.0.1` dependencies to resolve an `fs-extra` defect that caused random build failures on the Windows environment. [Read More](https://github.com/apache/cordova/issues/121)



For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documentation](https://github.com/apache/cordova-electron/blob/rel/1.1.0/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-77](https://github.com/apache/cordova-electron/pull/77) fix: display correct package version in CLI
* [GH-76](https://github.com/apache/cordova-electron/pull/76) Append Overridable/Top-Level per Platform Options
* [GH-75](https://github.com/apache/cordova-electron/pull/75) fix: Typo in Build: `Singning` -> `Signing`
* [GH-71](https://github.com/apache/cordova-electron/pull/71) Update `devDependencies`
* [GH-66](https://github.com/apache/cordova-electron/pull/66) Bump dependency `fs-extra@^8.0.1`
* [GH-70](https://github.com/apache/cordova-electron/pull/70) Bump `cordova-common@^3.2.0`
* [GH-65](https://github.com/apache/cordova-electron/pull/65) Fixed `package.json` version to `1.1.0-dev`
* [GH-62](https://github.com/apache/cordova-electron/pull/62) Fix Bundle Feature's Project Path Issue & Warning Output
* [GH-58](https://github.com/apache/cordova-electron/pull/58) Set Author Name and Email to `package.json`
* [GH-54](https://github.com/apache/cordova-electron/pull/54) Added Bundle Node Module Support
* [GH-57](https://github.com/apache/cordova-electron/pull/57) Remove Maintainer Option from Linux Build JSON
* [GH-59](https://github.com/apache/cordova-electron/pull/59) Allow Users to Set Linux App Category
* [GH-51](https://github.com/apache/cordova-electron/pull/51) Append package top-level key options
* [GH-48](https://github.com/apache/cordova-electron/pull/48) Implement Splash Screen handling
* [GH-61](https://github.com/apache/cordova-electron/pull/61) Updated `DOCUMENTATION.md`
* [GH-53](https://github.com/apache/cordova-electron/pull/53) Add Node.js 12 to CI Services
* [GH-42](https://github.com/apache/cordova-electron/pull/42) Update the `config.xml` path in the XHR load eventListener
* [GH-45](https://github.com/apache/cordova-electron/pull/45) Append Installer Icon to User Build Settings for Custom Builds
* [GH-43](https://github.com/apache/cordova-electron/pull/43) Update `README`.md
* [GH-41](https://github.com/apache/cordova-electron/pull/41) Update System Requirements in `DOCUMENTATION.md`
