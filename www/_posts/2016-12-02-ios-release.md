---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Cordova iOS 4.3.1"
categories: announcements
tags: news releases
---

We are happy to announce a patch version of `Cordova iOS 4.3.1` has been released!

<br />

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.3.1

To add it explicitly:

    cordova platform add ios@4.3.1

<!--more-->
## What's new in iOS

* [CB-12203](https://issues.apache.org/jira/browse/CB-12203) - Updated checked-in node_modules
* [CB-12190](https://issues.apache.org/jira/browse/CB-12190) - create.spec tests fail when a device is connected
* [CB-12155](https://issues.apache.org/jira/browse/CB-12155) - Create tests for launch storyboards
* [CB-12084](https://issues.apache.org/jira/browse/CB-12084) - Update project build settings & plist
* [CB-12130](https://issues.apache.org/jira/browse/CB-12130) - Launch storyboard images are not updated or cleaned
* [CB-11243](https://issues.apache.org/jira/browse/CB-11243) - target-device and deployment-target were being ignored
* [CB-12127](https://issues.apache.org/jira/browse/CB-12127) - Add buildFlag support in build.json
* [CB-12125](https://issues.apache.org/jira/browse/CB-12125) - Unable to emulate on iPad pro iOS 10
* [CB-12118](https://issues.apache.org/jira/browse/CB-12118) - Cordova run ios does not automatically deploy to device
* [CB-12049](https://issues.apache.org/jira/browse/CB-12049) - user-agent string has a unique number appended
* [CB-12098](https://issues.apache.org/jira/browse/CB-12098) - Update supportedInterfaceOrientations return type
* [CB-9762](https://issues.apache.org/jira/browse/CB-9762) - Fix mobilespec 'cordova build' exception.
* Updated bundled ios-sim to version 5.0.12

