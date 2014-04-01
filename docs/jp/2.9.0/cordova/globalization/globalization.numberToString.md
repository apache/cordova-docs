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

globalization.numberToString
===========

クライアントのユーザー設定を元にフォーマットされた数字を文字列で返します。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

概要
-----------

`successCallback` コールバック関数に、プロパティーオブジェクトをパラメーターとしてフォーマットされた数字を渡します。このオブジェクトは文字列の `value` プロパティーを持っています。

もし数字のフォーマット中にエラーが発生した場合、 `errorCallback` コールバックが `GlobalizationError` オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは `GlobalizationError.FORMATTING_ERROR` です。

`options` パラメーターはオプション (任意) であり、デフォルト値は以下の通りです。

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

ブラウザーのロケールが `en_US` に設定されている場合、次のコードは `number: 3.142` といったような文字列をポップアップダイアログに表示します。

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
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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

