---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin file@4.1.1
* cordova-plugin-inappbrowser@1.3.0
* cordova-plugin-media@2.2.0
* cordova-plugin-statusbar@2.1.1
* cordova-plugin-splashscreen@3.2.0
* cordova-plugin-wkwebviewengine@1.0.2

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your media plugin:

    cordova plugin rm cordova-plugin-media --save
    cordova plugin add cordova-plugin-media@2.2.0 --save

Changes include:
<!--more-->

cordova-plugin file@4.1.1
* Edit `package.json` `license` to match SPDX id
* [CB-10419](https://issues.apache.org/jira/browse/CB-10419) cordova-plugin-file 4.0.0 error with browserify workflow

cordova-plugin-inappbrowser@1.3.0
* [CB-3360](https://issues.apache.org/jira/browse/CB-3360) Set custom inappbrowser user agent for **Android**
* [CB-10538](https://issues.apache.org/jira/browse/CB-10538) cordova-plugin-inappbrowser timeout issue
* [CB-10395](https://issues.apache.org/jira/browse/CB-10395) InAppBrowser's WebView not storing cookies reliable on **Android**
* Edit package.json license to match SPDX id
* [CB-10305](https://issues.apache.org/jira/browse/CB-10305) Gray bar appears in the wrong place on **iOS**
* [CB-7786](https://issues.apache.org/jira/browse/CB-7786) Support `mediaPlaybackRequiresUserAction` on **Android**
* [CB-7500](https://issues.apache.org/jira/browse/CB-7500) `executeScript` with callback kills/blurs inAppBrowser window on **Android**

cordova-plugin-media@2.2.0
* [CB-10476](https://issues.apache.org/jira/browse/CB-10476) Fix problem where callbacks were not invoked on **Android** due to `messageChannel` being overridden by `callbackContext` in every `execute()` call
* Edit package.json license to match SPDX id
* [CB-10455](https://issues.apache.org/jira/browse/CB-10455) **Android**: Adding permission helper to remove cordova-android 5.0.0 constraint
* [CB-57](https://issues.apache.org/jira/browse/CB-57) Updated to use `avplayer` when url starts with http:// or https:// for full streaming support
* [CB-8222](https://issues.apache.org/jira/browse/CB-8222) Background thread on play to prevent locking during initial load of media

cordova-plugin-statusbar@2.1.1
* [CB-10102](https://issues.apache.org/jira/browse/CB-10102) The `removeObserver` code was wrong and it might crash on plugin deallocation

cordova-plugin-splashscreen@3.2.0
* [CB-10422](https://issues.apache.org/jira/browse/CB-10422) Splashscreen displays black screen with no image on **Android**
* [CB-10412](https://issues.apache.org/jira/browse/CB-10412) `AutoHideSplashScreen` "false" isn't taken in account on **iOS**
* [CB-9516](https://issues.apache.org/jira/browse/CB-9516) **Android** SplashScreen - Spinner Does Not Display
* [CB-9094](https://issues.apache.org/jira/browse/CB-9094) Smarter autohide logic on **Android**
* [CB-8396](https://issues.apache.org/jira/browse/CB-8396) Add `AutoHideSplashScreen` logic to **Android**'s Splashscreen

cordova-plugin-wkwebviewengine@1.0.2
* [CB-10269](https://issues.apache.org/jira/browse/CB-10269) - Replace cordova exec only when present in wkwebview
* [CB-10202](https://issues.apache.org/jira/browse/CB-10202) - Add README quirk about WKWebview does not work with the `AllowInlineMediaPlayback` preference
