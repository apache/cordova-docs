---
layout: post
author:
    name: Andrew Grieve
    url: https://twitter.com/GrieveAndrew
title:  "Plugins Release: February 10, 2015"
categories: news
tags: release plugins
---
The following plugins were updated today:

* cordova-plugin-battery-status@0.2.12
* cordova-plugin-camera@0.3.5
* cordova-plugin-console@0.2.13
* cordova-plugin-contacts@0.2.16
* cordova-plugin-device-motion@0.2.11
* cordova-plugin-device-orientation@0.3.11
* cordova-plugin-device@0.3.0
* cordova-plugin-dialogs@0.3.0
* cordova-plugin-file-transfer@0.5.0
* cordova-plugin-file@1.3.3
* cordova-plugin-geolocation@0.3.12
* cordova-plugin-globalization@0.3.4
* cordova-plugin-inappbrowser@0.6.0
* cordova-plugin-media@0.2.16
* cordova-plugin-media-capture@0.3.6
* cordova-plugin-network-information@0.2.15
* cordova-plugin-splashscreen@1.0.0
* cordova-plugin-vibration@0.3.13
* cordova-plugin-statusbar@0.1.10
* cordova-plugins@file-system-roots-0.1.0
* cordova-plugin-test-framework@0.0.1

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm org.apache.cordova.camera
    cordova plugin add org.apache.cordova.camera

Changes include:
<!--more-->

org.apache.cordova.camera@0.3.5
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Stop using now-deprecated `[NSData base65EncodedString]`
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Stop using now-deprecated integerValueForKey: class extension
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* [CB-8032](https://issues.apache.org/jira/browse/CB-8032) ios: Add nativeURL external method support for CDVFileSystem->makeEntryForPath:isDirectory:
* [CB-7938](https://issues.apache.org/jira/browse/CB-7938) ios: Added XCTest unit tests project, with stubs (adapted from SplashScreen unit test setup)
* [CB-7937](https://issues.apache.org/jira/browse/CB-7937) ios: Re-factor iOS Camera plugin so that it is testable

org.apache.cordova.console@0.2.13
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension

org.apache.cordova.contacts@0.2.16
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Stop using (newly) deprecated CordovaLib functions
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* android: Update ContactName support
* Updated the comments for ContactOrganization constructor.

org.apache.cordova.device@0.3.0
* Added device.manufacturer property for Android, iOS, Blackberry, WP8
* Support for Windows Phone 8 ANID2 ANID is only supported up to Windows Phone 7.5
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) Use a local copy of uniqueAppInstanceIdentifier rather than CordovaLib's version
* browser: Fixed a bug that caused an "cannot call method of undefined" error if the browser's user agent wasn't recognized

org.apache.cordova.device-orientation@0.3.11
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension

org.apache.cordova.dialogs@0.3.0
* Correct way to specify Windows platform in config.xml
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* [CB-7955](https://issues.apache.org/jira/browse/CB-7955) Add support "browser" platform

org.apache.cordova.file@1.3.3
* [CB-7927](https://issues.apache.org/jira/browse/CB-7927) Encoding data to bytes instead of chars when writing a file.
* ios: Fix compile warning about implicit int conversion
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use base64EncodedStringWithOptions instead of CordovaLib's class extension
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use a local copy of valueForKeyIsNumber rather than CordovaLib's version
* windows: Handle url's containing absolute windows path starting with drive letter and colon (encoded as %3A) through root FS
* windows: Rework to use normal url form
* android: refactor: Make Filesystem base class store its own name, rootUri, and rootEntry
* android: Simplify code a bit by making makeEntryForPath not throw JSONException
* [CB-6431](https://issues.apache.org/jira/browse/CB-6431) android: Fix plugin breaking content: URLs
* [CB-7375](https://issues.apache.org/jira/browse/CB-7375) Never create new FileSystem instances (except on windows since they don't implement requestAllFileSystems())

org.apache.cordova.file-transfer@0.5.0
* [CB-8407](https://issues.apache.org/jira/browse/CB-8407) windows: Fix download of `ms-appdata:///` URIs
* [CB-8095](https://issues.apache.org/jira/browse/CB-8095) windows: Rewrite upload method to support progress events properly
* [CB-5059](https://issues.apache.org/jira/browse/CB-5059) android: Add a CookieManager abstraction for pluggable webviews
* ios: Fix compile warning about implicity int conversion
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use a local copy of DLog macro rather than CordovaLib version
* [CB-8296](https://issues.apache.org/jira/browse/CB-8296) ios: Fix crash when upload fails and file is not yet created (close #57)
* Document "body" property on FileTransferError
* [CB-7912](https://issues.apache.org/jira/browse/CB-7912) ios, android: Update to work with whitelist plugins in Cordova 4.x
* Error callback should always be called with the FileTransferError object, and not just the code
* windows: alias appData to Windows.Storage.ApplicationData.current
* [CB-8093](https://issues.apache.org/jira/browse/CB-8093) Fixes incorrect FileTransferError returned in case of download failure

org.apache.cordova.geolocation@0.3.12
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension

org.apache.cordova.globalization@0.3.4
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* [CB-7972](https://issues.apache.org/jira/browse/CB-7972) Add cordova-plugin-globalization support for Windows platform

org.apache.cordova.inappbrowser@0.6.0
* [CB-8270](https://issues.apache.org/jira/browse/CB-8270) ios: Remove usage of `[arr JSONString]`, since it's been renamed to `cdv_JSONString`
* ubuntu: implement inject* functions
* ubuntu: port to oxide
* [CB-7897](https://issues.apache.org/jira/browse/CB-7897) ios, android: Update to work with whilelist plugins in Cordova 4.x

org.apache.cordova.media@0.2.16
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Stop using (newly) deprecated CDVJSON.h
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* [CB-8252](https://issues.apache.org/jira/browse/CB-8252) android: Fire audio events from native via message channel
* [CB-8152](https://issues.apache.org/jira/browse/CB-8152) ios: Remove deprecated methods in Media plugin (deprecated since 2.5)

org.apache.cordova.media-capture@0.3.6
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use inline copies of deprecated CDV_IsIpad and CDV_IsIphone5
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Stop using (newly) deprecated CDVJSON.h
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension
* [CB-7977](https://issues.apache.org/jira/browse/CB-7977) Mention deviceready in plugin docs

org.apache.cordova.network-information@0.2.15
* [CB-8384](https://issues.apache.org/jira/browse/CB-8384) Network status change support on Windows
* [CB-8384](https://issues.apache.org/jira/browse/CB-8384) Fixes the way we detect online status on Windows
* [CB-8384](https://issues.apache.org/jira/browse/CB-8384) Add Windows platform quirks
* [CB-8384](https://issues.apache.org/jira/browse/CB-8384) Add Windows section to Network Information plugin

org.apache.cordova.splashscreen@1.0.0
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Stop using deprecated IsIpad macro
* [CB-3679](https://issues.apache.org/jira/browse/CB-3679) Add engine tag for Android >= 3.6.0 due to use of `preferences`
* [CB-3679](https://issues.apache.org/jira/browse/CB-3679) Make SplashScreen plugin compatible with cordova-android@4.0.x

org.apache.cordova.statusbar@0.1.10
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) ios: Use argumentForIndex rather than NSArray extension

org.apache.cordova.test-framework@0.0.1
* Initial release

org.apache.cordova.vibration@0.3.13
* [CB-8243](https://issues.apache.org/jira/browse/CB-8243) cordova-plugin-vibration documentation translation: cordova-plugin-vibration
