---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release: June 12, 2014"
categories: news
tags: release plugins
---
The following plugins were updated today:

* cordova-plugin-camera: 0.3.0
* cordova-plugin-console: 0.2.9
* cordova-plugin-device: 0.2.10
* cordova-plugin-device-motion: 0.2.8
* cordova-plugin-device-orientation: 0.3.7
* cordova-plugin-dialogs: 0.2.8
* cordova-plugin-file: 1.2.0
* cordova-plugin-file-transfer: 0.4.4
* cordova-plugin-geolocation: 0.3.8
* cordova-plugin-globalization: 0.2.8
* cordova-plugin-inappbrowser: 0.5.0
* cordova-plugin-media: 0.2.11
* cordova-plugin-media-capture: 0.3.1
* cordova-plugin-network-information: 0.2.9
* cordova-plugin-splashscreen: 0.3.1
* cordova-plugin-statusbar: 0.1.6
* cordova-plugin-vibration: 0.3.9

Notable changes include:
* Several File plugin changes:
  * Initial implementation for **Firefox OS**
  * Important platform-specific paths now exposed as properties on `cordova.file.*` (**iOS** & **Android**, refer to docs)
  * Several bug fixes (across most platforms)
  * Updated support for **BlackBerry 10**, **Ubuntu** & **Windows 8**
* Every plugin now has its own license file and how to contribute document (`CONTRIBUTING.md`)

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

----
You can update any plugin by removing it, and then readding it. E.g. To update your file plugin:

    cordova plugin rm org.apache.cordova.file
    cordova plugin add org.apache.cordova.file

Other changes include:
<!--more-->

`org.apache.cordova.camera@0.3.0`

* [CB-2083](https://issues.apache.org/jira/browse/CB-2083), [CB-5895](https://issues.apache.org/jira/browse/CB-5895) documented `saveToPhotoAlbum` quirk on **WP8**
* Remove deprecated symbols for iOS < 6
* **Ubuntu** use application directory for images
* [CB-6613](https://issues.apache.org/jira/browse/CB-6613) Use `WinJS` functionality to get `base64-encoded` content of image instead of File plugin functionality
* [CB-6612](https://issues.apache.org/jira/browse/CB-6612) `camera.getPicture` now always returns encoded JPEG image
* [CB-6576](https://issues.apache.org/jira/browse/CB-6576) Returns a specific error message when app has no access to library
* [CB-6546](https://issues.apache.org/jira/browse/CB-6546) **Android**: Add support for `allowEdit` Camera option
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6795](https://issues.apache.org/jira/browse/CB-6795) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.console@0.2.9`

* [CB-6848](https://issues.apache.org/jira/browse/CB-6848) Add **Android** quirk, list applicable platforms
* [CB-6796](https://issues.apache.org/jira/browse/CB-6796) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.device@0.2.10`

* Added **Firefox OS** version
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6800](https://issues.apache.org/jira/browse/CB-6800) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.device-motion@0.2.8`

* **Firefox OS** added to supported platforms
* **Ubuntu** don't destroy callback after use
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6798](https://issues.apache.org/jira/browse/CB-6798) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.device-orientation@0.3.7`

* **Windows 8** makes `getHeading` callback spec compliant
* [CB-6799](https://issues.apache.org/jira/browse/CB-6799) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.dialogs@0.2.8`

* Running original `windows.open`, `inAppBrowser` is overriding it no need to place CSS in every page anymore
* [CB-4616](https://issues.apache.org/jira/browse/CB-4616) Returned index 0 was not documented for `notification.prompt`
* [CB-6528](https://issues.apache.org/jira/browse/CB-6528) Allow scroll on alert message content
* [CB-4966](https://issues.apache.org/jira/browse/CB-4966) Dialogs are in window now. No need to add anything to `manifest` or `index.html`
* [CB-5945](https://issues.apache.org/jira/browse/CB-5945) **Windows8** do not call success callbacks until dialog is dismissed
* Update docs to state that `prompt` is supported on **Windows Phone**
* Removing **Firefox OS** quirks. No need to add special permission (it's different API with the same name). `Notification.css` is added automatically
* [CB-6628](https://issues.apache.org/jira/browse/CB-6628) **Amazon FireOS** fix `confirm` and `prompt` methods
* [CB-6801](https://issues.apache.org/jira/browse/CB-6801) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.file@1.2.0`

* Fix sorting order in supported platforms
* Fixed `toURL()` `toInternalURL()` information in the doku
* **Ubuntu** increase quota value
* **Ubuntu** Change FS URL scheme to `cdvfile`
* **Ubuntu** Return size with `Entry.getMetadata()` method
* Initial implementation for **Firefox OS**
* **iOS** Don't fail a write of zero-length payload
* [CB-285](https://issues.apache.org/jira/browse/CB-285) Docs for `cordova.file.*Directory` properties
* [CB-285](https://issues.apache.org/jira/browse/CB-285) **Android**, **iOS** Add `cordova.file.*Directory` properties
* [CB-3440](https://issues.apache.org/jira/browse/CB-3440) **BlackBerry10** Proxy based implementation
* [CB-6583](https://issues.apache.org/jira/browse/CB-6583) **iOS** Fix failing to create entry when space in parent path
* [CB-6571](https://issues.apache.org/jira/browse/CB-6571) **Android** Make `DirectoryEntry.toURL()` have a trailing `/`
* [CB-6525](https://issues.apache.org/jira/browse/CB-6525) **Android**, **iOS** Allow `file:` URLs in all APIs; fixes `FileTransfer.download` not being called
* Fix the **Windows 8** implementation of the `getFile` method
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6803](https://issues.apache.org/jira/browse/CB-6803) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md
* Add NOTICE file

`org.apache.cordova.file-transfer@0.4.4`

* **Ubuntu** support `cdvfile URI`
* Upload progress now works also for second file
* [CB-6706](https://issues.apache.org/jira/browse/CB-6706) Relax dependency on file plugin
* [CB-6378](https://issues.apache.org/jira/browse/CB-6378) Use `connection.disconnect()` instead of `stream.close()` for thread-safety
* [CB-6466](https://issues.apache.org/jira/browse/CB-6466) Auto-create directories in download
* [CB-3440](https://issues.apache.org/jira/browse/CB-3440) **BlackBerry10** Update implementation to use modules from file plugin
* [CB-6494](https://issues.apache.org/jira/browse/CB-6494) **Android** Fix upload of KitKat content URIs
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6802](https://issues.apache.org/jira/browse/CB-6802) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.geolocation@0.3.8`

* [CB-5416](https://issues.apache.org/jira/browse/CB-5416) Adding support for auto-managing permissions
* Proper implementation for **Firefox OS**
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6804](https://issues.apache.org/jira/browse/CB-6804) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.globalization@0.2.8`

* [CB-4602](https://issues.apache.org/jira/browse/CB-4602) Added clarification to docs
* [CB-4602](https://issues.apache.org/jira/browse/CB-4602) [CB-6490](https://issues.apache.org/jira/browse/CB-6490) [CB-4822](https://issues.apache.org/jira/browse/CB-4822) **WP** Globalization
* Android should return `BCP47` tag, not localized string
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6805](https://issues.apache.org/jira/browse/CB-6805) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.inappbrowser@0.5.0`

* [CB-5649](https://issues.apache.org/jira/browse/CB-5649) **iOS** respect App's orientation
* [CB-6474](https://issues.apache.org/jira/browse/CB-6474) Add `data:` URLs support to **WP8**
* [CB-6482](https://issues.apache.org/jira/browse/CB-6482) **WP8** call correct callback
* Fixed use of **iOS** 6 deprecated methods
* [CB-6360](https://issues.apache.org/jira/browse/CB-6360) Feature detection instead of **iOS** version detection
* [CB-6396](https://issues.apache.org/jira/browse/CB-6396) **Firefox OS** Adding basic support
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6806](https://issues.apache.org/jira/browse/CB-6806) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.media@0.2.11`

* [CB-6706](https://issues.apache.org/jira/browse/CB-6706) Relax dependency on file plugin
* [CB-6478](https://issues.apache.org/jira/browse/CB-6478) Fix exception when trying to record audio file on **Windows 8**
* [CB-6477](https://issues.apache.org/jira/browse/CB-6477) Add `musicLibrary` and `microphone` capabilities to **Windows 8**
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6807](https://issues.apache.org/jira/browse/CB-6807) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.media-capture@0.3.1`

* Fixes `captureTasks UI URIs`
* [CB-6706](https://issues.apache.org/jira/browse/CB-6706) Relax dependency on file plugin
* Remove deprecated symbols for **iOS** < 6
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6808](https://issues.apache.org/jira/browse/CB-6808) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.network-information@0.2.9`

* Cached extra info to better detect changes
* [CB-6350](https://issues.apache.org/jira/browse/CB-6350) Fix `networkStatusForFlags` return value type to work with `64-bit` **iOS**
* Initial version of **Firefox OS** network information plugin
* [CB-6809](https://issues.apache.org/jira/browse/CB-6809) Add license to CONTRIBUTING.md
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.splashscreen@0.3.1`

* **WP8** updated quirk for  and combined **iOS**, **WP8**, **BB10** quirks as they are all the same
* **WP** implemented OnInit so splash screen can be shown before cordova page is loaded
* **WP** plugin must be autoloaded for `AutoHideSplashScreen` preference to work
* [CB-6483](https://issues.apache.org/jira/browse/CB-6483) Use splash screen image from manifest on **Windows8**
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6810](https://issues.apache.org/jira/browse/CB-6810) Add license to CONTRIBUTING.md
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.statusbar@0.1.6`

* [CB-6783](https://issues.apache.org/jira/browse/CB-6783) added `StatusBarStyle` config preference,  updated docs
* Update docs with recent **WP** changes, remove `clear` from the list of named colors in documentation
* [CB-6513](https://issues.apache.org/jira/browse/CB-6513) **Android** Fix compiling
* [CB-6812](https://issues.apache.org/jira/browse/CB-6812) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md

`org.apache.cordova.vibration@0.3.9`

* Extended `vibrateWithPattern` to allow for pattern repetition, implemented a complementary `cancelVibration` function and adapted documentation
* Implemented `vibrateWithPattern` (for **Android**) and adapted documentation
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) add CONTRIBUTING.md
