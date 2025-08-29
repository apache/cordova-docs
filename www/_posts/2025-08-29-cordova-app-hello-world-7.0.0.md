---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova App Hello World 7.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `cordova-app-hello-world@7.0.0` has been released. This is the default app template used when creating a new Cordova App project though Cordova CLI.

## Release Highlights

The most notable changes in this release were:

- Setting the `body` element's `box-sizing` to `border-box` to avoid the `safe-area-inset` padding that caused scrolling issues
- Disabled the `overscroll` behavior of the root element to remove rubber-banding effects.
- Used modern, unprefixed CSS directives.
- Updated default template's package ID to `org.apache.cordova.hellocordova`.

<!--more-->
# Changes include:

**Fixes:**

* [GH-98](https://github.com/apache/cordova-app-hello-world/pull/98) fix(css): Fix extra padding causing scrolling

**Chores:**

* [GH-99](https://github.com/apache/cordova-app-hello-world/pull/99) chore: updated defaults, license headers & added release audit workflow
* [GH-78](https://github.com/apache/cordova-app-hello-world/pull/78) chore: correct `access` inline comment
