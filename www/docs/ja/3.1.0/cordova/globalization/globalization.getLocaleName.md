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

# globalization.getLocaleName

クライアントの現在のロケール設定の文字列識別子を取得します。

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## 説明

ロケール識別子の文字列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `String` 値。

ロケールを取得中にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、テキストとポップアップ ダイアログが表示されます`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getLocaleName Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   ISO 3166 で定義された現在の国/地域の 2 文字コードを返します。