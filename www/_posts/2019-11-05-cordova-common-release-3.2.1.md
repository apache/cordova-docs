---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Common 3.2.1 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-common 3.2.1` was released in November 2019. This is one of the libraries used behind-the-scenes by nearly all of the Cordova tooling and provides utilities for dealing with things like `config.xml` parsing.

## Release Highlights

The most notable changes in this patch release are:

* Added the `.jsproj` extension as an XML allowed extension to be editable by the `config-file` tag.
* Reverted [GH-24](https://github.com/apache/cordova-common/pull/24) which caused permissions, defined by the plugin's `plugin.xml`, not to be added.

<!--more-->
# Changes include:

* [GH-78](https://github.com/apache/cordova-common/pull/78) (windows) Add `.jsproj` as file extension for XML files ([GH-62](https://github.com/apache/cordova-common/pull/62))
* [GH-89](https://github.com/apache/cordova-common/pull/89) revert: ([GH-24](https://github.com/apache/cordova-common/pull/24)) [CB-14108](https://issues.apache.org/jira/browse/CB-14108) fix incorrect count in `config_munge`
* [GH-82](https://github.com/apache/cordova-common/pull/82) General cleanup with eslint updates
* [GH-86](https://github.com/apache/cordova-common/pull/86) eslint cleanup fixes: `operator-linebreak`
* [GH-81](https://github.com/apache/cordova-common/pull/81) remove `no-throw-literal` lint exception not needed
* [GH-83](https://github.com/apache/cordova-common/pull/83) Fix ESLint violations where applicable
* [GH-80](https://github.com/apache/cordova-common/pull/80) Update to jasmine 3.4 & fix resulting spec failures
* [GH-79](https://github.com/apache/cordova-common/pull/79) Promise handling cleanup in specs
* [GH-77](https://github.com/apache/cordova-common/pull/77) Do not ignore AppVeyor failures on Node.js 12
