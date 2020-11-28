---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Allow List Guide
toc_title: Allow List
description: Securely grant an application access to external resources.
---

# Allow List Guide

Domain allow listing is a security model that controls access to external domains over which your application has no control. Cordova provides a configurable security policy to define which external sites may be accessed.

By default, new apps are configured to allow access to any site. Before moving your application to production, you should formulate an allow list to provide access to specific network domains and subdomains.

While it is possible to implement your own allow list plugin, it is not recommended unless your app needs a very specific security policy.

## Network Request Allow List

Cordova adheres to the [W3C Widget Access][1] specification, which relies on the `<access>` element within the app's `config.xml` file, which is located in the project's top-level directory.

This controls which network requests (images, XHRs, etc) are allowed to be made to specific domains (via cordova native hooks).

Note: It is suggested to use a [Content Security Policy (CSP)](#Content-Security-Policy-(CSP)) (see below), which is more secure. This network request allow list is mostly historical for webviews which do not support CSP.

In `config.xml`, add `<access>` tags, like this:

```xml
<!-- Allow images, xhrs, etc. to google.com -->
<access origin="http://google.com" />
<access origin="https://google.com" />

<!-- Access to the subdomain maps.google.com -->
<access origin="http://maps.google.com" />

<!-- Access to all the subdomains on google.com -->
<access origin="http://*.google.com" />

<!-- Enable requests to content: URLs -->
<access origin="content:///*" />

<!-- Don't block any requests -->
<access origin="*" />
```

Without any `<access>` tags, only requests to `file://` URLs are allowed. However, the default Cordova application includes `<access origin="*">` by default.

Note: Allow List cannot block network redirects from a allow listed remote website (i.e. `http` or `https`) to a non-allowlisted website. Use CSP rules to mitigate redirects to non-allowlisted websites for webviews that support CSP.

Be aware that some websites may automatically redirect from their home page to a different url. Example scenarios could be, but not limited to:

* Redirecting `http` protocol requests to the secure `https` SSL/TSL protocol.
* Redirecting to country-specific domain. E.g. `https://www.google.com` to redirect to `https://www.google.co.uk` based on device geography.

Such scenarios may require modified or adding to the allow list additional entries beyond your initial requirement. Please consider this when building the app's allow list.

Quirk: Android also allows requests to https://ssl.gstatic.com/accessibility/javascript/android/ by default, since this is required for TalkBack to function properly.

## Navigation Allow List

This controls which URLs the WebView itself can be navigated to. It applies only to top-level navigations.

By default navigations are only allowed to `file://` URLs. To allow others URLs, you must add `<allow-navigation>` tags to your `config.xml`:

```xml
<!-- Allow links to example.com -->
<allow-navigation href="http://example.com/*" />

<!-- Wildcards are allowed for the protocol, as a prefix
     to the host, or as a suffix to the path -->
<allow-navigation href="*://*.example.com/*" />

<!-- 
    A wildcard can be used to allow the entire network, over HTTP and HTTPS.
    This is *NOT RECOMMENDED*
-->
<allow-navigation href="*" />

<!-- The above is equivalent to these three declarations -->
<allow-navigation href="http://*/*" />
<allow-navigation href="https://*/*" />
<allow-navigation href="data:*" />
```

Quirks: on Android it also applies to iframes for non-http(s) schemes.

## Intent Allow List

This controls which URLs the app is allowed to ask the system to open.

In `config.xml`, add `<allow-intent>` tags, like this:

```xml
<!-- Allow links to web pages to open in a browser -->
<allow-intent href="http://*/*" />
<allow-intent href="https://*/*" />

<!-- Allow links to example.com to open in a browser -->
<allow-intent href="http://example.com/*" />

<!-- Wildcards are allowed for the protocol, as a prefix
     to the host, or as a suffix to the path -->
<allow-intent href="*://*.example.com/*" />

<!-- Allow SMS links to open messaging app -->
<allow-intent href="sms:*" />

<!-- Allow tel: links to open the dialer -->
<allow-intent href="tel:*" />

<!-- Allow geo: links to open maps -->
<allow-intent href="geo:*" />

<!-- Allow all unrecognized URLs to open installed apps
     *NOT RECOMMENDED* -->
<allow-intent href="*" />
```

Without any `<allow-intent>` tags, no requests to external URLs are allowed. However, the default Cordova application includes a quite liberal set of `allow-intent` entries by default. It is advised to narrow this down based on each app's needs.

On Android, this equates to sending an intent of type **BROWSEABLE**.

This allow list applies only to the main Cordova webview, and does not apply to any plugins, for example the InAppBrowser webview, or opening links in the system web browser. It is only aplied to **hyperlinks** and calls to `window.open()`.

Note: `allow-navigation` takes precedence over `allow-intent`. Allowing navigation to all URLs with `<allow-navigation href="*" />` for example has the side effect of "capturing" all intents, so the webview navigates to them instead of triggering e.g. external apps.

## Content Security Policy (CSP)

Controls which network requests (images, XHRs, etc) are allowed to be made (via webview directly).

On Android and iOS, the network request allow list (see above) is not able to filter all types of requests (e.g. `<video>` & WebSockets are not blocked). So, in addition to the allow list, you should use a [Content Security Policy](http://content-security-policy.com/) `<meta>` tag on all of your pages.

Here are some example CSP declarations for your `.html` pages:

```html
<!-- Good default declaration:
    * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
    * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
    * Disables use of eval() and inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
        * Enable inline JS: add 'unsafe-inline' to default-src
        * Enable eval(): add 'unsafe-eval' to default-src
-->
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *">

<!-- Allow everything but only from the same origin and foo.com -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self' foo.com">

<!-- This policy allows everything (eg CSS, AJAX, object, frame, media, etc) except that 
    * CSS only from the same origin and inline styles,
    * scripts only from the same origin and inline styles, and eval()
-->
<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">

<!-- Allows XHRs only over HTTPS on the same domain. -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https:">

<!-- Allow iframe to https://cordova.apache.org/ -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src 'self' https://cordova.apache.org">
```

## Other Notes

[Application Transport Security (ATS)](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) is new in iOS 9 (Xcode 7). This new feature acts as an allow list for your app. Cordova CLI will automatically convert the `<access>` and `<allow-navigation>` tags to the appropriate ATS directives.

The `<access>` and `<allow-navigation>` tags support these three attributes below, which have their equivalents in ATS:

1. `minimum-tls-version` (String, defaults to 'TLSv1.2')
2. `requires-forward-secrecy` (Boolean, defaults to 'true')
3. `requires-certificate-transparency` (Boolean, defaults to 'false', new in iOS 10)

**Example:**

```xml
<access origin='https://cordova.apache.org' minimum-tls-version='TLSv1.1' requires-forward-secrecy='false' requires-certificate-transparency='true' />
```

In iOS 10 and above, the `<access>` tag also supports these three attributes, described below, when paired with the origin wildcard `*`. These attributes also have their equivalents in ATS:

1. `allows-arbitrary-loads-for-media` (Boolean, defaults to 'false', new in iOS 10. New in cordova-ios@4.5.0, fixed to use the proper attribute name). The old attribute `allows-arbitrary-loads-in-media` is now deprecated.
2. `allows-arbitrary-loads-in-web-content` (Boolean, defaults to 'false', new in iOS 10)
3. `allows-local-networking` (Boolean, defaults to 'false', new in iOS 10)

**Example:**

```xml
<access origin='*' allows-arbitrary-loads-for-media='true' allows-arbitrary-loads-in-web-content='true' allows-local-networking='true' />
```

See the [ATS Technote](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) for more details.

[1]: http://www.w3.org/TR/widgets-access/
