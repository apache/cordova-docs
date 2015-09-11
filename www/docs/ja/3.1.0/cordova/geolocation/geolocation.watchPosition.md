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

# geolocation.watchPosition

<a href="../device/device.html">デバイス</a>の現在の<a href="Position/position.html">位置</a>への変更のための時計。

    var watchId = navigator.geolocation.watchPosition(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                                      [<a href="parameters/geolocationError.html">geolocationError</a>],
                                                      [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);
    

## パラメーター

*   **<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>**: 現在の<a href="Position/position.html">位置</a>を渡されるコールバック。

*   **<a href="parameters/geolocationError.html">geolocationError</a>**: (省略可能) エラーが発生した場合に実行されるコールバック。

*   **<a href="parameters/geolocation.options.html">geolocationOptions</a>**: (オプション) 地理<a href="Position/position.html">位置</a>情報のオプションです。

## 返します

*   **文字列**: 時計の<a href="Position/position.html">位置</a>の間隔を参照する時計 id を返します。時計 id で使用する必要があります `<a href="geolocation.clearWatch.html">geolocation.clearWatch</a>` 停止<a href="Position/position.html">位置</a>の変化を監視します。

## 説明

`geolocation.watchPosition`非同期関数です。 <a href="Position/position.html">位置</a>の変更が検出された場合は、<a href="../device/device.html">デバイス</a>の現在<a href="Position/position.html">位置</a>を返します。 <a href="../device/device.html">デバイス</a>を新しい場所を取得するとき、 `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` コールバックを実行すると、 `Position` オブジェクトをパラメーターとして。 エラーがある場合、 `<a href="parameters/geolocationError.html">geolocationError</a>` コールバックを実行すると、 `<a href="PositionError/positionError.html">PositionError</a>` オブジェクトをパラメーターとして。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a <a href="PositionError/positionError.html">PositionError</a> object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a <a href="PositionError/positionError.html">PositionError</a> object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>