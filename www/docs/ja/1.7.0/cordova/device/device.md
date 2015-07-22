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

title: Device
---

Device
======

> `device` オブジェクトはデバイスのハードウェアとソフトウェアの情報を表します。

プロパティー
----------

- [device.name](device.name.html)
- [device.cordova](device.cordova.html)
- [device.platform](device.platform.html)
- [device.uuid](device.uuid.html)
- [device.version](device.version.html)

変数の範囲
--------------

`device` オブジェクトは `window` オブジェクトに割当たれるため、暗黙的にグローバルスコープとして扱われます。

    // 下記は同じ `device` オブジェクト
    //
    var phoneName = window.device.name;
    var phoneName = device.name;
