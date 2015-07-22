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

title: hide
---

hide
===============

スプラッシュスクリーンを非表示にします。

    navigator.splashscreen.hide();

概要
-----------

navigator.splashscreen.hide() はアプリケーションのスプラッシュスクリーンを非表示にします。

サポートされているプラットフォーム
-------------------

- Android
- iOS

[使用例](../storage/storage.opendatabase.html)
-------------

    navigator.splashscreen.hide();

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
            navigator.splashscreen.hide();
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>

iOS に関する注意点
------------

1. Cordova.plist の中で、 **"AutoHideSplashScreen”** を false に設定するために [値を編集](guide_project-settings_index.md.html#Project%20Settings) する必要があります

2. もしスプラッシュスクリーンを非表示にするのを 2 秒間遅らせたい場合は、 **deviceready** イベントハンドラー内で設定できます:

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);
