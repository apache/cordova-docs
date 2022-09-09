---
layout: post
author:
    name: Bryan Ellis
title:  "Media Plugin 6.1.0 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-media`!

* [cordova-plugin-media@6.1.0](https://www.npmjs.com/package/cordova-plugin-media)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-media
cordova plugin add cordova-plugin-media@6.1.0
```

## Release Highlights

For Android, we updated the media error response object to include the "message" property. This property will provide additional information about the error. It also syncs in line with the media error response object that iOS returns.

For iOS, file scheme support has been implemented. Two fixes were applied to prevent crashes that occured when fetching the position while the time was not defined and to ensured that the category was defined after the recording was released.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-357](https://github.com/apache/cordova-plugin-media/pull/357) feat(android): add '`message`' field to media error [CB-11641](https://issues.apache.org/jira/browse/CB-11641)
* [GH-352](https://github.com/apache/cordova-plugin-media/pull/352) feat(ios): support `file` scheme
* [GH-354](https://github.com/apache/cordova-plugin-media/pull/354) fix(ios): Reset default audio session category when release ([CB-13243](https://issues.apache.org/jira/browse/CB-13243))
* [GH-353](https://github.com/apache/cordova-plugin-media/pull/353) fix(ios): error on `getPosition` when time is `nan`
