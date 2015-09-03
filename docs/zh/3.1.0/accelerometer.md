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


# 加速度計

> 擷取裝置中的*x*、 *y*和*z*方向運動。

## 方法

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## 參數

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## 物件 （唯讀）

*   加速度

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="加速度計">< 參數名稱 ="android 包"value="org.apache.cordova.AccelListener"/ >< / 功能 >
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml) < 功能名稱 ="加速度計">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.accelerometer.Accelerometer"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.system"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="org.apache.cordova"所需 ="true"版本 ="1.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="加速度計">< 參數名稱 ="ios 包"值 ="CDVAccelerometer"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# accelerometer.getCurrentAcceleration

獲取當前加速沿*x*、 *y*和*z*軸。

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

## 說明

加速度計是動作感應器檢測到的更改 (*三角洲*) 在相對於當前的設備方向，在三個維度沿*x*、 *y*和*z*軸運動。

這些加速度值將返回到 `accelerometerSuccess` 回呼函數。

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
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
    

## iOS 的怪癖

*   iOS 不會認識到在任何給定的點獲取當前加速度的概念。

*   你必須看加速和捕獲的資料在特定的時間間隔。

*   因此， `getCurrentAcceleration` 收益率從報告的最後一個值的函數 `watchAccelerometer` 調用。


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


# accelerometer.clearWatch

停止看 `Acceleration` 引用的 `watchID` 參數。

    navigator.accelerometer.clearWatch(watchID);
    

*   **watchID**： 由返回的 ID`accelerometer.watchAcceleration`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

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
    
            element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                'Acceleration Y: ' + acceleration.y + '<br />' +
                                'Acceleration Z: ' + acceleration.z + '<br />' +
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
            <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


# 加速度

包含 `Accelerometer` 在時間中的特定點捕獲的資料。

## 屬性

*   **x**： 在 X 軸上的加速度量。（在 m/s ^2)*（人數）*
*   **y**： 在 y 軸上的加速度量。（在 m/s ^2)*（人數）*
*   **z**： 在 Z 軸上的加速度量。（在 m/s ^2)*（人數）*
*   **時間戳記**： 創建時間戳記以毫秒為單位。*() DOMTimeStamp*

## 說明

`Acceleration`物件是填充的返回的任何的 API 的 `Accelerometer` 方法。 加速度值包括引力的影響 (9.81 m/s ^2)，因此當設備謊言平面和麵朝上， *x*、 *y*，和*z*返回的值應該是 `` ， `` ，和`9.81`.

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
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>


# accelerometerSuccess

提供的 onSuccess 回呼函數 `Acceleration` 的資訊。

    function(acceleration) {
        // Do something
    }
    

## 參數

*   **加速度**： 在時間中的某一時刻的加速度。(加速度)

## 示例

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };


# accelerometerError

加速度函數 onError 的回呼函數。

    function() {
        // Handle the error
    }


# accelerometerOptions

若要自訂的加速度計值檢索一個可選參數。

## 選項

*   **頻率**： 經常如何檢索 `Acceleration` 以毫秒為單位。*（人數）*（預設值： 10000）
