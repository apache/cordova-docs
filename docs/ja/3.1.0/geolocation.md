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


# 地理位置情報

> `geolocation`オブジェクトの場所データに基づいて、デバイスの GPS センサーから推論されるかネットワーク信号へのアクセスを提供します。

`Geolocation`緯度と経度などのデバイスの場所についてを説明します。 位置情報の共通のソースはグローバル ポジショニング システム （GPS） と IP アドレス、RFID、WiFi および Bluetooth の MAC アドレス、および GSM/cdma 方式携帯 Id などのネットワーク信号から推定される場所にもあります。 API は、デバイスの実際の場所を返すことの保証はありません。

この API は[W3C 地理位置情報 API 仕様][1]に基づいており、既に実装を提供しないデバイス上のみで実行します。

 [1]: http://dev.w3.org/geo/api/spec-source.html

**重要なプライバシーの注意：**地理位置情報データの収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシーは他の当事者とデータ (たとえば、粗い、罰金、郵便番号レベル、等) の精度のレベルでは共有されているかどうか、アプリが地理位置情報データを使用する方法を議論すべきです。 地理位置情報データと一般に見なされる敏感なそれは人の所在を明らかにすることができますので、保存される場合、彼または彼女の旅行の歴史。 したがって、アプリのプライバシー ポリシーに加えて、強くする必要があります (デバイス オペレーティング システムしない場合そう既に) 地理位置情報データにアクセスするアプリの前にちょうど時間通知を提供しています。 その通知は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 詳細については、プライバシーに関するガイドを参照してください。

## メソッド

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## 引数

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## オブジェクト (読み取り専用)

*   Position
*   PositionError
*   Coordinates

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   iOS （`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# geolocation.getCurrentPosition

として、デバイスの現在位置を返します、 `Position` オブジェクト。

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);
    

## パラメーター

*   **geolocationSuccess**: 現在の位置を渡されるコールバック。

*   **geolocationError**: *(省略可能)*エラーが発生した場合に実行されるコールバック。

*   **geolocationOptions**: *(オプション)*地理位置情報のオプションです。

## 説明

`geolocation.getCurrentPosition`非同期関数です。 デバイスの現在の位置を返します、 `geolocationSuccess` コールバックを `Position` オブジェクトをパラメーターとして。 エラーがある場合、 `geolocationError` コールバックに渡される、 `PositionError` オブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

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
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
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
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


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


# geolocation.clearWatch

によって参照される、デバイスの場所への変更を見て停止、 `watchID` パラメーター。

    navigator.geolocation.clearWatch(watchID);
    

## パラメーター

*   **watchID**: の id、 `watchPosition` をクリアする間隔。(文字列)

## 説明

`geolocation.clearWatch`をオフにして、デバイスの場所の変更を見て停止します、 `geolocation.watchPosition` によって参照されます。`watchID`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    //オプション: 位置の変化を監視し、頻繁に使用//正確な位置取得法利用可能。
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

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
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
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
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
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
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>


# 座標

位置の地理座標を記述するプロパティのセットです。

## プロパティ

*   **緯度**: 10 度緯度。*(数)*

*   **経度**: 10 進度の経度。*(数)*

*   **高度**: 楕円体上のメートルの位置の高さ。*(数)*

*   **精度**: メートルの緯度と経度座標の精度レベル。*(数)*

*   **altitudeAccuracy**： メートルの高度座標の精度レベル。*(数)*

*   **見出し**: 進行方向、カウント、真北から時計回りの角度で指定します。*(数)*

*   **速度**： 毎秒メートルで指定されたデバイスの現在の対地速度。*(数)*

## 説明

`Coordinates`オブジェクトに使用されて、 `Position` は、現在の位置のための要求でコールバック関数を利用可能なオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback
    //
    var onError = function() {
        alert('onError!');
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
                            'Longitude: '            + position.coords.longitude        + '<br/>' +
                            'Altitude: '             + position.coords.altitude         + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy         + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
                            'Heading: '              + position.coords.heading          + '<br/>' +
                            'Speed: '                + position.coords.speed            + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    

## Android の癖

**altitudeAccuracy**： 返すの Android デバイスでサポートされていません`null`.


# 位置

含まれています `Position` 座標、地理位置情報 API で作成されたタイムスタンプ。

## プロパティ

*   **coords**: 地理的座標のセット。*（座標）*

*   **タイムスタンプ**: 作成のタイムスタンプを `coords` 。*（日）*

## 説明

`Position`オブジェクトの作成しコルドバ、によって移入されコールバック関数を通じてユーザーに返されます。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

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
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                                'Longitude: '         + position.coords.longitude        + '<br />' +
                                'Altitude: '          + position.coords.altitude         + '<br />' +
                                'Accuracy: '          + position.coords.accuracy         + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: '           + position.coords.heading          + '<br />' +
                                'Speed: '             + position.coords.speed            + '<br />' +
                                'Timestamp: '         + position.timestamp               + '<br />';
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
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# PositionError

A `PositionError` オブジェクトに渡されます、 `geolocationError` コールバック エラーが発生します。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。

*   **メッセージ**: 発生したエラーの詳細を説明するエラー メッセージ。

## 定数

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 説明

`PositionError`オブジェクトに渡されます、 `geolocationError` 地理位置情報と、エラーが発生した場合のコールバック関数。

### `PositionError.PERMISSION_DENIED`

ユーザーの位置情報を取得するアプリケーションを許可していない場合に返されます。これはプラットフォームに依存します。

### `PositionError.POSITION_UNAVAILABLE`

デバイスが、位置を取得することができます返されます。一般にこれは、デバイスのネットワーク接続や衛星の修正を得ることができません。

### `PositionError.TIMEOUT`

デバイスがで指定された時間内の位置を取得することができるときに返される、 `geolocationOptions` ' `timeout` プロパティ。 使用すると `geolocation.watchPosition` 、このエラーを渡すことができます、 `geolocationError` コールバックごと `timeout` (ミリ秒単位)。


# geolocationSuccess

地理位置が利用可能になったときに実行されるユーザーのコールバック関数 (から呼び出されると `geolocation.getCurrentPosition` ）、（から呼び出されたときに、位置が変更されたとき、または`geolocation.watchPosition`).

    function(position) {
        // Do something
    }
    

## パラメーター

*   **位置**: デバイスによって返される地理位置。*（位置）*

## 例

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }


# geolocationError

地理位置情報機能のエラーがあるときに実行されるユーザーのコールバック関数。

    function(error) {
        // Handle the error
    }
    

## パラメーター

*   **エラー**: デバイスによって返されるエラーです。*(PositionError)*


# geolocationOptions

地理位置情報の検索をカスタマイズするための省略可能なパラメーター`Position`.

    {maximumAge: 3000、タイムアウト: 5000、enableHighAccuracy: true};
    

## オプション

*   **enableHighAccuracy**： 最高の結果が、アプリケーションに必要があることのヒントを示します。 既定では、デバイスの取得を試みます、 `Position` ネットワーク ベースのメソッドを使用します。 このプロパティを設定する `true` 衛星測位などのより正確な方法を使用するためにフレームワークに指示します。 *(ブール値)*

*   **タイムアウト**: への呼び出しから通過が許可される時間 (ミリ秒単位) の最大長 `geolocation.getCurrentPosition` または `geolocation.watchPosition` まで対応する、 `geolocationSuccess` コールバックを実行します。 場合は、 `geolocationSuccess` この時間内に、コールバックは呼び出されません、 `geolocationError` コールバックに渡される、 `PositionError.TIMEOUT` のエラー コード。 (と組み合わせて使用するときに注意してください `geolocation.watchPosition` の `geolocationError` 間隔でコールバックを呼び出すことができますすべて `timeout` ミリ秒 ！)*(数)*

*   **maximumAge**： 年齢があるミリ秒単位で指定した時間よりも大きくないキャッシュされた位置を受け入れます。*(数)*

## Android の癖

限り android 2.x エミュレーター地理位置情報の結果を返さない、 `enableHighAccuracy` オプションを設定します。`true`.
