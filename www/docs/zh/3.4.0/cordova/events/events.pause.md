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

# 暫停

當一個應用程式放入後臺，將觸發該事件。

    document.addEventListener("pause", yourCallbackFunction, false);
    

## 詳細資訊

`pause`當本機平臺放入背景，應用程式通常在使用者切換到不同的應用程式時激發的事件。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   黑莓 10
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
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
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 的怪癖

在 `pause` 處理常式中，任何調用到科爾多瓦 API 或穿過目標 C 的本機外掛程式不工作，以及任何互動式調用，如警報或 `console.log()` 。 當應用程式恢復後，在下一次運行迴圈上他們，只處理。

特定于 iOS `resign` 事件是可用作為替代 `pause` ，並檢測時的使用者啟用**鎖定**按鈕鎖定設備與應用程式在前臺運行。 如果為多工啟用的應用程式 （和設備），則這配對與其後 `pause` 事件，但只在 iOS 5 下的。 實際上，所有鎖定應用程式已啟用多工的 iOS 5 中被推到背景中。 對於應用程式繼續運行在 iOS 5 下鎖定時，禁用應用程式的多工處理通過將[UIApplicationExitsOnSuspend][1]設置為 `YES` 。 若要運行在 iOS 4 上鎖定狀態時，此設置並不重要。

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html