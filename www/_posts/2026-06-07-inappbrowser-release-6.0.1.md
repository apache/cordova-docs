---
layout: post
author:
    name: Niklas Merz
    url: https://w3c.social/@niklasmerz
title:  "Cordova Plugin InAppBrowser 6.0.1 With Fix For CVE-2026-47430 Released!"
categories: announcements
tags: news releases plugins
---

We are happy to announce that we have just released an update to `cordova-plugin-inappbrowser`! 

* [cordova-plugin-inappbrowser@6.0.1](https://www.npmjs.com/package/cordova-plugin-inappbrowser)

## Release Highlights

This is a small patch release that addresses the recently published vulnerability **[CVE-2026-47430](https://www.cve.org/CVERecord?id=CVE-2026-47430): Cordova Plugin InAppBrowser: iOS: Arbitrary Cordova callback IDs can be dispatched without validation from InAppBrowser WebViews**. Full details:

*Severity: important*

Affected versions:

- Cordova Plugin InAppBrowser (cordova-plugin-inappbrowser) 3.1.0 through 6.0.0

Description:

### Summary

The iOS implementation of `cordova-plugin-inappbrowser` passes the `id` field from a `WKScriptMessage` body to `commandDelegate sendPluginResult:callbackId:` with no format validation (`CDVWKInAppBrowser.m:560–574`). Any web content loaded inside the InAppBrowser can fire any pending Cordova callback in the host app by posting a message whose `id` field is a guessable or enumerated callback identifier. An attack abusing this weakness must be tailored to the specific plugins and callback IDs the host app uses. Though an attacker with knowledge of common Cordova plugin configurations could craft reusable payloads targeting widely-adopted plugins.


### Impact

An unauthenticated remote attacker who controls content displayed in the InAppBrowser — via a URL the app opens (OAuth redirect, marketing link, deep-link target) or a network interception — can call `window.webkit.messageHandlers.cordova_iab.postMessage({id: '<victim-callback-id>', d: '...'})` to fire callbacks belonging to any other installed Cordova plugin (Camera, Contacts, File, Geolocation). Cordova callback IDs follow the predictable format `<PluginName><sequential-integer>`, making enumeration feasible. Successful exploitation allows the attacker to spoof plugin results across trust boundaries — for example, injecting a forged camera approval, a fabricated contacts list, or a crafted file-read response.

This issue affects Cordova Plugin InAppBrowser: from 3.1.0 through 6.0.0.

Users are recommended to upgrade to version 6.0.1, which fixes the issue.

References:

https://www.cve.org/CVERecord?id=CVE-2026-47430

Please report any issues you find on [GitHub](https://github.com/apache/cordova-plugin-inappbrowser/issues)!

<!--more-->
# Changes include:

* [GH-1152](https://github.com/apache/cordova-plugin-inappbrowser/pull/1152) fix(ios): check callbackId with regex
* [GH-1095](https://github.com/apache/cordova-plugin-inappbrowser/pull/1095) chore: gh-action workflow, license header formatting & cleanups
* Fix npm audit issues
