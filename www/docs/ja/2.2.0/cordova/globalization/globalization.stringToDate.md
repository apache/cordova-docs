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

title: globalization.stringToDate
---

globalization.stringToDate
===========

クライアントのユーザー設定とカレンダーを元に、
タイムゾーンを使って文字列を日付に変換し、
対応する日付オブジェクトを返します。

    navigator.globalization.stringToDate(dateString, successCB, errorCB, options);

概要
-----------

プロパティーオブジェクトをパラメーターとして日付を成功コールバックに返します。このオブジェクトは以下のプロパティーを持っています:

- year {Number}: 4桁の年を表します
- month {Number}: (0 - 11) の月を表します
- day {Number}: (1 - 31) の日を表します
- hour {Number}: (0 - 23) の時を表します
- minute {Number}: (0 - 59) の分を表します
- second {Number}: (0 - 59) の秒を表します
- millisecond {Number}: (0 - 999) のミリ秒を表します。すべてのプラットフォームで有効というわけではありません

引数の `dateString` パラメーターは `String` 型である必要があります。

`options.formatLength` には 'short', 'medium', 'long', または 'full' が指定出来ます。
`options.selector` には 'date', 'time' または 'date and time' が指定出来ます。

デフォルトのオプションは `{formatLength:'short', selector:'date and time'}` です。
この options パラメーターはオプション (任意) です。

もし変換中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).PARSING\_ERROR です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは "month:8 day:25 year:2012" といったような文字列をポップアップダイアログに表示します。月として返る数値は文字列より 1 少ないので気をつけてください。

    navigator.globalization.stringToDate(
      '9/25/2012',
      function (date) {alert('month:' + date.month +
                             ' day:' + date.day + 
                             ' year:' + date.year + '\n');},
      function () {alert('Error getting date\n');},
      {selector:'date'}
    );


詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day + 
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">クリックして日付を変換</button>
      </body>
    </html>

