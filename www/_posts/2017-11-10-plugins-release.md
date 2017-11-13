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

* cordova-plugin-battery-status@1.2.5
* cordova-plugin-camera@3.0.0
* cordova-plugin-contacts@3.0.0
* cordova-plugin-device@1.1.7
* cordova-plugin-dialogs@1.3.4
* cordova-plugin-file-transfer@1.7.0
* cordova-plugin-file@5.0.0
* cordova-plugin-geolocation@3.0.0
* cordova-plugin-globalization@1.0.8
* cordova-plugin-inappbrowser@1.7.2
* cordova-plugin-media@4.0.0
* cordova-plugin-media-capture@2.0.0
* cordova-plugin-network-information@1.3.4
* cordova-plugin-splashscreen@4.1.0
* cordova-plugin-statusbar@2.3.0
* cordova-plugin-screen-orientation@2.0.2
* cordova-plugin-vibration@2.1.6
* cordova-plugin-whitelist@1.3.3
* cordova-plugin-wkwebview-engine@1.1.4
* cordova-plugin-test-framework@1.1.6


In our [last plugins release](https://cordova.apache.org/news/2017/09/22/plugins-release.html), we deprecated `cordova-plugin-compat` since it got integrated into `cordova-android@6.3.0`. So for this release cycle, we have removed the dependency from plugins that were relying on it and gave the plugins a major version jump. The follow plugins have dropped `cordova-plugin-compat`: `cordova-plugin-camera`, `cordova-plugin-contacts`, `cordova-plugin-file`, `cordova-plugin-geolocation`, `cordova-plugin-media`, and `cordova-plugin-media-capture`.

We have also changed how usage descriptions work in the following plugins: `cordova-plugin-camera`, `cordova-plugin-contacts`, `cordova-plugin-media`, `cordova-plugin-geolocation`, and `cordova-plugin-media-capture`. Usage descriptions are required for **iOS** applications accessing certain apis. Apple wants to know why your app needs certain permissions. We now recommend you add the usage description to your app via `edit-config` tag. View the `iOS Quirks` section of the plugin documentation to see an example of how to use it. [Here](https://github.com/apache/cordova-plugin-camera#ios-quirks) is the example for `cordova-plugin-camera`.

`cordova-plugin-statusbar` has been updated to work on the new `iPhone X`.

Lastly, `cordova-plugin-file-transfer` has officially been deprecated. We recommend using the built in `XHR` apis instead. Read about transitioning off `cordova-plugin-file-transfer` at https://cordova.apache.org/blog/2017/10/18/from-filetransfer-to-xhr2.html.
 
----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@latest --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.2.5
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) Added **Browser** platform to Travis
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12991](https://issues.apache.org/jira/browse/CB-12991) (CI) Updated CI badges
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-camera@3.0.0
* Added `cordova-OSX` support
* [CB-13515](https://issues.apache.org/jira/browse/CB-13515) (all): Add 'protective' entry to `cordovaDependencies`
* [CB-13332](https://issues.apache.org/jira/browse/CB-13332) (iOS): document `NSPhotoLibraryAddUsageDescription`
* [CB-13264](https://issues.apache.org/jira/browse/CB-13264) (iOS): Remove **iOS** usage descriptions
* [CB-13473](https://issues.apache.org/jira/browse/CB-13473) (CI) Removed **Browser** builds from AppVeyor
* [CB-13446](https://issues.apache.org/jira/browse/CB-13446) Sync template with previous doc changes
* [CB-13294](https://issues.apache.org/jira/browse/CB-13294) Removed `cordova-plugin-compat`
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-12985](https://issues.apache.org/jira/browse/CB-12985) setup `eslint` and removed `jshint`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-13002](https://issues.apache.org/jira/browse/CB-13002) (Android, **iOS**) Fix occasional Appium tests failures
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12991](https://issues.apache.org/jira/browse/CB-12991) (CI) Updated CI badges
* [CB-12964](https://issues.apache.org/jira/browse/CB-12964) (android) Fix of bug when Pictures folder did not exist.
* [CB-12982](https://issues.apache.org/jira/browse/CB-12982) (Android, **iOS**) Appium tests: try to create a session harder
* [CB-12682](https://issues.apache.org/jira/browse/CB-12682) (ios, **Android**): changes cancel error message to be consistent for **iOS** **Android**
* [CB-12764](https://issues.apache.org/jira/browse/CB-12764) (android) Adapt Appium tests for **Android** 7
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-contacts@3.0.0
* [CB-13522](https://issues.apache.org/jira/browse/CB-13522) (iOS): Remove usage description
* [CB-13521](https://issues.apache.org/jira/browse/CB-13521) (all): Add 'protective' entry to `cordovaDependencies`
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-13294](https://issues.apache.org/jira/browse/CB-13294) Remove `cordova-plugin-compat`
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-12991](https://issues.apache.org/jira/browse/CB-12991) (CI) Updated CI badges
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-device@1.1.7
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) setup `eslint` and removed `jshint`
* [CB-13113](https://issues.apache.org/jira/browse/CB-13113) (browser) `device.isVirtual` is always false
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-dialogs@1.3.4
* [CB-13473](https://issues.apache.org/jira/browse/CB-13473) (CI) Removed **Browser** builds from AppVeyor
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) setup `eslint` and removed `jshint`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-4615](https://issues.apache.org/jira/browse/CB-4615) document **Android** quirk around maximum number of button labels supported for the `confirm` method.
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-file-transfer@1.7.0
* Updated `README` with Deprecated Status
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-12809](https://issues.apache.org/jira/browse/CB-12809) Google Play Blocker: Unsafe SSL TrustManager Defined
* [CB-7995](https://issues.apache.org/jira/browse/CB-7995) document that `FileTransferError.exception` on **iOS** is never defined.
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-file@5.0.0
* [CB-13481](https://issues.apache.org/jira/browse/CB-13481) (android) Don't ask for permission to read `file:///android_asset/`
* [CB-13518](https://issues.apache.org/jira/browse/CB-13518) Add 'protective' entry to `cordovaDependencies`
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-13294](https://issues.apache.org/jira/browse/CB-13294) Remove `cordova-plugin-compat`
* fixing `README` in use of `window.resolveLocalFileSystemURL`
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) setup `eslint` and took out `jshint`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12355](https://issues.apache.org/jira/browse/CB-12355) (iOS) add description about the `mimeTypeForFileAtPath` method
* [CB-12355](https://issues.apache.org/jira/browse/CB-12355) (iOS) fix `FileEntry.file.type`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-geolocation@3.0.0
* [CB-13267](https://issues.apache.org/jira/browse/CB-13267) (iOS): Remove **iOS** usage descriptions
* [CB-13516](https://issues.apache.org/jira/browse/CB-13516) (all): Add 'protective' entry to `cordovaDependencies`
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-13294](https://issues.apache.org/jira/browse/CB-13294) Remove `cordova-plugin-compat`
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-globalization@1.0.8
* [CB-13473](https://issues.apache.org/jira/browse/CB-13473) (CI) Removed **Browser** builds from AppVeyor
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-inappbrowser@1.7.2
* [CB-13473](https://issues.apache.org/jira/browse/CB-13473) (CI) Removed **Browser** builds from AppVeyor
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-13347](https://issues.apache.org/jira/browse/CB-13347) Enable thirdparty cookies on `>=Android 5.0` device
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-12975](https://issues.apache.org/jira/browse/CB-12975) (docs) Resort and reword `cordova.InAppBrowser.open` `options` lists
* [CB-12586](https://issues.apache.org/jira/browse/CB-12586) (iOS) fix method `hide` doesn't work
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-media@4.0.0
* [CB-12264](https://issues.apache.org/jira/browse/CB-12264) (README): fix `media.getCurrentAmplitude` definition
* [CB-13265](https://issues.apache.org/jira/browse/CB-13265) Remove **iOS** usage description from media plugin
* [CB-13517](https://issues.apache.org/jira/browse/CB-13517)  (all): Add 'protective' entry to `cordovaDependencies`
* [CB-13473](https://issues.apache.org/jira/browse/CB-13473) (CI) Removed **Browser** builds from AppVeyor
* [CB-13294](https://issues.apache.org/jira/browse/CB-13294) Remove `cordova-plugin-compat`
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-12671](https://issues.apache.org/jira/browse/CB-12671) **iOS**: Fix auto-test with stopping media that is in starting state
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-media-capture@2.0.0
* [CB-13520](https://issues.apache.org/jira/browse/CB-13520) (all): Add 'protective' entry to `cordovaDependencies`
* [CB-13266](https://issues.apache.org/jira/browse/CB-13266) (ios): Remove **iOS** usage descriptions
* [CB-13473](https://issues.apache.org/jira/browse/CB-13473) (CI) Removed **Browser** builds from AppVeyor
* [CB-13294](https://issues.apache.org/jira/browse/CB-13294) Remove `cordova-plugin-compat`
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-12882](https://issues.apache.org/jira/browse/CB-12882) (ios): adds support for permissions checks for `captureVideo` and `captureImage` methods
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-network-information@1.3.4
* [CB-12751](https://issues.apache.org/jira/browse/CB-12751) (ios) Fix connection type when airplane mode is on
* [CB-13299](https://issues.apache.org/jira/browse/CB-13299) (CI) Fix **Android** builds
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-splashscreen@4.1.0
* [CB-13473](https://issues.apache.org/jira/browse/CB-13473) (CI) Removed **Browser** builds from AppVeyor
* [CB-12011](https://issues.apache.org/jira/browse/CB-12011) (android) added the possibility to change the spinner color on **Android 5.0**+ apps
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-13094](https://issues.apache.org/jira/browse/CB-13094) (android) Don't show splash when activity being finished
* [CB-11487](https://issues.apache.org/jira/browse/CB-11487) (browser) Documented `AutoHideSplashScreen` for **Browser**
* [CB-11488](https://issues.apache.org/jira/browse/CB-11488) (browser) The `hide()` call became non re-entrant after the addition of fade out. This fixes the issue.
* [CB-11487](https://issues.apache.org/jira/browse/CB-11487) (browser) The standard `AutoHideSplashScreen` `config.xml` property is now supported by the **Browser** platform.
* [CB-11486](https://issues.apache.org/jira/browse/CB-11486) (browser) `splashScreenDelay` now feed through `parseInt` to ensure it is an integer by the time it's value is passed in to `setTimeout()` in `hide()`.
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-statusbar@2.3.0
* [CB-13476](https://issues.apache.org/jira/browse/CB-13476) (iOS): handle double size statusbar on SDK 10 for **iOS 11**
* [CB-13394](https://issues.apache.org/jira/browse/CB-13394) (iOS): fix `iPhone X` StatusBar rendering in landscape
* [CB-11858](https://issues.apache.org/jira/browse/CB-11858) (android) Add `StatusBarStyle` feature support for **Android M+**
* [CB-13311](https://issues.apache.org/jira/browse/CB-13311) (iOS) Statusbar does not overlay correctly on `iPhone X`
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-12812](https://issues.apache.org/jira/browse/CB-12812) (browser) Fix statusbar plugin with **Browser** platform
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-screen-orientation@2.0.2
* [CB-13472](https://issues.apache.org/jira/browse/CB-13472) (CI) Fixed Travis **Android** builds again
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on Travis and AppVeyor
* [CB-12994](https://issues.apache.org/jira/browse/CB-12994) (android, **BlackBerry**) add `es6-promise-plugin` from `npm`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-vibration@2.1.6
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-whitelist@1.3.3
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-wkwebview-engine@1.1.4
* added missing license header
* [CB-13519](https://issues.apache.org/jira/browse/CB-13519) (all): Add 'protective' entry to `cordovaDependencies`
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` and removed `jshint`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) fixed `bugs` entry in `package.json`.

cordova-plugin-test-framework@1.1.6
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) replaced `jshint` with `eslint`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.
