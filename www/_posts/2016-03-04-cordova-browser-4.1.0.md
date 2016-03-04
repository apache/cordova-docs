---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-kotikov
title:  "Cordova Browser 4.1.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Browser 4.1.0` has been released. It will be the default **Browser** version after the next `cordova-cli` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update browser@4.1.0

To add it explicitly:

    cordova platform add browser@4.1.0

<!--more-->
## What's new in Browser platform

* [CB-10755](https://issues.apache.org/jira/browse/CB-10788) Updated checked in node_modules
* [CB-10650](https://issues.apache.org/jira/browse/CB-10650) Non-index content.src causes Splashscreen to be not displayed on browser
* [CB-9836](https://issues.apache.org/jira/browse/CB-9836) Add .gitattributes to prevent CRLF line endings in repos
* [CB-9669](https://issues.apache.org/jira/browse/CB-9669) Browser exec should have more failsafes 
* Update to use new 'express' implementation of cordova-serve.
* [CB-9658](https://issues.apache.org/jira/browse/CB-9658) Improve 'cordova run browser' when browser not installed.
* [CB-9654](https://issues.apache.org/jira/browse/CB-9654) 'cordova run browser' -> duplicate 'CTRL + C' messages.
