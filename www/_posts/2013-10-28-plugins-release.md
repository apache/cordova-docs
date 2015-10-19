---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "CLI, Plugman &amp; Plugins Release: Oct 28, 2013"
categories: news
tags: release
---

Today we are doing a plugins and tooling release in preparation for Cordova 3.2.0. Most notable changes include:

* Cordova CLI & Plugman have been refactored to use promises instead of callbacks
* [CB-5125](https://issues.apache.org/jira/browse/CB-5125) Replace shell.exec with child process spawn
* [CB-2234](https://issues.apache.org/jira/browse/CB-2234) Added cordova info command
* [CB-5128](https://issues.apache.org/jira/browse/CB-5128) Repo & Issue tags have been added to all of our core plugins plugin.xml file. This will allow us to display issue tracker and repo information on our registry.
* [CB-5184](https://issues.apache.org/jira/browse/CB-5184) Fix uninstall logic being too aggressive (plugman)
* Overhauled dependency uninstallation in regards to plugins (plugman)
* FirefoxOS support for device-motion, device-orientation and dialogs plugins.

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

<!--more-->

E.g. To update your version of the Cordova-CLI to 3.1.0-0.2.0:

    npm install -g cordova

E.g. To update your vibration plugin:

    cordova plugin rm org.apache.cordova.vibration
    cordova plugin add org.apache.cordova.vibration

E.g. To upgrade a 3.0 project (replace `android` with the platform you want to update):

    npm install -g cordova
    cd my_project
    cordova platform update android

*Notable Changes*

* [CB-5106](https://issues.apache.org/jira/browse/CB-5106) - Fix broken tests (Cordova-CLI)
* [CB-4958](https://issues.apache.org/jira/browse/CB-4958) - iOS - Camera plugin should not show the status bar (camera)
* [CB-5154](https://issues.apache.org/jira/browse/CB-5154) log formatting incorrectly to native (console)
* [CB-4825](https://issues.apache.org/jira/browse/CB-4825) use CoreMotion framework for accelerometer (device-motion)
* [CB-5129](https://issues.apache.org/jira/browse/CB-5129): Add a consistent filesystem attribute to FileEntry and DirectoryEntry objects (file)
* [CB-5015](https://issues.apache.org/jira/browse/CB-5015) BlackBerry10 Add missing dependency for File.slice (file)
* [CB-4995](https://issues.apache.org/jira/browse/CB-4995) Fix crash when WebView is quickly opened then closed (inappbrowser)
* [CB-4930](https://issues.apache.org/jira/browse/CB-4930) - iOS - InAppBrowser should take into account the status bar (inappbrowser)
* [CB-4858](https://issues.apache.org/jira/browse/CB-4858) Convert relative URLs to absolute URLs in JS (inappbrowser)
* [CB-3747](https://issues.apache.org/jira/browse/CB-3747) Fix back button having different dismiss logic from the close button. (inappbrowser)
* [CB-5021](https://issues.apache.org/jira/browse/CB-5021) Expose closeDialog() as a public function and make it safe to call multiple times. (inappbrowser)
* [CB-5199](https://issues.apache.org/jira/browse/CB-5199) - ios - Media Capture - UI issues under iOS 7 (media capture)

