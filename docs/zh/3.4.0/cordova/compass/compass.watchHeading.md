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

# compass.watchHeading

固定間隔，在得到中度的羅盤標題。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## 說明

羅盤是感應器，可檢測的方向或設備是針對性的標題。它的措施從 0 到 359.99 度中的標題。

`compass.watchHeading`獲取設備的當前標題在固定的時間間隔。 檢索標題時，每次 `headingSuccess` 執行回呼函數。 指定的時間間隔，以毫秒為單位通過 `frequency` 參數的 `compassOptions` 物件。

返回的表 ID 引用指南針手錶的時間間隔。可以使用 ID 與手錶 `compass.clearWatch` 停止了觀看指南針。

## 支援的平臺

*   Android 系統
*   黑莓 10
*   iOS
*   Tizen
*   Windows Phone 7 和 8 （如果在硬體中可用）
*   Windows 8

## 快速的示例

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS 的怪癖

IOS 中 `compass.watchHeading` 以指定的度數改變時也可以獲得設備的當前標題。 每次的標題更改時由指定數目的度或更多， `headingSuccess` 執行回呼函數。 指定度的變化通過 `filter` 參數的 `compassOptions` 物件。 清除手錶像往常一樣通過傳遞到返回的表 ID `compass.clearWatch` 。 此功能將替換以前分開，只有 iOS `watchHeadingFilter` 和 `clearWatchFilter` 功能，1.6 版本中被移除。

只有一個 `watchHeading` 可以在 iOS 中一次效果。 如果 `watchHeading` 使用篩選器中，調用 `getCurrentHeading` 或 `watchHeading` 使用現有的篩選器值來指定標題的更改。 使用篩選器看標題的變化是與時間間隔比效率更高。