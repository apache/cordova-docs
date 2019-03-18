---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Lib 9.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `cordova-lib 9.0.0`!

* [cordova-lib@9.0.0](https://www.npmjs.com/package/cordova-lib)

## Release Highlights

In addition to various improvements and fixes, this release has removed the `--browserify` flag.

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-750](https://github.com/apache/cordova-lib/pull/750) Remove saving platforms/plugins to `config.xml`
* [GH-751](https://github.com/apache/cordova-lib/pull/751) Pass project `config.xml` path to platform's prepare
* [GH-749](https://github.com/apache/cordova-lib/pull/749) Cordova Lib Release Preparation (Cordova 9)
  * Remove unused property `apiCompatibleSince` from `platformsConfig.json`
  * Fix plugin dependency tests when using `npm >= 5`
  * Bumped Platform Pinning and Support Minor SemVer
    * `cordova-android@^8.0.0`
    * `cordova-browser@^6.0.0`
    * `cordova-electron@^1.0.0`
    * `cordova-ios@^5.0.0`
    * `cordova-osx@^5.0.0`
    * `cordova-windows@^7.0.0`
  * Bumped dependencies
    * `jasmine@^3.3.1`
    * `globby@^9.1.0`
    * `underscore@^1.9.1`
    * `semver@^5.6.0`
    * `read-chunk@^3.1.0`
    * `init-package-json@^1.10.3`
    * `fs-extra@^7.0.1`
  * Dev Dependencies
    * Updated `nyc` Code Coverage
    * Updated ESlint with lint corrections
    * Added missing module `shelljs` to fix test failures
  * Updated Package Cordova Dependencies
    * `cordova-common@^3.1.0`
    * `cordova-create@^2.0.0`
    * `cordova-fetch@^2.0.0`
    * `cordova-serve@^3.0.0`
* [GH-748](https://github.com/apache/cordova-lib/pull/748) Remove handling of legacy `.fetch.json` files
* [GH-709](https://github.com/apache/cordova-lib/pull/709) `hooks/Context` Improvements
* [GH-622](https://github.com/apache/cordova-lib/pull/622) [CB-14166](https://issues.apache.org/jira/browse/CB-14166) (cli) Fixed issue when install plugins on **Windows**
* [GH-744](https://github.com/apache/cordova-lib/pull/744) Add **Electron** Platform
* [GH-741](https://github.com/apache/cordova-lib/pull/741) Fix crash in `cordova requirements` due to an unbound function
* [GH-710](https://github.com/apache/cordova-lib/pull/710) Drop `Q` Dependency and Use Native Promises
* [GH-687](https://github.com/apache/cordova-lib/pull/687) Test, Fix and Cleanup `cordova serve`
* [GH-707](https://github.com/apache/cordova-lib/pull/707) Deprecate `requireCordovaModule` for non-Cordova modules
* [GH-705](https://github.com/apache/cordova-lib/pull/705) Dereference possible symlinks when copying plugin
* [GH-686](https://github.com/apache/cordova-lib/pull/686) Remove support for old option format
* [GH-685](https://github.com/apache/cordova-lib/pull/685) Remove unused dependency `properties-parser`
* [GH-684](https://github.com/apache/cordova-lib/pull/684) Code Cleanup and Refactor (Bits and pieces)
* [GH-683](https://github.com/apache/cordova-lib/pull/683) Remove unused npm utility functions
* [GH-682](https://github.com/apache/cordova-lib/pull/682) GH-676 Remove Browserify
* [GH-652](https://github.com/apache/cordova-lib/pull/652) Make `plugin.remove` more easily understandable
* [GH-650](https://github.com/apache/cordova-lib/pull/650) Make `cordova/platform/check` more approachable
* [GH-613](https://github.com/apache/cordova-lib/pull/613) Switch to using `fs-extra` in favour of `shelljs`
* [GH-671](https://github.com/apache/cordova-lib/pull/671) Remove `cordova plugin search` command
* [GH-666](https://github.com/apache/cordova-lib/pull/666) Remove deprecated and unused content
* [GH-651](https://github.com/apache/cordova-lib/pull/651) Remove all usage of Q-specific methods on Promise instances
* [GH-662](https://github.com/apache/cordova-lib/pull/662) Remove unused content
* [GH-663](https://github.com/apache/cordova-lib/pull/663) Update `read-chunk` to properly close file descriptors on failure
* [GH-658](https://github.com/apache/cordova-lib/pull/658) Remove deprecated platform support files
* [GH-616](https://github.com/apache/cordova-lib/pull/616) Extend and improve `cordova info` output
