---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Apache Cordova Windows 4.3.2"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.3.2` has been released!

This release fixes a number of bugs including an issue when some of `config-file` changes were not applied to appxmanifest files
and the bug with omitted icons, specified using `target` attribute (see [icons guide](http://cordova.apache.org/docs/en/latest/config_ref/images.html#windows)
for `target` attribute usage). See below for full list of changes.

Cordova CLI 6.1.1 will automatically start using this version of **Cordova-Windows** when creating new projects.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.3.2

To add it explicitly:

    cordova platform add windows@4.3.2

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guide](http://cordova.apache.org/docs/en/dev/guide/platforms/win8/upgrade.html).

<!--more-->
## What's new in Windows platform

* [CB-10622](https://issues.apache.org/jira/browse/CB-10622) Upgrade cordova-common to work with 'target'-defined icons
* [CB-10927](https://issues.apache.org/jira/browse/CB-10927) Framework references in plugin.xml file prevent Windows Universal projects from being used on other machines
* [CB-10845](https://issues.apache.org/jira/browse/CB-10845) Invalidate manifest cache in prepare
* [CB-10714](https://issues.apache.org/jira/browse/CB-10714) Ignore case for --archs
* [CB-10138](https://issues.apache.org/jira/browse/CB-10138) Adds missing plugin metadata to plugin_list module for Windows
