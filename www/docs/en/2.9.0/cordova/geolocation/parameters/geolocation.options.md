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

geolocationOptions
==================

Optional parameters to customize the retrieval of the geolocation
`<a href="../Position/position.html">Position</a>`.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

Options
-------

- __enableHighAccuracy__: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a `<a href="../Position/position.html">Position</a>` using network-based methods. Setting this property to `true` tells the framework to use more accurate methods, such as satellite positioning. _(Boolean)_
- __timeout__: The maximum length of time (milliseconds) that is allowed to pass from the call to `geolocation.getCurrent<a href="../Position/position.html">Position</a>` or `geolocation.watch<a href="../Position/position.html">Position</a>` until the corresponding `<a href="geolocationSuccess.html">geolocationSuccess</a>` callback executes. If the `<a href="geolocationSuccess.html">geolocationSuccess</a>` callback is not invoked within this time, the `<a href="geolocationError.html">geolocationError</a>` callback is passed a `<a href="../<a href="../Position/position.html">Position</a>Error/positionError.html"><a href="../Position/position.html">Position</a>Error</a>.TIMEOUT` error code. (Note that when used in conjunction with `geolocation.watch<a href="../Position/position.html">Position</a>`, the `<a href="geolocationError.html">geolocationError</a>` callback could be called on an interval every `timeout` milliseconds!) _(Number)_
- __maximumAge__: Accept a cached position whose age is no greater than the specified time in milliseconds. _(Number)_

Android Quirks
--------------

Android 2.x simulators do not return a geolocation result unless the `enableHighAccuracy` option is set to `true`.

