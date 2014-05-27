---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Whitelist Guide

Domain whitelisting is a security model that controls access to
external domains over which you application has no control.  Cordova's
default security policy allows access to any site. Before moving your
application to production, you should formulate a whitelist and allow
access to specific network domains and subdomains.

Cordova adheres to the [W3C Widget Access][1] specification, which
relies on the `<access>` element within the app's `config.xml` file to
enable network access to specific domains. For projects that rely on
the CLI workflow described in The Command-Line Interface, this file is
located in the project's top-level directory. Otherwise for
platform-specific development paths, locations are listed in the
sections below. (See the various Platform Guides for more information
on each platform.)

The following examples demonstrate whitelist syntax:

* Access to [google.com][2]:

        <access origin="http://google.com" />

* Access to the secure [google.com][3] (`https://`):

        <access origin="https://google.com" />

* Access to the subdomain [maps.google.com][4]:

        <access origin="http://maps.google.com" />

* Access to all the subdomains on [google.com][2], for example
  [mail.google.com][5] and [docs.google.com][6]:

        <access origin="http://*.google.com" />

* Access to _all_ domains, for example, [google.com][2] and
  [developer.mozilla.org][7]:

        <access origin="*" />

  This is the default value for newly created CLI projects.

## Amazon Fire OS Whitelisting

Platform-specific whitelisting rules are found in
`res/xml/config.xml`.

## Android Whitelisting

Platform-specific whitelisting rules are found in
`res/xml/config.xml`.

__NOTE__: On Android 2.3 and before, domain whitelisting only works
for `href` hyperlinks, not referenced resources such as images and
scripts. Take steps to avoid scripts from being injected into the
application.

Navigating to non-whitelisted domains via `href` hyperlink causes the
page to open in the default browser rather than within the
application.  (Compare this to iOS's behavior noted below.)

## iOS Whitelisting

The platform's whitelisting rules are found in the named application
directory's `config.xml` file.

Origins specified without a protocol, such as `www.apache.org` rather
than `http://www.apache.org`, default to all of the `http`, `https`,
`ftp`, and `ftps` schemes.

Wildcards on the iOS platform are more flexible than in the [W3C
Widget Access][1] specification.  For example, the following accesses
all subdomains and top-level domains such as `.com` and `.net`:

        <access origin="*.google.*" />

Unlike the Android platform noted above, navigating to non-whitelisted
domains via `href` hyperlink on iOS prevents the page from opening at
all.

## BlackBerry 10 Whitelisting

The whitelisting rules are found in `www/config.xml`.

BlackBerry 10's use of wildcards differs from other platforms in two
ways:

* Any content accessed by `XMLHttpRequest` must be declared
  explicitly. Setting `origin="*"` does not work in this case.
  Alternatively, all web security may be disabled using the
  `WebSecurity` preference described in BlackBerry Configuration:
 
        <preference name="websecurity" value="disable" />

* As an alternative to setting `*.domain`, set an additional
  `subdomains` attribute to `true`. It should be set to `false` by
  default. For example, the following allows access to `google.com`,
  `maps.google.com`, and `docs.google.com`:

        <access origin="http://google.com" subdomains="true" />

  The following narrows access to `google.com`:

        <access origin="http://google.com" subdomains="false" />

  Specify access to all domains, including the local `file://`
  protocol:

    <access origin="*" subdomains="true" />

(For more information on support, see BlackBerry's documentation on the
[access element][8].)

## iOS Changes in 3.1.0

Prior to version 3.1.0, Cordova-iOS included some non-standard
extensions to the domain whilelisting scheme supported by other
Cordova platforms. As of 3.1.0, the iOS whitelist now conforms to the
resource whitelist syntax described at the top of this document. If
you upgrade from pre-3.1.0, and you were using these extensions, you
may have to change the `config.xml` file in order to continue
whitelisting the same set of resources as before.

Specifically, these patterns need to be updated:

* "`apache.org`" (no protocol): This would previously match `http`,
  `https`, `ftp`, and `ftps` protocols. Change to "`*://apache.org/*`"
  to include all protocols, or include a line for each protocol you
  need to support.

* "`http://apache.*`" (wildcard at end of domain): This would
  previously match all top-level-domains, including all possible
  two-letter TLDs (but not useful domains like .co.uk). Include a line
  for each TLD which you actually control, and need to whitelist.

* "`h*t*://ap*he.o*g`" (wildcards for random missing letters): These
  are no longer supported; change to include a line for each domain
  and protocol that you actually need to whitelist.

## Windows Phone Whitelisting

The whitelisting rules for Windows Phone 7 and 8 are found in the
app's `config.xml` file.

## Tizen Whitelisting

Whitelisting rules are found in the app's `config.xml` file. The
platform relies on the same `subdomains` attribute as the BlackBerry
platform.
(For more information on support, see Tizen's documentation on the
[access element][9].)

[1]: http://www.w3.org/TR/widgets-access/
[2]: http://google.com
[3]: https://google.com
[4]: http://maps.google.com
[5]: http://mail.google.com
[6]: http://docs.google.com
[7]: http://developer.mozilla.org
[8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html
[9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm

