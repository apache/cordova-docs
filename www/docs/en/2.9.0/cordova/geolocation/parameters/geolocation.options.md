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

Optional parameters to customize the retrieval of the geolocation
`[Position](../Position/position.html)`.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

Options
-------

- __enableHighAccuracy__: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a `[Position](../Position/position.html)` using network-based methods. Setting this property to `true` tells the framework to use more accurate methods, such as satellite positioning. _(Boolean)_
- __timeout__: The maximum length of time (milliseconds) that is allowed to pass from the call to `[geolocation.getCurrentPosition](../geolocation.getCurrentPosition.html)` or `[geolocation.watchPosition](../geolocation.watchPosition.html)` until the corresponding `[geolocationSuccess](geolocationSuccess.html)` callback executes. If the `[geolocationSuccess](geolocationSuccess.html)` callback is not invoked within this time, the `[geolocationError](geolocationError.html)` callback is passed a `[PositionError](../PositionError/positionError.html).TIMEOUT` error code. (Note that when used in conjunction with `[geolocation.watchPosition](../geolocation.watchPosition.html)`, the `[geolocationError](geolocationError.html)` callback could be called on an interval every `timeout` milliseconds!) _(Number)_
- __maximumAge__: Accept a cached position whose age is no greater than the specified time in milliseconds. _(Number)_

Android Quirks
--------------

Android 2.x simulators do not return a geolocation result unless the `enableHighAccuracy` option is set to `true`.

