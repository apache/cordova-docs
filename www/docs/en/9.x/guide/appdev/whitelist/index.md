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

title: Whitelist Guide
toc_title: Whitelisting
description: Securely grant an application access to external resources.
---

# Whitelist Guide

Domain whitelisting is a security model that controls access to
external domains over which your application has no control. Cordova
provides a configurable security policy to define which external sites may be
accessed.  By default, new apps are configured to allow access to any site.
Before moving your application to production, you should formulate a whitelist
and allow access to specific network domains and subdomains.

For Android (as of its 4.0 release), Cordova's security policy is extensible via a plugin
interface.  Your app should use the [cordova-plugin-whitelist][wlp], as it provides
better security and configurability than earlier versions of Cordova.  While
it is possible to implement your own whitelist plugin, it is not recommended
unless your app has very specific security policy needs.  See the
[cordova-plugin-whitelist][wlp] for details on usage and configuration.

For other platforms, Cordova adheres to the [W3C Widget Access][1] specification,
which relies on the `<access>` element within the app's `config.xml` file to
enable network access to specific domains. For projects that rely on
the CLI workflow described in [The Command-Line Interface](../../cli/index.html), this file is
located in the project's top-level directory. Otherwise for
platform-specific development paths, locations are listed in the
sections below.

The following examples demonstrate `<access>` whitelist syntax:

* Access to [google.com][2]:

    ```xml
    <access origin="http://google.com" />
    ```

* Access to the secure [google.com][3] (`https://`):

    ```xml
    <access origin="https://google.com" />
    ```

* Access to the subdomain [maps.google.com][4]:

    ```xml
    <access origin="http://maps.google.com" />
    ```

* Access to all the subdomains on [google.com][2], for example
  [mail.google.com][5] and [docs.google.com][6]:

    ```xml
    <access origin="http://*.google.com" />
    ```

* Access to _all_ domains, for example, [google.com][2] and
  [developer.mozilla.org][7]:

    ```xml
    <access origin="*" />
    ```

  This is the default value for newly created CLI projects.

Be aware that some websites may automatically redirect from their home page to
a different url, such as using https protocol or to a country-specific
domain. For example `http://www.google.com` will redirect to use SSL/TLS at
`https://www.google.com`, and then may further redirect to a geography such as
`https://www.google.co.uk`. Such scenarios may require modified or additional
whitelist entries beyond your initial requirement. Please consider this
as you are building your whitelist.

Note that the whitelist applies only to the main Cordova webview, and does not
apply to an InAppBrowser webview or opening links in the system web browser.

## Android Whitelisting

As above, see [cordova-plugin-whitelist][wlp] for details.  For cordova-android
prior to 4.0.0, see older versions of this documentation.

## iOS Whitelisting

`Cordova-ios` version 4.0 and greater does **not** require the [cordova-plugin-whitelist][wlp] plugin to be installed, however its configuration details apply to iOS too. The `<allow-intent>` and `<allow-navigation>` tags are _new_ for cordova-ios 4.x and greater, see the [cordova-plugin-whitelist][wlp] documentation for details on the usage of these tags.

For cordova-ios versions prior to 4.0.0, see the older versions of this documentation.

[Application Transport Security (ATS)](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) is new in iOS 9 (Xcode 7). This new feature acts as a whitelist for your app. The cordova cli will automatically convert `<access>` and `<allow-navigation>` tags to the appropriate ATS directives.

The `<access>` and `<allow-navigation>` tags support these three attributes below, which have their equivalents in ATS:

1. minimum-tls-version (String, defaults to 'TLSv1.2')
2. requires-forward-secrecy (Boolean, defaults to 'true')
3. requires-certificate-transparency (Boolean, defaults to 'false', new in iOS 10)

* example:

    ```xml
    <access origin='https://cordova.apache.org' minimum-tls-version='TLSv1.1' requires-forward-secrecy='false' requires-certificate-transparency='true' />
    ```
    
In iOS 10 and above, the `<access>` tag supports these three attributes below, when paired with the origin wildcard `*`. These attributes also have their equivalents in ATS:

1. allows-arbitrary-loads-for-media (Boolean, defaults to 'false', new in iOS 10. New in cordova-ios@4.5.0, fixed to use the proper attribute name). The old attribute `allows-arbitrary-loads-in-media` is now deprecated.
2. allows-arbitrary-loads-in-web-content (Boolean, defaults to 'false', new in iOS 10)
3. allows-local-networking (Boolean, defaults to 'false', new in iOS 10)

* example:

    ```xml
    <access origin='*' allows-arbitrary-loads-for-media='true' allows-arbitrary-loads-in-web-content='true' allows-local-networking='true' />
    ```

See the [ATS Technote](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) for more details.

[wlp]: ../../../reference/cordova-plugin-whitelist/
[1]: http://www.w3.org/TR/widgets-access/
[2]: http://google.com
[3]: https://google.com
[4]: http://maps.google.com
[5]: http://mail.google.com
[6]: http://docs.google.com
[7]: http://developer.mozilla.org
