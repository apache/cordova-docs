---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova CLI 9.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `cordova 9.0.0`!

* [cordova@9.0.0](https://www.npmjs.com/package/cordova)

**To upgrade:**

```
npm uninstall -g cordova
npm install -g cordova@9.0.0
```

## Release Highlights

In addition to various improvements and fixes, this release has updated its core library. 

All of the latest platform releases are available by default.

* `cordova-android@^8.0.0`
* `cordova-browser@^6.0.0`
* `cordova-electron@^1.0.0`
* `cordova-ios@^5.0.0`
* `cordova-osx@^5.0.0`
* `cordova-windows@^7.0.0`

Additionally, Cordova Electron, one of the newest supported platfroms, is available!

This release has also deprecated the `browserify`,  `fetch`, and `copy-from` options.

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-414](https://github.com/apache/cordova-cli/pull/414) Cordova CLI Release Preparation (Cordova 9)
  * **Bumped Dependencies**
    * `cordova-lib@^9.0.0`
    * `cordova-common@^3.1.0`
    * `editor@^1.0.0` (Prepended `^` only)
    * `loud-rejection@^2.0.0`
  * **Bumped Dev Dependencies**
    * `jasmine@^3.3.1`
    * `eslint-plugin-promise@^4.0.1`
    * `eslint-plugin-node@^8.0.1`
    * `eslint-plugin-import@^2.16.0`
    * `eslint-config-standard@^12.0.0`
    * `eslint-config-semistandard@^13.0.0`
    * `eslint@^5.15.2`
  * Fix `logger[level]` spy in Jasmine
* [GH-397](https://github.com/apache/cordova-cli/pull/397) Update Node.js Deprecation Notice Message
* [GH-395](https://github.com/apache/cordova-cli/pull/395) Fix typo: "esecially" to especially
* [GH-364](https://github.com/apache/cordova-cli/pull/364) Fix spec label for build tests
* [GH-344](https://github.com/apache/cordova-cli/pull/344) Check that `bin/cordova` works on Travis CI
* [CB-13740](https://issues.apache.org/jira/browse/CB-13740) gracefully handle platforms that don't pass back requirements to check
* [GH-327](https://github.com/apache/cordova-cli/pull/327) Stub telemetry calls during all tests
* [GH-322](https://github.com/apache/cordova-cli/pull/322) Remove support for `fetch` option
* [GH-321](https://github.com/apache/cordova-cli/pull/321) Remove support for `browserify`
* [GH-317](https://github.com/apache/cordova-cli/pull/317) cli.spec: Telemetry-Related Improvements
* [GH-316](https://github.com/apache/cordova-cli/pull/316) Remove `callback` parameter of main CLI function
* [GH-298](https://github.com/apache/cordova-cli/pull/298) Remove support for deprecated `--copy-from`
* [GH-298](https://github.com/apache/cordova-cli/pull/298) Cleanup code calling `cordova-create`
