---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: June 22, 2015"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-battery-status@1.1.0
* cordova-plugin-camera@1.2.0
* cordova-plugin-console@1.0.1
* cordova-plugin-contacts@1.1.0
* cordova-plugin-device@1.0.1
* cordova-plugin-device-motion@1.1.1
* cordova-plugin-device-orientation@1.0.1
* cordova-plugin-dialogs@1.1.1
* cordova-plugin-file@2.1.0
* cordova-plugin-file-transfer@1.2.0
* cordova-plugin-geolocation@1.0.1
* cordova-plugin-globalization@1.0.1
* cordova-plugin-inappbrowser@1.0.1
* cordova-plugin-legacy-whitelist@1.1.0
<!--more-->
* cordova-plugin-media@1.0.1
* cordova-plugin-media-capture@1.0.1
* cordova-plugin-network-information@1.0.1
* cordova-plugin-splashscreen@2.1.0
* cordova-plugin-statusbar@1.0.0
* cordova-plugin-test-framework@1.0.1
* cordova-plugin-vibration@1.2.0
* cordova-plugin-whitelist@1.1.0

The plugins have been pushed to [**npm**](https://www.npmjs.com/)! You can search for cordova plugins on [**npm**](https://www.npmjs.com/search?q=ecosystem%3Acordova) or alternative **npm** search sites like [**node-modules.com**](http://node-modules.com/search?q=ecosystem%3Acordova). We are also working on our own plugin search using **npm's** api. We will have more news on that soon!

If you haven't migrated your plugins over to **npm**, do it soon! We will be switching [**plugins.cordova.io**](http://plugins.cordova.io/) to read-only sometime next month. You can learn more about migrating your plugins to **npm** [here](http://cordova.apache.org/announcements/2015/04/21/plugins-release-and-move-to-npm.html).

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm org.apache.cordova.camera --save
    cordova plugin add org.apache.cordova.camera --save

Release Highlights:
* Readme files properly render on **npm** now!
* `package.json` repo links now point to our **Github** mirrors.
* Updated translations for the readme. Can be found under the docs directory.

Changes include:
<!--more-->

cordova-plugin-battery-status@1.1.0

* added missing license headers
* [CB-7953](https://issues.apache.org/jira/browse/CB-7953) Add `cordova-plugin-battery-status` support for **browser** platform
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-camera@1.2.0

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* Update docs. This closes #100
* [CB-8883](https://issues.apache.org/jira/browse/CB-8883) fix picture rotation issue
* major refactor : readability
* [CB-8498](https://issues.apache.org/jira/browse/CB-8498) Patch, this closes #64
* [CB-8879](https://issues.apache.org/jira/browse/CB-8879) fix stripe issue with correct aspect ratio
* [CB-8601](https://issues.apache.org/jira/browse/CB-8601) - **iOS** camera unit tests broken
* [CB-7667](https://issues.apache.org/jira/browse/CB-7667) **iOS8**: Handle case where camera is not authorized (closes #49)
* add missing license header

cordova-plugin-console@1.0.1

* move `logger.js` and `console-via-logger.js` to common modules, instead of the numerous repeats that were there.
* clean up tests, info is below log level so it does not exist by default.
* [CB-9191](https://issues.apache.org/jira/browse/CB-9191) Add basic tests
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-contacts@1.1.0

* Add more install text for legacy versions of cordova tools. This closes #60
* [CB-9056](https://issues.apache.org/jira/browse/CB-9056) Increased timeout of failing tests
* [CB-8987](https://issues.apache.org/jira/browse/CB-8987): Support for save and remove for **Windows 10**
* [CB-5278](https://issues.apache.org/jira/browse/CB-5278): We must close the cursor or we take down the whole app, and the debugger doesn't catch it.

cordova-plugin-device@1.0.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-device-motion@1.1.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* [CB-8842](https://issues.apache.org/jira/browse/CB-8842) Return cached values on **Android** if there is no updates from sensor

cordova-plugin-device-orientation@1.0.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-dialogs@1.1.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-file@2.1.0

* added missing license header
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* [CB-8844](https://issues.apache.org/jira/browse/CB-8844) Increased timeout for asset tests
* Updated `resolveFileSystem.js` so it can be parsed by `uglifyJS`
* [CB-8792](https://issues.apache.org/jira/browse/CB-8792) Fixes reading of json files using `readAsText`

cordova-plugin-file-transfer@1.2.0

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* [CB-6503](https://issues.apache.org/jira/browse/CB-6503): `Null` pointer check for headers in upload (This closes #27)
* [CB-6503](https://issues.apache.org/jira/browse/CB-6503): Allow `payload` `content-types` other than `multipart/form-data` to be used for upload
* Fix `NoSuchMethodException` looking up cookies.
* [CB-8951](https://issues.apache.org/jira/browse/CB-8951) **WP8** Handle exceptions in `download()` and `upload()` again
* **wp8** Relaxed engine version requirement, using reflection to see if methods are available
* Check for the existence of `Json.net` assembly to determin how we deserialize our headers.
* relax engine requirement to allow `-dev` versions
* Remove verbose console log messages
* bump required cordova-wp8 version to 4.0.0
* fix failing test resulting from overlapping `async` calls
* [CB-8721](https://issues.apache.org/jira/browse/CB-8721) Fixes incorrect headers and upload params parsing on **wp8**
* Replace all slashes in **windows** path

cordova-plugin-geolocation@1.0.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* [CB-8845](https://issues.apache.org/jira/browse/CB-8845) Updated comment why **Android** tests are currently pended
* [CB-8845](https://issues.apache.org/jira/browse/CB-8845) Pended tests for **Android**
* Add more install text for legacy versions of cordova tools. This closes #36

cordova-plugin-globalization@1.0.1

* added `moment.js` to `.ratignore`
* added license headers
* Adding `.ratignore` file.
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-inappbrowser@1.0.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-legacy-whitelist@1.1.0

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* Fix compile error introduces by `6a3d2cb3567`
* [CB-8739](https://issues.apache.org/jira/browse/CB-8739) added missing license headers
* Fix `XMl` parsing broken by `superclass` refactor (`XmlResourceParser`->`XmlPullParser`)

cordova-plugin-media@1.0.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* [CB-9079](https://issues.apache.org/jira/browse/CB-9079) Increased timeout for playback tests
* [CB-8888](https://issues.apache.org/jira/browse/CB-8888) Makes media status reporting on **windows** more precise
* [CB-8793](https://issues.apache.org/jira/browse/CB-8793) Increased playback timeout in tests

cordova-plugin-media-capture@1.0.1

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-network-information@1.0.1

* Adding `.ratignore` file.
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-splashscreen@2.1.0

* added missing license headers
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* Fixed **iOS** unit tests.
* [CB-3562](https://issues.apache.org/jira/browse/CB-3562): Disable screen rotation for **iPhone** when splash screen is shown. (closes #47)
* [CB-8988](https://issues.apache.org/jira/browse/CB-8988): Fix rotation on **iOS/iPad** (closes #46)
* [CB-8904](https://issues.apache.org/jira/browse/CB-8904): Don't reset the static variable when it's destroyed, otherwise we might as well just have a member variable
* Removed **wp7** from `plugin.xml` and `package.json`
* [CB-8750](https://issues.apache.org/jira/browse/CB-8750) **wp8**: Rewrite resoultion helper
* [CB-8750](https://issues.apache.org/jira/browse/CB-8750) **wp8**: Allow `resolution-specific` splashscreen images
* [CB-8758](https://issues.apache.org/jira/browse/CB-8758) **wp8**: `UnauthorizedAccessException` on `hide()`

cordova-plugin-statusbar@1.0.1

* add auto-tests for basic api
* [CB-9180](https://issues.apache.org/jira/browse/CB-9180) Add correct supported check for **Windows 8.1** desktop
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme

cordova-plugin-test-framework@1.0.1

* added `ratignore` file

cordova-plugin-vibration@1.2.0

* Adding `.ratignore` file.
* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* used min/max statics in vibrate with pattern. Use `callbackId` in callbacks, catch json format exceptions
* static-ized `MIN_DURATION` and `MAX_DURATION`
* [CB-7216](https://issues.apache.org/jira/browse/CB-7216) changed `cancelWasCalled` boolean
* [CB-7218](https://issues.apache.org/jira/browse/CB-7218) truncate `vibration` to 5 secs for **WP8**
* [CB-6916](https://issues.apache.org/jira/browse/CB-6916) added `vibrateWithPattern` for **wp8**
* [CB-6914](https://issues.apache.org/jira/browse/CB-6914) added `cancelVibration` for **wp8**
* **Android**: respect silent audio setting

cordova-plugin-whitelist@1.1.0

* [CB-9128](https://issues.apache.org/jira/browse/CB-9128) Updated translations for readme
* Usage of `CDVURLRequestFilter` protocol.
* [CB-9089](https://issues.apache.org/jira/browse/CB-9089) - **iOS** whitelist plugin does not compile
* [CB-9090](https://issues.apache.org/jira/browse/CB-9090) - Enable whitelist plugin for **cordova-ios** `4.0.0`
* Fixed error in `Content-Security-Policy` example
