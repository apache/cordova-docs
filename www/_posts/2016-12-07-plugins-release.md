---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-battery-status: 1.2.1
* cordova-plugin-camera: 2.3.1
* cordova-plugin-console: 1.0.5
* cordova-plugin-contacts: 2.2.1
* cordova-plugin-device: 1.1.4
* cordova-plugin-device-motion: 1.2.3
* cordova-plugin-device-orientation: 1.0.5
* cordova-plugin-dialogs: 1.3.1
* cordova-plugin-file: 4.3.1
* cordova-plugin-file-transfer: 1.6.1
* cordova-plugin-geolocation: 2.4.1
* cordova-plugin-globalization: 1.0.5
* cordova-plugin-legacy-whitelist: 1.1.2
* cordova-plugin-media: 2.4.1
* cordova-plugin-media-capture: 1.4.1
* cordova-plugin-network-information: 1.3.1
* cordova-plugin-splashscreen: 4.0.1
* cordova-plugin-statusbar: 2.2.1
* cordova-plugin-test-framework: 1.1.4
* cordova-plugin-vibration: 2.1.3
* cordova-plugin-whitelist: 1.3.1
* cordova-plugin-wkwebview-engine: 1.1.1

----
You can update any plugin by removing it, and then re-adding it.

 e.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@latest --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.2.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.2.1
* [CB-8929](https://issues.apache.org/jira/browse/CB-8929) Fix failing tests on iOS
* [CB-8929](https://issues.apache.org/jira/browse/CB-8929) Use PowerManager to get battery state on Win 10
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-camera@2.3.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 2.3.1
* Fix missing license headers.
* [CB-12086](https://issues.apache.org/jira/browse/CB-12086) Regenerate README.md from template
* Added NSPhotoLibraryUsageDescription parameter to example install command Fixing some usages of NSPhotoLibraryUsageDescriptionentry
* Updating compat dependency to 1.1.0 or better
* [CB-11625](https://issues.apache.org/jira/browse/CB-11625) Forgot to add CordovaUri.java to plugin.xml
* [CB-11625](https://issues.apache.org/jira/browse/CB-11625) Files Provider does not work with Android 4.4.4 or lower, and I have no idea why.  Working around with CordovaUri
* [CB-11625](https://issues.apache.org/jira/browse/CB-11625) (Android) : Make this work with previous versions of Cordova via cordova-plugin-compat
* BuildConfig from test project crept in source code thanks to Android Studio, removing
* [CB-11625](https://issues.apache.org/jira/browse/CB-11625) Managed to get Content Providers to work with a weird mix of Content Providers and non-Content Providers
* [CB-11625](https://issues.apache.org/jira/browse/CB-11625) Working on fix to API 24 no longer allowing File URIs to be passed across intents
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-console@1.0.5
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.0.5
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-contacts@2.2.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 2.2.1
* [CB-11541](https://issues.apache.org/jira/browse/CB-11541) Pended one unsupported test on Windows
* [CB-11541](https://issues.apache.org/jira/browse/CB-11541) iOS: Add extra labels for phone, ims
* [CB-11028](https://issues.apache.org/jira/browse/CB-11028) android: Allow to set custom labels for contacts' fields
* [CB-11975](https://issues.apache.org/jira/browse/CB-11975) iOS: Allow to use numeric values in search filter
* [CB-11206](https://issues.apache.org/jira/browse/CB-11206) (android) Fixed custom IM protocol parsing close #128
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been signed and submitted to secretary@apache.org."
* [CB-11350](https://issues.apache.org/jira/browse/CB-11350) android: retrieve displayName for contact when specified in desiredFields
* [CB-11864](https://issues.apache.org/jira/browse/CB-11864) Fixed tests for the new Jasmine version
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-device@1.1.4
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.1.4
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-device-motion@1.2.3
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.2.3
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-device-orientation@1.0.5
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.0.5
* [CB-9179](https://issues.apache.org/jira/browse/CB-9179) (ios) Fixed trueHeading being always 0
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-dialogs@1.3.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.3.1
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* Replace empty buttonLabel with 'OK'
* Make sure the alert buttonLabel is a string
* Add enter key handling and map to default button.
* Added test for [windows] [CB-11281](https://issues.apache.org/jira/browse/CB-11281) when called without defaultText
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-file@4.3.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 4.3.1
* [CB-12112](https://issues.apache.org/jira/browse/CB-12112) windows: Make available to move folder trees
* fix ENCODING_ERR for applicationDirectory
* [CB-11848](https://issues.apache.org/jira/browse/CB-11848) windows: Remove duplicate slash after file system path
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11947](https://issues.apache.org/jira/browse/CB-11947) fixed typo that occurs when adding file-transfer plugin
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-file-transfer@1.6.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.6.1
* [CB-12154](https://issues.apache.org/jira/browse/CB-12154) file-transfer progressEvent.total = -1 on iOS
* [CB-10974](https://issues.apache.org/jira/browse/CB-10974) Cordova file transfer Content-Length header problem
* Don't crash on low memory devices
* [CB-12100](https://issues.apache.org/jira/browse/CB-12100) (ios) Fixed test plugin install at platform add on cordova@6.3.1
* [CB-11959](https://issues.apache.org/jira/browse/CB-11959) Fixed the jshint issues
* [CB-11959](https://issues.apache.org/jira/browse/CB-11959) Increased the array length for ios and winstore even more
* [CB-11959](https://issues.apache.org/jira/browse/CB-11959) Fixed filetransfer.spec.21 test failure on iOS and Windows Store when using local server
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11926](https://issues.apache.org/jira/browse/CB-11926) Tests can use local server
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-geolocation@2.4.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 2.4.1
* corrected KCLAuthorizationStatus error, changed to always removed user of [manager locationServicesEnabled].  Must return [CLLocationManager locationServicesEnabled] or 'none'
* [CB-11962](https://issues.apache.org/jira/browse/CB-11962) (ios) Added variable for setting NSLocationWhenInUseUsageDescription
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11904](https://issues.apache.org/jira/browse/CB-11904) Incremented plugin version.

cordova-plugin-globalization@1.0.5
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.0.5
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-legacy-whitelist@1.1.2
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.1.2
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* Add pull request template.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md
* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Incremented plugin version.

cordova-plugin-media@2.4.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 2.4.1
* [CB-12034](https://issues.apache.org/jira/browse/CB-12034) (ios) Add mandatory iOS 10 privacy description
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11529](https://issues.apache.org/jira/browse/CB-11529) ios: Make available setting volume for player on ios device
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-media-capture@1.4.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.4.1
* [CB-10701](https://issues.apache.org/jira/browse/CB-10701) [CB-7117](https://issues.apache.org/jira/browse/CB-7117) android: Add manual test to check getting metadata
* [CB-10489](https://issues.apache.org/jira/browse/CB-10489) Fix for MediaFile.getFormatData / audio recording support
* [CB-10488](https://issues.apache.org/jira/browse/CB-10488) Fix for MediaFile.getFormatData
* [CB-11996](https://issues.apache.org/jira/browse/CB-11996) Added a new manual test to capture multiple images
* [CB-11995](https://issues.apache.org/jira/browse/CB-11995) (android) Do not pass a file URI to the camera
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-network-information@1.3.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.3.1
* [CB-11230](https://issues.apache.org/jira/browse/CB-11230) [CB-11505](https://issues.apache.org/jira/browse/CB-11505) iOS: Add compatibility with IPv6
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-splashscreen@4.0.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 4.0.1
* [CB-11751](https://issues.apache.org/jira/browse/CB-11751) 'extendedSplashScreen' is undefined Document that splashscreen needs to be disabled on Windows in case of updating entire document body
* [CB-9287](https://issues.apache.org/jira/browse/CB-9287) Not enough Icons and Splashscreens for Windows 8.1 and Windows Phone 8.1
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11830](https://issues.apache.org/jira/browse/CB-11830) (iOS) Fix doc typos in PR#114
* [CB-11829](https://issues.apache.org/jira/browse/CB-11829) (iOS) Support for CB-9762; docs (CB-11830)
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-statusbar@2.2.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 2.2.1
* [CB-10288](https://issues.apache.org/jira/browse/CB-10288) statusbar plugin interaction with iOS multitasking
* [CB-10158](https://issues.apache.org/jira/browse/CB-10158) (ios) fix StatusBar issue when recovering from fullscreen video
* [CB-10341](https://issues.apache.org/jira/browse/CB-10341) ios, document statusTap event
* [CB-11191](https://issues.apache.org/jira/browse/CB-11191) Statusbar plugin causing issues with webview size
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-test-framework@1.1.4
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.1.4
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* Edit package.json license to match SPDX id
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-vibration@2.1.3
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 2.1.3
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-whitelist@1.3.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.3.1
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* Edit package.json license to match SPDX id
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.

cordova-plugin-wkwebview-engine@1.1.1
* [CB-12224](https://issues.apache.org/jira/browse/CB-12224) Updated version and RELEASENOTES.md for release 1.1.1
* [CB-10228](https://issues.apache.org/jira/browse/CB-10228) - AppendUserAgent not working with WKWebView
* [CB-11997](https://issues.apache.org/jira/browse/CB-11997) - Add crash recovery for iOS 8
* [CB-11917](https://issues.apache.org/jira/browse/CB-11917) - Remove pull request template checklist item: "iCLA has been submitted…"
* [CB-11818](https://issues.apache.org/jira/browse/CB-11818) - Avoid retain cycle: WKUserContentController retains its message handler, to break it we cannot pass directly CDVWKWebViewEngine's instance
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) Incremented plugin version.


