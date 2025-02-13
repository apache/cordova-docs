---
layout: post
author:
    name: Norman Breau
    url: https://breautek.com
title:  "File Plugin 8.1.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released an update for `cordova-plugin-file`!

* [cordova-plugin-file@8.1.1](https://www.npmjs.com/package/cordova-plugin-file)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-file
cordova plugin add cordova-plugin-file@8.1.1
```

## Release Highlights

For Android, we corrected an issue that prevented `.toURL()` to be used on `content://` file entries. Now `.toURL()` will return a DOM-usable url on both `file://` and `content://` file entries.

This will be important for upcoming releases planned for the Camera plugin.

Note that the `AndroidInsecureFileModeEnabled` preference must be off. If `AndroidInsecureFileModeEnabled` preference is turned on, then `.toURL()` will return the underlying URL and modern Android devices will reject `content://` file paths. If your project is still using `AndroidInsecureFileModeEnabled` it is time to strongly consider migrating to schemes by turning the `AndroidInsecureFileModeEnabled` preference off.

By default, the `AndroidInsecureFileModeEnabled` preference is disabled. If your project does not explicitly enable it, then no action is required.

For iOS, there are no changes.

_Edit (2024-10-28)_: This patch introduces a regression on Android platforms when resolving `.toURL()` on some `file://` URIs. Please use upgrade to `cordova-plugin-file@8.1.2` instead.

Please report any issues you find by following the this [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
# Changes include:

**Fixes:**
* [GH-629](https://github.com/apache/cordova-plugin-file/pull/629) fix(android): Content FS support in PathHandler (#629)

**Documentation:**
* [GH-639](https://github.com/apache/cordova-plugin-file/pull/639) docs: Correct onwriteend to onwrite (#639)
* [GH-628](https://github.com/apache/cordova-plugin-file/pull/638) docs: Reformatting specs (#638)
