---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Plugins Release and Moving plugins to npm: April 21, 2015"
categories: announcements
tags: plugins announcement release
---

The **Apache Cordova** team is happy to announce a new plugins release that coincides with us moving our core plugins to **[npm]**!

* We are also encouraging third party plugin developers to start publishing their plugins to npm!
* To start using plugins from **npm**, developers will have to update their **Cordova CLI** to version **5.0.0** or higher. Read about **Cordova CLI 5.0.0** in its [release blog post](http://cordova.apache.org/news/2015/04/21/tools-release.html).

With the move over to **npm**, we have decided to rename our core plugins for improved readability and to better fit within the **npm** ecosystem.

* All of our core plugins have changed their IDs from `org.apache.cordova.*` to `cordova-plugin-*`.
* Developers can now install a plugin with the command `cordova plugin add cordova-plugin-device`.
Using the new ID will fetch the plugin directly from **npm**.

Our current **Cordova plugins registry** ([CPR]) will continue to be operational for at least 6 months (`October 15th, 2015`) as we help plugin developers transition over to **npm**.
This will also allow current **Cordova** developers to upgrade their `CLI` to version **5.0.0** or higher.

* We will be switching [CPR] to read-only on `July 15th, 2015`.

To find plugins on **npm**, search for [ecosystem:cordova].
We are working with **npm** to improve discoverability and will have more to announce later this year.
We encourage all third party plugin developers to add `ecosystem:cordova` as a keyword in their plugin's `package.json`.
<!--more-->

## Plugin Authors: Steps to move your plugin to **npm**
1. **Optional** Decide if you want to change your plugin's `id`. If you decide to change it,
    1. Update the `id` in `plugin.xml` and update your readme with the new `id`.
    1. Send a pull request adding your new id and old id to [Cordova Registry Mapper](https://github.com/stevengill/cordova-registry-mapper).
    1. We integrate that module into the **Cordova CLI** to warn users to use the new `id` when adding plugins to their projects.

1. Add a `package.json` to your plugins,
	* **Note**: To keep things simple, please make sure your `id` in `plugin.xml` is the same as your `package-name` in `package.json`.
    * Use `plugman createpackagejson [PLUGIN DIRECTORY]` to create `package.json`.
        * This will create defaults based on existing values in your `plugin.xml`.
        * It will also automatically add the keyword `ecosystem:cordova` to your newly generated `package.json` file.
        * In addition, a **cordova** key will be added to your `package.json` which we plan to use in future updates of the tooling.
    * View the `package.json` of [cordova-plugin-device](https://github.com/apache/cordova-plugin-device/blob/master/package.json) to see an example of what your `package.json` should look like after running `plugman createpackagejson [PLUGIN DIRECTORY]` command.
	* Plugins still require a `plugin.xml` to be installed into **Cordova** projects.

1. Publish your plugin to **npm** using the `npm publish [PLUGIN DIRECTORY]`.

## New Whitelist Plugins

We recently released [cordova-plugin-whitelist](https://www.npmjs.com/package/cordova-plugin-whitelist) and [cordova-plugin-legacy-whitelist](https://www.npmjs.com/package/cordova-plugin-legacy-whitelist). We have revamped how whitelisting works starting with `cordova-android@4.0.0`. With this change, setting a **Content-Security-Policy** (CSP) is now supported. Network requests are blocked by default without `cordova-plugin-whitelist`, so install this plugin even to allow all requests, and even if you are using CSP.

`cordova-plugin-legacy-whitelist` allows `cordova-android@4.0.0` projects to continue using the old whitelisting method. We recommend using `cordova-plugin-whitelist` over `cordova-plugin-legacy-whitelist`.

Other platforms will include support for `cordova-plugin-whitelist` in future releases. To learn more about whitelisting, please read the `cordova-android@4.0.0` [release blog post](http://cordova.apache.org/announcements/2015/04/15/cordova-android-4.0.0.html).

----
The following plugins were updated today:

* cordova-plugin-battery-status@1.0.0
* cordova-plugin-camera@1.0.0
* cordova-plugin-console@1.0.0
* cordova-plugin-contacts@1.0.0
* cordova-plugin-device@1.0.0
* cordova-plugin-device-motion@1.0.0
* cordova-plugin-device-orientation@1.0.0
* cordova-plugin-dialogs@1.0.0
* cordova-plugin-file@2.0.0
* cordova-plugin-file-transfer@1.0.0
* cordova-plugin-geolocation@1.0.0
* cordova-plugin-globalization@1.0.0
* cordova-plugin-inappbrowser@1.0.0
* cordova-plugin-legacy-whitelist@1.0.1
* cordova-plugin-media@1.0.0
* cordova-plugin-media-capture@1.0.0
* cordova-plugin-network-information@1.0.0
* cordova-plugin-splashscreen@2.0.0
* cordova-plugin-statusbar@1.0.0
* cordova-plugin-test-framework@1.0.0
* cordova-plugin-vibration@1.0.0

----
To update your existing plugins, you need to update your version of `Cordova CLI` to version 5.0.0.

    E.g. To update your cli:
        
        `npm install -g cordova@5.0.0`

Then remove your old plugin and re-add it using the new ID.

    E.g. To update your camera plugin:

        `cordova plugin rm org.apache.cordova.camera`
        `cordova plugin add cordova-plugin-camera`

Plugin changes include:

cordova-plugin-battery-status@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* Add `travis.yml` for CI with **paramedic**
* Added apache/travis badge - will not show until INFRA updates the github integration
* [CB-8808](https://issues.apache.org/jira/browse/CB-8808) Fixed tests to pass on **Windows Phone 8.1**
* [CB-8831](https://issues.apache.org/jira/browse/CB-8831) **Windows** Adds extra check for available `API`
* Add **Android**+**FireOS** warning to tell devs that prolonged use will drain the battery
* [CB-7971](https://issues.apache.org/jira/browse/CB-7971) Add `cordova-plugin-battery-status` support for **Windows Phone 8.1**
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWithWebView` method

cordova-plugin-camera@1.0.0

* [CB-8653](https://issues.apache.org/jira/browse/CB-8653) Updated Readme
* [CB-8780](https://issues.apache.org/jira/browse/CB-8780) Display popover using main thread. Fixes popover slowness
* [CB-8746](https://issues.apache.org/jira/browse/CB-8746) Bumped version of file dependency
* [CB-8706](https://issues.apache.org/jira/browse/CB-8706) Use `filePicker` if `saveToPhotoAlbum` is true
* [CB-8706](https://issues.apache.org/jira/browse/CB-8706) Remove unnecessary capabilities from `xml`
* [CB-8747](https://issues.apache.org/jira/browse/CB-8747) Updated dependency, added peer dependency
* [CB-8782](https://issues.apache.org/jira/browse/CB-8782) Updated the docs to talk about the `allowEdit` quirks, it's not 100% working, but better than it was
* [CB-8782](https://issues.apache.org/jira/browse/CB-8782) Fixed the flow so that we save the cropped image and use it, not the original non-cropped.  Crop only supports G+ Photos Crop, other crops may not work, depending on the OEM
* [CB-8740](https://issues.apache.org/jira/browse/CB-8740) Removing `FileHelper` call that was failing on Samsung Galaxy S3, now that we have a real path, we only need to update the `MediaStore`, not pull from it in this case
* [CB-8740](https://issues.apache.org/jira/browse/CB-8740) Partial fix for Save Image to Gallery error found in `MobileSpec`
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) Fix custom implementation of `integerValueForKey`
* Fix `cordova-paramedic` path change, build with `TRAVIS_BUILD_DIR`, use **npm** to install **paramedic**
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) **BlackBerry** updated references of `org.apache.cordova.camera` to `cordova-plugin-camera`
* [CB-8707](https://issues.apache.org/jira/browse/CB-8707) **Windows** refactoring code to improve readability
* Docs: added **Windows** to supported platforms
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of deprecated headers

cordova-plugin-console@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8560](https://issues.apache.org/jira/browse/CB-8560) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* Docs: renamed **Windows8** to **Windows**
* [CB-8362](https://issues.apache.org/jira/browse/CB-8362) Add **Windows** platform section to Console plugin

cordova-plugin-contacts@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8561](https://issues.apache.org/jira/browse/CB-8561) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWebView` method
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of deprecated headers
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Updated **wp** specific references of old id to new id
* [CB-8604](https://issues.apache.org/jira/browse/CB-8604) Pended unsupported test for **wp8**, updated documentation
* [CB-8395](https://issues.apache.org/jira/browse/CB-8395) Marked unsupported tests pending on **wp8**

cordova-plugin-device@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* Add travis badge
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* Add cross-plugin **iOS** **paramedic** test running for **TravisCI**
* Remove defunct **windows8** version

cordova-plugin-device-motion@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
specific references of old id to new id
* [CB-8562](https://issues.apache.org/jira/browse/CB-8562) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Updated **Windows** and **Tizen** * [CB-8096](https://issues.apache.org/jira/browse/CB-8096) Pended recently added spec.12 if accelerometer doesn't exist on the device
* [CB-8096](https://issues.apache.org/jira/browse/CB-8096) Pended auto tests if accelerometer doesn't exist on the device
* [CB-8083](https://issues.apache.org/jira/browse/CB-8083) Adds test to make sure success callback is called each time
* [CB-8312](https://issues.apache.org/jira/browse/CB-8312) Multiply accelerometer values by -g on **Windows**

cordova-plugin-device-orientation@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8563](https://issues.apache.org/jira/browse/CB-8563) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8653](https://issues.apache.org/jira/browse/CB-8653) Updated Readme
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Updated **Windows** and **Tizen** specific references of old id to new id
* [CB-8458](https://issues.apache.org/jira/browse/CB-8458) Fixes false failure of test, when compass hardware is not available
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWebView` method
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of deprecated headers
* Force async callbacks
* Updated plugin to be **Windows** instead of **Windows8**
* [CB-8614](https://issues.apache.org/jira/browse/CB-8614) **Windows** Fixed `getCurrentHeading` and `watchHeading`

cordova-plugin-dialogs@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8565](https://issues.apache.org/jira/browse/CB-8565) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Updated wp and bb specific references of old id to new id
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of deprecated headers
* [CB-8367](https://issues.apache.org/jira/browse/CB-8367) **Windows** Add Prompt support

cordova-plugin-file@2.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8567](https://issues.apache.org/jira/browse/CB-8567) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8689](https://issues.apache.org/jira/browse/CB-8689) Fix `NPE` in `makeEntryForNativeUri` (was affecting file-transfer)
* Add a cache to speed up `AssetFilesystem` directory listings
* Don't log stacktrace for normal exceptions (e.g. file not found)
* Tweak tests to fail if `deleteEntry` fails (rather than time out)
* [CB-8032](https://issues.apache.org/jira/browse/CB-8032) Add `nativeURL` external method support for `CDVFileSystem->makeEntryForPath:isDirectory:`
* [CB-8423](https://issues.apache.org/jira/browse/CB-8423) Corrected usage of `done()` in async tests
* [CB-8459](https://issues.apache.org/jira/browse/CB-8459) Fixes spec 111 failure due to incorrect relative paths handling
* Added `nativeURL` property to `FileEntry`, implemented `readAsArrayBuffer` and `readAsBinaryString`
* [CB-8675](https://issues.apache.org/jira/browse/CB-8675) Revert "CB-8351 **iOS**: Use `base64EncodedStringWithOptions` instead of `CordovaLib's` class extension"
* [CB-6428](https://issues.apache.org/jira/browse/CB-6428) Fix uncompressed assets being copied as zero length files
* [CB-8695](https://issues.apache.org/jira/browse/CB-8695) **iOS** Fix `blob.slice()` for `asset-library` URLs
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWebView` method
* **Android** Tweak `build-extras.gradle` to just read/write to main `assets/` instead of `build/`
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) **Android** Fix broken unit tests from plugin rename
* [CB-6428](https://issues.apache.org/jira/browse/CB-6428) **Android** Fix assets `FileEntry` having size of -1
* **Android** Move `URLforFullPath` into base class (and rename to `localUrlforFullPath`)
* [CB-6428](https://issues.apache.org/jira/browse/CB-6428) **Android** Mention `build-extras.gradle` in README
* [CB-7109](https://issues.apache.org/jira/browse/CB-7109) **Android** Parse arguments off of the main thread
* [CB-8663](https://issues.apache.org/jira/browse/CB-8663) **Android** Don't notify `MediaScanner` of private files
* **Android** Don't use LimitedInputStream when reading entire file (optimization)
* [CB-6428](https://issues.apache.org/jira/browse/CB-6428) **Android** Add support for directory copies from assets -> filesystem
* **Android** Add `listChildren()`: Java-consumable version of `readEntriesAtLocalURL()`
* [CB-6428](https://issues.apache.org/jira/browse/CB-6428) **Android** Add support for `file:///android_asset` URLs
* [CB-8642](https://issues.apache.org/jira/browse/CB-8642) **Android** Fix content URIs not working with resolve / copy
* **Android** Ensure `LocalFilesystemURL` can only be created with `cdvfile` URLs
* **Android** Move `CordovaResourceApi` into Filesystem base class
* **Android** Use `CordovaResourceApi.mapUriToFile()` rather than own custom logic in `ContentFilesystem`
* **Android** Use Uri.parse rather than manual parsing in resolveLocalFileSystemURI
* **Android** Delete invalid `JavaDoc` (lint errors)
* **Android** Use `CordovaResourceAp`i rather than `FileHelper`
* [CB-7956](https://issues.apache.org/jira/browse/CB-7956) **Browser** Add support
* [CB-8849](https://issues.apache.org/jira/browse/CB-8849) **WP8** Fixed `ReadAsArrayBuffer` to return `ArrayBuffer` and not Array
* [CB-8819](https://issues.apache.org/jira/browse/CB-8819) **wp8** Fixed FileReader's `readAsBinaryString`
* Docs: added **Windows** to supported platforms

cordova-plugin-file-transfer@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8566](https://issues.apache.org/jira/browse/CB-8566) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8746](https://issues.apache.org/jira/browse/CB-8746) Bumped version of file dependency
* [CB-8583](https://issues.apache.org/jira/browse/CB-8583) Forces download to overwrite existing target file
* [CB-8589](https://issues.apache.org/jira/browse/CB-8589) Fixes upload failure when server's response doesn't contain any data
* [CB-8747](https://issues.apache.org/jira/browse/CB-8747) Updated dependency, added peer dependency
* [CB-8407](https://issues.apache.org/jira/browse/CB-8407) Use File proxy to construct valid FileEntry for download success callback
* [CB-8407](https://issues.apache.org/jira/browse/CB-8407) Removes excess path to native path conversion in download method
* [CB-8429](https://issues.apache.org/jira/browse/CB-8429) Updated version and `RELEASENOTES.md` for release 0.5.0
* [CB-8095](https://issues.apache.org/jira/browse/CB-8095) Fixes JSHint and formatting issues
* [CB-8095](https://issues.apache.org/jira/browse/CB-8095) Updates tests and documentation
* [CB-8095](https://issues.apache.org/jira/browse/CB-8095) Rewrite upload method to support progress events properly
* **Android** Fix error reporting for unknown `uri` type on `sourceUri` instead of `targetUri`
* [CB-7957](https://issues.apache.org/jira/browse/CB-7957) **Browser** Add support
* [CB-8641](https://issues.apache.org/jira/browse/CB-8641) Fixed tests to pass on **Windows** and **wp8**
* [CB-8654](https://issues.apache.org/jira/browse/CB-8654) Note **WP8** download requests caching in docs
* [CB-8590](https://issues.apache.org/jira/browse/CB-8590) **Windows** Fixed `download.onprogress.lengthComputable`
* [CB-8495](https://issues.apache.org/jira/browse/CB-8495) Fixed **wp8** and **wp8.1** test failures

cordova-plugin-geolocation@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8568](https://issues.apache.org/jira/browse/CB-8568) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8681](https://issues.apache.org/jira/browse/CB-8681) Fixed occasional test failures
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWebView` method
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of deprecated headers
* Wrong parameter in **Firefox OS** plugin
* [CB-8443](https://issues.apache.org/jira/browse/CB-8443) Geolocation tests fail on **Windows** due to done is called multiple times
* Docs: added **Windows** to supported platforms

cordova-plugin-globalization@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8569](https://issues.apache.org/jira/browse/CB-8569) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Updated **tizen** and **Browser** specific references of old id to new id
* [CB-7960](https://issues.apache.org/jira/browse/CB-7960) **Browser** Add support
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWebView` method
* [CB-8394](https://issues.apache.org/jira/browse/CB-8394) Pended unsupported tests for **Windows** and **wp8**
* Separate section in `plugin.xml` and docs for **Windows8** platform

cordova-plugin-inappbrowser@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8570](https://issues.apache.org/jira/browse/CB-8570) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-4930](https://issues.apache.org/jira/browse/CB-4930) (prefix) InAppBrowser should take into account the status bar
* Added option to disable/enable zoom controls
* Updated docs, set `hardwareback` default to true
* Add a `hardwareback` option to allow for the hardware back button to go back
* [CB-8444](https://issues.apache.org/jira/browse/CB-8444) Add a clobber for `cordova.InAppBrowser.open`
* [CB-8444](https://issues.apache.org/jira/browse/CB-8444) Don't clobber `window.open` - Add new symbol/clobber to access open function (`cordova.InAppBrowser.open`) Change existing tests to use new symbol (i.e. don't rely on plugin clobber of `window.open`) - Add tests to use `window.open` via manual replace with new symbol - Update docs to deprecate plugin clobber of `window.open`
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) Update `InAppBrowser` to support both **cordova-ios** 4.0.x and 3.x
* Update docs for **Android** `zoom=no` option
* Keep external **Android** pages in a single tab
* [CB-7961](https://issues.apache.org/jira/browse/CB-7961) **Browser** Add support
* [CB-8432](https://issues.apache.org/jira/browse/CB-8432) Correct styles for **Browser** wrapper to display it correctly on some pages
* [CB-7689](https://issues.apache.org/jira/browse/CB-7689) Adds `insertCSS` support for **Windows** platform
* [CB-8635](https://issues.apache.org/jira/browse/CB-8635) Improves UX on **Windows** platform
* [CB-8661](https://issues.apache.org/jira/browse/CB-8661) Return executed script result on **Windows**
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Updated **WP** and **Browser** specific references of old id to new id

cordova-plugin-media@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8572](https://issues.apache.org/jira/browse/CB-8572) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8746](https://issues.apache.org/jira/browse/CB-8746) Bumped version of file dependency
* [CB-8747](https://issues.apache.org/jira/browse/CB-8747) Updated dependency, added peer dependency
* [CB-8686](https://issues.apache.org/jira/browse/CB-8686) Remove `musicLibrary` capability
* [CB-8428](https://issues.apache.org/jira/browse/CB-8428) Fix multiple `done()` calls in media plugin test on devices where audio is not configured
* [CB-8425](https://issues.apache.org/jira/browse/CB-8425) Media plugin `.ctr`: make src param required as per spec
* [CB-7962](https://issues.apache.org/jira/browse/CB-7962) Adds **Browser** platform support
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of deprecated headers
* [CB-8793](https://issues.apache.org/jira/browse/CB-8793) Fixed tests to pass on **wp8** and **Windows**
* [CB-8779](https://issues.apache.org/jira/browse/CB-8779) Fixed media status reporting on **wp8**
* [CB-8541](https://issues.apache.org/jira/browse/CB-8541) Adds information about available recording formats on **Windows**
* [CB-8428](https://issues.apache.org/jira/browse/CB-8428) Fix tests on **Windows** if no audio playback hardware is available
* [CB-8426](https://issues.apache.org/jira/browse/CB-8426) Add **Windows** platform section to Media plugin

cordova-plugin-media-capture@1.0.0

* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8746](https://issues.apache.org/jira/browse/CB-8746) Bumped version of file dependency
* [CB-8747](https://issues.apache.org/jira/browse/CB-8747) Updated dependency, added peer dependency
* [CB-8687](https://issues.apache.org/jira/browse/CB-8687) Consolidate manifest targets
* [CB-7963](https://issues.apache.org/jira/browse/CB-7963) **Browser** Add support
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWebView` method
* [CB-8571](https://issues.apache.org/jira/browse/CB-8571) Integrate **TravisCI**
* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file

cordova-plugin-network-information@1.0.0

* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8185](https://issues.apache.org/jira/browse/CB-8185) Fixes typo in `cordova.platformId`
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8185](https://issues.apache.org/jira/browse/CB-8185) Use `navigator.onLine` as connection information source on **Browser** platform
* [CB-8659](https://issues.apache.org/jira/browse/CB-8659) **iOS 4.0.x** Compatibility: Remove use of `initWebView` method
* [CB-8573](https://issues.apache.org/jira/browse/CB-8573) Integrate **TravisCI**
* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file

cordova-plugin-splashscreen@2.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8574](https://issues.apache.org/jira/browse/CB-8574) Integrate **TravisCI**
* [CB-8345](https://issues.apache.org/jira/browse/CB-8345) Make default for splashscreen resource `screen` (which is what template and **CLI** assume it to be)
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* [CB-8836](https://issues.apache.org/jira/browse/CB-8836) Crashes after animating `splashscreen`
* [CB-8797](https://issues.apache.org/jira/browse/CB-8797) **iOS** add Splashscreen preferences `FadeSplashScreenDuration` and `FadeSplashScreen`
* [CB-8753](https://issues.apache.org/jira/browse/CB-8753) **Android** Fix missing import in previous commit
* [CB-8753](https://issues.apache.org/jira/browse/CB-8753) **Android** Adds `SplashMaintainAspectRatio` preference
* Docs: added **Windows** to supported platforms
* [CB-7964](https://issues.apache.org/jira/browse/CB-7964) **browser** Add support
* **WP8** respect `SplashScreen` and `SplashScreenDelay` preferences from config file
* [CB-8397](https://issues.apache.org/jira/browse/CB-8397) **Windows** support showing the **Windows Phone** splashscreen

cordova-plugin-statusbar@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8575](https://issues.apache.org/jira/browse/CB-8575) Integrate **TravisCI**
* Use `TRAVIS_BUILD_DIR`, install **paramedic** by **npm**
* Use `StatusBarBackgroundColor` instead of `AndroidStatusBarBackgroundColor`, and added a quirk to the readme
* **Android 5+** Add support for `StatusBar.backgroundColorByHexString` (and `StatusBar.backgroundColorByName`)
* **Android** Allow setting the `statusbar backgroundcolor`

cordova-plugin-test-framework@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8528](https://issues.apache.org/jira/browse/CB-8528) Add a shim for `jasmine.Expectation.addMatchers` being moved in **jasmine 2.2.0**
* [CB-8528](https://issues.apache.org/jira/browse/CB-8528) Update test framework plugin to use **Jasmine 2.2.0**
* [CB-8385](https://issues.apache.org/jira/browse/CB-8385) Ensure `plugin-test-framework` trigger tests only once

cordova-plugin-vibration@1.0.0

* [CB-8538](https://issues.apache.org/jira/browse/CB-8538) Added `package.json` file
* [CB-8683](https://issues.apache.org/jira/browse/CB-8683) Changed `plugin-id` to `package-name`
* [CB-8576](https://issues.apache.org/jira/browse/CB-8576) Integrate **TravisCI**
* [CB-7970](https://issues.apache.org/jira/browse/CB-7970) Reference proxy project instead of compiled `winmd`
* [CB-7970](https://issues.apache.org/jira/browse/CB-7970) Add `cordova-plugin-vibration` support for **Windows Phone 8.1**

[npm]: https://www.npmjs.org/
[CPR]: http://plugins.cordova.io
[ecosystem:cordova]: https://www.npmjs.com/search?q=ecosystem%3Acordova
[cordova-plugin-device]: https://github.com/apache/cordova-plugin-device/blob/master/package.json
