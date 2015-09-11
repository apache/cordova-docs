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

# 離線

當一個應用程式離線時，與該<a href="../device/device.html">設備</a>未<a href="../connection/connection.html">連接</a>到互聯網時，將觸發該<a href="events.html">事件</a>。

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("offline", yourCallbackFunction, false);
    

## 詳細資訊

`offline`以前<a href="../connection/connection.html">連接</a>的<a href="../device/device.html">設備</a>失去網路<a href="../connection/connection.html">連接</a>，這樣，應用程式不再可以訪問互聯網時激發的<a href="events.html">事件</a>。 它依賴于<a href="../connection/connection.html">連接</a> API 中，相同的資訊和火災時 `<a href="../connection/connection.type.html">connection.type</a>` 從更改 `NONE` 為其他任何值。

應用程式通常應使用 `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` 將一個<a href="events.html">事件</a>攔截器附加一次 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">事件</a>火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Tizen
*   Windows 8

## 快速的示例

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline <a href="../storage/storage.opendatabase.html">Example</a></title>
    
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
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("offline", onOffline, false);
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

在初始啟動期間，第一次離線<a href="events.html">事件</a> （如果適用） 需至少一秒的火。

## Windows Phone 7 的怪癖

當運行在模擬器中， `connection.status` 始終是未知的因此此<a href="events.html">事件</a>不會*不*火。

## Windows Phone 8 怪癖

模擬程式報告連線類型為 `Cellular` ，而不會更改，所以該<a href="events.html">事件</a>不會*不*火。