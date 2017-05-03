---
layout: post
author:
    name: Fil Maj
    url: https://twitter.com/filmaj
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-battery-status: 1.2.4 (dfec094)
* cordova-plugin-camera: 2.4.1 (ba9a803)
* cordova-plugin-console: 1.0.7 (fa26558)
* cordova-plugin-contacts: 2.3.1 (1c27c9a)
* cordova-plugin-device-motion: 1.2.5 (04ce0ea)
* cordova-plugin-device-orientation: 1.0.7 (7af309f)
* cordova-plugin-device: 1.1.6 (eeb48e8)
* cordova-plugin-dialogs: 1.3.3 (34cccf6)
* cordova-plugin-file: 4.3.3 (06ff0eb)
* cordova-plugin-file-transfer: 1.6.3 (720f314)
* cordova-plugin-geolocation: 2.4.3 (12fae5b)
* cordova-plugin-globalization: 1.0.7 (273e5a6)
* cordova-plugin-inappbrowser: 1.7.1 (ff6a765)
* cordova-plugin-media: 3.0.1 (2a1ee43)
* cordova-plugin-media-capture: 1.4.3 (b78a4b2)
* cordova-plugin-network-information: 1.3.3 (710b53d)
* cordova-plugin-screen-orientation: 2.0.1 (8699159)
* cordova-plugin-splashscreen: 4.0.3 (85aa605)
* cordova-plugin-statusbar: 2.2.3 (77a6ae5)
* cordova-plugin-vibration: 2.1.5 (96c4ad6)
* cordova-plugin-wkwebview-engine: 1.1.3 (fce6123)

Release Highlights:

* **All Plugins**: Updated Android 6 build badges, and added a package.json to the `tests/` folder in preparation for the Cordova@7 release.
* **Contacts**: [CB-10496](https://issues.apache.org/jira/browse/CB-10496) Android now supports providing base64 encoded `data:` URIs as a contact's photo field.
* **Device**: [CB-12105](https://issues.apache.org/jira/browse/CB-12105) Proper detection of the Edge browser.
* **InAppBrowser**: [CB-12266](https://issues.apache.org/jira/browse/CB-12266) On the Browser platform, the `loadstop` event's `url` is now a string instead of an object, aligning it with the other platforms.
* **Media**: [CB-12542](https://issues.apache.org/jira/browse/CB-12542) On iOS, fix `.wav` file recording and add `.m4a` recording support.
* **Screen Orientation**: [CB-12543](https://issues.apache.org/jira/browse/CB-12543) On iOS, when locking the orientation, force a rotation to that orientation.
* **StatusBar**: [CB-10879](https://issues.apache.org/jira/browse/CB-10879) On Android API 21+, enable `overlaysWebView`.

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@latest --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.2.4
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) (Android) Added **Android 6.0** build badge
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-12639](https://issues.apache.org/jira/browse/CB-12639) (all) Tests: console.err() -> console.error()

cordova-plugin-camera@2.4.1
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Updated build badges in `README`
* [CB-12650](https://issues.apache.org/jira/browse/CB-12650) Fix manual test for uploading image
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) (android) Appium tests: Bust **Android** 6 and 7 permission dialogs
* [CB-12618](https://issues.apache.org/jira/browse/CB-12618) (android) Appium tests: Handle native cling

cordova-plugin-console@1.0.7
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-contacts@2.3.1
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-10496](https://issues.apache.org/jira/browse/CB-10496) (android) now support data: URIs to save photo for contact by image data base64 encoded
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) (android) Adapt Appium tests for **Android** 6 and 7
* [CB-10784](https://issues.apache.org/jira/browse/CB-10784) CDVContactsPicker finish animating before callback

cordova-plugin-device-motion@1.2.5
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-10559](https://issues.apache.org/jira/browse/CB-10559) (android) Relaxed a time stamp condition to fix flaky tests

cordova-plugin-device-orientation@1.0.7
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-device@1.1.6
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-12105](https://issues.apache.org/jira/browse/CB-12105) (browser) Properly detect Edge

cordova-plugin-dialogs@1.3.3
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-file@4.3.3
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-file-transfer@1.6.3
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-10696](https://issues.apache.org/jira/browse/CB-10696) **iOS**: Encode target path with spaces

cordova-plugin-geolocation@2.4.3
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-globalization@1.0.7
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-inappbrowser@1.7.1
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badges to `README`
* [CB-12266](https://issues.apache.org/jira/browse/CB-12266) (browser platform) loadstop event.url is now a string instead of an object, aligning it with the other platforms.
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-11248](https://issues.apache.org/jira/browse/CB-11248) `InAppBrowser` no focus on input text fields

cordova-plugin-media@3.0.1
* [CB-12542](https://issues.apache.org/jira/browse/CB-12542) (ios) Fix wav file recording, add m4a extension. make **iOS** status handling compatible with **Android**/Windows
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badges to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-media-capture@1.4.3
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badges to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-network-information@1.3.3
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Add **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-screen-orientation@2.0.1
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12543](https://issues.apache.org/jira/browse/CB-12543) (iOS) Rotate to specified orientation when locked
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-12588](https://issues.apache.org/jira/browse/CB-12588) add manual tests in cordova-plugin-test-framework style

cordova-plugin-splashscreen@4.0.3
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-statusbar@2.2.3
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-10879](https://issues.apache.org/jira/browse/CB-10879) Enable overlaysWebView on **Android** API 21+
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-vibration@2.1.5
* [CB-12622](https://issues.apache.org/jira/browse/CB-12622) Added **Android 6.0** build badge to `README`
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder

cordova-plugin-wkwebview-engine@1.1.3
* [CB-12696](https://issues.apache.org/jira/browse/CB-12696) (iOS) Fixing some Xcode warnings
* [CB-12685](https://issues.apache.org/jira/browse/CB-12685) added `package.json` to tests folder
* [CB-12575](https://issues.apache.org/jira/browse/CB-12575) cordova-plugin-wkwebview-engine missing LICENSE file
* [CB-12519](https://issues.apache.org/jira/browse/CB-12519) added missing license header
