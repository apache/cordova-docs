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

# org.apache.cordova.network-information

このプラグインを使用して、 [Network Information API](http://www.w3.org/TR/2011/WD-netinfo-api-20110607/) ( 旧バージョン ) の実装を行います。

携帯電話ネットワークと wifi 接続に関する情報、および、デバイスのインターネット接続情報を取得するときに使用します。

## インストール

    cordova plugin add org.apache.cordova.network-information

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Tizen
- Windows 8

# Connection

> `navigator.connection` 経由で提供される `connection` オブジェクトを使用して、デバイスの携帯電話ネットワークと wifi 接続情報にアクセスできます。

## プロパティ

- connection.type

## Constants

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.CELL
- Connection.NONE

## connection.type

このプロパティを使用して、デバイスのネットワーク接続の状態および接続のタイプを確認します。

### 例

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }

    checkConnection();


### API の変更点

Cordova 2.3.0 までは、 `navigator.network.connection` 経由で `Connection` オブジェクトにアクセスしましたが、W3C の仕様に準拠するため、 `navigator.connection` 経由に変更しました。 `navigator.network.connection` は利用できますが、推奨しません。将来、削除する予定です。

### iOS 特有の動作

- iOS では、携帯ネットワーク接続のタイプを特定できません。
    - すべての携帯ネットワークデータにおいて、 `navigator.connection.type` を `Connection.CELL` に設定します。

### Windows Phone 特有の動作

- エミュレーターで実行しているとき、常に、 `navigator.connection.type` を `Connection.UNKNOWN` として認識します。 

- Windows Phone では、ネットワーク接続のタイプを認識することが出来ません。
    - すべての携帯ネットワークデータにおいて、 `navigator.connection.type` を `Connection.CELL` に設定します。

### Tizen 特有の動作

- Tizen では、WiFi または 携帯電話ネットワーク接続のみ認識できます。
    - すべての携帯ネットワークデータにおいて、 `navigator.connection.type` を `Connection.CELL_2G` に設定します。

# ネットワーク関連のイベント

## offline

アプリがオフラインになったときに、このイベントが発火して、インターネット接続が切れます。

    document.addEventListener("offline", yourCallbackFunction, false);

### 詳細

デバイスのネットワーク接続が切れたときに、 `オフライン` ( offline ) イベントが発火します。ネットワーク接続が切れているため、アプリは、インターネットへアクセスできません。Connection API と同じ情報を使用して、 `connection.type` が `NONE` から他の値に変わったときに発火します。

`deviceready` イベントの発火後、イベントリスナーをアタッチ ( attach ) するには、通常、 `document.addEventListener` を使用しなければなりません。

### 例

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // オフライン イベントの処理
    }


### iOS 特有の動作

初回起動 ( initial startup ) 中は、最初の オフライン ( offline ) イベントが発火するまで ( 発火の条件が揃った場合 )、最低 1 秒かかります。

### Windows Phone 7 特有の動作

エミュレーターで実行するとき、 `connection.status` は、常に、unknown になっています。よって、このイベントは、 _発火しません_ 。

### Windows Phone 8 特有の動作

エミュレーターを使用すると、常に、接続タイプ ( connection type ) を `Cellular` と認識します。 よって、このイベントは、 _発火しません_ 。

## online

アプリが、オンラインになったとき、このイベントが発火し、インターネットに接続します。

    document.addEventListener("online", yourCallbackFunction, false);

### 詳細

アプリからのインターネットへの接続を行うため、ネットワーク接続を行っていないデバイスがネットワーク接続を行うとき、 `オンライン` ( online ) イベントが発火します。Connection API と同じ情報を使用して、 `connection.type` が `NONE` に変わったときに発火します。

`deviceready` イベントの発火後、イベントリスナーをアタッチ ( attach ) するには、通常、 `document.addEventListener` を使用しなければなりません。

### 例

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // オンライン イベントの処理
    }


### iOS 特有の動作

初回起動 ( initial startup ) 中は、最初の オンライン ( online ) イベントが発火するまで ( 発火の条件が揃った場合 )、最低 1 秒かかります。また、このイベントは、 
`connection.type` が `UNKNOWN` と認識される前に発火します。

### Windows Phone 7 特有の動作

エミュレーターで実行するとき、 `connection.status` は、常に、unknown になっています。よって、このイベントは、 _発火しません_ 。

### Windows Phone 8 特有の動作

エミュレーターを使用すると、常に、接続タイプ ( connection type ) を `Cellular` と認識します。 よって、このイベントは、 _発火しません_ 。
