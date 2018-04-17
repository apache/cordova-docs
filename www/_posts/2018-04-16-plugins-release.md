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

* cordova-pluin-vibration@3.1.0
* cordova-plugin-statusbar@2.4.2
* cordova-plugin-media-capture@3.0.2
* cordova-plugin-inappbrowser@3.0.0
* cordova-plugin-globalization@1.11.0
* cordova-plugin-device@2.0.2
* cordova-plugin-camera@4.0.3
* cordova-plugin-battery-status@2.0.2
* cordova-plugin-device-motion@2.0.1
* cordova-plugin-device-orientation@2.0.1

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera
    cordova plugin add cordova-plugin-camera@latest

Changes include:
<!--more-->
cordova-plugin-camera@4.0.2
* [CB-12593](https://issues.apache.org/jira/browse/CB-12593) **Android** Fix potential `FileProvider` conflicts
* Fix a mistake in the examples of usage descriptions (#313)
* [CB-13854](https://issues.apache.org/jira/browse/CB-13854): fix Camera opens in portrait orientation on iphones
* [CB-13415](https://issues.apache.org/jira/browse/CB-13415) **Android** Importing corrupt images using the Camera plugin crashes the app

cordova-plugin-vibration@3.1.0
* [CB-14022](https://issues.apache.org/jira/browse/CB-14022) documented **Android** quirk with vibration
* [CB-13892](https://issues.apache.org/jira/browse/CB-13892): Remove `navigator.notification`

cordova-plugin-statusbar@2.4.2
* [CB-12679](https://issues.apache.org/jira/browse/CB-12679) Remove Permissions section

cordova-plugin-media-capture@3.0.2
* [CB-13866](https://issues.apache.org/jira/browse/CB-13866): **iOS** fix Camera opens in portrait orientation on iphones

cordova-plugin-inappbrowser@3.0.0
* [CB-13659](https://issues.apache.org/jira/browse/CB-13659) **iOS** Add hidespinner option
* In file `AppBrowser.java`: New code within `shouldOverrideUrlLoading()` to check for whitelisting custom schemes via a new `AllowedSchemes` preference configuration item.  Allows custom schemes like `mycoolapp://` or `wevotetwitterscheme://`
* `InAppBrowser.java`: New method `isURLWhileListed` to check for whitelisting of `AllowedSchemes` in a new preference configuration item. There is a new check in `shouldOverrideUrlLoading`, to allow whitelisted custom schemes like "mycoolapp://"
* Add customisation of the navigation buttons for **iOS**
* Fix navigation buttons on **iOS**

cordova-plugin-globalization@1.11.0
* Updating `moment.js` to version 2.20.1 (#64)

cordova-plugin-device@2.0.2
* [CB-13893](https://issues.apache.org/jira/browse/CB-13893) **iOS** delete `libz.tbd` from device plugin

cordova-plugin-battery-status@2.0.2
* [CB-10645](https://issues.apache.org/jira/browse/CB-10645) The battery status handler doesn't reinitialize on **Android** after `window.location.reload()`. Instead of throwing an error, rather remove the status handler and re-initialize.

cordova-plugin-device-motion@2.0.1
* [CB-14001](https://issues.apache.org/jira/browse/CB-14001): Fix `cordovaDependencies` to allow plugin install

cordova-plugin-device-orientation@2.0.1
* [CB-14001](https://issues.apache.org/jira/browse/CB-14001): Fix `cordovaDependencies` to allow plugin install

