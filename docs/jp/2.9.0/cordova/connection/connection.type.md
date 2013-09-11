---
license: Licensed to the Apache Software Foundation (ASF) under one
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

connection.type
===================

使われているネットワーク接続のタイプを確認します。

概要
-----------

このプロパティーは、デバイスのネットワーク接続状態や接続のタイプを手早く取得出来ます。

サポートされているプラットフォーム
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 以上)
- Tizen
- Windows Phone 7 and 8
- Windows 8

使用例
-------------

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = '不明な接続';
        states[Connection.ETHERNET] = 'イーサネット接続';
        states[Connection.WIFI]     = 'WiFi接続';
        states[Connection.CELL_2G]  = '2G接続';
        states[Connection.CELL_3G]  = '3G接続';
        states[Connection.CELL_4G]  = '4G接続';
        states[Connection.CELL]     = '汎用接続';
        states[Connection.NONE]     = 'ネットワーク接続なし';

        alert('コネクションタイプ: ' + states[networkState]);
    }

    checkConnection();

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            checkConnection();
        }

        function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = '不明な接続';
            states[Connection.ETHERNET] = 'イーサネット接続';
            states[Connection.WIFI]     = 'WiFi接続';
            states[Connection.CELL_2G]  = '2G接続';
            states[Connection.CELL_3G]  = '3G接続';
            states[Connection.CELL_4G]  = '4G接続';
            states[Connection.CELL]     = '汎用接続';
            states[Connection.NONE]     = 'ネットワーク接続なし';

            alert('コネクションタイプ: ' + states[networkState]);
        }

        </script>
      </head>
      <body>
        <p>ダイアログボックスがネットワーク状態を表示します。</p>
      </body>
    </html>

API の変更点
----------
Cordova 2.3.0までは、 `Connection` オブジェクトは `navigator.network.connection` にありました。その後、W3Cの仕様と一致させるため、 `navigator.connection` に変更されました。`navigator.network.connection` はまだ存在していますが、非推奨であり、将来削除されるでしょう。

iOS に関する注意点
----------

- iOS はネットワーク接続のタイプを特定することが出来ません。
    - 携帯電話ネットワークでの接続時、 `navigator.connection.type` には `Connection.CELL_2G` がセットされます。これは 2.6.0 で非推奨となり、将来のリリースでは `Connection.CELL` を返すように変更される予定です。

Windows Phone に関する注意点
--------------------

- Windows Phone Emulator は常に `navigator.connection.type` を `Connection.UNKNOWN` と返します。
- Windows Phone はネットワーク接続のタイプを特定することが出来ません。
    - 携帯電話ネットワークでの接続時、 `navigator.connection.type` には `Connection.CELL` がセットされます。

Tizen に関する注意点
--------------------

- Tizen は WiFi または 携帯電話ネットワークに接続されているかどうかのみを特定できます。
    - 携帯電話ネットワークでの接続時、 `navigator.connection.type` には `Connection.CELL_2G` がセットされます。
