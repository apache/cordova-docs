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

# 簡歷

當應用程式從背景中檢索時，將觸發該事件。

    document.addEventListener("resume", yourCallbackFunction, false);
    

## 詳細資訊

`resume`事件觸發時的本機平臺拔出從背景的應用程式。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   黑莓 10
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 的怪癖

從調用任何互動式函數 `pause` 事件處理常式以後執行應用程式恢復時，由發出信號 `resume` 事件。 這些包括警報， `console.log()` ，和任何調用從外掛程式或 API，科爾多瓦，穿過目標 C.

*   **活動**事件
    
    特定于 iOS `active` 事件是可用作為替代 `resume` ，並檢測時使用者禁用**鎖定**按鈕以解鎖設備與應用程式在前臺運行。 如果為多工啟用的應用程式 （和設備），則這配對與其後 `resume` 事件，但只在 iOS 5 下的。 實際上，所有鎖定應用程式已啟用多工的 iOS 5 中被推到背景中。 對於應用程式繼續運行在 iOS 5 下鎖定時，禁用應用程式的多工處理通過將[UIApplicationExitsOnSuspend][1]設置為 `YES` 。 若要運行在 iOS 4 上鎖定狀態時，此設置並不重要。

*   **恢復**事件
    
    當從調用 `resume` 事件處理常式，如互動式功能 `alert()` 需要包裝在 `setTimeout()` 調用超時值為零，否則應用程式掛起。 例如：
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html