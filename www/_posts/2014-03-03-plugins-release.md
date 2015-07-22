---
layout: post
author:
    name: Andrew Grieve
    url: https://twitter.com/GrieveAndrew
title:  "Plugins Release: March 3, 2014"
categories: news
tags: release plugins
---
The following plugins were updated today:

* org.apache.cordova.camera@0.2.8
* org.apache.cordova.contacts@0.2.9
* org.apache.cordova.file@1.0.1
* org.apache.cordova.file-transfer@0.4.2
* org.apache.cordova.inappbrowser@0.3.2
* org.apache.cordova.media@0.2.9
* org.apache.cordova.media-capture@0.2.8

Notable changes include:
* Several bugfixes to the recently overhauled `file` plugin
* Fixed the default value of `file-transfer` trustAllHosts on iOS (was true, is now false)
* Prevent malicious code within an `inappbrowser` on iOS being able to run code within the host UIWebView

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

E.g. To update your file plugin:

    cordova plugin rm org.apache.cordova.file
    cordova plugin add org.apache.cordova.file

Other changes include:
<!--more-->

`org.apache.cordova.camera@0.2.8`
* [CB-1826](https://issues.apache.org/jira/browse/CB-1826) Catch OOM on gallery image resize

`org.apache.cordova.contacts@0.2.9`
* [CB-6086](https://issues.apache.org/jira/browse/CB-6086) Fix typo in FxOS part of plugin.xml: Camera -> Contacts
* [CB-5994](https://issues.apache.org/jira/browse/CB-5994) Switch Contact ID lookup to use Raw contact id.

`org.apache.cordova.file@1.0.1`
* [CB-6116](https://issues.apache.org/jira/browse/CB-6116) Fix error where resolveLocalFileSystemURL would fail
* [CB-6106](https://issues.apache.org/jira/browse/CB-6106) Add support for nativeURL attribute on Entry objects
* [CB-6110](https://issues.apache.org/jira/browse/CB-6110) iOS: Fix typo in filesystemPathForURL: method
* Android: Use most specific FS match when resolving file: URIs
* iOS: Update fileSystemURLforLocalPath: to return the most match url.
* Allow third-party plugin registration, and the total count of fs type is not limited to just 4.
* [CB-6097](https://issues.apache.org/jira/browse/CB-6097) Added missing files for amazon-fireos platform. Added onLoad flag to true.
* [CB-6087](https://issues.apache.org/jira/browse/CB-6087) Android, iOS: Load file plugin on startup
* [CB-6013](https://issues.apache.org/jira/browse/CB-6013) BlackBerry10: wrap webkit prefixed called in requestAnimationFrame
* Update plugin writers' documentation
* [CB-6080](https://issues.apache.org/jira/browse/CB-6080) Fix file copy when src and dst are on different local file systems
* [CB-6057](https://issues.apache.org/jira/browse/CB-6057) Add methods for plugins to convert between URLs and paths
* [CB-6050](https://issues.apache.org/jira/browse/CB-6050) Public method for returning a FileEntry from a device file path
* [CB-2432](https://issues.apache.org/jira/browse/CB-2432) [CB-3185](https://issues.apache.org/jira/browse/CB-3185), [CB-5975](https://issues.apache.org/jira/browse/CB-5975): Fix Android handling of content:// URLs
* [CB-6022](https://issues.apache.org/jira/browse/CB-6022) Add upgrade notes to doc
* [CB-5233](https://issues.apache.org/jira/browse/CB-5233) Make asset-library urls work properly on iOS
* [CB-6012](https://issues.apache.org/jira/browse/CB-6012) Preserve query strings on cdvfile:// URLs where necessary
* [CB-6010](https://issues.apache.org/jira/browse/CB-6010) Test properly for presence of URLforFilesystemPath method
* [CB-5959](https://issues.apache.org/jira/browse/CB-5959) Entry.getMetadata should return size attribute

`org.apache.cordova.file-transfer@0.4.2`
* [CB-6106](https://issues.apache.org/jira/browse/CB-6106) Ensure that nativeURL is used by file transfer download
* iOS: Fix default value for trustAllHosts on iOS (YES->NO)
* [CB-6059](https://issues.apache.org/jira/browse/CB-6059) iOS: Stop FileTransfer.download doing IO on the UI thread
* [CB-5588](https://issues.apache.org/jira/browse/CB-5588) iOS: Add response headers to upload result
* [CB-2190](https://issues.apache.org/jira/browse/CB-2190) iOS: Make backgroundTaskId apply to downloads as well. Move backgroundTaskId to the delegate.
* [CB-6050](https://issues.apache.org/jira/browse/CB-6050) Android: Use instance method on actual file plugin object to get FileEntry to return on download
* [CB-6000](https://issues.apache.org/jira/browse/CB-6000) Android: Nginx rejects Content-Type without a space before "boundary".
* [CB-6022](https://issues.apache.org/jira/browse/CB-6022) Add backwards-compatibility notes to doc

`org.apache.cordova.inappbrowser@0.3.2`
* Validate that callbackId is correctly formed
* [CB-6035](https://issues.apache.org/jira/browse/CB-6035) Move js-module so it is not loaded on unsupported platforms
* Removed some iOS6 Deprecations

`org.apache.cordova.media@0.2.9`
* [CB-6051](https://issues.apache.org/jira/browse/CB-6051) Update media plugin to work with new cdvfile:// urls
* [CB-5748](https://issues.apache.org/jira/browse/CB-5748) Make sure that Media.onStatus is called when recording is started.

`org.apache.cordova.media-capture@0.2.8`
* [CB-5202](https://issues.apache.org/jira/browse/CB-5202) Fix video capture crash on Android 4.3+


