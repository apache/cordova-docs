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

# deviceready

コルドバが完全に読み込まれたときに発生します。

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 詳細

このイベントは、任意のアプリケーションに不可欠です。それ信号をコルドバのデバイス Api が読み込まれているにアクセスする準備が整いました。

2 つのコード ベースから成っているコルドバ: ネイティブと JavaScript。 ネイティブ コードを読み込み、カスタム読み込み画像が表示されます。 ただし、DOM 読み込まれる一度 java スクリプトの設定を読み込むだけ。 これは、対応するネイティブ コードが使用可能になる前に潜在的コルドバ JavaScript 関数を呼び出すことができます web アプリを意味します。

`deviceready`コルドバが完全に読み込まれた後に発生します。 1 回のイベントが発生し、安全にすることができますコルドバ Api への呼び出し。 アプリケーションは、通常のイベント リスナーをアタッチ `document.addEventListener` HTML ドキュメント DOM が読み込まれる。

`deviceready`イベントの動作はやや異なります他人から。任意のイベント ハンドラーを登録後、 `deviceready` イベントが発生したそのすぐにコールされるコールバック関数。

## サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
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
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>