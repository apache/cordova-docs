---
layout: post
author:
    name: David Barth
    url: https://twitter.com/dbarthc
title:  "Cordova Ubuntu 4.3.3"
categories: announcements
tags: news releases
---

`Cordova Ubuntu 4.3.3` has been released.

This is an important patch release, fixing a critical issue in the runtime. Developers are urged to update the Ubuntu platform support code of their app to this latest release immediately. This will ensure applications will continue to work with the latest Oxide 1.12 release in Ubuntu.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ubuntu@4.3.3

To add it explicitly:

    cordova platform add ubuntu@4.3.3

<!--more-->
## What's new in Cordova Ubuntu

* [CB-10470] Fix reliance on deprecated Oxide's onLoadingChanged signal
* Fix debugging enabled flag & remove webkit specific bit


