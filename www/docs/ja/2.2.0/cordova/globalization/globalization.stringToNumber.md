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

title: globalization.stringToNumber
---

globalization.stringToNumber
===========

クライアントのユーザー設定を元に文字列を数字に変換し、対応する数字を返します。

    navigator.globalization.stringToNumber(string, successCB, errorCB, options);

概要
-----------

プロパティーオブジェクトをパラメーターとして数字を successCB コールバック関数に返します。このオブジェクトは数字の ``value`` プロパティーを持っています。

もし数字の変換中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).PARSING\_ERROR です。

`options.type` には 'decimal', 'percent', または 'currency' が指定出来ます。
デフォルトのオプションは `{type:'decimal'}` です。この `options` パラメーターはオプション (任意) です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは "number: 1234.56" といったような文字列をポップアップダイアログに表示します。

    navigator.globalization.stringToNumber(
      '1234.56',
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
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkNumber()">クリックして数字を変換</button>
      </body>
    </html>

