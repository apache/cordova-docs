---
license: Licensed to the Apache Software Foundation (ASF) under one
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

globalization.getCurrencyPattern
===========

クライアントのユーザー設定と ISO 4217 通貨コードを元に、通貨の値のフォーマットと変換のためのパターン文字列を返します。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

概要
-----------

successCallback コールバック関数に、プロパティーオブジェクトをパラメーターとしてパターンを返します。このオブジェクトは以下のプロパティーを持っています:

- __pattern__: 通貨の値のフォーマットと変換のためのパターンを表します。このパターンは Unicode Technical Standard #35 に従っています。 <http://unicode.org/reports/tr35/tr35-4.html> _(String)_
- __code__: パターンのための The ISO 4217 の通貨コードを表します。 _(String)_
- __fraction__: フォーマットおよび変換時に使う小数の桁数を表します。 _(Number)_
- __rounding__: フォーマットおよび変換時に使う丸めの単位を表します。 _(Number)_
- __decimal__: フォーマットおよび変換時に使う小数の記号を表します。 _(String)_
- __grouping__: フォーマットおよび変換時に使うグルーピング時の記号を表します。 _(String)_

引数の `currencyCode` パラメーターは、例えば 'USD' などの、 ISO 4217 通貨コードのうちの1つである必要があります。

もしパターン取得中にエラーが発生した場合、 `errorCallback` コールバックが `GlobalizationError` オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは `GlobalizationError.FORMATTING_ERROR` です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

ブラウザーのロケールが en\_US に設定され、通貨には US ドルが選択された場合、以下のような文字列をポップアップダイアログに表示します:

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
        function () {alert('Error getting pattern\n');}
    );

期待される結果

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,



詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
        <button onclick="checkPattern()">クリックしてパターンを表示</button>
      </body>
    </html>

