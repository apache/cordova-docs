---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Browser@5.0.1 Released"
categories: news
tags: release tools browser
---

We just released an update to `cordova-browser`

* [cordova-browser@5.0.1](https://www.npmjs.org/package/cordova-browser)

Release Highlights:

* [CB-13228](https://issues.apache.org/jira/browse/CB-13228) Fixed issue with **Browser** not adding with cordova<7. 

To upgrade:

    cd my_project
    cordova platform update browser@5.0.1

To add it explicitly:

    cordova platform add browser@5.0.1

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-browser

* [CB-13228](https://issues.apache.org/jira/browse/CB-13228) Fixed issue with browser not adding with cordova<7. 
* [CB-13444](https://issues.apache.org/jira/browse/CB-13444) Updated checked-in `node_modules`
* [CB-13435](https://issues.apache.org/jira/browse/CB-13435) fix merges directory support for **Browser**
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) ignoring `cordova.js` for `eslint`
