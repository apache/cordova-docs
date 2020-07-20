---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "UPDATED: How to handle the 'Deprecated API Usage - UIWebView' warning while uploading to the App Store"
categories: howto
tags: ios
---

We recently posted [instructions](/howto/2020/03/18/wkwebviewonly.html) how to update your apps to remove all `UIWebView` references, because Apple now rejects all apps using `UIWebView`.

We are talking about this warning:

> ITMS-90809: Deprecated API Usage - Apple will stop accepting submissions of apps that use UIWebView APIs.

Some things have changed and new versions of cordova-ios have been released since the last post.

<!--more-->

## Update cordova-ios to version 6.0.0 or newer

Please update to the latest `cordova-ios` version to get the best compatibility with recent iOS changes. As of this writing the current version is 6.1.0. Version 6.0.0 of cordova-ios moved `WKWebView` support into `cordova-ios` and removed `UIWebView` code. Due to this change, the `cordova-plugin-wkwebview-engine` plugin is obsolete and will not work with this release. If you have this plugin installed, it is safe to remove with `cordova plugin remove cordova-plugin-wkwebview-engine`.

Additionaly, `WKURLSchemeHandler` support has been introduced with this release. Serving your app content through a custom scheme fixes CORS issues that exist because of the strict security policies that `WKWebView` has applied to the `file` scheme. You can easily configure your Cordova project to use a custom scheme by setting the preference options `scheme` and `hostname` in the `config.xml` file. **Bear in mind that running your app with a custom URL scheme changes the origin of your web code and you will lose access to web storage, such as local storage, indexed DB, etc.**

```xml
<preference name="scheme" value="app" />
<preference name="hostname" value="localhost" />
```

It is important to know that with the introduction of `WKURLSchemeHandler`, iOS 10 support has been dropped.

## Still getting the warning?

If you are still getting the warning, it is most likely one or more plugins in your project still references `UIWebView`. You will need to identify which plugins contain `UIWebView` code and contact those plugin's developers through their support channel (for instance their plugin's repo). They will need to fix their plugins by either removing the references or wrap them with the new flag.

## Using other WKWebView plugin

The official Apache WKWebView plugin is no longer needed with these `cordova-ios` versions since `WKWebView` has been integrated and `UIWebView` is removed. There are other WKWebView plugins that can be used. Make sure they have been updated and use the latest version. If you have any issues or usage questions with their plugins, please read their docs and request help through their support channels.

## CORS issues

If you experience any CORS issues Cordova PMC member Norman Breau published a [post on his blog](https://breautek.com/2020/07/14/enabling-cors/) with a good explanation of CORS.

## Weview issues

If using a custom scheme, `WKWebView` won't allow to load file urls in img/video tags (nor fetch them, nor anything). `cordova-ios` added a helper method to convert file URLs to URLs that have the scheme and `WKWebView` can understand.

window.WkWebView.convertFilePath('your/file/path');
