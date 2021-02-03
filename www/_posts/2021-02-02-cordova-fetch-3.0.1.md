---
layout: post
author:
    name: Darryl Pogue
    url: https://twitter.com/dpogue
title:  "Cordova Fetch 3.0.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-fetch@3.0.1` was released in February 2021. This module is responsible for installing platforms and plugins from the npm package registry, and this release adds compatibility for npm version 7.

* [cordova-fetch@3.0.1 on npm](https://www.npmjs.com/package/cordova-fetch)


**To upgrade:**

Because `cordova-fetch` is a dependency of the `cordova` command-line tool, you'll need to reinstall the `cordova` package to update:

```bash
npm uninstall cordova
npm install cordova
```

## Release Highlights

The most notable fix in this patch release is a fix for plugin and platform installation with the newest version of npm. More details can be found in the [pull request](https://github.com/apache/cordova-fetch/pull/91) and [original bug ticket](https://github.com/apache/cordova-lib/issues/859). Thanks Raphael for implementing this fix.


Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
## Full Changelog

* [GH-91](https://github.com/apache/cordova-fetch/pull/91) fix: cordova-fetch with npm@7
* [GH-89](https://github.com/apache/cordova-fetch/pull/89) refactor: use async/await where applicable
* [GH-88](https://github.com/apache/cordova-fetch/pull/88) fix: do not pack rejections from resolve in array
* [GH-90](https://github.com/apache/cordova-fetch/pull/90) fix: use POSIX-style paths for require.resolve & Co
* [GH-86](https://github.com/apache/cordova-fetch/pull/86) ci: add node 14 to workflow
