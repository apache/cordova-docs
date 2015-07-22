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

title: show
---

show
===============

スプラッシュスクリーンを表示します。

    navigator.splashscreen.show();

概要
-----------

navigator.splashscreen.show() はアプリケーションのスプラッシュスクリーンを表示します。

サポートされているプラットフォーム
-------------------

- Android
- iOS

[使用例](../storage/storage.opendatabase.html)
-------------

    navigator.splashscreen.show();

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>スプラッシュスクリーン使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            navigator.splashscreen.show();
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
