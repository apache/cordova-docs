---
layout: post
author:
    name: Suraj Pindoria
    url: https://twitter.com/surajpindoria
title:  "Cordova iOS 4.5.1"
categories: announcements
tags: news releases
---

We are happy to announce a minor version of `Cordova iOS 4.5.1` has been released!

This version provides updates for the latest iOS 11 and Xcode 9. You can now create builds for this new version and properly deploy to either the emulator or device.

Things to note:

* For iPhone X's new screen size, you must use Launch Storyboards to take full advantage of it
* Current Splash Screen images will result in letterboxing

Apple has also made some changes that could effect your current apps, specifically around the viewport. Here are a few resources that could help with your transition to iOS 11:

1. [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
2. [Understanding the WebView Viewport in iOS 11](https://ayogo.com/blog/ios11-viewport/)
3. [Removing the White Bars in Safari on iPhone X](http://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/)

We are also aware that there are specific issues related to the Status Bar plugin. The team is working to resolve these for the next release of the plugin.

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.5.1

To add it explicitly:

    cordova platform add ios@4.5.1

<!--more-->
## What's new in iOS

* [CB-13310](https://issues.apache.org/jira/browse/CB-13310) Updated checked-in node_modules
* [CB-13191](https://issues.apache.org/jira/browse/CB-13191) (ios) Support marketing icon (#337)
* [CB-12888](https://issues.apache.org/jira/browse/CB-12888) - cordova emulate **iOS** doesn't work in **iOS** 11
