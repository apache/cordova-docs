---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Android 5.1.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 5.1.0` has been released.

This update introduces a new API for Android plugin authors. Plugins that launch external activities can now better handle method calls on devices that are low on memory. In that scenario, the Android OS will sometimes kill the Cordova Activity when it is pushed into the background by the external Activity. This causes the plugin to lose any callbacks they have pending in the javascript. The new API allows the results of external Activity calls to be delivered via the resume event that is fired in the javascript after the Cordova Activity is destroyed and recreated. Plugin authors wishing to implement the new API should read the updated plugin guide [here](http://cordova.apache.org/docs/en/dev/guide/platforms/android/plugin.html).

Two core plugins support this new API and have been updated to fix longstanding bugs:

* `cordova-plugin-camera@2.1.0` (fixes [CB-9189](https://issues.apache.org/jira/browse/CB-9189))
* `cordova-plugin-contacts@2.0.1` (fixes [CB-10159](https://issues.apache.org/jira/browse/CB-9189))

Application authors are encouraged to update both their plugin and cordova-android versions to take advantage of these bug fixes. Please note that the aforementioned fixes require changes to your application as well. More information can be found in the READMEs of each of those plugins and in the new [Android lifecycle guide](http://cordova.apache.org/docs/en/dev/guide/platforms/android/lifecycle.html) that has been published to the Cordova documentation. This guide provides explanations and guidance on how to handle low memory scenarios on the Android platform as well as integrate the new resume APIs into your application.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update android@5.1.0

To add it explicitly:

    cordova platform add android@5.1.0

<!--more-->
## What's new in Android platform

* [CB-10386](https://issues.apache.org/jira/browse/CB-10386) Add `android.useDeprecatedNdk=true` to support `NDK` in `gradle`
* [CB-8864](https://issues.apache.org/jira/browse/CB-8864): Fixing this to mitigate [CB-8685](https://issues.apache.org/jira/browse/CB-8685) and [CB-10104](https://issues.apache.org/jira/browse/CB-10104)
* [CB-10105](https://issues.apache.org/jira/browse/CB-10105): Spot fix for tilde errors on paths.
* Update theme to `Theme.DeviceDefault.NoActionBar`
* [CB-10014](https://issues.apache.org/jira/browse/CB-10014): Set gradle `applicationId` to `package name`.
* [CB-9949](https://issues.apache.org/jira/browse/CB-9949): Fixing menu button event not fired in **Android**
* [CB-9479](https://issues.apache.org/jira/browse/CB-9479): Fixing the conditionals again, we should 
* [CB-8917](https://issues.apache.org/jira/browse/CB-8917): New Plugin API for passing results on resume after Activity destruction
* [CB-9971](https://issues.apache.org/jira/browse/CB-9971) Suppress `gradlew _JAVA_OPTIONS` output during build
* [CB-9836](https://issues.apache.org/jira/browse/CB-9836) Add `.gitattributes` to prevent `CRLF` line endings in repos
* added node_modules back into `.gitignore`
