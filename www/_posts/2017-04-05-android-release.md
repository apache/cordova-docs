---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Android 6.2.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 6.2.1` has been released! 

This release has fixed issues introduced by the **Android SDK Tools 25.3.1** release. **Google** dropped support for the `android` binary, so `cordova-android` has now adopted support for the `avdmanager` and `sdkmanager` binaries. We have also taken the opportunity to rewrite how we use gradle on the user's system. `cordova-android` now requires *Android Studio* or *Gradle* to be installed on the user's system. 

This release also adds support for the `<resource-file>` element in `config.xml` which copies specified files during a `cordova prepare`. This allows providing arbitrary files such as special notification-sized icons, or API configuration JSON files. 

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@6.2.1

To add it explicitly:

    cordova platform add android@6.2.1

This release will have to be explicitly added until the upcoming `cordova@7` release, where it will be pinned as the default android platform.

<!--more-->
## What's new in Android
* [CB-12621](https://issues.apache.org/jira/browse/CB-12621) reverted `elementtree` dep to `0.1.6`
* [CB-12614](https://issues.apache.org/jira/browse/CB-12614) Adding headers to tests
* [CB-8978](https://issues.apache.org/jira/browse/CB-8978) Prepare copy `resource-files` from `config.xml`
* [CB-12605](https://issues.apache.org/jira/browse/CB-12605) Fix a requirements check failure on **Windows**
* [CB-12595](https://issues.apache.org/jira/browse/CB-12595) This should find an **Android Studio** installation and use the sweet gradle center found inside
* [CB-12546](https://issues.apache.org/jira/browse/CB-12546) leverage `avdmanager` if `android` warns it is no longer useful, which happens in **Android SDK Tools 25.3.1**. Explicitly set the `CWD` of the spawned emulator process to workaround a recent google android sdk bug. Actually include the `android_sdk_version.bat` file in generated `cordova-android` projects for our lovely **Windows** users.
* [CB-12524](https://issues.apache.org/jira/browse/CB-12524) Fix for missing gradle template error. This now fetches the template from inside of the **Android Studio** directory, and falls back to a locally installed Gradle instance
* [CB-12465](https://issues.apache.org/jira/browse/CB-12465) Writing new JUnit Test Instrumentation to replace tests and retire problematic tests

