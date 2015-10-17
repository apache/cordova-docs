---
layout: post
author:
    name: Ian Clelland
    url: https://twitter.com/iclelland
title:  "Apache Cordova Android 3.5.1 Update"
categories: announcements
tags: news releases security
---

On Monday, we released Cordova Android 3.5.1, to address a couple of security issues. Afterwards, talking with the original researchers, we realized that the text of the security announcement that went out wasn't quite right, so we've amended it.

You can read the amended blog post [here](http://cordova.apache.org/announcements/2014/08/04/android-351.html).

The issue in CVE-2014-3502 is that Cordova applications would, by default, pass any URLs that they couldn't load to the Android intent system for handling. This lets developers construct URLs that open email applications, maps, or send SMS messages, or even open web pages in the system browser, but it also allowed malicious URLs that could potentially open other applications on the device. This meant that if someone could execute their own JavaScript in your application, that they could use other applications on the device to "phone home" with the user's data. This is why we are recommending that all Android developers upgrade to Cordova 3.5.1.

<!--more-->

In order not to break existing applications, Cordova 3.5.1 disallows clearly malicious URLs, but will still open links like `sms:`, `mailto:`, or `geo:` in their default applications. (It is, after all, a useful feature, and there are many published applications which rely on that behaviour.) If you want to restrict that even further, you can use Cordova plugins to customize which URLs can be loaded, and which URLs will be blocked completely.

As a very simple example of this, I have published a sample plugin which blocks all external applications from loading. To use it, install it like

    cordova plugin add net.iclelland.external-app-block

or feel free to clone it from [GitHub](https://github.com/clelland/cordova-plugin-external-app-block) and tweak it to suit your needs.

We're hoping to have a more flexible solution built in to Cordova with the next release, but in the meantime, the plugin system is powerful enough to allow you to control this for your apps yourself.
