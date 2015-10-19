---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Cordova Plugins Registry becomes immutable"
categories: news
tags: announcement
---
Starting today, [plugins.cordova.io](http://50.17.177.14/) has become immutable. Plugin authors are encouraged to move their plugins over to [npm](http://npmjs.org) if they haven't already. Plugin authors should checkout our guide to transition over to npm [here](http://cordova.apache.org/plugins/authors.html).

Users can start searching for cordova plugins which have moved over to npm on our new [cordova npm search page](http://cordova.apache.org/plugins/).

Cordova CLI version 5.0.0 or higher is required to fetch plugins from npm. If you want to use the latest releases of plugins, please update your version of Cordova. Alternatively, older cli users can add plugins via git urls. Example:

    cordova plugin add https://github.com/apache/cordova-plugin-camera.git

Make sure to checkout our previous blog post about [moving plugins to npm](http://cordova.apache.org/announcements/2015/04/21/plugins-release-and-move-to-npm.html) if you missed it the first time around.
