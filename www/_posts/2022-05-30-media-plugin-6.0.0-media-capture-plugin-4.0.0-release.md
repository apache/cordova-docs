---
layout: post
author:
    name: Bryan Ellis
title:  "Media Plugin 6.0.0 & Media Capture Plugin 4.0.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-media` & `cordova-plugin-media-capture`!

* [cordova-plugin-media@6.0.0](https://www.npmjs.com/package/cordova-plugin-media)
* [cordova-plugin-media-capture@4.0.0](https://www.npmjs.com/package/cordova-plugin-media-capture)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-media
cordova plugin add cordova-plugin-media@6.0.0

cordova plugin remove cordova-plugin-media-capture
cordova plugin add cordova-plugin-media-capture@4.0.0
```

## Release Highlights

### `cordova-plugin-media`

For Android, the `WRITE_EXTERNAL_STORAGE` and `READ_PHONE_STATE` permissions have a protection level of dangerous. Because of this, we removed the declaration of these permissions.

The `cordova-plugin-file` dependency was updated to use version `^7.0.0`.

The `setRate` functionality, which was previously only supported on the iOS platform, is now supported on the Android platform. There was also a fix around this functionality for iOS.

### `cordova-plugin-media-capture`

For Android, the `RECORD_VIDEO` permission definition was removed as it was never used and appears to never exist.

The `cordova-plugin-file` dependency was updated to use version `^7.0.0`.

Permission checks, for Android, has been unified to fix inconsistencies between the different capture methods. 

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-plugin-media

* [GH-344](https://github.com/apache/cordova-plugin-media/pull/344) feat(android): drop `WRITE_EXTERNAL_STORAGE` permission
* [GH-195](https://github.com/apache/cordova-plugin-media/pull/195) feat(ios): Add error call for `stalled_playback`
* [GH-341](https://github.com/apache/cordova-plugin-media/pull/341) feat(android): add `setRate`
* [GH-340](https://github.com/apache/cordova-plugin-media/pull/340) fix(ios): set rate with current playback rate
* [GH-197](https://github.com/apache/cordova-plugin-media/pull/197) feat: add `durationUpdate` callback
* [GH-232](https://github.com/apache/cordova-plugin-media/pull/232) fix(android): remove `READ_PHONE_STATE` permission
* [GH-285](https://github.com/apache/cordova-plugin-media/pull/285) fix: remove deprecated platform code snippets
* [GH-338](https://github.com/apache/cordova-plugin-media/pull/338) fix: missing parenthesis from #328
* [GH-328](https://github.com/apache/cordova-plugin-media/pull/328) fix(android): issue #325
* [GH-334](https://github.com/apache/cordova-plugin-media/pull/334) dep!: bump `cordova-plugin-file@^7.0.0`
* [GH-337](https://github.com/apache/cordova-plugin-media/pull/337) chore: bump `cordovaDependencies` next next major cordova requirement
* [GH-336](https://github.com/apache/cordova-plugin-media/pull/336) chore: rebuilt `package-lock`

## cordova-plugin-media-capture

* [GH-238](https://github.com/apache/cordova-plugin-media-capture/pull/238) dep!: bump `cordova-plugin-file@^7.0.0`
* [GH-248](https://github.com/apache/cordova-plugin-media-capture/pull/248) test: remove `cordova-plugin-media` dependency
* [GH-247](https://github.com/apache/cordova-plugin-media-capture/pull/247) chore: bump `cordovaDependencies` next next major cordova requirement
* [GH-246](https://github.com/apache/cordova-plugin-media-capture/pull/246) chore: rebuilt `package-lock` w/ v2
* [GH-192](https://github.com/apache/cordova-plugin-media-capture/pull/192) fix(android): Unify and fix permission check
* [GH-231](https://github.com/apache/cordova-plugin-media-capture/pull/231) ci(ios): update workflow w/ **iOS** 15
* [GH-230](https://github.com/apache/cordova-plugin-media-capture/pull/230) ci: add `action-badge`
* [GH-229](https://github.com/apache/cordova-plugin-media-capture/pull/229) ci: remove `travis` & `appveyor`
* [GH-228](https://github.com/apache/cordova-plugin-media-capture/pull/228) ci: add `gh-actions` workflows
* [GH-200](https://github.com/apache/cordova-plugin-media-capture/pull/200) fix(android): remove unknown permission `android.permission.RECORD_VIDEO`
* [GH-203](https://github.com/apache/cordova-plugin-media-capture/pull/203) ci: add node-14.x to workflow
* [GH-193](https://github.com/apache/cordova-plugin-media-capture/pull/193) chore: clean up `package.json`
* [GH-177](https://github.com/apache/cordova-plugin-media-capture/pull/177) breaking(ios): remove code warnings
* [GH-180](https://github.com/apache/cordova-plugin-media-capture/pull/180) chore: adds `package-lock` file
* [GH-179](https://github.com/apache/cordova-plugin-media-capture/pull/179) refactor(eslint): use `cordova-eslint` /w fix
* [GH-178](https://github.com/apache/cordova-plugin-media-capture/pull/178) chore(npm): use short notation in `package.json`
* [GH-165](https://github.com/apache/cordova-plugin-media-capture/pull/165) ci: updates Node.js versions
* [GH-164](https://github.com/apache/cordova-plugin-media-capture/pull/164) chore(npm): improve ignore list
* [GH-161](https://github.com/apache/cordova-plugin-media-capture/pull/161) Small javadoc fix
