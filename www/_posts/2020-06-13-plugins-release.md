---
layout: post
author:
    name: Niklas Merz
title:  "Splashscreen and InAppBrowser plugin Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to some plugins!

* [cordova-plugin-inappbrowser@4.0.0](https://www.npmjs.org/package/cordova-plugin-inappbrowser)
* [cordova-plugin-splashscreen@5.0.4](https://www.npmjs.org/package/cordova-plugin-splashscreen)

## Release Highlights

### InAppBrowser

### cordova-common

Cordova-iOS Platform 6.x will have splash screen integrated and no longer needs the plugin. This releas prevents the plugin from being added to the iOS 6.x platform.

* [GH-261](https://github.com/apache/cordova-plugin-splashscreen/pull/261) chore: add `cordova-ios` requirement <6.0.0

<!--more-->
# Changes include:

### Splashscreen 5.0.4 (Jun 03, 2020)
* [GH-261](https://github.com/apache/cordova-plugin-splashscreen/pull/261) chore: add `cordova-ios` requirement <6.0.0
* chore(asf): update git notification settings
* update CONTRIBUTING.md
* [GH-251](https://github.com/apache/cordova-plugin-splashscreen/pull/251) chore(npm): adds ignore list
* [GH-252](https://github.com/apache/cordova-plugin-splashscreen/pull/252) ci: updates Node.js versions
* [GH-236](https://github.com/apache/cordova-plugin-splashscreen/pull/236) update homepage to github `README` page
* [GH-239](https://github.com/apache/cordova-plugin-splashscreen/pull/239) update `README`.md by adding missing info
* ci(travis): Upgrade node from 6 to 8
* ci(travis): Remove **Android 4.4**, Add **Android** 9.0
* [GH-212](https://github.com/apache/cordova-plugin-splashscreen/pull/212) ci(travis): Add ADDITIONAL_TESTS_DIR=./tests/ios
