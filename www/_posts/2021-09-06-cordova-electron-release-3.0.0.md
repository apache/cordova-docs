---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 3.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 3.0.0`! This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@3.0.0](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove electron
cordova platform add electron@3.0.0
```

**To install:**

```bash
cordova platform add electron@3.0.0
```

Some of the notable breaking changes & new features in this release are:

* The **Electron** core dependencies have been updated.
  * **Electron**: 14.0.0
  * **Chromium**: 93.0.4577.58
  * **Node**: v14.17.0
  * **V8**: v9.3
* **Node.js** 10 is no longer supported. This release requires the development environment to have **Node.js** 12.x or higher. It is recommended to use the current LTS, which is `14.17.6` at the time of this release.
* **Cordova Plugin Support**

  In the earlier releases of Cordova Electron, we didn't have a proper plugin system in place.

  There was a temporary workaround solution, `nodeIntegration`, that allowed app developers and plugin developers to have access to node modules. This was meant to be temporary and is not highly recommended because it can lead to [security issues](https://www.electronjs.org/docs/latest/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content).

  With the new support, the plugin will be preloaded and runs in a separate context from the web app. This feature is known as [Context Isolation](https://www.electronjs.org/docs/latest/tutorial/context-isolation/).

  Additionally, this system follows our pre-existing plugin structure. This means the app code does not need to make any special calls for Electron vs any other platform.

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documentation](https://github.com/apache/cordova-electron/blob/rel/2.0.0/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

#### Project Dependencies

* `cordova-common@^4.0.2`
* `electron@14.0.0`
* `electron-builder@^22.11.7`
* `electron-devtools-installer@^3.2.0`
* `execa@^5.1.1`
* `fs-extra@^10.0.0`

#### Breaking Changes

* [GH-205](https://github.com/apache/cordova-electron/pull/205) feat!(Api): remove unused locations data
* [GH-203](https://github.com/apache/cordova-electron/pull/203) feat!(electron): bump to `14.0.0`
* [GH-202](https://github.com/apache/cordova-electron/pull/202) feat!: remove old VERSION file
* [GH-199](https://github.com/apache/cordova-electron/pull/199) feat!: update node support
* [GH-198](https://github.com/apache/cordova-electron/pull/198) feat!(dependencies): update other packages
  * `execa@5.1.1`
  * `fs-extra@10.0.0`
  * `jasmine@3.9.0`
* [GH-197](https://github.com/apache/cordova-electron/pull/197) feat!(dependencies): bump **Electron** packages
  * `electron-builder@22.11.7`
  * `electron-devtools-installer@3.2.0`
* [GH-175](https://github.com/apache/cordova-electron/pull/175) breaking: add plugin support

#### Features

* [GH-200](https://github.com/apache/cordova-electron/pull/200) feat: update supported platform options
* [GH-184](https://github.com/apache/cordova-electron/pull/184) feat: forward **Electron**'s process `stdio` to terminal

#### Fixes

* [GH-183](https://github.com/apache/cordova-electron/pull/183) fix(npm): change prepack script to prepare
* [GH-180](https://github.com/apache/cordova-electron/pull/180) fix(windows): **Electron** window not displaying
* [GH-182](https://github.com/apache/cordova-electron/pull/182) fix: restrict deep merging on reserved keys
* [GH-172](https://github.com/apache/cordova-electron/pull/172) fix(pkg): typo in field "`keywords`"
* [GH-169](https://github.com/apache/cordova-electron/pull/169) fix(Api): do not depend on globals

#### Refactor Changes

* [GH-181](https://github.com/apache/cordova-electron/pull/181) refactor: use class static

#### Chores

* [GH-201](https://github.com/apache/cordova-electron/pull/201) chore(asf-license): add to header
* [GH-171](https://github.com/apache/cordova-electron/pull/171) chore: clean up `package.json`

#### Test & Other Changes

* [GH-194](https://github.com/apache/cordova-electron/pull/194) build: build `cordova.js` on `prepare`
* [GH-204](https://github.com/apache/cordova-electron/pull/204) test: cleanup and remove unneeded code
* [GH-90](https://github.com/apache/cordova-electron/pull/90) test(create): fix, clean up & extend
