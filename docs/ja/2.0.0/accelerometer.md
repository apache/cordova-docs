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


Accelerometer
=============

> デバイスの動きを (x, y, z) 軸で取得します。

メソッド
-------

- accelerometer.getCurrentAcceleration
- accelerometer.watchAcceleration
- accelerometer.clearWatch

引数
---------

- accelerometerSuccess
- accelerometerError
- accelerometerOptions

オブジェクト (読み取り専用)
-------------------

- Acceleration

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Accelerometer" value="org.apache.cordova.AccelListener" />

### Bada

    パーミッションの設定は必要ありません。

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Accelerometer" value="org.apache.cordova.accelerometer.Accelerometer" />

#### www/config.xml

    <feature id="blackberry.system"  required="true" version="1.0.0.0" />
    <feature id="org.apache.cordova" required="true" version="1.0.0" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Accelerometer</key>
        <string>CDVAccelerometer</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_SENSORS" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)



accelerometer.getCurrentAcceleration
====================================

デバイスの傾きの増加量を計測します。

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

概要
-----------

加速度センサーはデバイスの傾きの増加量を計測します。 加速度センサーでは x, y, z 軸の3次元の傾きを取得出来ます。

加速度情報は `accelerometerSuccess` コールバック関数によって返されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

使用例
-------------

    function onSuccess(acceleration) {
        alert('X 軸における加速度: ' + acceleration.x + '\n' +
              'Y 軸における加速度: ' + acceleration.y + '\n' +
              'Z 軸における加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '     + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>加速度センサーの使用</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }

        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            alert('X 軸における加速度: ' + acceleration.x + '\n' +
                  'Y 軸における加速度: ' + acceleration.y + '\n' +
                  'Z 軸における加速度: ' + acceleration.z + '\n' +
                  'タイムスタンプ: '     + acceleration.timestamp + '\n');
        }

        // onError: 加速度情報の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>

iPhone に関する注意点
-------------

- iPhone はピンポイントで現在の加速度情報を得ることは出来ません。
- 加速度情報を取得するには、一定の時間間隔で加速度データの変異を計測する必要があります。
- そのため、 `getCurrentAcceleration` 関数は Cordova の `watchAccelerometer` 関数で取得した最新値を返します。



accelerometer.watchAcceleration
===============================

ある時間間隔における x, y, z 軸上の加速度を返します。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);

概要
-----------

加速度センサーはデバイスの傾きの増加量を計測します。加速度センサーでは x, y, z 軸の3次元の傾きを取得出来ます。

`accelerometer.watchAcceleration` 関数を使うと、一定の間隔ごとにデバイスの加速度情報を取得できます。加速度情報を取得するたびに、 `accelerometerSuccess` コールバック関数が実行されます。加速度情報を取得する間隔は、 `acceleratorOptions` オブジェクトのパラメーター `frequency` を通じてミリ秒単位で指定できます。

本関数の戻り値である watch ID は、実行中の加速度センサー測定への参照を表します。また、 `accelerometer.clearWatch` 関数に watch ID を渡すことで、加速度センサーの監視を停止できます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x


使用例
-------------

    function onSuccess(acceleration) {
        alert('X 軸における加速度: ' + acceleration.x + '\n' +
              'Y 軸における加速度: ' + acceleration.y + '\n' +
              'Z 軸における加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '     + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    var options = { frequency: 3000 };  // 3秒ごとに更新

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>加速度センサーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watch ID が現在の `watchAcceleration` を参照
        var watchID = null;

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // 加速度情報の監視を開始
        //
        function startWatch() {

            // 加速度情報を3秒ごとに更新
            var options = { frequency: 3000 };

            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }

        // 加速度情報の監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }

        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'X 軸における加速度: ' + acceleration.x + '<br />' +
                                'Y 軸における加速度: ' + acceleration.y + '<br />' +
                                'Z 軸における加速度: ' + acceleration.z + '<br />' +
                                'タイムスタンプ: '     + acceleration.timestamp + '<br />';
        }

        // onError: 加速度情報の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">加速度センサーを待機...</div>
      </body>
    </html>

 iPhone に関する注意点
-------------

- 指定された時間間隔に対して、 Cordova はコールバック関数を呼び出し、加速度情報を渡します。
- ただし、時間間隔は Cordova によって最低 40ms 、最高 1000ms に制限されています。
- たとえば時間間隔として 3秒 (3000ms) を指定した場合、 Cordova は加速度情報を1秒で取得しますが、コールバック関数は3秒ごとに呼び出されます。



accelerometer.clearWatch
========================

指定した watch ID の加速度情報の監視を停止します。

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: `accelerometer.watchAcceleration`  によって返される ID。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

使用例
-------------

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

    // ... 後に続く ...

    navigator.accelerometer.clearWatch(watchID);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>加速度センサーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watch ID が現在の `watchAcceleration` を参照
        var watchID = null;

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // 加速度情報の監視を開始
        //
        function startWatch() {

            // 加速度情報を3秒ごとに更新
            var options = { frequency: 3000 };

            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }

        // 加速度情報の監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }

        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'X 軸における加速度: ' + acceleration.x + '<br />' +
                                'Y 軸における加速度: ' + acceleration.y + '<br />' +
                                'Z 軸における加速度: ' + acceleration.z + '<br />' +
                                'タイムスタンプ: '     + acceleration.timestamp + '<br />';
        }

        // onError: 加速度情報の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">加速度センサーを待機...</div>
        <button onclick="stopWatch();">監視中止</button>
      </body>
    </html>



Acceleration
============

ある時間軸上でキャプチャーされた加速度センサーのデータを保持します。

プロパティー
----------

- __x:__  x 軸上での加速度を表します。 (単位 m/s^2) (`Number`)
- __y:__  y 軸上での加速度を表します。 (単位 m/s^2) (`Number`)
- __z:__  z 軸上での加速度を表します。 (単位 m/s^2) (`Number`)
- __timestamp:__ ミリ秒単位のタイムスタンプ値を表します。 (`DOMTimeStamp`)

概要
-----------

x, y, z の加速度は重力の影響 (9.81 m/s^2) を含みます。デバイスが机の上に表向きで置かれている場合、値はそれぞれ x=0, y=0, z=9.81 となります。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

使用例
-------------

    function onSuccess(acceleration) {
        alert('X 軸における加速度: ' + acceleration.x + '\n' +
              'Y 軸における加速度: ' + acceleration.y + '\n' +
              'Z 軸における加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '     + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>加速度センサーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }

        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            alert('X 軸における加速度: ' + acceleration.x + '\n' +
                  'Y 軸における加速度: ' + acceleration.y + '\n' +
                  'Z 軸における加速度: ' + acceleration.z + '\n' +
                  'タイムスタンプ: '     + acceleration.timestamp + '\n');
        }

        // onError: 加速度情報の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>



accelerometerSuccess
====================

加速度情報を返す onSuccess コールバック関数です。

    function(acceleration) {
        // 任意のコード
    }

パラメーター
----------

- __acceleration:__ ある瞬間における加速度を表します。 (Acceleration)

使用例
-------

    function onSuccess(acceleration) {
        alert('X 軸における加速度: ' + acceleration.x + '\n' +
              'Y 軸における加速度: ' + acceleration.y + '\n' +
              'Z 軸における加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '     + acceleration.timestamp + '\n');
    };



accelerometerError
==================

加速度情報の取得に失敗したときに呼び出されるコールバック関数です。

    function() {
        // エラー処理
    }



accelerometerOptions
====================

加速度センサーを取得する際のパラメーターを表します。

オプション
-------

- __frequency:__ 加速度情報の取得頻度をミリ秒単位で表します。 _(Number)_ (デフォルト: 10000)

