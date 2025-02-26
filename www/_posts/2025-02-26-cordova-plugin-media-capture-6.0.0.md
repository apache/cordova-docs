---
layout: post
author:
    name: Bryan Ellis
title:  "Media Capture Plugin 6.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released an update for `cordova-plugin-media-capture`!

* [cordova-plugin-media-capture@6.0.0](https://www.npmjs.com/package/cordova-plugin-media-capture/v/6.0.0)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-media-capture
cordova plugin add cordova-plugin-media-capture@6.0.0
```

## Release Highlights

This major release primarily focused on **ensuring** that the plugin complies with Android's new strict permission requirements.

Specifically, it **removes** unnecessary permissions such as:

* `android.permission.READ_EXTERNAL_STORAGE`
* `android.permission.WRITE_EXTERNAL_STORAGE`
* `android.permission.RECORD_AUDIO`

Additionally, it **removes** broad media permissions:

* `android.permission.READ_MEDIA_AUDIO`
* `android.permission.READ_MEDIA_IMAGES`
* `android.permission.READ_MEDIA_VIDEO`

Please report any issues you find by following the [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
# Changes include:

**Breaking Changes:**

* [GH-308](https://github.com/apache/cordova-plugin-media-capture/pull/308) feat(android)!: remove unnecessary permissions
* [GH-280](https://github.com/apache/cordova-plugin-media-capture/pull/280) feat(android)!: remove RECORD_AUDIO permission not requested at runtime
* [GH-295](https://github.com/apache/cordova-plugin-media-capture/pull/295) fix(android)!: remove broad media permissions

**Features:**

* [GH-281](https://github.com/apache/cordova-plugin-media-capture/pull/281) feat(android): Field 'storagePermissions' may be 'final'

**Fixes:**

* [GH-307](https://github.com/apache/cordova-plugin-media-capture/pull/307) fix(android): Remove usage of Media Store queries
* [GH-302](https://github.com/apache/cordova-plugin-media-capture/pull/302) fix(android): save media capture to File Provider

**Chores, Refactoring, CI:**

* [GH-306](https://github.com/apache/cordova-plugin-media-capture/pull/306) chore: upgrade eslint config and rolled dependencies
* [GH-305](https://github.com/apache/cordova-plugin-media-capture/pull/305) chore: npmrc
* [GH-284](https://github.com/apache/cordova-plugin-media-capture/pull/284) chore: update asf config
* [GH-309](https://github.com/apache/cordova-plugin-media-capture/pull/309) refactor(android): cleanup unused or obsolete code
* [GH-304](https://github.com/apache/cordova-plugin-media-capture/pull/304) ci(ios): update workflow environment
* [GH-301](https://github.com/apache/cordova-plugin-media-capture/pull/301) ci: sync workflow w/ paramedic
