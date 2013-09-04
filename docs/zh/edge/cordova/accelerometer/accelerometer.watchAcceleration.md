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

# accelerometer.watchAcceleration

固定間隔，在獲得沿*x*、 *y*和*z*軸加速度。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

## 說明

加速度計是動作感應器檢測到的更改 (delta) 相對於當前位置的運動中。 加速度感應器可以檢測到沿*x*、 *y*和*z*軸的三維運動。

`accelerometer.watchAcceleration`方法檢索設備的電流 `Acceleration` 間隔時間定期，執行 `accelerometerSuccess` 回呼函數每次。 指定的時間間隔，以毫秒為單位通過 `acceleratorOptions` 物件的 `frequency` 參數。

返回的觀看 ID 引用加速度計的手錶時間間隔，並可以用 `accelerometer.clearWatch` 來停止看加速度計。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the acceleration
        //
        function startWatch() {
    
            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                                'Acceleration Y: ' + acceleration.y         + '<br />' +
                                'Acceleration Z: ' + acceleration.z         + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
      </body>
    </html>
    

## iOS 的怪癖

API 呼叫成功的回呼函數的時間間隔的要求，但到 40ms年之間設備限制所請求的範圍和 1000ms。 例如，如果請求的時間間隔為 3 秒，(3000ms) API 請求資料從設備每隔 1 秒，但只有執行成功回檔每隔 3 秒。