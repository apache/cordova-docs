---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release"
categories: news
tags: release tools
---

New updates of `cordova`, `cordova-lib`, `plugman` and `cordova-common` are now live! We have also released the first version of `cordova-fetch`, a module used by `cordova-lib` to fetch plugins and platforms via `npm install`. 

* [cordova-lib@6.2.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@6.2.0](https://www.npmjs.org/package/cordova)
* [plugman@1.3.0](https://www.npmjs.org/package/plugman)
* [cordova-common@1.3.0](https://www.npmjs.org/package/cordova-lib)
* [cordova-fetch@1.0.0](https://www.npmjs.org/package/cordova-lib)

Release Highlights:

* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) added `--fetch` option
* [Telemetry](https://github.com/apache/cordova-cli/pull/247) Added telemetry to `cordova` to collect data for data driven development. Goal is use data to help guide the development of `cordova`. `cordova` will issue a prompt on first use providing an option for the user to disable it. Type `cordova telemetry -h` for more info. 
* [CB-11194](https://issues.apache.org/jira/browse/CB-11194) Improve cordova load time
* Added support for **node 6** via [CB-11200](https://issues.apache.org/jira/browse/CB-11200) Bump `node-xcode` dependency and update tests to past.

The new `cordova-fetch` feature is behind the `--fetch` flag. Use it when adding and removing plugins and platforms.

    cordova plugin add/rm PLUGINID --fetch
    cordova platform add/rm PLATFORM --fetch

This will fetch the plugin/platform and `npm install` it to your application. You should see a new `node_modules` directory. This is the first step towards us eventually supporting a `package.json` in your cordova applications. 

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova@latest

  * If you have `plugman` installed:

        npm install -g plugman@latest


Make sure to report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-11259](https://issues.apache.org/jira/browse/CB-11259) Improving prepare and build logging
* Resolve npm run jshint failure due to npm/npm#10343
* [CB-11200](https://issues.apache.org/jira/browse/CB-11200) Bump `node-xcode` dependency and update tests to pass
* [CB-11240](https://issues.apache.org/jira/browse/CB-11240) added `--fetch` support to `cordova prepare`
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) merging initial `--fetch` work for plugin and platform fetching
* [CB-11194](https://issues.apache.org/jira/browse/CB-11194) Improve cordova load time
* [CB-11174](https://issues.apache.org/jira/browse/CB-11174) Resolve `symlinked` path before getting `PlatformApi` instance
* [CB-11036](https://issues.apache.org/jira/browse/CB-11036) `args.slice is not a function` when building **Windows** with other platform
* [CB-10761](https://issues.apache.org/jira/browse/CB-10761) Resore plugins saved without spec attribute
* [CB-10981](https://issues.apache.org/jira/browse/CB-10981) Remove `cordova-common` from bundled dependencies
* [CB-11042](https://issues.apache.org/jira/browse/CB-11042) Add cordova run option to skip prepare
* [CB-11022](https://issues.apache.org/jira/browse/CB-11022) Respect result returned by plugin installation and skip prepare if it is truthy
* [CB-10975](https://issues.apache.org/jira/browse/CB-10975) Allow plugin path to be relative to current directory
* [CB-10986](https://issues.apache.org/jira/browse/CB-10986) Adding support for scoped npm package plugins
* [CB-10770](https://issues.apache.org/jira/browse/CB-10770) Remove `cache-min` when adding platforms
* [CB-10921](https://issues.apache.org/jira/browse/CB-10921) Emit warning in case of plugin restoration failure

## cordova-cli

* [Telemetry](https://github.com/apache/cordova-cli/pull/247) Added telemetry to cordova-cli to collect data for data driven development
* [CB-11250](https://issues.apache.org/jira/browse/CB-11250) Fix CLI tests verifying the version
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) added `--fetch` option
* [CB-10986](https://issues.apache.org/jira/browse/CB-10986) Adding note about scoped npm packages for plugins
* [CB-11042](https://issues.apache.org/jira/browse/CB-11042) Add cordova run option to skip prepare
* [CB-10062](https://issues.apache.org/jira/browse/CB-10062) Error: `EACCES: permission denied - update-notifier-cordova.json`
* [CB-10679](https://issues.apache.org/jira/browse/CB-10679) Documenting how the CLI chooses plugin versions

## plugman

* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) added `--fetch` option to plugman

## cordova-common

* [CB-11259](https://issues.apache.org/jira/browse/CB-11259): Improving prepare and build logging
* [CB-11194](https://issues.apache.org/jira/browse/CB-11194) Improve cordova load time
* [CB-1117](https://issues.apache.org/jira/browse/CB-1117) Add `FileUpdater` module to `cordova-common`.
* [CB-11131](https://issues.apache.org/jira/browse/CB-11131) Fix `TypeError: message.toUpperCase` is not a function in `CordovaLogger`

## cordova-fetch

* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) Added jasmine tests
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) Added `npm uninstall` method to cordova-fetch
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) Initial implementation of `cordova-fetch` module

## Pinned Platform Versions for **Cordova CLI 6.2.0**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~5.1.1
* Cordova BlackBerry10: ~3.8.0
* Cordova Browser: ~4.1.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~4.1.0
* Cordova OSX: ~4.0.1
* Cordova Ubuntu: ~4.3.3
* Cordova Windows: ~4.3.1
* Cordova WebOS: ~3.7.0
* Cordova WP8: ~3.8.2

## Plugin Versions tested with **Cordova CLI 6.2.0**

* cordova-plugin-battery-status: 1.1.2
* cordova-plugin-camera: 2.2.0
* cordova-plugin-console: 1.0.3
* cordova-plugin-contacts: 2.1.0
* cordova-plugin-compat: 1.0.0
* cordova-plugin-device: 1.1.2
* cordova-plugin-device-motion: 1.2.1
* cordova-plugin-device-orientation: 1.0.3
* cordova-plugin-dialogs: 1.2.1
* cordova-plugin-file: 4.2.0
* cordova-plugin-file-transfer: 1.5.1
* cordova-plugin-geolocation: 2.2.0
* cordova-plugin-globalization: 1.0.3
* cordova-plugin-inappbrowser: 1.4.0
* cordova-plugin-legacy-whitelist: 1.1.1
* cordova-plugin-media: 2.3.0
* cordova-plugin-media-capture: 1.3.0
* cordova-plugin-network-information: 1.2.1
* cordova-plugin-splashscreen: 3.2.2
* cordova-plugin-statusbar: 2.1.3
* cordova-plugin-test-framework: 1.1.2
* cordova-plugin-vibration: 2.1.1
* cordova-plugin-whitelist: 1.2.2
* cordova-plugin-wkwebview-engine: 1.0.3
