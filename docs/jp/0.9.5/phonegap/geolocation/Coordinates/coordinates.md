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

Coordinates
===========

位置情報で使用される座標を格納します。


プロパティ
----------

* __latitude__: 緯度を数値を表します _(Number)_
* __longitude__: 経度を数値で表します _(Number)_
* __altitude__: 海抜からの高度を表します _(Number)_
* __accuracy__: 位置の精度をメートル単位で表します_(Number)_
* __altitudeAccuracy__: 高度の精度をメートル単位で表します _(Number)_
* __heading__: 北から時計回りに図ったときのデバイスの方位を角度（数値）で表します _(Number)_
* __speed__: 現在のデバイスのスピードをメートル/秒で表します _(Number)_

概要
-----------
`Coordinates` オブジェクトは `Position` オブジェクトのプロパティとして作成されます。
 `Position` オブジェクトはコールバック関数を通してユーザーに渡されます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // 成功時のコールバック
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

    // 失敗時のコールバック
    //
    var onError = function() {
        alert('エラーが発生しました。');
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Geolocation Position の例</title>
        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // イベントをセットし、PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // `Position` プロパティーを表示
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
        
            div.innerHTML = '緯度: '             + position.coords.latitude  + '<br/>' +
                            '経度: '            + position.coords.longitude + '<br/>' +
                            '高度: '             + position.coords.altitude  + '<br/>' +
                            '位置精度: '             + position.coords.accuracy  + '<br/>' +
                            '高度精度: '    + position.coords.altitudeAccuracy  + '<br/>' +
                            '方位: '              + position.coords.heading   + '<br/>' +
                            '速度: '                + position.coords.speed     + '<br/>';
        }
    
        // 問題発生時に警告を表示
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <div id="myDiv"></div>
      </body>
    </html>
    
Android に関する注意点
-------------

__altitudeAccuracy:__ このプロパティはAndroidではサポートされておらず、常にnullを返します。