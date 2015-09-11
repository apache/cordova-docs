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

# geolocationOptions

若要自訂的<a href="../geolocation.html">地理定位</a>檢索的可選參數`Position`.

    {maximumAge: 3000，超時： 5000，enableHighAccuracy: true} ；
    

## 選項

*   **enableHighAccuracy**： 提供應用程式需要最佳的可能結果的提示。 預設情況下，該<a href="../../device/device.html">設備</a>將嘗試檢索 `Position` 使用基於網路的方法。 將此屬性設置為 `true` 告訴要使用更精確的方法，如衛星定位的框架。 *(布林值)*

*   **超時**： 時間 (毫秒) 從調用傳遞，允許的最大長度 `<a href="../geolocation.getCurrentPosition.html">geolocation.getCurrentPosition</a>` 或 `<a href="../geolocation.watchPosition.html">geolocation.watchPosition</a>` 直到相應的 `<a href="geolocationSuccess.html">geolocationSuccess</a>` 回<a href="../../file/fileobj/fileobj.html">檔</a>執行。 如果 `<a href="geolocationSuccess.html">geolocationSuccess</a>` 不會在此時間內調用回<a href="../../file/fileobj/fileobj.html">檔</a> `<a href="geolocationError.html">geolocationError</a>` 傳遞回<a href="../../file/fileobj/fileobj.html">檔</a> `<a href="../PositionError/positionError.html">PositionError</a>.TIMEOUT` 錯誤代碼。 (請注意，與一起使用時 `<a href="../geolocation.watchPosition.html">geolocation.watchPosition</a>` 、 `<a href="geolocationError.html">geolocationError</a>` 的時間間隔可以調用回<a href="../../file/fileobj/fileobj.html">檔</a>每 `timeout` 毫秒!)*（人數）*

*   **maximumAge**： 接受其年齡大於指定以毫秒為單位的時間沒有緩存的<a href="../Position/position.html">位置</a>。*（人數）*

## Android 的怪癖

Android 2.x 模擬器不返回<a href="../geolocation.html">地理定位</a>結果除非 `enableHighAccuracy` 選項設置為`true`.