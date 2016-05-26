---
layout: post
author:
    name: David Barth
    url: https://twitter.com/dbarthc
title:  "Cordova Ubuntu 4.3.4"
categories: announcements
tags: news releases
---

`Cordova Ubuntu 4.3.4` has been released.

This is a patch release, fixing bugs related to building and debugging Cordova apps targetting Ubuntu devices. See the changelog below for details.


To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ubuntu@4.3.4

To add it explicitly:

    cordova platform add ubuntu@4.3.4

<!--more-->
## What's new in Cordova Ubuntu

* fix build issue with function signature missing the cordova variable name; also avoid a warning
* use ubuntu-app-stop to stop the app more cleanly
* Update run devtools message
* tweak devtools url message
* Tweak debug launch
* Add app launch tweaks
* Improve debugging behavior; Add ip option

