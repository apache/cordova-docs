---
layout: post
author:
    name: Manuel Beck
    url: https://github.com/GitToTheHub
title:  "File Transfer Plugin 2.0.1 Released!"
categories: announcements
tags: news releases plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-file-transfer`!

* [cordova-plugin-file-transfer@2.0.1](https://www.npmjs.com/package/cordova-plugin-file-transfer)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-file-transfer
cordova plugin add cordova-plugin-file-transfer@2.0.1
```

## Release Highlights

This is a patch release which resolves a build error with XCode and using cordova-ios 8.0.0.

<!--more-->
### Fixes

* fix(ios): cast to `CDVFile` when getting the plugin by `getCommandInstance` ([#385](https://github.com/apache/cordova-plugin-file-transfer/pull/385)) [[7b869a2](https://github.com/apache/cordova-plugin-file-transfer/commit/7b869a2)]
* fix(ios): Set minimum XCode version in GitHub Action to 15 ([#386](https://github.com/apache/cordova-plugin-file-transfer/pull/386)) [[41b0605](https://github.com/apache/cordova-plugin-file-transfer/commit/41b0605)]

### Others

* chore: update linter ([#396](https://github.com/apache/cordova-plugin-file-transfer/pull/396)) [[e7a7a1f](https://github.com/apache/cordova-plugin-file-transfer/commit/e7a7a1f)]
* chore: sync workflows with paramedic, add release audit & missing license headers ([#390](https://github.com/apache/cordova-plugin-file-transfer/pull/390)) [[86ad889](https://github.com/apache/cordova-plugin-file-transfer/commit/86ad889)]
* chore: add asf config ([#375](https://github.com/apache/cordova-plugin-file-transfer/pull/375)) [[f12b73e](https://github.com/apache/cordova-plugin-file-transfer/commit/f12b73e)]
* chore: bump version 2.0.1-dev [[2c15ad2](https://github.com/apache/cordova-plugin-file-transfer/commit/2c15ad2)]
* chore(ci): draft release ([#395](https://github.com/apache/cordova-plugin-file-transfer/pull/395)) [[02dd05e](https://github.com/apache/cordova-plugin-file-transfer/commit/02dd05e)]
* chore(deps-dev): bump flatted from 3.2.7 to 3.4.3 ([#393](https://github.com/apache/cordova-plugin-file-transfer/pull/393)) [[485ae29](https://github.com/apache/cordova-plugin-file-transfer/commit/485ae29)]
* chore(deps-dev): bump minimatch from 3.1.2 to 3.1.5 ([#392](https://github.com/apache/cordova-plugin-file-transfer/pull/392)) [[c20f683](https://github.com/apache/cordova-plugin-file-transfer/commit/c20f683)]
* chore(deps-dev): bump js-yaml from 4.1.0 to 4.3.0 ([#394](https://github.com/apache/cordova-plugin-file-transfer/pull/394)) [[33f34e0](https://github.com/apache/cordova-plugin-file-transfer/commit/33f34e0)]
* chore(deps): bump brace-expansion from 1.1.11 to 1.1.12 in /tests/server ([#382](https://github.com/apache/cordova-plugin-file-transfer/pull/382)) [[345c6cf](https://github.com/apache/cordova-plugin-file-transfer/commit/345c6cf)]
* chore(INFRA): Set up default protection ruleset for default and release branches ([#389](https://github.com/apache/cordova-plugin-file-transfer/pull/389)) [[c8d6b90](https://github.com/apache/cordova-plugin-file-transfer/commit/c8d6b90)]
* ci: sync workflow w/ paramedic ([#379](https://github.com/apache/cordova-plugin-file-transfer/pull/379)) [[24e2e99](https://github.com/apache/cordova-plugin-file-transfer/commit/24e2e99)]
* doc(readme): update badges, update license header ([#391](https://github.com/apache/cordova-plugin-file-transfer/pull/391)) [[8793e51](https://github.com/apache/cordova-plugin-file-transfer/commit/8793e51)]
