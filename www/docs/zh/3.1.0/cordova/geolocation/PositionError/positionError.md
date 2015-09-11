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

# PositionError

A `PositionError` 物件傳遞給 `<a href="../parameters/geolocationError.html">geolocationError</a>` 回<a href="../../file/fileobj/fileobj.html">檔</a>時出現錯誤。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

*   **消息**： 描述所遇到的錯誤的詳細資訊的錯誤訊息。

## 常量

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 說明

`PositionError`物件傳遞給 `<a href="../parameters/geolocationError.html">geolocationError</a>` 與<a href="../geolocation.html">地理定位</a>發生錯誤時的回呼函數。

### `PositionError.PERMISSION_DENIED`

返回當使用者不允許您的應用程式檢索的<a href="../Position/position.html">位置</a>資訊。這是取決於平臺。

### `PositionError.POSITION_UNAVAILABLE`

返回<a href="../../device/device.html">設備</a>時，不能檢索的<a href="../Position/position.html">位置</a>。這就意味著該<a href="../../device/device.html">設備</a>沒有網路<a href="../../connection/connection.html">連接</a>和/或不能得到衛星的修復。

### `PositionError.TIMEOUT`

返回<a href="../../device/device.html">設備</a>時，無法在指定的時間內檢索<a href="../Position/position.html">位置</a> `<a href="../parameters/geolocation.options.html">geolocationOptions</a>` ' `timeout` 屬性。 與一起使用時 `<a href="../geolocation.watchPosition.html">geolocation.watchPosition</a>` ，此錯誤可能傳遞給 `<a href="../parameters/geolocationError.html">geolocationError</a>` 回<a href="../../file/fileobj/fileobj.html">檔</a>每 `timeout` 毫秒為單位）。