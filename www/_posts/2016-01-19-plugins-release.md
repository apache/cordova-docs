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

* cordova-plugin-camera@2.1.0
* cordova-plugin-contacts@2.0.1
* cordova-plugin-device@1.1.1
* cordova-plugin-file@4.1.0
* cordova-plugin-file-transfer@1.5.0
* cordova-plugin-geolocation@2.1.0
* cordova-plugin-inappbrowser@1.2.0
* cordova-plugin-media@2.1.0
* cordova-plugin-media-capture@1.2.0
* cordova-plugin-network-information@1.2.0
* cordova-plugin-splashscreen@3.1.0
* cordova-plugin-statusbar@2.1.0
* cordova-plugin-test-framework@1.1.1
* cordova-plugin-vibration@2.1.0
* cordova-plugin-whitelist@1.2.1

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera --save

Changes include:
<!--more-->

cordova-plugin-camera@2.1.0
* added `.ratignore`
* [CB-10319](https://issues.apache.org/jira/browse/CB-10319) **Android** Adding reflective helper methods for permission requests
* [CB-9189](https://issues.apache.org/jira/browse/CB-9189) **Android** Implementing `save/restore` API to handle Activity destruction
* [CB-10241](https://issues.apache.org/jira/browse/CB-10241) App Crash cause by Camera Plugin **iOS 7**
* [CB-8940](https://issues.apache.org/jira/browse/CB-8940) Setting `z-index` values to maximum for UI buttons.

cordova-plugin-contacts@2.0.1
* [CB-10159](https://issues.apache.org/jira/browse/CB-10159) **Android** Adding restore callback to handle Activity destruction
* [CB-10319](https://issues.apache.org/jira/browse/CB-10319) **Android** Adding reflective helper methods for permission requests
* [CB-10117](https://issues.apache.org/jira/browse/CB-10117) Added new tests
* [CB-10131](https://issues.apache.org/jira/browse/CB-10131) Fixed null contact creation.
* [CB-10053](https://issues.apache.org/jira/browse/CB-10053) Documents `ContactFieldType` enumeration. 
* [CB-10148](https://issues.apache.org/jira/browse/CB-10148) **Android** Added `READ_CONTACTS` permission request when picking a contact
* [CB-10053](https://issues.apache.org/jira/browse/CB-10053) Accept assets `URIs` for contact photos
* [CB-8115](https://issues.apache.org/jira/browse/CB-8115) Save contact birthday properly
* [CB-6979](https://issues.apache.org/jira/browse/CB-6979) Don't create duplicates for extracted contacts photos
* [CB-5308](https://issues.apache.org/jira/browse/CB-5308) Makes contacts save specs passing
* [CB-5308](https://issues.apache.org/jira/browse/CB-5308) Return `rawId` instead of id when modifying existing contact
* [CB-4921](https://issues.apache.org/jira/browse/CB-4921) Corrects examples by adding missing `multiple` option where multiple contacts are expected
* [CB-10094](https://issues.apache.org/jira/browse/CB-10094) **Android** Fixed empty string comparison
* [CB-3950](https://issues.apache.org/jira/browse/CB-3950) Adds support for custom labels
* [CB-9770](https://issues.apache.org/jira/browse/CB-9770) Request user permissions before picking a contact
* [CB-8156](https://issues.apache.org/jira/browse/CB-8156) Call error callback on `pickContact` cancellation
* [CB-7906](https://issues.apache.org/jira/browse/CB-7906) Prevent app crash when `desiredFields` option has undefined items
* [CB-7021](https://issues.apache.org/jira/browse/CB-7021) Adds manual test for `pickContact`

cordova-plugin-device@1.1.1
* [CB-10238](https://issues.apache.org/jira/browse/CB-10238) **OSX** Move `device-plugin` out from `cordovalib` to the plugin repository
* [CB-9923](https://issues.apache.org/jira/browse/CB-9923) Update `device.platform` documentation for **Browser** platform

cordova-plugin-file@4.1.0
* added `.ratignore` file
* [CB-10319](https://issues.apache.org/jira/browse/CB-10319) **android** Adding reflective helper methods for permission requests
* [CB-10023](https://issues.apache.org/jira/browse/CB-10023) Fix `proxy not found error` on Chrome.
* [CB-8863](https://issues.apache.org/jira/browse/CB-8863) **ios** Fix block usage of self

cordova-plugin-file-transfer@1.5.0
* [CB-10208](https://issues.apache.org/jira/browse/CB-10208) Fix `file-transfer` multipart form data upload format on **Windows**
* [CB-9837](https://issues.apache.org/jira/browse/CB-9837) Add data `URI` support to `file-transfer` upload on **iOS**
* [CB-9600](https://issues.apache.org/jira/browse/CB-9600) `FileUploadOptions` params not posted on **iOS**
* [CB-9840](https://issues.apache.org/jira/browse/CB-9840) Fallback `file-transfer` `uploadResponse` encoding to `latin1` in case not encoded with `UTF-8` on **iOS**
* [CB-9840](https://issues.apache.org/jira/browse/CB-9840) Fallback `file-transfer` upload/download response encoding to `latin1` in case not encoded with `UTF-8` on **iOS**
* [CB-8641](https://issues.apache.org/jira/browse/CB-8641) **Windows Phone 8.1** Some `file-transfer` plugin tests occasionally fail in `mobilespec`
* Adding linting and fixing linter warnings. Reducing timeouts to 7 seconds.
* [CB-10100](https://issues.apache.org/jira/browse/CB-10100) updated file dependency to not grab new majors
* [CB-7006](https://issues.apache.org/jira/browse/CB-7006) Empty file is created on file transfer if server response is 304
* [CB-10098](https://issues.apache.org/jira/browse/CB-10098) `filetransfer.spec.33` is faulty
* [CB-9969](https://issues.apache.org/jira/browse/CB-9969) Filetransfer upload error deletes original file
* [CB-10088](https://issues.apache.org/jira/browse/CB-10088) `filetransfer spec.10` and `spec.11` test is faulty
* [CB-9969](https://issues.apache.org/jira/browse/CB-9969) Filetransfer upload error deletes original file
* [CB-10086](https://issues.apache.org/jira/browse/CB-10086) There are two `spec.31` tests for `file-transfer` tests
* [CB-10037](https://issues.apache.org/jira/browse/CB-10037) Add progress indicator to file-transfer manual tests
* [CB-9563](https://issues.apache.org/jira/browse/CB-9563) Mulptipart form data is used even a header named `Content-Type` is present
* [CB-8863](https://issues.apache.org/jira/browse/CB-8863) fix block usage of self

cordova-plugin-geolocation@2.1.0
* [CB-10319](https://issues.apache.org/jira/browse/CB-10319) **Android** Adding reflective helper methods for permission requests
* [CB-8523](https://issues.apache.org/jira/browse/CB-8523) Fixed accuracy when `enableHighAccuracy: false` on **iOS**.
* [CB-10286](https://issues.apache.org/jira/browse/CB-10286) Don't skip automatic tests on **Android** devices
* [CB-10277](https://issues.apache.org/jira/browse/CB-10277) Error callback should be called w/ `PositionError` when location access is denied
* [CB-10285](https://issues.apache.org/jira/browse/CB-10285) Added tests for `PositionError` constants
* [CB-10278](https://issues.apache.org/jira/browse/CB-10278) geolocation `watchPosition` doesn't return `watchID` string
* [CB-8443](https://issues.apache.org/jira/browse/CB-8443) **Android** nothing happens if `GPS` is turned off
* [CB-10204](https://issues.apache.org/jira/browse/CB-10204) Fix `getCurrentPosition` options on **Android**
* [CB-7146](https://issues.apache.org/jira/browse/CB-7146) Remove built-in `WebView navigator.geolocation` manual tests
* [CB-2845](https://issues.apache.org/jira/browse/CB-2845) `PositionError` constants not attached to prototype as specified in W3C document

cordova-plugin-inappbrowser@1.2.0
* [CB-8180](https://issues.apache.org/jira/browse/CB-8180): Changing methods of interception in `WebViewClient` class
* [CB-10009](https://issues.apache.org/jira/browse/CB-10009) Improve `InAppBrowser` toolbar look and feel on **Windows**
* Open a new window on the **Browser** platform

cordova-plugin-media@2.1.0
* Fixed example referencing non-existent variable
* [CB-9452](https://issues.apache.org/jira/browse/CB-9452): Treat `RTSP streams` as `remote URLs`
* add JIRA issue tracker link
* fix [CB-9884](https://issues.apache.org/jira/browse/CB-9884) & [CB-9885](https://issues.apache.org/jira/browse/CB-9885)
* [CB-10100](https://issues.apache.org/jira/browse/CB-10100) updated file dependency to not grab new majors
* Fix block usage of self

cordova-plugin-media-capture@1.2.0
* [CB-10100](https://issues.apache.org/jira/browse/CB-10100) updated file dependency to not grab new majors
* [CB-8863](https://issues.apache.org/jira/browse/CB-8863) Fix block usage of self

cordova-plugin-network-information@1.2.0
* Adding `CoreTelephony` to `plugin.xml`
* Adding notification for `CT radio` information
* Adding `CT radio` information
* [CB-10160](https://issues.apache.org/jira/browse/CB-10160): Fixed the case mismatch issue

cordova-plugin-splashscreen@3.1.0
* [CB-9538](https://issues.apache.org/jira/browse/CB-9538) Implementing `FadeSplashScreen` feature for **Android**
* [CB-9240](https://issues.apache.org/jira/browse/CB-9240) Cordova splash screen plugin **iPad** landscape mode issue
* [CB-10263](https://issues.apache.org/jira/browse/CB-10263) Fix splashscreen plugin filenames for Asset Catalog
* [CB-9374](https://issues.apache.org/jira/browse/CB-9374) **Android** add `SplashShowOnlyFirstTime` as preference
* [CB-10244](https://issues.apache.org/jira/browse/CB-10244) Don't rotate the **iPhone 6 Plus** splash
* [CB-9043](https://issues.apache.org/jira/browse/CB-9043) Fix the **ios** splashscreen being deformed on orientation change
* [CB-10079](https://issues.apache.org/jira/browse/CB-10079) Splashscreen plugin does not honor `SplashScreenDelay` on **iOS**
* [CB-10231](https://issues.apache.org/jira/browse/CB-10231) Fix `FadeSplashScreen` to default to true on **iOS**

cordova-plugin-statusbar@2.1.0
* [CB-9513](https://issues.apache.org/jira/browse/CB-9513) Allow to show/hide status bar in fullscreen mode.
* [CB-8720](https://issues.apache.org/jira/browse/CB-8720) Fix status bar position when app started upside down on **iOS 7**.
* [CB-10118](https://issues.apache.org/jira/browse/CB-10118) Fixes plugin loading error for **Browser** platform

cordova-plugin-test-framework@1.1.1
* [CB-10318](https://issues.apache.org/jira/browse/CB-10318) Do not wrap test title

cordova-plugin-vibration@2.1.0
* [CB-9365](https://issues.apache.org/jira/browse/CB-9365) Add support for 'vibrateWithPattern' to **Windows Phone 8.1 / Windows 10**

cordova-plugin-whitelist@1.2.1
* [CB-10194](https://issues.apache.org/jira/browse/CB-10194) info tag prints for ios when not applicable
