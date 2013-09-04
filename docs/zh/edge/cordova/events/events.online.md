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

# 線上

當應用程式進入線上狀態，和該設備將成為連接到互聯網時觸發此事件。

    document.addEventListener("online", yourCallbackFunction, false);
    

## 詳細資訊

`online`當先前連接的行動裝置接收到一個網路連接以允許應用程式訪問互聯網時激發的事件。 它依賴于連接 API 中，相同的資訊和火災時的值 `connection.type` 成為`NONE`.

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Tizen
*   Windows 8

## 快速的示例

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 的怪癖

在初始啟動期間第一次 `online` 事件 （如果適用），至少需一秒的火災之前的, `connection.type` 是`UNKNOWN`.

## Windows Phone 7 的怪癖

當運行在模擬器中， `connection.status` 始終是未知的因此，此事件將*不*火。

## Windows Phone 8 怪癖

模擬程式報告連線類型為 `Cellular` ，而不會更改，所以事件將*不*火。