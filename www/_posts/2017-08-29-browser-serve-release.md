---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Browser@5 & Cordova Serve@2 Released!"
categories: news
tags: release tools browser
---

We just released an update to `cordova-browser` and `cordova-serve`

* [cordova-browser@5.0.0](https://www.npmjs.org/package/cordova-browser)
* [cordova-serve@2.0.0](https://www.npmjs.org/package/cordova-serve)

Release Highlights:

* *cordova-browser:* Added `manifest.json` to browser projects. This enables basic Progressive Web App support
* *cordova-browser:* Implemented `PlatformApi`.
* *cordova-serve:* Removed Q dependency in favor of native javascript promises. 
* *cordova-serve:* Changed default behavior of which browser is launched during serve. Now the serve command will use the system default browser instead of opening a new instance of chrome. You can still pass in a specific target

To upgrade:

    cd my_project
    cordova platform update browser@5.0.0

To add it explicitly:

    cordova platform add browser@5.0.0

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-browser

* [CB-13214](https://issues.apache.org/jira/browse/CB-13214) Updated `cordova-serve` dependency to 2.0.0. `cordova serve` command now opens system default browser instead of a new instance of `chrome`. A specific target can still be passed in. 
* [CB-13214](https://issues.apache.org/jira/browse/CB-13214) Updated checked-in `node_modules`
* [CB-13188](https://issues.apache.org/jira/browse/CB-13188) fixed issues with run and build scripts. 
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895): set up `eslint` and remove `jshint`
* [CB-11181](https://issues.apache.org/jira/browse/CB-11181) add default favicon
* [CB-11710](https://issues.apache.org/jira/browse/CB-11710) Add missing 'clean.bat' file
* remove old `xhr-activex` **Windows** code, update to use `pagevisibility` instead of `webkitpagevisibility`
* [CB-12804](https://issues.apache.org/jira/browse/CB-12804): `manifest.json` added to **Browser** during create. Adding basic PWA support
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) Point repo items to github mirrors
* [CB-12617](https://issues.apache.org/jira/browse/CB-12617) : removed node 0.x support and added engineStrict. This closes #27
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.
* [CB-12527](https://issues.apache.org/jira/browse/CB-12527) large refactor. Implemented `PlatformApi`
* [CB-12114](https://issues.apache.org/jira/browse/CB-12114) added travis and appveyor files
* Add github pull request template

## cordova-serve

* [CB-13188](https://issues.apache.org/jira/browse/CB-13188) set serve to use default system browser if none is provided.
* Change to `eslint` instead of `jshint`
* remove `q` dependence completely. Added `server.spec`
* added browser tests
* Convert `src/browser` to use Promise api
* Add License, Contributing, Notice, pr-template, etc
* [CB-12785](https://issues.apache.org/jira/browse/CB-12785) added travis and appveyor
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762): updated common, fetch, and serve pkgJson to point pkgJson repo items to github mirrors
* [CB-12665](https://issues.apache.org/jira/browse/CB-12665) removed enginestrict since it is deprecated
* [CB-11977](https://issues.apache.org/jira/browse/CB-11977): updated engines and enginescript for common, fetch, and serve
