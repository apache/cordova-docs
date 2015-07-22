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

# globalization.getCurrencyPattern

書式設定および通貨の値によると、クライアントのユーザーの基本設定と ISO 4217 通貨コードを解析するパターン文字列を返します。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## 説明

パターンを返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。そのオブジェクトは、次のプロパティを含める必要があります。

*   **パターン**: 通貨パターンを書式設定および通貨の値を解析します。 パターンは、Unicode 技術標準 #35 に従ってください。 <http://unicode.org/reports/tr35/tr35-4.html>。 *(文字列)*

*   **コード**: パターンの ISO 4217 通貨コード。*(文字列)*

*   **分数**: 解析および通貨を書式設定するときに使用する小数部の桁の数。*(数)*

*   **丸め**: 解析および書式設定するときに使用するインクリメントに丸め。*(数)*

*   **10 進数**: 解析および書式設定を使用する小数点の記号。*(文字列)*

*   **グループ**: 解析および書式設定を使用する区切り記号。*(文字列)*

受信した `currencyCode` パラメーターをする必要があります、 `String` 、ISO 4217 通貨コードは、たとえば 'USD' のいずれかの。

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケールと、選択した通貨は米国ドルで、この例は次の結果のようなテキストとポップアップ ダイアログを表示します。

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

期待される結果:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>