---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Splash Screen Plugin Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to our Splash Screen plugin!

* [cordova-plugin-splashscreen@6.0.1](https://www.npmjs.org/package/cordova-plugin-splashscreen)

## Release Highlights

### Splash Screen

This patch release fixes some bugs on Android, including an issue with the "backbutton" event [reported by some users](https://github.com/apache/cordova-android/issues/1106).

* [GH-314](https://github.com/apache/cordova-plugin-splashscreen/pull/314) fix: refocus after webview visible (#186)
* [GH-213](https://github.com/apache/cordova-plugin-splashscreen/pull/213) fix(android): Fixes nav and title bars still appearing when app is fullscreen [GH-180](https://github.com/apache/cordova-plugin-splashscreen/pull/180)

<!--more-->
# Changes include:

* [GH-325](https://github.com/apache/cordova-plugin-splashscreen/pull/325) chore: update package-lock.json
* [GH-213](https://github.com/apache/cordova-plugin-splashscreen/pull/213) GH-180 (android): Fixes nav and title bars still appearing when app is fullscreen
* [GH-320](https://github.com/apache/cordova-plugin-splashscreen/pull/320) ci(ios): update workflow w/ **iOS** 15
* [GH-319](https://github.com/apache/cordova-plugin-splashscreen/pull/319) ci: add action-badge
* [GH-318](https://github.com/apache/cordova-plugin-splashscreen/pull/318) ci: remove travis & appveyor
* [GH-317](https://github.com/apache/cordova-plugin-splashscreen/pull/317) ci: add gh-actions workflows
* [GH-312](https://github.com/apache/cordova-plugin-splashscreen/pull/312) fix: autofocus after splashscreen
* [GH-314](https://github.com/apache/cordova-plugin-splashscreen/pull/314) fix: refocus after webview visible (#186)
* [GH-304](https://github.com/apache/cordova-plugin-splashscreen/pull/304) ci: add node-14.x to workflow
* [GH-291](https://github.com/apache/cordova-plugin-splashscreen/pull/291) chore(docs): Update missing  default resources for **Android** #689
* [GH-293](https://github.com/apache/cordova-plugin-splashscreen/pull/293) Documentation Enhancement for **Android** Dark Mode
* [GH-300](https://github.com/apache/cordova-plugin-splashscreen/pull/300) docs: Added **iOS** notes to supported platforms.
* [GH-296](https://github.com/apache/cordova-plugin-splashscreen/pull/296) chore(pkg): remove default-valued field "homepage"
* [GH-292](https://github.com/apache/cordova-plugin-splashscreen/pull/292) ci(travis): updates **Android** API level
* [GH-286](https://github.com/apache/cordova-plugin-splashscreen/pull/286) (docs): Add Information about how to use Dark Mode SplashScreens