---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Common 6.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-common@6.0.0` has been released. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

The most notable changes in this major release were:

- Removal of `superspawn`, which also dropped the npm dependencies `q` and `cross-spawn`.
- Update to the `<resource-file>` directive to allow directories and their contents to be copied.
- Update to the `<config-file>` and `<edit-config>` directives to support finding unprefixed `Info.plist` files.
- Increase in the Node.js engine requirement to `>=20.9.0`.

<!--more-->
# Changes include:

**Breaking Changes:**

*  [GH-239](https://github.com/apache/cordova-common/pull/239) feat!: change `resource-file` behavior to support directory contents
*  [GH-236](https://github.com/apache/cordova-common/pull/236) feat!: remove `superspawn.js`
*  [GH-231](https://github.com/apache/cordova-common/pull/231) feat!: remove `superspawn` & npm packages `q` & `cross-spawn`
*  [GH-235](https://github.com/apache/cordova-common/pull/235) dep(npm)!: bump `@cordova/eslint-config@6.0.0`
  * Bumps `node >=20.9.0`
*  [GH-228](https://github.com/apache/cordova-common/pull/228) chore!: bump `node >=20.5.0` & upgrade npm packages

**Features:**

*  [GH-212](https://github.com/apache/cordova-common/pull/212) feat: Support finding an unprefixed `Info.plist` file

**Chores:**

*  [GH-240](https://github.com/apache/cordova-common/pull/240) chore: update `package-lock.json`
*  [GH-232](https://github.com/apache/cordova-common/pull/232) chore(tests): Improve test coverage
*  [GH-229](https://github.com/apache/cordova-common/pull/229) chore(coverage): Move from `nyc` to `c8` for code coverage
*  [GH-238](https://github.com/apache/cordova-common/pull/238) dep(npm): update w/ rebuilt `package-lock.json`
*  [GH-237](https://github.com/apache/cordova-common/pull/237) refactor(bom): Bring `strip-bom` in as util

**CI & Refactoring:**

*  [GH-234](https://github.com/apache/cordova-common/pull/234) ci: use macos-15
*  [GH-233](https://github.com/apache/cordova-common/pull/233) ci(workflow): update release-audit & license config
*  [GH-230](https://github.com/apache/cordova-common/pull/230) ci: add permissions block & commit hash pinning of third-party actions
