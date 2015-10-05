---
layout: post
author:
    name: Andrew Grieve
    url: https://twitter.com/GrieveAndrew
title:  "Tools Release: Jan 31, 2014"
categories: news
tags: release tools
---

It's been a long time since our last tools release, but it's certainly no sign of stagnation. Today's release is action packed!

* plugman@0.19.0
* cordova@3.3.1-0.3.1

To update your tools:

    npm update -g cordova
    npm update -g plugman

This release brings with it a plethora of bug fixes as well as some new features! Notably:

* `config.xml` now lives at the project root by default (instead of within `www/`)
* `hooks` now lives at the project root by default (instead of within `.cordova`)
* Specify a `www/` to use when creating a new project with `--link-to` or `--copy-from`
* When installing by plugin ID, tell `cordova` and `plugman` to search for plugins locally using `--searchpath`

Full list of release notes:

<!--more-->

## cordova

* [CB-5006](https://issues.apache.org/jira/browse/CB-5006) Add --searchpath to `cordova plugin add` so that installing by ID will search local paths before hitting the registry.
* [CB-4153](https://issues.apache.org/jira/browse/CB-4153) Add --copy-from & --link-to to `cordova create`.
* [CB-5687](https://issues.apache.org/jira/browse/CB-5687) Make cordova commands work when CWD is inside of a symlink'ed `www/`
* [CB-4910](https://issues.apache.org/jira/browse/CB-4910) Default `config.xml` to the root instead of within `www/`
* [CB-5764](https://issues.apache.org/jira/browse/CB-5764) Move `hooks/` to top-level instead of under `.cordova`
* [CB-5763](https://issues.apache.org/jira/browse/CB-5763) Don't create `.cordova/` by default
* [CB-4871](https://issues.apache.org/jira/browse/CB-4871) Reduced package size significantly.
* [CB-4976](https://issues.apache.org/jira/browse/CB-4976) Don't add cache entries for local platforms.
* [CB-5777](https://issues.apache.org/jira/browse/CB-5777) Fix `cordova platform update` not updating `cordova.js`.
* [CB-5728](https://issues.apache.org/jira/browse/CB-5728) Files in merges must remain intact when removing platform.
* [CB-5493](https://issues.apache.org/jira/browse/CB-5493) lazy_load now downloads to a temp dir and then moves.
* [CB-5782](https://issues.apache.org/jira/browse/CB-5782) Hide stack trace for explicitly handled error conditions
* [CB-5590](https://issues.apache.org/jira/browse/CB-5590) Have config.xml version map to CFBundleShortVersionString instead of CFBundleVersion
* [CB-5913](https://issues.apache.org/jira/browse/CB-5913) Fail more gracefully on Windows when symlinks fail.
* Fix isWindows check in util.js to support win64
* [CB-5907](https://issues.apache.org/jira/browse/CB-5907) Make `cordova update` get version from platform's version script
* [CB-3612](https://issues.apache.org/jira/browse/CB-3612) Don't pass --device to "run" command by default.
* [CB-5299](https://issues.apache.org/jira/browse/CB-5299) Cache pbxproj to avoid re-parsing it for each plugin.
* [CB-5813](https://issues.apache.org/jira/browse/CB-5813) Fix missing quotes on update and ls commands
* [CB-5808](https://issues.apache.org/jira/browse/CB-5808) Fix lazy_load stripping off windows drive letters
* Expose util.isCordova as cordova.findProjectRoot()
* Allow lazy_load libs to work without an id and version for local paths.

## plugman

* [CB-5770](https://issues.apache.org/jira/browse/CB-5770) Plugman prepare script content wrapping no longer allows ending parens/braces to be commented out from end of line comment
* [CB-4871](https://issues.apache.org/jira/browse/CB-4871) Reduced package size significantly
* [CB-5720](https://issues.apache.org/jira/browse/CB-5720) Allow `<resource-file>` on Android
* [CB-5006](https://issues.apache.org/jira/browse/CB-5006) Add --searchpath option for local plugin search path
* [CB-5701](https://issues.apache.org/jira/browse/CB-5701) Reference custom frameworks using relative paths
* [CB-5495](https://issues.apache.org/jira/browse/CB-5495), [CB-5568](https://issues.apache.org/jira/browse/CB-5568) Fix config.xml path for iOS
* [CB-5804](https://issues.apache.org/jira/browse/CB-5804) Added repo & issue information into `plugman publish`

