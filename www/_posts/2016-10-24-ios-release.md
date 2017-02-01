---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Cordova iOS 4.3.0"
categories: announcements
tags: news releases
---

We are happy to announce the minor version of `Cordova iOS 4.3.0` has been released!

This release includes:
1. `CocoaPods` support in [`<framework>` tags]({{ site.baseurl }}/docs/en/latest/plugin_ref/spec.html#framework) of plugins (static libraries only)
2. the [`--buildFlag` option]({{ site.baseurl }}/docs/en/latest/guide/platforms/ios/index.html#xcode-build-flags) to send extra `xcodebuild` flags when building/running your app
3. Both Xcode 7 and Xcode 8 support ([automatic code signing]({{ site.baseurl }}/docs/en/latest/guide/platforms/ios/index.html#signing-an-app)). Xcode 6 support has been dropped.
4. Support for the [four new App Transport Security]({{ site.baseurl }}/docs/en/latest/guide/appdev/whitelist/index.html) (ATS) keys [introduced](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) in iOS 10


<br />

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.3.0

To add it explicitly:

    cordova platform add ios@4.3.0

<!--more-->
## What's new in iOS

* [CB-12054](https://issues.apache.org/jira/browse/CB-12054) - Remove npm absolute paths in node_modules/package.json (using removeNPMAbsolutePaths utility)
* [CB-12054](https://issues.apache.org/jira/browse/CB-12054) - Updated checked-in node_modules
* Update bundled ios-sim to 5.0.9
* [CB-12003](https://issues.apache.org/jira/browse/CB-12003) - Updated node_modules for cordova-common 1.5.1
* [CB-11999](https://issues.apache.org/jira/browse/CB-11999) - platformAPIs contain js code that is deceptively uncallable
* [CB-11936](https://issues.apache.org/jira/browse/CB-11936) - Support four new App Transport Security (ATS) keys
* [CB-11952](https://issues.apache.org/jira/browse/CB-11952) - Introduce buildFlag option - adds buildFlag option for passing args to xcodebuild 
* [CB-11970](https://issues.apache.org/jira/browse/CB-11970) - Support CocoaPod pod specification other than version
* [CB-11729](https://issues.apache.org/jira/browse/CB-11729) - template file MainViewController.m has deprecated override shouldAutorotateToInterfaceOrientation
* [CB-11957](https://issues.apache.org/jira/browse/CB-11957) - Update docs for remote/local notifications removed in cordova-ios-4.0
* [CB-11920](https://issues.apache.org/jira/browse/CB-11920) - Add github pull request template
* [CB-11860](https://issues.apache.org/jira/browse/CB-11860) - Update packaging strategy for Xcode 8
* [CB-11771](https://issues.apache.org/jira/browse/CB-11771) - Deep symlink directories to target project instead of linking the directory itself
* [CB-10078](https://issues.apache.org/jira/browse/CB-10078) - Refresh cached userAgent on version bump
* [CB-9762](https://issues.apache.org/jira/browse/CB-9762)   - Add launch storyboard support
* [CB-11792](https://issues.apache.org/jira/browse/CB-11792) - Fixed configuration file could not be parsed due to preprocessing errors
* [CB-11854](https://issues.apache.org/jira/browse/CB-11854) - Create Entitlements.plist file (one each for Debug and Release configurations)
* [CB-11863](https://issues.apache.org/jira/browse/CB-11863) - Update README
* [CB-11863](https://issues.apache.org/jira/browse/CB-11863) - Update travis.yml to xcode 7.3 image
* [CB-11863](https://issues.apache.org/jira/browse/CB-11863) - Update xcodebuild minimum version to 7.0.0
* [CB-11862](https://issues.apache.org/jira/browse/CB-11862) - Update ios-deploy minimum version required to 1.9.0
* [CB-11831](https://issues.apache.org/jira/browse/CB-11831) - Add missing LD_RUNPATH_SEARCH_PATHS setting to the Release build configuration
* [CB-11845](https://issues.apache.org/jira/browse/CB-11845) - Add developmentTeam flag to cordova build and 'developmentTeam' key in build.json buildConfig file
* [CB-11811](https://issues.apache.org/jira/browse/CB-11811) - CocoaPods error in cordova-lib tests
* [CB-11790](https://issues.apache.org/jira/browse/CB-11790) - Check that Cocoapods is installed by checking `pod install` return code, show help text
* [CB-11791](https://issues.apache.org/jira/browse/CB-11791) - 'pod install' should pass in the '--verbose' flag, if set
* [CB-11789](https://issues.apache.org/jira/browse/CB-11789) - Generated Podfile should not have an absolute path to .xcodeproj
* [CB-11792](https://issues.apache.org/jira/browse/CB-11792) - Add Cocoapods .xcconfig includes to build.xcconfig files in template, modify create script
* [CB-11712](https://issues.apache.org/jira/browse/CB-11712) - <name> changes in config.xml does a 'search and replace all' for occurrences of the old name with the new name in the pbxproj
* [CB-11788](https://issues.apache.org/jira/browse/CB-11788) - Change create and build scripts to use .xcworkspace
* [CB-11731](https://issues.apache.org/jira/browse/CB-11731) - Re-read ios.json on every prepare
* [CB-11705](https://issues.apache.org/jira/browse/CB-11705) - Adding CordovaDefaultWebViewEngine configuration option to be able to use a different WebView as default and/or fallback
* [CB-11725](https://issues.apache.org/jira/browse/CB-11725) - Update appveyor node versions to 4 and 6, so they will always use the latest versions
* [CB-9789](https://issues.apache.org/jira/browse/CB-9789) - Allow setting the default locale
* [CB-11703](https://issues.apache.org/jira/browse/CB-11703) - travis ci setup is still using 0.10.32 node (specify specific version, using LTS version)
* [CB-11706](https://issues.apache.org/jira/browse/CB-11706) - travis ci setup is not running unit-tests
* [CB-11238](https://issues.apache.org/jira/browse/CB-11238) - Expose supportedOrientations methods so native code can override the current behavior
* [CB-11648](https://issues.apache.org/jira/browse/CB-11648) - Make CDVViewController send notifications when UIViewController methods are called
* [CB-9825](https://issues.apache.org/jira/browse/CB-9825) - Cocoapod integration for plugins
* [CB-11528](https://issues.apache.org/jira/browse/CB-11528) - Remove verbose mode from xcrun in build.js to prevent logging of environment variables.
* [CB-11270](https://issues.apache.org/jira/browse/CB-11270) - Handle JavaScript onclick handler navigation
* [CB-11535](https://issues.apache.org/jira/browse/CB-11535) [CB-10361](https://issues.apache.org/jira/browse/CB-10361) - ios: fix bug with remove frameworks