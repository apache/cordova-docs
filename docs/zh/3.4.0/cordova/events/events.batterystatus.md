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

在電池的狀態中的更改時，將觸發該事件。

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## 詳細資訊

當電池計量的百分比改變了至少 1%，或如果在插入或拔出該設備會觸發此事件。

電池狀態處理常式傳遞一個物件，包含兩個屬性：

*   **級別**: 電池充電 (0-100) 的百分比。*（人數）*

*   **isPlugged**： 一個布林值，該值指示設備是否插*(布林值)*

應用程式通常應使用 `window.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   iOS
*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Windows Phone 7 和 8
*   Tizen

## Windows Phone 7 和 8 怪癖

Windows Phone 7 並不提供本機 Api 來確定電池計量水準，所以 `level` 是不可用的屬性。`isPlugged`參數**支援的。

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