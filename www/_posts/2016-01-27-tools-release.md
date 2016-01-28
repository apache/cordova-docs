---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova 6.0.0 Released!"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@6.0.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@6.0.0](https://www.npmjs.org/package/cordova)
* [plugman@1.1.0](https://www.npmjs.org/package/plugman)
* [cordova-js@4.1.3](https://www.npmjs.org/package/cordova-js)

Release Highlights include:
* Updated default platform versions to `cordova-android@5`, `cordova-ios@4` and `cordova-windows@4.3`. 
    - `cordova-android@5.1` supports **Android 6.X.X (Marshmallow)** 
    - `cordova-ios@4.0` adds **iOS9** and `WKWebView` support
    - `cordova-windows@4.3` updated the platform to use the new Platform API.
* Added a new template feature to `create` command. E.g. `cordova create --template cordova-app-hello-world`. This can fetch templates via **npm**, **git URL** or local paths.
* Removed support for our old **Cordova Plugins Registry**. Now plugins can only be installed via **npm**, **git URL** or local paths.
* Added default plugin pinning to `cordova`. This means that `cordova plugin add cordova-plugin-camera` will fetch the pinned version of the plugin instead of the always grabbing the `latest`. Users can still install any version of a plugin via `cordova plugin add cordova-plugin-camera@VERSION`.
* Added deprecation notices for **amazon-fireos** and **wp8**. We are aiming to remove support for these platforms in 6 months. Target **Android** and **Windows** instead.

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova@latest
  
  * If you have `plugman` installed:

        npm install -g plugman@latest

<!--more-->
# Changes include:
## Platform updates

When adding these platforms to your project, the following versions are now used by default:

* [cordova-ios Release Notes](http://cordova.apache.org/announcements/2015/12/08/cordova-ios-4.0.0.html)
* [cordova-android Release Notes](http://cordova.apache.org/announcements/2016/01/24/cordova-android-5.1.0.html)
* [cordova-windows Release Notes](http://cordova.apache.org/announcements/2016/01/18/cordova-windows-4.3.0.html)

## cordova-lib

* [CB-10432](https://issues.apache.org/jira/browse/CB-10432) Fix plugin installation for newly added platform
* [CB-10423](https://issues.apache.org/jira/browse/CB-10423) allow recursive folder copy skipping whatever .. was
* [CB-10394](https://issues.apache.org/jira/browse/CB-10394) updated pinned **Android** version to `~5.1.0`
* [CB-10299](https://issues.apache.org/jira/browse/CB-10299) updated pinned **windows** version to `~4.3.0`
* [CB-10274](https://issues.apache.org/jira/browse/CB-10274) Make www directory the default for plugman
* [CB-10121](https://issues.apache.org/jira/browse/CB-10121) added deprecation notice for **amazon-fireos** and **wp8**
* [CB-7183](https://issues.apache.org/jira/browse/CB-7183) prevent read/write/modify files outside project from plugins
* [CB-8455](https://issues.apache.org/jira/browse/CB-8455) Added `--nohooks` option.
* [CB-10193](https://issues.apache.org/jira/browse/CB-10193) Add deprecation notice about `pre_package` removal
* [CB-10147](https://issues.apache.org/jira/browse/CB-10147) updated pinned **iOS** to `~4.0.0`
* [CB-10125](https://issues.apache.org/jira/browse/CB-10125): Android build fails on read-only files.
* [CB-6698](https://issues.apache.org/jira/browse/CB-6698) Fix directory resolution of framework with parent.
* [CB-9653](https://issues.apache.org/jira/browse/CB-9653) Adds copying of **blackberry10** splashscreens
* **Ubuntu** support for the new plugin naming convention
* [CB-9957](https://issues.apache.org/jira/browse/CB-9957) removed support for fetching from Cordova Plugins Registry. Only fetch plugins from **npm** now.
* [CB-10108](https://issues.apache.org/jira/browse/CB-10108) Fixes **android** frameworks installation/removal
* [CB-9964](https://issues.apache.org/jira/browse/CB-9964) Added `--template` support to `cordova create`
* Removing the `--usegit` flag from `cordova platform`. Recommended method is to use `cordova platform add git_url#branch`
* [CB-10081](https://issues.apache.org/jira/browse/CB-10081) pinned plugin versions. These are default versions fetched when adding a plugin.
* add missing `package_suffix` function on **amazon-fireos** platform for plugman installations.
* [CB-10057](https://issues.apache.org/jira/browse/CB-10057) - removing `<access>` tag does not remove `ATS` entry
* [CB-10048](https://issues.apache.org/jira/browse/CB-10048) clobbering of `<access>` tags to `ATS` directives

## cordova-cli

* [CB-10424](https://issues.apache.org/jira/browse/CB-10424) Updated cordova-lib dependency to 6.0.0
* Remove browserify from experimental flags list
* [CB-8455](https://issues.apache.org/jira/browse/CB-8455) Added `--nohooks` option.
* [CB-9964](https://issues.apache.org/jira/browse/CB-9964) Added `--template` support to `cordova create`
* Removing the `--usegit` flag from `cordova platform`. Recommended method is to use `cordova platform add git_url#branch`
* [CB-9836](https://issues.apache.org/jira/browse/CB-9836) Add `.gitattributes` to prevent `CRLF` line endings in repos
* Added message about deprecating **amazon-fireos** for **Fire OS 5.0+** devices. 2015 onwards **FireOS** devices should use **Android** platform only.
* Added message about deprecating **wp8**. Users should start targeting the **windows** platform instead.
* add **JIRA** issue tracker link. 

## cordova-plugman

* [CB-10424](https://issues.apache.org/jira/browse/CB-10424) Updated cordova-lib dependency to 6.0.0

## cordova-js

* [CB-9883](https://issues.apache.org/jira/browse/CB-9883) - remove unused bridge tests
* add **JIRA** issue tracker link

## Pinned Platform Versions for **Cordova CLI 6.0.0**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~5.1.0
* Cordova BlackBerry10: ~3.8.0
* Cordova Browser: ~4.0.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~4.0.1
* Cordova OSX: ~4.0.0
* Cordova Ubuntu: ~4.3.2
* Cordova Windows: ~4.3.0
* Cordova WebOS: ~3.7.0
* Cordova WP8: ~3.8.2

## Pinned Plugin Versions for **Cordova CLI 6.0.0**

* cordova-plugin-battery-status: ~1.1.1
* cordova-plugin-camera: ~2.1.0
* cordova-plugin-console: ~1.0.2
* cordova-plugin-contacts: ~2.0.1
* cordova-plugin-device: ~1.1.1
* cordova-plugin-device-motion: ~1.2.0
* cordova-plugin-device-orientation: ~1.0.2
* cordova-plugin-dialogs: ~1.2.0
* cordova-plugin-file: ~4.1.0
* cordova-plugin-file-transfer: ~1.5.0
* cordova-plugin-geolocation: ~2.1.0
* cordova-plugin-globalization: ~1.0.2
* cordova-plugin-inappbrowser: ~1.2.0
* cordova-plugin-legacy-whitelist: ~1.1.1
* cordova-plugin-media: ~2.1.0
* cordova-plugin-media-capture: ~1.2.0
* cordova-plugin-network-information: ~1.2.0
* cordova-plugin-splashscreen: ~3.1.0
* cordova-plugin-statusbar: ~2.1.0
* cordova-plugin-test-framework: ~1.1.1
* cordova-plugin-vibration: ~2.1.0
* cordova-plugin-whitelist: ~1.2.1
