---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 2.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 2.0.0`!  This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@2.0.0](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove electron
cordova platform add electron@2.0.0
```

**To install:**

```bash
cordova platform add electron@2.0.0
```

Some of the notable breaking changes & new features in this release are:

* The **Electron** core dependencies have been updated.
  * **Electron**: 10.1.2
  * **Chromium**: 85.0.4183.98
  * **Node**: v12.16.3
  * **V8**: v8.5
* **NodeJS** 6 and 8 is no longer supported. This release requires the development environment to have **NodeJS** 10.x or higher. It is recommended to use the current LTS, which is `12.18.4` at the time of this release.
* DevTool extensions can now be added to debug builds to improve debugging capabilities. [GH-160](https://github.com/apache/cordova-electron/pull/160)
* Support for using the custom `scheme` and `hostname` `preference` flags is now available. It can be easily configured in your Cordova project by setting the preference options `scheme` and `hostname` in the `config.xml` file.

    ```xml
    <preference name="scheme" value="app" />
    <preference name="hostname" value="localhost" />
    ```

* Support passing of **Electron** arguments to the `cordova run` command. This is useful to pass the inspect flag to debug the main process.

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documentation](https://github.com/apache/cordova-electron/blob/rel/2.0.0/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## Project Dependencies

* `cordova-common@^4.0.2`
* `electron@10.1.2`
* `electron-builder@^22.8.1`
* `electron-devtools-installer@^3.1.1`
* `execa@^4.0.3`
* `fs-extra@^9.0.1`

## Breaking Changes

* [GH-162](https://github.com/apache/cordova-electron/pull/162) breaking: use platform config parser
* [GH-152](https://github.com/apache/cordova-electron/pull/152) breaking: bump `electron` & `electron-builder`
* [GH-151](https://github.com/apache/cordova-electron/pull/151) breaking: bump `cordova-common@4.0.1`
* [GH-145](https://github.com/apache/cordova-electron/pull/145) breaking(`npm`): update dependencies
* [GH-142](https://github.com/apache/cordova-electron/pull/142) breaking: restructure the platform lib code
* [GH-138](https://github.com/apache/cordova-electron/pull/138) breaking: remove platform-centered workflow
* [GH-69](https://github.com/apache/cordova-electron/pull/69) breaking: drop `node` 6 and 8 support

## Features

* [GH-160](https://github.com/apache/cordova-electron/pull/160) feat: install devtool extensions for debug builds
* [GH-154](https://github.com/apache/cordova-electron/pull/154) feature: support custom `scheme` & `hostname`
* [GH-148](https://github.com/apache/cordova-electron/pull/148) feat: support **Electron** arguments on run command
* [GH-112](https://github.com/apache/cordova-electron/pull/112) feat: move ci to gh-actions
* [GH-81](https://github.com/apache/cordova-electron/pull/81) feat: Support Loading Local HTML Files or Remote URL in the `BrowserWindow`

## Refactor

* [GH-156](https://github.com/apache/cordova-electron/pull/156) refactor: remove more platform-centered files & update code
* [GH-153](https://github.com/apache/cordova-electron/pull/153) refactor: cleanup unused code
* [GH-129](https://github.com/apache/cordova-electron/pull/129) refactor (`create`): simplify project creation
* [GH-124](https://github.com/apache/cordova-electron/pull/124) refactor: transform `for`
* [GH-123](https://github.com/apache/cordova-electron/pull/123) refactor: transform `template` strings
* [GH-122](https://github.com/apache/cordova-electron/pull/122) refactor: transform `object` shorthand
* [GH-121](https://github.com/apache/cordova-electron/pull/121) refactor: transform `arrow` functions & `arrow` returns
* [GH-120](https://github.com/apache/cordova-electron/pull/120) refactor: transform `var` to `let`/`const`
* [GH-116](https://github.com/apache/cordova-electron/pull/116) refactor: remove `shelljs` and update tests
* [GH-118](https://github.com/apache/cordova-electron/pull/118) refator: replace `shelljs`/`spawn` with `execa`
* [GH-113](https://github.com/apache/cordova-electron/pull/113) refactor: `eslint` setup

## Fix

* [GH-158](https://github.com/apache/cordova-electron/pull/158) fix(build): format `top-level` key for `nsis-web`
* [GH-136](https://github.com/apache/cordova-electron/pull/136) fix(npm-script): prepack

## Chore, CI, & Test

* [GH-168](https://github.com/apache/cordova-electron/pull/168) chore: bump dependencies & related usage
* [GH-165](https://github.com/apache/cordova-electron/pull/165) chore: bump dependencies to latest
* [GH-164](https://github.com/apache/cordova-electron/pull/164) chore: bump **Electron** related dependencies
* [GH-147](https://github.com/apache/cordova-electron/pull/147) chore: various cleanup
* [GH-144](https://github.com/apache/cordova-electron/pull/144) chore(npm): bump `@cordova/eslint-config@^3.0.0` w/ lint fix
* [GH-125](https://github.com/apache/cordova-electron/pull/125) chore: configure app rel dependencies as abs paths
* [GH-117](https://github.com/apache/cordova-electron/pull/117) chore: update **Electron** dependencies
* [GH-128](https://github.com/apache/cordova-electron/pull/128) chore: update `package.json`
* [GH-114](https://github.com/apache/cordova-electron/pull/114) chore: update `jasmine` dependency
* [GH-110](https://github.com/apache/cordova-electron/pull/110) chore: bump version to 2.0.0-dev
* [GH-96](https://github.com/apache/cordova-electron/pull/96) chore: fix typo
* [GH-67](https://github.com/apache/cordova-electron/pull/67) chore: update development dependencies
* [GH-68](https://github.com/apache/cordova-electron/pull/68) chore: bump **Electron** dependencies
* chore(asf): update git notification settings
* Update CONTRIBUTING.md
* [GH-157](https://github.com/apache/cordova-electron/pull/157) ci: add node 14 to workflow
* [GH-146](https://github.com/apache/cordova-electron/pull/146) ci: update workflow
* [GH-141](https://github.com/apache/cordova-electron/pull/141) test (node-12.16.x): fix failures caused by shebang and rewire lint
* [GH-131](https://github.com/apache/cordova-electron/pull/131) test: refactor with minor fixes & improvements
