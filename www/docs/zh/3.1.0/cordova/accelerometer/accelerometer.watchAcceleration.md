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

# accelerometer.watchAcceleration

固定間隔，在獲得沿*x*、 *y*和*z*軸<a href="acceleration/acceleration.html">加速度</a>。

    var watchID = navigator.accelerometer.watchAcceleration(<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>,
                                                           <a href="parameters/accelerometerError.html">accelerometerError</a>,
                                                           [<a href="parameters/accelerometerOptions.html">accelerometerOptions</a>]);
    

## 說明

<a href="acceleration/acceleration.html">加速度</a>計是動作感應器檢測到的更改 (delta) 相對於當前<a href="../geolocation/Position/position.html">位置</a>的運動中。 <a href="acceleration/acceleration.html">加速度</a>感應器可以檢測到沿*x*、 *y*和*z*軸的三維運動。

`accelerometer.watchAcceleration`方法檢索<a href="../device/device.html">設備</a>的電流 `Acceleration` 間隔時間定期，執行 `<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>` 回呼函數每次。 指定的時間間隔，以毫秒為單位通過 `acceleratorOptions` 物件的 `frequency` 參數。

返回的觀看 ID 引用<a href="acceleration/acceleration.html">加速度</a>計的手錶時間間隔，並可以用 `<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>` 來停止看<a href="acceleration/acceleration.html">加速度</a>計。

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
        <title>Acceleration <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
                navigator.<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>(watchID);
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

API 呼叫成功的回呼函數的時間間隔的要求，但到 40ms年之間<a href="../device/device.html">設備</a>限制所請求的範圍和 1000ms。 例如，如果請求的時間間隔為 3 秒，(3000ms) API 請求資料從<a href="../device/device.html">設備</a>每隔 1 秒，但只有執行成功回<a href="../file/fileobj/fileobj.html">檔</a>每隔 3 秒。