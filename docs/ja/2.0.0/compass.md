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


Compass
=======

> デバイスの向いている方向に関する情報を取得します。

メソッド
-------

- compass.getCurrentHeading
- compass.watchHeading
- compass.clearWatch
- compass.watchHeadingFilter    (廃止)
- compass.clearWatchFilter      (廃止)

引数
---------

- compassSuccess
- compassError
- compassOptions
- compassHeading

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Compass" value="org.apache.cordova.CompassListener" />

### Bada

    パーミッションの設定は必要ありません。

### BlackBerry WebWorks

    パーミッションの設定は必要ありません。

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Compass</key>
        <string>CDVLocation</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_SENSORS" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)



compass.getCurrentHeading
=========================

現在のコンパスの向きを取得します。

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

概要
-----------

コンパスはデバイスが向いている方向を感知するセンサーです。コンパスはその方角を0から359.99の範囲で計測します。

コンパスの向き情報は、 compassSuccess コールバック関数の CompassHeading オブジェクトを通じて返されます。

サポートされているプラットフォーム
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) ハードウェア内で有効な場合
- Bada 1.2 & 2.x

使用例
-------------

    function onSuccess(heading) {
        alert('現在の方位: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('コンパスのエラーが発生しました: ' + error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>コンパスの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }

        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            alert('現在の方位: ' + heading.magneticHeading);
        }

        // onError: 方位の取得に失敗
        //
        function onError(compassError) {
            alert('コンパスのエラーが発生しました: ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>




compass.watchHeading
====================

コンパス方位を一定の時間間隔で取得します。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);

概要
-----------

コンパスはデバイスが向いている方向を感知するセンサーです。コンパスはその方角を0から359.99の範囲で計測します。

`compass.watchHeading` 関数は一定の時間間隔でデバイスの現在の方位を取得します。方位情報が取得されるごとに `headingSuccess` コールバック関数が実行されます。時間間隔は `compassOptions` オブジェクトの `frequency` パラメーターを通じてミリ秒単位で指定します。

本関数の戻り値である watch ID は、コンパスの監視間隔への参照を表します。 `compass.clearWatch` 関数に watch ID を渡すことで、監視を停止できます。

サポートされているプラットフォーム
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) ハードウェア内で有効な場合
- Bada 1.2 & 2.x


使用例
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = '方位: ' + heading.magneticHeading;
    };

    function onError(compassError) {
            alert('コンパスのエラーが発生しました: ' + compassError.code);
    };

    var options = { frequency: 3000 };  // 3秒ごとに更新

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>コンパスの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watch ID が現在の `watchHeading` を参照
        var watchID = null;

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // コンパスの監視を開始
        //
        function startWatch() {

            // コンパスを3秒ごとに更新
            var options = { frequency: 3000 };

            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }

        // コンパスの監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }

        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = '方位: ' + heading.magneticHeading;
        }

        // onError: 方位の取得に失敗
        //
        function onError(compassError) {
            alert('コンパスのエラーが発生しました: ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <div id="heading">方位を待機...</div>
        <button onclick="startWatch();">監視開始</button>
        <button onclick="stopWatch();">監視中止</button>
      </body>
    </html>

iOS に関する注意点
--------------

iOS では、指定された角度分だけデバイスの現在の方位が変更されたとき、 `compass.watchHeading` でそのデバイスの現在の向きを取得することもできます。方位が指定された角度以上で変更されるたび、 `headingSuccess` コールバック関数が呼び出されます。角度は、 `compassOptions` オブジェクトの `filter` パラメーターで指定します。 `compass.clearWatch` に `watch ID` を渡すことで、通常と同じように監視を停止できます。この機能は、1.6で廃止になった iOS 限定の watchHeadingFilter 関数と clearWatchFilter 関数に置き換わるものです。

iOS では、一度に一つの watchHeading のみが有効です。もし filter を用いて watchHeading が使用されている場合、 getCurrentHeading 関数または watchHeading 関数は既に存在している filter の値を、方位の角度変化量の指定に使用します。 iOS では、時間による監視より、 filter を用いた方位変化量による監視の方が効果的です。



compass.clearWatch
========================

watch ID パラメーターによって参照されるコンパスの監視を停止します。

    navigator.compass.clearWatch(watchID);

- __watchID__: `compass.watchHeading` によって返される ID。

サポートされているプラットフォーム
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) ハードウェア内で有効な場合
- Bada 1.2 & 2.x

使用例
-------------

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

    // ... 後に続く ...

    navigator.compass.clearWatch(watchID);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watch ID が現在の `watchHeading` を参照
        var watchID = null;

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // コンパスの監視を開始
        //
        function startWatch() {

            // コンパスを3秒ごとに更新
            var options = { frequency: 3000 };

            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }

        // コンパスの監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }

        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = '方位: ' + heading.magneticHeading;
        }

        // onError: 方位の取得に失敗
        //
        function onError(compassError) {
            alert('コンパスのエラーが発生しました: ' + compassError.code);
        }


        </script>
      </head>
      <body>
        <div id="heading">方位を待機...</div>
        <button onclick="startWatch();">監視開始</button>
        <button onclick="stopWatch();">監視中止</button>
      </body>
    </html>



compass.watchHeadingFilter
==========================

1.6以降はサポートされていません。同等の機能として、 `compass.watchHeading` を参照してください。



compass.clearWatchFilter
========================

1.6以降はサポートされていません。 `compass.clearWatch` を参照してください。



compassSuccess
==============

コンパス方位の取得に成功したときに、 compassHeading オブジェクトを用いてコンパス方位情報を提供するコールバック関数です。

    function(heading) {
        // 任意のコード
    }

パラメーター
----------


- __heading:__ 方位情報。 _(compassHeading)_

使用例
-------

    function onSuccess(heading) {
        alert('現在の方位: ' + heading.magneticHeading);
    };



compassError
==========

コンパス方位の取得に失敗したときに呼び出されるコールバック関数です。

使用例
-------

function(CompassError) {
    // エラー処理
}



compassOptions
==============

コンパス取得の設定をカスタマイズするためのパラメーターを表します。

オプション
-------

- __frequency:__ コンパスの向きを取得する頻度をミリ秒で表します。 _(Number)_ (デフォルト: 100)
- __filter:__ watchHeading の成功時のコールバック関数を初期化する際に必要な、角度の変化量を表します。 _(Number)_

Android に関する注意点
--------------

- filter はサポートされていません。

Windows Phone 7 に関する注意点
--------------

- filter はサポートされていません。

Bada に関する注意点
-----------

- filter はサポートされていません。




compassHeading
==========

エラーが起きた場合、 `compassSuccess` コールバック関数には `CompassHeading` オブジェクトが返されます。

プロパティー
----------
- __magneticHeading:__ ある瞬間のコンパス方位を磁北を基準に0から359.99の範囲で表します。 _(Number)_
- __trueHeading:__ ある瞬間のコンパス方位を真北を基準に0から359.99の範囲で表します。負の値は、 trueHeading の値が定まっていないことを示しています。 _(Number)_
- __headingAccuracy:__ magneticHeading の値と trueHeading の値との角度の差、偏角を表します。 _(Number)_
- __timestamp:__ コンパス方位を取得した時間を表します。 _(milliseconds)_

概要
-----------

`CompassHeading` オブジェクトは、 `compassSuccess` コールバック関数を通じてユーザーに返されます。

Android に関する注意点
--------------
- trueHeading はサポートされていません。 trueHeading には magneticHeading と同じ値が代入されます。
- このため、 Android では trueHeading と magneticHeading に差が無いので、 headingAccuracy は常に0となります。

iOS に関する注意点
----------

- trueHeading は、位置情報サービスが `navigator.geolocation.watchLocation()` によって稼動している場合にのみ返されます。
- iOS 4より上位のデバイスでは、もしデバイスが横方向などに回転していて、アプリがそれをサポートしていれば、 magneticHeading の値は現在のデバイスの向きに対応して返されます。




CompassError
==========

エラーが起きた場合、 `compassError` コールバック関数には `CompassError` オブジェクトが返されます。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します

定数
---------
- `CompassError.COMPASS_INTERNAL_ERR`
- `CompassError.COMPASS_NOT_SUPPORTED`

概要
-----------

エラーが起きた場合、 `compassError` コールバック関数には `CompassError` オブジェクトが返されます。



