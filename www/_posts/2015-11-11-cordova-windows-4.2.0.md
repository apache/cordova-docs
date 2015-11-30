---
layout: post
author:
    name: Sergey Grebnov
    url: https://twitter.com/sgrebnov
title:  "Apache Cordova Windows 4.2.0"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Windows 4.2.0` has been released!

This release adds support for **back button** handling on **Windows 10** and
**Windows Phone 8.1** and various other improvements. It will be the default
Windows version after the next `cordova-cli` release.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.2.0

To add it explicitly:

    cordova platform add windows@4.2.0

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->
## What's new in Windows

* [CB-8481](https://issues.apache.org/jira/browse/CB-8481) Add backbutton support on Windows 10 and Windows Phone 8.1
* [CB-9565](https://issues.apache.org/jira/browse/CB-9565) Fixed build failure for Windows 10 when using Node x64
* Changed output path of windows platforms to support cumulative build in VS
* Created new solution file for dev14 and renaming old to vs2013.sln
* [CB-9870](https://issues.apache.org/jira/browse/CB-9870) Updated hello world template
* Fixed internetClientServer capability name in prepare and docs
* [CB-9800](https://issues.apache.org/jira/browse/CB-9800) Fixing contribute link
* [CB-9836](https://issues.apache.org/jira/browse/CB-9836) Add .gitattributes to prevent CRLF line endings in repos
* [CB-9632](https://issues.apache.org/jira/browse/CB-9632) Fixed tests not to fail on Travis-CI
* [CB-8936](https://issues.apache.org/jira/browse/CB-8936) Introduced --dump arg to log script
* Fix the case of Q requires
* Fixed up "resport" to "report"
* Adds Travis badge
