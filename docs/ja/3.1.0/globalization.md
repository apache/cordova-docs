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


# グローバリゼーション

情報を取得し、ユーザーのロケールとタイムゾーンに固有の操作を実行します。

## オブジェクト

*   GlobalizationError

## メソッド

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## 変数のスコープ

`globalization`オブジェクトの子である、 `navigator` オブジェクト、およびしたがってはグローバル スコープを持ちます。

    // The global globalization object
    var globalization = navigator.globalization;
    

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# globalization.getPreferredLanguage

クライアントの現在の言語の文字列識別子を取得します。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## 説明

言語識別子の文字列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `String` 値。

言語を取得中にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、これで、テキストとポップアップ ダイアログを表示 `language: English` ：

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getPreferredLanguage Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   現在の言語の ISO 639-1 の 2 文字コードを返します。


# globalization.getLocaleName

クライアントの現在のロケール設定の文字列識別子を取得します。

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## 説明

ロケール識別子の文字列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `String` 値。

ロケールを取得中にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、テキストとポップアップ ダイアログが表示されます`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getLocaleName Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   ISO 3166 で定義された現在の国/地域の 2 文字コードを返します。


# globalization.dateToString

日付を返します、クライアントのロケールおよびタイムゾーンに従って文字列として書式設定されます。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## 説明

書式設定された日付を返します `String` を介して、 `value` にパラメーターとして渡されたオブジェクトからアクセス可能なプロパティ、`successCallback`.

受信 `date` パラメーター型である必要があります`Date`.

場合は、日付の書式設定エラーがあるし、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING\_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または`full`.

`options.selector`することができます `date` 、 `time` または`date and time`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザー設定されている場合、 `en\_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `date: 9/25/2012 4:21PM` 既定のオプションを使用して。

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   `formatLength`オプションをサポートするだけ `short` と `full` の値。


# globalization.stringToDate

クライアントのユーザーの基本設定や、クライアントのタイム ゾーンを使用して予定表によると、文字列として書式設定された日付を解析し、対応する日付オブジェクトを返します。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## 説明

日付の成功時のコールバックを返します、 `properties` オブジェクトをパラメーターとして。そのオブジェクトは、次のプロパティが必要です。

*   **年**： 4 桁の年。*(数)*

*   **月**: (0-11) から 1 カ月。*(数)*

*   **日**: 日 (1 から 31)。*(数)*

*   **時間**: 時間 (0-23) から。*(数)*

*   **分**: (0-59） から分です。*(数)*

*   **2 番目**: (0-59） から 2 番目。*(数)*

*   **ミリ秒**： 時間をミリ秒単位 (0 ～ 999) まですべてのプラットフォームでは利用できません。*(数)*

受信 `dateString` パラメーター型である必要があります`String`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または `full` 。 `options.selector`することができます `date` 、 `time` または`date and
time`.

日付文字列の解析エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PARSING\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `month:8 day:25 year:2012` 。 注意： 整数は 1 ヶ月未満の文字列、月整数として配列のインデックスを表します。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   `formatLength`オプションをサポートするだけ `short` と `full` の値。


# globalization.getDatePattern

クライアントのユーザーの設定に従った日付を解析するパターン文字列を返します。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## 説明

パターンを返します、 `successCallback` 。パラメーターとして渡されたオブジェクトには、次のプロパティが含まれています。

*   **パターン**: 書式し、日付を解析する日付と時刻のパターン。 パターンは、Unicode 技術標準 #35 に従ってください。 <http://unicode.org/reports/tr35/tr35-4.html>。 *(文字列)*

*   **タイムゾーン**: クライアントのタイム ゾーンの省略名。*(文字列)*

*   **とおりです。**: クライアントのタイム ゾーンと世界協定時刻間の秒で現在の差異。*(数)*

*   **dst_offset**： クライアントの非夏時間 (秒単位) は、現在の夏時間オフセットのタイムゾーンとクライアントの夏時間保存のタイム ゾーン。*(数)*

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PATTERN\_ERROR`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または `full` 。 `options.selector`することができます `date` 、 `time` または`date and
time`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、例など、テキストとポップアップ ダイアログを表示します `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   `formatLength`のみをサポートしています `short` と `full` の値。

*   `pattern`の `date and time` パターンは完全な datetime 形式のみを返します。

*   `timezone`完全なタイム ゾーン名を返します。

*   `dst_offset`プロパティはサポートされていませんし、常に 0 を返します。


# globalization.getDateNames

月の名前またはクライアントのユーザーの好みやカレンダーに応じて曜日の配列を返します。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## 説明

名前の配列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが含まれています、 `value` プロパティ、 `Array` の `String` の値。 年または選択したオプションに応じて、週の最初の日の最初の月のいずれかから始まってアレイ機能の名前。

名前の取得エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {0} 型: '幅'、項目： '月'}
    

値 `options.type` することができます `narrow` または`wide`.

値 `options.item` することができます `months` または`days`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、この例の表示 12 ポップアップ ダイアログ ボックスのようなテキストで、毎月のシリーズ `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>


# globalization.isDayLightSavingsTime

夏時間の時間が、クライアントのタイム ゾーンとカレンダーを使用して特定の日付に対して有効かどうかを示します。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## 説明

夏時間が有効にするかどうかを示します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `dst` を持つプロパティ、 `Boolean` 値。 A `true` 値は、夏時間の時間が指定した日付のために有効であることを示しますと `false` がないことを示します。

受信パラメーター `date` 型である必要があります`Date`.

日付を読み取り中にエラーがある場合、 `errorCallback` を実行します。予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

夏の間、これでのようなテキストとポップアップ ダイアログを表示するブラウザーは、DST が有効なタイム ゾーンに設定されている場合と `dst: true` ：

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>


# globalization.getFirstDayOfWeek

よると、クライアントのユーザー設定カレンダー週の最初の曜日を返します。

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## 説明

週の日 1 日曜日であると見なされます、1 から始まる番号が付けられます。 曜日を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `Number` 値。

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` のロケールのようなテキストとポップアップ ダイアログが表示されます`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>


# globalization.numberToString

クライアントのユーザーの設定に従って文字列として書式設定された数を返します。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## 説明

番号の書式設定された文字列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `String` 値。

番号、書式設定エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING\_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {0} 型: 'decimal'}
    

`options.type`'Decimal'、'%' または '通貨' にすることができます。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `number: 3.142` ：

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>


# globalization.stringToNumber

クライアントのユーザーの設定に従って文字列として書式設定された数を解析し、対応する番号を返します。

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## 説明

番号を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。そのオブジェクトが必要な `value` を持つプロパティ、 `Number` 値。

数値文字列の解析エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PARSING\_ERROR`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {0} 型: 'decimal'}
    

`options.type`することができます `decimal` 、 `percent` 、または`currency`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、これのようなテキストとポップアップ ダイアログを表示する必要があります `number: 1234.56` ：

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToNumber Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>


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


# globalization.getCurrencyPattern

書式設定および通貨の値によると、クライアントのユーザーの基本設定と ISO 4217 通貨コードを解析するパターン文字列を返します。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## 説明

パターンを返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。そのオブジェクトは、次のプロパティを含める必要があります。

*   **パターン**: 通貨パターンを書式設定および通貨の値を解析します。 パターンは、Unicode 技術標準 #35 に従ってください。 <http://unicode.org/reports/tr35/tr35-4.html>。 *(文字列)*

*   **コード**: パターンの ISO 4217 通貨コード。*(文字列)*

*   **分数**: 解析および通貨を書式設定するときに使用する小数部の桁の数。*(数)*

*   **丸め**: 解析および書式設定するときに使用するインクリメントに丸め。*(数)*

*   **10 進数**: 解析および書式設定を使用する小数点の記号。*(文字列)*

*   **グループ**: 解析および書式設定を使用する区切り記号。*(文字列)*

受信した `currencyCode` パラメーターをする必要があります、 `String` 、ISO 4217 通貨コードは、たとえば 'USD' のいずれかの。

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケールと、選択した通貨は米国ドルで、この例は次の結果のようなテキストとポップアップ ダイアログを表示します。

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
        function () { alert('Error getting pattern\n'); }
    );
    

期待される結果:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>


# GlobalizationError

グローバリゼーション API からエラーを表すオブジェクト。

## プロパティ

*   **コード**: エラーの種類を表す次のコードの 1 つ *(数)* 
    *   GlobalizationError.UNKNOWN _ エラー： 0
    *   GlobalizationError.FORMATTING _ エラー: 1
    *   GlobalizationError.PARSING _ エラー: 2
    *   GlobalizationError.PATTERN _ エラー: 3
*   **メッセージ**: エラーの説明が含まれていますおよび/または*(文字列)*の詳細をテキスト メッセージ

## 説明

このオブジェクトが作成され、コルドバ、によって移入エラーの場合のコールバックに返されます。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS

## 簡単な例

次のエラー コールバックを実行するのようなテキストとポップアップ ダイアログが表示されます `code: 3` と`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>
