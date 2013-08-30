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

固定间隔，在获得沿*x*、 *y*和*z*轴加速度。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

## 说明

加速度计是动作感应器检测到的更改 (delta) 相对于当前位置的运动中。 加速度传感器可以检测到沿*x*、 *y*和*z*轴的三维运动。

`accelerometer.watchAcceleration`方法检索设备的电流 `Acceleration` 间隔时间定期，执行 `accelerometerSuccess` 回调函数每次。 指定的时间间隔，以毫秒为单位通过 `acceleratorOptions` 对象的 `frequency` 参数。

返回的观看 ID 引用加速度计的手表时间间隔，并可以用 `accelerometer.clearWatch` 来停止看加速度计。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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

API 调用成功的回调函数的时间间隔的要求，但到 40ms年之间设备限制所请求的范围和 1000ms。 例如，如果请求的时间间隔为 3 秒，(3000ms) API 请求数据从设备每隔 1 秒，但只有执行成功回调每隔 3 秒。