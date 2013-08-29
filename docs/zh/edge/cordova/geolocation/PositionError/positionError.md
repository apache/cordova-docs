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

A `PositionError` 对象传递给 `geolocationError` 回调时出现错误。

## 属性

*   **代码**： 下面列出的预定义的错误代码之一。

*   **消息**： 描述所遇到的错误的详细信息的错误消息。

## 常量

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 说明

`PositionError`对象传递给 `geolocationError` 与地理定位发生错误时的回调函数。

### `PositionError.PERMISSION_DENIED`

返回当用户不允许您的应用程序检索的位置信息。这是取决于平台。

### `PositionError.POSITION_UNAVAILABLE`

返回设备时，不能检索的位置。这就意味着该设备没有网络连接和/或不能得到卫星的修复。

### `PositionError.TIMEOUT`

返回设备时，无法在指定的时间内检索位置 `geolocationOptions` ' `timeout` 属性。 与一起使用时 `geolocation.watchPosition` ，此错误可能传递给 `geolocationError` 回调每 `timeout` 毫秒为单位）。