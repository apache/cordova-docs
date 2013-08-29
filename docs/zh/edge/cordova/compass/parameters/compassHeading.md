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

A `CompassHeading` 对象返回到 `compassSuccess` 回调函数。

## 属性

*   **magneticHeading**： 在某一时刻在时间中从 0-359.99 度的标题。*（人数）*

*   **trueHeading**： 在某一时刻的时间与地理北极在 0-359.99 度标题。 负值表示不能确定真正的标题。 *（人数）*

*   **headingAccuracy**： 中度报告的标题和真正标题之间的偏差。*（人数）*

*   **时间戳**： 本项决定在其中的时间。*（毫秒）*

## 说明

`CompassHeading`对象返回到 `compassSuccess` 回调函数。

## Android 的怪癖

*   `trueHeading`不受支持，但报告相同的值`magneticHeading`

*   `headingAccuracy`是始终为 0 因为有没有区别 `magneticHeading` 和`trueHeading`.

## iOS 的怪癖

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   IOS 4 设备及以上标题因素在该设备的当前方向，不涉及其绝对的立场，为应用程序支持的方向。