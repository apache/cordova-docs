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

# 離線

當一個應用程式離線時，與該設備未連接到互聯網時，將觸發該事件。

    document.addEventListener("offline", yourCallbackFunction, false);
    

## 詳細資訊

`offline`以前連接的設備失去網路連接，這樣，應用程式不再可以訪問互聯網時激發的事件。 它依賴于連接 API 中，相同的資訊和火災時 `connection.type` 從更改 `NONE` 為其他任何值。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Tizen
*   Windows 8

## 快速的示例

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 的怪癖

在初始啟動期間，第一次離線事件 （如果適用） 需至少一秒的火。

## Windows Phone 7 的怪癖

當運行在模擬器中， `connection.status` 始終是未知的因此此事件不會*不*火。

## Windows Phone 8 怪癖

模擬程式報告連線類型為 `Cellular` ，而不會更改，所以該事件不會*不*火。