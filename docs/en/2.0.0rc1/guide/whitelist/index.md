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

Domain Whitelist Guide
=====================

Overview
--------

Domain whitelisting in Apache Cordova is a security model that controls access to outside domains, such as `http://google.com`. The default security policy is to block all network access. The application developer can then declare access to specific network domains and subdomains.

Specification
-------------

Domain whitelisting lays the ground work for the [W3C Widget Access][1] specification. In the Widget Access specification, the `<access>` element is used to declare access to specific network domains. In the future, Apache Cordova will abstract the platform whitelisting implementations to the W3C Widget Access specification. However, for now each platform must implement it's own domain whitelisting.

Syntax
------

Access to [google.com][2]:

    http://google.com

Access to the secure [google.com][3] (`https://`):

    https://google.com

Access to the subdomain [maps.google.com][4]:

    http://maps.google.com

Access to all the subdomains on [google.com][2] (e.g. [mail.google.com][5] and [docs.google.com][6]):

    http://*.google.com

Access to all domains (e.g. [google.com][2] and [developer.mozilla.org][7]):

    *

Android
-------

### Details

The whitelisting rules are found in `res/xml/cordova.xml` and declared with the element `<access origin="..." />`.

Android has full support for the whitelisting syntax.

### Syntax

Access to [google.com][2]:

    <access origin="http://google.com" />

Bada
----

Domain whitelisting is unsupported on Bada. By default, all domains are accessible.

BlackBerry
----------

### Details

The whitelisting rules are found in `www/config.xml` and declared with the element `<access uri="..." />`.

For a complete reference, see the [BlackBerry WebWorks Access Element documentation][8].

### Syntax

Access to [google.com][2]:

    <access uri="http://google.com" subdomains="false" />

Access to  [maps.google.com][4]:

    <access uri="http://maps.google.com" subdomains="false" />

Access to all the subdomains on [google.com][2]:

    <access uri="http://google.com" subdomains="true" />

Access to all domains, including `file://` protocol:

    <access uri="*" subdomains="true" />

iOS
---

### Details

1. Open `Cordova.plist`.
    - In Xcode, it is found at `AppName/Resources/Cordova.plist`
    - In the directory, it is found at `AppName/Cordova.plist`
2. Add a new `String` value under the `ExternalHosts` key.
    - We recommend using Xcode to avoid editing raw XML.

Domain protocols (e.g. `http://` and `https://`) are not supported by iOS.

### Syntax

Access to [google.com][2] and the secure [google.com][3] (`https://`):

    google.com

Access to the subdomain [maps.google.com][4]:

    maps.google.com

Access to all the subdomains on [google.com][2] (e.g. [mail.google.com][5] and [docs.google.com][6]):

    *.google.com

Access to all domains (e.g. [google.com][2] and [developer.mozilla.org][7]):

    *

Wildcards on iOS (`*`) are more flexible than the [W3C Widget Access][1] specification.

Access to all subdomains and TLDs (`.com`, `.net`, etc):

    *.google.*

Symbian
-------

Domain whitelisting is unsupported on Symbian. By default, all domains are accessible.

webOS
-----

Domain whitelisting is unsupported on webOS. By default, all domains are accessible.

Windows Phone
-------------

Domain whitelisting is unsupported on Windows Phone. By default, all domains are accessible.

[1]: http://www.w3.org/TR/widgets-access/
[2]: http://google.com
[3]: https://google.com
[4]: http://maps.google.com
[5]: http://mail.google.com
[6]: http://docs.google.com
[7]: http://developer.mozilla.org
[8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html
