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

# globalization.getDateNames

月の名前またはクライアントのユーザーの好みやカレンダーに応じて曜日の配列を返します。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## 説明

名前の配列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが含まれています、 `value` プロパティ、 `Array` の `String` の値。 年または選択したオプションに応じて、週の最初の日の最初の月のいずれかから始まってアレイ機能の名前。

名前の取得エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {0} 型: '幅'、項目： '月'}
    

値 `options.type` することができます `narrow` または`wide`.

値 `options.item` することができます `months` または`days`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、この例の表示 12 ポップアップ ダイアログ ボックスのようなテキストで、毎月のシリーズ `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>