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

# accelerometer.getCurrentAcceleration

*X* *y*、および*z*軸に沿って現在の<a href="acceleration/acceleration.html">加速</a>を取得します。

    navigator.accelerometer.getCurrentAcceleration(<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>, <a href="parameters/accelerometerError.html">accelerometerError</a>);
    

## 説明

<a href="acceleration/acceleration.html">加速</a>度計の現在の<a href="../device/device.html">デバイス</a>の向き、 *x* *y*、および*z*軸に沿って 3 つの次元の相対運動の変更 (*デルタ*) を検出するモーション センサーです。

これらの<a href="acceleration/acceleration.html">加速</a>度値に返されます、 `<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>` コールバック関数。

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
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
    

## iOS の癖

*   iOS は、任意の時点で現在の<a href="acceleration/acceleration.html">加速</a>度を得ることの概念を認識しません。

*   <a href="acceleration/acceleration.html">加速</a>度を見るし、データを<a href="../media/capture/capture.html">キャプチャ</a>する必要があります指定した時間間隔で。

*   したがって、 `getCurrentAcceleration` 関数から報告された最後の値が生成されます、 `watchAccelerometer` を呼び出します。