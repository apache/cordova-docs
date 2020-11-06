---
layout: post
author:
    name: Darryl Pogue
    url: https://twitter.com/dpogue
title:  "Cordova iOS 6.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 6.1.0`! This is Cordova's official platform for building iOS mobile applications.

* [cordova-ios@6.1.0](https://www.npmjs.com/package/cordova-ios)

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@6.1.0
```

## Release Highlights

This release contains primarily fixes for issues with the 6.0.0 release.

* **Resolve CocoaPods publishing issues** *(since 6.0.0)*

    The Cordova iOS 6.0.0 release was unable to be published to CocoaPods due to issues with the Pod spec. These have been addressed and Cordova iOS 6.1.0 is available.


* **Fix landscape orientation defaults** *(since 6.0.0)*

    A change made in Cordova iOS 6.0.0 had the side effect of disabling landscape orientation for any apps that didn't specify an `Orientation` preference in `config.xml`. We've reverted that change and new apps will match Xcode defaults (allowing both portrait and landscape orientations).

    To ensure your app properly supports the orientations you want, we encourage setting [the `Orientation` preference][prefs].


* **Fix invisible SplashScreen bugs** *(since 6.0.0)*

    A bug in Cordova iOS 6.0.0 would cause the splashscreen to be invisible unless a `BackgroundColor` preference was set in `config.xml`. This was not the intended behaviour, and caused a lot of confusion about not being able to interact with the webview behind the splashscreen.

    In Cordova iOS 6.1.0, we've fixed the splashscreen so that it will always have a background colour (defaulting to the system background colour) and so that the launch storyboard image should remain visible.

    To customize the background colour of your app and its splashscreen, use [the `BackgroundColor` preference][prefs] in `config.xml`.


* **Add support for dark mode splashscreens** *(New Feature)*

    It is now possible to use optionally different splashscreen images when your app is running in dark mode. You can configure these images in `config.xml` with the `~dark` suffix (and `~light` is also supported).

    ```xml
    <!-- Default image to be used for all modes -->
    <splash src="res/screen/ios/Default@2x~universal~anyany.png" />

    <!-- Image to use specifically for dark mode devices -->
    <splash src="res/screen/ios/Default@2x~universal~anyany~dark.png" />

    <!-- Image to use specifically for light mode devices -->
    <splash src="res/screen/ios/Default@2x~universal~anyany~light.png" />
    ```


* **Add preference for iPad desktop layout behaviour** *(New Feature)*

    iPadOS 13 defaults to using a desktop layout in webviews rather than a mobile layout. You can now control this behaviour in your apps with [the `PreferredContentMode` preference][prefs] in `config.xml`. Valid options are `mobile` and `desktop`.


* **Add preference for webview window handling** *(New Feature)*

    Historically, Cordova iOS has not supported the creation of new webview windows with APIs like `window.open` or links with `target="_blank"`. The default behaviour was inconsistent, with some links opening externally in Safari and some links being unclickable. There is now [an `AllowNewWindows` preference][prefs] in `config.xml` to control the behaviour of new windows within the application.

    * When **false** (the default behaviour), links that would open a new window are instead opened in the same webview as if they had not requested a new window.

    * When **true**, links that would open a new window will create a new webview overtop of the app. This new webview provides no controls, so you must include a way to dismiss it with `window.close()`.

    Links that are outside the list of [`allow-navigation`](https://cordova.apache.org/docs/en/latest/config_ref/index.html#allow-navigation) URLs will continue to open in Safari.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
## Full Changelog

* [GH-910](https://github.com/apache/cordova-ios/pull/910) Set `$PROJECT_NAME` properly when installing plugins
* [GH-885](https://github.com/apache/cordova-ios/pull/885) Don't silently ignore creation of new windows
* [GH-889](https://github.com/apache/cordova-ios/issues/899) Revert "(ios) Don't pre-fill orientation" ([#901](https://github.com/apache/cordova-ios/pull/901))
* [GH-902](https://github.com/apache/cordova-ios/pull/902) chore: fix eslint failure
* [GH-808](https://github.com/apache/cordova-ios/pull/808) Dark mode splashscreen storyboard images
* [GH-886](https://github.com/apache/cordova-ios/pull/886) Add PreferredContentMode preference
* [GH-890](https://github.com/apache/cordova-ios/issues/890) Fix SplashScreen issues & refactor BackgroundColor ([#896](https://github.com/apache/cordova-ios/pull/896))
* [GH-888](https://github.com/apache/cordova-ios/pull/888) fix: author and tag podspec errors
* [GH-882](https://github.com/apache/cordova-ios/pull/882) fix: Properly get version from `package.json`

[prefs]: https://cordova.apache.org/docs/en/latest/config_ref/index.html#preference
