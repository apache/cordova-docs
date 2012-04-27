---
license: Licensed to the Apache Software Foundation (ASF) under one
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

geolocation.getCurrentPosition
==============================

デバイスの現在位置を `Position` オブジェクトとして返します。

    navigator.geolocation.getCurrentPosition(geolocationSuccess, 
                                             [geolocationError], 
                                             [geolocationOptions]);

パラメータ
----------

- __geolocationSuccess__: 現在位置取得成功時に呼ばれるコールバック関数です
- __geolocationError__: (オプション) エラー発生時に呼ばれるコールバック関数です
- __geolocationOptions__: (オプション) geolocationのオプションです

概要
-----------

`geolocation.getCurrentPositon` は `Position` オブジェクトをパラメータとして `geolocationSuccess` コールバック関数にデバイスの現在位置を返す非同期関数です。
また、エラーが発生した場合 `geolocationError` コールバック関数を `PositionError` オブジェクトとともに呼び出します。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
    
使用例
-------------

    // 成功時のコールバック関数
    //  このメソッドはGPSの現在座標を保有する `Position` オブジェクトを引数とします
    //
    var onSuccess = function(position) {
        alert('緯度: '          + position.coords.latitude          + '\n' +
              '経度: '         + position.coords.longitude         + '\n' +
              '高度: '          + position.coords.altitude          + '\n' +
              '位置精度: '          + position.coords.accuracy          + '\n' +
              '高度精度: ' + position.coords.altitudeAccuracy  + '\n' +
              '方位: '           + position.coords.heading           + '\n' +
              '速度: '             + position.coords.speed             + '\n' +
              'タイムスタンプ: '         + new Date(position.timestamp)      + '\n');
    };

    // 失敗時のコールバックは、PositionErrorオブジェクトを受けとる
    //
    function onError(error) {
        alert('コード: '    + error.code    + '\n' +
              'メッセージ: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>位置情報の使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: '           + position.coords.latitude              + '<br />' +
                                '経度: '          + position.coords.longitude             + '<br />' +
                                '高度: '           + position.coords.altitude              + '<br />' +
                                '位置精度: '           + position.coords.accuracy              + '<br />' +
                                '高度精度: '  + position.coords.altitudeAccuracy      + '<br />' +
                                '方位: '            + position.coords.heading               + '<br />' +
                                '速度: '              + position.coords.speed                 + '<br />' +
                                'タイムスタンプ: '          + new Date(position.timestamp)          + '<br />';
        }
    
	    // 失敗時のコールバックは、PositionErrorオブジェクトを受けとる
	    //
	    function onError(error) {
	        alert('コード: '    + error.code    + '\n' +
	              'メッセージ: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="geolocation"> 位置情報を取得中...</p>
      </body>
    </html>