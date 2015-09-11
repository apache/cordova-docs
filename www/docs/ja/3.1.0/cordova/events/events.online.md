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

# オンライン

アプリケーションは、オンラインになるし、<a href="../device/device.html">デバイス</a>がインターネットに<a href="../connection/connection.html">接続</a>するときに発生します。

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", yourCallbackFunction, false);
    

## 詳細

`online`以前<a href="../connection/connection.html">接続</a>されていない<a href="../device/device.html">デバイス</a>が、インターネットへのアプリケーション アクセスを許可するネットワーク<a href="../connection/connection.html">接続</a>を受信するときに発生します。 <a href="../connection/connection.html">接続</a> API と同じ情報に依存しており、火災時の値 `<a href="../connection/connection.type.html">connection.type</a>` になります。`NONE`.

通常アプリケーションに使用する必要があります `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` 一度の<a href="events.html">イベント</a> リスナーをアタッチし、 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">イベント</a>が発生します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Tizen
*   Windows 8

## 簡単な例

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", onOnline, false);
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS の癖

初回起動時には、最初の `online` (当てはまる場合) <a href="events.html">イベント</a>が少なくとも火を前に第 2 `<a href="../connection/connection.type.html">connection.type</a>` は`UNKNOWN`.

## Windows Phone 7 の癖

エミュレーターで実行しているとき、 `connection.status` は常に知られているので、この<a href="events.html">イベント</a>は*ない*火。

## Windows Phone 8 癖

エミュレーターと<a href="../connection/connection.html">接続</a>の種類のレポート `Cellular` は変化しません、<a href="events.html">イベント</a>は*ない*火。