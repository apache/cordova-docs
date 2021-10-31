---
layout: post
author:
    name: Bryan Ellis
title:  "Template 6.0.0 Released!"
categories: news
tags: release template
---

We are happy to announce that we have just released a major update to our template!

* [cordova-app-hello-world@6.0.0](https://www.npmjs.com/package/cordova-app-hello-world)

## Release Highlights

In this release, we have removed the deprecated `cordova-plugin-whitelist` from the default template. The functionality of the plugin was integrated into the core of Cordova Android since version 10.0.0.

If you create a new Cordova project and use an older version of Cordova Android (<10), you will need to add the `cordova-plugin-whitelist` plugin.

Additionally, Cordova has removed the excessive `access` and `allow-intent` settings from the default `config.xml` file. Previously, the default template assumed what defaults users needed, but not all user apps required these settings.

Removing these excessive defaults will help promote a more secure application by default, reduce the default project configurations to a bare minimum, and promote an opt-in approach for defining access permissions.

Existing projects are not affected by these changes. The default template is used only during the initial project creation.

<!--more-->
# Changes include:

* [GH-73](https://github.com/apache/cordova-app-hello-world/pull/73) cleanup!(`config.xml`): simplify defaults
* [GH-67](https://github.com/apache/cordova-app-hello-world/pull/67) chore(ios): remove `gap` from CSP
* [GH-66](https://github.com/apache/cordova-app-hello-world/pull/66) chore!: remove whitelist plugin & reference
