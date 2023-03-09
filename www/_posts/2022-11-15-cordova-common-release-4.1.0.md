---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Common 4.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-common@4.1.0` has been released. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

The most notable improvement in this minor release is the ability to pass nearly all XML DOM element attributes to the platform's JS tooling. By passing down all attribute data, Cordova-Common no longer needs to be updated for adding and supporting new platform attributes.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-181](https://github.com/apache/cordova-common/pull/181) feat(PluginInfo): Allow XML Attributes to be passed through to core platforms
* [GH-158](https://github.com/apache/cordova-common/pull/158) fix(ConfigChanges): do not pass PlistValue to `xml_helpers.resolveParent`
* [GH-162](https://github.com/apache/cordova-common/pull/162) refactor(PlatformMunger): DRY & simplify config munging
* [GH-160](https://github.com/apache/cordova-common/pull/160) refactor(xml-helpers): document & check function signature types
* [GH-159](https://github.com/apache/cordova-common/pull/159) refactor(ConfigChanges): use for-of loop for iterating over array
* [GH-184](https://github.com/apache/cordova-common/pull/184) chore: rebuild package-lock.json
* [GH-176](https://github.com/apache/cordova-common/pull/176) chore(npm): rebuilt package-lock to v2
* [GH-173](https://github.com/apache/cordova-common/pull/173) chore: npmrc
* [GH-180](https://github.com/apache/cordova-common/pull/180) ci: Remove Node 10/12 from matrix. Added Node 16 and 18.
* [GH-150](https://github.com/apache/cordova-common/pull/150) ci: add node 14 to workflow
* [GH-161](https://github.com/apache/cordova-common/pull/161) test: fix invalid config for jasmine-spec-reporter
