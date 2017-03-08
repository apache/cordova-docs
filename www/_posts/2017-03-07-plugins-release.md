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

* cordova-plugin-battery-status@1.2.3
* cordova-plugin-camera@2.4.0
* cordova-plugin-console@1.0.6
* cordova-plugin-contacts@2.3.0
* cordova-plugin-device-motion@1.2.4
* cordova-plugin-device-orientation@1.0.6
* cordova-plugin-device@1.1.5
* cordova-plugin-dialogs@1.3.2
* cordova-plugin-file-transfer@1.6.2
* cordova-plugin-file@4.3.2
* cordova-plugin-geolocation@2.4.2
* cordova-plugin-globalization@1.0.6
* cordova-plugin-inappbrowser@1.7.0
* cordova-plugin-media@3.0.0
* cordova-plugin-media-capture@1.4.2
* cordova-plugin-network-information@1.3.2
* cordova-plugin-splashscreen@4.0.2
* cordova-plugin-statusbar@2.2.2
* cordova-plugin-vibration@2.1.4
* cordova-plugin-whitelist@1.3.2
* cordova-plugin-wkwebview-engine@1.1.2
* cordova-plugin-test-framework@1.1.5

Release Highlights:

* **Camera:** [CB-12005](https://issues.apache.org/jira/browse/CB-12005) Changing the `getOrientation` method to return the defined enumerated `EXIF` instead of orientation in degrees for consistency
* **InAppBrowser:** [CB-9148](https://issues.apache.org/jira/browse/CB-9148) **Android:** Add Support for `input[type=file]` File Chooser
* **Media:** Make the output file of **Android** an `acc` file. Major version bump to `3.0.0`. Media plugin now requires `cordova-android >= 6.1.0`
* **WKWebview Engine:** [CB-12297](https://issues.apache.org/jira/browse/CB-12297) Support `WKProcessPool` for cookie sharing

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@latest --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.2.3
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**

cordova-plugin-camera@2.4.0
* [CB-12501](https://issues.apache.org/jira/browse/CB-12501) **Android**: Appium tests don't use `XPath` selectors anymore
* [CB-12469](https://issues.apache.org/jira/browse/CB-12469) Appium tests can now run on **iOS 10**
* [CB-12005](https://issues.apache.org/jira/browse/CB-12005) Changing the `getOrientation` method to return the defined enumerated `EXIF` instead of orientation in degrees for consistency
* [CB-12368](https://issues.apache.org/jira/browse/CB-12368) Fix permission check on **Android**
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**

cordova-plugin-console@1.0.6
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-contacts@2.3.0
* [CB-12326](https://issues.apache.org/jira/browse/CB-12326) **Android:** `CommonDataKinds.*.LABEL`
* [CB-8076](https://issues.apache.org/jira/browse/CB-8076) Provide error support for **browser** platform
* [CB-12445](https://issues.apache.org/jira/browse/CB-12445) (Appium) Removed double check for contact's name
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12357](https://issues.apache.org/jira/browse/CB-12357) Tests give user some time to accept the permission alert
* [CB-12300](https://issues.apache.org/jira/browse/CB-12300) fix tests failure when running it using `jasmine-node`
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-device-motion@1.2.4
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-device-orientation@1.0.6
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-device@1.1.5
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-dialogs@1.3.2
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-file-transfer@1.6.2
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-file@4.3.2
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-geolocation@2.4.2
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-globalization@1.0.6
* [CB-12029](https://issues.apache.org/jira/browse/CB-12029) **blackberry10**: Remove logging code that causes crashes on **BB10**
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-11154](https://issues.apache.org/jira/browse/CB-11154) **Windows:** Return `IANA` timezone as an empty string instead of `undefined`
* [CB-11154](https://issues.apache.org/jira/browse/CB-11154) **Android**, **iOS** Add `IANA` timezone
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-inappbrowser@1.7.0
* [CB-12366](https://issues.apache.org/jira/browse/CB-12366) **iOS:** Reduce `tmpWindow` level to prevent overlapping statusbar
* [CB-12364](https://issues.apache.org/jira/browse/CB-12364) **Windows:** `Inappbrowser` inject file manual tests are not working
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0** 
* [CB-9148](https://issues.apache.org/jira/browse/CB-9148) **Android:** Add Support for `input[type=file]` File Chooser
* [CB-11136](https://issues.apache.org/jira/browse/CB-11136) (ios) Fix `InAppBrowser` when closing with `WKWebView`
* [CB-10799](https://issues.apache.org/jira/browse/CB-10799) **iOS:** fix toolbar is shown in incorrect position when in-call status bar

cordova-plugin-media@3.0.0
* **Android:** fix `NullPointerException` in `AudioPlayer.readyPlayer`
* **Android:** fix `java.lang.NullPointerException` on `resumeAllGainedFocus`
* [CB-12493](https://issues.apache.org/jira/browse/CB-12493) (Tests) Fixed spec.21 flakyness
* major version bump, added `cordovaDependencies` requirement for `cordova-android>=6.1.0`
* Add engine tag for checking `cordova-android`
* Make the output file of **Android** an `acc` file.
* [CB-12422](https://issues.apache.org/jira/browse/CB-12422) **iOS:** Fix readme issue on background needed plist modification
* [CB-12434](https://issues.apache.org/jira/browse/CB-12434) **Android:** fix Stoping a Paused Recording throws exception
* [CB-12411](https://issues.apache.org/jira/browse/CB-12411) Stoping a Paused Recording throws illegal state exception
* [CB-1187](https://issues.apache.org/jira/browse/CB-1187) **iOS:** Fix unused recording settings
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from DefinitelyTyped
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-media-capture@1.4.2
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-network-information@1.3.2
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-11838](https://issues.apache.org/jira/browse/CB-11838) **iOS:** Unregister callback function at the right timing.
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-splashscreen@4.0.2
* [CB-12353](https://issues.apache.org/jira/browse/CB-12353) Corrected merges usage in `plugin.xml`
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-statusbar@2.2.2
* [CB-12188](https://issues.apache.org/jira/browse/CB-12188) Status Bar is not changing in some specific **Android** phone (Red MI 3s Prime)
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12196](https://issues.apache.org/jira/browse/CB-12196) **iOS** fix Status Bar Not Hiding
* [CB-12141](https://issues.apache.org/jira/browse/CB-12141) **iOS** fix white app screen after camera overlay shown on iPad
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-vibration@2.1.4
* fix `vibrateWithPattern`, function doesn't update the pattern variable reference
* [CB-12369](https://issues.apache.org/jira/browse/CB-12369) Add plugin typings from `DefinitelyTyped`
* [CB-12363](https://issues.apache.org/jira/browse/CB-12363) Added build badges for **iOS 9.3** and **iOS 10.0**
* [CB-12230](https://issues.apache.org/jira/browse/CB-12230) Removed **Windows 8.1** build badges

cordova-plugin-whitelist@1.3.2
* [CB-12236](https://issues.apache.org/jira/browse/CB-12236) Fixed `RELEASENOTES` for `cordova-plugin-whitelist`

cordova-plugin-wkwebview-engine@1.1.2
* [CB-12497](https://issues.apache.org/jira/browse/CB-12497) `location.href` links are silently disallowed
* [CB-12490](https://issues.apache.org/jira/browse/CB-12490) Updated experimental plugin link
* Allow to configure navigation by gestures
* [CB-12297](https://issues.apache.org/jira/browse/CB-12297) Support `WKProcessPool` for cookie sharing
* [CB-12414](https://issues.apache.org/jira/browse/CB-12414) **iOS:** Forward error from provisional load error to standard load error

cordova-plugin-test-framework@1.1.5
* [CB-12236](https://issues.apache.org/jira/browse/CB-12236) Fixed `RELEASENOTES` for `cordova-plugin-test-framework`
