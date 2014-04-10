<!---
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
-->

# org.apache.cordova.device-motion

このプラグインを使用して、デバイス内臓の加速度センサーが持つ情報を取得します。加速度センサーは、 _x_, _y_, _z_ 軸の 3 次元で、デバイスの傾きの変化 ( _delta_ ) を検知するモーションセンサーの 1 種です。

## インストール

    cordova plugin add org.apache.cordova.device-motion

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## メソッド

- navigator.accelerometer.getCurrentAcceleration
- navigator.accelerometer.watchAcceleration
- navigator.accelerometer.clearWatch

## オブジェクト

- Acceleration

## navigator.accelerometer.getCurrentAcceleration

_x_, _y_, _z_ 軸方向に働いている加速度を取得します。

`accelerometerSuccess` コールバック関数に、これらの加速度の値を返します。


    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);


### 例

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

### iOS 特有の動作

- iOS では、加速度情報の取得を、リアルタイムで行うことができません。

- 加速度の監視とデータの取得を、一定の間隔で行う必要があります。

- そのため、 `watchAccelerometer` コールから報告を受けた直近の値を、`getCurrentAcceleration` では使用します。

## navigator.accelerometer.watchAcceleration

`accelerometerSuccess` コールバック関数を一定の間隔で毎回実行して、デバイスの現在の `Acceleration` を取得します。 `acceleratorOptions` オブジェクトの `frequency` パラメーターを使用して、間隔 ( ミリ秒単位 ) を指定します。

返された watch ID を使用して、加速度センサーの監視間隔 ( watch interval ) を参照します。また、加速度センサーの監視を停止するときには、 `navigator.accelerometer.clearWatch` とこの ID を使用します。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);

- __accelerometerOptions__: オブジェクト ( 以下のキーを保持 ) 
  - __frequency__: `Acceleration` を取得する間隔　( ミリ秒単位 ) _(Number)_ ( デフォルトでは、10000 )


###  例

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('onError!');
    };

    var options = { frequency: 3000 };  // 3 秒毎に更新

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

### iOS 特有の動作

success コールバック関数を、 API は、リクエストした間隔で呼び出しますが、その間隔は、40ms から 1000ms の間となっています。たとえば、3 秒間隔 ( 3000ms ) でリクエストを行った場合、API 側は、データのリクエストを1 秒ごとに行いますが、success コールバック関数の実行を 3 秒ごとに行います。


## navigator.accelerometer.clearWatch

`watchID` パラメーターを参照して、`Acceleration` の監視を停止します。

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: `navigator.accelerometer.watchAcceleration` が返す ID 

###  例

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

    // ... 少し経過してから ...

    navigator.accelerometer.clearWatch(watchID);

## Acceleration

特定の時間に取得した `Accelerometer` データを格納します。加速度の値には、重力加速度 ( 9.81 m/s^2 )
 も含まれるため、デバイスの画面を上に向け、水平にした場合、 返される _x_, _y_, _z_ の値は、`0`, `0`, `9.81` となります。

### プロパティ

- __x__:  x 軸における速度の変化量 ( m/s^2 単位 ) _(Number)_
- __y__:  y 軸における速度の変化量 ( m/s^2 単位 ) _(Number)_
- __z__:  z 軸における速度の変化量 ( m/s^2 単位 ) _(Number)_
- __timestamp__: 作成時のタイムスタンプ ( ミリ秒単位 ) _(DOMTimeStamp)_

