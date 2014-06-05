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

# deviceready

科爾多瓦是在完全載入時，將觸發該事件。

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 詳細資訊

此事件的任何應用程式至關重要。它發出信號科爾多瓦的設備已載入的 Api，並準備訪問。

科爾多瓦組成的兩個代碼庫： 本機和 JavaScript。 雖然本機代碼載入、 顯示的自訂載入圖像。 然而，JavaScript 僅載入一旦 DOM 裝載。 這意味著 web 應用程式可能有可能調用的科爾多瓦 JavaScript 函數之前的相應的本機代碼變得可用。

`deviceready`科爾多瓦已完全載入後會觸發事件。 一次事件火，你可以安全地使對科爾多瓦 Api 的調用。 應用程式通常將附加一個事件攔截器與 `document.addEventListener` 一旦 HTML 文檔的 DOM 已載入。

`deviceready`事件從其他人的行為方式略有不同。註冊後的任何事件處理 `deviceready` 事件將觸發了其立即調用的回呼函數。

## 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   黑莓 10
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
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
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>