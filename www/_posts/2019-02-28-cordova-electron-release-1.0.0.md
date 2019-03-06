---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 1.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 1.0.0`!  This is one of Cordova's newest supported platforms for building Electron applications.

* [cordova-electron@1.0.0](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To install:**

Cordova CLI 9.x
```
cordova platform add electron@1.0.0
```

Some of the major key features for this release:

* Electron v4.0.1
* Build Support (`electron-builder@^20.38.4`)
  * Linux, macOS, and Windows
  * Signing for macOS and Windows
* App and Installer Icon Support
* Run Support (App Previewing)
* Plugin Support
  * Plugins with browser support are also usable within Electron.

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documention](https://github.com/apache/cordova-electron/blob/rel/1.0.0/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-30](https://github.com/apache/cordova-electron/pull/30) Asset Install Fix from Mobilespec Report
* [GH-28](https://github.com/apache/cordova-electron/pull/28) Fix Scope Issue with Code Refactor
* [GH-27](https://github.com/apache/cordova-electron/pull/27) Build Script Improvements
* [GH-24](https://github.com/apache/cordova-electron/pull/24) Remove Unused and Unreachable Code
* [GH-20](https://github.com/apache/cordova-electron/pull/20) Fix Audit Report For High Severity Vulnerability
* [GH-18](https://github.com/apache/cordova-electron/pull/18) Refactor `prepare.js` and Increase Test Coverage
* [GH-15](https://github.com/apache/cordova-electron/pull/15) Implement SettingsJson Class Tests and Update Documentation
* [GH-13](https://github.com/apache/cordova-electron/pull/13) Implement Electron Custom App Icons Functionality
* [GH-9](https://github.com/apache/cordova-electron/pull/9) Electron Build Improvements
* [GH-8](https://github.com/apache/cordova-electron/pull/8) Create CDV Electron Settings JSON
* [GH-7](https://github.com/apache/cordova-electron/pull/7) Electron Platform Release Preparation (Cordova 9)
* [GH-6](https://github.com/apache/cordova-electron/pull/6) Cleanup Bin Files
* [GH-5](https://github.com/apache/cordova-electron/pull/5) Updated Correct Version Information
* [GH-4](https://github.com/apache/cordova-electron/pull/4) Electron Major Improvements & Feature Support
* [GH-1](https://github.com/apache/cordova-electron/pull/1) First Draft Release
* Added NPM Install Step
* Added Run Command Support

---
**UPDATE 2019-03-06**: This blog post has been updated to remove **pre-Cordova 9.x** reference.
