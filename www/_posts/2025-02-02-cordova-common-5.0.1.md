---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Common 5.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-common@5.0.1` has been released. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

The most notable changes in this patch release were updates to the dependencies used by this tool. Some dependencies were replaced with Node internals, reducing the overall dependency requirements.

<!--more-->
# Changes include:

**Chores:**

* [GH-222](https://github.com/apache/cordova-common/pull/222) chore: bump npm dependencies to current minor revisions
* [GH-217](https://github.com/apache/cordova-common/pull/217) chore(deps): bump cross-spawn from 7.0.3 to 7.0.6
* [GH-214](https://github.com/apache/cordova-common/pull/214) chore(deps): bump micromatch from 4.0.5 to 4.0.8
* [GH-211](https://github.com/apache/cordova-common/pull/211) chore: Minor test fixes
* [GH-210](https://github.com/apache/cordova-common/pull/210) chore: Don't list dev dependencies in NOTICE
* [GH-208](https://github.com/apache/cordova-common/pull/208) chore(deps): bump braces from 3.0.2 to 3.0.3
* [GH-203](https://github.com/apache/cordova-common/pull/203) chore(deps): Modernize some dependencies
* [GH-204](https://github.com/apache/cordova-common/pull/204) chore: fix typo in license checker's ignored-packages config

**CI:**

* [GH-218](https://github.com/apache/cordova-common/pull/218) ci: Fix dependabot PR failures
* [GH-207](https://github.com/apache/cordova-common/pull/207) ci: Add NodeJS 22 to CI matrix
* [GH-206](https://github.com/apache/cordova-common/pull/206) ci: Set up CodeQL analysis
* [GH-205](https://github.com/apache/cordova-common/pull/205) ci: update codecov@v4 w/ token
* [GH-202](https://github.com/apache/cordova-common/pull/202) ci: add release audit workflow
