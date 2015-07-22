---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: January 09, 2015"
categories: news
tags: release tools
---
New versions of cordova tools are now live!

* [cordova-lib@4.2.0](https://www.npmjs.org/package/cordova-lib)
* [cordova@4.2.0](https://www.npmjs.org/package/cordova)
* [plugman@0.22.17](https://www.npmjs.org/package/plugman)
* [cordova-js@3.7.3](https://www.npmjs.org/package/cordova-js)

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

* Cordova Ubuntu 4.0.0
* Cordova WP8 3.7.1
* Cordova BlackBerry10  3.7.0

## cordova-lib

* `ConfigParser`: refactor `getPreference()`
* Parsers: add base parser (`parser.js`) and make platform parsers inherit from it
* [CB-8230](https://issues.apache.org/jira/browse/CB-8230) Make `project.properties` optional for **Android** sub-libraries
* [CB-8215](https://issues.apache.org/jira/browse/CB-8215) Improve error message when `<source-file>` is missing `target-dir` on **Android**
* [CB-8217](https://issues.apache.org/jira/browse/CB-8217) Fix `plugin add --link` when plugin given as relative path
* [CB-8216](https://issues.apache.org/jira/browse/CB-8216) Resolve plugin paths relative to original `CWD`
* [CB-7803](https://issues.apache.org/jira/browse/CB-7803) Allow adding any platform on any host OS
* [CB-8155](https://issues.apache.org/jira/browse/CB-8155) Do not fail plugin installation from `git url` with `--link`
* Updates `README` with description of `npm` commands for this package
* [CB-8129](https://issues.apache.org/jira/browse/CB-8129) Adds `npm run cover` command to generate tests coverage report
* [CB-8114](https://issues.apache.org/jira/browse/CB-8114) Specify a `cache-min-time` for plugins
* [CB-8190](https://issues.apache.org/jira/browse/CB-8190) Make `plugman config/cache` directory to be customizable via `PLUGMAN_HOME`
* [CB-7610](https://issues.apache.org/jira/browse/CB-7610) Fix `cordova plugin add d:\path` (or any other non-`c:` path)
* [CB-8158](https://issues.apache.org/jira/browse/CB-8158) Added `hasModule` check to browserify code
* [CB-8173](https://issues.apache.org/jira/browse/CB-8173) Point to the latest **Ubuntu** version
* [CB-8179](https://issues.apache.org/jira/browse/CB-8179) Point to the latest **WP8** version
* [CB-8158](https://issues.apache.org/jira/browse/CB-8158) Adding `symbolList` to `cordova.js`
* [CB-8154](https://issues.apache.org/jira/browse/CB-8154) Fix errors adding platforms or plugins
* `browserify`: updated require to use `symbollist`
* **Amazon** Added a type named `gradleReference` in framework
* [CB-7736](https://issues.apache.org/jira/browse/CB-7736) Update `npm` dep to promote `qs module` to 1.0
* [CB-8086](https://issues.apache.org/jira/browse/CB-8086) Prefixed subprojects with package name
* [CB-8067](https://issues.apache.org/jira/browse/CB-8067) externalized `valid-identifier` it is its own module
* Added identifier checking for app id, searches for `java+C#` reserved words
* [CB-6472](https://issues.apache.org/jira/browse/CB-6472) Adding content to `-Info.plist` - Unexpected behaviour
* [CB-8053](https://issues.apache.org/jira/browse/CB-8053) Including a project reference in a plugin fails on **Windows** platform
* Pass the `searchpath` when installing plugins
* Add a type named `gradleReference` in framework

## cordova

* [CB-6756](https://issues.apache.org/jira/browse/CB-6756) Use `cordova_lib.binname` instead of `cordova`
* [CB-8129](https://issues.apache.org/jira/browse/CB-8129) Adds `npm run cover` command to generate tests coverage report
* `searchpath` option is added to `restore`

## cordova-js

* [CB-8210](https://issues.apache.org/jira/browse/CB-8210) Use the correct plugin for `App/CoreAndroid` plugin based on platformVersion
* [CB-8210](https://issues.apache.org/jira/browse/CB-8210) **Android**: Fire events from native via message channel
* [CB-8210](https://issues.apache.org/jira/browse/CB-8210) **Android**: Add message channel for events
* [CB-8129](https://issues.apache.org/jira/browse/CB-8129) Adds `cover` grunt task to generate tests coverage report
* **Amazon** related change: `base64.toArrayBuffer` to convert `base64` strings
* [CB-8158](https://issues.apache.org/jira/browse/CB-8158) Populating `symbolList`

## plugman

* Fix broken link to **Chrome** plugins

## Pinned Platform Versions for Cordova CLI 4.2.0

* Cordova Amazon-FireOS: 3.6.3
* Cordova Android: 3.6.4
* Cordova BlackBerry10: 3.7.0
* Cordova Browser: 3.6.0
* Cordova FirefoxOS: 3.6.3
* Cordova iOS: 3.7.0
* Cordova Ubuntu: 4.0.0
* Cordova Windows: 3.7.1
* Cordova WP8: 3.7.1
