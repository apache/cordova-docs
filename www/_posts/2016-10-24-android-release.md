---
layout: post
author:
    name: Joe Bowser
    url: https://twitter.com/infil00p
title:  "Cordova Android 6.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce a major release for`Cordova Android 6.0.0` has been released! 

Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.0.0

To add it explicitly:

    cordova platform add android@6.0.0

<!--more-->
## What's new in Android

This release adds significant functionality, and also introduces a number
of breaking changes.  Some of the changes to the code base will be of
particular interest to third party webview plugin developers.

#### Major Changes ####
* Primary bridge is the `EVAL_BRIDGE`, which tells the WebView to execute JS directly.  This is more stable than the `ONLINE_EVENT` bridge
* Full Support for `Android Nougat (API 24)`
* `Ice Cream Sandwich Support` has been **deprecated**.  Minimum Supported **Android** Version is `Jellybean (API 16/ Android 4.1)`
* Plugin Installation now **CLEANS** the build directory, this speeds up gradle build times and allows for CLI develoment to be more predictable

Changes For Third-Party `WebView` Developers:
* `executeJavascript` method added and is an abstract method that must be implemented
* the `EVAL_BRIDGE` must be added to the `WebView`


#### Curated Changes from the Git Commit Logs, check release notes for a more complete list ####
* [CB-11083](https://issues.apache.org/jira/browse/CB-11083): Fix to deal with custom frameworks with their own `Gradle` configuration
* [CB-8722](https://issues.apache.org/jira/browse/CB-8722): Move icons from drawable to `mipmap`
* [CB-11964](https://issues.apache.org/jira/browse/CB-11964): Call clean after plugin install and mock it in tests
* [CB-11935](https://issues.apache.org/jira/browse/CB-11935): Does a best-effort attempt to pause any processing that can be paused safely, such as animations and geolocation.
* [CB-11640](https://issues.apache.org/jira/browse/CB-11640):  Changing requirements check to ask for **Java 8**
* [CB-11907](https://issues.apahce.org/jira/browse/CB-11907): Bumping Gradle to work with **Android Studio 2.2** and the **Android Gradle Plugin**
* [CB-11078](https://issues.apahce.org/jira/browse/CB-11907): Empty string for `BackgroundColor` preference crashes application.
