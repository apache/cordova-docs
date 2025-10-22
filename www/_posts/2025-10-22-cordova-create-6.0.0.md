---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Create 6.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-create@6.0.0` has been released. This is the library used behind-the-scenes of the Cordova tooling for creating a Cordova project.

## Release Highlights

The most notable changes in this major release were:

- Updated the library's npm dependencies.
- Increased in the Node.js engine requirement to `>=20.17.0 || >=22.9.0`.

<!--more-->
# Changes include:

**Breaking Changes:**

* [GH-99](https://github.com/apache/cordova-create/pull/99) chore!: upgrade `@cordova/eslint-config@6.0.0`
* [GH-98](https://github.com/apache/cordova-create/pull/98) chore!: bump package dependencies
  * `cordova-app-hello-world@7.0.0`
  * `cordova-common@6.0.0`
  * `cordova-fetch5.0.0`
  * `tmp@0.2.5`
  * `rewire@9.0.1`
  * `jasmine@5.10.0`
  * `npm-package-arg@13.0.0`
  * Bumped node engine requirement `>=20.17.0 || >=22.9.0`
* [GH-94](https://github.com/apache/cordova-create/pull/94) chore!: bump node requirement & npm dependencies

**Chores & CI:**

* [GH-103](https://github.com/apache/cordova-create/pull/103) chore: add `.npmrc` & update ignore files
* [GH-102](https://github.com/apache/cordova-create/pull/102) chore: replace `nyc` with `c8`
* [GH-101](https://github.com/apache/cordova-create/pull/101) chore: update project defaults
* [GH-100](https://github.com/apache/cordova-create/pull/100) chore: ci and license updates
* [GH-97](https://github.com/apache/cordova-create/pull/97) chore(deps): bump `tmp` from 0.2.3 to 0.2.4
* [GH-96](https://github.com/apache/cordova-create/pull/96) ci: use `macos-15` instead of `macos-latest`
* [GH-93](https://github.com/apache/cordova-create/pull/93) ci(workflow): add release-audit & license config
* [GH-92](https://github.com/apache/cordova-create/pull/92) chore(deps-dev): bump `brace-expansion` from 1.1.11 to 1.1.12
* [GH-91](https://github.com/apache/cordova-create/pull/91) chore(deps): bump `cross-spawn` from 7.0.3 to 7.0.6
* [GH-90](https://github.com/apache/cordova-create/pull/90) chore(deps): bump `micromatch` from 4.0.5 to 4.0.8
* [GH-88](https://github.com/apache/cordova-create/pull/88) chore(deps): bump `braces` from 3.0.2 to 3.0.3
* [GH-86](https://github.com/apache/cordova-create/pull/86) chore(deps): Update npm deps, add Node 20 to CI
* [GH-87](https://github.com/apache/cordova-create/pull/87) ci: update `codecov@v4` w/ token
