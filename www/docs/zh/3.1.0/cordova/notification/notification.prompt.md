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

# notification.prompt

顯示一個可自訂的提示對話方塊。

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **消息**： 消息對話方塊。*（字串）*

*   **promptCallback**： 當按下按鈕時要調用的回檔。*（函數）*

*   **標題**： 對話方塊的標題*（字串）* （可選，預設值為`Prompt`)

*   **buttonLabels**： 陣列，這些字串指定按鈕標籤*（陣列）* （可選，預設值為`["OK","Cancel"]`)

*   **defaultText**: 預設文字方塊中輸入值 （ `String` ） （可選，預設值: 空字串）

## 說明

`notification.prompt`方法顯示一個本機的對話方塊，更可自訂的瀏覽器比 `prompt` 函數。

## promptCallback

`promptCallback`當使用者按下一個提示對話方塊中的按鈕時執行。`results`物件傳遞給回檔的包含以下屬性：

*   **buttonIndex**： 按下的按鈕的索引。*（人數）*請注意索引使用基於 1 的索引，所以值是 `1` ， `2` ， `3` ，等等。

*   **輸入 1**： 在提示對話方塊中輸入的文本。*（字串）*

## 支援的平臺

*   Android 系統
*   iOS

## 快速的示例

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Android 的怪癖

*   Android 支援最多的三個按鈕，並忽略任何更多。

*   關於 Android 3.0 及更高版本，使用全息主題的設備按相反的順序顯示按鈕。