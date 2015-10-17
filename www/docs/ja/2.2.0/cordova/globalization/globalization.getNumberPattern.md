---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: globalization.getNumberPattern
---

globalization.getNumberPattern
===========

クライアントのユーザー設定を元に、数字のフォーマットと変換のためのパターン文字列を返します。

    navigator.globalization.getNumberPattern(successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてパターンを返します。このオブジェクトは以下のプロパティーを持っています:

- pattern {String}: 数字のフォーマットと変換のためのパターンを表します。このパターンは Unicode Technical Standard #35 に従っています。 <http://unicode.org/reports/tr35/tr35-4.html>
- symbol {String}: フォーマットおよび変換時に使うパーセントや通貨といったシンボルを表します。
- fraction {Number}: フォーマットおよび変換時に使う小数の桁数を表します。
- rounding {Number}: フォーマットおよび変換時に使う丸めの単位を表します。
- positive {String}: フォーマットおよび変換時に使う正の数のための記号を表します。
- negative: {String}: フォーマットおよび変換時に使う負の数のための記号を表します。
- decimal: {String}: フォーマットおよび変換時に使う小数の記号を表します。
- grouping: {String}: フォーマットおよび変換時に使うグルーピング時の記号を表します。

もしパターン取得中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).PATTERN\_ERROR です。

`options.type` には 'decimal', 'percent', または 'currency' が指定出来ます。
デフォルトのオプションは `{type:'decimal'}` です。この `options` パラメーターはオプション (任意) です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定されている場合、以下のような文字列をポップアップダイアログに表示します:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive: 
    negative: -
    decimal: .
    grouping: ,



    navigator.globalization.getNumberPattern(
      function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                'symbol: ' + pattern.symbol + '\n' +
                                'fraction: ' + pattern.fraction + '\n' +
                                'rounding: ' + pattern.rounding + '\n' +
                                'positive: ' + pattern.positive + '\n' +
                                'negative: ' + pattern.negative + '\n' +
                                'decimal: ' + pattern.decimal + '\n' +
                                'grouping: ' + pattern.grouping);},
      function () {alert('Error getting pattern\n');},
      {type:'decimal'}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                      'symbol: ' + pattern.symbol + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: ' + pattern.decimal + '\n' +
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

