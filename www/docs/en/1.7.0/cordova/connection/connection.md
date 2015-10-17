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

title: Connection
---

Connection
==========

> The `connection` object gives access to the device's cellular and wifi connection information.

This object is accessed under the `navigator.network` interface.

Properties
----------

- [connection.type](connection.type.html)

Constants
---------

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.NONE

WP7 Quirk
---------

- __type:__
Windows Phone Emulator always reports navigator.network.connection.type is Connection.UNKNOWN

iOS Quirk
---------

- __type:__
iOS can only report whether the device is on a cellular connection, not
of what type, thus it will always report as CELL_2G

Bada Quirk
----------
- Bada can only report if device is on Wifi or connected to cellular connection CELL_2G ( type not reported )
