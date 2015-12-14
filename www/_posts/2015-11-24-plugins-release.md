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

* cordova-plugin-battery-status@1.1.1
* cordova-plugin-camera@2.0.0
* cordova-plugin-console@1.0.2
* cordova-plugin-contacts@2.0.0
* cordova-plugin-device@1.1.0
* cordova-plugin-device-motion@1.2.0
* cordova-plugin-device-orientation@1.0.2
* cordova-plugin-dialogs@1.2.0
* cordova-plugin-file@4.0.0
* cordova-plugin-file-transfer@1.4.0
* cordova-plugin-geolocation@2.0.0
* cordova-plugin-globalization@1.0.2
* cordova-plugin-inappbrowser@1.1.0
* cordova-plugin-legacy-whitelist@1.1.1
* cordova-plugin-media@2.0.0
* cordova-plugin-media-capture@1.1.0
* cordova-plugin-network-information@1.1.0
* cordova-plugin-splashscreen@3.0.0
* cordova-plugin-statusbar@2.0.0
* cordova-plugin-test-framework@1.1.0
* cordova-plugin-vibration@2.0.0
* cordova-plugin-whitelist@1.2.0

The following plugins now require `cordova-android@5.0.0`. Please read the [Android 5.0.0 release blog](http://cordova.apache.org/announcements/2015/11/09/cordova-android-5.0.0.html) for instructions to update. 

* cordova-plugin-camera@2.0.0
* cordova-plugin-contacts@2.0.0
* cordova-plugin-file@4.0.0
* cordova-plugin-geolocation@2.0.0
* cordova-plugin-media@2.0.0

## Update
Since `cordova-android@5.0.0` isn't yet pinned by default in `cordova`, you will have to explicitly install these new versions of these five plugins now. The previous released versions of the above five plugins are still set to `latest` on npm instead of these newly released versions. These will be set to `latest` once we release `cordova@6` which will have `cordova-android@5.0.0` pinned.
 
E.g. 

    cordova plugin add cordova-plugin-camera@2.0.0 --save

To see what versions exist for a plugin, run `npm info PLUGINNAME versions`. 

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.1.1

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.

cordova-plugin-camera@2.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-8863](https://issues.apache.org/jira/browse/CB-8863) correct block usage for `async` calls
* [CB-5479](https://issues.apache.org/jira/browse/CB-5479) changed `saveToPhotoAlbum` to save uncompressed images for **Android**
* [CB-9169](https://issues.apache.org/jira/browse/CB-9169) Fixed `filetype` for uncompressed images and added quirk for **Android**
* [CB-9446](https://issues.apache.org/jira/browse/CB-9446) Removing `CordovaResource` library code in favour of the code we're supposed to be deprecating because that at least works.
* [CB-9942](https://issues.apache.org/jira/browse/CB-9942) Normalize line endings in Camera plugin docs
* [CB-9910](https://issues.apache.org/jira/browse/CB-9910) Add permission request for some gallery requests for **Android**
* [CB-7668](https://issues.apache.org/jira/browse/CB-7668) Adding a sterner warning for `allowedit` on **Android**
* Fixing contribute link.
* Using the `CordovaResourceApi` to fine paths of files in the background thread.  If the file doesn't exist, return the content `URI`. 
* Add engine tag for **Cordova-Android 5.0.x**
* [CB-9583](https://issues.apache.org/jira/browse/CB-9583): Added support for **Marshmallow** permissions (**Android 6.0**)
* Try to use `realpath` filename instead of default `modified.jpg`
* [CB-6190](https://issues.apache.org/jira/browse/CB-6190) **iOS** camera plugin ignores quality parameter
* [CB-9633](https://issues.apache.org/jira/browse/CB-9633) **iOS** Taking a Picture With Option `destinationType:NATIVE_URI` doesn't show image
* [CB-9745](https://issues.apache.org/jira/browse/CB-9745) Camera plugin docs should be generated from the source
* [CB-9622](https://issues.apache.org/jira/browse/CB-9622) **WP8** Camera Option `destinationType:NATIVE_URI` is a `NO-OP`
* [CB-9623](https://issues.apache.org/jira/browse/CB-9623) Fixes various issues when `encodingType` set to `png`
* [CB-9591](https://issues.apache.org/jira/browse/CB-9591) Retaining aspect ratio when resizing
* [CB-9443](https://issues.apache.org/jira/browse/CB-9443) Pick correct `maxResolution` 
* [CB-9151](https://issues.apache.org/jira/browse/CB-9151) Trigger `captureAction` only once
* [CB-9413](https://issues.apache.org/jira/browse/CB-9413) Close `RandomAccessStream` once copied
* [CB-5661](https://issues.apache.org/jira/browse/CB-5661) Remove outdated **iOS** quirks about memory
* [CB-9349](https://issues.apache.org/jira/browse/CB-9349) Focus control and nice UI
* [CB-9259](https://issues.apache.org/jira/browse/CB-9259) Forgot to add another check on which `URI` we're using when fixing this thing the first time
* [CB-9247](https://issues.apache.org/jira/browse/CB-9247) Added macro to conditionally add `NSData+Base64.h`
* [CB-9247](https://issues.apache.org/jira/browse/CB-9247) Fixes compilation errors with **cordova-ios 4.x**
* Fix returning native url on **Windows**.

cordova-plugin-console@1.0.2

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.
* Document formatting options for the console object
* [CB-5089](https://issues.apache.org/jira/browse/CB-5089) Document supported methods for console object
* reverted `d58f218b9149d362ebb0b8ce697cf403569d14cd` because `logger` is not needed on **Android**

cordova-plugin-contacts@2.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-9728](https://issues.apache.org/jira/browse/CB-9728) Solving memory leak issues due to opened cursor objects
* [CB-9940](https://issues.apache.org/jira/browse/CB-9940) Adding namespace declarations for `m3` and uap to `plugin.xml`. 
* [CB-9905](https://issues.apache.org/jira/browse/CB-9905) mark tests as pending if **iOS** permission is blocked.
* Refactored `ContactManager` after feedback
* Commit of Contacts Plugin with new `API` for new **MarshMallow** permissions for **Android 6.0**
* Fixing contribute link.
* [CB-9823](https://issues.apache.org/jira/browse/CB-9823) Making sure the `photoCursor` is always closed.
* Shortened multiple references to use `CommonDataKinds` directly
* removed multiple calls `toLowerCase(Locale.getDefault())` for the same string, use type Phone `enum` directly.
* [CB-8537](https://issues.apache.org/jira/browse/CB-8537) Updated source to pass `Fortify` scan.
* Update `ContactProxy.js`
* Do not return absolute path for contact images.
* [CB-9579](https://issues.apache.org/jira/browse/CB-9579) Fixed failed tests when `DeleteMe` contact already exists
* [CB-9054](https://issues.apache.org/jira/browse/CB-9054): Can't fully reproduce, but we should probably wrap this in an exception anyway.

cordova-plugin-device@1.1.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Add `isVirtual` for **Windows Phone 8.x**
* Added basic **Android** support for hardware serial number
* [CB-9865](https://issues.apache.org/jira/browse/CB-9865) Better simulator detection for **iOS**
* Fixing contribute link.
* Added **WP8** implementation
* update to use `TARGET_OS_SIMULATOR` as `TARGET_IPHONE_SIMULATOR` is deprecated.
* update code to use 'isVirtual'
* create test to verify existence and type of new property 'isVirtual'
* add `isSimulator` for **iOS** & **Android** device
* Updated documentation to mention backwards compatibility
* Updated **README** to reflect new behaviour and quirks on **iOS**
* Check user defaults first to maintain backwards compatibility
* Changed `UUID` to use `[UIDevice identifierForVendor]`

cordova-plugin-device-motion@1.2.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* access all `accel` properties via getters
* Return error when `accelerometer` not available, skip/pending tests when accel not available, use getters for properties
* Returning an `OK PluginResult.Status` when starting
* Update `README.md`
* Added **Android** quirk 
* Fixing contribute link.
* [CB-9426](https://issues.apache.org/jira/browse/CB-9426) Fix exception when using device motion plugin on **browser** platform.
* [CB-9339](https://issues.apache.org/jira/browse/CB-9339) Increase the default sensor accuracy

cordova-plugin-device-orientation@1.0.2

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-4596](https://issues.apache.org/jira/browse/CB-4596) Fix `timestamp` to be `DOMTimeStamp` across the board
* Fixing contribute link.
* [CB-9426](https://issues.apache.org/jira/browse/CB-9426) Fix exception when using device orientation plugin on **browser** platform.

cordova-plugin-dialogs@1.2.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-8549](https://issues.apache.org/jira/browse/CB-8549) Updated source to pass `Fortify` scan.
* Fixing contribute link.
* add `CSS class` to prompt `div` for **Windows** platform
* [CB-9347](https://issues.apache.org/jira/browse/CB-9347) - fix to allow to stack multiple `UIAlertControllers`

cordova-plugin-file@4.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-8497](https://issues.apache.org/jira/browse/CB-8497) Fix handling of file paths with `#` character
* Do not inject default `AndroidPersistentFileLocation` into `config.xml`
* [CB-9891](https://issues.apache.org/jira/browse/CB-9891): Fix permission errors due to `URI encoding` inconsistency on **Android**
* Fixed `NullPointer Exception` in **Android 5** and above due to invalid column name on cursor
* Fix default persistent file location
* fix `applicationDirectory` to use `ms-appx:///`
* Add **Windows** paths to `cordova.file` object
* [CB-9851](https://issues.apache.org/jira/browse/CB-9851) Document `cdvfile` protocol quirk - using `cdvfile://` in the `DOM` is not supported on **Windows**
* [CB-9752](https://issues.apache.org/jira/browse/CB-9752) `getDirectory` fails on valid directory with assets filesystem
* [CB-7253](https://issues.apache.org/jira/browse/CB-7253) `requestFileSystem` fails when no external storage is present
* Adding permissions for **Marshmallow**. Now supports **Android 6.0**
* Fixing contribute link.
* always use setters to fix memory issues without `ARC` for **iOS**
* [CB-9331](https://issues.apache.org/jira/browse/CB-9331) `getFreeDiskSpace` **iOS**.
* override `resolveLocalFileSystemURL` by `webkitResolveLocalFileSystemURL` for **browser** platform add `.project` into git ignore list
* Fail with `FileError.ENCODING_ERR` on encoding exception.
* [CB-9544](https://issues.apache.org/jira/browse/CB-9544) Add file plugin for **OSX**
* [CB-9539](https://issues.apache.org/jira/browse/CB-9539) Fixed test failure on **Android** emulator
* Added docs on `CSP` rules needed for using `cdvfile` in DOM src. This closes #120
* Added `cdvfile` protocol purpose description and examples

cordova-plugin-file-transfer@1.4.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-9879](https://issues.apache.org/jira/browse/CB-9879) `getCookie`s can cause unhandled `NullPointerException`
* [CB-6928](https://issues.apache.org/jira/browse/CB-6928) Wrong behaviour transferring cacheable content
* [CB-51](https://issues.apache.org/jira/browse/CB-51) FileTransfer - Support `PUT` Method
* [CB-9906](https://issues.apache.org/jira/browse/CB-9906) cleanup duplicate code, removed 2nd `isWP8` declaration.
* [CB-9950](https://issues.apache.org/jira/browse/CB-9950) Unpend Filetransfer spec.27 on **wp8** as custom headers are now supported
* [CB-9843](https://issues.apache.org/jira/browse/CB-9843) Added **wp8** quirk to test spec 12
* Fixing contribute link.
* [CB-8431](https://issues.apache.org/jira/browse/CB-8431) File Transfer tests crash on **Android Lollipop**
* [CB-9790](https://issues.apache.org/jira/browse/CB-9790) Align `FileUploadOptions` `fileName` and `mimeType` default parameter values to the docs on **iOS**
* [CB-9385](https://issues.apache.org/jira/browse/CB-9385) Return `FILE_NOT_FOUND_ERR` when receiving `404` code on **iOS**
* [CB-9791](https://issues.apache.org/jira/browse/CB-9791) Decreased download and upload tests timeout

cordova-plugin-geolocation@2.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-9907](https://issues.apache.org/jira/browse/CB-9907) Handle **iOS** tests that fail when ios simulator does not have a location
* [CB-8826](https://issues.apache.org/jira/browse/CB-8826) Check for `NSLocationWhenInUseUsageDescription` first
* [CB-9105](https://issues.apache.org/jira/browse/CB-9105): Fixing `JS` errors in the shim
* Added support for new permissions model for **Android 6.0** aka **Marshmallow**
* Expect `lastPosition` to have a `timestamp` that is already in `msecs`
* [CB-4596](https://issues.apache.org/jira/browse/CB-4596) Date objects are supposed to be `DOMTimeStamp`
* Fixing contribute link.
* [CB-9355](https://issues.apache.org/jira/browse/CB-9355) Fix Geolocation plugin start watch fail related to unset `MovementThreshold` on **Windows 10**

cordova-plugin-globalization@1.0.2

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.
* [CB-9409](https://issues.apache.org/jira/browse/CB-9409) check that `localeIdentifier` has underscore
* [CB-9476](https://issues.apache.org/jira/browse/CB-9476): `Mobilespec` crash on startup when running on **Windows 10**.
* Fixing license headers and adding `moment.js` to `.ratignore`.

cordova-plugin-inappbrowser@1.1.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Invoke webview if using local file
* Fixed `zIndex` issue on **Windows 8**, where InAppBrowser opens behind default app.
* fix `async` self usage
* [CB-9150](https://issues.apache.org/jira/browse/CB-9150) Fix InAppBrowser `executeScript` crash on **Windows** if no data returned
* [CB-10008](https://issues.apache.org/jira/browse/CB-10008) Fix InAppBrowser popup layout on **Windows**
* Setting `setStatusBarStyle` to `-1` causes `CGContextSaveGState`.
* [CB-9167](https://issues.apache.org/jira/browse/CB-9167) Fix crash on **browser** window close 
* [CB-9799](https://issues.apache.org/jira/browse/CB-9799) Fixed `javaDoc` errors.
* Fixing contribute link.
* [CB-9760](https://issues.apache.org/jira/browse/CB-9760) InAppBrowser: fallback to default `window.open` behavior on **Ripple**
* [CB-9378](https://issues.apache.org/jira/browse/CB-9378) Fix InAppBrowser not taking whole screen on **Windows**
* [CB-9158](https://issues.apache.org/jira/browse/CB-9158) - InAppBrowser `zoomControls` are always set to true

cordova-plugin-legacy-whitelist@1.1.1

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.

cordova-plugin-media@2.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Media now supports new permissions for **Android 6.0** aka **Marshmallow**
* Fixing contribute link.
* [CB-9619](https://issues.apache.org/jira/browse/CB-9619) Fixed tests waiting for precise position
* [CB-9606](https://issues.apache.org/jira/browse/CB-9606) Fixes arguments parsing in `seekAudio`
* [CB-9605](https://issues.apache.org/jira/browse/CB-9605) Fixes issue with playback resume after pause on **WP8**
* fix record and play `NullPointerException`
* [CB-9237](https://issues.apache.org/jira/browse/CB-9237) Add `cdvfile://` support to media plugin on **Windows** platform
* [CB-9238](https://issues.apache.org/jira/browse/CB-9238) Media plugin cannot record audio on **Windows**
* Added **iOS** platform `media.setRate` auto test
* Add **iOS** platform check in `Media.prototype.setRate`
* Add `Media.prototype.setRate` method (only for **iOS**)

cordova-plugin-media-capture@1.1.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.
* [CB-9249](https://issues.apache.org/jira/browse/CB-9249) Fix **iOS** warnings in Media Capture plugin
* Document the quality property in **Android** quirks
* Add `CaptureVideoOption` for quality

cordova-plugin-network-information@1.1.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.
* These notifications are objects so their address always evaluates to true.
* Update `NetworkManager.java`
* [CB-9542](https://issues.apache.org/jira/browse/CB-9542) `Browser Proxy` not defined correctly
* Solved `toLowerCase` issue with `Locale.US`

cordova-plugin-splashscreen@3.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.
* [CB-9750](https://issues.apache.org/jira/browse/CB-9750) `FadeSplashDuration` is now in `msecs`
* [CB-8875](https://issues.apache.org/jira/browse/CB-8875) `FadeSplashScreen` was not fading
* [CB-9467](https://issues.apache.org/jira/browse/CB-9467) SplashScreen does not show any image in hosted app on **Windows 10**
* [CB-7282](https://issues.apache.org/jira/browse/CB-7282) Document `AutoHideSplashScreenpreference`
* [CB-9327](https://issues.apache.org/jira/browse/CB-9327) - Splashscreen not receiving `CDVPageLoadNotification`
* WP8: Avoid config `value` of a wrong element.

cordova-plugin-statusbar@2.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Added `weakSelf` reference for block use
* Fixes [CB-4712](https://issues.apache.org/jira/browse/CB-4712), [CB-5439](https://issues.apache.org/jira/browse/CB-5439) statusbar issues
* Fixing contribute link.
* [CB-7965](https://issues.apache.org/jira/browse/CB-7965) Add cordova-plugin-statusbar support for **browser** platform
* Don't use `IsAtLeastiOSVersion` macro to determine height
* Use correct statusbar height for landscape orientation in **iOS** >= 8
* [CB-9202](https://issues.apache.org/jira/browse/CB-9202) updated repo url to github mirror in package.json
* Added verbose install text for users on < cordova 5.0
* update docs for `StatusBarBackgroundColor`

cordova-plugin-test-framework@1.1.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-8973](https://issues.apache.org/jira/browse/CB-8973): Changed the functionality of making the `log` appear and disappear
* Ensure `WinJS` is available when adding **Windows** unhandled error hook

cordova-plugin-vibration@2.0.0

* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* Fixing contribute link.
* Fixed **browser** platform to pass tests and combined tests
* Removed call to add `proxy` and renamed **browser** file
* [CB-7966](https://issues.apache.org/jira/browse/CB-7966) Add cordova-plugin-vibration support for **browser** platform
* [CB-9166](https://issues.apache.org/jira/browse/CB-9166): Changed `plugin.xml` framework reference condition to be valid XML.

cordova-plugin-whitelist@1.2.0

* removed **iOS** engine check from `plugin.xml`
* [CB-10035](https://issues.apache.org/jira/browse/CB-10035) Updated `RELEASENOTES` to be newest to oldest
* [CB-9972](https://issues.apache.org/jira/browse/CB-9972) - Remove **iOS** whitelist
* Updated the text, it should read 4.0.x and greater, since this plugin will be required for `cordova-android 5.0`
* Fixing contribute link.
* Updated `plugin.xml <info>` tag to remove warning about not needing this plugin if you are using the **iOS 9 SDK**
* [CB-9738](https://issues.apache.org/jira/browse/CB-9738) - Disable whitelist use when runtime environment is **iOS 9**
* [CB-9740](https://issues.apache.org/jira/browse/CB-9740) - Add `<info>` tag describing whitelist plugin not needed on `cordova-ios` and cordova-android 3.x`
* [CB-9568](https://issues.apache.org/jira/browse/CB-9568) - Update whitelist plugin to allow all network access by default
* [CB-9337](https://issues.apache.org/jira/browse/CB-9337) - enable use of `<access>` tags for native code network requests
