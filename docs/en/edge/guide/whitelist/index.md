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

Domain whitelisting in Apache Cordova is a security model that controls access to outside domains, such as `http://google.com`. The default security policy is to block all network access. The application developer can then delcare access to specific network domains and subdomains.

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

The whitelisting rules are found in `res/xml/cordova.xml` and declared with the element `<access origin="..." />`.

Android has full support for the whitelisting syntax.

Access to [google.com][2]:

    <access origin="http://google.com" />

Bada
----

Domain whitelisting is unsupported on Bada. By default, all domains are accessible.

BlackBerry
----------

iOS
---

1. Search for the **Cordova.plist** file in your project. 
2. Add a new **String** value to the **ExternalHosts** key. 

For the value of the String, just include the **hostname / IP Address** of the URL **only** without the scheme or the path of the URL.

For example, if you have a URL like this: **http://**my.phonegap.com**:443?is_awesome=yes**, the whitelist value would be:

        my.phonegap.com

You can also use **wildcards** in the value. For example, if you want to **allow all subdomains**, you would use this value:

        *.phonegap.com
        
Similarly, if you want to allow all TLDs also (.com, .net, etc) you would do this:

        *.phonegap.*
        
To allow all domains, you would just add ** "*" ** like so, this will effectively **turn off the whitelist**:

        * 
        

Symbian
-------

webOS
-----

Windows Phone
-------------

[1]: http://www.w3.org/TR/widgets-access/
[2]: http://google.com
[3]: https://google.com
[4]: http://maps.google.com
[5]: http://mail.google.com
[6]: http://docs.google.com
[7]: http://developer.mozilla.org
