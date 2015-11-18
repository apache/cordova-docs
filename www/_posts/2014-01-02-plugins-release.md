---
layout: post
author:
    name: Andrew Grieve
    url: https://twitter.com/GrieveAndrew
title:  "Plugins Release: Jan 2, 2014"
categories: news
tags: release
---

The following plugins were updated today:

* org.apache.cordova.battery-status@0.2.6
* org.apache.cordova.camera@0.2.6
* org.apache.cordova.console@0.2.6
* org.apache.cordova.contacts@0.2.7
* org.apache.cordova.device-motion@0.2.5
* org.apache.cordova.device-orientation@0.3.4
* org.apache.cordova.device@0.2.6
* org.apache.cordova.dialogs@0.2.5
* org.apache.cordova.geolocation@0.3.5
* org.apache.cordova.globalization@0.2.5
* org.apache.cordova.inappbrowser@0.3.0
* org.apache.cordova.media@0.2.7
* org.apache.cordova.media-capture@0.2.6
* org.apache.cordova.network-information@0.2.6
* org.apache.cordova.splashscreen@0.2.6
* org.apache.cordova.vibration@0.3.6

With this release, documentation for plugins have moved from
[http://cordova.apache.org/docs](http://cordova.apache.org/docs) to the `doc/` directory
within plugins themselves. Eventually, docs will be available online through
[plugins.cordova.io](http://plugins.cordova.io). Until then, they will be viewable online
[via github](http://cordova.apache.org/docs/en/dev/cordova_plugins_pluginapis.md.html).

Aside from documentation, changes include:

<!--more-->

`org.apache.cordova.camera`

* [CB-2442](https://issues.apache.org/jira/browse/CB-2442) [CB-2419](https://issues.apache.org/jira/browse/CB-2419) Use Windows.Storage.ApplicationData.current.localFolder, instead of writing to app package.
* BlackBerry10: Adding platform level permissions
* [CB-5599](https://issues.apache.org/jira/browse/CB-5599) Android: Catch and ignore OutOfMemoryError in getRotatedBitmap()

`org.apache.cordova.device`

* [CB-5504](https://issues.apache.org/jira/browse/CB-5504) Moving Telephony Logic out of Device

`org.apache.cordova.dialogs`

* [CB-4696](https://issues.apache.org/jira/browse/CB-4696) Fix compile error for Xcode 4.5.
* [CB-3762](https://issues.apache.org/jira/browse/CB-3762) Change prompt default to empty string
* Move images from css/ to img/

`org.apache.cordova.geolocation`

* windows8: adds missing reference to PositionError (w/o it the app crashes)
* Removing incorrectly added closing comments for wp7 platform in `plugin.xml`

`org.apache.cordova.inappbrowser`

* [CB-5592](https://issues.apache.org/jira/browse/CB-5592) Android: Add MIME type to Intent when opening file:/// URLs
* [CB-5594](https://issues.apache.org/jira/browse/CB-5594) iOS: Add disallowoverscroll option.
* [CB-5595](https://issues.apache.org/jira/browse/CB-5595) Add toolbarposition=top option.
* Apply [CB-5193](https://issues.apache.org/jira/browse/CB-5193) to InAppBrowser (Fix DB quota exception)
* [CB-5593](https://issues.apache.org/jira/browse/CB-5593) iOS: Make InAppBrowser localizable
* [CB-5591](https://issues.apache.org/jira/browse/CB-5591) Change window.escape to encodeURIComponent

`org.apache.cordova.media`

* Adding READ_PHONE_STATE to the plugin permissions

`org.apache.cordova.media-capture`

* [CB-5569](https://issues.apache.org/jira/browse/CB-5569) windows8: MediaFile constructor does not exist
* [CB-5517](https://issues.apache.org/jira/browse/CB-5517) Fix the audio capture IO exception by putting it in a runnable

`org.apache.cordova.splashscreen`

* Handle error when splash image is missing.

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

E.g. To update your vibration plugin:

    cordova plugin rm org.apache.cordova.vibration
    cordova plugin add org.apache.cordova.vibration
