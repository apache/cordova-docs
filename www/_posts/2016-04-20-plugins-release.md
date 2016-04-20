---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release"
categories: news
tags: release plugins
---

The following plugins were updated today:

* cordova-plugin-battery-status: 1.1.2
* cordova-plugin-camera: 2.2.0
* cordova-plugin-console: 1.0.3
* cordova-plugin-contacts: 2.1.0
* cordova-plugin-device: 1.1.2
* cordova-plugin-device-motion: 1.2.1
* cordova-plugin-device-orientation:
* cordova-plugin-dialogs: 1.2.1
* cordova-plugin-file: 4.2.0
* cordova-plugin-file-transfer: 1.5.1
* cordova-plugin-geolocation: 2.2.0
* cordova-plugin-inappbrowser: 1.4.0
* cordova-plugin-media: 2.3.0
* cordova-plugin-media-capture: 1.3.0
* cordova-plugin-network-information: 1.2.1
* cordova-plugin-splashscreen: 3.2.2
* cordova-plugin-statusbar: 2.1.3
* cordova-plugin-test-framework: 1.1.2
* cordova-plugin-vibration: 2.1.1
* cordova-plugin-whitelist: 1.2.2
* cordova-plugin-wkwebview-engine: 1.0.3
* cordova-plugin-compat: 1.0.0

This release includes a new plugin named [cordova-plugin-compat](https://github.com/apache/cordova-plugin-compat). `cordova-plugin-compat` allows backwards compatibility for plugins that had to upgrade to the new permissions model for `cordova-android@5+`. Plugin authors can use and depend on `cordova-plugin-compat` to continue to support older versions (`<5`) of `cordova-android`. Checkout the [cordova-plugin-compat repo](https://github.com/apache/cordova-plugin-compat) for more information. Previously, we were packaging copies of `PermissionHelper.java` with the plugins that needed the permission updates, but have now decided that it would be better to store `PermissionHelper.java` in `cordova-plugin-compat`.

Plugin authors can also use the new [engines element](http://cordova.apache.org/docs/en/latest/plugin_ref/spec.html#engines-and-engine) to specify what versions of `cordova-android` your plugin supports. Read more about it in our [plugin fetching blog post](http://cordova.apache.org/announcements/2016/03/22/new-plugin-fetching.html).

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@latest --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.1.2
* [CB-10720](https://issues.apache.org/jira/browse/CB-10720) Reorganizing and rewording docs.
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add JSHint for plugins

cordova-plugin-camera@2.2.0
* [CB-10873](https://issues.apache.org/jira/browse/CB-10873) Avoid crash due to usage of uninitialized variable when writing geolocation data to image destination. Properly handle 'CameraUsesGeolocation' option by properly setting geolocation data in EXIF header in all cases
* [CB-11073](https://issues.apache.org/jira/browse/CB-11073) Appium tests stability improvements
* Replace `PermissionHelper.java` with `cordova-plugin-compat`
* Making focus handler work only for **windows 10** phone
* [CB-10865](https://issues.apache.org/jira/browse/CB-10865) Run **ios** native tests on **Travis**
* [CB-10120](https://issues.apache.org/jira/browse/CB-10120) Fixing use of constants and `PermissionHelper`
* [CB-10120](https://issues.apache.org/jira/browse/CB-10120) Fix missing CAMERA permission for **Android M**
* [CB-10756](https://issues.apache.org/jira/browse/CB-10756) Adding sterner warnings about `DATA_URL`
* [CB-10460](https://issues.apache.org/jira/browse/CB-10460) `getRealPath` return null in some cases

cordova-plugin-compat@1.0.0
* Initial release
* Moved `PermissionHelper.java` into `src`

cordova-plugin-console@1.0.3
* [CB-10720](https://issues.apache.org/jira/browse/CB-10720) Minor spelling/formatting changes.
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-contacts@2.1.0
* [CB-11043](https://issues.apache.org/jira/browse/CB-11043) **Android** app crashes while trying to save contact with phone numbers array with deleted values
* [CB-10985](https://issues.apache.org/jira/browse/CB-10985) Android sets type to `-1` for ims Added a corresponding test
* [CB-11048](https://issues.apache.org/jira/browse/CB-11048) Fix spec27's inadvertent breakage that happened during logging rollback
* [CB-11041](https://issues.apache.org/jira/browse/CB-11041) `cordova-plugin-contacts` readme must be updated to include instructions on removing phone number from a contact
* [CB-11033](https://issues.apache.org/jira/browse/CB-11033) Appium tests: Increased the timeout for updating the contact
* [CB-10399](https://issues.apache.org/jira/browse/CB-10399) Added Appium tests
* Replace `PermissionHelper.java` with `cordova-plugin-compat`
* [CB-8115](https://issues.apache.org/jira/browse/CB-8115) incorrect birthday saved to phonebook using Contacts Plugin
* Changes to stop using global object - remove all created contacts from the emulator
* [CB-10881](https://issues.apache.org/jira/browse/CB-10881) Increase timeout for Spec22
* Fix for the specs 26&27 to use the newly created contacts for removal test
* [CB-10881](https://issues.apache.org/jira/browse/CB-10881) Remove test dependency on global object
* [CB-10632](https://issues.apache.org/jira/browse/CB-10632) Fixing jasmine test contact removal
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-device@1.1.2
* Use passed device, follow create policy for `CFUUIDCreate`
* [CB-10631](https://issues.apache.org/jira/browse/CB-10631) Fix for `device.uuid` in **iOS 5.1.1**
* Updating the comment to exclude URL
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins
* Refactored `deviceInfo` on **iOS** for better readability.

cordova-plugin-device-motion@1.2.1
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-device-orientation@1.0.3
* Remove `warning` emoji, as it doesn't correctly display in the docs website: http://cordova.apache.org/docs/en/dev/cordova-plugin-device-orientation/index.html
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-dialogs@1.2.1
* [CB-10097](https://issues.apache.org/jira/browse/CB-10097) dialog doesn't show on **iOS** when called from a select list `onChange` event
* Remove `warning` emoji, as it doesn't correctly display in the docs website: http://cordova.apache.org/docs/en/dev/cordova-plugin-dialogs/index.html
* [CB-10727](https://issues.apache.org/jira/browse/CB-10727) Dialogs plugin has warnings on **iOS**
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-file@4.2.0
* [CB-10960](https://issues.apache.org/jira/browse/CB-10960) Uncaught `#<FileError>` in `write()` when `readyState != WRITING ?`
* Replace `PermissionHelper.java` with `cordova-plugin-compat`
* [CB-10977](https://issues.apache.org/jira/browse/CB-10977) **Android** Removing global state used for permission requests
* [CB-10798](https://issues.apache.org/jira/browse/CB-10798), [CB-10384](https://issues.apache.org/jira/browse/CB-10384) Fixing permissions for **Marshmallow**.
* Fix test failure on **WP 8.1**
* [CB-10577](https://issues.apache.org/jira/browse/CB-10577) **Windows** `resolveLocalFileSystemURL` should omit trailing slash for file
* [CB-7862](https://issues.apache.org/jira/browse/CB-7862) `FileReader` reads large files in chunks with progress.
* [CB-10577](https://issues.apache.org/jira/browse/CB-10577) **Android** `resolveLocalFileSystemURL` should detect directory vs file.
* [CB-9753](https://issues.apache.org/jira/browse/CB-9753) index out of bounds on `requestFileSystem`.
* Remove `warning` emoji, as it doesn't correctly display in the docs website: cordova.apache.org/docs/en/dev/cordova-plugin-file/index.html. This closes #166
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins
* [CB-10411](https://issues.apache.org/jira/browse/CB-10411) Error in `file.spec.129` of `cordova-plugin-file`

cordova-plugin-file-transfer@1.5.1
* [CB-10536](https://issues.apache.org/jira/browse/CB-10536) Removing flaky test assertions about abort callback latency
* Removing the expectation in `spec.34` for the transfer method to be called.
* [CB-10978](https://issues.apache.org/jira/browse/CB-10978) Fix `file-transfer.tests` JSHint issues
* [CB-10782](https://issues.apache.org/jira/browse/CB-10782) Occasional failure in file transfer tests causing mobilespec crash
* [CB-10771](https://issues.apache.org/jira/browse/CB-10771) Fixing failure when empty string passed as a value for option parameter in upload function
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-geolocation@2.2.0
* Replace `PermissionHelper.java` with `cordova-plugin-compat`
* [CB-10691](https://issues.apache.org/jira/browse/CB-10691) Check the context to avoid null errors
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins
* Using a fallback epsilon in case `Number.EPSILON` is not defined.
* [CB-10574](https://issues.apache.org/jira/browse/CB-10574) MobileSpec can't get results for **WP8.1** Builds

cordova-plugin-inappbrowser@1.4.0
* [CB-7679](https://issues.apache.org/jira/browse/CB-7679) add fix for **iOS** upload.
* [CB-10944](https://issues.apache.org/jira/browse/CB-10944) `NoSuchMethodError` in `InAppBrowser` plugin
* [CB-10937](https://issues.apache.org/jira/browse/CB-10937) fix stretched icons
* [CB-10760](https://issues.apache.org/jira/browse/CB-10760) Fixing README for display on Cordova website
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-media@2.3.0
* Request audio focus when playing; Pause audio when audio focus is lost; resume playing when audio focus is granted again.
* Replace `PermissionHelper.java` with `cordova-plugin-compat`
* [CB-10783](https://issues.apache.org/jira/browse/CB-10783) Modify expected position to be in a proper range.
* [CB-9487](https://issues.apache.org/jira/browse/CB-9487) Support getting amplitude for recording
* **iOS** audio should handle naked local file sources
* [CB-10720](https://issues.apache.org/jira/browse/CB-10720) Fixing README for display on Cordova website
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins
* [CB-10535](https://issues.apache.org/jira/browse/CB-10535) Fix CI crash caused by media plugin

cordova-plugin-media-capture@1.3.0
* Replace `PermissionHelper.java` with `cordova-plugin-compat`
* [CB-10670](https://issues.apache.org/jira/browse/CB-10670), [CB-10994](https://issues.apache.org/jira/browse/CB-10994) **Android**, Marshmallow permissions
* [CB-10720](https://issues.apache.org/jira/browse/CB-10720): Fixing README for display on Cordova website
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins
* [CB-10690](https://issues.apache.org/jira/browse/CB-10690) **windows**, fix crash when user cancels/closes photo app

cordova-plugin-network-information@1.2.1
* [CB-10763](https://issues.apache.org/jira/browse/CB-10763): Remove emoji in `cordova-plugin-network-information`
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-splashscreen@3.2.2
* [CB-10979](https://issues.apache.org/jira/browse/CB-10979) Fix splashscreen **iOS** native tests. Added `jshintignore` for tests/ios
* [CB-10895](https://issues.apache.org/jira/browse/CB-10895) Transparent Splashscreen view sometimes remains
* [CB-10562](https://issues.apache.org/jira/browse/CB-10562) `hide()` not working in latest splashscreen plugin 3.1.0 in **iOS**
* [CB-10688](https://issues.apache.org/jira/browse/CB-10688) Plugin Splashscreen Readme must have examples.
* [CB-10864](https://issues.apache.org/jira/browse/CB-10864) Run **iOS** native tests on Travis

cordova-plugin-statusbar@2.1.3
* [CB-11018](https://issues.apache.org/jira/browse/CB-11018) Fix statusbar with `inappbrowser` causing incorrect orientation on **iOS8**
* [CB-10884](https://issues.apache.org/jira/browse/CB-10884) `Inappbrowser` breaks UI while Screen orientation changes from landscape to portrait on **iOS**

cordova-plugin-test-framework@1.1.2
* [CB-10876](https://issues.apache.org/jira/browse/CB-10876) Enable inertia scrolling in test framework
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-vibration@2.1.1
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins

cordova-plugin-whitelist@1.2.2
* add note about redirects
* [CB-10624](https://issues.apache.org/jira/browse/CB-10624) remove error message from `whitelist.js`, which leaves it empty

cordova-plugin-wkwebview-engine@1.0.3
* [CB-10636](https://issues.apache.org/jira/browse/CB-10636) Add `JSHint` for plugins
