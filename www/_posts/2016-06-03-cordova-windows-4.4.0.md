---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Apache Cordova Windows 4.4.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.4.0` has been released!

This release adds some significant improvements, such as increased 'prepare' performance due to new 'incremental prepare' feature,
embedded splashscreen plugin support and others. See below for full list of changes.

The next Cordova CLI version will automatically start using this version of **Cordova-Windows** when creating new projects.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.4.0

To add it explicitly:

    cordova platform add windows@4.4.0

<!--more-->
## What's new in Windows platform

* [CB-11117](https://issues.apache.org/jira/browse/CB-11117) Optimize prepare for windows platform, clean prepared files
* [CB-11259](https://issues.apache.org/jira/browse/CB-11259) Improving build output
* [CB-11204](https://issues.apache.org/jira/browse/CB-11204) Catch when SDK not present on build and give appropriate error message
* [CB-11156](https://issues.apache.org/jira/browse/CB-11156) Change default FadeSplashScreenDuration value
* [CB-11176](https://issues.apache.org/jira/browse/CB-11176) Fix windows-splashscreen compatibility with older plugin versions
* [CB-11139](https://issues.apache.org/jira/browse/CB-11139) Use PluginManager from common to install/uninstall plugins
* [CB-10653](https://issues.apache.org/jira/browse/CB-10653) Making the windows activation context complete
* [CB-11150](https://issues.apache.org/jira/browse/CB-11150) CI Error - Windows Platform - Could not find XHR config file
* [CB-8056](https://issues.apache.org/jira/browse/CB-8056) Implement splashscreen for Windows platform
* [CB-11066](https://issues.apache.org/jira/browse/CB-11066) Remove uap prefixed capabilities along with regular ones
* [CB-11022](https://issues.apache.org/jira/browse/CB-11022) Duplicate www files on plugin installation
* [CB-10964](https://issues.apache.org/jira/browse/CB-10964) Handle build.json file starting with a BOM. This closes #166
* [CB-11024](https://issues.apache.org/jira/browse/CB-11024): Add preference to set the min UAP target version in the JSProj File
