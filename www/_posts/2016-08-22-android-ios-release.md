---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Android 5.2.2 & Cordova iOS 4.2.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce patch releases for`Cordova Android 5.2.2` & `Cordova iOS 4.2.1` have been released! We have also updated and released `Cordova Common 1.4.1`.

These release fixes issues with the new `edit-config` functionality in `plugin.xml`. Read more about `edit-config` at [http://cordova.apache.org/docs/en/latest/plugin_ref/spec.html#edit-config](http://cordova.apache.org/docs/en/latest/plugin_ref/spec.html#edit-config).

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@5.2.2
    cordova platform rm ios
    cordova platform add ios@4.2.1

To add it explicitly:

    cordova platform add android@5.2.2
    cordova platform add ios@4.2.1

<!--more-->
## What's new in Android

* [CB-11615](https://issues.apache.org/jira/browse/CB-11615) updated `cordova-common` to `^1.4.0`

## What's new in iOS

* [CB-11627](https://issues.apache.org/jira/browse/CB-11627) updated `CDVAvailability.h` with new version
* [CB-11627](https://issues.apache.org/jira/browse/CB-11627) added missing license header
* [CB-11627](https://issues.apache.org/jira/browse/CB-11627) Updated checked-in `node_modules`
* [CB-9371](https://issues.apache.org/jira/browse/CB-9371) Fix how prepare handles orientation on **ios**
* [CB-11431](https://issues.apache.org/jira/browse/CB-11431) Document ways to update delegates, preferences and script message handlers in `WebViewEngines`
* [CB-11475](https://issues.apache.org/jira/browse/CB-11475) Ignore unsupported 60x60 icon
* [CB-11426](https://issues.apache.org/jira/browse/CB-11426) Hardcoded path should not be in tests project.

## Cordova Common Changes

* Added general purpose `ConfigParser.getAttribute` API
* [CB-11653](https://issues.apache.org/jira/browse/CB-11653) moved `findProjectRoot` from `cordova-lib` to `cordova-common`
* [CB-11636](https://issues.apache.org/jira/browse/CB-11636) Handle attributes with quotes correctly
* [CB-11645](https://issues.apache.org/jira/browse/CB-11645) added check to see if `getEditConfig` exists before trying to use it
* [CB-9825](https://issues.apache.org/jira/browse/CB-9825) framework tag spec parsing
