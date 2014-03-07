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

# オフライン

アプリケーションがオフラインになり、デバイスがインターネットに接続されていないときに発生します。

    document.addEventListener("offline", yourCallbackFunction, false);
    

## 詳細

`offline`アプリケーションはもはや、インターネットにアクセスできるように、以前接続されたデバイスは、ネットワーク接続が失われたときに発生します。 接続 API と同じ情報に依存しており、場合に適用されます、 `connection.type` から変更 `NONE` 以外の値にします。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Tizen
*   Windows 8

## 簡単な例

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS の癖

初回起動時 (当てはまる場合) の最初のオフライン イベントは火に 1 秒以上かかります。

## Windows Phone 7 の癖

エミュレーターで実行しているとき、 `connection.status` は常に知られている、このイベントは*ない*火。

## Windows Phone 8 癖

エミュレーターと接続の種類のレポート `Cellular` は変化しません、イベントは*ない*火。