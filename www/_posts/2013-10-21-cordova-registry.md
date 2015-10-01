---
layout: post
author:
    name: Max Woghiren
    url: http://www.maxwoghiren.com
title:  "Cordova's Plugin Registry"
categories: news
tags: plugin
---

Cordova 3.0 saw a major shift towards plugins.  As part of this shift, we're focusing on making plugins easy to use and, equally importantly, easy to discover.  App developers want to know what plugins are available to them, and plugin developers want their plugins to be visible to the community.

Our solution, which has been alluded to in previous posts, is the [Cordova plugin registry](http://plugins.cordova.io/).  Using the Cordova CLI, app developers can add plugins to their projects with a single command.

<!--more-->

From anywhere within an app's directory, plugins can be added to a project with

    cordova plugin add [PLUGIN_ID]

where PLUGIN_ID is the id (typically reverse-domain style) shown on the plugin registry website.  You can also download a specific version of a plugin:

    cordova plugin add [PLUGIN_ID]@[VERSION]

How do these plugins get there?  Using plugman, plugin developers can easily send their plugins out into the world to be discovered by app developers.

First, if you don't have a plugman account, you need to create one.

    plugman adduser

Then, you're free to publish!

    plugman publish [PATH_TO_YOUR_PLUGIN]

There's more you can do (such as search for a plugin by keyword)—you can find more information using `plugman --help`.

For general plugin development help, you can find a guide [here](http://cordova.apache.org/docs/en/3.1.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide).

All of Cordova's plugins (which were bundled with core Cordova prior to 3.0) can be found in the registry.

Also, there are already some third-party plugins available and ready to use.  Google has contributed multiple plugins to the registry, allowing app developers to use some [Chrome Apps APIs](http://developer.chrome.com/apps/api_index.html), such as identity and socket, in their Cordova applications.

Other great examples include an NFC plugin by Chariot Solutions, an iOS keychain plugin by prominent Cordova contributor Shazron Abdullah, and a spinner/loader plugin by Wizcorp—and the list keeps growing.

Cordova's new plugin registry makes it easier than ever to discover and contribute plugins.  Whether you want to peruse what's available or add to that list, check it out [here](http://plugins.cordova.io/)!
