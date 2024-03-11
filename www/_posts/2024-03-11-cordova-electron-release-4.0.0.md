---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Electron 4.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Electron 4.0.0`! This is one of Cordova's supported platforms for building Electron applications.

* [cordova-electron@4.0.0](https://www.npmjs.com/package/cordova-electron)

**To upgrade:**

```bash
cordova platform remove electron
cordova platform add electron@4.0.0
```

**To install:**

```bash
cordova platform add electron@4.0.0
```

## Release Highlights

Some of the notable breaking changes in this release are:

**Node.js Requirement:**

This release requires the environment to have **Node.js** `18.0.0` or higher. It is recommended to use the current LTS, which is `20.11.1` at the time of this release.

**Electron Update:**

The **Electron** core dependencies have been updated to `29.0.0`. This version of Electron comes with the following app stack:

* Chromium 122.0.6261.39
* Node v20.9.0
* V8 12.2

More information about Electron 29.0.0 can be read on their [blog post here](https://www.electronjs.org/blog/electron-29-0).

**Removed Plugin Argument's Accidental Multidimensional Array Wrapping:**

In Cordova-Electron 3.0.0, plugin support was introduced, but an unintentional multidimensional array wrapping of the plugin arguments occurred. This wrapping may not have been noticeable to app developers, but it affected plugin developers.

Typically, a plugin includes a set of APIs that may accept arguments, and these arguments are forwarded to the native side of the plugin. Due to improper argument spreading, plugin developers had to consistently access index 0 at the first level to retrieve the actual arguments, as in `args[0][0]`. There was never an `args[n+1]` scenario.

This release corrected this issue. Plugin developers will need to update their plugins if the plugins are designed to read passed-in arguments.

For a quick start guide and in-depth configuration setup, please check out our [Cordova Electron Documentation](https://cordova.apache.org/docs/en/12.x/guide/platforms/electron/index.html)!

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

#### Breaking

* [GH-263](https://github.com/apache/cordova-electron/pull/263) feat!: bump `electron@^29.0.0` w/ supporting changes
* [GH-266](https://github.com/apache/cordova-electron/pull/266) fix!: remove extra array wrapper from passed arguments
* [GH-264](https://github.com/apache/cordova-electron/pull/264) npm(dep)!: bump `electron-builder@^24.12.0`, bump node engine requirement & CI
  * Updates Node Engine Requirement `>= 18.0.0`
* [GH-271](https://github.com/apache/cordova-electron/pull/271) dep!: bump `fs-extra@^11.2.0`
* [GH-265](https://github.com/apache/cordova-electron/pull/265) npm(dep)!: bump other dependencies

#### Others

* [GH-232](https://github.com/apache/cordova-electron/pull/232) dep(npm): bump dev dependencies
* [GH-270](https://github.com/apache/cordova-electron/pull/270) chore: rebuilt `package-lock.json`

#### CI:**

* [GH-268](https://github.com/apache/cordova-electron/pull/268) ci: downgrade codecov action dependency to v3
* [GH-267](https://github.com/apache/cordova-electron/pull/267) ci: add node 20.x & use latest action dependencies
* [GH-236](https://github.com/apache/cordova-electron/pull/236) ci: update github action workflow
