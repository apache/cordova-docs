---
layout: post
author:
    name: Norman Breau
    url: https://breautek.com
title:  "File Plugin 8.1.3 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released an update for `cordova-plugin-file`!

* [cordova-plugin-file@8.1.3](https://www.npmjs.com/package/cordova-plugin-file)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-file
cordova plugin add cordova-plugin-file@8.1.3
```

## Release Highlights

This patch fixes an issue with `FileEntry.toURL()` on iOS devices when the app 
is hosted through schemes. The intent for this API is to produce a URL that
can be used in the DOM, like image tags for example. However, iOS devices always
produced `file://` URIs which is not usable when the webview is configured to
use schemes.

Starting with 8.1.3, `FileEntry.toURL()` will produce an app-scheme URI if the
iOS webview is configured to use app schemes, or a `file://` uri otherwise.

This brings the behaviour closer to Android's implementation.

Please report any issues you find by following the [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
# Changes include:

**Fixes:**
* [GH-642](https://github.com/apache/cordova-plugin-file/pull/642) fix(ios): Entry.toURL() to produce DOM-usable uri when using scheme-hosted webview (#642)

**Tests:**
* [GH-643](https://github.com/apache/cordova-plugin-file/pull/643) fix(test): file.spec.131 moveTo may fail due to read order assumption (#643)

**Docs:**
* [GH-645](https://github.com/apache/cordova-plugin-file/pull/645) docs: Added upgrade notes to `README` for v8 (#645)

