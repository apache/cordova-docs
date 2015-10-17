---
layout: post
author:
    name: Mark Koudritsky
    url: https://github.com/kamrik
title:  "Tools Release: July 10, 2014"
categories: news
tags: release tools
---
New versions of `plugman`, `cordova` and `cordova-lib` are now live!

* [plugman@0.22.4](https://www.npmjs.org/package/plugman)
* [cordova@3.5.0-0.2.6](https://www.npmjs.org/package/cordova)
* [cordova-lib@0.21.6](https://www.npmjs.org/package/cordova-lib)

To update your tools:

    npm install -g cordova
    npm install -g plugman

Most notable changes are:

* Support for splash screens
* Drop **wp7** as platform
* An experimental feature that allows to persist the currently added plugins to config.xml. Try it out as:
  - `cordova save plugins --experimental`
  - and later when you check out the project without a plugins folder:
  - `cordova restore plugins --experimental`
  - Read [Gorkem Ercan's post](http://www.gorkem-ercan.com/2014/06/sharing-cordova-projects-becomes-easier.html) for details.
* We are experimenting with using `browserify` to package our `cordova.js` build artifact. This is an internal change to our tooling, and is currently still off-by-default.  We would appreciate feedback since we hope to switch to on-by-default in a future release.  Try it using plugman as:
 - `plugman (un)install --browserify --project [PROJECT] --plugin [PLUGIN] --platform [ios|android]`


Other changes include:
<!--more-->

## cordova

* [CB-6728](https://issues.apache.org/jira/browse/CB-6728) Support chip architecture flag `--archs`
* [CB-6740](https://issues.apache.org/jira/browse/CB-6740) **amazon-fireos** Clean up error reporting when AmazonWebView SDK not found
* [CB-6943](https://issues.apache.org/jira/browse/CB-6943) Path can include the : if it is absolute, only test for `http`. Added tests
* Show full stack for `CordovaError` in verbose mode
* [CB-6024](https://issues.apache.org/jira/browse/CB-6024) Use nopt instead of optimist in cli
* Add `--usenpm` flag to activate npm based `lazy_load`
* [CB-6767](https://issues.apache.org/jira/browse/CB-6767) Allow `cordova` to be replaceable in error messages
* Add `--noregistry` flag for disabling plugin lookup in the registry

## cordova-lib

* [CB-3571](https://issues.apache.org/jira/browse/CB-3571), [CB-2606](https://issues.apache.org/jira/browse/CB-2606) support for splashscreens
* Fix plugin check error, when plugin dependency with specific version is given
* [CB-6709](https://issues.apache.org/jira/browse/CB-6709) Do not create `merges/` folder when adding a platform
* [CB-6140](https://issues.apache.org/jira/browse/CB-6140) Don't allow deletion of platform dependencies
* [CB-6698](https://issues.apache.org/jira/browse/CB-6698) Fix 'android update lib-project' to work with paths containing spaces
* [CB-6973](https://issues.apache.org/jira/browse/CB-6973) Run JSHint on all code in `src/` via `npm test`
* [CB-6542](https://issues.apache.org/jira/browse/CB-6542) Delay creating project until there's some chance that it will succeed
* `folder_contents()` now ignores `.svn` folders
* [CB-6970](https://issues.apache.org/jira/browse/CB-6970) Share win project files manipulation code between cordova and plugman
* [CB-6954](https://issues.apache.org/jira/browse/CB-6954) Share `events.js` between `cordova` and `plugman`
* [CB-6698](https://issues.apache.org/jira/browse/CB-6698) Automatically copy sub-libraries to project's directory
* [CB-6942](https://issues.apache.org/jira/browse/CB-6942) Describe running hooks only in verbose mode.
* [CB-6512](https://issues.apache.org/jira/browse/CB-6512) Allow `cordova platform add /path/to/platform/files`
* [CB-6895](https://issues.apache.org/jira/browse/CB-6895) Add more config properties into manifest
* Allow `cordova platform add platform@version`
* Add util func for chaining promises
* removing `doWrap` from `prepare`
* adding prepare-browserify
* adding and freezing cordova-js
* [CB-6879](https://issues.apache.org/jira/browse/CB-6879) config parser breakout into a cordova level module
* [CB-6698](https://issues.apache.org/jira/browse/CB-6698) Resolve android `<framework>` relative to plugin_dir when `custom=true`
* Fix tests on node 0.11.x
* [CB-6024](https://issues.apache.org/jira/browse/CB-6024) Accept cli vars as part of opts param
* Refer properties-parser package from NPM.
* [CB-6859](https://issues.apache.org/jira/browse/CB-6859) Removed all **wp7** references, tests still passing
* Extract `AndroidProject` class into a separate .js file
* [CB-6698](https://issues.apache.org/jira/browse/CB-6698) Support library references for Android via the framework tag
* [CB-6854](https://issues.apache.org/jira/browse/CB-6854) Strip BOM when adding `cordova.define()` to js-modules
* Use `PluginInfo` in `plugman/install.js`
* [CB-6772](https://issues.apache.org/jira/browse/CB-6772) Provide a default for `AndroidLaunchMode`
* [CB-6711](https://issues.apache.org/jira/browse/CB-6711) Use `parseProjectFile` when working with XCode projects.
* Start using `PluginInfo` object in `plugman/install.js`
* [CB-6709](https://issues.apache.org/jira/browse/CB-6709) Remove `merges/` folder for default apps
* Add `--shrinkwrap` flag to save plugin versions
* Initial implementation for saving plugin list in config.xml and restoring from it
* [CB-6668](https://issues.apache.org/jira/browse/CB-6668) Use `<description>` for `cordova plugin ls` when `<name>` is missing.
* Add `--noregistry` flag for disabling plugin lookup in the registry
* Remove `--force` from default npm settings for plugin registry
* [CB-7100](https://issues.apache.org/jira/browse/CB-7100) Use npm for downloading plugins and later platforms
* [CB-6691](https://issues.apache.org/jira/browse/CB-6691) Change some instances of `Error()` to `CordovaError()`

