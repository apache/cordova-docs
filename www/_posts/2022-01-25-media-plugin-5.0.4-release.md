---
layout: post
author:
    name: Bryan Ellis
title:  "Media Plugin 5.0.4 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `Cordova Media Plugin (5.0.4)`!

* [cordova-plugin-media@5.0.4](https://www.npmjs.com/package/cordova-plugin-media)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-media
cordova plugin add cordova-plugin-media@5.0.4
```

## Release Highlights

* Resolved Mounted Storage for **Android 11**

    Android 11 had deprecated the `Environment.getExternalStorageDirectory()` API that caused issues with fetching and mounting to the external directory. In this release, we changed the API with `context.getExternalFilesDir(null)`, the alternative suggested API for fetching and mounting with the external storage directory.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-317](https://github.com/apache/cordova-plugin-media/pull/317) fix(android): get external files directory for **Android** 10+
* [GH-249](https://github.com/apache/cordova-plugin-media/pull/249) fix: #248 delete javascript reference to released media
* [GH-241](https://github.com/apache/cordova-plugin-media/pull/241) fix(types): Add type definition for getCurrentAmplitude
* [GH-283](https://github.com/apache/cordova-plugin-media/pull/283) refactor(eslint): use `cordova-eslint` /w fix

**Chores & Deps:**

* [GH-329](https://github.com/apache/cordova-plugin-media/pull/329) dep: bump `@cordova/eslint-config@4.0.0` w/ fix & `package-lock` rebuild
* [GH-284](https://github.com/apache/cordova-plugin-media/pull/284) chore: adds `package-lock` file
* [GH-282](https://github.com/apache/cordova-plugin-media/pull/282) chore(npm): use short notation in `package.json`
* [GH-275](https://github.com/apache/cordova-plugin-media/pull/275) chore(npm): improve ignore list

**CI & Tests:**

* [GH-320](https://github.com/apache/cordova-plugin-media/pull/320) ci(ios): update workflow w/ **iOS** 15
* [GH-313](https://github.com/apache/cordova-plugin-media/pull/313) ci: add action-badge
* [GH-312](https://github.com/apache/cordova-plugin-media/pull/312) ci: remove travis & appveyor
* [GH-311](https://github.com/apache/cordova-plugin-media/pull/311) ci: add gh-actions workflows
* [GH-298](https://github.com/apache/cordova-plugin-media/pull/298) ci: add node-14.x to workflow
* [GH-292](https://github.com/apache/cordova-plugin-media/pull/292) ci(travis): update osx xcode image
* [GH-291](https://github.com/apache/cordova-plugin-media/pull/291) ci(travis): updates **Android** API level
* [GH-274](https://github.com/apache/cordova-plugin-media/pull/274) ci: updates Node.js versions
* [GH-318](https://github.com/apache/cordova-plugin-media/pull/318) test(browser): disable test cases w/ play() due to Chrome's Autoplay Policy
