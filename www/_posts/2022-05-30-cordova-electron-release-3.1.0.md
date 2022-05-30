---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 3.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 3.1.0`! This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@3.1.0](https://www.npmjs.com/package/cordova-electron)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove electron
cordova platform add electron@3.1.0
```

**To install:**

```bash
cordova platform add electron@3.1.0
```

Some of the notable changes & new features in this release are:

**Electron Update:**

The **Electron** core dependencies have been updated to `14.2.9`.

**Defining & Pinning Electron Version**

The ability to define and pin specific Electron versions has been added. This feature leveraged the usage of npm's `overrides` property, which was introduced in npm 8.

Example:

In the Cordova app's `package.json` file, add the following:

```json
"overrides": {
  "cordova-electron": {
    "electron": "14.2.9",
  }
}
```

If you already have the platform added to the project, you will need to remove the platform or delete the `platforms` directory before running `cordova prepare electron` to recheckout the pinned version. If you also have in your project director the `package-lock.json` file, this will also need to be removed.

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documentation](https://github.com/apache/cordova-electron/blob/rel/2.0.0/DOCUMENTATION.md)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

#### Features

* [GH-230](https://github.com/apache/cordova-electron/pull/230) feat: support custom **Electron** version
* [GH-228](https://github.com/apache/cordova-electron/pull/228) feat: bump `electron@^14.2.9`

#### Fixes

* [GH-229](https://github.com/apache/cordova-electron/pull/229) fix: `npm` 8 does not install plugin dependencies

#### Chores

* [GH-231](https://github.com/apache/cordova-electron/pull/231) chore(npm): bump all dependencies to latest minor/path

#### Other Changes

* [GH-226](https://github.com/apache/cordova-electron/pull/226) dep(npm): bump `@cordova/eslint-config@^4.0.0` w/ fix
* [GH-221](https://github.com/apache/cordova-electron/pull/221) dep(npm): bump `minimist` from 1.2.5 to 1.2.6
* [GH-207](https://github.com/apache/cordova-electron/pull/207) doc: `mas-dev` is macOS package
