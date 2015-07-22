---
layout: post
author:
    name: Bryan Higgins
    url: https://twitter.com/bryanhiggins
title:  "Apache Cordova BlackBerry 3.8.0"
categories: announcements
tags: news releases
---
We are happy to announce that `Cordova BlackBerry 3.8.0` has been released and will be the
default BlackBerry version after next `cordova-cli` release.

This release adds support for adding blackberry10 platform on any workstation OS, adds subdomain whitelisting and includes several bug fixes.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update blackberry10@3.8.0

To add it explicitly:

    cordova platform add blackberry10@3.8.0 --save

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/edge/guide_platforms_index.md.html).

<!--more-->
## What's new in the BlackBerry platform
* [CB-8306](https://issues.apache.org/jira/browse/CB-8306) Fix parseUri to handle http://foo/bar?a@b.com&whatever
* [CB-7807](https://issues.apache.org/jira/browse/CB-7807) Add BlackBerry10 platform to a project on any workstation OS
* [CB-8417](https://issues.apache.org/jira/browse/CB-8417) moved platform specific js into platform
* [CB-8417](https://issues.apache.org/jira/browse/CB-8417) renamed platform_modules into cordova-js-src
* [CB-8899](https://issues.apache.org/jira/browse/CB-8899) stick to grunt-jasmine-node@0.2.1
* [CB-9072](https://issues.apache.org/jira/browse/CB-9072) Fix exception logging in packager.js
* [CB-9010](https://issues.apache.org/jira/browse/CB-9010) Adds check_reqs implementation
* [CB-8941](https://issues.apache.org/jira/browse/CB-8941) Adds support for subdomain whitelisting
* [CB-6768](https://issues.apache.org/jira/browse/CB-6768) Handle icons outside of www/.
* [CB-9009](https://issues.apache.org/jira/browse/CB-9009) include http://localhost:8472 in Content-Security-Policy header
* [CB-6768](https://issues.apache.org/jira/browse/CB-6768) Default Icon is now copied into platform_www.
