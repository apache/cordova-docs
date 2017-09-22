---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today because they are being deprecated:

* cordova-plugin-console: 1.1.0
* cordova-plugin-compat: 1.2.0
* cordova-plugin-device-motion: 2.0.0
* cordova-plugin-device-orientation: 2.0.0 

`cordova-plugin-console` has been integrated into `cordova-ios@4.5.0+`. It is not needed anymore. Make sure to remove it from your projects if you plan on updating your `cordova-ios`!

Similarly, `cordova-plugin-compat` has been integrated into the upcoming `cordova-android@6.3.0` release. Please remove it from your projects when you update to the latest version of `cordova-android`. 

`cordova-plugin-device-motion` and `cordova-plugin-device-orientation` have officially been deprecated. These plugins are being replaced by the built in [W3C Device Motion and Orientation APIs](https://www.w3.org/TR/2016/CR-orientation-event-20160818/), which are now supported on iOS, Android and Windows. Checkout the migration guides the PhoneGap team wrote for [Device Motion](https://blog.phonegap.com/migrating-from-the-cordova-device-motion-plugin-ddd8176632ed) and [Device Orientation](https://blog.phonegap.com/migrating-from-the-cordova-device-orientation-plugin-8442b869e6cc).
 
----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@latest --save

Changes include:
<!--more-->

cordova-plugin-console@1.1.0
* [CB-13170](https://issues.apache.org/jira/browse/CB-13170) Integrated this plugin into `cordova-ios@4.5.0`. This plugin will not install for `cordova-ios >= 4.5.0`.
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on `Travis` and `AppVeyor`
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12991](https://issues.apache.org/jira/browse/CB-12991) (CI) Updated CI badges
* [CB-12935](https://issues.apache.org/jira/browse/CB-12935) (**windows**) Enable paramedic builds on AppVeyor
* [CB-12935](https://issues.apache.org/jira/browse/CB-12935) (**ios**, **Android**) Run `paramedic` builds on `Travis`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-compat@1.2.0
* [CB-12730](https://issues.apache.org/jira/browse/CB-12730) Integrate this plugin into `cordova-android@6.3.0` and deprecate this plugin as it is no longer needed.
* [CB-12730](https://issues.apache.org/jira/browse/CB-12730) Prevent plugin from installing with `cordova-android >= 6.3.0`

cordova-plugin-device-orientation@2.0.0
* [CB-13076](https://issues.apache.org/jira/browse/CB-13076) added deprecation notice to `info` tag
* [CB-12728](https://issues.apache.org/jira/browse/CB-12728) Device Orientation - SUNSET
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on `Travis` and `AppVeyor`
* [CB-12667](https://issues.apache.org/jira/browse/CB-12667) Reset changes for searching Samsung sensors
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12991](https://issues.apache.org/jira/browse/CB-12991) (CI) Updated CI badges
* [CB-12935](https://issues.apache.org/jira/browse/CB-12935) (**windows**) Enable paramedic builds on `AppVeyor`
* [CB-12935](https://issues.apache.org/jira/browse/CB-12935) (**ios**, **Android**) Enable paramedic builds on `Travis CI`
* [CB-12667](https://issues.apache.org/jira/browse/CB-12667) **Android**: Added logic for searching sensors from Samsung vendor
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.

cordova-plugin-device-motion@2.0.0
* [CB-13068](https://issues.apache.org/jira/browse/CB-13068) added `info` tag for deprecation
* [CB-12726](https://issues.apache.org/jira/browse/CB-12726) Device Motion - SUNSET
* [CB-13115](https://issues.apache.org/jira/browse/CB-13115) **Browser** Fixed `getCurrentAcceleration()` on **Firefox**, **Safari** and **Edge**
* [CB-13028](https://issues.apache.org/jira/browse/CB-13028) (CI) **Browser** builds on `Travis` and `AppVeyor`
* [CB-13000](https://issues.apache.org/jira/browse/CB-13000) (CI) Speed up **Android** builds
* [CB-12991](https://issues.apache.org/jira/browse/CB-12991) (CI) Updated CI badges
* [CB-12935](https://issues.apache.org/jira/browse/CB-12935) (**windows**) Enable paramedic builds on `AppVeyor`
* [CB-12935](https://issues.apache.org/jira/browse/CB-12935) (**ios**, **Android**) Enable paramedic builds on `Travis CI`
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.
