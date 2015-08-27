---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: April 21, 2015"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@5.0.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@5.0.0](https://www.npmjs.org/package/cordova)
* [plugman@0.23.1](https://www.npmjs.org/package/plugman)
* [cordova-js@3.9.0](https://www.npmjs.org/package/cordova-js)

Release highlights:

* Plugins have been renamed and the **Cordova-CLI** now supports fetching plugins from **npm**. We highly recommend reading about it in the [plugins release blog post](http://cordova.apache.org/announcements/2015/04/21/plugins-release-and-move-to-npm.html).
* `<feature>` tags have been renamed to `<plugin>` tags in your projects `config.xml`. Adding a `<plugin>` tag to your `config.xml` will fetch and install it on `cordova prepare` if it isn't already installed.
* **Cordova Android@4.0.0** has been released and pinned as the default version for new projects. This includes support for pluggable WebViews! Read about it in the [Android 4.0.0 release blog post](http://cordova.apache.org/announcements/2015/04/15/cordova-android-4.0.0.html).
* Our template app, **[Cordova App Hello World](https://www.npmjs.com/package/cordova-app-hello-world)**, has been moved to **npm**.
* Added the ability to manage your plugin and platform dependencies in your project's `config.xml`. When adding plugins or platforms, use the `--save` flag to add them to `config.xml`. Ex: `cordova platform add android --save`. Existing projects can use `cordova plugin save` and `cordova platform save` commands to save all previously installed plugins and platforms into your project's `config.xml`. Platforms and plugins will be autorestored when `cordova prepare` is run. This allows developers to easily manage and share their dependenceis among different development enviroments and with their coworkers. 


To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova

  * If you have `plugman` installed:

        npm install -g plugman

<!--more-->
# Changes include:

## Platform updates
When adding these platforms to your project, the following versions are now used by default.
These platform versions were released recently, and the tools' defaults were updated:

* [Cordova Android 4.0.0](http://cordova.apache.org/announcements/2015/04/15/cordova-android-4.0.0.html)
* [Cordova WP8 3.8.0](https://github.com/apache/cordova-wp8/blob/master/RELEASENOTES.md)
* [Cordova Windows 3.8.1](https://github.com/apache/cordova-windows/blob/master/RELEASENOTES.md)

## cordova-lib
* [CB-8865](https://issues.apache.org/jira/browse/CB-8865) Fixed `plugman.help()`
* Pinned **Cordova-Android** version **4.0.0**
* Fix `getPlatformVersion` fails for paths with spaces
* [CB-8799](https://issues.apache.org/jira/browse/CB-8799) Save plugin/platform `src` and `version` to `spec` attribute.
* [CB-8807](https://issues.apache.org/jira/browse/CB-8807) Platform add fails to add plugins with variables.
* [CB-8832](https://issues.apache.org/jira/browse/CB-8832) Fix **iOS** icon copying logic to not use default for every size
* Updated pinned versions of **Windows** and **wp8**.
* [CB-8775](https://issues.apache.org/jira/browse/CB-8775) Adding a plugin will copy it to plugins folder, except if the plugin's new or old id is already installed.
* Fix `setGlobalPreference()` in `ConfigParser`
* Removed mostly unused `relativePath` checking and added missing cases for `isAbsolutePath`
* [CB-8791](https://issues.apache.org/jira/browse/CB-8791) Recognize `UAP` as a valid `TargetPlatformIdentifier`
* [CB-8784](https://issues.apache.org/jira/browse/CB-8784) Prepare with no platforms should restore all platforms.
* Fix `plugman install` failure on **iOS** containing `&`
* [CB-8703](https://issues.apache.org/jira/browse/CB-8703) Add support for `semver` and `device-specific` targeting of `config-file` to **Windows**
* [CB-8596](https://issues.apache.org/jira/browse/CB-8596) Expose APIs to retrieve platforms and plugins saved in `config.xml`.
* [CB-8741](https://issues.apache.org/jira/browse/CB-8741) Make plugin `--save` work more like `npm install`
* [CB-8755](https://issues.apache.org/jira/browse/CB-8755) Plugin `--save`: Multiple `config.xml` entries don't get removed
* [CB-8754](https://issues.apache.org/jira/browse/CB-8754) Auto-restoring a plugin fails when adding a platform.
* [CB-8651](https://issues.apache.org/jira/browse/CB-8651) Restoring platforms causes plugin install to be triggered twice
* [CB-8731](https://issues.apache.org/jira/browse/CB-8731) Updated `app-hello-world` dependency to **3.9.0**
* [CB-8757](https://issues.apache.org/jira/browse/CB-8757) **iOS**: Make paths with `--link` relative to the real project path
* [CB-8286](https://issues.apache.org/jira/browse/CB-8286) Fix regression from e70432f2: Never want to link to `app-hello-world`
* [CB-8737](https://issues.apache.org/jira/browse/CB-8737) Available platforms list includes extraneous values
* Bugfix to `json.parse` before using `cfg`
* Add `merges/` by default, now all tests pass
* Move `cordova-app-hello-world` dependency to `cordova-lib`
* Support the old 4-argument version of `cordova create` again
* [CB-8286](https://issues.apache.org/jira/browse/CB-8286) Update `create.js` to always require passing in a `www`
* Show **npm** failure message when plugin fetch fails
* [CB-8725](https://issues.apache.org/jira/browse/CB-8725) Fix plugin add from **npm** when authenticated to CPR
* [CB-8499](https://issues.apache.org/jira/browse/CB-8499) Remove `project_dir` from (un)installers signature
* Add `addElement()` to `ConfigParser`
* [CB-8696](https://issues.apache.org/jira/browse/CB-8696) Fix fetching of dependencies with semver constraints rather than exact versions
* [CB-7747](https://issues.apache.org/jira/browse/CB-7747) Add `<allow-intent>` for App Store on **iOS**
* Export `PlatformProjectAdapter` from `platforms.js`
* Allow subdirs for icons on **BB10**
* [CB-8670](https://issues.apache.org/jira/browse/CB-8670) Error when set engine name to `cordova-windows` in `plugin.xml`
* [CB-8521](https://issues.apache.org/jira/browse/CB-8521) Adds `cordova plugin save` which saves all installed plugins to config.xml
* [CB-7698](https://issues.apache.org/jira/browse/CB-7698) BugFix: For plugins which require variables, `cordova plugin add FOO` should fail when no variables specified.
* Add `setGlobalPreference()` to `ConfigParser`
* [CB-8499](https://issues.apache.org/jira/browse/CB-8499) Merge platforms.js from cordova and plugman
* Rename references to `feature` to `plugin`
* Deprecate the old feature syntax from `config.xml`
* [CB-8634](https://issues.apache.org/jira/browse/CB-8634) Adds support for custom branches for `cordova platform add`
* [CB-8633](https://issues.apache.org/jira/browse/CB-8633) BugFix: Support for urls to tarballs was broken
* [CB-8499](https://issues.apache.org/jira/browse/CB-8499) `cordova platform save`: save installed platforms and their sources (versions/git_urls/folders) Into `config.xml`
* [CB-8499](https://issues.apache.org/jira/browse/CB-8499) When deleting a platform, remove it from `platforms.json`
* [CB-8499](https://issues.apache.org/jira/browse/CB-8499) When adding a platform, capture version/folder/url being added to allow us to be able to save all installed platforms and their versions later on by doing `cordova platform save`
* [CB-7747](https://issues.apache.org/jira/browse/CB-7747) Add `<allow-intent>` to default template
* [CB-8616](https://issues.apache.org/jira/browse/CB-8616) Support 9-patch images for default **Android** splashscreen
* [CB-8551](https://issues.apache.org/jira/browse/CB-8551) Fixed regex in `isValidCprName`
* [CB-8551](https://issues.apache.org/jira/browse/CB-8551) Merged `fetchNPM` and `fetchPlugReg` into `fetchPlugin`
* [CB-8551](https://issues.apache.org/jira/browse/CB-8551) Updated regex in `isValidCprName` to exclude matching `@version`
* [CB-8551](https://issues.apache.org/jira/browse/CB-8551) Split up `changePluginId` into two functions
* [CB-8457](https://issues.apache.org/jira/browse/CB-8457) Ignore version specifier when running hooks
* [CB-8578](https://issues.apache.org/jira/browse/CB-8578) `cordova plugin add <plugin>` should be able to restore urls and folders in addition to versions
* [CB-7827](https://issues.apache.org/jira/browse/CB-7827) Add support for `android-activityName` within `config.xml`
* Add `org.apache.cordova.test-framework` to plugman publish whitelist
* [CB-8577](https://issues.apache.org/jira/browse/CB-8577) Read plugin variables from correct tag
* [CB-8551](https://issues.apache.org/jira/browse/CB-8551) Added `plugin-name` support for removing plugins.
* [CB-8551](https://issues.apache.org/jira/browse/CB-8551) Skip **CPR** if `pluginID` isn't reverse domain name style
* [CB-8551](https://issues.apache.org/jira/browse/CB-8551) Added **npm** fetching as fallback

## cordova-cli
* Add information on **Firefox OS** to the `README`
* Update link to hooks `README`
* [CB-8634](https://issues.apache.org/jira/browse/CB-8634) Adds docs about support for custom branches for `cordova platform add`

## cordova-js
* Verify that `window.cordova` does not already exist and throw error if it does
* Added `appveyor` badge
* [CB-8711](https://issues.apache.org/jira/browse/CB-8711) Wait for all callbacks before evaluating expectations
* [CB-8223](https://issues.apache.org/jira/browse/CB-8223) Adds `configparser` module for exposing `config.xml` in the **Browser** platform
* [CB-8667](https://issues.apache.org/jira/browse/CB-8667) **Windows** Handle case where checking for `NORESULT` returns falsy
* Add **TravisCI** link and banner

## plugman
* [CB-8637](https://issues.apache.org/jira/browse/CB-8637) Add **Windows** platform

## Pinned Platform Versions for **Cordova CLI 5.0.0**

* Cordova Amazon-FireOS: 3.6.3
* Cordova Android: 4.0.0
* Cordova BlackBerry10: 3.7.0
* Cordova Browser: 3.6.0
* Cordova FirefoxOS: 3.6.3
* Cordova iOS: 3.8.0
* Cordova Ubuntu: 4.0.0
* Cordova Windows: 3.8.1
* Cordova WP8: 3.8.0
