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

volumeupbutton
===========

このイベントはユーザーがボリュームアップボタンを押したときに呼び出されます。

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);

詳細
-------

もしデフォルトのボリュームアップボタンの挙動を上書きしたい場合は、 `volumeupbutton` イベントにイベントリスナーを登録することができます。

通常は、 `deviceready` イベントを受け取った後、 `document.addEventListener` を通じてイベントリスナーを登録します。

サポートされているプラットフォーム
-------------------

- BlackBerry WebWorks (OS 5.0 以上)

使用例
-------------

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // ボリュームアップボタン関する操作を記述
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Volume Up Button 使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // イベントリスナーを登録
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }

        // ボリュームアップボタン関する操作を記述
        //
        function onVolumeUpKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
