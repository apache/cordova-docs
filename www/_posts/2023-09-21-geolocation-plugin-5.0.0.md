---
layout: post
author:
    name: Norman Breau
title:  "Geolocation Plugin 5.0.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-geolocation`!

* [cordova-plugin-geolocation@5.0.0](https://www.npmjs.com/package/cordova-plugin-geolocation)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-geolocation
cordova plugin add cordova-plugin-geolocation@5.0.0
```

## Release Highlights

### Breaking Changes

* **Modern JavaScript**

The JavaScript of the plugin has been upgraded to use ES6 features, such as `let` and `const`.

**NOTE**: This release has failed to upgrade required engines. Despite the declared requirement on `cordova-android` >= 6.3.0 and no declared requirement on iOS, the new minimum requirements will be:

- cordova-ios 6 or later
- cordova-android 10 or later

Earlier versions of these platforms may not work as expected. As always, it will be recommended to use the latest version available.
The engines _may be corrected_ in a patch release at a later date.

* **Cordova Windows Support Drop**

Support for the deprecated [cordova-windows](https://github.com/apache/cordova-windows) platform has been dropped and entirely removed in this release.

### Notable Fixes

* **Sanity check on Geolocation serialization on iOS**

    A rare occurrence of `Infinity` values would cause a crash during JSON serialization on iOS. This is now caught and will now produce a Position Unavailable error gracefully.

* **Improved Android Permission Handling**

    Android has received fixes for when handling coarse vs fine location permissions for improved compatibility on Android 12+ devices. Android will now handle the following situations:

    1. Permission request that consists of only `COARSE` location.
    2. Permission request that consists of both `COARSE` and `FINE` (high accuracy) location.
    3. Permission upgrade for when `COARSE` is granted, but `FINE` is required.

For more details on these changes, see the [PR](https://github.com/apache/cordova-plugin-geolocation/pull/250).

* **Improved W3C Compliance**

Fixes has been made to the `heading` and `speed` to better conform to the [W3C Geolocation API](https://www.w3.org/TR/geolocation/#constructing-a-geolocationposition) specification. If either of these values are not determined to be expected valid range, they will now return `null` to provide better consistency between Cordova and other web environments.

Please report any issues you find by following the this [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
## Changes Log

**Breaking Changes:**

* [GH-260](https://github.com/apache/cordova-plugin-media-capture/pull/260) chore(eslint): config upgrade to 5.0.0 (#260)
* [GH-267](https://github.com/apache/cordova-plugin-geolocation/pull/267) chore(windows)!: Remove **Windows** platform (#267)

**Fixes:**
* [GH-270](https://github.com/apache/cordova-plugin-geolocation/pull/270) fix: heading speed w3c spec (#270)
* [GH-250](https://github.com/apache/cordova-plugin-geolocation/pull/250) (android) fix: respect requested location accuracy when checking/requesting permissions on **Android** 12+ Handle bug on API < 32 when requesting COARSE permission results in TIMEOUT error.
* [GH-231](https://github.com/apache/cordova-plugin-geolocation/pull/231) (ios) fix: Check NSDictionary constructed from native CLLocation data is valid for conversion to JSON before attempting conversion. Prevents crashes due to values invalid for JSON conversion such as INFINITY.

**Other Changes:**

* [GH-247](https://github.com/apache/cordova-plugin-geolocation/pull/247) ci(android): update java requirement for `cordova-android`@11 (#247)
* [GH-241](https://github.com/apache/cordova-plugin-geolocation/pull/241) ci(ios): update workflow w/ **iOS** 15 (#241)
* [GH-239](https://github.com/apache/cordova-plugin-geolocation/pull/239) ci: add action-badge (#239)
* [GH-238](https://github.com/apache/cordova-plugin-geolocation/pull/238) ci: remove travis & appveyor (#238)
* [GH-236](https://github.com/apache/cordova-plugin-geolocation/pull/236) chore: npmrc (#236)
* [GH-234](https://github.com/apache/cordova-plugin-geolocation/pull/234) ci: add gh-actions workflows (#234)
* [GH-217](https://github.com/apache/cordova-plugin-geolocation/pull/217) ci: add node-14.x to workflow (#217)
* [GH-251](https://github.com/apache/cordova-plugin-geolocation/pull/251) ci: sync workflow with paramedic (#251)
* [GH-249](https://github.com/apache/cordova-plugin-geolocation/pull/249) dep(npm): bump package-lock v2 w/ rebuild (#249)
* [GH-268](https://github.com/apache/cordova-plugin-geolocation/pull/268) ci(gh-action): Sync with paramedic configs (#268)
* [GH-261](https://github.com/apache/cordova-plugin-geolocation/pull/261) ci: Sync with paramedic. Removed API 22 & 31, added API 24 & API 33 (#261)
* [GH-265](https://github.com/apache/cordova-plugin-geolocation/pull/265) chore: package-lock (#265)
* [GH-269](https://github.com/apache/cordova-plugin-geolocation/pull/269) test(windows): Remove window platform references from tests (#269)
