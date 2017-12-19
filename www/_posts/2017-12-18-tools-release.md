---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Released!"
categories: news
tags: release tools
---

We just released an update to our tools!

* [cordova@8.0.0](https://www.npmjs.org/package/cordova)
* [cordova-lib@8.0.0](https://www.npmjs.org/package/cordova-lib)
* [cordova-plugman@2.0.0](https://www.npmjs.org/package/plugman)
* [cordova-fetch@1.3.0](https://www.npmjs.org/package/cordova-fetch)
* [cordova-common@2.2.1](https://www.npmjs.org/package/cordova-common)
* [cordova-create@1.1.2](https://www.npmjs.org/package/cordova-create)

## Release Highlights

* [CB-13056](https://issues.apache.org/jira/browse/CB-13056): removed support for **WebOS**, **BlackBerry10**, and **Ubuntu**
* [CB-13057](https://issues.apache.org/jira/browse/CB-13057): removed `cordova save` command. This command isn't needed as cordova auto saves dependencies.
* [CB-13055](https://issues.apache.org/jira/browse/CB-13055): removed `--nofetch` flag. Now all of our dependency fetching happens via `cordova-fetch`. This allowed us to drop the `npm@2` dependency we were shipping with cordova. Instead, we now just use your system `npm` to do all of our fetching. 

To update your cordova CLI:

    npm install -g cordova@latest

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-13057](https://issues.apache.org/jira/browse/CB-13057): removed `cordova save` command
* [CB-13056](https://issues.apache.org/jira/browse/CB-13056): removed support for **WebOS**, **BlackBerry10**, and **Ubuntu**
* [CB-13674](https://issues.apache.org/jira/browse/CB-13674): updated cordova dependencies
* [CB-13055](https://issues.apache.org/jira/browse/CB-13055): updated integration tests, removed `lazy_load.js`, removed `gitclone.js` and `--nofetch` flag. This removes the need for us to include an npm dependency.
* [CB-13463](https://issues.apache.org/jira/browse/CB-13463): prevent `package.json` updating plugins with `--nosave`

## cordova-cli

* [CB-13055](https://issues.apache.org/jira/browse/CB-13055): removed `--nofetch` flag
* Use native Promises instead of `Q`
* [CB-12853](https://issues.apache.org/jira/browse/CB-12853): re-check version before notifying.

## cordova-plugman

* [CB-13674](https://issues.apache.org/jira/browse/CB-13674): updated `cordova-lib` dependency to `8.0.0`
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762): pointed `package.json` repo items to github mirrors instead of apache repos site (#89)

## cordova-fetch

* [CB-13055](https://issues.apache.org/jira/browse/CB-13055): added workaround for when `jsonDiff` has more than one different key. 
* Support git shortlink package references

## cordova-common

* [CB-13674](https://issues.apache.org/jira/browse/CB-13674): updated dependencies

## cordova-create

* [CB-12807](https://issues.apache.org/jira/browse/CB-12807): updated error message to follow the template guide
