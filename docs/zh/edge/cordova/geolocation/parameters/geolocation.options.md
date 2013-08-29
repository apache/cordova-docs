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

# geolocationOptions

若要自定义的地理定位检索的可选参数`Position`.

    {maximumAge: 3000，超时： 5000，enableHighAccuracy: true} ；
    

## 选项

*   **enableHighAccuracy**： 提供应用程序需要最佳的可能结果的提示。 默认情况下，该设备将尝试检索 `Position` 使用基于网络的方法。 将此属性设置为 `true` 告诉要使用更精确的方法，如卫星定位的框架。 *(布尔值)*

*   **超时**： 时间 (毫秒) 从调用传递，允许的最大长度 `geolocation.getCurrentPosition` 或 `geolocation.watchPosition` 直到相应的 `geolocationSuccess` 回调执行。 如果 `geolocationSuccess` 不会在此时间内调用回调 `geolocationError` 传递回调 `PositionError.TIMEOUT` 错误代码。 (请注意，与一起使用时 `geolocation.watchPosition` 、 `geolocationError` 的时间间隔可以调用回调每 `timeout` 毫秒!)*（人数）*

*   **maximumAge**： 接受其年龄大于指定以毫秒为单位的时间没有缓存的位置。*（人数）*

## Android 的怪癖

Android 2.x 仿真器不返回地理定位结果除非 `enableHighAccuracy` 选项设置为`true`.