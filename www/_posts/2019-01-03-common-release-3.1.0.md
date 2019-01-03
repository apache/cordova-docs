---
layout: post
author:
    name: Chris Brody
    url: https://twitter.com/brodybits
title:  "Cordova-Common Release"
categories: news
tags: release tools
---

We are happy to announce that `cordova-common 3.1.0` was released in January 2019. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

The purpose of this release is to use real singleton objects as needed. Here are the major changes:

* Cordova events singleton object, using a real class ([#60](https://github.com/apache/cordova-common/pull/60))
* Refactor `CordovaLogger` to singleton class ([#53](https://github.com/apache/cordova-common/pull/53))

## cordova-common 3.0.0 release highlights

Here are the major changes from the `cordova-common 3.0.0` release which was not announced before:

* Add `PluginInfo.getPodSpecs` method ([#48](https://github.com/apache/cordova-common/pull/48))
* [CB-13685](https://issues.apache.org/jira/browse/CB-13685) **Android**: Update ConfigParser for Adaptive Icons ([#26](https://github.com/apache/cordova-common/pull/26))
* [CB-14099](https://issues.apache.org/jira/browse/CB-14099) **osx**: Fixed Resolve Config Path for OSX ([#32](https://github.com/apache/cordova-common/pull/32))
* [CB-14108](https://issues.apache.org/jira/browse/CB-14108) fix incorrect count in `config_munge` in `ios.json` and `android.json` ([#24](https://github.com/apache/cordova-common/pull/24))
* [CB-13496](https://issues.apache.org/jira/browse/CB-13496) Fix greedy regex in `plist_helpers` ([#45](https://github.com/apache/cordova-common/pull/45))
* [CB-12016](https://issues.apache.org/jira/browse/CB-12016) Removed `cordova-registry-mapper` dependency ([#33](https://github.com/apache/cordova-common/pull/33))
* [CB-14166](https://issues.apache.org/jira/browse/CB-14166) Use `cross-spawn` for platform-independent spawning ([#50](https://github.com/apache/cordova-common/pull/50))
* [CB-14064](https://issues.apache.org/jira/browse/CB-14064) Drop support for Node.js version 4 ([#15](https://github.com/apache/cordova-common/pull/15))
