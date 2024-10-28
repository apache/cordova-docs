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

* [cordova-plugin-file@8.1.2](https://www.npmjs.com/package/cordova-plugin-file)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-file
cordova plugin add cordova-plugin-file@8.1.2
```

## Release Highlights

This patch is a regression fix. To see [8.1.1](https://cordova.apache.org/announcements/2024/10/23/cordova-plugin-file-8.1.1.html) higlights for full details.

In 8.1.1, the `FileEntry.toURL()` method broke when used on any `file://` that didn't lead to the app's internal assets on Android. This is now corrected.

This bug didn't effect iOS devices.

Please report any issues you find by following the this [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
# Changes include:

**Fixes:**
* [GH-640](https://github.com/apache/cordova-plugin-file/pull/640) fix(android): Regression breaking resolved DOM-usable file:// paths (#640)
