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

# notification.alert

顯示一個自訂的警報或對話方塊框。

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **消息**： 消息對話方塊。*（字串）*

*   **alertCallback**： 當警報對話方塊的被解雇時要調用的回檔。*（函數）*

*   **標題**： 標題對話方塊。*（字串）*（可選，預設值為`Alert`)

*   **buttonName**： 按鈕名稱。*（字串）*（可選，預設值為`OK`)

## 說明

大多數科爾多瓦實現使用本機對話方塊中的此項功能，但一些平臺使用瀏覽器的 `alert` 函數，這是通常不那麼可自訂。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7 和 8 怪癖

*   有沒有內置瀏覽器警報，但你可以綁定一個，如下所示調用 `alert()` 在全球範圍內：
    
        window.alert = navigator.notification.alert;
        

*   兩個 `alert` 和 `confirm` 的非阻塞的調用，其中的結果才是可用的非同步。