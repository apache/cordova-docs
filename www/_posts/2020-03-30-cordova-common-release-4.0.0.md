---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Common 4.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-common@4.0.0` was released in March 2020. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

The most notable changes in this major release are:

* [GH-94](https://github.com/apache/cordova-common/pull/94) fix: `PluginInfoProvider` for scoped plugins
* [GH-90](https://github.com/apache/cordova-common/pull/90) chore: drop node 6 and 8 support

As Node.js 6.x and 8.x support has been dropped, we have raised the minimum required Node.js version for this release to 10.x.

<!--more-->
# Changes include:

* [GH-140](https://github.com/apache/cordova-common/pull/140) breaking: bump all dependencies to latest
  * bump `fs-extra@^9.0.0`
  * bump `@cordova/eslint-config@^3.0.0`
  * bump `jasmine-spec-reporter@^5.0.1`
  * bump Github Actions `actions/checkout@v2`
* [GH-139](https://github.com/apache/cordova-common/pull/139) chore: various cleanup tasks
* [GH-138](https://github.com/apache/cordova-common/pull/138) chore(dependency): update dev & non-dev dependencies
* [GH-137](https://github.com/apache/cordova-common/pull/137) refactor: transform `var` to `let`/`const`
* [GH-136](https://github.com/apache/cordova-common/pull/136) ci: final migration to actions
* [GH-85](https://github.com/apache/cordova-common/pull/85) style: improve line spacing & group like items
* [GH-124](https://github.com/apache/cordova-common/pull/124) fix(`ConfigFile`): correctly resolve *-Info.plist file path
* [GH-135](https://github.com/apache/cordova-common/pull/135) fix(`ConfigFile`): Normalize globbed file paths
* [GH-134](https://github.com/apache/cordova-common/pull/134) test(`ConfigFile`): minor improvements
* [GH-121](https://github.com/apache/cordova-common/pull/121) feat(`CordovaError`): support for error cause & more
* [GH-133](https://github.com/apache/cordova-common/pull/133) refactor(`ConfigParser`): cleanup & simplify
* [GH-132](https://github.com/apache/cordova-common/pull/132) refactor(`PluginInfo`): cleanup & simplify
* [GH-131](https://github.com/apache/cordova-common/pull/131) refactor(misc): cleanup & simplify
* [GH-130](https://github.com/apache/cordova-common/pull/130) refactor(`ConfigChanges`): simplify
* [GH-128](https://github.com/apache/cordova-common/pull/128) refactor(`xml-helpers`): DRY & simplify
* [GH-129](https://github.com/apache/cordova-common/pull/129) fix: broken lock file from [#95](https://github.com/apache/cordova-common/pull/95)
* [GH-127](https://github.com/apache/cordova-common/pull/127) refactor(`munge-util`): DRY & simplify
* [GH-95](https://github.com/apache/cordova-common/pull/95) TEST: Test using GitHub workflows for CI
* [GH-125](https://github.com/apache/cordova-common/pull/125) test(`ConfigFile`): group & cleanup tests
* [GH-126](https://github.com/apache/cordova-common/pull/126) chore!: remove main export `mungeUtil`
* [GH-123](https://github.com/apache/cordova-common/pull/123) refactor: `FileUpdater`
* [GH-119](https://github.com/apache/cordova-common/pull/119) refactor: use ES6 classes where applicable
* [GH-118](https://github.com/apache/cordova-common/pull/118) refactor: use template strings where applicable
* [GH-116](https://github.com/apache/cordova-common/pull/116) refactor: use property shorthand notation
* [GH-115](https://github.com/apache/cordova-common/pull/115) refactor: transform `var` to `let`/`const`
* [GH-114](https://github.com/apache/cordova-common/pull/114) refactor: do not alias `this`
* [GH-113](https://github.com/apache/cordova-common/pull/113) refactor: use arrow functions where applicable
* [GH-120](https://github.com/apache/cordova-common/pull/120) refactor: move `CordovaError` module up
* [GH-117](https://github.com/apache/cordova-common/pull/117) refactor(`CordovaError`)!: remove unused features
* [GH-111](https://github.com/apache/cordova-common/pull/111) chore: remove support for ubuntu platform
* [GH-109](https://github.com/apache/cordova-common/pull/109) chore: consolidate eslint configs
* [GH-108](https://github.com/apache/cordova-common/pull/108) style: drop jasmine env workaround
* [GH-105](https://github.com/apache/cordova-common/pull/105) refactor: eslint setup
* [GH-107](https://github.com/apache/cordova-common/pull/107) test: always run code coverage during `npm test`
* [GH-106](https://github.com/apache/cordova-common/pull/106) ci(travis): run codecov using npx in `after_success`
* [GH-103](https://github.com/apache/cordova-common/pull/103) chore: bump production dependencies
* [GH-101](https://github.com/apache/cordova-common/pull/101) chore: update jasmine dependencies & config
* [GH-100](https://github.com/apache/cordova-common/pull/100) chore: replace `instanbul` w/ `nyc`
* [GH-102](https://github.com/apache/cordova-common/pull/102) chore: drop unused & unneeded dependencies
* [GH-104](https://github.com/apache/cordova-common/pull/104) chore: improve npm ignore list
* [GH-96](https://github.com/apache/cordova-common/pull/96) feat: Replace `addProperty` with ES6 getters
* [GH-71](https://github.com/apache/cordova-common/pull/71) chore: update `strip-bom@4`
* [GH-90](https://github.com/apache/cordova-common/pull/90) chore: drop node 6 and 8 support
* [GH-97](https://github.com/apache/cordova-common/pull/97) Use `Array.prototype.find` in `CordovaError`
* [GH-93](https://github.com/apache/cordova-common/pull/93) Re-apply fix for failing `CordovaError` test
* [GH-92](https://github.com/apache/cordova-common/pull/92) Remove obsolete JSHint comments
* [GH-87](https://github.com/apache/cordova-common/pull/87) Convert `CordovaError` to ES6 class
