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

# volumeupbutton

音量アップボタンを押したときに発生します。

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("volumeupbutton", yourCallbackFunction, false);
    

## 詳細

<a href="events.html">イベント</a> リスナーを登録できます、デフォルト ボリュームの動作をオーバーライドする必要がある場合、 `volumeupbutton` <a href="events.html">イベント</a>。

通常アプリケーションに使用する必要があります `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` 一度の<a href="events.html">イベント</a> リスナーをアタッチし、 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">イベント</a>が発生します。

## サポートされているプラットフォーム

*   ブラックベリー WebWorks (OS 5.0 およびより高い)

## 簡単な例

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button <a href="../storage/storage.opendatabase.html">Example</a></title>
    
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
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>