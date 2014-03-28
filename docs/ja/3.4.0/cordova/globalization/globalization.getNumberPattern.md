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

# globalization.getNumberPattern

クライアントのユーザーの設定に従って数値を解析するパターン文字列を返します。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## 説明

パターンを返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。そのオブジェクトには、次のプロパティが含まれています。

*   **パターン**: 番号のパターンを書式設定および解析の数字。 パターンは、Unicode 技術標準 #35 に従ってください。 <http://unicode.org/reports/tr35/tr35-4.html>。 *(文字列)*

*   **記号**: 書式設定と解析、パーセントや通貨記号などのときに使用するシンボル。*(文字列)*

*   **分数**: 解析および数値を書式設定するときに使用する小数部の桁の数。*(数)*

*   **丸め**: 解析および書式設定するときに使用するインクリメントに丸め。*(数)*

*   **正**： 正の数の解析および書式設定するときに使用する記号。*(文字列)*

*   **負**: 負の数の解析および書式設定するときに使用する記号。*(文字列)*

*   **10 進数**: 解析および書式設定を使用する小数点の記号。*(文字列)*

*   **グループ**: 解析および書式設定を使用する区切り記号。*(文字列)*

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PATTERN\_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {0} 型: 'decimal'}
    

`options.type`することができます `decimal` 、 `percent` 、または`currency`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` のロケールに従って結果のようなテキストとポップアップ ダイアログが表示されます。

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

結果:

    パターン： ＃ ＃ ＃ 0。 ### シンボル: です。分数: 0 丸め: 0 正： 負： - 10 進：。グループ:
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   `pattern`プロパティはサポートされていませんと retuens、空の文字列。

*   `fraction`プロパティはサポートされていません、0 を返します。