---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 15.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 15.1.0`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@15.1.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@15.1.0
```

**To install:**

```bash
cordova platform add android@15.1.0
```

## Release Highlights

### Features

* **Deprecation of `PermissionHelper`**

    The `PermissionHelper` class has been deprecated.

    Plugin developers that relied on the `PermissionHelper` class should migrate their plugins to use the permission APIs available through the `CordovaInterface` of the `CordovaPlugin`.

    **Before:**
    
    ```java
    // Requesting a Permission
    PermissionHelper.requestPermission(this, requestCode, Manifest.permission.READ_MEDIA_IMAGES);

    // Requesting a Collection of Permissions
    PermissionHelper.requestPermissions(this, requestCode, new String[]{ Manifest.permission.READ_MEDIA_IMAGES });
    
    // Checking if the App has a Permission
    PermissionHelper.hasPermission(this, Manifest.permission.READ_MEDIA_IMAGES);
    ```

    **After:**

    ```java
    // Requesting a Permission
    cordova.requestPermission(this, requestCode, Manifest.permission.READ_MEDIA_IMAGES);

    // Requesting a Collection of Permissions
    cordova.requestPermissions(this, requestCode, new String[]{ Manifest.permission.READ_MEDIA_IMAGES });
    
    // Checking if the App has a Permission
    cordova.hasPermission(Manifest.permission.READ_MEDIA_IMAGES);
    ```

* **Calling of `CordovaPlugin.onRequestPermissionsResult`**

    Updated `CordovaInterfaceImpl.onRequestPermissionsResult` to call the new `CordovaPlugin.onRequestPermissionsResult` method in addition to the exisiting `CordovaPlugin.onRequestPermissionResult`.

### Fixes

* **Keyboard Layout and Page Scrolling when Input Fields Receive Focus**

    Fixes a UI layout and scrolling bug, that was introduced in `cordova-android@15.0.0`, where focusing on an input field while the soft keyboard was open could cause the WebView to shift upwards, leaving an unrendered space at the bottom of the Activity, and prevent the page from scrolling. This update restores the expected layout and scrolling behavior when interacting with input fields.

* **Handle Permissions for `getUserMedia`**

    Fixes `getUserMedia()` permission handling to correctly check for and request the required native camera and microphone permissions before proceeding. This aligns the WebView permission flow with the native platform, improving compatibility and ensuring media requests behave as expected.

* **Back Button Handling After App Launch**

    Fixes an issue where the back button would not respond immediately after the app launched. Back button events are now handled consistently from startup, including on devices that support the Android back gesture, ensuring expected navigation behavior throughout the app.

* **Properly Handle CSS Color with Alpha**

    Fixes an issue where `window.statusbar.setBackgroundColor()` incorrectly interpreted 8-digit hexadecimal CSS color values, which could result in the wrong status bar color being applied.

* **Status Bar Appearance Styling for Edge-to-Edge**

    When Edge-to-Edge was enabled, apps could not adjust the status bar text and icon appearance, which could make them difficult to see against certain backgrounds. 
    
    This release exposes the exisiting `window.statusbar.setBackgroundColor()` JS API for Edge-to-Edge layouts. Although the API is used to set the status bar background color, it also determines the appropriate status bar text and icon appearance, allowing apps to maintain proper contrast. In Edge-to-Edge layouts, the background color itself is not applied as there is no status bar, but the calculated appearance is still applied.

* **Fix Status Bar Background Color Handling for Opaque White**

    Fixes an issue where the valid color `#FFFFFFFF` was incorrectly treated as an invalid status bar color, preventing fully opaque white from being applied. This restores support for all valid status bar background colors.

<!--more-->
# Changes include:

**Features:**

* feat: call new method `CordovaPlugin.onRequestPermissionsResult` ([#1855](https://github.com/apache/cordova-android/pull/1855)) [[b66f0f33](https://github.com/apache/cordova-android/commit/b66f0f33)]
* feat: deprecate `PermissionHelper` ([#1857](https://github.com/apache/cordova-android/pull/1857)) [[8c839764](https://github.com/apache/cordova-android/commit/8c839764)]
* feat: remove unused private Method `PermissionHelper.deliverPermissionResult` ([#1858](https://github.com/apache/cordova-android/pull/1858)) [[9c3d8268](https://github.com/apache/cordova-android/commit/9c3d8268)]

**Fixes:**

* fix: webview loses scrollability and creates empty bottom space ([#1924](https://github.com/apache/cordova-android/pull/1924)) [[b91144c0](https://github.com/apache/cordova-android/commit/b91144c0)]
* fix: handle permissions for getUserMedia ([#1895](https://github.com/apache/cordova-android/pull/1895)) [[24502178](https://github.com/apache/cordova-android/commit/24502178)]
* fix: overwritten backbutton not firing on first time by hardware button and never on back gesture ([#1910](https://github.com/apache/cordova-android/pull/1910)) [[0bfbc20b](https://github.com/apache/cordova-android/commit/0bfbc20b)]
* fix(android): use AndroidX `OnBackPressedCallback` instead of `OnBackInvokedCallback` ([#1903](https://github.com/apache/cordova-android/pull/1903)) [[9064bc07](https://github.com/apache/cordova-android/commit/9064bc07)]
* fix(gradle-9): unable to resolve class XmlParser for Groovy 4.x ([#1896](https://github.com/apache/cordova-android/pull/1896)) [[9ae489bd](https://github.com/apache/cordova-android/commit/9ae489bd)]
* fix(statusbar.js): remove trailing whitespace in comment for lint ([#1970](https://github.com/apache/cordova-android/pull/1970)) [[cdbeb603](https://github.com/apache/cordova-android/commit/cdbeb603)]
* fix(statusbar): Properly handle CSS colours ([#1955](https://github.com/apache/cordova-android/pull/1955)) [[dd3fd357](https://github.com/apache/cordova-android/commit/dd3fd357)]
* fix(SystemBarPlugin): remove `canEdgeToEdge` check for `execute` method ([#1971](https://github.com/apache/cordova-android/pull/1971)) [[61ebdcde](https://github.com/apache/cordova-android/commit/61ebdcde)]
* fix(SystemBarPlugin): remove sentinel value `INVALID_COLOR`, use `null` instead  ([#1939](https://github.com/apache/cordova-android/pull/1939)) [[f4ecf997](https://github.com/apache/cordova-android/commit/f4ecf997)]

**Others**

* chore: cleanup PermissionHelper ([#1925](https://github.com/apache/cordova-android/pull/1925)) [[7dd7f504](https://github.com/apache/cordova-android/commit/7dd7f504)]
* chore: bump package 15.1.0-dev.0 & update package-lock ([#1964](https://github.com/apache/cordova-android/pull/1964)) [[929f2054](https://github.com/apache/cordova-android/commit/929f2054)]
* chore: remove redundant Hello World template files ([#1926](https://github.com/apache/cordova-android/pull/1926)) [[56e263fe](https://github.com/apache/cordova-android/commit/56e263fe)]
* chore: simplify edge-to-edge preference logic in CordovaActivity and SystemBarPlugin ([#1902](https://github.com/apache/cordova-android/pull/1902)) [[190076ba](https://github.com/apache/cordova-android/commit/190076ba)]
* chore: ignore gradle build artificat `problems-report.html` ([#1912](https://github.com/apache/cordova-android/pull/1912)) [[b1705d83](https://github.com/apache/cordova-android/commit/b1705d83)]
* chore: more license header updates ([#1909](https://github.com/apache/cordova-android/pull/1909)) [[1f70d396](https://github.com/apache/cordova-android/commit/1f70d396)]
* chore: update package-lock ([#1905](https://github.com/apache/cordova-android/pull/1905)) [[af56a003](https://github.com/apache/cordova-android/commit/af56a003)]
* chore(ci): update & clean workflow ([#1966](https://github.com/apache/cordova-android/pull/1966)) [[654b03a3](https://github.com/apache/cordova-android/commit/654b03a3)]
* chore(ci): improve workflows & dependabot ([#1928](https://github.com/apache/cordova-android/pull/1928)) [[08c4fd1e](https://github.com/apache/cordova-android/commit/08c4fd1e)]
* chore(deps-dev): bump js-yaml from 4.1.1 to 4.2.0 ([#1960](https://github.com/apache/cordova-android/pull/1960)) [[ebccedf6](https://github.com/apache/cordova-android/commit/ebccedf6)]
* chore(deps-dev): bump tmp from 0.2.6 to 0.2.7 ([#1956](https://github.com/apache/cordova-android/pull/1956)) [[d90eeecb](https://github.com/apache/cordova-android/commit/d90eeecb)]
* chore(deps-dev): bump tmp from 0.2.5 to 0.2.6 ([#1945](https://github.com/apache/cordova-android/pull/1945)) [[a63c1e18](https://github.com/apache/cordova-android/commit/a63c1e18)]
* chore(deps-dev): bump c8 from 10.1.3 to 11.0.0 ([#1941](https://github.com/apache/cordova-android/pull/1941)) [[74fbbdce](https://github.com/apache/cordova-android/commit/74fbbdce)]
* chore(deps-dev): bump jasmine from 6.1.0 to 6.2.0 ([#1932](https://github.com/apache/cordova-android/pull/1932)) [[90b4b057](https://github.com/apache/cordova-android/commit/90b4b057)]
* chore(deps): bump github/codeql-action/analyze from 4.36.3 to 4.37.0 ([#1973](https://github.com/apache/cordova-android/pull/1973)) [[80658ea4](https://github.com/apache/cordova-android/commit/80658ea4)]
* chore(deps): bump github/codeql-action/init from 4.36.3 to 4.37.0 ([#1972](https://github.com/apache/cordova-android/pull/1972)) [[89771e64](https://github.com/apache/cordova-android/commit/89771e64)]
* chore(deps): bump actions/setup-java from 5.4.0 to 5.5.0 ([#1974](https://github.com/apache/cordova-android/pull/1974)) [[065a99d8](https://github.com/apache/cordova-android/commit/065a99d8)]
* chore(deps): bump github/codeql-action/analyze from 4.36.2 to 4.36.3 ([#1969](https://github.com/apache/cordova-android/pull/1969)) [[d830222e](https://github.com/apache/cordova-android/commit/d830222e)]
* chore(deps): bump github/codeql-action/init from 4.36.2 to 4.36.3 ([#1968](https://github.com/apache/cordova-android/pull/1968)) [[1e2f0ca6](https://github.com/apache/cordova-android/commit/1e2f0ca6)]
* chore(deps): bump codecov/codecov-action from 4.6.0 to 7.0.0 ([#1954](https://github.com/apache/cordova-android/pull/1954)) [[acbc5b48](https://github.com/apache/cordova-android/commit/acbc5b48)]
* chore(deps): bump actions/setup-java from 5.3.0 to 5.4.0 ([#1965](https://github.com/apache/cordova-android/pull/1965)) [[cb52fb8d](https://github.com/apache/cordova-android/commit/cb52fb8d)]
* chore(deps): bump actions/checkout from 6.0.3 to 7.0.0 ([#1959](https://github.com/apache/cordova-android/pull/1959)) [[79771499](https://github.com/apache/cordova-android/commit/79771499)]
* chore(deps): bump actions/setup-java from 5.2.0 to 5.3.0 ([#1958](https://github.com/apache/cordova-android/pull/1958)) [[e53dc373](https://github.com/apache/cordova-android/commit/e53dc373)]
* chore(deps): bump actions/checkout from 6.0.2 to 6.0.3 ([#1952](https://github.com/apache/cordova-android/pull/1952)) [[703ebeae](https://github.com/apache/cordova-android/commit/703ebeae)]
* chore(deps): bump github/codeql-action from 4.36.0 to 4.36.2 ([#1953](https://github.com/apache/cordova-android/pull/1953)) [[363a9a77](https://github.com/apache/cordova-android/commit/363a9a77)]
* chore(deps): bump github/codeql-action from 4.35.5 to 4.36.0 ([#1944](https://github.com/apache/cordova-android/pull/1944)) [[a1f75a3e](https://github.com/apache/cordova-android/commit/a1f75a3e)]
* chore(deps): bump erisu/apache-rat-action from 2.0.0 to 3.0.0 ([#1937](https://github.com/apache/cordova-android/pull/1937)) [[4ce731da](https://github.com/apache/cordova-android/commit/4ce731da)]
* chore(deps): bump semver from 7.7.4 to 7.8.0 ([#1934](https://github.com/apache/cordova-android/pull/1934)) [[c636f8bb](https://github.com/apache/cordova-android/commit/c636f8bb)]
* chore(deps): bump erisu/license-checker-action from 2.0.1 to 2.1.0 ([#1930](https://github.com/apache/cordova-android/pull/1930)) [[0baa901d](https://github.com/apache/cordova-android/commit/0baa901d)]
* chore(deps): bump @xmldom/xmldom from 0.8.12 to 0.8.13 ([#1918](https://github.com/apache/cordova-android/pull/1918)) [[0d6fdd17](https://github.com/apache/cordova-android/commit/0d6fdd17)]
* chore(deps): bump lodash from 4.17.23 to 4.18.1 ([#1914](https://github.com/apache/cordova-android/pull/1914)) [[7b33c5dd](https://github.com/apache/cordova-android/commit/7b33c5dd)]
* chore(deps): bump @xmldom/xmldom from 0.8.11 to 0.8.12 ([#1911](https://github.com/apache/cordova-android/pull/1911)) [[c44a4627](https://github.com/apache/cordova-android/commit/c44a4627)]
* chore(deps): bump picomatch ([#1908](https://github.com/apache/cordova-android/pull/1908)) [[2868f93a](https://github.com/apache/cordova-android/commit/2868f93a)]
* chore(deps): bump minimatch ([#1898](https://github.com/apache/cordova-android/pull/1898)) [[31f3d57c](https://github.com/apache/cordova-android/commit/31f3d57c)]
* chore(gh-action): improve draft-release workflow ([#1906](https://github.com/apache/cordova-android/pull/1906)) [[340eade2](https://github.com/apache/cordova-android/commit/340eade2)]
* chore(INFRA): Set up default protection ruleset for default and release branches ([#1927](https://github.com/apache/cordova-android/pull/1927)) [[f490531d](https://github.com/apache/cordova-android/commit/f490531d)]
* chore(post-release): bump v15.0.1-dev.0 ([#1899](https://github.com/apache/cordova-android/pull/1899)) [[c02d1b03](https://github.com/apache/cordova-android/commit/c02d1b03)]
* doc: improve documentation of `onRequestPermissionResult` and `onRequestPermissionsResult` ([#1920](https://github.com/apache/cordova-android/pull/1920)) [[1d01ea1f](https://github.com/apache/cordova-android/commit/1d01ea1f)]
* doc(CordovaPreferences): Improve documentation for using Long.decode instead of Integer.decode ([#1943](https://github.com/apache/cordova-android/pull/1943)) [[661fadd0](https://github.com/apache/cordova-android/commit/661fadd0)]
* doc(statusbar.js): document `visible` property and `setBackgroundColor` method ([#1961](https://github.com/apache/cordova-android/pull/1961)) [[50ee09e4](https://github.com/apache/cordova-android/commit/50ee09e4)]
* refactor: address warnings in SystemWebChromeClient.java ([#1951](https://github.com/apache/cordova-android/pull/1951)) [[80491e9a](https://github.com/apache/cordova-android/commit/80491e9a)]
