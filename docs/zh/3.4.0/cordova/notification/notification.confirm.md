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

# notification.confirm

顯示一個可自訂的確認對話方塊。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **消息**： 消息對話方塊。*（字串）*

*   **confirmCallback**: 要用索引 （1、 2 或 3） 按下的按鈕，或者在沒有按下按鈕 (0) 駁回了對話方塊中時調用的回檔。*（函數）*

*   **標題**： 標題對話方塊。*（字串）*（可選，預設值為`Confirm`)

*   **buttonLabels**： 指定按鈕標籤的字串陣列。*（陣列）*（可選，預設值為 [ `OK,Cancel` ])

## 說明

`notification.confirm`方法顯示一個本機的對話方塊，更可自訂的瀏覽器比 `confirm` 函數。

## confirmCallback

`confirmCallback`當使用者按下確認對話方塊中的按鈕之一的時候執行。

回檔將參數 `buttonIndex` *（編號）*，它是按下的按鈕的索引。 請注意索引使用基於 1 的索引，所以值是 `1` ， `2` ， `3` ，等等。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

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
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 和 8 怪癖

*   有沒有內置的瀏覽器功能的 `window.confirm` ，但你可以將它綁定通過分配：
    
        window.confirm = navigator.notification.confirm;
        

*   調用到 `alert` 和 `confirm` 的非阻塞，所以結果就是只可用以非同步方式。