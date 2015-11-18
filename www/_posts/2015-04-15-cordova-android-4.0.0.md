---
layout: post
author:
    name: Andrew Grieve
    url: https://twitter.com/GrieveAndrew
title:  "Apache Cordova Android 4.0.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 4.0.0` has been released!

This release adds significant functionality, and also introduces a number
of breaking changes. Mostly though, it adds first-class support for [Crosswalk](https://crosswalk-project.org/) -- a bundled modern WebView!

`cordova-android@4.0.0` will be the default android version in the next
version of `cordova`. If you just can't wait though, you can try it out now:

    cd my_project
    cordova platform update android@4.0.0
    cordova plugin add https://github.com/apache/cordova-plugin-whitelist.git#r1.0.0
    # To install Crosswalk (optional):
    cordova plugin add https://github.com/MobileChromeApps/cordova-plugin-crosswalk-webview.git#1.0.0

<!--more-->

## Major Changes
* Support for pluggable WebViews!
    * [Crosswalk](https://crosswalk-project.org/) can be added by installing the [cordova-plugin-crosswalk-webview](https://github.com/MobileChromeApps/cordova-crosswalk-engine) plugin.
* Splash screen functionality is now provided via plugin
  * You will need to add the new [cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen) plugin to continue using a splash screen
* Whitelist functionality is revamped
  * You will need to add the new [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist) plugin to continue using a whitelist
  * Setting a Content-Security-Policy (CSP) is now supported and is the recommended way to whitelist (see details in plugin readme)
  * Network requests are *blocked* by default without the plugin, so install this plugin even to allow all requests, and even if you are using CSP.
  * This new whitelist is enhanced to be more secure and configurable, but the Legacy whitelist behaviour is still available via a separate plugin (not recommended).
  * Note: while not strictly part of this release, the latest default app created by cordova-cli will include this plugin by default.

## Changes For Plugin Developers:

* Develop in Android Studio
  * Android Studio is now fully supported, and recommended over Eclipse
  * Use `cordova plugin add ../path/to/my-plugin --link` to symlink .java files for development
* Build using Gradle
  * All builds [use Gradle by default](https://cordova.apache.org/docs/en/dev/guide_platforms_android_tools.md.html#Android%20Shell%20Tool%20Guide_building_with_gradle), instead of Ant
  * Plugins can add their own gradle build steps!
  * Plugins can depend on Maven libraries using `<framework>` tags
* New APIs: `onStart`, `onStop`, `onConfigurationChanged`
* `"onScrollChanged"` message removed. Use `view.getViewTreeObserver().addOnScrollChangedListener(...)` instead
* [CB-8702](https://issues.apache.org/jira/browse/CB-8702) New API for plugins to override `shouldInterceptRequest` with a stream

## Other Changes
* [CB-8378](https://issues.apache.org/jira/browse/CB-8378) Removed `hidekeyboard` and `showkeyboard` events (apps should use a plugin instead)
* [CB-8735](https://issues.apache.org/jira/browse/CB-8735) `bin/create` regex relaxed / better support for numbers
* [CB-8699](https://issues.apache.org/jira/browse/CB-8699) Fix CordovaResourceApi `copyResource` creating zero-length files when src=uncompressed asset
* [CB-8693](https://issues.apache.org/jira/browse/CB-8693) CordovaLib should not contain icons / splashscreens
* [CB-8592](https://issues.apache.org/jira/browse/CB-8592) Fix NPE if lifecycle events reach CordovaWebView before `init()` has been called
* [CB-8588](https://issues.apache.org/jira/browse/CB-8588) Add CATEGORY_BROWSABLE to intents from showWebPage openExternal=true
* [CB-8587](https://issues.apache.org/jira/browse/CB-8587) Don't allow WebView navigations within showWebPage that are not whitelisted
* [CB-7827](https://issues.apache.org/jira/browse/CB-7827) Add `--activity-name` for `bin/create`
* [CB-8548](https://issues.apache.org/jira/browse/CB-8548) Use debug-signing.properties and release-signing.properties when they exist
* [CB-8545](https://issues.apache.org/jira/browse/CB-8545) Don't add a layout as a parent of the WebView
* [CB-7159](https://issues.apache.org/jira/browse/CB-7159) BackgroundColor not used when `<html style="opacity:0">`, nor during screen rotation
* [CB-6630](https://issues.apache.org/jira/browse/CB-6630) Removed OkHttp from core library. It's now available as a plugin: [cordova-plugin-okhttp](https://github.com/MobileChromeApps/cordova-plugin-okhttp)
* [CB-8484](https://issues.apache.org/jira/browse/CB-8484) Support for creating signed archive for Android
