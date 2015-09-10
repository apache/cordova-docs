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

# volumeupbutton

當使用者按下了按鈕卷時，將觸發該<a href="events.html">事件</a>。

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("volumeupbutton", yourCallbackFunction, false);
    

## 詳細資訊

如果您需要重寫預設卷起來的行為你可以註冊為<a href="events.html">事件</a>攔截器 `volumeupbutton` <a href="events.html">事件</a>。

應用程式通常應使用 `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` 將一個<a href="events.html">事件</a>攔截器附加一次 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">事件</a>火災。

## 支援的平臺

*   黑莓手機 WebWorks （OS 5.0 和更高）

## 快速的示例

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## 完整的示例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button <a href="../storage/storage.opendatabase.html">Example</a></title>
    
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
            // Register the event listener
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>