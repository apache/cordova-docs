---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Android 5.1.1"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 5.1.1` has been released.

Cordova CLI 6.0.0 will automatically start using this version of **Cordova-Android** when creating new projects. 

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@5.1.1

To add it explicitly:

    cordova platform add android@5.1.1

<!--more-->
## What's new in Android platform

* updated `cordova-common` dependenecy to `1.1.0`
* [CB-10628](https://issues.apache.org/jira/browse/CB-10628) Fix `emulate android --target`
* [CB-10618](https://issues.apache.org/jira/browse/CB-10618) Handle gradle frameworks on plugin installation/uninstallation
* [CB-10510](https://issues.apache.org/jira/browse/CB-10510): Add an optional timeout to `emu` start script
* [CB-10498](https://issues.apache.org/jira/browse/CB-10498): Resume event should be sticky if it has a plugin result
* fix `HtmlNotFoundTest` so that it passes when file not found is handled correctly
* [CB-10472](https://issues.apache.org/jira/browse/CB-10472) `NullPointerException`: `org.apache.cordova.PluginManager.onSaveInstanceState` check if `pluginManager` is `null` before using it
* [CB-10138](https://issues.apache.org/jira/browse/CB-10138) Adds missing plugin metadata to `plugin_list` module.
* [CB-10443](https://issues.apache.org/jira/browse/CB-10443) Pass original options instead of remaining
* [CB-10443](https://issues.apache.org/jira/browse/CB-10443) Fix `this.root` `null` reference
* [CB-10421](https://issues.apache.org/jira/browse/CB-10421) Fixes exception when calling run script with `--help` option
* [CB-10406](https://issues.apache.org/jira/browse/CB-10406) Fixes an exception, thrown when building using `Ant`. 
* [CB-10157](https://issues.apache.org/jira/browse/CB-10157) Uninstall app from device/emulator only when signed apk is already installed
