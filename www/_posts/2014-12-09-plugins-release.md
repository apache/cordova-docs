---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: December 9, 2014"
categories: news
tags: release plugins
---
The following plugins were updated today:

* org.apache.cordova.battery-status@0.2.12
* org.apache.cordova.camera@0.3.4
* org.apache.cordova.console@0.2.12
* org.apache.cordova.contacts@0.2.15
* org.apache.cordova.device@0.2.13
* org.apache.cordova.device-motion@0.2.11
* org.apache.cordova.device-orientation@0.3.10
* org.apache.cordova.dialogs@0.2.11
* org.apache.cordova.file@1.3.2
* org.apache.cordova.file-transfer@0.4.8
* org.apache.cordova.geolocation@0.3.11
* org.apache.cordova.globalization@0.3.3
* org.apache.cordova.inappbrowser@0.5.4
* org.apache.cordova.media@0.2.15
* org.apache.cordova.media-capture@0.3.5
* org.apache.cordova.network-information@0.2.14
* org.apache.cordova.splashscreen@0.3.5
* org.apache.cordova.statusbar@0.1.9
* org.apache.cordova.vibration@0.3.12

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

----
You can update any plugin by removing it, and then readding it. E.g. To update your camera plugin:

    cordova plugin rm org.apache.cordova.camera
    cordova plugin add org.apache.cordova.camera

Changes include:
<!--more-->

org.apache.cordova.battery-status@0.2.12

* [CB-7976](https://issues.apache.org/jira/browse/CB-7976) **Android** Use webView's context rather than Activity's context for intent receiver

org.apache.cordova.camera@0.3.4

* **iOS** Fix memory leak of image data in `imagePickerControllerReturnImageResult`
* **Android** Pass uri to crop instead of pulling the low resolution image out of the intent return
* **Android** Add orientation support for PNG to Android

org.apache.cordova.contacts@0.2.15

* [CB-7131](https://issues.apache.org/jira/browse/CB-7131) **Android** Check for profile photo existance
* [CB-7896](https://issues.apache.org/jira/browse/CB-7896) Better way to detect **Windows** and **WindowsPhone8.1**
* [CB-7772](https://issues.apache.org/jira/browse/CB-7772) **iOS** Cancelling `pickContact` should call the error callback, not the success callback
* [CB-7761](https://issues.apache.org/jira/browse/CB-7761) Misleading text in documentation
* [CB-7762](https://issues.apache.org/jira/browse/CB-7762) Parameter list is incorrect for `contacts.find`

org.apache.cordova.device@0.2.13

* **Browser** Changing `device.platform` to always report the platform as "browser".
* [CB-5892](https://issues.apache.org/jira/browse/CB-5892) **iOS** Remove deprecated `window.Settings`

org.apache.cordova.device-motion@0.2.11

* [CB-8083](https://issues.apache.org/jira/browse/CB-8083) Fix `accelerometer` callback on **Windows**
* Renamed **Windows8** -> **Windows**

org.apache.cordova.dialogs@0.2.11

* [CB-7737](https://issues.apache.org/jira/browse/CB-7737) **Windows Phone** Lower min height for `alert`
* [CB-8038](https://issues.apache.org/jira/browse/CB-8038) Backslash getting escaped twice in **BlackBerry 10**
* [CB-7639](https://issues.apache.org/jira/browse/CB-7639) Update docs + manual tests
* [CB-7639](https://issues.apache.org/jira/browse/CB-7639) **Windows 8** Revert back `isAlertShowing` flag in case of exception to prevent queuing of future dialogs.
* [CB-7639](https://issues.apache.org/jira/browse/CB-7639) Handle button labels as array on windows
* **Android** Check for `setTextDirection` API level
* **Android** Make spinner dialog to use `THEME_DEVICE_DEFAULT_LIGHT` (same as the other dialogs)
* **Android** Unbreak `API` level < `14`
* [CB-7414](https://issues.apache.org/jira/browse/CB-7414) **BlackBerry 10** Document callback parameter for `navigator.notification.alert`

org.apache.cordova.file@1.3.2

* **Android** Get rid of thread block error
* [CB-7602](https://issues.apache.org/jira/browse/CB-7602) **Android** Fix `isCopyOnItself` logic
* Use one proxy for both **Windows** and **Windows8** platforms
* [CB-6994](https://issues.apache.org/jira/browse/CB-6994) **Windows** Fixes result, returned by proxy's write method
* **Firefox OS** Update `__format__` to match `pathsPrefix`
* [CB-6994](https://issues.apache.org/jira/browse/CB-6994) **Windows** Improves merged code to be able to write a File
* Optimize `FileProxy` for **Windows** platforms
* Synchronize changes with **Windows** platform
* Fix function `write` for big files on **Windows 8**
* **iOS** Write file in background
* [CB-7487](https://issues.apache.org/jira/browse/CB-7487) **Android** Broadcast file write. This allows *MTP USB* shares to show the file immediately without reboot/manual refresh using 3rd party app.

org.apache.cordova.file-transfer@0.4.8

* [CB-8021](https://issues.apache.org/jira/browse/CB-8021) Adds documentation for `httpMethod` to `doc/index.md`.

org.apache.cordova.geolocation@0.3.11

* **iOS** Do not stop updating location when the error is `kCLErrorLocationUnknown`
* [CB-8094](https://issues.apache.org/jira/browse/CB-8094) Pended auto tests for **Windows** Store since they require user interaction
* [CB-8085](https://issues.apache.org/jira/browse/CB-8085) Fix geolocation plugin on **Windows**

org.apache.cordova.globalization@0.3.3

* [CB-7766](https://issues.apache.org/jira/browse/CB-7766) Add quirk note about **Android** `dateToString`
* **Firefox OS** `getDateNames` should return (*Sun* ... *Sat*) in all locales
* **Firefox OS** `getFirstDayOfWeek` should return `1` for *Sunday* and `2` for *Monday*

org.apache.cordova.inappbrowser@0.5.4

* [CB-7784](https://issues.apache.org/jira/browse/CB-7784) **Windows** Exit event is not fired after `InAppBrowser` closing
* [CB-7697](https://issues.apache.org/jira/browse/CB-7697) Add `locationBar` support to `InAppBrowser` **Windows** platform version
* [CB-7690](https://issues.apache.org/jira/browse/CB-7690) **Windows** `InAppBrowser` `loadstart`/`loadstop` events issues
* [CB-7695](https://issues.apache.org/jira/browse/CB-7695) Fix `InAppBrowser` `injectScriptFile` for **Windows 8.1** / **Windows Phone 8.1**
* [CB-7692](https://issues.apache.org/jira/browse/CB-7692) **Windows 8.1** `InAppBrowser` local url opening bug in 8.1
* [CB-7688](https://issues.apache.org/jira/browse/CB-7688) `Alert` is not supported in `InAppBrowser` on **Windows** platform
* [CB-7712](https://issues.apache.org/jira/browse/CB-7712) **Android** Remove references to `closebuttoncaption`
* [CB-7850](https://issues.apache.org/jira/browse/CB-7850) Clarify role of whitelist
* [CB-7720](https://issues.apache.org/jira/browse/CB-7720) Check if event is null since OK string from success callback was removed

org.apache.cordova.media@0.2.15

* [CB-6153](https://issues.apache.org/jira/browse/CB-6153) **Android** Add docs for volume control behaviour, and fix controls not being reset on page navigation
* [CB-6153](https://issues.apache.org/jira/browse/CB-6153) **Android** Make volume buttons control music stream while any audio players are created

org.apache.cordova.media-capture@0.3.5

* [CB-7597](https://issues.apache.org/jira/browse/CB-7597) **iOS** `Localizable.strings` for Media Capture are in the default template, it should be in the plugin

org.apache.cordova.network-information@0.2.14

* [CB-7976](https://issues.apache.org/jira/browse/CB-7976) **Android** Use webView's context rather than Activity's context for intent receiver

org.apache.cordova.splashscreen@0.3.5

* [CB-7204](https://issues.apache.org/jira/browse/CB-7204) **iOS** Race condition when hiding and showing spinner

org.apache.cordova.statusbar@0.1.9

* **Android** Fix onload attribute within `<feature>` to be a `<param>`
* [CB-8010](https://issues.apache.org/jira/browse/CB-8010) Statusbar colour does not change to orange
* **Windows** Added checks for running on windows when StatusBar is NOT available
* [CB-7986](https://issues.apache.org/jira/browse/CB-7986) Add support for **Windows Phone 8.1**
* [CB-7549](https://issues.apache.org/jira/browse/CB-7549) (Re-fix) `StatusBar` **iOS 8** Landscape issue

org.apache.cordova.vibration@0.3.12

* [CB-8018](https://issues.apache.org/jira/browse/CB-8018) Add `vibrate(pattern)` fallback on vibrate for **Windows Phone 8**
