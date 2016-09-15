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

* cordova-plugin-battery-status: 1.2.0
* cordova-plugin-camera: 2.3.0
* cordova-plugin-console: 1.0.4
* cordova-plugin-contacts: 2.2.0
* cordova-plugin-device: 1.1.3
* cordova-plugin-device-motion: 1.2.2
* cordova-plugin-device-orientation: 1.0.4
* cordova-plugin-dialogs: 1.3.0
* cordova-plugin-file: 4.3.0
* cordova-plugin-file-transfer: 1.6.0
* cordova-plugin-geolocation: 2.3.0
* cordova-plugin-globalization: 1.0.4
* cordova-plugin-inappbrowser: 1.5.0
* cordova-plugin-media: 2.4.0
* cordova-plugin-media-capture: 1.4.0
* cordova-plugin-network-information: 1.3.0
* cordova-plugin-splashscreen: 4.0.0
* cordova-plugin-statusbar: 2.2.0
* cordova-plugin-test-framework: 1.1.3
* cordova-plugin-vibration: 2.1.2
* cordova-plugin-whitelist: 1.3.0
* cordova-plugin-wkwebview-engine: 1.1.0

Release Highlights:
* `camera`, `contacts` and `media-capture` have been updated to work with **iOS 10**
* `camera`:[CB-4078](https://issues.apache.org/jira/browse/CB-4078) Fix for `orientation/scaling` on **Android 4.4+** devices. Adds support for `content:`.
* `splashscreen`: [CB-8056](https://issues.apache.org/jira/browse/CB-8056) Implement splashscreen for **Windows** platform
* Various plugins: fixed issue where Plugin was using `Android Log class` and not `Cordova LOG class`

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your camera plugin:

    cordova plugin rm cordova-plugin-camera --save
    cordova plugin add cordova-plugin-camera@latest --save

Changes include:
<!--more-->

cordova-plugin-battery-status@1.2.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Plugin uses Android Log class and not Cordova LOG class
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-camera@2.3.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-11661](https://issues.apache.org/jira/browse/CB-11661) Add mandatory **iOS 10** privacy description
* [CB-11714](https://issues.apache.org/jira/browse/CB-11714) **windows** added more explicit content-type when converting to target data on canvas
* [CB-11295](https://issues.apache.org/jira/browse/CB-11295) Add **WP8.1** quirk when choosing image from `photoalbum`
* [CB-10067](https://issues.apache.org/jira/browse/CB-10067) Update `PictureSourceType` JSDoc to reflect `README` update
* [CB-9070](https://issues.apache.org/jira/browse/CB-9070) Update `CameraPopoverHandle` docs to reflect `README` update
* Plugin uses `Android Log class` and not `Cordova LOG class`
* [CB-11631](https://issues.apache.org/jira/browse/CB-11631) Appium tests: A working fix for a flaky `selection canceled` failure
* [CB-11709](https://issues.apache.org/jira/browse/CB-11709) Tests should use `resolveLocalFileSystemURL()` instead of deprecated `resolveFileSystemURI()`
* [CB-11695](https://issues.apache.org/jira/browse/CB-11695) Increased session creation timeout for Appium tests
* [CB-11656](https://issues.apache.org/jira/browse/CB-11656) (**Android**) Appium tests: Fixed side menu opening on some more resolutions
* [CB-11376](https://issues.apache.org/jira/browse/CB-11376) (**ios**): fix `CameraUsesGeolocation` error
* [CB-10067](https://issues.apache.org/jira/browse/CB-10067) (**ios**) clarifications on `PictureSourceType`
* [CB-11410](https://issues.apache.org/jira/browse/CB-11410) (**ios**) fix `cameraPopoverHandle.setPosition`
* [CB-9070](https://issues.apache.org/jira/browse/CB-9070) (**ios**) Fixed `CameraPopoverHandle` documentation
* [CB-11447](https://issues.apache.org/jira/browse/CB-11447) Respect output format when retrieving images from gallery
* [CB-11447](https://issues.apache.org/jira/browse/CB-11447) Resolve **iOS** tests failures due to **iOS** quirks
* [CB-11553](https://issues.apache.org/jira/browse/CB-11553) Pend failing Appium tests on Sauce Labs for the time being (reverted from commit b69571724035f41642f3ee612c5b66e1f0c4386c)
* [CB-11553](https://issues.apache.org/jira/browse/CB-11553) Pend failing Appium tests on Sauce Labs for the time being
* [CB-11498](https://issues.apache.org/jira/browse/CB-11498) [**Android**] Appium tests should not fail when there is no camera
* Add badges for paramedic builds on Jenkins
* [CB-11296](https://issues.apache.org/jira/browse/CB-11296) Appium: Better element clicking and session error handling
* [CB-11232](https://issues.apache.org/jira/browse/CB-11232) Appium tests: fixed element tapping on **iOS 9**
* [CB-11183](https://issues.apache.org/jira/browse/CB-11183) Appium tests: Added image verification
* fixed some bad formatting that hid `HTML` tags and added link to sample
* Set **android** quality default value to 50 on the java code
* Moving message in PR template to a comment
* Add pull request template. This closes #213
* [CB-11228](https://issues.apache.org/jira/browse/CB-11228) **browser**: Add classes for styling purposes
* [CB-10139](https://issues.apache.org/jira/browse/CB-10139) **browser**: Respect target width and height
* [CB-11227](https://issues.apache.org/jira/browse/CB-11227) **browser**: Fix incorrect `mime type`
* [CB-11162](https://issues.apache.org/jira/browse/CB-11162) Appium tests: retry spec on failure
* [CB-4078](https://issues.apache.org/jira/browse/CB-4078) Fix for `orientation/scaling` on **Android 4.4+** devices
* [CB-11165](https://issues.apache.org/jira/browse/CB-11165) removed peer dependency
* [CB-11147](https://issues.apache.org/jira/browse/CB-11147) Appium tests: generate descriptive spec names
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to `README.md`
* [CB-11128](https://issues.apache.org/jira/browse/CB-11128) Appum tests: Fixed some of the flaky failures
* [CB-11003](https://issues.apache.org/jira/browse/CB-11003) Added Sample section to the Camera plugin README

cordova-plugin-console@1.0.4
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to `cordovaDependencies`
* add `JIRA` issue tracker link
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-contacts@2.2.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Added variable to set the usage
* Plugin uses `Android Log class` and not `Cordova LOG class`
* [CB-11695](https://issues.apache.org/jira/browse/CB-11695) Increased session creation timeout for Appium tests
* [CB-11667](https://issues.apache.org/jira/browse/CB-11667) Memory leak in `CDVContact` for `CoreFoundation` `ABRecordRef`
* [CB-11574](https://issues.apache.org/jira/browse/CB-11574) Appium tests now use new injected promise chain methods
* Add badges for paramedic builds on Jenkins
* [CB-11296](https://issues.apache.org/jira/browse/CB-11296) Appium: Better element clicking and session error handling
* Add pull request template.
* Add fenced code blocks - with language hints
* handle `Invalid Date` error
* [CB-11166](https://issues.apache.org/jira/browse/CB-11166) Appium tests: Added a check for contact's birthday
* [CB-11033](https://issues.apache.org/jira/browse/CB-11033) Appium tests: more timeout tweaks
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to `README.md`
* [CB-11128](https://issues.apache.org/jira/browse/CB-11128) Appium tests: Increased session destruction timeout

cordova-plugin-device@1.1.3
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* Readme: Add fenced code blocks with langauage hints
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to `README.md`

cordova-plugin-device-motion@1.2.2
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-11482](https://issues.apache.org/jira/browse/CB-11482) Fix unreliable tests on **Android**
* [CB-11531](https://issues.apache.org/jira/browse/CB-11531) Restart `Accelerometer` on `CyanogenMod 13`
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-11188](https://issues.apache.org/jira/browse/CB-11188) `cordova-plugin-device-motion-tests` are failing in CI
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-device-orientation@1.0.4
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md
* Removed ios quirk code + documentation

cordova-plugin-dialogs@1.3.0
* [CB-11832](https://issues.apache.org/jira/browse/CB-11832) updated missing header file
* Select the text and put default value in the input directly.
* [CB-11281](https://issues.apache.org/jira/browse/CB-11281) **windows**: `defaultText` is not taken as input if no input by user fixed
* Separated `CSS` from `JS` code. Fixed the prompt dialog CSS to look close to native. Fixed the positioning of the prompt dialog for Windows. Fixed minor JSHint issues.
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-8773](https://issues.apache.org/jira/browse/CB-8773) Fix for **iOS 8** keyboard not appearing on prompt
* [CB-11677](https://issues.apache.org/jira/browse/CB-11677) **Android**: made text, entered to prompt dialog visible
* CB-8947:(**ios**) Fix crash. Convert non-string messages to strings. Added tests.
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-11218](https://issues.apache.org/jira/browse/CB-11218) Convert button list to appropriate type
* Simply add **Browser** to supported platforms
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-file@4.3.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Add handling for `SecurityException`
* [CB-11368](https://issues.apache.org/jira/browse/CB-11368) **android**: Resolve content `URLs` produced by contacts plugin
* Plugin uses `Android Log class` and not `Cordova LOG class`
* [CB-11693](https://issues.apache.org/jira/browse/CB-11693) **ios**: Run copy and move operations in the background thread
* [CB-11699](https://issues.apache.org/jira/browse/CB-11699) Read files as Data URLs properly
* [CB-11305](https://issues.apache.org/jira/browse/CB-11305) Enable `cdvfile: assets fs root` for `DOM` requests
* [CB-11385](https://issues.apache.org/jira/browse/CB-11385) android: Import java.nio.charset.Charset in LocalFileSystem class
* Add badges for paramedic builds on Jenkins
* [CB-11407](https://issues.apache.org/jira/browse/CB-11407) ios: added extern keyword to constants to fix phonegap-webview-ios template issue.
* [CB-11385](https://issues.apache.org/jira/browse/CB-11385) **android**: Does not pass sonarqube scan
* Add pull request template.
* Minor edits to the `README.md`
* [CB-11142](https://issues.apache.org/jira/browse/CB-11142) Fix the `NeedPermission` code for the case when external media is not mounted in Android
* [CB-11003](https://issues.apache.org/jira/browse/CB-11003) Adding samples to Readme.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md
* [CB-11115](https://issues.apache.org/jira/browse/CB-11115) **android**: Removing dependency on FileDescriptor toString in content provider tests

cordova-plugin-file-transfer@1.6.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-9022](https://issues.apache.org/jira/browse/CB-9022) Fix exception thrown by call to `remapApi` on main thread
* Plugin uses `Android Log class` and not `Cordova LOG class`
* [CB-9022](https://issues.apache.org/jira/browse/CB-9022) Resolve source URI on background thread
* [CB-11316](https://issues.apache.org/jira/browse/CB-11316) **windows**: Added `content-type` for files
* Close invalid PRs
* [CB-11497](https://issues.apache.org/jira/browse/CB-11497) Use `cordova-vm` for testing 304 errors
* Add badges for paramedic builds on Jenkins
* documentation with a wrong log message in `fileTransfer.download` function
* added link to sample
* Add pull request template.
* [CB-10974](https://issues.apache.org/jira/browse/CB-10974) Cordova file transfer `Content-Length` header problem
* Add fenced code blocks to help code formatting
* [CB-11165](https://issues.apache.org/jira/browse/CB-11165) removed peer dependency
* [CB-11003](https://issues.apache.org/jira/browse/CB-11003) Adding sample section to documentation.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-geolocation@2.3.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Plugin uses `Android Log class` and not `Cordova LOG class`
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* Adding links to reference content and sample content to the top of the readme file
* Update **iOS** geolocation plugin to avoid `THREAD WARNING: ['Geolocation']`, operation occurs in new Thread
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-globalization@1.0.4
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-inappbrowser@1.5.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Add intent scheme to be handled by OS
* Plugin uses `Android Log class` and not `Cordova LOG class`
* Adding links to guide content and reference content at the top of the readme file Github: close #163
* [CB-10973](https://issues.apache.org/jira/browse/CB-10973) **Browser**: wrong height of webview with `location=yes`
* Size and position in browser platform
* [CB-10973](https://issues.apache.org/jira/browse/CB-10973) **Windows**: wrong height of webview with `location=yes`
* [CB-11013](https://issues.apache.org/jira/browse/CB-11013) IAB enabling background play of YouTube videos?
* [CB-10467](https://issues.apache.org/jira/browse/CB-10467) Hardware back button, while `InAppBrowser` is opened, closes the app too in addition to closing `InAppBrowser`
* [CB-11178](https://issues.apache.org/jira/browse/CB-11178) allow to open other apps on **iOS 9**
* fix some calls which used api level 16
* [CB-5402](https://issues.apache.org/jira/browse/CB-5402) added extra content from wiki page
* [CB-2063](https://issues.apache.org/jira/browse/CB-2063) (**ios**) Fixed presentation style
* [CB-11012](https://issues.apache.org/jira/browse/CB-11012) added some clarifications about `InAppBrowser` object
* [CB-3360](https://issues.apache.org/jira/browse/CB-3360) Set custom `inappbrowser` user agent for **ios**
* Add badges for paramedic builds on Jenkins
* [CB-11381](https://issues.apache.org/jira/browse/CB-11381) android: Does not pass sonarqube scan
* Add pull request template.
* [CB-10866](https://issues.apache.org/jira/browse/CB-10866) Adding engine requirements to `package.json`
* [CB-110003](https://issues.apache.org/jira/browse/CB-110003) Adding samples to Readme.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-media@2.4.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-11793](https://issues.apache.org/jira/browse/CB-11793) fixed **android** build issue with last commit
* [CB-11085](https://issues.apache.org/jira/browse/CB-11085) Fix error output using `println` to `LOG.e`
* [CB-11757](https://issues.apache.org/jira/browse/CB-11757) (**ios**) Error out if trying to stop playback while in a wrong state
* [CB-11380](https://issues.apache.org/jira/browse/CB-11380) (**ios**) Overloaded `audioFileForResource` method instead of modifying its signature
* [CB-11380](https://issues.apache.org/jira/browse/CB-11380) (**ios**) Updated modified method signature in the .h file
* [CB-11380](https://issues.apache.org/jira/browse/CB-11380) (**ios**) Fixed an unexpected error callback when initializing Media with file that doesn't exist
* [CB-10849](https://issues.apache.org/jira/browse/CB-10849) (ios) Fixed a crash when playing soundfiles consecutively
* [CB-11754](https://issues.apache.org/jira/browse/CB-11754) (**Android**) Fixed the build error
* [CB-11086](https://issues.apache.org/jira/browse/CB-11086) (**Android**) Fixed a crash when `setVolume()` is called on unitialized audio This closes #93
* Plugin uses `Android Log class` and not `Cordova LOG class`
* [CB-11655](https://issues.apache.org/jira/browse/CB-11655) (**Android**) Enabled asynchronous error handling
* [CB-11430](https://issues.apache.org/jira/browse/CB-11430) Report duration NaN value to JS properly
* [CB-11429](https://issues.apache.org/jira/browse/CB-11429) Update test stream URL
* [CB-11430](https://issues.apache.org/jira/browse/CB-11430) Skip audio playback tests on Saucelabs
* [CB-11458](https://issues.apache.org/jira/browse/CB-11458) - `media.spec.25` 'should be able to play an audio stream' fails on **iOS** platform
* Add badges for paramedic builds on Jenkins
* [CB-11313](https://issues.apache.org/jira/browse/CB-11313) Can't start media streaming on **Android 6.0**
* Add pull request template.
* Readme: Add fenced code blocks with langauage hints
* [CB-11165](https://issues.apache.org/jira/browse/CB-11165) removed peer dependency
* [CB-10776](https://issues.apache.org/jira/browse/CB-10776) Add the ability to pause and resume an audio recording (**Android**)
* [CB-10776](https://issues.apache.org/jira/browse/CB-10776) Add the ability to pause and resume an audio recording (**iOS**)
* [CB-9487](https://issues.apache.org/jira/browse/CB-9487) Don't update position when getting amplitude
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-media-capture@1.4.0
* Add mandatory **iOS 10** privacy description for microphone
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-11821](https://issues.apache.org/jira/browse/CB-11821) (ios) Add mandatory **iOS 10** privacy description
* Plugin uses `Android Log class` and not `Cordova LOG class`
* Add badges for paramedic builds on Jenkins
* [CB-11396](https://issues.apache.org/jira/browse/CB-11396) - Audio Media Capture Crashes if app stores file on external storage
* Add pull request template.
* [CB-11212](https://issues.apache.org/jira/browse/CB-11212) **iOS**: Explicitly set the bundle for images
* [CB-10554](https://issues.apache.org/jira/browse/CB-10554) Implementing plugin `save/restore` API for Android
* [CB-11165](https://issues.apache.org/jira/browse/CB-11165) removed peer dependency
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-network-information@1.3.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-11734](https://issues.apache.org/jira/browse/CB-11734) Network Plugin uses `Android Log class` and not `Cordova LOG class`
* [CB-11300](https://issues.apache.org/jira/browse/CB-11300) (**android**) Recognize `2G`, `3G` and `4G` network connection subtype names
* Update `NetworkManager.java`
* Detection of Ethernet Network Type on **Android**
* fixed two potential memory leaks when doing Analyze on **iOS 9**
* [CB-11384](https://issues.apache.org/jira/browse/CB-11384) **android**: Does not pass sonarqube scan
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* Readme: Add fenced code blocks with langauage hints
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-splashscreen@4.0.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* [CB-11326](https://issues.apache.org/jira/browse/CB-11326) Prevent crash when initializing plugin after navigating to another URL
* Fix crash on **iOS** when reloading page from remote **Safari**
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-11179](https://issues.apache.org/jira/browse/CB-11179) Extend the windows-splashscreen docs
* [CB-11159](https://issues.apache.org/jira/browse/CB-11159) Fix flaky splashscreen native tests
* [CB-11156](https://issues.apache.org/jira/browse/CB-11156) Change default `FadeSplashScreenDuration` value
* [CB-8056](https://issues.apache.org/jira/browse/CB-8056) Updated the dependency version, added it to the docs
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md
* [CB-8056](https://issues.apache.org/jira/browse/CB-8056) Implement splashscreen for **Windows** platform
* [CB-6498](https://issues.apache.org/jira/browse/CB-6498) Misleading documentation in **Android** Quirks

cordova-plugin-statusbar@2.2.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Handle extended status bar on **iOS**
* Plugin uses `Android Log class` and not `Cordova LOG class`
* [CB-11287](https://issues.apache.org/jira/browse/CB-11287) (**ios**) - fix webview resize after modal on **iPhones**
* [CB-11485](https://issues.apache.org/jira/browse/CB-11485) fix resize on rotation with popover
* Add badges for paramedic builds on Jenkins
* [CB-11197](https://issues.apache.org/jira/browse/CB-11197) Keep status bar hidden when keyboard pops up
* Add pull request template.
* [CB-10866](https://issues.apache.org/jira/browse/CB-10866) Adding engine info to `package.json`
* patched missing `_ready` method, and changed the way the proxy is installed
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to `README.md`

cordova-plugin-test-framework@1.1.3
* [CB-9071](https://issues.apache.org/jira/browse/CB-9071) Update test framework plugin to use Jasmine 2.4.1
* Add pull request template.
* [CB-11124](https://issues.apache.org/jira/browse/CB-11124) Fixing cordova-ios build failure due to unnecessary post calls to couchdb and adding handlers to xhr call
* Add spec started/completed log

cordova-plugin-vibration@2.1.2
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* add JIRA issue tracker link
* Add badges for paramedic builds on Jenkins
* Add pull request template.
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-whitelist@1.3.0
* [CB-11795](https://issues.apache.org/jira/browse/CB-11795) Add 'protective' entry to cordovaDependencies
* Updated installation section
* Plugin uses `Android Log class` and not `Cordova LOG class`
* Add pull request template.
* [CB-10866](https://issues.apache.org/jira/browse/CB-10866) Adding engine info to `package.json`
* [CB-10996](https://issues.apache.org/jira/browse/CB-10996) Adding front matter to README.md

cordova-plugin-wkwebview-engine@1.1.0
* [CB-11824](https://issues.apache.org/jira/browse/CB-11824) - Update tests to include objective-c tests
* [CB-11554](https://issues.apache.org/jira/browse/CB-11554) - fixed unit tests
* [CB-11815](https://issues.apache.org/jira/browse/CB-11815) (**iOS**) Fix hard-coded bridge name "cordova"
* [CB-11554](https://issues.apache.org/jira/browse/CB-11554) - too 'brutal' app reload when title is empty
* [CB-11074](https://issues.apache.org/jira/browse/CB-11074) - Ensure settings from `config.xml` are taken into consideration
* Add ability to set the deceleration rate for the scrollview to 'fast'
* [CB-11496](https://issues.apache.org/jira/browse/CB-11496) - Add obj-c unit tests for `WKWebViewConfiguration`, `WKPreference`
* [CB-11496](https://issues.apache.org/jira/browse/CB-11496) - Create Obj-C unit-tests for `wkwebview-engine` (fix linker error)
* [CB-11452](https://issues.apache.org/jira/browse/CB-11452) - Update README.md with latest news about `AllowInlineMediaPlayback` fix
* [CB-9888](https://issues.apache.org/jira/browse/CB-9888) (**iOS**) check & reload `WKWebView`
* [CB-11375](https://issues.apache.org/jira/browse/CB-11375) - `onReset` method of `CDVPlugin` is never called
* Add pull request template.
* [CB-10818](https://issues.apache.org/jira/browse/CB-10818) - Support the scroll deceleration speed preference.
* [CB-10817](https://issues.apache.org/jira/browse/CB-10817) - Will now reload the `webView` if a crash occurs
