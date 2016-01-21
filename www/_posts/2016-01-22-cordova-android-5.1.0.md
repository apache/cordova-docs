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
