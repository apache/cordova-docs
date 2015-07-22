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

# batterystatus

バッテリ ステータスの変更があるときに発生します。

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## 詳細

バッテリーの充電の割合 1% 以上によって変更されたとき、またはデバイス接続している場合に発生します。

バッテリ状態ハンドラーは 2 つのプロパティを格納しているオブジェクトに渡されます。

*   **レベル**： バッテリーの充電量 （0-100) の割合。*(数)*

*   **起こしたり**： デバイスが接続されてインチ*(ブール値)*かどうかを示すブール値

通常アプリケーションに使用する必要があります `window.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   iOS
*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Windows Phone 7 と 8
*   Tizen

## Windows Phone 7 と 8 癖

Windows Phone 7 は、バッテリーのレベルを決定するネイティブ Api を提供しませんので、 `level` プロパティは使用できません。`isPlugged`パラメーター*が*サポートされています。

## 簡単な例

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>