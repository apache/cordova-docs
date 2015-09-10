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
---

Device
======

> The `device` object describes the device's hardware and software.

Properties
----------

- device.<a href="../storage/parameters/name.html">name</a>
- <a href="device.phonegap.html">device.phonegap</a>
- <a href="device.platform.html">device.platform</a>
- <a href="device.uuid.html">device.uuid</a>
- device.<a href="../storage/parameters/version.html">version</a>

Variable Scope
--------------

Since `device` is assigned to the `window` object, it is implicitly in the global scope.

    // These reference the same `device`
    //
    var phoneName = window.device.<a href="../storage/parameters/name.html">name</a>;
    var phoneName = device.<a href="../storage/parameters/name.html">name</a>;