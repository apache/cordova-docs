---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: August 11, 2014"
categories: news
tags: release plugins
---
The following plugins were updated today:

* cordova-plugin-battery-status: 0.2.10
* cordova-plugin-camera: 0.3.1
* cordova-plugin-console: 0.2.10
* cordova-plugin-contacts: 0.2.12 
* cordova-plugin-device: 0.2.11 
* cordova-plugin-device-motion: 0.2.9
* cordova-plugin-device-orientation: 0.3.8
* cordova-plugin-dialogs: 0.2.9 
* cordova-plugin-file: 1.3.0 
* cordova-plugin-file-transfer: 0.4.5 
* cordova-plugin-geolocation: 0.3.9 
* cordova-plugin-globalization: 0.3.0 
* cordova-plugin-inappbrowser: 0.5.1 
* cordova-plugin-media: 0.2.12 
* cordova-plugin-media-capture: 0.3.2 
* cordova-plugin-network-information: 0.2.11 
* cordova-plugin-splashscreen: 0.3.2 
* cordova-plugin-statusbar: 0.1.7 
* cordova-plugin-vibration: 0.3.10

Notable changes include:
* Most of the plugins docs are now translated into other languages.
* **FirefoxOS** has updated many of their proxies for plugins
* **FirefoxOS** support added to device motion plugin
* Many updates to file plugin for **BlackBerry10**, **FirefoxOS** and **Windows**
* **BlackBerry10** & **FirefoxOS** support added to globalization plugin


The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

----
You can update any plugin by removing it, and then readding it. E.g. To update your file plugin:

    cordova plugin rm org.apache.cordova.file
    cordova plugin add org.apache.cordova.file

Other changes include:
<!--more-->
org.apache.cordova.battery-status@0.2.10
* [CB-6957](https://issues.apache.org/jira/browse/CB-6957) Ported `Battery-status` manual & automated tests
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs

org.apache.cordova.camera@0.3.1
* **FirefoxOS** update `CameraProxy.js`
* [CB-7187](https://issues.apache.org/jira/browse/CB-7187) **iOS**: Add explicit dependency on `CoreLocation.framework`
* **BlackBerry10** Doc correction - `sourceType` is supported
* [CB-7071](https://issues.apache.org/jira/browse/CB-7071) **Android**: Fix callback firing before `CROP` intent is sent when `allowEdit=true`
* [CB-6875](https://issues.apache.org/jira/browse/CB-6875) **Android**: Handle exception when SDCard is not mounted
* **iOS**: Delete `postImage` (dead code)
* Prevent `NPE` on `processResiultFromGallery` when intent comes `null`
* Remove **iOS** doc reference to non-existing `navigator.fileMgr API`
* Docs updated with some default values
* Removes File plugin dependency from **Windows 8** code.
* Use `WinJS` functionality to resize image instead of File plugin functionality
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs

org.apache.cordova.console@0.2.10
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs

org.apache.cordova.contacts@0.2.12
* fixes `.find` method when `options` param is not passed. Will return all contacts on missing `options` param
* **FirefoxOS** update `ContactsProxy.js`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* [CB-5698](https://issues.apache.org/jira/browse/CB-5698) **iOS**: Check to see if `photoData` exists before using

org.apache.cordova.device@0.2.11
* **FirefoxOS** update `DeviceProxy.js`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* Use **Windows** system calls to get better info

org.apache.cordova.device-motion@0.2.9
* **FirefoxOS** update `accelerometer.js`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* **FirefoxOS** added to supported platforms


org.apache.cordova.device-orientation@0.3.8
* **FirefoxOS** update `compass.js`
* [CB-7187](https://issues.apache.org/jira/browse/CB-7187) **iOS**: Add explicit dependency on `CoreLocation.framework`
* [CB-7187](https://issues.apache.org/jira/browse/CB-7187) Delete unused `#import` of `CDVShared.h`

org.apache.cordova.dialogs@0.2.9
* **Ubuntu**: pass proper arguments to prompt callback
* **Ubuntu**: use `TextField` instead of `TextInput`
* **Ubuntu**: proper message escaping before passing to `qml`
* **FirefoxOS** update `notification.js`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* **Android**: Explicitly apply default theme to dialogs
* Fix `Beep` exception on **Android** when no argument passed

org.apache.cordova.file@1.3.0
* **FirefoxOS** Remove unsupported paths from `requestAllPaths`
* **FirefoxOS** Support for `resolve URI`, request all paths and local app directory.
* [CB-4263](https://issues.apache.org/jira/browse/CB-4263) set ready state to done before onload
* [CB-7167](https://issues.apache.org/jira/browse/CB-7167) **BlackBerry10** `copyTo` - return wrapped entry rather than native
* [CB-7167](https://issues.apache.org/jira/browse/CB-7167) **BlackBerry10** Add directory support to `getFileMetadata`
* [CB-7167](https://issues.apache.org/jira/browse/CB-7167) **BlackBerry10** Fix tests detection of `blob` support (`window.Blob` is `BlobConstructor` object)
* [CB-7161](https://issues.apache.org/jira/browse/CB-7161) **BlackBerry10** Add file system directory paths
* [CB-7093](https://issues.apache.org/jira/browse/CB-7093) Create separate `plugin.xml` for new-style tests
* [CB-7057](https://issues.apache.org/jira/browse/CB-7057) Docs update: elaborate on what directories are for
* [CB-7093](https://issues.apache.org/jira/browse/CB-7093): Add `JS module` to `plugin.xml` file for auto-tests
* [CB-7093](https://issues.apache.org/jira/browse/CB-7093) Ported automated file tests
* **Windows** remove extra function closure, not    needed
* **Windows** remove check for undefined `fail()`, it is defined by the proxy and always exists
* **Windows** re-apply `readAsBinaryString` and `readAsArrayBuffer`
* **Windows** Moved similar calls to be the same calls, aliased long namespaced functions
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs.
* [CB-6571](https://issues.apache.org/jira/browse/CB-6571) Fix `getParentForLocalURL` to work correctly with directories with trailing '/' (This closes #58)
* `UTTypeCopyPreferredTagWithClass` returns `nil mimetype` for css when there is no network
* updated spec links in docs ( en only )
* [CB-6571](https://issues.apache.org/jira/browse/CB-6571) add trailing space it is missing in `DirectoryEnty` constructor.
* [CB-6980](https://issues.apache.org/jira/browse/CB-6980) Fixing `filesystem:null` property in `Entry`
* Add **Windows 8** support for `readAsBinaryString` and `readAsArrayBuffer`
* **FirefoxOS** Update `FileProxy.js`
* [CB-6940](https://issues.apache.org/jira/browse/CB-6940): `context.getExternal` methods return null if sdcard isn't in mounted state, causing exceptions that prevent startup from reaching readystate
* Fix mis-handling of filesystem reference in `Entry.moveTo` 
* [CB-6902](https://issues.apache.org/jira/browse/CB-6902): Use `File.lastModified` rather than `.lastModifiedDate`
* [CB-6922](https://issues.apache.org/jira/browse/CB-6922): Remove unused `getMetadata` native code
* [CB-6922](https://issues.apache.org/jira/browse/CB-6922): Use `getFileMetadata` consistently to get metadata
* changed fullPath to `self.rootDocsPath`
* [CB-6890](https://issues.apache.org/jira/browse/CB-6890): Fix `pluginManager` access for 4.0.x branch

org.apache.cordova.file-transfer@0.4.5
* Fixed documentation of parameter order for `FileTransfer.upload`
* **FirefoxOS** initial implementation
* [CB-6781](https://issues.apache.org/jira/browse/CB-6781): Expose `FileTransferError.exception` to application
* [CB-6928](https://issues.apache.org/jira/browse/CB-6928): Add new error code to documentation
* [CB-6928](https://issues.apache.org/jira/browse/CB-6928): Handle 304 status code
* [CB-6928](https://issues.apache.org/jira/browse/CB-6928): Open output stream only if it's necessary.
* **BlackBerry10** Minor doc correction
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* **Windows 8** upload uses the provided `fileName` or the actual `fileName`
* [CB-2420](https://issues.apache.org/jira/browse/CB-2420) **Windows 8** honor `fileKey` and param options. This closes #15
* [CB-6781](https://issues.apache.org/jira/browse/CB-6781): add the exception text to the error object
* [CB-6890](https://issues.apache.org/jira/browse/CB-6890): Fix `pluginManager` access for 4.0.x branch

org.apache.cordova.geolocation@0.3.9
* **FirefoxOS** update `GeolocationProxy.js`
* [CB-7187](https://issues.apache.org/jira/browse/CB-7187) **iOS**: Add explicit dependency on `CoreLocation.framework`
* [CB-7187](https://issues.apache.org/jira/browse/CB-7187) Delete unused `#import` of `CDVShared.h`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* **iOS**: Changed `distanceFilter` from none to 5 meters, prevents it from spamming the callback even though nothing changed.

org.apache.cordova.globalization@0.3.0
* The right Apache License 2.0 added
* Update headers and `NOTICE` file
* **BlackBerry10** support implemented for Globalization
* Initial implementation for **FirefoxOS**
* [CB-4602](https://issues.apache.org/jira/browse/CB-4602) **iOS**: Use normalized values for `getPreferredLanguage`.
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* [CB-4602](https://issues.apache.org/jira/browse/CB-4602) `geolocation.getPreferredLanguage` and `geolocation.getLocaleName` now return strings with hypen `(-)` to stay compliant with current standards

org.apache.cordova.inappbrowser@0.5.1
* **Ubuntu**: support `qt 5.2`
* **FirefoxOS** update `InAppBrowserProxy.js`
* **FirefoxOS** app needs to be `privileged`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* [CB-6769](https://issues.apache.org/jira/browse/CB-6769) **iOS**: Fix `statusbar` color reset wasn't working on `iOS7+`

org.apache.cordova.media@0.2.12
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* **iOS**: Make it easier to play media and record audio simultaneously
* code `#s` for `MediaError`

org.apache.cordova.media-capture@0.3.2
* **Ubuntu**: fix compiler warnings
* **Ubuntu**: support `qt 5.2`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* [CB-6978](https://issues.apache.org/jira/browse/CB-6978) `captureImage()` function fails in **Android**
* [CB-6890](https://issues.apache.org/jira/browse/CB-6890): Fix `pluginManager` access for 4.0.x branch

org.apache.cordova.network-information@0.2.11
* **FirefoxOS** update `NetworkProxy.js`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* Fixed docs for `online/offline` event being backwards

org.apache.cordova.splashscreen@0.3.2
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* [CB-7041](https://issues.apache.org/jira/browse/CB-7041) **iOS**: Fix image filename logic when setting the `iPad` splash screen
* fixes Splashscreen crash on **WP8**

org.apache.cordova.statusbar@0.1.7
* Add `LICENSE` and `NOTICE`
* Update `statusbar.js`
* Update `backgroundColorByHexString` function
* **iOS**: Use a persistent `callbackId` instead of calling `sendJs`
* [CB-6626](https://issues.apache.org/jira/browse/CB-6626) **iOS**: Add a JS event for tapping on `statusbar`
* **iOS**: Fix hide to adjust webview's frame only when status bar is not overlaying webview
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
* **Android**: Fix `StatusBar.initialize()` not running on UI thread

org.apache.cordova.vibration@0.3.10
* **Ubuntu**: Implemented `vibrateWithPattern/cancelVibration`
* **FirefoxOS** update `VibrationProxy.js`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Updated translations for docs
