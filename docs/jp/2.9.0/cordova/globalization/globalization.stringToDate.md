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

globalization.stringToDate
===========

クライアントのユーザー設定とカレンダーを元に、
タイムゾーンを使って文字列を日付に変換し、
対応する日付オブジェクトを返します。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

概要
-----------

プロパティーオブジェクトをパラメーターとして日付を成功コールバックに返します。このオブジェクトは以下のプロパティーを持っています:

- __year__: 4桁の年を表します _(Number)_
- __month__: (0 - 11) の月を表します _(Number)_
- __day__: (1 - 31) の日を表します _(Number)_
- __hour__: (0 - 23) の時を表します _(Number)_
- __minute__: (0 - 59) の分を表します _(Number)_
- __second__: (0 - 59) の秒を表します _(Number)_
- __millisecond__: (0 - 999) のミリ秒を表します。すべてのプラットフォームで有効というわけではありません _(Number)_

引数の `dateString` パラメーターは `String` 型である必要があります。

`options` パラメーターはオプション (任意) であり、デフォルト値は以下の通りです:

    {formatLength:'short', selector:'date and time'}

`options.formatLength` には `short`, `medium`, `long`, または `full` が指定出来ます。`options.selector` には `date`, `time` または `date and time` が指定出来ます。

もし変換中にエラーが発生した場合、 `errorCallback` コールバックが `GlobalizationError` オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは `GlobalizationError.PARSING_ERROR` です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 8

使用例
-------------

ブラウザーのロケールが `en_US` に設定されている場合、次のコードは `month:8 day:25 year:2012` といったような文字列をポップアップダイアログに表示します。月として返る数値は文字列より 1 少ないので気をつけてください。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   + 
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector:'date'}
    );


詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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

Windows Phone 8 に関する注意点
------------------

- `formatLength` オプションは `short` と `full` のみをサポートしています。
