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

searchbutton
===========

このイベントはユーザーが検索ボタンを押したときに呼び出されます。

    document.addEventListener("searchbutton", yourCallbackFunction, false);

詳細
-------

もし Android にデフォルトの検索ボタンの挙動を上書きしたい場合は、 'searchbutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の '<a href="events.deviceready.html">deviceready</a>' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- Android

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // 検索ボタン関する操作を記述
    }

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Search Button <a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに on<a href="../device/device.html">Device</a>Ready を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.0.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `<a href="events.deviceready.html">deviceready</a>` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("<a href="events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
        }

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // イベントリスナーを登録
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }

        // 検索ボタン関する操作を記述
        //
        function onSearchKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
