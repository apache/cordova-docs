---
layout: post
author:
    name: Simon MacDonald
    url: https://twitter.com/macdonst
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-battery-status@2.0.1
* cordova-plugin-camera@4.0.1
* cordova-plugin-device@2.0.1
* cordova-plugin-dialogs@2.0.1
* cordova-plugin-file@6.0.1
* cordova-plugin-geolocation@4.0.1
* cordova-plugin-inappbrowser@2.0.1
* cordova-plugin-media@5.0.1
* cordova-plugin-media-capture@3.0.1
* cordova-plugin-network-information@2.0.1
* cordova-plugin-screen-orientation@3.0.1
* cordova-plugin-splashscreen@5.0.1
* cordova-plugin-statusbar@2.4.1
* cordova-plugin-vibration@3.0.1

Our last plugin release had an issue which made it impossible to install from npm. These point releases of the plugins fix the bug allowing you to install from npm as well as git url.

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera
    cordova plugin add cordova-plugin-camera@latest

Changes include:
<!--more-->
cordova-plugin-battery-status@2.0.1
* [CB-13700](https://issues.apache.org/jira/browse/CB-13700) Fix to allow 2.0.0 version install (#62)

cordova-plugin-camera@4.0.1
* CB-13701Fix to allow 4.0.0 version install

cordova-plugin-device@2.0.1
* [CB-13702](https://issues.apache.org/jira/browse/CB-13702) Fix to allow 2.0.0 version install

cordova-plugin-dialogs@2.0.1
* [CB-13703](https://issues.apache.org/jira/browse/CB-13703) Fix to allow 2.0.0 version install

cordova-plugin-file@6.0.1
* [CB-13704](https://issues.apache.org/jira/browse/CB-13704) Fix to allow 6.0.0 version install

cordova-plugin-geolocation@4.0.1
* [CB-13705](https://issues.apache.org/jira/browse/CB-13705) Fix to allow 4.0.0 version install

cordova-plugin-inappbrowser@2.0.1
* [CB-13699](https://issues.apache.org/jira/browse/CB-13699) Fix to allow 2.0.0 version install

cordova-plugin-media@5.0.1
* [CB-13706](https://issues.apache.org/jira/browse/CB-13706) Fix to allow 5.0.0 version install (#160)
* Bump cordova-plugin-file dependency to 6.0.0

cordova-plugin-media-capture@3.0.1
* [CB-13707](https://issues.apache.org/jira/browse/CB-13707) Fix to allow 3.0.0 version install (#88)
* Bump cordova-plugin-file dependency to 6.0.0

cordova-plugin-network-information@2.0.1
* [CB-13708](https://issues.apache.org/jira/browse/CB-13708) Fix to allow 2.0.0 version install (#60)

cordova-plugin-screen-orientation@3.0.1
* [CB-13710](https://issues.apache.org/jira/browse/CB-13710) Fix to allow 3.0.0 version install (#28)

cordova-plugin-splashscreen@5.0.1
* [CB-13709](https://issues.apache.org/jira/browse/CB-13709) Fix to allow 5.0.0 version install (#144)

cordova-plugin-statusbar@2.4.1
* [CB-13712](https://issues.apache.org/jira/browse/CB-13712) (iOS): fix overlaysWebView reset on rotation (#92)

cordova-plugin-vibration@3.0.1
* [CB-13711](https://issues.apache.org/jira/browse/CB-13711) Fix to allow 3.0.0 version install (#63)
