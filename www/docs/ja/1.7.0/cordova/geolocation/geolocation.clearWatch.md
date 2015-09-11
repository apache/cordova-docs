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

geolocation.clearWatch
======================

watch ID パラメーターによって参照されるデバイスの位置情報の監視を停止します。

    navigator.geolocation.clearWatch(watchID);

パラメーター
----------

- __watchID:__ `watch<a href="Position/position.html">Position</a>` 関数での監視を停止したい watchID を表します (String)

概要
-----------

`geolocation.clearWatch` 関数は、 `watchID` によって参照される `geolocation.watch<a href="Position/position.html">Position</a>` 関数を停止させるによって、位置情報の監視を停止します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    // 3秒ごとに位置情報を取得する設定 (オプション)
    //
    var watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, { frequency: 3000 });

    // ... 後に続く ...

    navigator.geolocation.clearWatch(watchID);


詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        var watchID = null;

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // 3秒ごとに更新
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, options);
        }

        // onSuccess <a href="geolocation.html">Geolocation</a>
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: ' + position.coords.latitude     + '<br />' +
                                '経度: ' + position.coords.longitude    + '<br />' +
                                '<hr />' + element.innerHTML;
        }

        // 先に開始された監視を停止する
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }

        // エラー時のコールバック関数は <a href="<a href="Position/position.html">Position</a>Error/positionError.html"><a href="Position/position.html">Position</a>Error</a> オブジェクトを受けとる
        //
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        </script>
      </head>
      <body>
        <p id="geolocation">位置情報を監視中...</p>
        <button onclick="clearWatch();">監視の停止</button>
      </body>
    </html>
