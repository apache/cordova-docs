---
layout: post
author:
    name: Carlos Santana
    url: https://twitter.com/csantanapr
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-camera@2.1.1
* cordova-plugin-statusbar@2.1.2
* cordova-plugin-globalization@1.0.3
* cordova-plugin-splashscreen@3.2.1


----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@2.1.1 --save

Changes include:
<!--more-->

cordova-plugin-camera@2.1.1
* [CB-10825](https://issues.apache.org/jira/browse/CB-10825) **Android** should request READ permission for gallery source
* added apache license header to appium files
* [CB-10720](https://issues.apache.org/jira/browse/CB-10720) Fixed spelling, capitalization, and other small issues.
* [CB-10414](https://issues.apache.org/jira/browse/CB-10414) Adding focus handler to resume video when user comes back on leaving the app while preview was running
* Appium tests: adjust swipe distance on **Android**
* [CB-10750](https://issues.apache.org/jira/browse/CB-10750) Appium tests: fail fast if session is irrecoverable
* Adding missing semi colon
* Adding focus handler to make sure filepicker gets launched when app is active on **Windows**
* [CB-10128](https://issues.apache.org/jira/browse/CB-10128) **iOS** Fixed how checks access authorization to camera & library. This closes #146
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add JSHint for plugins
* [CB-10639](https://issues.apache.org/jira/browse/CB-10639) Appium tests: Added some timeouts, Taking a screenshot on failure, Retry taking a picture up to 3 times, Try to restart the Appium session if it's lost
* [CB-10552](https://issues.apache.org/jira/browse/CB-10552) Replacing images in README.md.
* Added a lot of more cases to get the real path on **Android** 
* [CB-10625](https://issues.apache.org/jira/browse/CB-10625) **Android** getPicture fails when getting a photo from the Photo Library - Google Photos
* [CB-10619](https://issues.apache.org/jira/browse/CB-10619) Appium tests: Properly switch to webview on **Android**
* [CB-10397](https://issues.apache.org/jira/browse/CB-10397) Added Appium tests
* [CB-10576](https://issues.apache.org/jira/browse/CB-10576) MobileSpec can't get results for **Windows**-Store 8.1 Builds
* chore: edit package.json license to match SPDX id
* [CB-10539](https://issues.apache.org/jira/browse/CB-10539) Commenting out the verySmallQvga maxResolution option on **Windows**
* [CB-10541](https://issues.apache.org/jira/browse/CB-10541) Changing default maxResoltion to be highestAvailable for CameraCaptureUI on **Windows**
* [CB-10113](https://issues.apache.org/jira/browse/CB-10113) **Browser** - Layer camera UI on top of all! 
* [CB-10502](https://issues.apache.org/jira/browse/CB-10502) **Browser** - Fix camera plugin exception in Chrome when click capture.
* Adding comments
* Camera tapping fix on **Windows**

cordova-plugin-statusbar@2.1.2
* [CB-10752](https://issues.apache.org/jira/browse/CB-10752) for for status bar overlays the webview on **iOS** 6 in some cases
* [CB-10683](https://issues.apache.org/jira/browse/CB-10683) Fix wrong StatusBar.isVisible initial value on **Window**
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add JSHint for plugins
* [CB-10047](https://issues.apache.org/jira/browse/CB-10047) fix **iOS** 8 deprecated warnings

cordova-plugin-globalization@1.0.3
* [CB-10792](https://issues.apache.org/jira/browse/CB-10792) -Cannot install cordova-plugin-globalization with cordova-windows on Ubuntu
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add JSHint for plugins
* Minor changes to readme
* [CB-10605](https://issues.apache.org/jira/browse/CB-10605) fix deprecation warnings on **iOS**
* chore: edit package.json license to match SPDX id

cordova-plugin-splashscreen@3.2.1
* [CB-10764](https://issues.apache.org/jira/browse/CB-10764) Remove emoji in cordova-plugin-splashscreen
* [CB-10650](https://issues.apache.org/jira/browse/CB-10650) Non-index content.src causes Splashscreen to be not displayed on **Browser**
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add JSHint for plugins
* [CB-10606](https://issues.apache.org/jira/browse/CB-10606) fix deprecation warning for interfaceOrientation on **iOS**
* chore: edit package.json license to match SPDX id