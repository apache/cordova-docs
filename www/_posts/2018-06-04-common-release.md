---
layout: post
author:
    name: Darryl Pogue
    url: https://twitter.com/dpogue
title:  "Cordova-Common Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-common 2.2.3` has been released. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like config.xml parsing.

## Release Highlights

The purpose of this release was primarily to bring some dependencies up to date, but there were also a handful of small bugfixes:

* [CB-13979](https://issues.apache.org/jira/browse/CB-13979) More consistency for `config.xml` lookups
* [CB-11691](https://issues.apache.org/jira/browse/CB-11691) Fix for modifying binary plists
* [CB-13770](https://issues.apache.org/jira/browse/CB-13770) Warn when `<edit-config>` or `<config-file>` not found
* [CB-13744](https://issues.apache.org/jira/browse/CB-13744) Recognize storyboards as XML files


## Deprecation Note

As NodeJS 4.x support ended on April 30<sup>th</sup>, 2018, we are proceeding with our [previously announced](http://cordova.apache.org/news/2016/10/01/0.x-4.x-deprecation-timeline.html) deprecation timeline.  This is probably the last release that will support NodeJS 4.x.
