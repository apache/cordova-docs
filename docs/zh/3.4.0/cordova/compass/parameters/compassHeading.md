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

# compassHeading

A `CompassHeading` 物件返回到 `compassSuccess` 回呼函數。

## 屬性

*   **magneticHeading**： 在某一時刻在時間中從 0-359.99 度的標題。*（人數）*

*   **trueHeading**： 在某一時刻的時間與地理北極在 0-359.99 度標題。 負值表示不能確定真正的標題。 *（人數）*

*   **headingAccuracy**： 中度報告的標題和真正標題之間的偏差。*（人數）*

*   **時間戳記**： 本項決定在其中的時間。*（毫秒）*

## 說明

`CompassHeading`物件返回到 `compassSuccess` 回呼函數。

## Android 的怪癖

*   `trueHeading`不受支援，但報告相同的值`magneticHeading`

*   `headingAccuracy`是始終為 0 因為有沒有區別 `magneticHeading` 和`trueHeading`.

## iOS 的怪癖

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   IOS 4 設備及以上標題因素在該設備的當前方向，不涉及其絕對的立場，為應用程式支援的方向。