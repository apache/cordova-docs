---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Cordova iOS 4.0.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova iOS 4.0.0` has been released.

This is a major release, and [deprecated APIs have been removed](https://github.com/apache/cordova-ios/blob/master/guides/API%20changes%20in%204.0.md). Some 3rd party plugins might require updates before they are compatible. This release adds first-class support for pluggable webviews - namely we now support [WKWebView](https://developer.apple.com/library/ios/documentation/WebKit/Reference/WKWebView_Ref/) -- a bundled modern WebView for iOS! 

The platform now supports Asset Catalogs for splashscreens and icons -- this is all transparent to you when using the `<splash>` and `<icon>` tags in [config.xml](http://cordova.apache.org/docs/en/latest/config_ref/images.html). 

[ios-sim](https://www.npmjs.com/package/ios-sim) is bundled with the platform now, you will not need to install this separately anymore. However for [ios-deploy](https://www.npmjs.com/package/ios-deploy) you will need to update your version to the latest.

The minimum deployment target has been updated to **iOS 8.0**. This means that this platform release has only been tested on iOS 8 devices and greater only and will only support those iOS versions.

`cordova-ios@4.0.0` will be the default iOS version in the next version of `cordova`. If you just can't wait though, you can try it out now:

    cd my_project
    cordova platform update ios@4.0.0
    # To install the WKWebView engine (optional):
    cordova plugin add cordova-plugin-wkwebview-engine

We are in the process of releasing the `cordova-plugin-wkwebview-engine` plugin to [npm](https://www.npmjs.com/). If you decide to update to `cordova-ios@4.0.0` before we release this plugin, please install the plugin via `git` for now.

    cordova plugin add https://github.com/apache/cordova-plugin-wkwebview-engine.git#1.0.0

Note that the `cordova-plugin-wkwebview-engine` plugin has some limitations versus the default UIWebView, please consult the [README](https://github.com/apache/cordova-plugin-wkwebview-engine/blob/master/README.md) for more details.

In addition to the `<access>` tag, there is support for the new `<allow-intent>` and `<allow-navigation>` tags, documented [here](https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md). Note that you do *not* need `cordova-plugin-whitelist` installed for `cordova-ios-4.0.0`.

`cordova` will convert `<access>` and `<allow-navigation>` tags to the appropriate [Application Transport Security (ATS)](https://developer.apple.com/library/prerelease/ios/technotes/App-Transport-Security-Technote/) directives which are new in iOS 9. `<access>` and `<allow-navigation>` tags also [support two new attributes](http://cordova.apache.org/docs/en/latest/guide/appdev/whitelist/index.html): `minimum-tls-version` and `requires-forward-secrecy`. 

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ios@4.0.0

To add it explicitly:

    cordova platform add ios@4.0.0

<!--more-->
## What's new in iOS platform

* [CB-10136](https://issues.apache.org/jira/browse/CB-10136) - error in `cordova prepare` (Platform API)
* [CB-10048](https://issues.apache.org/jira/browse/CB-10048) - clobbering of `<access>` tags to **ATS** directives [CB-10057](https://issues.apache.org/jira/browse/CB-10057) - removing `<access>` tag does not remove **ATS** entry
* [CB-10106](https://issues.apache.org/jira/browse/CB-10106) - added bridge proxy
* [CB-9827](https://issues.apache.org/jira/browse/CB-9827) - fixed version file to be requireable
* [CB-9827](https://issues.apache.org/jira/browse/CB-9827) - Implement and expose PlatformApi for **iOS**
* [CB-10106](https://issues.apache.org/jira/browse/CB-10106) - **iOS** bridges need to take into account bridge changes
* [CB-10072](https://issues.apache.org/jira/browse/CB-10072) - Add `SWIFT\_OBJC\_BRIDGING_HEADER` value in `build.xcconfig`, remove from `pbxproj`
* [CB-10004](https://issues.apache.org/jira/browse/CB-10004) - Rename `CDVSystemSchemes` plugin name to something more appropriate
* [CB-10001](https://issues.apache.org/jira/browse/CB-10001) [CB-10003](https://issues.apache.org/jira/browse/CB-10003) Handle `<allow-navigation>` and `<allow-intent>`
* [CB-10025](https://issues.apache.org/jira/browse/CB-10025) - `CDVWhiteList` can't parse `URIs` that don't have double slashes after the scheme
* [CB-9972](https://issues.apache.org/jira/browse/CB-9972) - Remove **iOS** whitelist
* [CB-9883](https://issues.apache.org/jira/browse/CB-9883) [CB-9948](https://issues.apache.org/jira/browse/CB-9948) Update `cordova.js`
* [CB-9948](https://issues.apache.org/jira/browse/CB-9948) - Remove deprecated command format from `exec.js`
* [CB-9883](https://issues.apache.org/jira/browse/CB-9883) - Remove unused **iOS** bridges
* [CB-9836](https://issues.apache.org/jira/browse/CB-9836) - Add `.gitattributes` to prevent `CRLF` line endings in repos
* [CB-9787](https://issues.apache.org/jira/browse/CB-9787) - `[CDVStartPageTest testParametersInStartPage]` unit-test failure
* [CB-9917](https://issues.apache.org/jira/browse/CB-9917) - refix. Order matters in `.gitattributes`
* [CB-9917](https://issues.apache.org/jira/browse/CB-9917) - Failure: `cordova platform add https://github.com/apache/cordova-ios.git#tagOrBranch`
* [CB-9870](https://issues.apache.org/jira/browse/CB-9870) - updated hello world template
* [CB-9609](https://issues.apache.org/jira/browse/CB-9609) - Cordova run opts don't make it through to `ios-deploy` on real device
* [CB-9893](https://issues.apache.org/jira/browse/CB-9893) - Update API changes doc with more upgrade examples
* [CB-9638](https://issues.apache.org/jira/browse/CB-9638) - Cordova/NSData+Base64.h missing from cordova-ios - updated API Changes doc
* [CB-9836](https://issues.apache.org/jira/browse/CB-9836) Add .gitattributes to prevent CRLF line endings in repos
* [CB-9685](https://issues.apache.org/jira/browse/CB-9685) - A fix for the magnifying glass popping up on **iOS9** when longpressing the webview. 
* [CB-9800](https://issues.apache.org/jira/browse/CB-9800) - Fixing contribute link.
* Updated bundled `ios-sim` to 5.0.3
* [CB-9500](https://issues.apache.org/jira/browse/CB-9500) - Added no sign argument to **iOS** build
* [CB-9787](https://issues.apache.org/jira/browse/CB-9787) - `[CDVStartPageTest testParametersInStartPage]` unit-test failure (improved fix)
* [CB-9754](https://issues.apache.org/jira/browse/CB-9754) - Icon and launch image warnings
* [CB-9719](https://issues.apache.org/jira/browse/CB-9719) - set `allow_non_modular_includes` to yes
* [CB-9685](https://issues.apache.org/jira/browse/CB-9685) - A fix for the magnifying glass popping up on **iOS9** when longpressing the webview
* [CB-9552](https://issues.apache.org/jira/browse/CB-9552) - Updating linked platform removes original files
* [CB-6992](https://issues.apache.org/jira/browse/CB-6992) - can't deploy app if display name contains unicode characters
* [CB-9726](https://issues.apache.org/jira/browse/CB-9726) - Update minimum Deployment Target to **iOS 8.0**
* [CB-9679](https://issues.apache.org/jira/browse/CB-9679) - Resource rules issue with **iOS 9**
* [CB-9721](https://issues.apache.org/jira/browse/CB-9721) - Set `ENABLE_BITCODE` to `NO` in `build.xcconfig`
* [CB-9698](https://issues.apache.org/jira/browse/CB-9698) - Add `rsync` error handling in ios `copy-www-build-step.js`
* [CB-9671](https://issues.apache.org/jira/browse/CB-9671) - Remove installation of `ios-sim` from `travis.yml`
* [CB-9693](https://issues.apache.org/jira/browse/CB-9693) - Fix www copy with spaces in project name
* [CB-9690](https://issues.apache.org/jira/browse/CB-9690) - Can't submit iPad apps to the App Store for **iOS 9**
* [CB-9328](https://issues.apache.org/jira/browse/CB-9328) - Use `ios-sim` as a node module, not a CLI utility
* [CB-9558](https://issues.apache.org/jira/browse/CB-9558) - Add blob: to `allowedSchemes` used by `CDVUIWebViewDelegate::shouldLoadRequest` (closes #163)
* [CB-9558](https://issues.apache.org/jira/browse/CB-9558) - Blob schemes won't load in iframes
* [CB-9667](https://issues.apache.org/jira/browse/CB-9667) - create tests failing in `cordova-ios 4.x` (related to [CB-8789](https://issues.apache.org/jira/browse/CB-8789) pull request that didn't test for projects with spaces in the name)
* [CB-9650](https://issues.apache.org/jira/browse/CB-9650) - Update API compatibility doc in cordova-ios for `AppDelegate.m` template change
* [CB-9638](https://issues.apache.org/jira/browse/CB-9638) - `Cordova/NSData+Base64.h` missing from `cordova-ios 4.x`
* [CB-8789](https://issues.apache.org/jira/browse/CB-8789) - Support Asset Catalog for App icons and splashscreens
* [CB-8789](https://issues.apache.org/jira/browse/CB-8789) - Asset Catalog support
* [CB-9642](https://issues.apache.org/jira/browse/CB-9642) - Integrate 3.9.0, 3.9.1, 3.9.2 version updates in `CDVAvailability.h` into master
* [CB-9261](https://issues.apache.org/jira/browse/CB-9261) - localizations broken in Xcode template
* [CB-9656](https://issues.apache.org/jira/browse/CB-9656) - `Xcode` can't find `CDVViewController.h` when archiving in `Xcode 7.1` beta
* [CB-9254](https://issues.apache.org/jira/browse/CB-9254) - `update_cordova_subproject` command for `cordova-ios 4.0.0-dev` results in a build error
* [CB-9636](https://issues.apache.org/jira/browse/CB-9636) - only load a `WebView` engine if the url to load passes the engine's `canLoadRequest` filter
* [CB-9610](https://issues.apache.org/jira/browse/CB-9610) - Fix warning in `cordova-ios` under `Xcode 7`
* [CB-9613](https://issues.apache.org/jira/browse/CB-9613) - `CDVWhitelist::matches` crashes when there is no hostname in a URL
* [CB-9485](https://issues.apache.org/jira/browse/CB-9485) - Use `absoluteString` method of `NSURL`
* [CB-8365](https://issues.apache.org/jira/browse/CB-8365) - Add `NSInteger`, `NSUInteger` factory methods to `CDVPluginResult`
* [CB-9266](https://issues.apache.org/jira/browse/CB-9266) - `cordova run` for **iOS** does not see non-running emulators
* [CB-9462](https://issues.apache.org/jira/browse/CB-9462) - **iOS** 3.9.0 breaks npm link modules
* [CB-9453](https://issues.apache.org/jira/browse/CB-9453) - Updating to **iOS@3.9.0** not building
* [CB-9273](https://issues.apache.org/jira/browse/CB-9273) - Copy www build phase node is not found
* [CB-9266](https://issues.apache.org/jira/browse/CB-9266) - changed target default to iPhone-5 in the interim
* [CB-8197](https://issues.apache.org/jira/browse/CB-8197) - Switch to nodejs for ios platform scripts
* [CB-9203](https://issues.apache.org/jira/browse/CB-9203) - **iOS** unit-tests should use tmp instead of same folder
* [CB-8468](https://issues.apache.org/jira/browse/CB-8468) - Application freezes if breakpoint hits JavaScript callback invoked from native
* [CB-8812](https://issues.apache.org/jira/browse/CB-8812) - moved system schemes handler into its own plugin (`CDVSystemSchemes`)
* [CB-8812](https://issues.apache.org/jira/browse/CB-8812) - protocol hander raises error on second firing
* [CB-9050](https://issues.apache.org/jira/browse/CB-9050) - `cordova run --list` does not show that you have an outdated `ios-sim`
* [CB-8730](https://issues.apache.org/jira/browse/CB-8730) - Can't deploy to device
* [CB-8788](https://issues.apache.org/jira/browse/CB-8788) - Drop `armv7s` from default **iOS** Cordova build to align with `Xcode 6`
* [CB-9046](https://issues.apache.org/jira/browse/CB-9046) - `cordova run ios --emulator --target` "iPhone-5, 7.1" (target with runtime) does not work
* [CB-8906](https://issues.apache.org/jira/browse/CB-8906) - `cordova run ios --target` doesn't work
* Incremented `ios-sim` version to 4.0.0
* Incremented `ios-deploy` version to 1.7.0
* Incremented `xcodebuild` version to 6.0.0
* [CB-8895](https://issues.apache.org/jira/browse/CB-8895) - Change `CDVStartPageTests::testParametersInStartPage` into an async test
* [CB-8047](https://issues.apache.org/jira/browse/CB-8047) - **WKWebView** **iOS8** `wkwebview` / local webserver plugin orientation issue
* [CB-8838](https://issues.apache.org/jira/browse/CB-8838) - Moved `commandQueue` push into `non-WK_WEBVIEW_BINDING` branch. (closes #136)
* [CB-8868](https://issues.apache.org/jira/browse/CB-8868) - **ios** 4.0.x cannot archive
* [CB-7767](https://issues.apache.org/jira/browse/CB-7767) - Removed `NSData+Base64` files, updated unit tests.
* [CB-8710](https://issues.apache.org/jira/browse/CB-8710) - `cordova-ios` jasmine tests do not clean up build products, tests can only be run once
* [CB-7767](https://issues.apache.org/jira/browse/CB-7767) - Remove usage of `NSData+Base64`
* [CB-8709](https://issues.apache.org/jira/browse/CB-8709) - Remove usage of obsolete `CDVLocalStorage` fix in `CDVViewController.m` (plus style fix-ups)
* [CB-8270](https://issues.apache.org/jira/browse/CB-8270) - Update `Objective-C` unit tests for `JSON` serialization. Cleaned up unit test workspace as well.
* [CB-8690](https://issues.apache.org/jira/browse/CB-8690) - Exported headers were not in Public section, but Project. Moved.
* [CB-8690](https://issues.apache.org/jira/browse/CB-8690) - Group files into folders in `CordovaLib/Classes`
* [CB-8697](https://issues.apache.org/jira/browse/CB-8697) - Remove obsolete `merges` folder reference in default template(s)
* [CB-5520](https://issues.apache.org/jira/browse/CB-5520) - Remove all frameworks specified in the templates. Rely on implicit Clang Module loading.
* [CB-5520](https://issues.apache.org/jira/browse/CB-5520) - Removed most Build Settings from `.pbxproj` to `.xcconfig`
* [CB-5520](https://issues.apache.org/jira/browse/CB-5520) - Added `cordova/build*.xcconfig` support in the default template (IDE use)
* [CB-8678](https://issues.apache.org/jira/browse/CB-8678) - Mismatched case typo in startup plugin name in `config.xml`
* [CB-7428](https://issues.apache.org/jira/browse/CB-7428) - Add bridging header.  Make sure all deployment targets are 7.0 Add swift runtime to search path (closes #133)
* [CB-7826](https://issues.apache.org/jira/browse/CB-7826) - Add `CDVPlugin` support for getting items from plugin resource bundles
* [CB-8640](https://issues.apache.org/jira/browse/CB-8640) - Template-ize `CDVAvailability.h` for coho release tool
* [CB-8678](https://issues.apache.org/jira/browse/CB-8678) - Included core plugins should be added through configuration, not code
* [CB-8643](https://issues.apache.org/jira/browse/CB-8643) - Drop **iOS** 6 support, minimum **iOS** 7
* [CB-8677](https://issues.apache.org/jira/browse/CB-8677) - Remove conditional `IsAtLeastIosVersion` code (plus style fix-ups)
* Update version to 4.0.0 in `CDVAvailability.h`
* [CB-8556](https://issues.apache.org/jira/browse/CB-8556) - `handleOpenURL` functionality to be removed to a plugin
* [CB-8474](https://issues.apache.org/jira/browse/CB-8474) - Remove local/remote push notification delegates from `CDVAppDelegate`
* [CB-8464](https://issues.apache.org/jira/browse/CB-8464) - Remove non-ARC code in `AppDelegate`
* [CB-8473](https://issues.apache.org/jira/browse/CB-8473) - Remove `AppDelegate` code from template (includes uncrustify style fix-ups)
* [CB-8664](https://issues.apache.org/jira/browse/CB-8664) - Make `CDVPlugin` initializer private
* [CB-7753](https://issues.apache.org/jira/browse/CB-7753) - Remove `CDV_IsIPad` and `CDV_IsIPhone5` macros in `CDVAvailabiltyDeprecated.h`
* [CB-7000](https://issues.apache.org/jira/browse/CB-7000) - Remove deprecated `CDVPlugin` and `CDVPluginResult` methods
* Make webView property dynamic in `CDVViewController` and `CDVPlugin` (from `CDVWebViewEngineProtocol` reference). Added scrollView category to `UIView` for backwards compatibility reasons.
* [CB-8032](https://issues.apache.org/jira/browse/CB-8032) - Added a `typedef` for block definition.
* [CB-8032](https://issues.apache.org/jira/browse/CB-8032) - Add new property in `CDVCommandDelegate` (`urlTransformer`), plus style fixups.
* [CB-6884](https://issues.apache.org/jira/browse/CB-6884) - Support new Cordova bridge under **iOS** 8 `WKWebView` (typo fix)
* [CB-7184](https://issues.apache.org/jira/browse/CB-7184) - Implement support for `mediaPlaybackAllowsAirPlay` in `UIWebView` and `WKWebView`
* [CB-7047](https://issues.apache.org/jira/browse/CB-7047) - Support `config.xml` preferences for `WKWebView`
* [CB-7182](https://issues.apache.org/jira/browse/CB-7182) - Running mobile-spec in an **iOS** 8 project but using `UIWebView` results in an exception
* [CB-7047](https://issues.apache.org/jira/browse/CB-7047) - Support `config.xml` preferences for `WKWebView`
* [CB-7182](https://issues.apache.org/jira/browse/CB-7182) - Running `mobile-spec` in an **iOS** 8 project but using `UIWebView` results in an exception
* Split into Public and Private headers more clearly. Delete most deprectated symbols.
