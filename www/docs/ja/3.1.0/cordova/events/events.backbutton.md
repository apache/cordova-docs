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

# 戻るボタン

ユーザーが [戻る] ボタンを押したときに発生します。

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("backbutton", yourCallbackFunction, false);
    

## 詳細

既定の [戻る] ボタンの動作をオーバーライドする<a href="events.html">イベント</a> リスナーを登録、 `backbutton` を呼び出すことによって通常の<a href="events.html">イベント</a> `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` を受信したら、 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">イベント</a>。 [戻る] ボタンの動作をオーバーライドする他のメソッドを呼び出す必要はなくなったです。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Windows Phone 7 と 8

## 簡単な例

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>