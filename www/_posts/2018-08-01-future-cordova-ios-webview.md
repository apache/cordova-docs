---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Breaking changes coming to the iOS WebView in Apache Cordova"
categories: news
tags: cordova-ios uiwebview wkwebview webview roadmap
---

With the announcement of the iOS 12 beta SDK at Apple’s WWDC 2018, came the news that UIWebView, the webview originally bundled with the first iOS SDK, has been [deprecated](https://developer.apple.com/documentation/uikit/uiwebview). What this means for iOS developers is that sometime in the future, Apple will remove UIWebView from their SDK, and developers should migrate to using the WKWebView component starting right now.

## WebView Engine Plugins

Cordova iOS, starting with version 4, has anticipated this by moving the webview that is used by the platform into a plugin. The default webview that is used is still UIWebView, but you had the option to use WKWebView instead, with the [cordova-plugin-wkwebview-engine](https://github.com/apache/cordova-plugin-wkwebview-engine) plugin. Both the UIWebView and WKWebView webviews are plugins themselves, with the former included in the cordova-ios platform.

![Figure 1]({{ site.baseurl }}/static/img/blog/2018/arch-webview-engine.png)

## Future Cordova iOS with WKWebView

Starting with a future Cordova iOS release, we will ship both webview plugins with the cordova-ios platform, to enable developers to test and transition users to the new WKWebView component. This future Cordova iOS version will ship with a bridge webview plugin that can switch usage of the webview plugin used at runtime. Previously, you could only choose which webview you would use at build time.

![Figure 2]({{ site.baseurl }}/static/img/blog/2018/bridge-webview-engine.png)

<!--more-->

## Migration and Transition using the Bridge WebView Plugin

The developer can switch the webview used by setting a preference, that will be read at runtime when the app starts. Developers can transition users to the new WKWebView by user choice, in their app settings -- or randomly perhaps as an A/B test. This will give the developer and their users a chance to try out the new component, and they can back out and use UIWebView if there are any problems, without needing a new app release. This is intended to be used for testing and migration purposes only -- developers should aim to support only WKWebView functionality going forward.

## Cordova iOS Future Release, WKWebView only

When UIWebView support has been removed in a future iOS SDK, we will aim to release a future Cordova iOS version, which will remove UIWebView support, and WKWebView will then be the default webview engine.

| Cordova iOS 4 >>> | Future Cordova iOS >>> | "More Future" Cordova iOS |
|-------------------|-------------------|---------------|
|  | UIWebView deprecated | UIWebView removed |
|  | WKWebView Engine Plugin Integrated Into Platform | WKWebView Engine Plugin only |
|  | Bridge WebView Plugin Added | Bridge WebView Plugin Removed |


## Limitations of WKWebView

There are [many limitations](https://mjtsai.com/blog/2018/06/20/webview-and-uiwebview-deprecated-in-favor-of-wkwebview/) of WKWebview, especially if you were using UIWebView previously. The limitations are:

1. Cookies don't persist. This is a WebKit bug, but someone has
created a plugin for a workaround. See
[CB-12074](https://issues.apache.org/jira/browse/CB-12074)
2. Can't delete cookies. This is/was a WebKit bug (2015), we need to test
for the iOS 11/12. See [CB-11297](https://issues.apache.org/jira/browse/CB-11297)
3. Can't execute JavaScript code in the background. There are several
issues related to this. See
[CB-12815](https://issues.apache.org/jira/browse/CB-12815)
4. XmlHttpRequests don't work, because of Cross-Origin Resource
Sharing issue (CORS). There is a workaround plugin created by Oracle
(UPL licensed, which is Apache-2.0 compatible). See
[CB-10143](https://issues.apache.org/jira/browse/CB-10143)
5. Migration of localStorage from UIWebView. There is a migration
plugin available. See [CB-11974](https://issues.apache.org/jira/browse/CB-11974)
6. iframes will not be supported any longer (they are now CORS restricted in WKWebView), and may be partially or completely broken. This may lead to incompatibilities with the same code in other Cordova platforms.
7. Known issues with WKWebView on iOS pre-11 which will be deprecated and dropped in a future Cordova release

There are several bugs that need to be resolved as well. The full list
here: [https://s.apache.org/QfsF](https://s.apache.org/QfsF)

As you can see, WKWebView is not a direct drop-in replacement for UIWebView, you will need several plugins to patch functionality that is missing. There is also the [local-webserver experimental plugin option](https://github.com/apache/cordova-plugins/tree/wkwebview-engine-localhost), which will not be graduated to a full plugin -- we will concentrate our efforts on supporting the main WKWebView engine plugin. 

Hopefully with more testing, and filing of bug reports with Apple for missing features, the WKWebView can be a full replacement for Cordova users.

---
**UPDATE 2019-02-16**: This blog post has been updated to remove references to these changes going to be included in Cordova iOS 5, as [Cordova iOS 5 was released](https://cordova.apache.org/announcements/2019/02/09/cordova-ios-release-5.0.0.html) without them and the planned implementation has been moved to a future release of Cordova iOS.



