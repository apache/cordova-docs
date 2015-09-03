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
---


Globalization
======

> `globalization` オブジェクトはユーザーのロケールとタイムゾーンの情報を取得し、固有の操作を実行します。

オブジェクト
-------

- GlobalizationError

メソッド
-------

- globalization.getPreferredLanguage
- globalization.getLocaleName
- globalization.dateToString
- globalization.stringToDate
- globalization.getDatePattern
- globalization.getDateNames
- globalization.isDayLightSavingsTime
- globalization.getFirstDayOfWeek
- globalization.numberToString
- globalization.stringToNumber
- globalization.getNumberPattern
- globalization.getCurrencyPattern

スコープ
--------------

この `globalization` オブジェクトはobject is a child of the `navigator` オブジェクトの子で、そのためグローバルスコープを持っています。

    // グローバル globalization オブジェクト
    var globalization = navigator.globalization;

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Globalization" value="org.apache.cordova.Globalization" />



globalization.getPreferredLanguage
===========

クライアントの現在の言語の識別文字列を取得します。

    navigator.globalization.getPreferredLanguage(successCB, errorCB);


概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとして言語の識別文字列を返します。このオブジェクトは文字列の ``value`` プロパティーを持っています。

もし言語の取得中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.UNKNOWN\_ERROR です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone


使用例
-------------

ブラウザーのロケールが en\_US に設定された場合、次のコードは "language: English" という文字列をポップアップダイアログに表示します。

    navigator.globalization.getPreferredLanguage(
      function (language) {alert('language: ' + language.value + '\n');},
      function () {alert('Error getting language\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">クリックして言語を表示</button>
      </body>
    </html>




globalization.getLocaleName
===========

クライアントの現在のロケールの設定の識別文字列を取得します。

    navigator.globalization.getLocaleName(successCB, errorCB);


概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてロケールの識別文字列を返します。このオブジェクトは文字列の ``value`` プロパティーを持っています。

もしロケールの取得中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.UNKNOWN\_ERROR です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone


使用例
-------------

ブラウザーのロケールが en\_US に設定された場合、次のコードは "locale: en\_US" という文字列をポップアップダイアログに表示します。

    navigator.globalization.getLocaleName(
      function (locale) {alert('locale: ' + locale.value + '\n');},
      function () {alert('Error getting locale\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">クリックしてロケールを表示</button>
      </body>
    </html>




globalization.dateToString
===========

クライアントのロケールとタイムゾーンを元にフォーマットされた日時を文字列で返します。

    navigator.globalization.dateToString(date, successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてフォーマットされた日時を渡します。このオブジェクトは文字列の ``value`` プロパティーを持っています。

引数の ``date`` パラメーターは ``Date`` 型である必要があります。

もし日時のフォーマット中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.FORMATTING\_ERROR です。

`options.formatLength` には 'short', 'medium', 'long', または 'full' が指定出来ます。
`options.selector` には 'date', 'time' または 'date and time' が指定出来ます。

デフォルトのオプションは `{formatLength:'short', selector:'date and time'}` です。
この `options` パラメーターはオプション (任意) です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードはデフォルトのオプションを使用して "date: 9/25/2012 4:21PM" といったような文字列をポップアップダイアログに表示します。

    navigator.globalization.dateToString(
      new Date(),
      function (date) {alert('date:' + date.value + '\n');},
      function () {alert('Error getting dateString\n');},
      {formatLength:'short', selector:'date and time'}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">クリックして日時を表示</button>
      </body>
    </html>




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

もし変換中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.PARSING\_ERROR です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
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




globalization.getDatePattern
===========

クライアントのユーザー設定を元に、日時のフォーマットと変換のためのパターン文字列を返します。

    navigator.globalization.getDatePattern(successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてパターンを返します。このオブジェクトは以下のプロパティーを持っています:

- pattern {String}: 日時のフォーマットと変換のための日付および時間のパターンを表します。このパターンは Unicode Technical Standard #35 に従っています。 <http://unicode.org/reports/tr35/tr35-4.html>
- timezone {String}: クライアントのタイムゾーンの省略名を表します。
- utc\_offset {Number}: クライアントのタイムゾーンと協定世界時との現在の差を秒で表します。
- dst\_offset {Number}: 現在のサマータイム (デイライトセービングタイム) のオフセットを秒で表します。

もしパターン取得中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.PATTERN\_ERROR です。

`options.formatLength` には 'short', 'medium', 'long', または 'full' が指定出来ます。
`options.selector` には 'date', 'time' または 'date and time' が指定出来ます。

デフォルトのオプションは `{formatLength:'short', selector:'date and time'}` です。
この options パラメーターはオプション (任意) です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは "pattern: M/d/yyyy h:mm a" といったような文字列をポップアップダイアログに表示します。

    function checkDatePattern() {
      navigator.globalization.getDatePattern(
        function (date) {alert('pattern: ' + date.pattern + '\n');},
        function () {alert('Error getting pattern\n');},
        {formatLength:'short', selector:'date and time'}
      );
    }

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">クリックしてパターンを表示</button>
      </body>
    </html>




globalization.getDateNames
===========

クライアントのユーザー設定とカレンダーを元に、月と曜日の名前の配列を返します。

    navigator.globalization.getDateNames(successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとして名前の配列を返します。このオブジェクトは文字列配列の ``value`` プロパティーを持っています。この文字列配列は、オプションで何が選択されたかによって、最初の月もしくは最初の曜日の名前から始まります。

もし名前の取得中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.UNKNOWN\_ERROR です。

`options.type` には 'narrow' または 'wide' が指定出来ます。
`options.item` には 'months' または 'days' が指定出来ます。

デフォルトのオプションは `{type:'wide', item:'months'}` です。
この `options` パラメーターはオプション (任意) です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは 12 個のポップアップダイアログを次々と表示します。それぞれのポップアップダイアログには、 "month: January" といったような文字列が表示されます。

    navigator.globalization.getDateNames(
      function (names) {
        for (var i=0; i<names.value.length; i++) {
          alert('month: ' + names.value[i] + '\n');
        }
      },
      function () {alert('Error getting names\n');},
      {type:'wide', item:'months'}
    );


詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">クリックして月の名前を表示</button>
      </body>
    </html>




globalization.isDayLightSavingsTime
===========

クライアントのタイムゾーンとカレンダーを元に、夏時間が与えられた日付で有効かどうかを返します。

    navigator.globalization.isDayLightSavingsTime(date, successCB, errorCB);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとして夏時間かどうかを返します。このオブジェクトは Boolean の ``dst`` プロパティーを持っています。 'true' は夏時間が現在有効であること、 'false' はそうでないことを表します。

引数の ``date`` パラメーターは ``Date`` 型である必要があります。

もし日付の読み取り中にエラーが発生した場合、 errorCB コールバックが呼び出されます。このエラーに対するエラーコードは GlobalizationError.UNKNOWN\_ERROR です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

ブラウザーが DST が有効なタイムゾーンで、夏の場合、次のコードは "dst: true" といったような文字列をポップアップダイアログに表示します。

    navigator.globalization.isDayLightSavingsTime(
      new Date(),
      function (date) {alert('dst: ' + date.dst + '\n');},
      function () {alert('Error getting names\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">クリックして夏時間かどうかを表示</button>
      </body>
    </html>




globalization.getFirstDayOfWeek
===========

クライアントのユーザー設定とカレンダーを元に、週の最初の曜日を返します。

    navigator.globalization.getFirstDayOfWeek(successCB, errorCB);

概要
-----------

週の曜日は 1 から始まり、 1 は日曜日を表します。 successCB コールバック関数に、プロパティーオブジェクトをパラメーターとして曜日を返します。このオブジェクトは数字の ``value`` プロパティーを持っています。

もし曜日の取得中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.UNKNOWN\_ERROR です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは "day: 1" といったような文字列をポップアップダイアログに表示します。

    navigator.globalization.getFirstDayOfWeek(
      function (day) {alert('day: ' + day.value + '\n');},
      function () {alert('Error getting day\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">クリックして週の最初の曜日を表示</button>
      </body>
    </html>




globalization.numberToString
===========

クライアントのユーザー設定を元にフォーマットされた数字を文字列で返します。
Returns a number formatted as a string according to the client's user preferences.

    navigator.globalization.numberToString(number, successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてフォーマットされた数字を渡します。このオブジェクトは文字列の ``value`` プロパティーを持っています。

もし数字のフォーマット中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.FORMATTING\_ERROR です。

`options.type` には 'decimal', 'percent', または 'currency' が指定出来ます。デフォルトのオプションは `{type:'decimal'}` です。この `options` パラメーターはオプション (任意) です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
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




globalization.stringToNumber
===========

クライアントのユーザー設定を元に文字列を数字に変換し、対応する数字を返します。

    navigator.globalization.stringToNumber(string, successCB, errorCB, options);

概要
-----------

プロパティーオブジェクトをパラメーターとして数字を successCB コールバック関数に返します。このオブジェクトは数字の ``value`` プロパティーを持っています。

もし数字の変換中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.PARSING\_ERROR です。

`options.type` には 'decimal', 'percent', または 'currency' が指定出来ます。
デフォルトのオプションは `{type:'decimal'}` です。この `options` パラメーターはオプション (任意) です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
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

もしパターン取得中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.PATTERN\_ERROR です。

`options.type` には 'decimal', 'percent', または 'currency' が指定出来ます。
デフォルトのオプションは `{type:'decimal'}` です。この `options` パラメーターはオプション (任意) です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
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




globalization.getCurrencyPattern
===========

クライアントのユーザー設定と ISO 4217 通貨コードを元に、通貨の値のフォーマットと変換のためのパターン文字列を返します。

     navigator.globalization.getCurrencyPattern(currencyCode, successCB, errorCB);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてパターンを返します。このオブジェクトは以下のプロパティーを持っています:

- pattern {String}: 通貨の値のフォーマットと変換のためのパターンを表します。このパターンは Unicode Technical Standard #35 に従っています。 <http://unicode.org/reports/tr35/tr35-4.html>
- code {String}: パターンのための The ISO 4217 の通貨コードを表します。
- fraction {Number}: フォーマットおよび変換時に使う小数の桁数を表します。
- rounding {Number}: フォーマットおよび変換時に使う丸めの単位を表します。
- decimal: {String}: フォーマットおよび変換時に使う小数の記号を表します。
- grouping: {String}: フォーマットおよび変換時に使うグルーピング時の記号を表します。

引数の `currencyCode` パラメーターは、例えば 'USD' などの、 ISO 4217 通貨コードのうちの1つである必要があります。

もしパターン取得中にエラーが発生した場合、 errorCB コールバックが GlobalizationError オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは GlobalizationError.FORMATTING\_ERROR です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

ブラウザーのロケールが en\_US に設定され、通貨には US ドルが選択された場合、以下のような文字列をポップアップダイアログに表示します:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,



    navigator.globalization.getCurrencyPattern(
      'USD',
      function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                'code: ' + pattern.code + '\n' +
                                'fraction: ' + pattern.fraction + '\n' +
                                'rounding: ' + pattern.rounding + '\n' +
                                'decimal: ' + pattern.decimal + '\n' +
                                'grouping: ' + pattern.grouping);},
      function () {alert('Error getting pattern\n');}
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
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                      'code: ' + pattern.code + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: ' + pattern.decimal + '\n' +
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




GlobalizationError
============

Globalization API からのエラーを表すオブジェクトです。

プロパティー
----------

- __code:__  以下のエラータイプを表すコードのうちの1つを表します (`Number`)
  - GlobalizationError.UNKNOWN\_ERROR: 0
  - GlobalizationError.FORMATTING\_ERROR: 1
  - GlobalizationError.PARSING\_ERROR: 2
  - GlobalizationError.PATTERN\_ERROR: 3
- __message:__  エラーの内容を表すエラーメッセージを表します (`String`)

概要
-----------

このオブジェクトは Cordova によって作られ、エラー発生時にコールバック関数に渡されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

使用例
-------------

以下のエラーコールバックが呼び出されるとき、 "code: 3" と "message: " といったような文字列とともにポップアップダイアログが表示されます。

    function errorCB(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function successCB(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }

        function errorCB(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };

        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCB,
            errorCB,
            {selector:'foobar'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkError()">クリックしてエラーを発生</button>
      </body>
    </html>


