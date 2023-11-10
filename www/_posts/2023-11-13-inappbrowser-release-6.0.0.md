---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Cordova Plugin InAppBrowser 6.0.0 Released!"
categories: announcements
tags: news releases plugins
---

We are happy to announce that we have just released an update to `cordova-plugin-inappbrowser`! 

* [cordova-plugin-inappbrowser@6.0.0](https://www.npmjs.com/package/cordova-plugin-inappbrowser)

## Release Highlights

This is a new major version with breaking changes which requires at least `cordova-android@10.0.0` and `cordova-ios@6.0.0`. Make sure to check and update your platforms.

The most notable improvements in this major release are:

* Permission requests for Android
* Removal of deprecated code and platforms
* Make WebView inspectable on iOS
* Make system open tel, sms, mailto and geo links on iOS

Please report any issues you find on [GitHub](http://https://github.com/apache/cordova-plugin-inappbrowser/issues)!

<!--more-->
# Changes include:

* [GH-1033](https://github.com/apache/cordova-plugin-inappbrowser/pull/1033) chore: bump to next major release 6.0.0 & update deependencies
* [GH-1032](https://github.com/apache/cordova-plugin-inappbrowser/pull/1032) chore(lint): update eslint config and apply fixes
* [GH-1030](https://github.com/apache/cordova-plugin-inappbrowser/pull/1030) fix!: remove deprecated platforms **Windows** & osx
* [GH-1031](https://github.com/apache/cordova-plugin-inappbrowser/pull/1031) fix(ios): Remove deprecation warnings and old code
* [GH-927](https://github.com/apache/cordova-plugin-inappbrowser/pull/927) fix: explicitly import dependencies, instead of relying on PCH files. This is important in Swift projects, where you cannot use prefix headers.
* [GH-968](https://github.com/apache/cordova-plugin-inappbrowser/pull/968) GH-706 **Android**: Allow permissions requests
* [GH-1029](https://github.com/apache/cordova-plugin-inappbrowser/pull/1029) chore: update asf config
* [GH-1019](https://github.com/apache/cordova-plugin-inappbrowser/pull/1019) feat(android): Download event
* [GH-1020](https://github.com/apache/cordova-plugin-inappbrowser/pull/1020) ci(gh-action): Paramedic CI sync
* [GH-1015](https://github.com/apache/cordova-plugin-inappbrowser/pull/1015) feat(ios): Make WebView inspectable
* [GH-1016](https://github.com/apache/cordova-plugin-inappbrowser/pull/1016) chore: use https urls in tests and `README`
* [GH-1017](https://github.com/apache/cordova-plugin-inappbrowser/pull/1017) chore: Update SUPPORT_QUESTION.md template
* [GH-977](https://github.com/apache/cordova-plugin-inappbrowser/pull/977) fix(docs): missing xml indicator in code block
* [GH-971](https://github.com/apache/cordova-plugin-inappbrowser/pull/971) ci: sync workflow with paramedic
* [GH-964](https://github.com/apache/cordova-plugin-inappbrowser/pull/964) dep(npm): bump package-lock v2 w/ rebuild
* [GH-957](https://github.com/apache/cordova-plugin-inappbrowser/pull/957) ci(android): update java requirement for `cordova-android`@11
* [GH-946](https://github.com/apache/cordova-plugin-inappbrowser/pull/946) fix(android): increase toolbar to 48dp
* [GH-912](https://github.com/apache/cordova-plugin-inappbrowser/pull/912) ci(ios): update workflow w/ **iOS** 15
* [GH-907](https://github.com/apache/cordova-plugin-inappbrowser/pull/907) ci: add action-badge
* [GH-906](https://github.com/apache/cordova-plugin-inappbrowser/pull/906) ci: remove travis & appveyor
* [GH-903](https://github.com/apache/cordova-plugin-inappbrowser/pull/903) ci: add gh-actions workflows
* [GH-861](https://github.com/apache/cordova-plugin-inappbrowser/pull/861) fix(android): add space between default useragent and custom AppendUserAgent
* [GH-881](https://github.com/apache/cordova-plugin-inappbrowser/pull/881) fix(ios): make system open tel, sms, mailto and geo links
