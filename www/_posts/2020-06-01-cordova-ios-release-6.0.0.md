---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 6.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 6.0.0`! This is Cordova's official platform for building iOS mobile applications.

* [cordova-ios@6.0.0](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@6.0.0
```

The most notable changes in this major release are:

* Added Xcode 11 compatibility and bumped minimum iOS version to 11.0

    As of April 2020, Apple requires all app store submissions to be built with Xcode 11 and target the iOS 13 SDK.

    Apple has deprecated the `mediaPlaybackRequiresUserAction` property in iOS 8.0–9.0 and replaced it with `mediaTypesRequiringUserActionForPlayback`.
    Apple has also deprecated the `mediaPlaybackAllowsAirPlay` property in iOS iOS 8.0-9.0 and replaced it with `allowsAirPlayForMediaPlayback`.

    If you have configured any of these properties in your project's `config.xml` file, it is recommended that you update with the new preferences options `MediaTypesRequiringUserActionForPlayback` or `AllowsAirPlayForMediaPlayback`.

    Additionally, the values for `MediaTypesRequiringUserActionForPlayback` has changed. It use to be a `boolean` value but is now a `string` value of either `all`, `audio`, `video`, or `none`.

* Moved `WKWebView` support into Cordova-iOS and removed `UIWebView` code

    Due to this change, the `cordova-plugin-wkwebview-engine` plugin is obsolete and will not work with this release. If you have this plugin installed, it is safe to remove with `cordova plugin remove cordova-plugin-wkwebview-engine`.

    Additionaly, `WKURLSchemeHandler` support has been introduced with this release. Using a custom scheme to serve your app content through fixes CORS issues that exist because of the strict security policies that `WKWebView` has applied to the `file` scheme. You can easily configure your Cordova project to use a custom scheme by setting the preference options `scheme` and `hostname` in the `config.xml` file.

    ```xml
    <preference name="scheme" value="app" />
    <preference name="hostname" value="localhost" />
    ```

    It is important to know that with the introduction of `WKURLSchemeHandler`, iOS 10 support has been dropped.

* Integrated `SplashScreen` plugin code & replaced Launch Images with Launch Storyboards

    If you're migrating from launch images, details on how to set up images for Launch Storyboards can be found in [the SplashScreen documentation](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/index.html#launch-storyboard-images).

* Fixed overwriting the bundle identifier when there are multiple Xcode build targets
* Bumped minimum CocoaPods version requirements to 1.8.0

    Since CocoaPods 1.7.0, CDN support was introduced. It was later finalized in 1.7.2 but was not configured as the default until 1.8.0. Using CDN to fetch podspecs over the traditional GitHub repo provides a huge performance enhancement. With CDN, Cordova users no longer need to wait for the CocoaPod's GH repo to be synced. Building a project with pods and a fresh CocoaPods installation takes under a minute now.

    You can take a look at their [demonstration video here](http://blog.cocoapods.org/CocoaPods-1.8.0-beta/) to see how fast CocoaPods has become with CDN.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-875](https://github.com/apache/cordova-ios/pull/875) fix: remove `q` leftover
* chore(`audit-license-headers`): add & correct license
* [GH-874](https://github.com/apache/cordova-ios/pull/874) chore: cleanup & prep for 6.0.0 release
* [GH-873](https://github.com/apache/cordova-ios/pull/873) chore: remove unassigned splash image
* [GH-872](https://github.com/apache/cordova-ios/pull/872) chore: remove migrate `English.lproj` deprecated warning
* [GH-871](https://github.com/apache/cordova-ios/pull/871) chore: enable base internalization for `CordovaLib`
* [GH-866](https://github.com/apache/cordova-ios/pull/866) refactor: default to file scheme
* [GH-852](https://github.com/apache/cordova-ios/pull/852) ci: use github actions
* [GH-869](https://github.com/apache/cordova-ios/pull/869) refactor: bump eslint w/ lint fix & rebuilt package-lock
* [GH-860](https://github.com/apache/cordova-ios/pull/860) breaking: drop `q` dependency
* [GH-859](https://github.com/apache/cordova-ios/pull/859) refactor: use `superspawn`
* [GH-851](https://github.com/apache/cordova-ios/pull/851) breaking: replace `shelljs` with `fs-extra`
* [GH-862](https://github.com/apache/cordova-ios/pull/862) revert: `ios-sim` `^9.0.0` to `^8.0.2`
* [GH-863](https://github.com/apache/cordova-ios/pull/863) chore (npm): add ignore list
* [GH-861](https://github.com/apache/cordova-ios/pull/861) chore: add `package-lock.json`
* [GH-790](https://github.com/apache/cordova-ios/pull/790) breaking feature: Integrate & replace SplashScreens w/ Launch Storyboard (CB-13143)
* [GH-769](https://github.com/apache/cordova-ios/pull/769) breaking: add python 3 compatibility to `bin/cordova_plist_to_config_xml`
* [GH-847](https://github.com/apache/cordova-ios/pull/847) breaking: add & use `fs-extra` w/ fixes
* [GH-853](https://github.com/apache/cordova-ios/pull/853) breaking: bump `xcode` w/ fix
* [GH-850](https://github.com/apache/cordova-ios/pull/850) breaking: fix file's `chmod`
* [GH-849](https://github.com/apache/cordova-ios/pull/849) breaking(`pod`): remove unused API & bump minimum version requirements to `1.8.0`
* [GH-848](https://github.com/apache/cordova-ios/pull/848) breaking: bump `cordova-common@4.0.1`
* [GH-846](https://github.com/apache/cordova-ios/pull/846) breaking(npm): bump dependencies
* [GH-845](https://github.com/apache/cordova-ios/pull/845) breaking(npm): bump dev dependencies
* [GH-825](https://github.com/apache/cordova-ios/pull/825) Fix type warnings and simplify code with auto boxing.
* [GH-615](https://github.com/apache/cordova-ios/pull/615) (ios) Don't pre-fill `orientation`
* [GH-820](https://github.com/apache/cordova-ios/pull/820) Only set `bundleid` to main app target
* Update CONTRIBUTING.md
* [GH-822](https://github.com/apache/cordova-ios/pull/822) chore: remove deprecated `orientation` methods
* [GH-810](https://github.com/apache/cordova-ios/pull/810) Remove dead link to wiki from `README`
* [GH-543](https://github.com/apache/cordova-ios/pull/543) feat: Add `Podspec` for Cordova library
* [GH-801](https://github.com/apache/cordova-ios/pull/801) breaking (`UserAgent`): Drop `CDVUserAgentUtil` and Implement for `WKWebView`
* [GH-803](https://github.com/apache/cordova-ios/pull/803) feature: add `CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED`
* [GH-802](https://github.com/apache/cordova-ios/pull/802) refactor: applied various xcode recommended update
* [GH-800](https://github.com/apache/cordova-ios/pull/800) tests: change comment values for `MediaTypesRequiringUserActionForPlayback`
* [GH-781](https://github.com/apache/cordova-ios/pull/781) breaking: Use `WKURLSchemeHandler` for serving app content
* [GH-797](https://github.com/apache/cordova-ios/pull/797) breaking: remove MediaPlaybackRequiresUserAction and update `MediaTypesRequiringUserActionForPlayback` to proper variable types
* [GH-798](https://github.com/apache/cordova-ios/pull/798) refactor (`cordovaBoolSettingForKey`): improve boolean checks and native logging
* [GH-785](https://github.com/apache/cordova-ios/pull/785) refactor: deprecate `mediaPlaybackAllowsAirPlay`
* [GH-794](https://github.com/apache/cordova-ios/pull/794) style: remove extra space from Objective-C test modules
* [GH-784](https://github.com/apache/cordova-ios/pull/784) chore: deprecate `mediaPlaybackRequiresUserAction`
* [GH-783](https://github.com/apache/cordova-ios/pull/783) breaking (`CDVURLProtocol`): delete
* [GH-789](https://github.com/apache/cordova-ios/pull/789) chore: fix deprecated `stringByAddingPercentEscapesUsingEncoding` usage
* [GH-788](https://github.com/apache/cordova-ios/pull/788) chore: remove deprecated method `viewDidUnload`
* [GH-780](https://github.com/apache/cordova-ios/pull/780) breaking: upgrade xcode compatible to 11.0
* [GH-787](https://github.com/apache/cordova-ios/pull/787) fix (`CDVWebViewEngine`): JavaScript to Native Call Not Working
* [GH-786](https://github.com/apache/cordova-ios/pull/786) test: run on Xcode 11 only
* [GH-782](https://github.com/apache/cordova-ios/pull/782) fix (`node`): require failure with `shebang` interpreter
* [GH-779](https://github.com/apache/cordova-ios/pull/779) breaking: bump `deployment-target` to `11.0`
* [GH-773](https://github.com/apache/cordova-ios/pull/773) refactor: drop `uiwebview` & add `wkwebview`
* [GH-751](https://github.com/apache/cordova-ios/pull/751) refactor: use template strings
* [GH-749](https://github.com/apache/cordova-ios/pull/749) refactor: transform split out variables
* [GH-750](https://github.com/apache/cordova-ios/pull/750) refactor: transform object shorthand
* [GH-748](https://github.com/apache/cordova-ios/pull/748) refactor: do not alias this to self
* [GH-747](https://github.com/apache/cordova-ios/pull/747) refactor: use arrow functions
* [GH-754](https://github.com/apache/cordova-ios/pull/754) fix: replace variables in `Podfile`
* [GH-746](https://github.com/apache/cordova-ios/pull/746) refactor: transform `var` to `let`/`const`
* [GH-744](https://github.com/apache/cordova-ios/pull/744) chore: updated `eslint` with applied fix
* [GH-743](https://github.com/apache/cordova-ios/pull/743) chore: bump `node` requirement (>=10)
* [GH-731](https://github.com/apache/cordova-ios/pull/731) CB-14135(ios): escape all single quotes from name in `Podfile`
