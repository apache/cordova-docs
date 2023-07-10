---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova iOS 7.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova iOS 7.0.0`! This is one of Cordova's supported platforms for building iOS applications.

* [cordova-ios@7.0.0](https://www.npmjs.com/package/cordova-ios)

## Release Highlights

**To upgrade:**

```bash
cordova platform remove ios
cordova platform add ios@7.0.0
```

**To install:**

```bash
cordova platform add ios@7.0.0
```

**BREAKING CHANGES:**

* **Removal of `podspec` type from `framework` tag**

    Since Cordova-iOS 5.0.0, the new `podspec` tag was added to improve the readability and support of features that CocoaPods provided.

    This release officially removes the old `type="podspec"` implementation of the `framework` tag. If you maintain plugins and still using the `framework` tag to load pod specs, it is recommended to migrate to the newer implementation.

    For implementation specifications, please see our [Apache Cordova - Podspec](https://cordova.apache.org/docs/en/dev/plugin_ref/spec.html#podspec-) docs.

* **Removed default `CONFIGURATION_BUILD_DIR` overrides**

    This will change the location of where the output files are generated.

    * `build/emulator` will become `build/Debug-iphonesimulator`
    * `build/device` will become `build/Release-iphoneos`

    This will help ensure that debug and release files are never mixed up in the same directory and hypothetically prepare for `macos` builds.

* **Node Support**

    We have dropped support for Node 14.x and increase the minimum Node requirement to greater than or equal to 16.13.0.

* **Dropped Platform Binaries**

    We no longer supply or package platform-centric workflow binaries in the `cordova-ios` npm package or GitHub repository.

* **Rename `Images.xcassets` to `Assets.xcassets`**

* **Remove deprecated API `colorFromColorString` from `CDVViewController`**
* **Privatized the `CDVCommandDelegateImpl` class.**

**New Features:**

* **Added `LimitsNavigationsToAppBoundDomains` preference configuration**

    This preference allows you to use cookie authentication or browser APIs but requires the value to be set to `YES`. The default value is `NO`.

* **Support Apple Cloud Distribution Signing**

* **Enable Mac Catalyst Support**

    Apps built with Cordova-iOS can now target macOS using the Catalyst runtime. This can be enabled by checking the "macOS - Catalyst" checkbox in the Xcode project settings and then building for the macOS target in Xcode.

    Currently, building for Catalyst from Cordova's command-line tool is not supported.

Please report any issues you find on our [Cordova-iOS](https://github.com/apache/cordova-ios/issues) GitHub issue tracker!

<!--more-->
# Changes include:

**Breaking:**

* [GH-1340](https://github.com/apache/cordova-ios/pull/1340) chore!: Remove `podspec` support from `framework` tag
* [GH-1310](https://github.com/apache/cordova-ios/pull/1310) feat!: Remove some Xcode build dir overrides
* [GH-1305](https://github.com/apache/cordova-ios/pull/1305) dep!: bump all possible dependencies w/ node engine requirement update `>=16.13.0`
  * `semver@7.4.0`
  * `plist@3.0.6`
  * `fs-extra@11.1.1`
  * `cordova-common@5.0.0`
  * `nopt@7.1.0`
  * `which@3.0.0`
  * `@cordova/eslint-config@5.0.0`
  * `jasmine@4.6.0`
  * `rewire@6.0.0`
* [GH-1180](https://github.com/apache/cordova-ios/pull/1180) refactor!: drop platform binaries
* [GH-1169](https://github.com/apache/cordova-ios/pull/1169) chore!: Rename `Images.xcassets` to `Assets.xcassets`
* [GH-1161](https://github.com/apache/cordova-ios/pull/1161) chore!: Breaking API cleanups
* [GH-1182](https://github.com/apache/cordova-ios/pull/1182) dep(dev)!: bump eslint w/ corrections
* [GH-1181](https://github.com/apache/cordova-ios/pull/1181) dep!: use latest dependencies
  * `nyc@^15.1.0`

**Features:**

* [GH-1249](https://github.com/apache/cordova-ios/pull/1249) feat: Add `LimitsNavigationsToAppBoundDomains` configuration key
* [GH-1320](https://github.com/apache/cordova-ios/pull/1320) feat: add `listTarget` api & revert original bin file location
* [GH-1266](https://github.com/apache/cordova-ios/pull/1266) feat(plugman): support `framework` `link` attribute
* [GH-1276](https://github.com/apache/cordova-ios/pull/1276) feat: Support Apple Cloud Distribution signing
* [GH-1210](https://github.com/apache/cordova-ios/pull/1210) feat: support extending export options
* [GH-1251](https://github.com/apache/cordova-ios/pull/1251) feat: support multiple provisioning profiles
* [GH-1186](https://github.com/apache/cordova-ios/pull/1186) feat(versions): print error messages, not error objects
* [GH-1168](https://github.com/apache/cordova-ios/pull/1168) feat(catalyst): Enable Mac Catalyst support
* [GH-1050](https://github.com/apache/cordova-ios/pull/1050) feat: add `CDVWebViewEngineConfigurationDelegate`
* [GH-1154](https://github.com/apache/cordova-ios/pull/1154) feat: Swift Package Manager support for CordovaLib

**Fixes:**

* [GH-1354](https://github.com/apache/cordova-ios/pull/1354) fix: Various ObjC/template cleanups
* [GH-1341](https://github.com/apache/cordova-ios/pull/1341) fix: Try updating `Podfile` deployment target on prepare
* [GH-1343](https://github.com/apache/cordova-ios/pull/1343) fix: Apply new Xcode flags consistently across test projects
* [GH-1126](https://github.com/apache/cordova-ios/pull/1126) fix: replace of `podspec` variables in `Podfile`
* [GH-1336](https://github.com/apache/cordova-ios/pull/1336) fix: Xcode 15 Beta
* [GH-1337](https://github.com/apache/cordova-ios/pull/1337) fix: make the WebView the first responder when it loads
* [GH-1326](https://github.com/apache/cordova-ios/pull/1326) fix: memory leak when removing the `CDVViewController`
* [GH-1312](https://github.com/apache/cordova-ios/pull/1312) fix(create): Ensure unix paths in Xcode project file
* [GH-1315](https://github.com/apache/cordova-ios/pull/1315) fix(splashscreen): positioning after rotation
* [GH-1295](https://github.com/apache/cordova-ios/pull/1295) fix(`CDVPlugin`): swift init
* [GH-1255](https://github.com/apache/cordova-ios/pull/1255) fix: import type definitions from obsolete `cordova-plugin-splashscreen`
* [GH-1170](https://github.com/apache/cordova-ios/pull/1170) fix(bin/create): set failing exit code on failure
* [GH-1171](https://github.com/apache/cordova-ios/pull/1171) fix(spec/create): handle `createAndBuild` promises
* [GH-1140](https://github.com/apache/cordova-ios/pull/1140) fix: split xcode project location by env separator

**Refactors:**

* [GH-1206](https://github.com/apache/cordova-ios/pull/1206) refactor: platform version logic
* [GH-1204](https://github.com/apache/cordova-ios/pull/1204) refactor: move cordova minimum template
* [GH-1203](https://github.com/apache/cordova-ios/pull/1203) refactor!: do not copy JS lib to platform project
* [GH-1202](https://github.com/apache/cordova-ios/pull/1202) refactor: do not infer project root from script location
* [GH-1201](https://github.com/apache/cordova-ios/pull/1201) refactor(create): convert main implementation to class
* [GH-1200](https://github.com/apache/cordova-ios/pull/1200) refactor(create): sort functions in breadth-first call order
* [GH-1199](https://github.com/apache/cordova-ios/pull/1199) refactor(create): further cleanup
* [GH-1198](https://github.com/apache/cordova-ios/pull/1198) refactor(create): cleanup createProject
* [GH-1196](https://github.com/apache/cordova-ios/pull/1196) refactor: move project template out of bin w/ code changes
* [GH-1195](https://github.com/apache/cordova-ios/pull/1195) refactor(create): cleanup `copyTemplateFiles`
* [GH-1194](https://github.com/apache/cordova-ios/pull/1194) refactor(create)!: move apple_* binaries & cleanup `copyScripts`
* [GH-1193](https://github.com/apache/cordova-ios/pull/1193) refactor: cleanup create script
* [GH-1190](https://github.com/apache/cordova-ios/pull/1190) refactor: replace superspawn with execa
* [GH-1188](https://github.com/apache/cordova-ios/pull/1188) refactor: hide implementation of build & run
* [GH-1189](https://github.com/apache/cordova-ios/pull/1189) refactor(run): code cleanup
* [GH-1185](https://github.com/apache/cordova-ios/pull/1185) refactor(versions): DRY version binary code
* [GH-1167](https://github.com/apache/cordova-ios/pull/1167) refactor: Api class
* [GH-1158](https://github.com/apache/cordova-ios/pull/1158) refactor: replace `copy-www-build-step` script with build phase
* [GH-1032](https://github.com/apache/cordova-ios/pull/1032) refactor: update allow list name
* [GH-1116](https://github.com/apache/cordova-ios/pull/1116) refactor(projectFile): drop dependency on underscore

**Chores:**

* chore(rat): add auto generated xcode files to ignore list
* [GH-1339](https://github.com/apache/cordova-ios/pull/1339) chore: Remove unused `BackupWebStorage` preference
* [GH-1308](https://github.com/apache/cordova-ios/pull/1308) chore: remove long-unused `codeSignResourceRules` option
* [GH-1183](https://github.com/apache/cordova-ios/pull/1183) chore: remove unused and outdated `listStartedEmulators`
* [GH-1174](https://github.com/apache/cordova-ios/pull/1174) chore: remove stale coffeescript tests
* [GH-1173](https://github.com/apache/cordova-ios/pull/1173) chore: Remove unused imports from template
* [GH-1160](https://github.com/apache/cordova-ios/pull/1160) chore(swiftpm): Fix up CordovaLib Swift Package
* [GH-1034](https://github.com/apache/cordova-ios/pull/1034) chore: remove more deprecated `UIWebView` things
* [GH-1145](https://github.com/apache/cordova-ios/pull/1145) chore: `npmrc`
* [GH-1129](https://github.com/apache/cordova-ios/pull/1129) chore: rebuild `package-lock.json` to address reported npm audit vulnerabilities
* [GH-1105](https://github.com/apache/cordova-ios/pull/1105) chore: add undeclared dependency `underscore`

**Others:**

* [GH-1197](https://github.com/apache/cordova-ios/pull/1197) build: build `cordova.js` during npm prepare
* [GH-1317](https://github.com/apache/cordova-ios/pull/1317) ci: add node 20.x
* [GH-1307](https://github.com/apache/cordova-ios/pull/1307) ci: Drop NodeJS 14 tests for non-darwin jobs
* [GH-1277](https://github.com/apache/cordova-ios/pull/1277) ci(workflow): update dependencies
* [GH-1271](https://github.com/apache/cordova-ios/pull/1271) ci: remove Node 10-12 & add Node 16-18.
* [GH-1237](https://github.com/apache/cordova-ios/pull/1237) dep: bump `simple-plist` from 1.3.0 to 1.3.1
* [GH-1208](https://github.com/apache/cordova-ios/pull/1208) dep: bump `jasmine@^3.10.0`
* [GH-1187](https://github.com/apache/cordova-ios/pull/1187) test(version): merge two test suites into one
* [GH-1184](https://github.com/apache/cordova-ios/pull/1184) test(create): further increase timeouts to avoid false negatives
* [GH-1177](https://github.com/apache/cordova-ios/pull/1177) test(create): waste less time on name variants
* [GH-1179](https://github.com/apache/cordova-ios/pull/1179) test: simpler killing of running simulators
* [GH-1178](https://github.com/apache/cordova-ios/pull/1178) test(versions): increase test timeout when invoking pod
* [GH-1176](https://github.com/apache/cordova-ios/pull/1176) test(create): increase test timeout
* [GH-1133](https://github.com/apache/cordova-ios/pull/1133) doc: `README` improvements (cleaup, xcode debugging, etc)
