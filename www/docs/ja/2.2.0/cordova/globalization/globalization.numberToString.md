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

title: globalization.numberToString
---

globalization.numberToString
===========

クライアントのユーザー設定を元にフォーマットされた数字を文字列で返します。
Returns a number formatted as a string according to the client's user preferences.

    navigator.globalization.numberToString(number, successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてフォーマットされた数字を渡します。このオブジェクトは文字列の ``value`` プロパティーを持っています。

もし数字のフォーマット中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).FORMATTING\_ERROR です。

`options.type` には 'decimal', 'percent', または 'currency' が指定出来ます。デフォルトのオプションは `{type:'decimal'}` です。この `options` パラメーターはオプション (任意) です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは "number: 3.142" といったような文字列をポップアップダイアログに表示します。

    navigator.globalization.numberToString(
      3.1415926,
      function (number) {alert('number: ' + number.value + '\n');},
      function () {alert('Error getting number\n');},
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

        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkNumber()">クリックして数字を表示</button>
      </body>
    </html>

