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

定期的な間隔で*x* *y*、および*z*軸に沿った加速度を取得します。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

## 説明

加速度計は現在位置との相対運動の変更 (デルタ) を検出するモーション センサーです。 加速度計は、 *x* *y*、および*z*軸に沿って 3次元の動きを検出できます。

`accelerometer.watchAcceleration`メソッドは、デバイスの電流を取得 `Acceleration` 一定の間隔で実行する、 `accelerometerSuccess` コールバック関数するたびに。 経由でミリ秒単位で間隔を指定する、 `acceleratorOptions` オブジェクトの `frequency` パラメーター。

返される ID の参照、加速度計腕時計間隔を見るし、で使用することができます `accelerometer.clearWatch` 、加速度計を見て停止します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

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
    

## 完全な例

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
    

## iOS の癖

API は、要求された間隔で、成功コールバック関数を呼び出しますが 40 ms の間デバイスへの要求の範囲を制限し、1000 ミリ秒になります。 たとえば、(ms) 3 秒の間隔を要求した場合、API 1 秒ごとに、デバイスからデータを要求がのみ成功コールバック 3 秒ごとを実行します。