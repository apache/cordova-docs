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

# batterycritical

バッテリーが重大レベルのしきい値に達したときに発生します。

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterycritical", yourCallbackFunction, false);
    

## 詳細

バッテリーの充電の割合がバッテリ切れのしきい値に達したときに発生します。値は、<a href="../device/device.html">デバイス</a>固有です。

`batterycritical`ハンドラーは 2 つのプロパティを格納しているオブジェクトに渡されます。

*   **レベル**： バッテリーの充電量 （0-100) の割合。*(数)*

*   **起こしたり**： <a href="../device/device.html">デバイス</a>が<a href="../connection/connection.html">接続</a>されてインチ*(ブール値)*かどうかを示すブール値

通常アプリケーションに使用する必要があります `window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` 一度の<a href="events.html">イベント</a> リスナーをアタッチし、 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">イベント</a>が発生します。

## サポートされているプラットフォーム

*   iOS
*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Tizen

## 簡単な例

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical <a href="../storage/storage.opendatabase.html">Example</a></title>
    
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
            window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>