---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Fetch 5.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-fetch@5.0.0` has been released. This is the library used behind-the-scenes of the Cordova tooling for fetching of Cordova platforms and plugins.

## Release Highlights

The most notable changes in this major release were:

- Updated the library's npm dependencies.
- Increased in the Node.js engine requirement to `>=20.9.0`.

<!--more-->
# Changes include:

**Breaking Changes:**

* [GH-131](https://github.com/apache/cordova-fetch/pull/131) chore(npm)!: bump `cordova-common@6.0.0`
* [GH-125](https://github.com/apache/cordova-fetch/pull/125) chore!: bump node requirement & npm dependencies

**Chores:**

* [GH-136](https://github.com/apache/cordova-fetch/pull/136) chore(README): update badges
* [GH-135](https://github.com/apache/cordova-fetch/pull/135) chore: update & add source code license headers
* [GH-130](https://github.com/apache/cordova-fetch/pull/130) chore: bump `@cordova/eslint-config`
* [GH-127](https://github.com/apache/cordova-fetch/pull/127) chore(coverage): Move from `nyc` to `c8` for code coverage
* [GH-124](https://github.com/apache/cordova-fetch/pull/124) chore(deps-dev): bump `brace-expansion` from 1.1.11 to 1.1.12
* [GH-122](https://github.com/apache/cordova-fetch/pull/122) chore(deps): bump `cross-spawn` from 7.0.3 to 7.0.6
* [GH-120](https://github.com/apache/cordova-fetch/pull/120) chore(deps): bump `micromatch` from 4.0.5 to 4.0.8
* [GH-119](https://github.com/apache/cordova-fetch/pull/119) chore(deps): bump `braces` from 3.0.2 to 3.0.3
* [GH-116](https://github.com/apache/cordova-fetch/pull/116) chore(deps): Update some dependencies, add Node 20 to CI

**CI:**

* [GH-137](https://github.com/apache/cordova-fetch/pull/137) ci: workflow updates
* [GH-128](https://github.com/apache/cordova-fetch/pull/128) ci(workflow): update release-audit & license config
* [GH-123](https://github.com/apache/cordova-fetch/pull/123) ci: Add licence checker workflow
* [GH-121](https://github.com/apache/cordova-fetch/pull/121) ci: Fix dependabot code scanning errors
* [GH-118](https://github.com/apache/cordova-fetch/pull/118) ci: Set up CodeQL analysis
* [GH-117](https://github.com/apache/cordova-fetch/pull/117) ci: update codecov@v4 w/ token

**Tests:**

* [GH-126](https://github.com/apache/cordova-fetch/pull/126) test: drop `file-url`
