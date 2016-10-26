---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Released!"
categories: news
tags: release tools
---

New updates of our tools are now available!

* [cordova@6.4.0](https://www.npmjs.org/package/cordova)
* [cordova-lib@6.4.0](https://www.npmjs.org/package/cordova-lib)
* [plugman@1.4.0](https://www.npmjs.com/package/plugman)
* [cordova-js@4.2.0](https://www.npmjs.com/package/cordova-js)
* [cordova-common@1.5.1](https://www.npmjs.com/package/cordova-common)

**Release Highlights**

* **Updated Platforms** [CB-12039](https://issues.apache.org/jira/browse/CB-12039): updated pinned **Android** to `6.0.0` and **iOS** to `4.3.0`. Read the [Android@6.0.0 release blog](http://cordova.apache.org/announcements/2016/10/24/android-release.html) and the [iOS@4.3.0 release blog](http://cordova.apache.org/announcements/2016/10/24/ios-release.html).
* **Deprecation** [CB-11976](https://issues.apache.org/jira/browse/CB-11976): Add deprecated node version warning for 0.x. Lean more about our [node deprecation timeline](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html).
* **Deprecation** [CB-11979](https://issues.apache.org/jira/browse/CB-11979): added deprecation warning for installing plugins via subdirectories
* **Security** [CB-12017](https://issues.apache.org/jira/browse/CB-12017): Updated npm dependencies due to security vulnerabilities. 
* **New Feature** [CB-11908](https://issues.apache.org/jira/browse/CB-11908): Add `edit-config` support to `config.xml`. `edit-config` works the same way now in `plugin.xml` as well as `config.xml`. Read about it at http://cordova.apache.org/docs/en/6.x/plugin_ref/spec.html#edit-config
* **New Feature** [CB-3785](https://issues.apache.org/jira/browse/CB-3785): add support for `EventListener interface` to `Channel.prototype.subscribe`
* **New Module** [CB-11607](https://issues.apache.org/jira/browse/CB-11607): split out `cordova-create` from `cordova-lib`. [Published](https://www.npmjs.com/package/cordova-create) `cordova-create` to `npm`.

To update your cordova CLI:

    npm install -g cordova@latest

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-12039](https://issues.apache.org/jira/browse/CB-12039): updated pinned `Android` to 6.0.0 and `iOS` to 4.3.0
* [CB-11979](https://issues.apache.org/jira/browse/CB-11979): added deprecation warning for installing plugins via subdirectories
* [CB-11730](https://issues.apache.org/jira/browse/CB-11730): Modify condition of if clause to avoid similar project name with plugin name
* [CB-11985](https://issues.apache.org/jira/browse/CB-11985): Check if cached platform/plugin exists before `npm cache`
* [CB-11951](https://issues.apache.org/jira/browse/CB-11951): [CB-11967](https://issues.apache.org/jira/browse/CB-11967): Respect preference default values when installling plugins
* [CB-11771](https://issues.apache.org/jira/browse/CB-11771): Deep symlink directories to target project instead of linking the directory itself
* [CB-11908](https://issues.apache.org/jira/browse/CB-11908): Handle `edit-config` in `config.xml` on prepare
* Add github pull request template
* [CB-8320](https://issues.apache.org/jira/browse/CB-8320): We look for a `build.gradle` to make sure it's **Android**, not an `AndroidManifest`, because it moved
* [CB-11811](https://issues.apache.org/jira/browse/CB-11811): Moved **iOS** platform specific tests to `platform.spec.ios.js`, added `test-ios` npm run script.
* [CB-11811](https://issues.apache.org/jira/browse/CB-11811): disable `CocoaPods` e2e test temporarily since it is platform specific and requires cocoapods to be installed.
* updated `save.spec.js` to use latest **android** and newer fb plugin
* [CB-11607](https://issues.apache.org/jira/browse/CB-11607): breakout `cordova-create` from `cordova-lib`
* [CB-9825](https://issues.apache.org/jira/browse/CB-9825): framework tag spec parsing
* [CB-11698](https://issues.apache.org/jira/browse/CB-11698): Fix plugin installation when restoring platform
* [CB-11679](https://issues.apache.org/jira/browse/CB-11679): Speed up save/restore tests
* [CB-11205](https://issues.apache.org/jira/browse/CB-11205): Respect saved variables when installing plugin
* [CB-11589](https://issues.apache.org/jira/browse/CB-11589): Fix missing plugin files after restore

## cordova-cli

* [CB-12039](https://issues.apache.org/jira/browse/CB-12039): updated `cordova-lib` to `6.4.0`
* [CB-11976](https://issues.apache.org/jira/browse/CB-11976): Updated `package.json` engine key
* [CB-11976](https://issues.apache.org/jira/browse/CB-11976): Add deprecated node version warning for 0.x
* Add github pull request template
* [CB-11607](https://issues.apache.org/jira/browse/CB-11607): breakout `cordova-create` from `cordova-lib`
*  [CB-11623](https://issues.apache.org/jira/browse/CB-11623): added back linking
* Document cli - cordova plugin save
* [CB-11023](https://issues.apache.org/jira/browse/CB-11023): Add doc for conflicting plugins

## plugman

* Add github pull request template
* [CB-12039](https://issues.apache.org/jira/browse/CB-12039): updated `cordova-lib` to `6.4.0`

## cordova-js

* [CB-12017](https://issues.apache.org/jira/browse/CB-12017): updated dependencies in `package.json`
* [CB-3785](https://issues.apache.org/jira/browse/CB-3785): add support for `EventListener interface` to `Channel.prototype.subscribe` 
* Add github pull request template
* [CB-11928](https://issues.apache.org/jira/browse/CB-11928): removed jshint from `grunt.registerTask` because it doesn't work with node6
* [CB-9967](https://issues.apache.org/jira/browse/CB-9967): deleted legacy platform specific files
* [CB-11522](https://issues.apache.org/jira/browse/CB-11522): [**windows**] Make cordova-js handle `unknown` type
* SECURITY ISSUE: Resolve minimatch DDOS issue.
* [CB-11522](https://issues.apache.org/jira/browse/CB-11522): Make `utils.clone` handle properties gracefully


## cordova-common

* [CB-12002](https://issues.apache.org/jira/browse/CB-12002): Add `getAllowIntents()` to `ConfigParser`
* [CB-11998](https://issues.apache.org/jira/browse/CB-11998): `cordova platform add` error with `cordova-common@1.5.0`
* [CB-11776](https://issues.apache.org/jira/browse/CB-11776): Add test case for different `edit-config` targets
* [CB-11908](https://issues.apache.org/jira/browse/CB-11908): Add `edit-config` to `config.xml`
* [CB-11936](https://issues.apache.org/jira/browse/CB-11936): Support four new **App Transport Security (ATS)** keys
* update `config.xml` location if it is a **Android Studio** project.
* use `array` methods and `object.keys` for iterating. avoiding `for-in` loops
* [CB-11517](https://issues.apache.org/jira/browse/CB-11517): Allow `.folder` matches
* [CB-11776](https://issues.apache.org/jira/browse/CB-11776): check `edit-config` target exists
