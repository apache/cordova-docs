---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Plugman 3.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `plugman 3.0.0`! Plugman is a command line tool which we provide to install and uninstall plugins in a [platform-centered workflow](https://cordova.apache.org/docs/en/latest/guide/overview/index.html#development-paths).

* [plugman@3.0.0](https://www.npmjs.com/package/plugman)

**To upgrade:**

```
npm uninstall -g plugman
npm install -g plugman@3.0.0
```

## Release Highlights

In addition to various improvements and fixes, this release has removed the `browserify` and `fetch` options.

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-108](https://github.com/apache/cordova-plugman/pull/108) Cordova Plugman Release Preparation (Cordova 9)
  * Bumped Dependencies
    * `cordova-lib@^9.0.0`
    * `nopt@^4.0.1`
  * Bumped Dev Dependencies
    * `jasmine@^3.3.1`
    * `eslint-plugin-standard@^4.0.0`
    * `eslint-plugin-promise@^4.0.1`
    * `eslint-plugin-node@^8.0.1`
    * `eslint-plugin-import@^2.16.0`
    * `eslint-config-standard@^12.0.0`
    * `eslint-config-semistandard@^13.0.0`
    * `eslint@^5.15.3`
  * Update to support nopt@^4.0.1
* [GH-96](https://github.com/apache/cordova-plugman/pull/96) Remove `fetch` option
* [GH-95](https://github.com/apache/cordova-plugman/pull/95) Remove `browserify` option
* [GH-94](https://github.com/apache/cordova-plugman/pull/94) [CB-14164](https://issues.apache.org/jira/browse/CB-14164) Use native Promises instead of `Q`
* [GH-93](https://github.com/apache/cordova-plugman/pull/93) Code Refactor and Cleanup
* [GH-91](https://github.com/apache/cordova-plugman/pull/91) Drop support for Node.js < 6
