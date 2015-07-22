---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: March 02, 2015"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@4.3.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@4.3.0](https://www.npmjs.org/package/cordova)
* [plugman@0.23.0](https://www.npmjs.org/package/plugman)
* [cordova-js@3.8.0](https://www.npmjs.org/package/cordova-js)

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova

  * If you have `plugman` installed:

        npm install -g plugman

Release highlights:

* **Cordova-iOS** developers will need to update their `iOS-deploy` dependency to launch on **iOS** devices. Please run `npm install -g ios-deploy` to install the latest version `1.4.0`.
* You can now save your list of installed plugins and platforms using the `--save` command when adding platforms and plugins to your project.
Saved platforms and plugins are automagically restored during prepare.
Ex. `cordova platform add android --save`.
This should make it easier developing cordova projects among a team.
* Plugin authors can use the new command `plugman createpackagejson <plugin_path>` to add a `package.json` file to their plugins.
* We are preparing to transition our plugin hosting over to npm.  We will be doing a detailed blog post soon.
**Stay tuned**.

<!--more-->
# Changes include:

## Platform updates
When adding these platforms to your project, the following versions are now used by default.
These platform versions were released recently, and the tools' defaults were updated:

* [Cordova iOS 3.8.0](http://cordova.apache.org/announcements/2015/02/25/cordova-ios-3.8.0.html)
* [Cordova Windows 3.8.0](http://cordova.apache.org/announcements/2015/02/27/cordova-windows-3.8.0.html)
* [Cordova Android 3.7.1](http://cordova.apache.org/announcements/2015/02/06/cordova-android-3.7.1.html)

## cordova-lib
* Updated pinned versions of **iOS** to 3.8.0 and **Android** to 3.7.1
* [CB-8284](https://issues.apache.org/jira/browse/CB-8284) Revert `npm` dependency due to issues with registry
* [CB-8524](https://issues.apache.org/jira/browse/CB-8524) Switched to the latest **Windows** release
* changed `createpackage.json` keyword to `ecosystem:cordova`
* [CB-8448](https://issues.apache.org/jira/browse/CB-8448) Add support for activities
* [CB-8482](https://issues.apache.org/jira/browse/CB-8482) Rename: `platformId` -> `platformName`
* [CB-8482](https://issues.apache.org/jira/browse/CB-8482) Update engine syntax within config.xml
* `--save` flag for plugins
* Restore plugins and platforms on prepare
* [CB-8472](https://issues.apache.org/jira/browse/CB-8472) Can't find `config.xml` error installing browser platform after plugin
* [CB-8469](https://issues.apache.org/jira/browse/CB-8469) **Android**: Call into platform's `build.js` after `plugin add` so that **Android Studio** will work without needing an explicit command-line build first
* [CB-8123](https://issues.apache.org/jira/browse/CB-8123) Plugin references can target specific **Windows** platforms
* [CB-8420](https://issues.apache.org/jira/browse/CB-8420) Make `cordova plugin add FOO` use version from config.xml
* [CB-8239](https://issues.apache.org/jira/browse/CB-8239) Fix `cordova platform add PATH` when *PATH* is relative and *CWD* != *project root*
* [CB-8227](https://issues.apache.org/jira/browse/CB-8227) CB8237 [CB-8238](https://issues.apache.org/jira/browse/CB-8238) Add `--save` flag and autosave to `cordova platform add`, `cordova platform remove` and `cordova platform update`
* [CB-8409](https://issues.apache.org/jira/browse/CB-8409) `compile`: bubble failures
* [CB-8239](https://issues.apache.org/jira/browse/CB-8239) Fix `cordova platform update` should ignore `<cdv:engine>`
* [CB-8390](https://issues.apache.org/jira/browse/CB-8390) **Android**: Make `<framework custom=false>` work with **Gradle**
* [CB-8416](https://issues.apache.org/jira/browse/CB-8416) Updated `plugman publish` to temporarily rename existing `package.json` files
* [CB-8416](https://issues.apache.org/jira/browse/CB-8416) Added `plugman createpackagejson .` command to create a `package.json` from `plugin.xml`
* [CB-8377](https://issues.apache.org/jira/browse/CB-8377) Fixed `<runs>` tag parsing
* [CB-5696](https://issues.apache.org/jira/browse/CB-5696) Find **iOS** project directory using the xcode project file
* [CB-8373](https://issues.apache.org/jira/browse/CB-8373) **Android**: Add **Gradle** references to project.properties rather than build.gradle
* [CB-8370](https://issues.apache.org/jira/browse/CB-8370) Make `plugman publish` without args default to *CWD*
* [CB-8366](https://issues.apache.org/jira/browse/CB-8366) **Android**: Remove empty `<framework>` directory upon uninstall
* [CB-6973](https://issues.apache.org/jira/browse/CB-6973) Enable JSHint for spec-cordova
* [CB-8239](https://issues.apache.org/jira/browse/CB-8239) Add support for git urls to 'cordova platform add'
* [CB-8358](https://issues.apache.org/jira/browse/CB-8358) Add `--link` for `platform add` and `platform update`
* [CB-6973](https://issues.apache.org/jira/browse/CB-6973) Remove base rules from individual files in `src`
* [CB-8354](https://issues.apache.org/jira/browse/CB-8354) Add --link support for **iOS** source and header files
* Make all ad-hoc `plugin.xml` parsing use `PluginInfo` instead
* Make all usages of `PluginInfo` use `PluginInfoProvider` instead
* Add `PluginInfoProvider` for better caching of `PluginInfo`
* [CB-8223](https://issues.apache.org/jira/browse/CB-8223) Expose `config.xml` in the Browser platform
* [CB-8168](https://issues.apache.org/jira/browse/CB-8168) `--list` support for cordova-lib
* **FireOS** Improve error message when `<source-file>` is missing `target-dir`
* Make `addUninstalledPluginToPrepareQueue` take `pluginId` rather than `dirName`

## cordova-cli
* [CB-8439](https://issues.apache.org/jira/browse/CB-8439) Fix `cordova platform update` documentation to include `<plat-spec>`
* [CB-8379](https://issues.apache.org/jira/browse/CB-8379) Have `--version` print out **cordova-lib** version if it's not the same as CLI's version
* [CB-8211](https://issues.apache.org/jira/browse/CB-8211), [CB-8358](https://issues.apache.org/jira/browse/CB-8358) Update `--link` help text
* [CB-8168](https://issues.apache.org/jira/browse/CB-8168) `--list` support for CLI
* [CB-8227](https://issues.apache.org/jira/browse/CB-8227) [CB-8237](https://issues.apache.org/jira/browse/CB-8237) [CB-8238](https://issues.apache.org/jira/browse/CB-8238) Add `--save` option to `cordova platform add`, `cordova platform remove` and `cordova platform update`
* [CB-5316](https://issues.apache.org/jira/browse/CB-5316) Spell Cordova as a brand unless it's a command or script
* [CB-7950](https://issues.apache.org/jira/browse/CB-7950) CLI make `CordovaCliCreate.prototype.run` vaguely correct

## cordova-js
* [CB-8378](https://issues.apache.org/jira/browse/CB-8378) **Android**: Deleted `hidekeyboard` & `showkeyboard` events
* **Android**: Use correct plugin name for `navigator.app` `exec()` calls
* [CB-8158](https://issues.apache.org/jira/browse/CB-8158) Fixed `symbolList` require
* [CB-8298](https://issues.apache.org/jira/browse/CB-8298) **Android**: Execute `exec` callbacks within their own stack frames
* [CB-8210](https://issues.apache.org/jira/browse/CB-8210) Remove unused `onDestroy` channel
* Fixed `callbackFromNative` method

## plugman
* [CB-8416](https://issues.apache.org/jira/browse/CB-8416) Added `plugman createpackagejson .` command to generate a `package.json` file from `plugin.xml`
* [CB-8370](https://issues.apache.org/jira/browse/CB-8370) Update documentation for `plugman publish` without args

## Pinned Platform Versions for Cordova CLI 4.2.0

* Cordova Amazon-FireOS: 3.6.3
* Cordova Android: 3.7.1
* Cordova BlackBerry10: 3.7.0
* Cordova Browser: 3.6.0
* Cordova FirefoxOS: 3.6.3
* Cordova iOS: 3.8.0
* Cordova Ubuntu: 4.0.0
* Cordova Windows: 3.8.0
* Cordova WP8: 3.7.1
