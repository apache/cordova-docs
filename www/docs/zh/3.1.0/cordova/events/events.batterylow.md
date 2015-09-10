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

# batterylow

當電池達到低級別閾值時，將觸發該<a href="events.html">事件</a>。

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterylow", yourCallbackFunction, false);
    

## 詳細資訊

當電池計量的百分比已達到電池計量低門檻，<a href="../device/device.html">設備</a>特定值時，將觸發該<a href="events.html">事件</a>。

`batterylow`處理常式傳遞一個物件，包含兩個屬性：

*   **級別**: 電池充電 (0-100) 的百分比。*（人數）*

*   **isPlugged**： 一個布林值，該值指示<a href="../device/device.html">設備</a>是否插*(布林值)*

應用程式通常應使用 `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` 將一個<a href="events.html">事件</a>攔截器附加一次 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">事件</a>火災。

## 支援的平臺

*   iOS
*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Tizen

## 快速的示例

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>