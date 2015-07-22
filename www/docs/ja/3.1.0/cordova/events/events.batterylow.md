---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# batterylow

バッテリは、低レベルのしきい値に達したときに発生します。

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## 詳細

バッテリーの充電の割合がバッテリ低下しきい値、デバイス固有の値に達したときに発生します。

`batterylow`ハンドラーは 2 つのプロパティを格納しているオブジェクトに渡されます。

*   **レベル**： バッテリーの充電量 （0-100) の割合。*(数)*

*   **起こしたり**： デバイスが接続されてインチ*(ブール値)*かどうかを示すブール値

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   iOS
*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Tizen

## 簡単な例

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>