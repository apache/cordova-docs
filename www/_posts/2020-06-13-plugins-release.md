---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Splash Screen and InAppBrowser plugin Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update to some plugins!

* [cordova-plugin-inappbrowser@4.0.0](https://www.npmjs.org/package/cordova-plugin-inappbrowser)
* [cordova-plugin-splashscreen@5.0.4](https://www.npmjs.org/package/cordova-plugin-splashscreen)

## Release Highlights

### InAppBrowser

The most notable changes in this major release are:

* The Cordova-iOS 6.x platform removes all `UIWebView` code and this version also removes the `UIWebView` code from the InAppBrowser plugin [GH-635](https://github.com/apache/cordova-plugin-inappbrowser/pull/635).
* For backwards compatibility, this plugin used to hook window.open. However, the plugin-installed hook of window.open could have unintended side effects (especially if this plugin is included only as a dependency of another plugin) and it has been removed in this release.  [GH-599](https://github.com/apache/cordova-plugin-inappbrowser/issues/599)
* The InAppBrowser plugin used to implement its own status bar. It has been removed in this release to correctly display the content of the iOS status bar without overlapping the content in the InAppBrowser on different devices. [GH-656](https://github.com/apache/cordova-plugin-inappbrowser/pull/656)

### Splash Screen

In the Cordova-iOS 6.x platform, the splash screen feature has been integrated into its core and no longer needs this plugin. This release prevents the plugin from being added to the iOS 6.x platform.

* [GH-261](https://github.com/apache/cordova-plugin-splashscreen/pull/261) chore: add `cordova-ios` requirement <6.0.0

<!--more-->
# Changes include:

### InAppBrowser 4.0.0 (Jun 09, 2020)

* [GH-715](https://github.com/apache/cordova-plugin-inappbrowser/pull/715) (ios): fix regression in [GH-656](https://github.com/apache/cordova-plugin-inappbrowser/pull/656)
* [GH-685](https://github.com/apache/cordova-plugin-inappbrowser/pull/685) chore: update install engines
* [GH-656](https://github.com/apache/cordova-plugin-inappbrowser/pull/656) (ios) Remove fake status bar with hardcoded height to fix issues in **iOS** devices with a notch
* [GH-693](https://github.com/apache/cordova-plugin-inappbrowser/pull/693) fix(ios): Allow loading local html files
* [GH-293](https://github.com/apache/cordova-plugin-inappbrowser/pull/293)  **Android**: SSL errors handling in **Android**
* [GH-672](https://github.com/apache/cordova-plugin-inappbrowser/pull/672) fix(ios): prevent statusbar rotation after closing `InAppBrowser`
* chore(asf): update git notification settings
* [GH-669](https://github.com/apache/cordova-plugin-inappbrowser/pull/669) Allow App using `InAppBrowser` to be hosted in a cross-origin iframe
* [GH-600](https://github.com/apache/cordova-plugin-inappbrowser/pull/600) (all platforms): remove "window.open" overwrite
* [GH-670](https://github.com/apache/cordova-plugin-inappbrowser/pull/670) chore: bump version to 4.0.0-dev
* Update CONTRIBUTING.md
* [GH-662](https://github.com/apache/cordova-plugin-inappbrowser/pull/662) docs: replaces outdated transition and presentation style links
* [GH-666](https://github.com/apache/cordova-plugin-inappbrowser/pull/666) chore: remove deprecated orientation methods
* [GH-515](https://github.com/apache/cordova-plugin-inappbrowser/pull/515) Fix incorrect TypeScript typings
* [GH-654](https://github.com/apache/cordova-plugin-inappbrowser/pull/654) add check for openInSystem postNotification
* [GH-659](https://github.com/apache/cordova-plugin-inappbrowser/pull/659) ci: updates Node.js versions
* [GH-658](https://github.com/apache/cordova-plugin-inappbrowser/pull/658) chore(npm): improve ignore list
* [GH-442](https://github.com/apache/cordova-plugin-inappbrowser/pull/442) fix(android): Reset lefttoright if not set
* [GH-648](https://github.com/apache/cordova-plugin-inappbrowser/pull/648) (android) Correcting the documentation regarding lefttoright opt…
* [GH-634](https://github.com/apache/cordova-plugin-inappbrowser/pull/634) (android) Added option to turn on/off fullscreen mode in **Android**
* [GH-616](https://github.com/apache/cordova-plugin-inappbrowser/pull/616) (android) `InAppBrowser`: java.lang.IllegalArgumentException
* [GH-635](https://github.com/apache/cordova-plugin-inappbrowser/pull/635) breaking(ios): remove UIWebView

### Splash Screen 5.0.4 (Jun 03, 2020)
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
