---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: October 17, 2014"
categories: news
tags: release plugins
---
The following plugins were updated today:

* cordova-plugin-camera: 0.3.3
* cordova-plugin-contacts: 0.2.14
* cordova-plugin-file-transfer: 0.4.7
* cordova-plugin-globalization: 0.3.2
* cordova-plugin-inappbrowser: 0.5.3
* cordova-plugin-media: 0.2.14
* cordova-plugin-media-capture: 0.3.4
* cordova-plugin-network-information: 0.2.13
* cordova-plugin-splashscreen: 0.3.4

Notable changes include:

* [CB-7633](https://issues.apache.org/jira/browse/CB-7633) - Add `iPhone 6/6+` support for `cordova-splashscreen` plugin
* [CB-7595](https://issues.apache.org/jira/browse/CB-7595): **Android L** changes the type from `Mobile` to `Cellular` for `cordova-network-information` plugin.
* [CB-7429](https://issues.apache.org/jira/browse/CB-7429) Added **Windows** support for `cordova-media-capture` plugin 
* [CB-7548](https://issues.apache.org/jira/browse/CB-7548) **BlackBerry10** Re-implement `getPreferredLanguage()` and `getLocaleName()` for `cordova-globalization` plugin.
* [CB-7529](https://issues.apache.org/jira/browse/CB-7529) **Windows** Adds support for `ms-appdata URIs` for `cordova-file-transfer` plugin 

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

----
You can update any plugin by removing it, and then readding it. E.g. To update your camera plugin:

    cordova plugin rm org.apache.cordova.camera
    cordova plugin add org.apache.cordova.camera

Other changes include:
<!--more-->

`org.apache.cordova.camera@0.3.3`
* [CB-7600](https://issues.apache.org/jira/browse/CB-7600) Adds informative message to error callback in manual test.

`org.apache.cordova.contacts@0.2.14`
* [CB-7373](https://issues.apache.org/jira/browse/CB-7373) Removes unnecessary Error object creation
* [CB-7373](https://issues.apache.org/jira/browse/CB-7373) Adds additional output if method is not supported.
* [CB-7357](https://issues.apache.org/jira/browse/CB-7357) Adds missing `capability` element to phone's `appxmanifest`.

`org.apache.cordova.file-transfer@0.4.7`
* Construct proper `FileEntry` with `nativeURL` property set
* [CB-7532](https://issues.apache.org/jira/browse/CB-7532) Handle non-existent download dirs properly
* [CB-7529](https://issues.apache.org/jira/browse/CB-7529) Adds support for `ms-appdata URIs` for **Windows**

`org.apache.cordova.globalization@0.3.2`
* [CB-7548](https://issues.apache.org/jira/browse/CB-7548) **BlackBerry10** Re-implement `getPreferredLanguage()` and `getLocaleName()`.

`org.apache.cordova.inappbrowser@0.5.3`
* **Windows** implementation fixes and improvements
* `zIndex` fixed
* renamed `InAppBrowser` back to `inappbrowser` for case sensitive operating systems
* Update french translation
* Update doc to add **Windows 8**
* Update **Windows** `proxy` to be both compatible with **Windows 8** and **Windows 8.1**
* Rename **Windows 8.1** to **windows8** in `src` directory
* Append **Windows 8.1** platform configuration in `plugin.xml`
* Append **Windows 8.1** proxy using `x-ms-webview`

`org.apache.cordova.media@0.2.14`
* **Amazon** Specific changes: Added `READ_PHONE_STATE` permission same as done in **Android**
* make possible to play `wav` files
* [CB-7638](https://issues.apache.org/jira/browse/CB-7638) Get audio duration properly on **Windows**
* [CB-7454](https://issues.apache.org/jira/browse/CB-7454) Adds support for `m4a` audio format for **Windows**
* [CB-7547](https://issues.apache.org/jira/browse/CB-7547) Fixes audio recording on **Windows** platform
* [CB-7531](https://issues.apache.org/jira/browse/CB-7531) Fixes `play()` failure after `release()` call

`org.apache.cordova.media-capture@0.3.4`
* [CB-7453](https://issues.apache.org/jira/browse/CB-7453) Adds fallback to `m4a` audio format when `mp3` recording fails.
* [CB-7429](https://issues.apache.org/jira/browse/CB-7429) Fixes image capture manual tests on **Windows**
* [CB-7429](https://issues.apache.org/jira/browse/CB-7429) Move **Windows 8** and **Windows** `Proxies` into one `file`
* [CB-7429](https://issues.apache.org/jira/browse/CB-7429) Adds `media capture` support for **Windows**

`org.apache.cordova.network-information@0.2.13`
* [CB-7595](https://issues.apache.org/jira/browse/CB-7595): **Android L** changes the type from `Mobile` to `Cellular`, I'm pretty sure this isn't documented

`org.apache.cordova.splashscreen@0.3.4`
* Finalized **iOS** splash screen (image name) tests. 176 tests in all, 44 for each type of device (`iPad`, `iPhone`, `iPhone5`, `iPhone6`, `iPhone 6 Plus`).
* [CB-7633](https://issues.apache.org/jira/browse/CB-7633) - (Re-fix based on updated unit tests) `iPhone 6` Plus support
* Updated **iOS** tests for locked orientations
* Added more **iOS** splash screen tests.
* [CB-7633](https://issues.apache.org/jira/browse/CB-7633) - Add support for `iPhone 6/6+`
* Added failing `iPhone 6/6` Plus tests.
* Added `npm test`
* [CB-7663](https://issues.apache.org/jira/browse/CB-7663) - **iOS** unit tests for splash screen
* Properly formatted splashscreen preference docs.
