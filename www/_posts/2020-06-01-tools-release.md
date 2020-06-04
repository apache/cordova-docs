---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Create, Common, and Xcode Released!"
categories: news
tags: release tools
---

We are happy to announce that we have just released an update to our tools!

* [cordova-common@4.0.1](https://www.npmjs.org/package/cordova-common)
* [xcode@3.0.1](https://www.npmjs.org/package/xcode)
* [cordova-create@3.0.0](https://www.npmjs.org/package/cordova-create)

## Release Highlights

### cordova-common

* [GH-143](https://github.com/apache/cordova-common/pull/143) fix: typo in `access` & `allow navigation`
* [GH-142](https://github.com/apache/cordova-common/pull/142) fix(`ConfigParser`): `ImageResources` constructor

### xcode

* [GH-109](https://github.com/apache/cordova-node-xcode/pull/109) Add `targetName` to parameter to `getBuildProperty`

### cordova-create

* [GH-52](https://github.com/apache/cordova-create/pull/52) Fix `isRemoteUri`
* [GH-40](https://github.com/apache/cordova-create/pull/40) breaking: major usability & maintainability improvements
  * Write `package.json` with indentation of 2
  * Simplify interface of main export (§1)
  * New logic for setting attributes in `package.json` & `config.xml` (§3)
  * Do not copy "missing" files from default template (§5)
  * Reduce number of supported template layouts (§7)
  * Drop support for linking (§8)
  * Use either `opts.events` or a no-op for logging (§4)

<!--more-->
# Changes include:

## cordova-common

* [GH-141](https://github.com/apache/cordova-common/pull/141) chore: apply random missing minor changes
* [GH-143](https://github.com/apache/cordova-common/pull/143) fix: typo in `access` & `allow navigation`
* [GH-142](https://github.com/apache/cordova-common/pull/142) fix(`ConfigParser`): `ImageResources` constructor

## xcode

* [GH-109](https://github.com/apache/cordova-node-xcode/pull/109) Add `targetName` to parameter to `getBuildProperty`

## cordova-create

* [GH-65](https://github.com/apache/cordova-create/pull/65) chore(`npm`): bump dependencies w/ rebuilt `package-lock`
* [GH-64](https://github.com/apache/cordova-create/pull/64) refactor: small syntax changes
* [GH-63](https://github.com/apache/cordova-create/pull/63) chore: various cleanup changes
* [GH-60](https://github.com/apache/cordova-create/pull/60) chore(`eslint`): bump package
* [GH-59](https://github.com/apache/cordova-create/pull/59) breaking(`npm`): bump dependencies
* [GH-62](https://github.com/apache/cordova-create/pull/62) ci: use GitHub Actions
* [GH-58](https://github.com/apache/cordova-create/pull/58) chore(`npm`): use short notation in `package.json`
* [GH-55](https://github.com/apache/cordova-create/pull/55) chore: `eslint` config cleanup
* [GH-53](https://github.com/apache/cordova-create/pull/53) feat: support `.gitignore` files in generated app
* [GH-54](https://github.com/apache/cordova-create/pull/54) refactor: `eslint` setup
* [GH-52](https://github.com/apache/cordova-create/pull/52) Fix `isRemoteUri`
* [GH-51](https://github.com/apache/cordova-create/pull/51) Add syntax highlighting to code samples in `README`
* [GH-48](https://github.com/apache/cordova-create/pull/48) chore: update testing (`jasmine` & `nyc`)
* [GH-40](https://github.com/apache/cordova-create/pull/40) breaking: major usability & maintainability improvements
  * Write `package.json` with indentation of 2
  * Simplify interface of main export (§1)
  * New logic for setting attributes in `package.json` & `config.xml` (§3)
  * Do not copy "missing" files from default template (§5)
  * Reduce number of supported template layouts (§7)
  * Drop support for linking (§8)
  * Use either `opts.events` or a no-op for logging (§4)
* [GH-50](https://github.com/apache/cordova-create/pull/50) chore: improve `npm` ignore list
* [GH-49](https://github.com/apache/cordova-create/pull/49) chore: bump production dependencies
* [GH-47](https://github.com/apache/cordova-create/pull/47) breaking: drop `node` 6 and 8 support
* [GH-42](https://github.com/apache/cordova-create/pull/42) chore: bump `eslint-utils` from 1.3.1 to 1.4.3
* [GH-44](https://github.com/apache/cordova-create/pull/44) chore: bump `js-yaml` from 3.12.0 to 3.13.1
* [GH-43](https://github.com/apache/cordova-create/pull/43) chore: bump `lodash` from 4.17.11 to 4.17.15
* [GH-45](https://github.com/apache/cordova-create/pull/45) chore: replace `http` URLs in `package-lock.json` w/ `https`
* [GH-41](https://github.com/apache/cordova-create/pull/41) chore: update `nyc` dev dependency
* [GH-39](https://github.com/apache/cordova-create/pull/39) chore: add Node.js 12 to CI services
* chore: remove deprecated `engineStrict` from `package.json`
