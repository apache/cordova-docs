---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "How To Use 'WKWebViewOnly'"
categories: howto
tags: ios
---

Apple started to reject apps with UIWebView references. The next major version of cordova-ios will contain no usage of UIWebView. You might need to update your app to fix this before the next version is released and this post sums up the required steps.

This should solve the warning after uploading the app to App Store connect:

> ITMS-90809: Deprecated API Usage - Apple will stop accepting submissions of apps that use UIWebView APIs.

A new so called build flag `WKWebViewOnly` was introduced some versions ago to remove all UIWebView references from Cordovas code at build time.

<!--more-->

## Use a WKWebView plugin.

The following example uses the cordova-plugin-wkwebview-engine plugin:

* Add plugin cordova-plugin-wkwebview-engine, preferably the latest version 1.2.1
* Add preference attribute CordovaWebViewEngine to the config.xml.
* Add feature attribute CDVWKWebViewEngine to the config.xml.
* Add preference `WKWebViewOnly` to the config.xml.

Example config.xml with cordova-plugin-wkwebview-engine plugin

```xml
<platform name="ios">
    <preference name="WKWebViewOnly" value="true" />

    <feature name="CDVWKWebViewEngine">
        <param name="ios-package" value="CDVWKWebViewEngine" />
    </feature>

    <preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />
</platform>
```

## Still getting the warning?
If you are still getting the warning, most likely a plugin that you are using still references UIWebView. You will need to identify which plugin and contact the plugin developers on their support channel (plugin's repo) and request them to fix it. They can either remove the references or make use of this flag to wrap the references.

## Using other WKWebView plugin

There are alternatives to the official WKWebView plugin from the examples above. Make sure they are updated and you use the latest version. If you have any issue or usage questions with these plugins. Read their docs and request help from their support channels.



