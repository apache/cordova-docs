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

White List Guide
================

Overview
--------

White Listing in Apache Cordova is a security model that controls access to outside domains, such as `http://google.com`. The default security policy is to block all network access. The application developer can then delcare access to specific network domains and subdomains.

Specification
-------------

White Listing lays the ground work for the [W3C Widget Access][1] specification. In the Widget Access specification, the `<access>` element is used to declare access to specific network domains. In the future, Apache Cordova will abstract White Listing with the W3C Widget Access specification.

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

Bada
----

BlackBerry
----------

iOS
---

The easiest way of doing this is by going to your project's *cordova.plist* file and adding a new *String* to the *ExternalHosts* key. That's all!

Be warned that you should not include a full URL, with the `http://` part, just the sub-domain/domain, like on the examples.

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
