---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Lib 10.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `cordova-lib 10.1.0`!

* [cordova-lib@10.1.0](https://www.npmjs.com/package/cordova-lib)

## Release Highlights

In this minor release, we have introduced various improvements and fixes. The most notable changes within this release are:

* Updated the platform pinning to the latest minor/patch releases:
  * `cordova-ios@^6.2.0`
  * `cordova-android@^9.1.0`
  * `cordova-electron@^1.1.1`
* Fixed the restore process to ensure that the correct pinned platform versions in `package.json` are reinstalled.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

**Features:**

* [GH-885](https://github.com/apache/cordova-lib/pull/885) feat: bump platform pinning
* [GH-860](https://github.com/apache/cordova-lib/pull/860) feat(`cordova/util`): support loading platform API from `node_modules`

**Fixes:**

* [GH-880](https://github.com/apache/cordova-lib/pull/880) fix(`restore-util`): properly support long and short platform names
* [GH-874](https://github.com/apache/cordova-lib/pull/874) fix: Platforms restored from both dev and normal dependencies.
* [GH-871](https://github.com/apache/cordova-lib/pull/871) fix: remove undeclared dependency on `underscore`
* [GH-856](https://github.com/apache/cordova-lib/pull/856) fix(`cordova/util`): version detection for legacy platforms

**Chores & Refactor Changes:**

* [GH-886](https://github.com/apache/cordova-lib/pull/886) chore: update dependencies w/ `package-lock` rebuild & test update
* [GH-881](https://github.com/apache/cordova-lib/pull/881) chore: `npmrc`
* [GH-879](https://github.com/apache/cordova-lib/pull/879) chore: `package-lock` update
* [GH-858](https://github.com/apache/cordova-lib/pull/858) chore: clean up `package.json`
* [GH-882](https://github.com/apache/cordova-lib/pull/882) refactor(`addHelper`): more concise `package.json` spec lookup

**CI, Test & Doc Changes:**

* [GH-862](https://github.com/apache/cordova-lib/pull/862) ci: add node-14.x to workflow
* [GH-870](https://github.com/apache/cordova-lib/pull/870) test(`plugin.spec`): fix version change in test fixture
* [GH-865](https://github.com/apache/cordova-lib/pull/865) test(`pkgJson`): make expectations work for npm 5 to 7
* [GH-864](https://github.com/apache/cordova-lib/pull/864) test(`pkgJson`): fix test after release of geolocation plugin v4.1.0
* [GH-855](https://github.com/apache/cordova-lib/pull/855) test: fix missing stack traces in jasmine output
* [GH-853](https://github.com/apache/cordova-lib/pull/853) test: unit test deprecated platforms
* [GH-877](https://github.com/apache/cordova-lib/pull/877) docs: correct linter command in `README`
