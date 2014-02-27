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