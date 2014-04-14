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

# org.apache.cordova.device-orientation

このプラグインを使用して、デバイスのコンパスにアクセスします。コンパスは、デバイスが指し示す方向・方位を検知するセンサーの 1 種です。通常、デバイスの上部最先端を起点とします。0 から 359.99 度の角度で方位を計算します。0 は、北を意味します。

## インストール

    cordova plugin add org.apache.cordova.device-orientation

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 と 8 ( ハードウェアに搭載している場合 )
- Windows 8

## メソッド

- navigator.compass.getCurrentHeading
- navigator.compass.watchHeading
- navigator.compass.clearWatch

## navigator.compass.getCurrentHeading

コンパスの現在の方位を取得します。 `compassSuccess` コールバック関数を使用して、 `CompassHeading` オブジェクト経由でコンパスの方位を返します。

    navigator.compass.getCurrentHeading(compassSuccess, compassError);

### 例

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('CompassError: ' + error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

## navigator.compass.watchHeading

デバイスの方位を一定の間隔で取得します。方位を取得するたび、 `headingSuccess` コールバック関数を実行します。

返された watch ID を使用して、コンパスを監視する間隔を参照します。 `navigator.compass.clearWatch` に watch ID を使用して、navigator.compass の監視を停止できます。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);

`compassOptions` には、以下のオプションを格納できます。

- __frequency__: コンパスの方位の取得頻度 ( ミリ秒、デフォルト : 100 ) _(Number)_ 

- __filter__: watchHeading の成功時のコールバック関数を実行する際に必要となる、角度の変化です。値を設定した場合、 __frequency:__ を無視します。 _(Number)_

### 例

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };

    var options = {
        frequency: 3000
    }; // 3 秒間隔で更新

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);


### iOS 特有の動作

iOS では、1 度に 1 つの `watchHeading` のみ有効です。
`watchHeading` が filter を使用する場合、`getCurrentHeading` または `watchHeading` を呼び出す際、方位の変化を特定するため、既存の filter 値を使用します。filter を使用した方位の変化の監視は、時間の間隔を使用するより、効率的です。

### Amazon Fire OS 特有の動作

- `filter` はサポートしません。

### Android 特有の動作

- `filter` はサポートしません。

### Firefox OS 特有の動作

- `filter` はサポートしません。

### Tizen 特有の動作

- `filter` はサポートしません。

### Windows Phone 7 と 8 特有の動作

- `filter` はサポートしません。

## navigator.compass.clearWatch

watch ID パラメーターを使用して参照を行っている、方位の監視を停止します。

    navigator.compass.clearWatch(watchID);

- __watchID__: `navigator.compass.watchHeading` が返す ID.

### 例

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

    // ... 少し経過してから ...

    navigator.compass.clearWatch(watchID);

## CompassHeading

`compassSuccess` コールバック関数に `CompassHeading` オブジェクトを渡します。

### プロパティー

- __magneticHeading__: ある瞬間の磁方位 （ 磁北を基準 ）。0 から 359.99 度の範囲で表します。 _(Number)_

- __trueHeading__: ある瞬間の真方位 （ 真北を基準 ）。0 から 359.99 度の範囲で表します。負の値は、真方位の値が定まっていないことを示します。  _(Number)_

- __headingAccuracy__: 取得した磁方位と真方位との角度の差 （ 偏角 ) _(Number)_

- __timestamp__: 方位を取得した時間 _(milliseconds)_


### Amazon Fire OS 特有の動作

- `trueHeading` プロパティーをサポートしません。 `magneticHeading` と同じ値を取得します。

- `trueHeading` と `magneticHeading` が同じ値になるため、 `headingAccuracy` プロパティーは常に 0 となります。

### Android 特有の動作

- `trueHeading` プロパティーをサポートしません。 `magneticHeading` と同じ値を取得します。

- `trueHeading` と `magneticHeading` が同じ値になるため、 `headingAccuracy` プロパティーは常に 0 となります。

### Firefox OS 特有の動作

- `trueHeading` プロパティーをサポートしません。 `magneticHeading` と同じ値を取得します。

- `trueHeading` と `magneticHeading` が同じ値になるため、 `headingAccuracy` プロパティーは常に 0 となります。

### iOS 特有の動作

- `navigator.geolocation.watchLocation()` 経由で、位置情報サービスが使用できる場合のみ、`trueHeading` を返します。

- デバイスの傾きをアプリ側で許容する場合には、それも方位の要素に組み入れて計算を行い、絶対位置を参照しません。

## CompassError

エラーが起きたとき、 `compassError` コールバック関数に `CompassError` オブジェクトを渡します。

### プロパティー

- __code__: 事前に定義された以下のエラーコードのうちの 1 つ

### 定数

- `CompassError.COMPASS_INTERNAL_ERR`
- `CompassError.COMPASS_NOT_SUPPORTED`

