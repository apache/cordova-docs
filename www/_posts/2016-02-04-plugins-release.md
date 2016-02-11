---
layout: post
author:
    name: Sergey Grebnov
    url: https://twitter.com/sgrebnov
title:  "cordova-plugin-inappbrowser Plugin Release"
categories: news
tags: release plugins
---

An important regression issue was discovered for `cordova-plugin-inappbrowser` version `1.2.0`.
We are releasing version `1.2.1` of `cordova-plugin-inappbrowser` to address
[CB-10407](https://issues.apache.org/jira/browse/CB-10407): InAppBrowser not firing `loadstart` event on **Android**. This release also includes some other improvements for **Android**, **iOS** and **Windows** platforms.

----
You can update the plugin by removing it, and then re-adding it.

    cordova plugin rm cordova-plugin-inappbrowser --save
    cordova plugin add cordova-plugin-inappbrowser --save

Changes include:
<!--more-->

cordova-plugin-inappbrowser@1.2.1
* [CB-10407](https://issues.apache.org/jira/browse/CB-10407) InAppBrowser not firing `loadstart` event on **android**
* [CB-10428](https://issues.apache.org/jira/browse/CB-10428) Fix syntax error when browserifying inAppBrowser plugin
* handle app store urls in system browser on **iOS**
* [CB-6702](https://issues.apache.org/jira/browse/CB-6702) InAppBrowser hangs when opening more than one instance on **Android**
* [CB-10456](https://issues.apache.org/jira/browse/CB-10456) InAppBrowser is not closed if I close it programmatically on **Android**
* [CB-10451](https://issues.apache.org/jira/browse/CB-10451) InAppBrowser: `loadstart` event is not triggered on **Windows**
* [CB-10452](https://issues.apache.org/jira/browse/CB-10452) InAppBrowser: `exit` event is not triggered on **Windows**
* [CB-10454](https://issues.apache.org/jira/browse/CB-10454) InAppBrowser: `loaderror` event does not have code and message on **Windows**
* [CB-10450](https://issues.apache.org/jira/browse/CB-10450) InAppBrowser: Unable to get property canGoBack of undefined on **Windows**
* [CB-10441](https://issues.apache.org/jira/browse/CB-10441) Add auto tests for InAppBrowser plugin
