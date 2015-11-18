---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Apache Cordova Windows &amp; Windows Phone 3.7.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows & WP8 3.7.0` has been released!

This release has various bug fixes.

It will be available in the next cordova-cli release (Cordova CLI 4.1.0), which is expected in a few days.

To upgrade (once CLI update is released):

    npm install -g cordova
    cd my_project
    cordova platform update windows

To add it explicitly (available now):

    cordova platform add windows@3.7.0
    cordova platform add wp8@3.7.0



For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->

## What's new in Windows

* [CB-7731](https://issues.apache.org/jira/browse/CB-7731) Catch cli missing args error
* [CB-7493](https://issues.apache.org/jira/browse/CB-7493) Adds `space-in-path` and `unicode in name` tests for CI
* [CB-7656](https://issues.apache.org/jira/browse/CB-7656) Fixes `list-devices` and `list-emulators` commands
* Fixes `msbuild` failure after **Windows** project creation
* [CB-7617](https://issues.apache.org/jira/browse/CB-7617) Add partial match support for `--target`
* [CB-7666](https://issues.apache.org/jira/browse/CB-7666) Merge `node_modules` and move to package root
* [CB-7666](https://issues.apache.org/jira/browse/CB-7666) Move stuff outside of **Windows** subdir
* [CB-7617](https://issues.apache.org/jira/browse/CB-7617) Deploy on WP8.1 incorrectly handles `--target` name
* [CB-7601](https://issues.apache.org/jira/browse/CB-7601) Build fails due to capabilities with m: prefixes are incorrectly sorted
* [CB-7520](https://issues.apache.org/jira/browse/CB-7520) copy MRT images defined in config.xml
* [CB-7520](https://issues.apache.org/jira/browse/CB-7520) `.appxbundle` package format support
* [CB-7520](https://issues.apache.org/jira/browse/CB-7520) Refine image names, use wildcard to include MRT images
* [CB-7494](https://issues.apache.org/jira/browse/CB-7494) Fixes wrong replacements in `*.appxmanifest` files
* [CB-7452](https://issues.apache.org/jira/browse/CB-7452) Rewrite `ApplyPlatformConfig.ps1` using **NodeJS**
* [CB-7377](https://issues.apache.org/jira/browse/CB-7377) Removes unnecessary rules tracing which is also incorrectly handled by **PS**

## What's new in WP8

* [CB-7843](https://issues.apache.org/jira/browse/CB-7843) Fix angular routing on **WP8**
* [CB-7616](https://issues.apache.org/jira/browse/CB-7616) Add partial match support for `--target`
* Let `CordovaView` respect `DisallowOverscroll` preference
* Optionally supress inertia scrolling
* [CB-7618](https://issues.apache.org/jira/browse/CB-7618) Fix **WP8** build due to missing `node_modules`
* [CB-7616](https://issues.apache.org/jira/browse/CB-7616) Deploy on **WP8** fails to run specific target
* [CB-7493](https://issues.apache.org/jira/browse/CB-7493) Adds `space-in-path` and `unicode in name` tests for `CI`
