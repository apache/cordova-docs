---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# PositionError

A `PositionError` 物件傳遞給 `geolocationError` 回檔時出現錯誤。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

*   **消息**： 描述所遇到的錯誤的詳細資訊的錯誤訊息。

## 常量

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 說明

`PositionError`物件傳遞給 `geolocationError` 與地理定位發生錯誤時的回呼函數。

### `PositionError.PERMISSION_DENIED`

返回當使用者不允許您的應用程式檢索的位置資訊。這是取決於平臺。

### `PositionError.POSITION_UNAVAILABLE`

返回設備時，不能檢索的位置。這就意味著該設備沒有網路連接和/或不能得到衛星的修復。

### `PositionError.TIMEOUT`

返回設備時，無法在指定的時間內檢索位置 `geolocationOptions` ' `timeout` 屬性。 與一起使用時 `geolocation.watchPosition` ，此錯誤可能傳遞給 `geolocationError` 回檔每 `timeout` 毫秒為單位）。