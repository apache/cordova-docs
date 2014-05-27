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

# geolocation.watchPosition

デバイスの現在の位置への変更のための時計。

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## パラメーター

*   **geolocationSuccess**: 現在の位置を渡されるコールバック。

*   **geolocationError**: (省略可能) エラーが発生した場合に実行されるコールバック。

*   **geolocationOptions**: (オプション) 地理位置情報のオプションです。

## 返します

*   **文字列**: 時計の位置の間隔を参照する時計 id を返します。時計 id で使用する必要があります `geolocation.clearWatch` 停止位置の変化を監視します。

## 説明

`geolocation.watchPosition`非同期関数です。 位置の変更が検出された場合は、デバイスの現在位置を返します。 デバイスを新しい場所を取得するとき、 `geolocationSuccess` コールバックを実行すると、 `Position` オブジェクトをパラメーターとして。 エラーがある場合、 `geolocationError` コールバックを実行すると、 `PositionError` オブジェクトをパラメーターとして。

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
    
    // onError Callback receives a PositionError object
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
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
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
    
            // onError Callback receives a PositionError object
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