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

# connection.type

現在アクティブなネットワーク<a href="connection.html">接続</a>を確認します。

## 説明

このプロパティは<a href="../device/device.html">デバイス</a>のネットワーク<a href="connection.html">接続</a>状態を確認する速い方法を提供し、<a href="connection.html">接続</a>の種類。

## サポートされているプラットフォーム

*   iOS
*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

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
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            checkConnection();
        }
    
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
    
        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>
    

## API の変更

コルドバ 2.3.0、まで、 `Connection` 経由でアクセスされたオブジェクトが `navigator.network.connection` 、それに変更されましたが後 `navigator.connection` W3C の仕様に一致します。 それはまだ元の場所は廃止され、最終的に削除されます。

## iOS の癖

*   iOS は、携帯電話のネットワーク<a href="connection.html">接続</a>の種類を検出できません。 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone の癖

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone 携帯電話ネットワーク<a href="connection.html">接続</a>の種類を検出できません。
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen の癖

*   Tizen には、WiFi または携帯電話の<a href="connection.html">接続</a>だけを検出できます。 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.