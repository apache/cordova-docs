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

globalization.getNumberPattern
===========

クライアントのユーザー設定を元に、数字のフォーマットと変換のためのパターン文字列を返します。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

概要
-----------

`successCallback` コールバック関数に、プロパティーオブジェクトをパラメーターとしてパターンを返します。このオブジェクトは以下のプロパティーを持っています:

- __pattern__: 数字のフォーマットと変換のためのパターンを表します。このパターンは Unicode Technical Standard #35 に従っています。 <http://unicode.org/reports/tr35/tr35-4.html> _(String)_
- __symbol__: フォーマットおよび変換時に使うパーセントや通貨といったシンボルを表します。 _(String)_
- __fraction__: フォーマットおよび変換時に使う小数の桁数を表します。 _(Number)_
- __rounding__: フォーマットおよび変換時に使う丸めの単位を表します。 _(Number)_
- __positive__: フォーマットおよび変換時に使う正の数のための記号を表します。 _(String)_
- __negative__: フォーマットおよび変換時に使う負の数のための記号を表します。 _(String)_
- __decimal__: フォーマットおよび変換時に使う小数の記号を表します。 _(String)_
- __grouping__: フォーマットおよび変換時に使うグルーピング時の記号を表します。 _(String)_

もしパターン取得中にエラーが発生した場合、 `errorCallback` コールバックが `GlobalizationError` オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは `GlobalizationError.PATTERN_ERROR` です。

`options` パラメーターはオプション (任意) であり、デフォルト値は以下の通りです:

    {type:'decimal'}

`options.type` には `decimal`, `percent`, または `currency` が指定出来ます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 8

使用例
-------------

ブラウザーのロケールが `en_US` に設定されている場合、以下のような文字列をポップアップダイアログに表示します:

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

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive: 
    negative: -
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
        <button onclick="checkPattern()">クリックしてパターンを表示</button>
      </body>
    </html>
