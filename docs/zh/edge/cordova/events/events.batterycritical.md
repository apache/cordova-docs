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

# batterycritical

当电池达到临界阈值时，将触发该事件。

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## 详细信息

当电池电量的百分比已达到关键电池阈值时，将触发该事件。值是特定于设备。

`batterycritical`处理程序传递一个对象，包含两个属性：

*   **级别**: 电池充电 (0-100) 的百分比。*（人数）*

*   **isPlugged**： 一个布尔值，该值指示设备是否插*(布尔值)*

应用程序通常应使用 `window.addEventListener` 将一个事件侦听器附加一次 `deviceready` 事件火灾。

## 支持的平台

*   iOS
*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   Tizen

## 快速的示例

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>