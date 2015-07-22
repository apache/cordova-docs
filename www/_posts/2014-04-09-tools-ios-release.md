---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: April 9, 2014"
categories: news
tags: release tools ios
---
New versions of `plugman`, `cordova` and `cordova-ios` are now live!

* [plugman@0.21.0](https://www.npmjs.org/package/plugman)
* [cordova@3.4.1-0.1.0](https://www.npmjs.org/package/cordova)
* [cordova-ios@3.4.1](http://archive.apache.org/dist/cordova/platforms/ios)


To update your tools:

    npm update -g cordova
    npm update -g plugman

**Cordova iOS 3.4.1** is included with the latest update of `cordova`.

Most notable changes include:

* Update **Xcode** `.pbxproj` files according to **Xcode 5.1** recommendations
* [CB-4863](https://issues.apache.org/jira/browse/CB-4863) Drop **iOS 5.0** support
* [CB-4863](https://issues.apache.org/jira/browse/CB-4863) supporting **iOS** `arm64` by default
* [CB-6160](https://issues.apache.org/jira/browse/CB-6160) Fix `plugin add` for **FirefoxOS**.
* Fix to never remove top-level plugins that are dependencies + tests.
* [CB-6211](https://issues.apache.org/jira/browse/CB-6211) `cordova info` command fixed for **Windows** platform


Other changes include:
<!--more-->

## cordova-cli

* updated to use `cordova-iOS` 3.4.1
* [CB-6377](https://issues.apache.org/jira/browse/CB-6377) Fix up `superspawn`s `cmd` fallback when there is a space in the args
* [CB-6377](https://issues.apache.org/jira/browse/CB-6377) Remove `windowsVerbatimArguments` from `superspawn`
* [CB-6377](https://issues.apache.org/jira/browse/CB-6377) Handle spaces in paths for `cmd` related scripts
* [CB-6141](https://issues.apache.org/jira/browse/CB-6141) Fix **Windows8** tests
* [CB-6267](https://issues.apache.org/jira/browse/CB-6267) **Windows8**. Apply BackgroundColor from `config.xml`
* [CB-6338](https://issues.apache.org/jira/browse/CB-6338) Improve errors for missing templates
* [CB-6306](https://issues.apache.org/jira/browse/CB-6306) Error creating project when path to project includes spaces
* [CB-6211](https://issues.apache.org/jira/browse/CB-6211) `cordova info` command fixed for **Windows** platform
* [CB-6209](https://issues.apache.org/jira/browse/CB-6209) Uplevel changes from `android_parser` to `amazon_fireos_parser`. Added orientation related config changes from `android_parser`.
* When searchpath is specified in config and CLI, merge them.

## plugman

* [CB-6344](https://issues.apache.org/jira/browse/CB-6344) Specify after which sibling to add config-changes in `plugin.xml`
* [CB-6272](https://issues.apache.org/jira/browse/CB-6272) Fix subdir bug + tests & meta fetch with a src directory
* `src/platforms.js`: Adding **Tizen**.
* Throw an error when a `<dependency>` tag is missing `id` attribute.
* Added `org.apache.cordova.statusbar` into the registry whitelist.
* [CB-6160](https://issues.apache.org/jira/browse/CB-6160) Fix `plugin add` for **FirefoxOS**.
* Fix to never remove top-level plugins that are dependencies + tests.
* Allow `--searchpath` to have a delimiter
* [CB-5970](https://issues.apache.org/jira/browse/CB-5970) added type attribute `projectReference` to `<framework>` element to signal addition of dependent project
* Separate out adding a dependent project from adding a `.winmd` reference in **Windows8**
* [CB-6119](https://issues.apache.org/jira/browse/CB-6119) Fix `plugman info` command printing `undefined` always
* [CB-6159](https://issues.apache.org/jira/browse/CB-6159) Fix incorrect "success" message when publishing fails.

## cordova-ios

* Update **Xcode** `.pbxproj` files according to **Xcode 5.1** recommendations
* [CB-6327](https://issues.apache.org/jira/browse/CB-6327) Allow `.` in plugin feature names (and therefore callback ids)
* [CB-6287](https://issues.apache.org/jira/browse/CB-6287) Add build script support for `arm64`
* [CB-6217](https://issues.apache.org/jira/browse/CB-6217) **iOS** simulator targets not consistent across scripts
* [CB-5286](https://issues.apache.org/jira/browse/CB-5286) Fix warnings when compiled under `arm64`
* [CB-4863](https://issues.apache.org/jira/browse/CB-4863) Drop **iOS 5.0** support
* [CB-4863](https://issues.apache.org/jira/browse/CB-4863) supporting **iOS** `arm64` by default
* [CB-6150](https://issues.apache.org/jira/browse/CB-6150) `objc _msgSend` causes `EXC _BAD _ACCESS` with plugins on `arm64`
* Validate that callback IDs are always well-formed
* [CB-5018](https://issues.apache.org/jira/browse/CB-5018) `bin/create` on **iOS** should use `--arc` by default
