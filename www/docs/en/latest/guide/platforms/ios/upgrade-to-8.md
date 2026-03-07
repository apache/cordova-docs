---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Upgrading to Cordova iOS 8.x
---

# Upgrading to Cordova iOS 8.x

This guide covers upgrading app projects to Cordova iOS 8.x.

If you are maintaining plugins, see the plugin migration guide:
[Upgrading Plugins to Cordova iOS 8.x](https://apache.github.io/cordova-ios/documentation/cordova/upgrading-8?language=objc).

## Quick upgrade

From your Cordova app root:

```bash
cordova platform remove ios
cordova platform add ios@8.0.1
```

Using remove/add is recommended for major upgrades so the generated iOS project files are refreshed.

## Upgrading from 8.0.0 to 8.0.1

`8.0.1` is currently the recommended installation target for Cordova iOS 8.x.

If you are on `8.0.0`, upgrade to `8.0.1`.

Upgrade as usual:

```bash
cordova platform remove ios
cordova platform add ios@8.0.1
```

For new installs targeting Cordova iOS 8, install `8.0.1` directly.

## New minimum requirements

Cordova iOS 8.x requires:

* iOS deployment target 13.0 or newer
* Xcode 15 or newer
* Node.js `^20.17.0 || >=22.9.0`

## Breaking changes to check

### 1. Xcode project and target naming

Cordova iOS now consistently generates an iOS project named `App`:

* `App.xcodeproj`
* `App.xcworkspace`
* target name `App`

If you have scripts or hooks that assumed the Xcode project name matches `<name>` in `config.xml`, update them.

For Cordova hooks and tooling, use the `cordova-ios` API to discover paths instead of building paths manually.

```js
const path = require('path');
const cordova_ios = require('cordova-ios');

const projectRoot = context.opts.projectRoot;
const platformPath = path.join(projectRoot, 'platforms', 'ios');
const iosProject = new cordova_ios('ios', platformPath);

console.log(iosProject.locations.pbxproj);
```

### 2. Simulator tooling change

`ios-sim` has been removed. Cordova now uses `simctl` directly.

If you have custom automation around simulator management, migrate those scripts to use `xcrun simctl` or Cordova's updated platform commands.

### 3. Status bar behavior

Cordova iOS 8 adds built-in status bar handling for common cases.

In many apps, the separate StatusBar plugin `cordova-plugin-statusbar` is no longer required.

Status bar visibility is controlled by `viewport-fit` in your `<meta name="viewport">` tag:
- `viewport-fit=cover` will make the WebView cover the whole screen and give you access to CSS environment variables to implement your own status bar.
- `viewport-fit=contain` will keep the WebView below the status bar, with the status bar colours being determined by the `<meta name="theme-color">` tag.

Validate your app's status bar behavior on device after upgrade.

### 4. iOS Scene API adoption

The template now uses iOS Scene APIs to support modern multi-window behavior, which is a requirement since iOS 26.

If your app or custom native code assumed a single window (or directly depended on app delegate window properties), review and update that code.

### 5. App template modernizations

Cordova iOS 8 updates the generated native iOS project template, which is generated when you execute `cordova platform add ios`, to modern defaults, Swift-based app files and storyboard setup.

If your build scripts or hooks modify native template files directly, review those customizations after upgrading, especially older Objective-C based patches.

### 6. Icon workflow changes

Cordova iOS 8 significantly updates icon handling (introduced in [GH-1465](https://github.com/apache/cordova-ios/pull/1465)).

#### Single icon source

For most apps, provide one 1024x1024 PNG and let Xcode generate the required icon sizes:

```xml
<platform name="ios">
    <icon src="appicon.png" />
</platform>
```

This is the simplest migration path and works for standard iOS app icons.

#### iOS 18 dark and tinted variants (Xcode 16+)

This feature gives iOS extra source assets for icon styling.

You still provide the normal app icon in `src`.
Then you can optionally provide two additional assets:

* `foreground`: should typically contain only the foreground artwork on transparency for dark-mode icon composition.
* `monochrome`: grayscale mask that iOS can tint with the system-selected color

Example `config.xml`:

```xml
<platform name="ios">
    <icon src="appicon.png"
          foreground="appicon-dark.png"
          monochrome="appicon-tint.png" />
</platform>
```

Sample source assets:

![]({{ site.baseurl }}/static/img/guide/platforms/ios/ios-icon-variants-source-assets.svg)

What this means at runtime (conceptual example):

![]({{ site.baseurl }}/static/img/guide/platforms/ios/ios-icon-variants-result.svg)

Important compatibility note:

* Variant processing requires Xcode 16 or newer.
* On Xcode 15 and older, these variant entries are ignored by Cordova's prepare logic.
* If you do not define `foreground` and `monochrome`, Cordova/iOS use only the base `src` icon.

#### Platform-specific icon targets

You can override the default icon source for specific Apple platforms with `target`:

```xml
<platform name="ios">
    <icon src="appicon.png" />
    <icon src="watchicon.png" target="watchos" />
</platform>
```

Supported target values:

* `watchos`
* `mac`
* `spotlight` (iOS special-case target when manually assigning specific iOS icon slots)

Notes:

* If no `watchos` icon is provided, the default app icon is used.
* `foreground` and `monochrome` variants apply to iOS icons, not watchOS/macOS icon targets.
* macOS icons do not use the single-1024 auto-generation path; custom macOS icon sets require explicit size mapping.

#### Providing full manual icon sets

If you choose width/height-based icon declarations instead of the single-source workflow, treat that as a full manual set for that platform target.

In other words, if you start providing explicit sized icons, provide the complete required set for that target (iOS, watchOS, or mac) to avoid missing icon slots at build/archive time.

Note: Cordova iOS 8.0.0 does not support Xcode 26 Icon Composer format yet.

## Notable improvements in 8.x

These changes are not usually migration blockers, but are useful to know:

* plugins can be distributed as Swift packages, including package dependencies
* CordovaLib is available as a Swift package for embedding
* improved Mac Catalyst support
* CordovaLib can target visionOS when embedded
* improved handling for media range requests, open URL routing, and crash recovery configuration
* improved deployment-target handling with CocoaPods

## Suggested validation checklist after upgrade

1. Build and run on a simulator and a physical device.
2. Verify launch behavior and splash screen behavior.
3. Verify status bar visibility/color in all key screens.
4. Confirm plugin functionality, especially plugins with native iOS code.
5. Confirm custom hooks that read or modify the Xcode project still work with `App.xcodeproj`.
6. Validate signing, provisioning, and release build output.
7. If you upgraded from `8.0.0`, also verify the 8.0.1 fix areas relevant to your app: Xcode library search paths, Unicode/non-ASCII project names (`PRODUCT_NAME` normalization), Swift Package Manager deployment target handling, and `/_app_file_/` URL loading.

## References

* [Cordova iOS 8.0.0 announcement](https://cordova.apache.org/announcements/2025/11/23/cordova-ios-8.0.0.html)
* [cordova-ios release notes](https://github.com/apache/cordova-ios/blob/rel/8.0.0/RELEASENOTES.md)
* [Upgrading Plugins to Cordova iOS 8.x](https://apache.github.io/cordova-ios/documentation/cordova/upgrading-8?language=objc)
