---
layout: post
author:
    name: Joe Bowser
    url: https://twitter.com/infil00p
title:  "Cordova Android 5.0.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 5.0.0` has been released.

With this release, there is now support for **Android Marshmallow** permission checking in plugins. Due to the nature of the recent **Android** changes, the major version has been incremented to reflect the new API changes.  Only plugins that use certain permissions as defined by **Google** are affected by this change. The following core plugins needed to be updated:
* `cordova-plugin-camera`
* `cordova-plugin-geolocation`
* `cordova-plugin-contacts`
* `cordova-plugin-file`
* `cordova-plugin-media`

We are in the process of releasing these plugins to [npm](https://www.npmjs.com/). If you decide to update to `cordova-android@5.0.0` before we release the plugins, please install these updated plugins via `git` for now.

    cordova plugin add https://github.com/apache/cordova-plugin-camera.git

Information on how to use the new **Android Permission APIs** can be found in the Cordova documentation, which can be found [here](http://cordova.apache.org/docs/en/latest/guide/platforms/android/plugin.html).

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@5.0.0

To add it explicitly:

    cordova platform add android@5.0.0

<!--more-->
## What's new in Android platform
* [CB-9909](https://issues.apache.org/jira/browse/CB-9909) Shouldn't escape spaces in paths on **Windows**.
* [CB-9870](https://issues.apache.org/jira/browse/CB-9870) updated hello world template
* [CB-9880](https://issues.apache.org/jira/browse/CB-9880) Fixes platform update failure when upgrading from `android@<4.1.0`
* [CB-9844](https://issues.apache.org/jira/browse/CB-9844) Remove old `.java` after renaming activity
* [CB-9800](https://issues.apache.org/jira/browse/CB-9800)  Fixing contribute link.
* [CB-9782](https://issues.apache.org/jira/browse/CB-9782)  Check in `cordova-common` dependency
* [CB-9835](https://issues.apache.org/jira/browse/CB-9909) Downgrade `properties-parser` to prevent failures in **Node** < `4.x`
* [CB-9782](https://issues.apache.org/jira/browse/CB-9782)  Implements PlatformApi contract for Android platform.
* [CB-9826](https://issues.apache.org/jira/browse/CB-9826)  Fixed `test-build` script on windows.
* Refactor of the Cordova Plugin/Permissions API
* Bump up to API level 23
* Commiting code to handle permissions, and the special case of the Geolocation Plugin
* [CB-9608](https://issues.apache.org/jira/browse/CB-9608) `cordova-android` no longer builds on **Node 0.10** or below
* [CB-9080](https://issues.apache.org/jira/browse/CB-9080) `Cordova CLI` run for **Android** versions `4.1.1` and lower throws error
* [CB-9557](https://issues.apache.org/jira/browse/CB-9557) Fixes apk install failure when switching from debug to release build
* [CB-9496](https://issues.apache.org/jira/browse/CB-9496) removed permissions added for crosswalk
* [CB-9402](https://issues.apache.org/jira/browse/CB-9402)  Allow to set gradle` distubutionUrl` via `env variable` `CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL`
* [CB-9428](https://issues.apache.org/jira/browse/CB-9428)  update script now bumps up `minSdkVersion` to `14` if it is less than that.
* [CB-9430](https://issues.apache.org/jira/browse/CB-9430)  Fixes `check_reqs` failure when `javac` returns an extra line
* [CB-9172](https://issues.apache.org/jira/browse/CB-9172)  Improved emulator deploy stability. 
* [CB-9404](https://issues.apache.org/jira/browse/CB-9409)  Fixed an exception when path contained `-debug` or `-release`
* [CB-8320](https://issues.apache.org/jira/browse/CB-8320)  Setting up gradle so we can use `CordovaLib` as a standard **Android** Library
* [CB-9185](https://issues.apache.org/jira/browse/CB-9185)  Fixed an issue when unsigned apks couldn't be found.
* [CB-9397](https://issues.apache.org/jira/browse/CB-9397)  Fixes minor issues with `cordova requirements android`
* [CB-9389](https://issues.apache.org/jira/browse/CB-9389)  Fixes build/check_reqs hang
