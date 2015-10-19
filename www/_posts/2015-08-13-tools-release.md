---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: August 13th, 2015"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@5.2.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@5.2.0](https://www.npmjs.org/package/cordova)
* [plugman@1.0.0](https://www.npmjs.org/package/plugman)
* [cordova-js@4.1.0](https://www.npmjs.org/package/cordova-js)

Release highlights:
* [CB-9330](https://issues.apache.org/jira/browse/CB-9330) Removed `Plugman` `publish`, `unpublish`, `addUser` and `owner add/rm` commands due to [plugins.cordova.io](http://plugins.cordova.io/#/) switching to read only. Plugin authors are encouraged to publish to [npm](https://www.npmjs.com/) instead. Learn more at [http://plugins.cordova.io/npm/authors.html](http://plugins.cordova.io/npm/authors.html).
* [CB-5578](https://issues.apache.org/jira/browse/CB-5578) Adds `clean` command to `cordova-cli`. This cleans the build artifacts for your project. Run `cordova clean -h` for more information.
* [CB-9177](https://issues.apache.org/jira/browse/CB-9177) Use tilde instead of caret when saving to `config.xml` via `--save` flag.
* [CB-9225](https://issues.apache.org/jira/browse/CB-9225) Add **Windows** platform support to `plugman platform add`
* [CB-9114](https://issues.apache.org/jira/browse/CB-9114): Deprecation Warning for `--usegit` flag.
* Browserify flag for adding plugins at build time vs run time has all tests passings. Please try it out via `--browserify`. EX. `cordova run android --browserify`.



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

* [Cordova Android ~4.1.0 (4.1.1)](http://cordova.apache.org/announcements/2015/07/21/cordova-android-4.1.0.html)
* [Cordova iOS ~3.9.0 (3.9.1)](http://cordova.apache.org/announcements/2015/08/04/cordova-ios-3.9.0.html)

## cordova-lib
* [CB-9436](https://issues.apache.org/jira/browse/CB-9436) Removes `require-tr` bundle transformation
* [CB-9278](https://issues.apache.org/jira/browse/CB-9278): Restoring multiple platforms fails. This closes #266
* [CB-9421](https://issues.apache.org/jira/browse/CB-9421) Added a test for plugin fetch with searchpath parameter
* [CB-9421](https://issues.apache.org/jira/browse/CB-9421) Fixed searchpath parameter being ignored. This closes #269
* Update xcode dependency to latest stable version. This closes #272
* [CB-9420](https://issues.apache.org/jira/browse/CB-9420) Fixes malformed require calls in browserify bundle. This closes #270
* [CB-9405](https://issues.apache.org/jira/browse/CB-9405) limit author/description to 256 char per WMAppManifest schema
* [CB-9414](https://issues.apache.org/jira/browse/CB-9414) plugin fetching now defaults to npm, CPR fallback
* [CB-9384](https://issues.apache.org/jira/browse/CB-9384) Added tests that test plugin fetch from github branch|tag|sha
* added comment outlining the types of things git_ref can be : commit SHA | branch | tag
* actually checkout git_ref because it may be a branch OR a commit SHA
* [CB-9332](https://issues.apache.org/jira/browse/CB-9332) Upgrade npm and semver to actual versions
* [CB-9330](https://issues.apache.org/jira/browse/CB-9330) updated wording for warning messages for removal of publish/unpublish commands
* Adds stubs for `publish`/`unpublish` commands. This closes #254
* [CB-9330](https://issues.apache.org/jira/browse/CB-9330) Removes 'plugman publish' related functionality
* [CB-9335](https://issues.apache.org/jira/browse/CB-9335): Windows quality-of-life improvements.  To align with the change in Cordova-Windows which removes the Windows 8 project from the solution file used by Windows 8.1 and Windows 10, the same is done in the spec.
* Fix prepare to wait the promise from plugman prepare.
* [CB-9362](https://issues.apache.org/jira/browse/CB-9362) Don't fail if superspawn can't chmod a file
* [CB-9122](https://issues.apache.org/jira/browse/CB-9122) Added tests for platform/plugin add/rm/update with --save flag. This closes #246
* Fixed ios node-xcode related tests failing on Windows according to version update
* Added webOS parsers for project creation/manipulation
* [CB-8965](https://issues.apache.org/jira/browse/CB-8965) Prevent cli from copying cordova.js and cordova-js-src/ multiple times
* [CB-9114](https://issues.apache.org/jira/browse/CB-9114): Log deprecation message when --usegit flag is used. This closes #234
* [CB-9126](https://issues.apache.org/jira/browse/CB-9126) Fix ios pbxproj' resources paths when adding ios platform on non-OSX environment. 
* [CB-9221](https://issues.apache.org/jira/browse/CB-9221) Updates `cordova serve` command to use cordova-serve module.
* [CB-9225](https://issues.apache.org/jira/browse/CB-9225) Add windows platform support to `plugman platform add`
* [CB-9163](https://issues.apache.org/jira/browse/CB-9163) when engine check isn't satisfied, skip that plugin install
* [CB-9162](https://issues.apache.org/jira/browse/CB-9162) Adds support for default values for plugin variables.
* [CB-9188](https://issues.apache.org/jira/browse/CB-9188) Confusing error after delete plugin folder then prepare.
* [CB-9145](https://issues.apache.org/jira/browse/CB-9145) prepare can lose data during config munge
* [CB-9177](https://issues.apache.org/jira/browse/CB-9177) Use tilde instead of caret when save to config.xml.
* [CB-9147](https://issues.apache.org/jira/browse/CB-9147) Adding a platform via caret version adds latest rather than the latest matching.
* [CB-5578](https://issues.apache.org/jira/browse/CB-5578) Adds `clean` module to cordova. This closes #241
* [CB-9124](https://issues.apache.org/jira/browse/CB-9124) Makes network-related errors' messages more descriptive.
* [CB-9067](https://issues.apache.org/jira/browse/CB-9067) fixed plugman config set registry and adduser
* [CB-8993](https://issues.apache.org/jira/browse/CB-8993) Plugin restore ignores search path. This closes #224
* [CB-9108](https://issues.apache.org/jira/browse/CB-9108) Handle version ranges when add platform with --usegit.
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Makes error message descriptive when `requirements` is called outside of cordova project.
* [CB-8007](https://issues.apache.org/jira/browse/CB-8007) Two cordova plugins modifying `*-Info.plist` CFBundleURLTypes
* [CB-9065](https://issues.apache.org/jira/browse/CB-9065) Allow removing plugins by short name.
* [CB-9001](https://issues.apache.org/jira/browse/CB-9001) Set WMAppManifest.xml Author, Description and Publisher attributes based on config.xml
* [CB-9073](https://issues.apache.org/jira/browse/CB-9073) Allow to add platform if project path contains `&` symbol

## cordova-cli
* [CB-9114](https://issues.apache.org/jira/browse/CB-9114): Deprecation Warning for --usegit flag.
* [CB-9171](https://issues.apache.org/jira/browse/CB-9171) Support Plugin Variables with =
* [CB-5578](https://issues.apache.org/jira/browse/CB-5578) Adds `clean` command to cordova-cli.
* [CB-8993](https://issues.apache.org/jira/browse/CB-8993) Plugin restore ignores search path. This closes #213
* [CB-9121](https://issues.apache.org/jira/browse/CB-9121) Add support for build configuration to be specified using the CLI
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Adds missing section about `requirements` to general cordova help

## cordova-js
* [CB-9429](https://issues.apache.org/jira/browse/CB-9429) Removes tests from resultant bundle
* [CB-9436](https://issues.apache.org/jira/browse/CB-9436) Removes `require-tr` bundle transformation
* [CB-9429](https://issues.apache.org/jira/browse/CB-9429) Enables jsdom/browser tests for browserify.
* Fix webOS SmartTV/wearable detection
* Add webOS as a platform to build from/for.
* Fixed issues with data transforms when using browserify
* [CB-9370](https://issues.apache.org/jira/browse/CB-9370) Fixes failing tests on Node 0.12 due to stale dependency
* [CB-9291](https://issues.apache.org/jira/browse/CB-9291) Removes the requirement for specific NodeJS version
* Added common 'activated' channel
* [CB-9156](https://issues.apache.org/jira/browse/CB-9156) added support for absolute platform paths
* [CB-9156](https://issues.apache.org/jira/browse/CB-9156) platform version grabbing supports custom paths
* [CB-9156](https://issues.apache.org/jira/browse/CB-9156) added ability to pass in custom path via command line for platforms
* [CB-8468](https://issues.apache.org/jira/browse/CB-8468) - Application freezes if breakpoint hits JavaScript callback invoked from native

## plugman
* updated help with changes for npm publishing
* [CB-9330](https://issues.apache.org/jira/browse/CB-9330) Removed Plugman `publish`, `unpublish`, `addUser` and `owner add/rm` commands due to [plugins.cordova.io](http://plugins.cordova.io/#/) switching to read only. Plugin authors are encouraged to publish to [npm](https://www.npmjs.com/) instead. Learn more at [http://plugins.cordova.io/npm/authors.html](http://plugins.cordova.io/npm/authors.html).
* [CB-9332](https://issues.apache.org/jira/browse/CB-9332) Removes unnecessary dependencies

## Pinned Platform Versions for **Cordova CLI 5.1.1**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~4.1.0 (4.1.1)
* Cordova BlackBerry10: ~3.7.0
* Cordova Browser: ~3.6.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~3.9.0 (3.9.1)
* Cordova Ubuntu: ~4.0.0
* Cordova Windows: ~4.0.0
* Cordova WP8: ~3.8.1
