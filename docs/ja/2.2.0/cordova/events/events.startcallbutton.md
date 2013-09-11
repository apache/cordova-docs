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

startcallbutton
===========

このイベントはユーザーがスタートコールボタンを押したときに呼び出されます。

    document.addEventListener("startcallbutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトの検索ボタンの挙動を上書きしたい場合は、 'startcallbutton' イベントにイベントリスナーを登録することができます。

通常は、 Cordova の 'deviceready' イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーをセットします。

サポートされているプラットフォーム
-------------------

- BlackBerry WebWorks (OS 5.0 以上)

使用例
-------------

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);

    function onStartCallKeyDown() {
        // スタートコールボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Start Call Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova のロード完了とともに onDeviceReady を呼び出します。
        //
        // この時点では、ドキュメントの読み込みは完了していますが、 cordova-2.2.0.js はまだ完了していません。
        // Cordova のロード完了とともに
        // `deviceready` イベントが呼び出されます。
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }

        // スタートコールボタン関する操作を記述
        //
        function onStartCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
