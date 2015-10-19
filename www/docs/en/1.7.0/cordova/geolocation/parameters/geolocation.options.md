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

title: geolocationOptions
---

geolocationOptions
==================

Optional parameters to customize the retrieval of the geolocation.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

Options
-------

- __frequency:__ How often to retrieve the position in milliseconds. This option is not part of the W3C spec and will be removed in the future. maximumAge should be used instead. _(Number)_ (Default: 10000)
- __enableHighAccuracy:__ Provides a hint that the application would like to receive the best possible results. _(Boolean)_
- __timeout:__ The maximum length of time (msec) that is allowed to pass from the call to `[geolocation.getCurrentPosition](../geolocation.getCurrentPosition.html)` or `[geolocation.watchPosition](../geolocation.watchPosition.html)` until the corresponding `[geolocationSuccess](geolocationSuccess.html)` callback is invoked. _(Number)_
- __maximumAge:__ Accept a cached position whose age is no greater than the specified time in milliseconds. _(Number)_

Android Quirks
--------------

The Android 2.x simulators will not return a geolocation result unless the enableHighAccuracy option is set to true.

    { enableHighAccuracy: true }

