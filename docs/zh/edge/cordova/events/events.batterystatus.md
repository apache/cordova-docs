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

# batterystatus

在电池的状态中的更改时，将触发该事件。

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## 详细信息

当电池电量的百分比改变了至少 1%，或如果在插入或拔出该设备会触发此事件。

电池状态处理程序传递一个对象，包含两个属性：

*   **级别**: 电池充电 (0-100) 的百分比。*（人数）*

*   **isPlugged**： 一个布尔值，该值指示设备是否插*(布尔值)*

应用程序通常应使用 `window.addEventListener` 将一个事件侦听器附加一次 `deviceready` 事件火灾。

## 支持的平台

*   iOS
*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   Windows Phone 7 和 8
*   Tizen

## Windows Phone 7 和 8 怪癖

Windows Phone 7 并不提供本机 Api 来确定电池电量水平，所以 `level` 是不可用的属性。`isPlugged`参数**支持的。

## 快速的示例

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>