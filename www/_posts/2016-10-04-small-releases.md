---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Minor Releases"
categories: news
tags: release plugins tools
---

The following were recently released:

* cordova-plugin-geolocation: 2.4.0
* cordova-create: 1.0.1
* cordova-app-hello-world: 3.11.0

**Google** recently sent out warnings to everyone who uses `cordova-plugin-geolocation` about having to include `android.hardware.location.gps` to their `AndroidManifest.xml`. We updated `cordova-plugin-geolocation` plugin to auto add this setting to your project's `AndroidManifest.xml` when installing the plugin. This means that the geolocation plugin will only work on **android** devices that have a `GPS`. Let us know if this restriction affects you negatively. 

Release Highlights:
* `cordova-app-hello-world`: Updated default `CSP` to include `img-src` and add `content:` to it for [CB-4078](https://issues.apache.org/jira/browse/CB-4078)

----
You can update any plugin by removing it, and then re-adding it.

 E.g. To update your geolocation plugin:

    cordova plugin rm cordova-plugin-geolocation --save
    cordova plugin add cordova-plugin-geolocation@latest --save

Changes include:
<!--more-->

cordova-plugin-geolocation@2.4.0
* **Ubuntu** Fix altitude & accuracies retrieval
* [CB-11875](https://issues.apache.org/jira/browse/CB-11875) added `android.hardware.location.gps` `uses-feature`.

cordova-create@1.0.1
* removed stripping eventlisteners

cordova-app-hello-world@3.11.0
* [CB-11938](https://issues.apache.org/jira/browse/CB-11938) updated `csp` to include `content:` for `img-src`
* [CB-11412](https://issues.apache.org/jira/browse/CB-11412) Update templates to designate template source dir
* [CB-10522](https://issues.apache.org/jira/browse/CB-10522) Event binding in Hello World is misleading
