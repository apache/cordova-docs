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
---

# Whitelist Guide

## Overview

Resource whitelisting is a security model that controls access to
external network resources, such as `http://google.com`.  Apache Cordova's
default security policy allows access to any resource on any site on the
Internet. Before moving your application to production, you should review
its whitelist and declare access to specific network domains and subdomains.

## Specification

Domain whitelisting lays the groundwork for the [W3C Widget Access][1] specification. In the Widget Access specification, the `<access>` element is used to declare access to specific network resources. Apache Cordova extends this concept to allow whitelisting of individual network resources (URLs). In the future, Apache Cordova will abstract the platform whitelisting implementations. However, for now each platform implements its own resource or domain whitelisting. The differences between platform implementations are described later in this document.

The general format for whitelist entries follows the "[match pattern][11]" specification for Google Chrome Packaged Apps. Resources are specified by URL, but an asterisk (\*) character may be used as a "wildcard" in several places to indicate "any value may go here". Specific examples are shown below.

## Syntax

Access to all resources at [google.com][2]:

    http://google.com/*

Access to all resources at the secure [google.com][3] (`https://`):

    https://google.com/*

Access to the specific subdomain [maps.google.com][5]:

    http://maps.google.com/*

Access to all the subdomains on [google.com][2] (e.g., [mail.google.com][6] and [docs.google.com][7]):

    http://*.google.com/*

Access to all resources on [www.google.com][4] under the "/mobile" path:

    http://www.google.com/mobile/*

Access to [google.com][2] on any protocol (e.g., HTTP, HTTPS, FTP, etc):

    *://google.com/*

Access to all resouces on the Internet (e.g., [google.com][2] and [developer.mozilla.org][8]):

    *

## Android

### Details

The whitelisting rules are found in `res/xml/config.xml` and declared
with the element `<access origin="..." />`.

Android fully supports whitelisting syntax.

### Syntax

Access to [google.com][2]:

    <access origin="http://google.com/*" />

## BlackBerry 10

### Details

The whitelisting rules are found in `www/config.xml` and declared with 
the element `<access origin="..." />`.

BlackBerry 10 handles wildcards differently than other platforms in two ways:

1) Content accessed by XMLHttpRequest must be declared explicity. origin="\*" will
   not be respected for this use case. Alternatively, all web security may be
   disabled using a preference.
 
2) subdomains="true" may be used in place of "\*.domain"

### Syntax

Access to [google.com][2]:

    <access origin="http://google.com" subdomains="false" />

Access to  [maps.google.com][5]:

    <access origin="http://maps.google.com" subdomains="false" />

Access to all the subdomains on [google.com][2]:

    <access origin="http://google.com" subdomains="true" />

Access to all domains, including `file://` protocol:

    <access origin="*" subdomains="true" />

Disable all web security:

    <preference name="websecurity" value="disable" />

## iOS

### Details

The whitelisting rules are found in `AppName/config.xml` and declared with the element `<access origin="..." />`.

iOS fully supports whitelisting syntax.

### Changed in 3.1.0:

Prior to version 3.1.0, Cordova-iOS included some non-standard extensions to the domain whilelisting scheme supported by other Cordova platforms. As of 3.1.0, the iOS whitelist now conforms to the resource whitelist syntax described at the top of this document. If you upgrade from pre-3.1.0, and you were using these extensions, you may have to change your `config.xml` file in order to continue whitelisting the same set of resources as before.

Specifically, these patterns need to be updated:

  * "`apache.org`" (no protocol): This would previously match `http`, `https`, `ftp`, and `ftps` protocols. Change to "`*://apache.org/*`" to include all protocols, or include a line for each protocol you need to support.

  * "`http://apache.*`" (wildcard at end of domain): This would previously match all top-level-domains, including all possible two-letter TLDs (but not useful domains like .co.uk). Include a line for each TLD which you actually control, and need to whitelist.

  * "`h*t*://ap*he.o*g`" (wildcards for random missing letters): These are no longer supported; change to include a line for each domain and protocol that you actually need to whitelist.

### Syntax

Access to [google.com][2]:

    <access origin="http://google.com/*" />

## Windows Phone (7 & 8)

The whitelisting rules are found in `config.xml` and declared with the element `<access origin="..." />`.

### Syntax

Access to [google.com][2]:

    <access origin="http://google.com" />

## Tizen

### Details

The application root directory's `config.xml` file specifies domain
whitelisting rules, using the `<access origin="..." />` element.
For a complete reference, see the [Tizen Accessing External Network Resources documentation][10].

### Syntax

Access to [google.com][2]:

    <access origin="http://google.com" subdomains="false" />

Access to the secure [google.com][3] (`https://`):

    <access origin="https://google.com" subdomains="false" />

Access to all the subdomains on [google.com][2]:

    <access origin="http://google.com" subdomains="true" />

Access to all domains, including `file://` protocol:

    <access origin="*" subdomains="true" />

[1]: http://www.w3.org/TR/widgets-access/
[2]: http://google.com
[3]: https://google.com
[4]: http://www.google.com
[5]: http://maps.google.com
[6]: http://mail.google.com
[7]: http://docs.google.com
[8]: http://developer.mozilla.org
[9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html
[10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources
[11]: http://developer.chrome.com/apps/match_patterns.html
