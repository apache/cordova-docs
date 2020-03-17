---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "How To Use 'WKWebViewOnly'"
categories: howto
tags: ios
---

Apple started to reject apps with `UIWebView` references. You will need to update your app to fix this and this post sums up the required steps.

This should solve the warning after uploading the app to App Store connect:

> ITMS-90809: Deprecated API Usage - Apple will stop accepting submissions of apps that use UIWebView APIs.

A new `preference` flag `WKWebViewOnly` was introduced to remove all `UIWebView` references from Cordova's code during compile-time. It is recommended to upgrade the `cordova-ios` platform to version `5.1.1`.

<!--more-->

## Use a WKWebView plugin.

The following example uses the `[cordova-plugin-wkwebview-engine](https://github.com/apache/cordova-plugin-wkwebview-engine)` plugin:

* Add plugin `cordova-plugin-wkwebview-engine`, preferably the latest version **1.2.1**
* Add `preference` attribute `CordovaWebViewEngine` to the `config.xml`.
* Add `feature` attribute `CDVWKWebViewEngine` to the `config.xml`.
* Add `preference` `WKWebViewOnly` to the `config.xml`.

**Example `config.xml` with `cordova-plugin-wkwebview-engine` plugin**

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

If you are still getting the warning, it is most likely one or more plugins in your project are still references `UIWebView`. You will need to identify which plugins and contact those plugin's developers through their support channel (plugin's repo). They will need to fix their plugins by either remove the references or wrap them with the new flag.

## Using other WKWebView plugin

There are alternatives to the official WKWebView plugin from the examples above. Make sure they have been updated and use the latest version. If you have any issues or usage questions with their plugins, please read their docs and request help through their support channels.

## Future Roadmap

The next major release of `cordova-ios` will remove all references of `UIWebView` from code. The flag will also be removed in the next major release as `WKWebView` will be Cordova's default webview. There is currently *no ETA* for the next major release.


