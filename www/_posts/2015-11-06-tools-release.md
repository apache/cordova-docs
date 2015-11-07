---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: November 6th, 2015"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@5.4.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@5.4.0](https://www.npmjs.org/package/cordova)
* [plugman@1.0.5](https://www.npmjs.org/package/plugman)
* [cordova-js@4.1.2](https://www.npmjs.org/package/cordova-js)

Release highlights:

* Fixed issues with using **Node 4 & 5** and **npm 3**. 
* Cordova will now auto convert old-style plugin IDs to new style plugin IDs when doing a `cordova plugin add`. This only happens if the old-style plugin ID exists in the [registry-mapper](https://github.com/stevengill/cordova-registry-mapper), it will be auto converted to the new ID and fetched from [npm](https://www.npmjs.com) instead. 
* Cordova `CLI` will now know if a newer version is available and will prompt users to update.
* Some core utility methods from `cordova-lib` have been moved into a new module named [`cordova-common`](https://github.com/apache/cordova-lib/tree/master/cordova-commo://github.com/apache/cordova-lib/tree/master/cordova-common). `cordova-common` is shared among `cordova-lib` and cordova platforms.

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova@latest

  * If you have `plugman` installed:

        npm install -g plugman@latest

<!--more-->
# Changes include:

## Platform updates
When adding these platforms to your project, the following versions are now used by default.
These platform versions were released recently, and the tools' defaults were updated:

* [Cordova iOS ~3.9.0 (3.9.2)](http://cordova.apache.org/announcements/2015/11/02/cordova-ios-3-9-2.html)

## cordova-lib

* Updated `cordova-app-hello-world` to `3.10.0`
* [CB-9935](https://issues.apache.org/jira/browse/CB-9935) Fix Cordova `CLI` silently failing with **node.js v5**
* [CB-9834](https://issues.apache.org/jira/browse/CB-9834) Introduce compat map for hook requires
* [CB-9902](https://issues.apache.org/jira/browse/CB-9902) Fix broken `cordova run --list`
* [CB-9800](https://issues.apache.org/jira/browse/CB-9800) Fixing contribute link.
* [CB-9736](https://issues.apache.org/jira/browse/CB-9736) Extra main activity generated when an android package name is specified
* [CB-9675](https://issues.apache.org/jira/browse/CB-9675) **OSX** App Icons are not properly copied.
* [CB-9758](https://issues.apache.org/jira/browse/CB-9758) Mobilespec crashes adding plugins on **OS X**
* [CB-9782](https://issues.apache.org/jira/browse/CB-9782) Update `create/update` signatures for PlatformApi polyfill
* [CB-9815](https://issues.apache.org/jira/browse/CB-9815) Engine `name="cordova"` should check tools version, not platforms. 
* [CB-9824](https://issues.apache.org/jira/browse/CB-9824) removed plugin download counter code from lib
* [CB-9821](https://issues.apache.org/jira/browse/CB-9821) Fix `EventEmitter` incorrect trace level usages
* [CB-9813](https://issues.apache.org/jira/browse/CB-9813) Keep module-to-plugin mapping at hand.
* [CB-9598](https://issues.apache.org/jira/browse/CB-9598) Fixes broken `require` for **FFOS** plugin handler
* Update `serve` to use `express` implementation of `cordova-serve`.
* [CB-9712](https://issues.apache.org/jira/browse/CB-9712) Fix `CLI 5.3` breaking with **node 3.3.3**
* [CB-9598](https://issues.apache.org/jira/browse/CB-9598) Fixes broken require calls that aren't covered by tests
* [CB-9589](https://issues.apache.org/jira/browse/CB-9589) auto convert old plugin ids to new npm ids using [registry-mapper](https://github.com/stevengill/cordova-registry-mapper)
* Pick `ConfigParser` changes from apache@0c3614e
* [CB-9743](https://issues.apache.org/jira/browse/CB-9743) Removes system frameworks handling from `ConfigChanges`
* [CB-9598](https://issues.apache.org/jira/browse/CB-9598) Cleans out code which has been moved to `cordova-common`
* [CB-9598](https://issues.apache.org/jira/browse/CB-9598) Switches LIB to use `cordova-common`
* [CB-9569](https://issues.apache.org/jira/browse/CB-9569) Support `<access>` and `<allow-navigation>` tag translation to Application Transport Security (ATS) `Info.plist` directives.
* [CB-8914](https://issues.apache.org/jira/browse/CB-8914) when project is renamed, remove userdata otherwise project is un-usable in **Xcode**
* [CB-9665](https://issues.apache.org/jira/browse/CB-9665) Support `.xcassets` for icons and splashscreens in the `CLI`
* [CB-9407](https://issues.apache.org/jira/browse/CB-9407) Fixes incorrect applying of `plugin-provided` config changes.
* [CB-8198](https://issues.apache.org/jira/browse/CB-8198) Unified console output logic for core platforms
* [CB-9408](https://issues.apache.org/jira/browse/CB-9408) Added support for `windows-packageVersion` on `<widget>`
* [CB-9588](https://issues.apache.org/jira/browse/CB-9588) Add support for `<resource-file>` on **Windows**
* [CB-8615](https://issues.apache.org/jira/browse/CB-8615) Improves plugman tests for **Windows**
* [CB-8615](https://issues.apache.org/jira/browse/CB-8615) **Windows** `.winmd` files with the same names are not added properly when using framework tag with target attribute
* [CB-9297](https://issues.apache.org/jira/browse/CB-9297) Parse **Xcode** project synchronously to avoid issues with **node v4**
* [CB-9617](https://issues.apache.org/jira/browse/CB-9617) Do not restore plugins after plugin removal.
* [CB-9631](https://issues.apache.org/jira/browse/CB-9631) Save plugin to `config.xml` only if installation succeeds
* [CB-9601](https://issues.apache.org/jira/browse/CB-9601) Fix `<framework>.versions` support on **Windows** after `semver` update
* [CB-9617](https://issues.apache.org/jira/browse/CB-9617) Fixes incorrect project state after adding/removing plugins
* [CB-9560](https://issues.apache.org/jira/browse/CB-9560) Issue using plugin restore for plugins with common dependencies 
* [CB-8993](https://issues.apache.org/jira/browse/CB-8993) Plugin restore ignores search path
* [CB-9587](https://issues.apache.org/jira/browse/CB-9587) Check if `browser` platform added properly before creating parser. 
* [CB-9604](https://issues.apache.org/jira/browse/CB-9604) Fix error adding `browser` platform with PlatformApi polyfill.
* [CB-9597](https://issues.apache.org/jira/browse/CB-9597) Initial Implementation of PlatformApiPoly
* [CB-9354](https://issues.apache.org/jira/browse/CB-9354) Fix array merging with complex items
* [CB-9556](https://issues.apache.org/jira/browse/CB-9556) Don't uninstall dependent plugin if it was installed as a top-level after

## cordova-cli

* [CB-9903](https://issues.apache.org/jira/browse/CB-9903) update `cordova-lib` dependency to `5.4.0`
* [CB-9800](https://issues.apache.org/jira/browse/CB-9800) Fixing contribute link.
* [CB-9792](https://issues.apache.org/jira/browse/CB-9792) Make `CLI` logging system interrupt process on an error` event
* [CB-9788](https://issues.apache.org/jira/browse/CB-9788) Add support of stderr/stdout split to `CLI logger`
* [CB-9784](https://issues.apache.org/jira/browse/CB-9784) Remove `CLI logger` levels prefixes
* [CB-8198](https://issues.apache.org/jira/browse/CB-8198) Unified console output logic for core platforms
* [CB-9523](https://issues.apache.org/jira/browse/CB-9523) Show out of date message for older cordova `CLI`
* [CB-9597](https://issues.apache.org/jira/browse/CB-9597) Updates `cli` to pass structured args to platform methods

## cordova-js

* [CB-9800](https://issues.apache.org/jira/browse/CB-9800) Fixing contribute link.
* [CB-9370](https://issues.apache.org/jira/browse/CB-9370) Changes `jsdom` dependency to avoid package installation issues

## plugman

* [CB-9800](https://issues.apache.org/jira/browse/CB-9800) Fixing contribute link.
* [CB-9903](https://issues.apache.org/jira/browse/CB-9903) Updated `cordova-lib` dependency to `5.4.0`

## Pinned Platform Versions for **Cordova CLI 5.4.0**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~4.1.0 (4.1.1)
* Cordova BlackBerry10: ~3.8.0
* Cordova Browser: ~4.0.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~3.9.0 (3.9.2)
* Cordova OSX: ~4.0.0
* Cordova Ubuntu: ~4.0.0
* Cordova Windows: ~4.1.0
* Cordova WebOS: ~3.7.0
* Cordova WP8: ~3.8.1
