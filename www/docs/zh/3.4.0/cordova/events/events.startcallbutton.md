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

# startcallbutton

當使用者按下開始呼叫按鈕時，將觸發該事件。

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## 詳細資訊

如果您需要重寫預設開始調用行為您可以註冊為事件攔截器 `startcallbutton` 事件。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   黑莓 10

## 快速的示例

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## 完整的示例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>