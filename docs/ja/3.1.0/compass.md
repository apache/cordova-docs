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


# コンパス

> デバイスが指している方向を取得します。

## メソッド

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (古い形式)
*   compass.clearWatchFilter (古い形式)

## 引数

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   iOS （`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# compass.getCurrentHeading

現在のコンパス方位を取得します。

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## 説明

コンパスは方向またはというデバイスは、通常から指摘装置の上部の見出しを検出するセンサーです。359.99、0 は北に 0 からの角度で見出しを測定します。

を介して、コンパス針路情報が返されます、 `CompassHeading` オブジェクトを使用して、 `compassSuccess` コールバック関数。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Tizen
*   Windows Phone 7 および 8 (ハードウェアである場合)
*   Windows 8

## 簡単な例

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>


# compass.watchHeading

定期的な間隔で角度でコンパスの見出しを取得します。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## 説明

コンパスは方向またはデバイスが指摘されている見出しを検出するセンサーです。359.99 に 0 からの角度で見出しを測定します。

`compass.watchHeading`デバイスの定期的な間隔で現在の方位を取得します。 見出しを取り出すたびに、 `headingSuccess` コールバック関数が実行されます。 経由でミリ秒単位で間隔を指定する、 `frequency` パラメーターで、 `compassOptions` オブジェクト。

返される時計 ID コンパス時計腕時計間隔を参照します。ID を使用することができます時計 `compass.clearWatch` コンパスを見て停止します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Tizen
*   Windows Phone 7 および 8 (ハードウェアである場合)
*   Windows 8

## 簡単な例

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS の癖

IOS の `compass.watchHeading` 度の指定数で変更されたときにも、デバイスの現在の方位を得ることができます。 度以上の指定された数だけ見出し変更されるたびに、 `headingSuccess` コールバック関数を実行します。 経由で変更の程度を指定する、 `filter` パラメーターで、 `compassOptions` オブジェクト。 返される時計 ID を渡すことによっていつものように時計をオフに `compass.clearWatch` 。 この機能を置き換えます以前独立した iOS だけ `watchHeadingFilter` と `clearWatchFilter` バージョン 1.6 で削除された機能です。

1 つだけ `watchHeading` iOS で一度に有効にすることができます。 場合は、 `watchHeading` 、フィルターを使用して呼び出す `getCurrentHeading` または `watchHeading` 既存のフィルターの値を使用して見出しの変更を指定します。 フィルターを使用して見出しの変更を見て時間間隔よりも効率的です。


# compass.clearWatch

時計 ID パラメーターによって参照されるコンパスを見て停止します。

    navigator.compass.clearWatch(watchID);
    

*   **watchID**: によって返される ID`compass.watchHeading`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Tizen
*   Windows Phone 7 および 8 (ハードウェアである場合)
*   Windows 8

## 簡単な例

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


# compass.watchHeadingFilter

1.6 現在サポートされなくを参照してください `compass.watchHeading` と同等の機能のため。


# compass.clearWatchFilter

1.6 現在サポートされていません。参照してください。`compass.clearWatch`.


# compassSuccess

onSuccess コールバック関数を介してコンパス針路情報を提供する、 `compassHeading` オブジェクト。

    function(heading) {
        // Do something
    }
    

## パラメーター

*   **見出し**： 見出し情報。*(compassHeading)*

## 例

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

コンパス機能の onError コールバック関数。

## 例

    function(CompassError) {
        // Handle the error
    }


# compassOptions

コンパスの検索をカスタマイズするオプションのパラメーター。

## オプション

*   **周波数**: 多くの場合、コンパス針路 (ミリ秒単位) を取得する方法。*(数)*(デフォルト: 100)

*   **フィルター**: watchHeading 成功時のコールバックを開始する必要度の変化。*(数)*

Android の癖

---

*   `filter`サポートされていません。

## Tizen の癖

*   `filter`サポートされていません。

## Windows Phone 7 と 8 癖

*   `filter`サポートされていません。


# compassHeading

A `CompassHeading` オブジェクトに返される、 `compassSuccess` コールバック関数。

## プロパティ

*   **magneticHeading**: 1 つの時点で 0 359.99 から角度での見出し。*(数)*

*   **trueHeading**: 度 0 359.99 で地理的な北極を基準にして、1 つの時点での見出し。 負の値は真針路を特定できないことを示します。 *(数)*

*   **headingAccuracy**: 報告された見出しと真方位角度偏差。*(数)*

*   **タイムスタンプ**: この見出しを決定した時。*(ミリ秒)*

## 説明

`CompassHeading`オブジェクトに返される、 `compassSuccess` コールバック関数。

## Android の癖

*   `trueHeading`レポートと同じ値はサポートされていません`magneticHeading`

*   `headingAccuracy`常に 0 の間の違いはありませんので、 `magneticHeading` と`trueHeading`.

## iOS の癖

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   IOS 4 デバイスのため、絶対位置に言及していないデバイスの現在の向きで見出し要因上記のアプリ サポートするその方向。


# CompassError

A `CompassError` オブジェクトに返される、 `compassError` コールバック関数でエラーが発生したとき。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。

## 定数

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## 説明

エラーが発生した場合、 `CompassError` オブジェクトをパラメーターとして渡されます、 `compassError` コールバック関数。
