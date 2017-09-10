---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Cordova iOS 4.5.0"
categories: announcements
tags: news releases
---

We are happy to announce a minor version of `Cordova iOS 4.5.0` has been released!

Three new features were added:
1. [CB-12937](https://issues.apache.org/jira/browse/CB-12937) - Plugins can receive `handleOpenURLWithApplicationSourceAndAnnotation:` now (new selector, that sends the URL with additional metadata) 
2. [CB-13164](https://issues.apache.org/jira/browse/CB-13164) - Integrated cordova-plugin-console to build in support for window.console. 
3. [CB-10916](https://issues.apache.org/jira/browse/CB-10916) - Support [display name](/docs/en/dev/config_ref/index.html#name) for **iOS**

**Important!** If you have included `cordova-plugin-console` in your project, you must **remove** it, otherwise your project will not build.

If you ever needed to disable the built in console plugin, comment out or remove the `Console` `<feature>` tag in your platform specific `config.xml`, and/or call this right after the `deviceready` event:

    cordova.require('cordova/plugin/ios/logger').useLogger(false);

Other notable issues:

1. Updated `ios-deploy` dependency to v1.9.2, which contains a fix for Xcode 9
2. Updated the bundled `ios-sim` to v6.0.0 with support for newer iPads (and this fixes some related bugs)
3. New `<access>` tag attribute `allows-arbitrary-loads-for-media` (which reflects the correct App Transport Security value). The old attribute `allows-arbitrary-loads-in-media` is deprecated.
<br />

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.5.0

To add it explicitly:

    cordova platform add ios@4.5.0

<!--more-->
## What's new in iOS

* [CB-13247](https://issues.apache.org/jira/browse/CB-13247) updated checked-in node_modules
* [CB-13212](https://issues.apache.org/jira/browse/CB-13212) - Update `cordova-ios` with new cordova-common that parses new attribute for access tag
* [CB-13240](https://issues.apache.org/jira/browse/CB-13240) - Update **iOS**-deploy dependency to 1.9.2
* [CB-12830](https://issues.apache.org/jira/browse/CB-12830) - cordova emulate **iOS** with --target throws undefined error (#332)
* [CB-13210](https://issues.apache.org/jira/browse/CB-13210) - App Transport Security Key is wrong (#331)
* [CB-13164](https://issues.apache.org/jira/browse/CB-13164) fixed local require, updated cordova.js (#333)
* [CB-13222](https://issues.apache.org/jira/browse/CB-13222) - (iOS) Infinite Loop when a "NSURLErrorCancelled -999" is received on didFailLoadWithError (#334)
* [CB-12937](https://issues.apache.org/jira/browse/CB-12937) - (iOS) added new method handleOpenURLWithApplicationSourceAndAnno… (#321)
* [CB-13164](https://issues.apache.org/jira/browse/CB-13164) Integrated cordova-plugin-console to build in support for window.console. (#330)
* [CB-13112](https://issues.apache.org/jira/browse/CB-13112) - <resource-file> should not create a new file reference on each "cordova prepare" (#329)
* [CB-13093](https://issues.apache.org/jira/browse/CB-13093) (iOS) Infinite looping when stressing navigation (#328)
* [CB-12966](https://issues.apache.org/jira/browse/CB-12966) (ios) Fix bug by escaping project name in podfile template
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) : removed jshint and added eslint
* [CB-12960](https://issues.apache.org/jira/browse/CB-12960) Run tests on Node 4.x and 6.x This closes #323
* [CB-12948](https://issues.apache.org/jira/browse/CB-12948) - Add a warning to updateProject for **iOS**
* [CB-10916](https://issues.apache.org/jira/browse/CB-10916) Support display name for **iOS**
* [CB-12887](https://issues.apache.org/jira/browse/CB-12887) - cordova run --list does not show virtual devices in **iOS** 11
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) : point `package.json` repo items to github mirrors instead of apache repos site
* [CB-12675](https://issues.apache.org/jira/browse/CB-12675) - Travis xcode 8.3. os-x image fails an e2e test
* [CB-12869](https://issues.apache.org/jira/browse/CB-12869) - Update bundled **iOS**-sim to 6.0.0
* [CB-12856](https://issues.apache.org/jira/browse/CB-12856) - Skip CocoaPods check_reqs if on non-darwin (macOS) platform
* [CB-8980](https://issues.apache.org/jira/browse/CB-8980) Ensure copied resource-files are cleaned
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.
* Updated cordova-common to 2.1.0 and other bundled node_modules
