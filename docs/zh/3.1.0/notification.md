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


# 通知

> 可視、 可聽，和觸覺設備通知。

## 方法

*   `notification.alert`
*   `notification.confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   （在 iOS`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


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


# notification.beep

該設備播放提示音聲音。

    navigator.notification.beep(times);
    

*   **時間**： 的次數重複發出蜂鳴音。*（人數）*

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8

## 快速的示例

    // Beep twice!
    navigator.notification.beep(2);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Android 的怪癖

*   Android 系統播放的預設**通知鈴聲****設置/聲音和顯示**面板下指定。

## Windows Phone 7 和 8 怪癖

*   依賴泛型蜂鳴音檔從科爾多瓦分佈。

## Tizen 怪癖

*   Tizen 通過播放音訊檔通過媒體 API 實現會發出蜂鳴聲。

*   蜂鳴音檔必須很短，必須設在 `sounds` 子目錄中的應用程式的根目錄中，並且必須命名`beep.wav`.


# notification.vibrate

為指定的時間量振動設備。

    navigator.notification.vibrate(milliseconds)
    

*   **時間**： 毫秒為單位） 在震動的設備，其中 1000年毫秒等於 1 秒。*（人數）*

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS 的怪癖

*   **時間**： 忽略指定的時間和震動的預設置的時間量。
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 的怪癖

震動功能導航器物件所擁有的

        navigator.vibrate(1000);  // vibrate for 1 second
