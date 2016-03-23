---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova 6.1.0 Released!"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@6.1.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@6.1.0](https://www.npmjs.org/package/cordova)
* [plugman@1.2.0](https://www.npmjs.org/package/plugman)
* [cordova-js@4.1.4](https://www.npmjs.org/package/cordova-js)
* [cordova-common@1.1.1](https://www.npmjs.com/package/cordova-common)

Release Highlights include:
* [CB-10679](https://issues.apache.org/jira/browse/CB-10679) implemented new plugin fetching logic. We now allow community plugins to define cordova engine restrictions. Read about it in our [new plugin fetching blog post](http://cordova.apache.org/announcements/2016/03/22/new-plugin-fetching.html).
* [CB-10880](https://issues.apache.org/jira/browse/CB-10880) Removed plugin pinning. Replaced by new plugin fetching logic. 

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova@latest
  
  * If you have `plugman` installed:

        npm install -g plugman@latest

<!--more-->
# Changes include:
## Platform updates

When adding these platforms to your project, the following versions are now used by default:

* [cordova-ios Release Notes](http://cordova.apache.org/announcements/2016/03/02/ios-4.1.0.html)
* [cordova-android Release Notes](http://cordova.apache.org/announcements/2016/03/02/cordova-android-5.1.1.html)
* [cordova-windows Release Notes](http://cordova.apache.org/announcements/2016/02/04/cordova-windows-4.3.1.html)
* [cordova-browser Release Notes](http://cordova.apache.org/announcements/2016/03/04/cordova-browser-4.1.0.html)
* [cordova-osx Release Notes](http://cordova.apache.org/announcements/2016/02/16/osx-4.0.0.html)

## cordova-lib

* [CB-10902](https://issues.apache.org/jira/browse/CB-10902) updated pinned platforms
* [CB-10808](https://issues.apache.org/jira/browse/CB-10808) CLI Support templates with subdirectory
* [CB-10880](https://issues.apache.org/jira/browse/CB-10880) Removed plugin pinning
* [CB-10679](https://issues.apache.org/jira/browse/CB-10679) Improving version choosing logic test coverage
* [CB-10673](https://issues.apache.org/jira/browse/CB-10673) add plugin `--force` option. 
* [CB-10679](https://issues.apache.org/jira/browse/CB-10679) New version choosing logic for plugin add
* [CB-10328](https://issues.apache.org/jira/browse/CB-10328) set top-level property when adding new platforms
* [CB-10314](https://issues.apache.org/jira/browse/CB-10314) avoid fetching plugins when `oldId` is already fetched
* [CB-10708](https://issues.apache.org/jira/browse/CB-10708) Install/uninstall plugins correctly into CLI project using plugman
* [CB-10462](https://issues.apache.org/jira/browse/CB-10462) Get rid of `npmconf` in favor of `npm`
* [CB-10662](https://issues.apache.org/jira/browse/CB-10662) Use project's `config.xml` as a fallback for package name
* [CB-10644](https://issues.apache.org/jira/browse/CB-10644) Adds deprecation message about old platforms support removal.
* [CB-10519](https://issues.apache.org/jira/browse/CB-10519) Wrap all sync calls inside of `cordova.raw` methods into promises
* [CB-10641](https://issues.apache.org/jira/browse/CB-10641) Adds tests for order of operations in platform add
* [CB-10641](https://issues.apache.org/jira/browse/CB-10641) Run prepare `_after_` plugins were installed
* [CB-10618](https://issues.apache.org/jira/browse/CB-10618) Do not call `prepBuildFiles` for `cordova-android@>=5.2.0`.
* [CB-10518](https://issues.apache.org/jira/browse/CB-10518) Correct log level and error messages for some cordova errors
* [CB-10550](https://issues.apache.org/jira/browse/CB-10550) Fix plugin id mapper not enforced when a version is specified
* [CB-10611](https://issues.apache.org/jira/browse/CB-10611) fix `before_plugin_install` hook not disabled with `--nohooks`
* [CB-10235](https://issues.apache.org/jira/browse/CB-10235) Added clearer error message for info command.
* [CB-10584](https://issues.apache.org/jira/browse/CB-10584) Splashscreen plugin crashes the app on **windows 10** when built with `--browserify`
* [CB-10592](https://issues.apache.org/jira/browse/CB-10592) Don't quote platform specific args values
* [CB-10482](https://issues.apache.org/jira/browse/CB-10482) Remove references to **windows8** from `cordova-lib/cli`
* [CB-10567](https://issues.apache.org/jira/browse/CB-10567) Bubble up `cordova.raw.run()` error to the caller
* [CB-10553](https://issues.apache.org/jira/browse/CB-10553) Fix framework tag handler for **Android**
* [CB-10461](https://issues.apache.org/jira/browse/CB-10461) `cordova platform ls` should list the versions of platforms pinned
* [CB-10531](https://issues.apache.org/jira/browse/CB-10531) Enable coverage reports for cordova-lib
* [CB-10465](https://issues.apache.org/jira/browse/CB-10465) Pass correct options to prepare from compile
* [CB-10459](https://issues.apache.org/jira/browse/CB-10459) cordova platform list should mark **amazon-fireos** and **wp8** as deprecated
* [CB-10499](https://issues.apache.org/jira/browse/CB-10499) `--template` should pull the latest template from npm when version isn't specified
* [CB-10432](https://issues.apache.org/jira/browse/CB-10432) Adds e2e test to protect against future regressions.
* Added node versions matrix to `.travis.yml`.

## cordova-cli

* [CB-10902](https://issues.apache.org/jira/browse/CB-10902) Updated `cordova-lib` dependency to 6.1.0
* Simplified cordova CLI readme
* [CB-10860](https://issues.apache.org/jira/browse/CB-10860) avoid node complaining of too many event listener added when running tests
* [CB-10673](https://issues.apache.org/jira/browse/CB-10673) add `plugin add --force` option.
* Add Travis CI badge
* Specify valid `SPDX` license in `package.json`
* [CB-10748](https://issues.apache.org/jira/browse/CB-10748) Use `cordova-common.CordovaLogger` in CLI
* Adding and fixing some whitespace in CLI docs.
* [CB-10348](https://issues.apache.org/jira/browse/CB-10348) Update formatting of CLI reference readme
* [CB-10348](https://issues.apache.org/jira/browse/CB-10348) CLI reference readme
* [CB-10482](https://issues.apache.org/jira/browse/CB-10482) Remove references to **windows8** from cordova-lib/cli
* [CB-10348](https://issues.apache.org/jira/browse/CB-10348) CLI doc output tweaks
* Update help docs - add examples and make them consistent

## cordova-plugman

* [CB-10902](https://issues.apache.org/jira/browse/CB-10902) Updated cordova-lib dependency to 6.1.0

## cordova-js

* [CB-10650](https://issues.apache.org/jira/browse/CB-10650) Non-index `content.src` causes Splashscreen to be not displayed on browser
* [CB-10558](https://issues.apache.org/jira/browse/CB-10558) Update `cordova-js` according to **windows8** deprecation

## cordova-common

* [CB-10694](https://issues.apache.org/jira/browse/CB-10694) Platform-specific configuration preferences don't override global settings
* [CB-9264](https://issues.apache.org/jira/browse/CB-9264) Duplicate entries in `config.xml`
* [CB-10791](https://issues.apache.org/jira/browse/CB-10791) Add `adjustLoggerLevel` to `cordova-common.CordovaLogger`
* [CB-10662](https://issues.apache.org/jira/browse/CB-10662) Add tests for `ConfigParser.getStaticResources`
* [CB-10622](https://issues.apache.org/jira/browse/CB-10622) fix target attribute being ignored for images in `config.xml`.
* [CB-10583](https://issues.apache.org/jira/browse/CB-10583) Protect plugin preferences from adding extra Array properties.

## Pinned Platform Versions for **Cordova CLI 6.1.0**

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

## Plugin Versions tested with **Cordova CLI 6.1.0**

* cordova-plugin-battery-status: 1.1.1
* cordova-plugin-camera: 2.1.1
* cordova-plugin-console: 1.0.2
* cordova-plugin-contacts: 2.0.1
* cordova-plugin-device: 1.1.1
* cordova-plugin-device-motion: 1.2.0
* cordova-plugin-device-orientation: 1.0.2
* cordova-plugin-dialogs: 1.2.0
* cordova-plugin-file: 4.1.1
* cordova-plugin-file-transfer: 1.5.0
* cordova-plugin-geolocation: 2.1.0
* cordova-plugin-globalization: 1.0.3
* cordova-plugin-inappbrowser: 1.3.0
* cordova-plugin-legacy-whitelist: 1.1.1
* cordova-plugin-media: 2.2.0
* cordova-plugin-media-capture: 1.2.0
* cordova-plugin-network-information: 1.2.0
* cordova-plugin-splashscreen: 3.2.1
* cordova-plugin-statusbar: 2.1.2
* cordova-plugin-test-framework: 1.1.1
* cordova-plugin-vibration: 2.1.0
* cordova-plugin-whitelist: 1.2.1
* cordova-plugin-wkwebview-engine: 1.0.2
