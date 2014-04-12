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

# org.apache.cordova.device

このプラグインを使用して、グローバルな `device` オブジェクトを生成します。このオブジェクトを使用して、デバイスのハードウェアとソフトウェアに関する情報を格納します。
このオブジェクトは、グローバルスコープに属しますが、利用できるのは `deviceready` イベント後となります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(device.cordova);
    }

## インストール

    cordova plugin add org.apache.cordova.device

## プロパティ

- device.cordova
- device.model
- device.name
- device.platform
- device.uuid
- device.version

## device.cordova

デバイスで使用している Cordova のバージョン情報を取得します.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## device.model

`device.model` を使用して、デバイスのモデル名または製品名を取得します。デバイスの製造元がこの値を設定するため、同じモデルでも異なるバージョンで値が異なる場合があります。

### サポート対象のプラットフォーム

- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### 例

    // Android:    Nexus One       は "Passion" ( Nexus One のコードネーム ) を返します。
    //             Motorola Droid  は "voles" を返します。
    // BlackBerry: Torch 9800      は "9800" を返します。
    // iOS:     iPad Mini は iPad2,5 を返し、 iPhone 5 は iPhone 5,1　を返します。詳細は http://theiphonewiki.com/wiki/index.php?title=Models をご確認ください。
    //
    var model = device.model;

### Android 特有の動作

- [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL) の代わりに [製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT) を取得します。製品名はほとんどの場合、生産時のコードネームになります。たとえば、Nexus One では `Passion` を返し、 Motorola Droid では `voles` を返します。

### Tizen 特有の動作

- ベンダーが名付けたデバイスのモデル名 ( 例 : `TIZEN` ) を返します。

### Windows Phone 7 と 8 特有の動作

- 製造元が割り当てた、デバイスのモデル名を返します。たとえば、Samsung Focus では `SGH-i917` を返します。

## device.name

__注意:__ バージョン 2.3.0 では `device.name` を使用しません。代わりに `device.model` をお使いください。

## device.platform

デバイスのオペレーティングシステム名を取得します。

    var string = device.platform;

### サポート対象のプラットフォーム

- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### 例

    // 各デバイスで異なります。例をいくつか列挙します。
    //   - "Android"
    //   - "BlackBerry 10"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;

### Windows Phone 7 特有の動作

Windows Phone 7 搭載のデバイスでは、`WinCE` を返します。

### Windows Phone 8 特有の動作

Windows Phone 8 搭載のデバイスでは、 `Win32NT` を返します。

## device.uuid

デバイスの UUID ( Universally Unique Identifier ) を取得します。 ([UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)).

    var string = device.uuid;

### 解説

UUID の生成方法は、デバイスの製造元が主導して、デバイスのプラットフォームまたはモデルにより決定されます。

### サポート対象のプラットフォーム

- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### 例

    // Android: 64 ビットの整数の乱数を文字列として返します。
    //          整数はデバイスの初回起動時に生成します。
    //
    // BlackBerry: デバイスの PIN ナンバーを文字列として返します。
    //             9 桁の一意な整数です。
    //
    // iPhone: ( UIDevice Class に関するドキュメントの意訳 )
    //         ハードウェアの複数の識別子から生成したハッシュ値の文字列を返します。
    //         各デバイスで異なることが保証されており、ユーザアカウントに紐付けることはできません。
    // Windows Phone 7 : デバイスとユーザを用いて生成したハッシュ値を返します。
    // ユーザの定義を行っていない場合、guid を生成して、アプリをアンインストールするまで、その値を保持します。
    // Tizen: デバイスの IMEI (International Mobile Equipment Identity ) を返します。 IMEI は数値です。
    // 各 GSM と UMTS 携帯電話において、一意の値です。
    var deviceID = device.uuid;

### iOS 特有の動作

iOS の `uuid` は各デバイスで一意ではありませんが、各アプリ・各インストールで一意となります。アプリを削除し、再インストールした場合、この値は変化します。また、iOS のバージョンアップ、アプリのバージョンアップをしたときにも変更される可能性があります ( iOS 5.1 で現象を確認 ) 。`uuid` は不変の値ではありません。

### Windows Phone 7 と 8 特有の動作

Windows Phone 7 の `uuid` に関しては `ID_CAP_IDENTITY_DEVICE` の許可が必要です。 Microsoft はこのプロパティーのサポートを近い将来に打ち切ることでしょう。この要件を解除できない場合、アプリでは、固定の guid を生成します。デバイスにアプリがインストールされている間は、この guid を保持します。

## device.version

オペレーティングシステムのバージョンを取得します。

    var string = device.version;

### サポート対象のプラットフォーム

- Android 2.1+
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### 例

    // Android:    Froyo OS では "2.2" を返します。
    //             Eclair OS では "2.1" 、 "2.0.1" または "2.0" を返します。
    //             アップデート時のバージョンの場合、 "2.1-update1" のように返すこともあります。
    //
    // BlackBerry: OS 6.0 を搭載した Torch 9800 では "6.0.0.600" を返します。
    //
    // iPhone:     iOS 3.2 では "3.2" を返します。
    //
    // Windows Phone 7: OS の バージョンナンバーを返します。 Mango では 7.10.7720 を返します。
    // Tizen: "TIZEN_20120425_2" を返します。
    var deviceVersion = device.version;

