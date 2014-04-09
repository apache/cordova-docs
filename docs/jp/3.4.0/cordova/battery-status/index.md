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

# org.apache.cordova.battery-status

このプラグインを使用して、 [Battery Status Events API](http://www.w3.org/TR/2011/WD-battery-status-20110915/) の旧バージョンを実装します。

これにより、以下の 3 つの `window` イベントを追加できます。

* batterystatus
* batterycritical
* batterylow

## インストール

    cordova plugin add org.apache.cordova.battery-status

## batterystatus

バッテリー残量が変化した場合 ( 最小値 1 パーセント) 、または、デバイスの充電または充電を停止した場合、このイベントが発火します。

以下の 2 つのプロパティを格納したオブジェクトを、battery status ハンドラーに渡します。

- __level__: バッテリー残量を示すパーセンテージ ( 0-100 ) _(Number)_

- __isPlugged__: デバイスが充電中かどうか示す boolean  _(Boolean)_

`deviceready` イベントが発火した後にイベントリスナーをアタッチ ( attach ) するとき、`window.addEventListener` を、アプリは通常使用します。

( 原文に例示の記載なし ) 

### サポート対象のプラットフォーム

- Amazon Fire OS
- iOS
- Android
- BlackBerry 10
- Windows Phone 7 and 8
- Tizen

### Windows Phone 7 と 8 特有の動作

Windows Phone 7 では、バッテリー残量のレベルを検知するネイティブ API を提供していません。よって、 `level` プロパティを使用できません。 一方、 `isPlugged` パラメータは _サポートしています。_

### 例

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // イベントの処理　
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

## batterycritical

バッテリー残量が非常に少なった場合に、このイベントが発火します。しきい値は、デバイス毎に異なります。

以下の 2 つのプロパティを格納したオブジェクトを、 `batterycritical` ハンドラーに渡します。

- __level__: バッテリー残量を示すパーセンテージ ( 0-100 ) _(Number)_

- __isPlugged__: デバイスが充電中かどうか示す boolean  _(Boolean)_

`deviceready` イベントが発火した後にイベントリスナーをアタッチ ( attach ) するとき、`window.addEventListener` を、アプリは通常使用します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- iOS
- Android
- BlackBerry 10
- Tizen

### 例

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // バッテリー残量が残っていない場合の処理
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }

## batterylow

The event fires when the percentage of battery charge has reached the
low battery threshold, device-specific value.

バッテリー残量が少なった場合に、このイベントが発火します。しきい値は、デバイス毎に異なります。

以下の 2 つのプロパティを格納したオブジェクトを、 `batterylow` ハンドラーに渡します。

- __level__: バッテリー残量を示すパーセンテージ ( 0-100 ) _(Number)_

- __isPlugged__: デバイスが充電中かどうか示す boolean  _(Boolean)_

`deviceready` イベントが発火した後にイベントリスナーをアタッチ ( attach ) するとき、`window.addEventListener` を、アプリは通常使用します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- iOS
- Android
- BlackBerry 10
- Tizen

### 例

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // バッテリー残量が少ない場合の処理
        alert("Battery Level Low " + info.level + "%");
    }

