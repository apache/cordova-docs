---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-battery-status@2.0.0
* cordova-plugin-camera@4.0.0
* cordova-plugin-contacts@3.0.1
* cordova-plugin-device@2.0.0
* cordova-plugin-dialogs@2.0.0
* cordova-plugin-file@6.0.0
* cordova-plugin-geolocation@4.0.0
* cordova-plugin-globalization@1.0.9
* cordova-plugin-inappbrowser@2.0.0
* cordova-plugin-media@5.0.0
* cordova-plugin-media-capture@3.0.0
* cordova-plugin-network-information@2.0.0
* cordova-plugin-splashscreen@5.0.0
* cordova-plugin-statusbar@2.4.0
* cordova-plugin-screen-orientation@3.0.0
* cordova-plugin-vibration@3.0.0

In the recent `cordova@8` tools release, we dropped support for deprecated platforms (Ubuntu, BlackBerry10, Windows Phone 8, FirefoxOS). The main focus of this plugins release was to drop support for those platforms as well. That is why many of the plugins have had major version increases. 

`cordova-plugin-contacts` and `cordova-plugin-globalization` have officially been deprecated. Read about our decision to deprecate `cordova-plugin-contacts` at https://cordova.apache.org/news/2017/11/27/Deprecation-of-cordova-contacts-plugin.html. For `cordova-plugin-globalization`, we have written a migration guide over to the built-in [ECMA Internationalization API](https://www.ecma-international.org/ecma-402/1.0/) at https://cordova.apache.org/news/2017/11/20/migrate-from-cordova-globalization-plugin.html.

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera
    cordova plugin add cordova-plugin-camera@latest

Changes include:
<!--more-->
cordova-plugin-battery-status@2.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-camera@4.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-contacts@3.0.1
* [CB-13062](https://issues.apache.org/jira/browse/CB-13062): Deprecated this plugin. Added notice to `README.md`

cordova-plugin-device@2.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-dialogs@2.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms
* [CB-13555](https://issues.apache.org/jira/browse/CB-13555) (ios) Present notification view controller by `InAppBrowser` view controller

cordova-plugin-file@6.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-geolocation@4.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-globalization@1.0.9
* Deprecated this plugin. Read our migration guide at https://cordova.apache.org/news/2017/11/20/migrate-from-cordova-globalization-plugin.html
* Update moment.js to version `2.19.1`

cordova-plugin-inappbrowser@2.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-media@5.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-media-capture@3.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-network-information@2.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-splashscreen@5.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms

cordova-plugin-statusbar@2.4.0
* [CB-13623](https://issues.apache.org/jira/browse/CB-13623) (iOS): Remove **iOS** 6-7 code

cordova-plugin-screen-orientation@3.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms
* [CB-13405](https://issues.apache.org/jira/browse/CB-13405) (ios) undo lock when resetting
* [CB-13405](https://issues.apache.org/jira/browse/CB-13405) (ios) Screen unlock bug fix

cordova-plugin-vibration@3.0.0
* [CB-13667](https://issues.apache.org/jira/browse/CB-13667): Remove deprecated platforms
* [CB-13045](https://issues.apache.org/jira/browse/CB-13045) Removed **Android** implementation and Updated `README`
