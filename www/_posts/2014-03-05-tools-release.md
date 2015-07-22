---
layout: post
author:
    name: Andrew Grieve
    url: https://twitter.com/GrieveAndrew
title:  "Tools Release: March 5, 2014"
categories: news
tags: release tools
---
New versions of `plugman` and `cordova` are now live!

* [plugman@0.20.2](https://www.npmjs.org/package/plugman)
* [cordova@3.4.0-0.1.3](https://www.npmjs.org/package/cordova)

To update your tools:

    npm update -g cordova
    npm update -g plugman

Most notable changes include:

* New command `plugman create` for generating a plugin template (CB-4886)
* No longer necessary to run `cordova prepare` after installing a plugin (CB-5647)
* `cordova` now shows output of builds and hook scripts
* Installing multiple plugins at once is now faster (CB-5885)

Other changes include:
<!--more-->

## cordova

* Speed up prepare by using plugman's new `reapply_global_munge()` (CB-5299) 
* Make "Generating config.xml from defaults" a verbose log (CB-6076) 
* Use spawn helper for all sub-shelling. (CB-5181) 
* Enable stdio for build sub-commands and hooks (CB-6049, [CB-5181](https://issues.apache.org/jira/browse/CB-5181)) 

## plugman

* Move `<assets>` copying from install to prepare (CB-5647) 
* Include platform tag information when publishing plugins (CB-5804) 
* Logging tweaks to be less verbose (CB-6076) 
* Accept proxy config for plugman (CB-5017) 
* Add `<resource-file>` support on Android (CB-5720) 
* config-changes.js: Major refactor & introduced `reapply_global_munge()`
* FFOS: Look for `config.xml` in `www_dir` and in `project_dir` (CB-6088) 
* iOS: Do not add static libraries (.a) to source files (CB-6025) 
* Win8/WP: Added SDKReference support via `<lib-file>` tags
* Win8/WP: Remove ability to add .dll as content - it should be a framework/reference
* Win8/WP: Added ability to add+remove ref to .winmd files

