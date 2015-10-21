---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "cordova-plugin-file-transfer release: September 21, 2015"
categories: news
tags: release plugins
---

A medium security issue was discovered for cordova-plugin-file-transfer plugin. We are releasing version `1.3.0` of `cordova-plugin-file-transfer` to address this security issue. We recommend that all applications currently using an older version of this plugin to upgrade as soon as possible.

----
You can update the plugin by removing it, and then re-adding it.

 E.g. To update your file-transfer plugin:

    cordova plugin rm cordova-plugin-file-transfer --save
    cordova plugin add cordova-plugin-file-transfer --save

The security issue is CVE-2015-5204.

For your convenience, the text of the CVE is included here:

<!--more-->

---
CVE-2015-5204: HTTP header injection vulerability in Apache Cordova File
Transfer Plugin for Android

Severity:
 Medium

Vendor:
 The Apache Software Foundation

Versions Affected:
 Cordova Android File Transfer Plugin  (1.2.1 and below)

Description:
 Android applications built with the Cordova framework that use the File
 Transfer Plugin can have the HTTP headers set by that plugin be manipulated
 by the filename being uploaded.  This allows for for cookies to be forged
 by the Cordova application, or for the file payload to be replaced in some
 situations.  Remotely hosted applications and applications developed with
 Cordova that allow the user to manually enter the filename are
 especially vulnerable to this issue.

Upgrade path:
 Developers who are concerned about this issue should install version 1.3.0
 or higher of the Cordova File Transfer Plugin and rebuild their
 applications.  This plugin now conforms with RFC-2616 and no longer allows
 non-ASCII characters and control characters in header names or values.
 Any non-ASCII
 characters will be removed from the header.  Developers should be aware,
 and encode these
 characters before adding the values to the header.

Credit:
 This issue was discovered by Muneaki Nishimura (Sony Digital Network Applications, Inc.)

***

cordova-plugin-file-transfer@1.3.0
* Found issue where : is accepted as a valid header, this is obviously wrong
* [CB-9562](https://issues.apache.org/jira/browse/CB-9562) Fixed incorrect headers handling on Android
* Fixing headers so they don't accept non-ASCII
* updated tests to use cordova apache vm
* [CB-9493](https://issues.apache.org/jira/browse/CB-9493) Fix file paths in file-transfer manual tests
* [CB-8816](https://issues.apache.org/jira/browse/CB-8816) Add cdvfile:// support on windows
* [CB-9376](https://issues.apache.org/jira/browse/CB-9376) Fix FileTransfer plugin manual tests issue - 'undefined' in paths
