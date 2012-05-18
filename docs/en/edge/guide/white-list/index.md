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

This guide will introduce you to Cordova's newest addition: Whitelists. It's intention is to be simple and easy to understand so new and senior Cordova developers can avoid errors while upgrading a project or creating a new one.

Why was this introduced?
------------------------

A question I asked myself as soon as I got a error while debugging a project after upgrading to 1.6.1.

This feature was introduced, for developers that weren't sanitizing their links, as to prevent an app state where there is no way back.

Its current status
------------------

 * **iOS**: Full whitelist support
 * **Android**: Unknown
 * **Windows Phone**: Unknown
 * **BlackBerry**: Unknown
 * **WebOS, Symbian, Bada**: Unknown

How to edit the whitelist?
--------------------------

**iOS**

The easiest way of doing this is by going to your project's *cordova.plist* file and adding a new *String* to the *ExternalHosts* key. That's all!

How should a whitelist key look like?
-------------------------------------

For example, if you want to add [google.com][1] to your whitelist all you have to do is add a new key, as described above, with the following value: `google.com`

**Wildcards**

You can also use wildcards on whitelist keys. If you want to enable all domains possible it's easy, just add a key with the value `*`. If you want to add all the sub-domains to the whitelist, just add a key with a value like this: `*.domain.com`.

Be warned that you should not include a full URL, with the `http://` part, just the sub-domain/domain, like on the examples.

[1]: http://google.com
