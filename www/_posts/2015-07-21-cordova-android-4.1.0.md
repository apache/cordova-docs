---
layout: post
author:
    name: Nikhil Khandelwal
    url: https://twitter.com/nikhilkh
title:  "Apache Cordova Android 4.1.0"
categories: announcements
tags: news releases
---
We are happy to announce that `Cordova Android 4.1.0` has been released.

With this release, there is now support for checking system requirements for Android platform:

	$>cordova requirements android
	
	Requirements check results for android:
	Java JDK: installed 1.7.0
	Android SDK: installed
	Android target: installed android-19,android-21,android-22,Google Inc.:Google APIs:19,Google Inc.:Google APIs (x86 System Image):19,Google Inc.:Google APIs:21
	Gradle: installed 1.12

Apart from a number of bug fixes, mininumSdkTarget has also been switched to 14 from 7. The minimum supported Android OS for Cordova is now Ice Cream Sandwich.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@4.1.0

To add it explicitly:

    cordova platform add android@4.1.0

<!--more-->
## What's new in Android platform
* [CB-9392](https://issues.apache.org/jira/browse/CB-9392) Fixed printing flavored versions. This closes #184.
* [CB-9382](https://issues.apache.org/jira/browse/CB-9382) [Android] Fix KeepRunning setting when Plugin activity is showed. This closes #200
* [CB-9391](https://issues.apache.org/jira/browse/CB-9391) Fixes cdvBuildMultipleApks option casting
* [CB-9343](https://issues.apache.org/jira/browse/CB-9343) Split the Content-Type to obtain a clean mimetype
* [CB-9255](https://issues.apache.org/jira/browse/CB-9255) Make getUriType case insensitive.
* [CB-9149](https://issues.apache.org/jira/browse/CB-9149) Fixes JSHint issue introduced by 899daa9
* [CB-9372](https://issues.apache.org/jira/browse/CB-9372): Remove unused files: 'main.js' & 'master.css'. This closes #198
* [CB-9149](https://issues.apache.org/jira/browse/CB-9149) Make gradle alias subprojects in order to handle libs that depend on libs. This closes #182
* Update min SDK version to 14
* Update licenses. This closes #190
* [CB-9185](https://issues.apache.org/jira/browse/CB-9185) Fix signed release build exception. This closes #193.
* [CB-9286](https://issues.apache.org/jira/browse/CB-9286) Fixes build failure when ANDROID_HOME is not set.
* [CB-9284](https://issues.apache.org/jira/browse/CB-9284) Fix for handling absolute path for keystore in build.json
* [CB-9260](https://issues.apache.org/jira/browse/CB-9260) Install Android-22 on Travis-CI
* Adding .ratignore file.
* [CB-9119](https://issues.apache.org/jira/browse/CB-9119) Adding lib/retry.js for retrying promise-returning functions. Retrying 'adb install' in emulator.js because it sometimes hangs.
* [CB-9115](https://issues.apache.org/jira/browse/CB-9115) android: Grant Lollipop permission req
* Remove extra console message
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Report expected gradle location properly
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Fixes gradle check failure due to missing quotes
* [CB-9080](https://issues.apache.org/jira/browse/CB-9080): -d option is not supported on Android 4.1.1 and lower, removing
* [CB-8954](https://issues.apache.org/jira/browse/CB-8954) Adds `requirements` command support to check_reqs module
* Update JS snapshot to version 4.1.0-dev (via coho)
* [CB-8417](https://issues.apache.org/jira/browse/CB-8417) updated platform specific files from cordova.js repo
* Adding tests to confirm that preferences aren't changed by Intents
* Forgot to remove the method that copied over the intent data
* Getting around to removing this old Intent code
* Update JS snapshot to version 4.1.0-dev (via coho)
* Fix CordovaPluginTest on KitKat (start-up events seem to change)
* [CB-3360](https://issues.apache.org/jira/browse/CB-3360) Allow setting a custom User-Agent (close #162)
* [CB-8902](https://issues.apache.org/jira/browse/CB-8902) Use immersive mode when available when going fullscreen (close #175)
* Make BridgeMode methods public (they were always supposed to be)
* Simplify: EncodingUtils.getBytes(str) -> str.getBytes()
* Don't show warning when gradlew file is read-only
* Don't show warning when prepEnv copies gradlew and it's read-only
* Make gradle wrapper prepEnv code work even when android-sdk is read-only
* [CB-8897](https://issues.apache.org/jira/browse/CB-8897) Delete drawable/icon.png since it duplicates drawable-mdpi/icon.png
* Updating the template to target mininumSdkTarget=14
* [CB-8894](https://issues.apache.org/jira/browse/CB-8894): Updating the template to target mininumSdkTarget=14
* [CB-8891](https://issues.apache.org/jira/browse/CB-8891) Add a note about when the gradle helpers were added
* [CB-8891](https://issues.apache.org/jira/browse/CB-8891) Add a gradle helper for retrieving config.xml preference values
* [CB-8884](https://issues.apache.org/jira/browse/CB-8884) Delete Eclipse tweaks from create script
