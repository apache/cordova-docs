---
layout: post
author:
    name: Marcel Kinard
    url: https://twitter.com/MarcelKinard
title:  "Plugins Release: September 22, 2014"
categories: news
tags: release plugins
---
The following plugins were updated today:

* cordova-plugin-battery-status: 0.2.11
* cordova-plugin-camera: 0.3.2
* cordova-plugin-console: 0.2.11
* cordova-plugin-contacts: 0.2.13
* cordova-plugin-device: 0.2.12
* cordova-plugin-device-motion: 0.2.10
* cordova-plugin-device-orientation: 0.3.9
* cordova-plugin-dialogs: 0.2.10
* cordova-plugin-file: 1.3.1
* cordova-plugin-file-transfer: 0.4.6
* cordova-plugin-geolocation: 0.3.10
* cordova-plugin-globalization: 0.3.1
* cordova-plugin-inappbrowser: 0.5.2
* cordova-plugin-media: 0.2.13
* cordova-plugin-media-capture: 0.3.3
* cordova-plugin-network-information: 0.2.12
* cordova-plugin-splashscreen: 0.3.3
* cordova-plugin-statusbar: 0.1.8
* cordova-plugin-vibration: 0.3.11

Notable changes include:
* There is a new framework for testing the plugins. This affects plugin developers, not plugin users.
* Many fixes have been made to the file plugin and other plugins that use it.
* Globalization plugin has been cleaned up.
* Brought the vibration plugin API into alignment with the W3C specification.

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).
<!--more-->

----
You can update any plugin by removing it, and then readding it. E.g. To update your file plugin:

    cordova plugin rm org.apache.cordova.file
    cordova plugin add org.apache.cordova.file

Other changes include:

`org.apache.cordova.battery-status@0.2.11`
### 0.2.11 (Sep 17, 2014)
* [CB-7249](https://issues.apache.org/jira/browse/CB-7249) documentation translation
* [CB-6724](https://issues.apache.org/jira/browse/CB-6724) re-add accidental removed of var keyword
* [CB-6957](https://issues.apache.org/jira/browse/CB-6957) renamed folder to tests + added nested plugin.xml
* added documentation for manual tests
* [CB-6957](https://issues.apache.org/jira/browse/CB-6957) Style improvements on Manual tests

`org.apache.cordova.camera@0.3.2`
### 0.3.2 (Sep 17, 2014)
* [CB-4003](https://issues.apache.org/jira/browse/CB-4003) Add config option to not use location information in Camera plugin (and default to not use it)
* [CB-6958](https://issues.apache.org/jira/browse/CB-6958) Get the correct default for "quality" in the test
* [CB-6958](https://issues.apache.org/jira/browse/CB-6958) Port camera tests to plugin-test-framework
* [CB-6958](https://issues.apache.org/jira/browse/CB-6958) added manual tests
* [CB-7180](https://issues.apache.org/jira/browse/CB-7180) Update Camera plugin to support generic plugin `webView UIView` (which can be either a `UIWebView` or `WKWebView`)
* [CB-7286](https://issues.apache.org/jira/browse/CB-7286) **BlackBerry10** Use `getUserMedia` if camera card is unavailable
* [CB-7378](https://issues.apache.org/jira/browse/CB-7378) Use single Proxy for both **Windows8** and **Windows**
* [CB-7413](https://issues.apache.org/jira/browse/CB-7413) Resolve `ms-appdata:` URIs with `File` plugin
* [CB-7423](https://issues.apache.org/jira/browse/CB-7423) do cleanup after `copyImage` manual test
* [CB-7433](https://issues.apache.org/jira/browse/CB-7433) Adds missing `window` reference to prevent manual tests failure on **Android** and **iOS**
* [CB-7433](https://issues.apache.org/jira/browse/CB-7433) Fixes manual tests failure on **Windows**
* [CB-7461](https://issues.apache.org/jira/browse/CB-7461) Geolocation fails in Camera plugin in **iOS 8**
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) documentation translation
* [CB-7551](https://issues.apache.org/jira/browse/CB-7551) **iOS 8** Scaled images show a white line
* [CB-7557](https://issues.apache.org/jira/browse/CB-7557) Camera plugin tests is missing a `File` dependency
* [CB-7558](https://issues.apache.org/jira/browse/CB-7558) `hasPendingOperation` flag in Camera plugin's `takePicture` should be reversed to fix memory errors
* Renamed test dir, added nested plugin.xml
* add documentation for manual tests

`org.apache.cordova.console@0.2.11`
### 0.2.11 (Sep 17, 2014)
* [CB-7249](https://issues.apache.org/jira/browse/CB-7249) Documentation translation

`org.apache.cordova.contacts@0.2.13`
### 0.2.13 (Sep 17, 2014)
* [CB-6374](https://issues.apache.org/jira/browse/CB-6374) Fix **iOS 6** deprecation warnings
* [CB-6724](https://issues.apache.org/jira/browse/CB-6724) Empty may be expected
* [CB-7148](https://issues.apache.org/jira/browse/CB-7148) Added manual tests
* [CB-7249](https://issues.apache.org/jira/browse/CB-7249) Documentation translation
* [CB-7290](https://issues.apache.org/jira/browse/CB-7290) Adds support for universal Windows platform.
* [CB-7523](https://issues.apache.org/jira/browse/CB-7523) Fixing `ContactFieldType` error in the `config.xml`
* [CB-7544](https://issues.apache.org/jira/browse/CB-7544) **iOS 8** Contact picker is read-only in iOS 8
* [CB-7546](https://issues.apache.org/jira/browse/CB-7546) **iOS** `pickContact` shows exception in the console log
* Added documentation for manual tests
* Add missing test, skip some specs on **WP**
* Changing `cdvtest` format to use module exports
* Merged changes for test framework plugin
* Removed `js-module` for tests from `plugin.xml`
* Renamed test dir, added nested `plugin.xml`

`org.apache.cordova.device@0.2.12`
### 0.2.12 (Sep 17, 2014)
* [CB-7262](https://issues.apache.org/jira/browse/CB-7262) Adds support for universal windows apps.
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) Documentation translation
* [CB-7552](https://issues.apache.org/jira/browse/CB-7552) `device.name` docs have not been removed
* **FxOS** Fix cordova version
* Added plugin support for the browser
* Added status box and documentation to manual tests

`org.apache.cordova.device-motion@0.2.10`
### 0.2.10 (Sep 17, 2014)
* [CB-7160](https://issues.apache.org/jira/browse/CB-7160) Added manual tests
* [CB-7160](https://issues.apache.org/jira/browse/CB-7160) Move to tests dir, add nested plugin.xml
* [CB-7313](https://issues.apache.org/jira/browse/CB-7313) Minor tweak to documentation of watchAcceleration function parameters
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) Documentation translation
* Added documentation for manual tests
* Added support for the browser
* Changing cdvtest format to use module exports
* Feature Branch: First attempt at new-style-tests
* Register tests using new style
* Removed `js-module` for tests from `plugin.xml`
* Updated doc for browser

`org.apache.cordova.device-orientation@0.3.9`
### 0.3.9 (Sep 17, 2014)
* [CB-6960](https://issues.apache.org/jira/browse/CB-6960) Added manual tests
* [CB-6960](https://issues.apache.org/jira/browse/CB-6960) Port compass tests to plugin-test-framework
* [CB-7086](https://issues.apache.org/jira/browse/CB-7086) Renamed dir, added nested plugin.xml
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) Documentation translation
* Added documentation for manual tests
* Add support for the browser
* Fixed problem with watchCompass if pressed twice
* Updated docs for browser

`org.apache.cordova.dialogs@0.2.10`
### 0.2.10 (Sep 17, 2014)
* [CB-6965](https://issues.apache.org/jira/browse/CB-6965) Added manual tests
* [CB-6965](https://issues.apache.org/jira/browse/CB-6965) Port notification tests to test-framework
* [CB-7538](https://issues.apache.org/jira/browse/CB-7538) Android beep thread fix Beep now executes in it's own thread
* Added documentation for manual tests
* Renamed test dir, added nested plugin.xml
* Set dialog text dir to locale

`org.apache.cordova.file@1.3.1`
### 1.3.1 (Sep 17, 2014)
* [CB-6724](https://issues.apache.org/jira/browse/CB-6724) changed style detail on documentation
* [CB-6923](https://issues.apache.org/jira/browse/CB-6923) Adding support to handle relative paths
* [CB-7094](https://issues.apache.org/jira/browse/CB-7094) Ported File manual tests
* [CB-7094](https://issues.apache.org/jira/browse/CB-7094) renamed folder to tests + added nested plugin.xml
* [CB-7272](https://issues.apache.org/jira/browse/CB-7272) Replace confusing "r/o" abbreviation with just "r"
* [CB-7375](https://issues.apache.org/jira/browse/CB-7375) [CB-6148](https://issues.apache.org/jira/browse/CB-6148): Ensure that return values from copy and move operations reference the correct filesystem
* [CB-7375](https://issues.apache.org/jira/browse/CB-7375) Fix the filesystem name in resolveLocalFileSystemUri
* [CB-7375](https://issues.apache.org/jira/browse/CB-7375) Partial revert to resolve WP8 failures
* [CB-7375](https://issues.apache.org/jira/browse/CB-7375) Remove leading slash statement from condition
* [CB-7375](https://issues.apache.org/jira/browse/CB-7375) `Entry` get proper filesystem in Entry
* [CB-7413](https://issues.apache.org/jira/browse/CB-7413) Adds support of `ms-appdata://` URIs
* [CB-7417](https://issues.apache.org/jira/browse/CB-7417) `File tests` added proper matcher to compare fullPath property
* [CB-7418](https://issues.apache.org/jira/browse/CB-7418) `DirectoryEntry` Added `fullPath` variable as part of condition
* [CB-7419](https://issues.apache.org/jira/browse/CB-7419) **WP8** Added support to get metada from dir
* [CB-7422](https://issues.apache.org/jira/browse/CB-7422) `File Tests` Use proper `fileSystem` to create fullPath
* [CB-7423](https://issues.apache.org/jira/browse/CB-7423) encode path before attempting to resolve
* [CB-7431](https://issues.apache.org/jira/browse/CB-7431) Avoid calling `done()` twice in `file.spec.109` test
* [CB-7445](https://issues.apache.org/jira/browse/CB-7445) **BlackBerry10** Add default file system size to prevent quota exceeded error on initial install
* [CB-7445](https://issues.apache.org/jira/browse/CB-7445) **BlackBerry10** `resolveLocalFileSystemURI` - change `DEFAULT_SIZE` to `MAX_SIZE`
* [CB-7458](https://issues.apache.org/jira/browse/CB-7458) **BlackBerry10** `resolveLocalFileSystemURL` - add `filesystem` property
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) Documentation translation
* Added documentation for manual tests
* Added new js files to **amazon-fireos** platform
* Adds **Windows** platform
* Amazon related changes
* Fixes multiple mobilespec tests errors
* Overwrite existing file on `getFile` when `create` is `true`
* Refactored much of the logic in `FileMetadata` constructor; `Directory.size` will return `0`
* Removed `test/tests.js` module from main `plugin.xml`
* Style improvements on Manual tests

`org.apache.cordova.file-transfer@0.4.6`
### 0.4.6 (Sep 17, 2014)
* [CB-6466](https://issues.apache.org/jira/browse/CB-6466) Fix failing test due to recent url change
* [CB-6466](https://issues.apache.org/jira/browse/CB-6466) Created mobile-spec test
* [CB-6961](https://issues.apache.org/jira/browse/CB-6961) Port `file-transfer` tests to framework
* [CB-7316](https://issues.apache.org/jira/browse/CB-7316) Adds support for Windows platform, moves \*Proxy files to proper directory
* [CB-7316](https://issues.apache.org/jira/browse/CB-7316) Improves current specs compatibility
* [CB-7316](https://issues.apache.org/jira/browse/CB-7316) Updates docs with actual information
* [CB-7423](https://issues.apache.org/jira/browse/CB-7423) fix spec28,29 `lastProgressEvent` not visible to `afterEach` function
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) Documentation translation
* **Amazon** related changes
* **WP8** Fixed failing `spec.19`
* Added documentation for new test
* Added documentation to manual tests
* Remove dupe file **Windows** + **Windows8** both use the same one
* Renamed test dir, added nested plugin.xml and test

`org.apache.cordova.geolocation@0.3.10`
### 0.3.10 (Sep 17, 2014)
* [CB-5114](https://issues.apache.org/jira/browse/CB-5114) **Windows 8.1** - Use a new proxy as old geolocation methods is deprecated
* [CB-5114](https://issues.apache.org/jira/browse/CB-5114) Append **Windows 8.1** into `plugin.xml` + Optimize **Windows 8** `Geolocation` proxy
* [CB-6911](https://issues.apache.org/jira/browse/CB-6911) Geolocation fails in **iOS 8**
* Revert [CB-6911](https://issues.apache.org/jira/browse/CB-6911) partially (keeping `Info.plist` key installation for **iOS 8**)
* [CB-7146](https://issues.apache.org/jira/browse/CB-7146) Added manual tests
* [CB-7158](https://issues.apache.org/jira/browse/CB-7158) Fix geolocation for **iOS 8**
* [CB-7556](https://issues.apache.org/jira/browse/CB-7556) **iOS** Clearing all Watches does not stop Location Services
* Added documentation for manual tests
* Changing `cdvtest` format to use module exports
* Convert tests to new style
* Register tests using new style
* Removed **amazon-fireos** code for geolocation
* Removed `js-module` for tests from `plugin.xml`
* Renamed `test` dir, added nested `plugin.xml`

`org.apache.cordova.globalization@0.3.1`
### 0.3.1 (Sep 17, 2014)
* [CB-6490](https://issues.apache.org/jira/browse/CB-6490) **BlackBerry10** Use `-` instead of `_` in `getLocaleName()`
* [CB-6962](https://issues.apache.org/jira/browse/CB-6962) Ported globalization tests to framework
* [CB-7064](https://issues.apache.org/jira/browse/CB-7064) Added tests that check for W3C compliance in language tags generated from `PreferredLanguage` and `GetLocale` methods
* [CB-7233](https://issues.apache.org/jira/browse/CB-7233) **BlackBerry10** Globalization is now supported
* [CB-7548](https://issues.apache.org/jira/browse/CB-7548) **BlackBerry10** Allow any numeric type as date in dateToString method.
* Hold the information if L10n was ready before
* Renamed `test` dir, added nested `plugin.xml`

`org.apache.cordova.inappbrowser@0.5.2`
### 0.5.2 (Sep 17, 2014)
* **amazon-fireos** related changes
* **phonegap** events supported for `_blank` target
* Add just a bit more logging
* [CB-7133](https://issues.apache.org/jira/browse/CB-7133) **Android** Fix some tests
* [CB-7133](https://issues.apache.org/jira/browse/CB-7133) clarify that `anchor1` doesn't exist
* [CB-7133](https://issues.apache.org/jira/browse/CB-7133) port inappbrowser to **plugin-test-framework**
* [CB-7424](https://issues.apache.org/jira/browse/CB-7424) Wrong docs: anchor tags are not supported by the `InAppBrowser`
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) Documentation translation
* [CB-7490](https://issues.apache.org/jira/browse/CB-7490) **Windows** Fixes manual tests crash
* `_blank` target position is fixed

`org.apache.cordova.media@0.2.13`
### 0.2.13 (Sep 17, 2014)
* [CB-6963](https://issues.apache.org/jira/browse/CB-6963) renamed folder to `tests` + added nested `plugin.xml`
* [CB-6963](https://issues.apache.org/jira/browse/CB-6963) Port Media manual & automated tests
* [CB-6963](https://issues.apache.org/jira/browse/CB-6963) Port Media tests to **plugin-test-framework**
* Added documentation for manual tests

`org.apache.cordova.media-capture@0.3.3`
### 0.3.3 (Sep 17, 2014)
* Renamed `test` dir, added nested `plugin.xml`
* Added documentation for manual tests
* [CB-6959](https://issues.apache.org/jira/browse/CB-6959) Added manual tests
* [CB-6959](https://issues.apache.org/jira/browse/CB-6959) Port capture tests to **plugin-test-framework**

`org.apache.cordova.network-information@0.2.12`
### 0.2.12 (Sep 17, 2014)
* [CB-7471](https://issues.apache.org/jira/browse/CB-7471) Documentation translation
* [CB-6724](https://issues.apache.org/jira/browse/CB-6724) Added documentation for manual tests
* [CB-6964](https://issues.apache.org/jira/browse/CB-6964) Ported manual tests
* **FxOS 2** Fix network information type exception
* Added support for the browser
* Remove reference to test assets, they are optional
* Renamed `test` dir and added nested `plugin.xml`
* Port network tests to **plugin-test-framework**
* Fix `naviagtor` typo

`org.apache.cordova.splashscreen@0.3.3`
### 0.3.3 (Sep 17, 2014)
* [CB-7249](https://issues.apache.org/jira/browse/CB-7249) Documentation translation
* [CB-7196](https://issues.apache.org/jira/browse/CB-7196) port splashscreen tests to framework
* Renamed test dir, added nested plugin.xml
* Added documentation for manual tests

`org.apache.cordova.statusbar@0.1.8`
### 0.1.8 (Sep 17, 2014)
* [CB-7549](https://issues.apache.org/jira/browse/CB-7549) **iOS 8** Landscape issue
* [CB-7486](https://issues.apache.org/jira/browse/CB-7486) Remove `StatusBarBackgroundColor` intial preference (black background) so background will be initially transparent
* [CB-7195](https://issues.apache.org/jira/browse/CB-7195) ported statusbar tests to framework
* Added documentation for manual tests, moved background color test below overlay test
* Renamed test dir, added nested plugin.xml

`org.apache.cordova.vibration@0.3.11`
### 0.3.11 (Sep 17, 2014)
* [CB-7249](https://issues.apache.org/jira/browse/CB-7249) Documentation translation
* [CB-6724](https://issues.apache.org/jira/browse/CB-6724) Documented **Windows** support for vibrate with pattern and cancel vibrate in manual test doc and moved tests to tests dir
* [CB-6963](https://issues.apache.org/jira/browse/CB-6963) ported vibration automated & manual tests
* [CB-6966](https://issues.apache.org/jira/browse/CB-6966) renamed folder to tests + added nested plugin.xml
* [CB-6966](https://issues.apache.org/jira/browse/CB-6966) Ported Vibration automated & manual tests
* removed duplicate messaging
* [CB-5459](https://issues.apache.org/jira/browse/CB-5459) slight change to the vibration documentation for pattern due to merge issue
* Add `setTimeout` function to update `vibrateOn` var if user doesn't cancel vibrate, add note about iOS
* Add longer pattern sequence for testing, change expected result for old vibrate with pattern test
* Added 'Android only' to buttons for specific tests, changed where `console.log` is executed for user to see earlier
* Added more test cases, changed vibrate with pattern durations, changed where vibrateOn is set to true
* Added new example to documentation
* Added note to doc about w3c alignment and min time for Windows
* Added tests for old `vibrateWithPattern` and `cancelVibration` calls
* Added tests to ensure compliance with w3c spec
* Changes made to align with w3c spec
* Changes to `vibration.java` to align with w3c, changes to `vibration.js` for backwards compatibility
* Changes to how `0` is getting added to array in order to align with w3c spec
* Clear `setTimeout` when user cancels vibration
* Update doc to show `vibrate([num])` is a standard vibrate
* Update doc with another way to cancel vibration
* Updated doc for w3c alignment
* Updated doc with **Windows** support for vibrate with pattern
* `vibrate([num])` is treated as a vibrate not vibrate with pattern
* changes made to align with w3c spec
* on/off button for cancel tests, add results box and msgs
