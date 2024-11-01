---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Lib 12.0.2 Released!"
categories: announcements
tags: news releases
---

We are excited to announce the release of `cordova-lib`.

* [cordova-lib@12.0.2](https://www.npmjs.com/package/cordova-lib)

**To upgrade:**

If Cordova CLI is installed globally:

```bash
npm uninstall -g cordova
npm install -g cordova@latest
```

If Cordova CLI is installed locally within your project:

```bash
npm uninstall cordova
npm install cordova@latest
```

## Release Highlights

In this patch release, we have introduced several fixes. The most notable changes are:

* Ability to install plugins on a prerelease version of a platform.
* Consistent plugin installation order across all platforms.
* Ability to uninstall plugins by specifying only the required platform variables.

Please report any issues you find by following the [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
# Changes include:

**Fixes:**

* [GH-935](https://github.com/apache/cordova-lib/pull/935) fix: platform & plugin prerelease package support
* [GH-933](https://github.com/apache/cordova-lib/pull/933) fix(ios): Prevent mix build phases
* [GH-913](https://github.com/apache/cordova-lib/pull/913) fix: uninstalling plugin with platform separated required variables

**Chores:**

* [GH-934](https://github.com/apache/cordova-lib/pull/934) chore(deps): bump cookie and express
* [GH-928](https://github.com/apache/cordova-lib/pull/928) chore(deps): bump micromatch from 4.0.5 to 4.0.8
* [GH-925](https://github.com/apache/cordova-lib/pull/925) chore(deps): bump braces from 3.0.2 to 3.0.3
* [GH-924](https://github.com/apache/cordova-lib/pull/924) chore(deps): Update some dependencies, add Node 20 to CI

**CI:**

* [GH-926](https://github.com/apache/cordova-lib/pull/926) ci(release-audit): add license header and dependency checker
* [GH-923](https://github.com/apache/cordova-lib/pull/923) ci: update codecov@v4 w/ token
