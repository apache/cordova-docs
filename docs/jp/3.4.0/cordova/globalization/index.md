<!---
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
-->

# org.apache.cordova.globalization

このプラグインを使用して、ユーザのロケール ( locale ) と タイムゾーン ( timezone ) に対応した、情報の取得と操作の実行を行います。

## インストール

    cordova plugin add org.apache.cordova.globalization

## オブジェクト

- GlobalizationError

## メソッド

- navigator.globalization.getPreferredLanguage
- navigator.globalization.getLocaleName
- navigator.globalization.dateToString
- navigator.globalization.stringToDate
- navigator.globalization.getDatePattern
- navigator.globalization.getDateNames
- navigator.globalization.isDayLightSavingsTime
- navigator.globalization.getFirstDayOfWeek
- navigator.globalization.numberToString
- navigator.globalization.stringToNumber
- navigator.globalization.getNumberPattern
- navigator.globalization.getCurrencyPattern


## navigator.globalization.dateToString

クライアントのロケールとタイムゾーンに対応する、文字列形式の日付を返します。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);

### 解説

`value` プロパティー経由で、`文字列` ( String ) 形式の日付を返します。 `successCallback` にパラメーターとして渡したオブジェクトが、 `value` プロパティーを格納しています

インバウンド ( inbound ) する `date` パラメーターは、 `Date` 型です。

日付のフォーマット時にエラーが発生した場合、パラメーターとして、 `GlobalizationError` オブジェクトを使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.FORMATTING\_ERROR` となります。

`options`　パラメーターの設定は任意です。デフォルト値を以下に示します。

    {formatLength:'short', selector:'date and time'}

`options.formatLength` は、 `short` 、 `medium` 、 `long` 、 `full` のいづれかとなります。

`options.selector` は、 `date` 、 `time` 、 `date and time` のいづれかとなります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールが `en\_US` に設定されている場合、以下のオプションを使用して、 `date: 9/25/2012 4:21PM` 形式のテキストをポップアップ ダイアログに表示します。

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );

### Windows Phone 8 特有の動作

- `formatLength` オプションでは、 `short` と `full` の値のみサポートします。

## navigator.globalization.getCurrencyPattern

クライアントが行った設定と ISO 4217 通貨コードの選択に従い、通貨価値のパース処理 ( parse ) と通貨のフォーマット処理 ( format ) を行うときに使用・適用する、文字列形式の パターン ( pattern ) を返します。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

### 解説

`properties` オブジェクトをパラメーターとして使用し、 `successCallback` に パターン ( pattern ) を渡します。オブジェクトは、以下のパラメーターを格納しています。

- __pattern__: 通貨価値のパース処理と通貨のフォーマット処理を行うときに使用する、通貨に関するパターン ( pattern )。 パターンは、 [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html) に準拠しています。 _(String)_


- __code__: パターン ( pattern ) に適用する ISO 4217 の通貨コード _(String)_

- __fraction__: 通貨のパース処理とフォーマット処理を行う際に使用する、少数の桁数 _(Number)_

- __rounding__: 通貨のパース処理とフォーマット処理を行う際に適用する、端数処理 ( 切り捨て・切り上げ ) _(Number)_

- __decimal__: 通貨のパース処理とフォーマット処理を行う際に使用する、少数点の記号 _(String)_

- __grouping__: 通貨のパース処理とフォーマット処理を行う際に使用する、区切り記号 ( grouping symbol/separtor ) _(String)_

インバウンド ( inbound ) する `currencyCode` パラメーターには、ISO 4217 の通貨コードの `定義` ( 文字列 ) を使用します。例 : 'USD'

パターン ( pattern ) の取得時にエラーが発生した場合、パラメーターとして、 `GlobalizationError` オブジェクトを使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.FORMATTING\_ERROR` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS

### 例

ブラウザーのロケールが `en\_US` に設定され、また、選択された通貨が US ドルの場合、以下の結果をポップアップ ダイアログに表示します。

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

期待する結果 :

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,


## navigator.globalization.getDateNames

クライアントが行った設定とカレンダーの選択に従い、曜日または月の名が入った配列を返します。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);

### 解説

パラメーターとして、 `properties` オブジェクトを使用して、曜日または月の名を入れた配列を `successCallback` に渡します。 `配列` ( `文字列` の値が入る ) を使用している `value` プロパティーを、オブジェクトは格納します。また、この配列には、その年の最初の月、または、週の最初の日から始まる、月または曜日名が入っています。どちらかが入るかは、オプション設定に依ります。

月または曜日名の取得時にエラーが発生した場合、パラメーターとして、 `GlobalizationError` オブジェクトを使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.UNKNOWN\_ERROR` となります。

`options`　パラメーターの設定は任意です。デフォルト値を以下に示します。

    {type:'wide', item:'months'}

`options.type` の値は、 `narrow` または `wide`　となります。

`options.item` の値は、 `months` または `days` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールが `en\_US` に設定した場合、一連の 12 個 ( 1 個あたり ひと月 ) のポップアップ ダイアログ上に、`month: January` のようなテキストを表示します。

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );

## navigator.globalization.getDatePattern

クライアントの選択肢に基づき、日付のパース処理 ( parse ) と日付のフォーマット処理 ( format ) を行うときに使用・適用する、文字列形式の パターン ( pattern ) を返します。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);

### 解説

`successCallback` に パターン ( pattern ) を渡します。その際にパラメータとして使用するオブジェクトは、以下のプロパティーを格納しています。

- __pattern__: 日付のパース処理とフォーマット処理を行うときに使用する、日時に関するパターン ( pattern )。パターンは、 [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html) に準拠しています。 _(String)_

- __timezone__: クライアントのタイムゾーンの略称 _(String)_

- __utc\_offset__: クライアントのタイムゾーンと協定世界時 ( UTC ) 間の時差 ( 秒単位 ) _(Number)_

- __dst\_offset__: The current daylight saving time offset in seconds between the client's non-daylight saving's time zone and the client's daylight saving's time zone. _(Number)_






If there is an error obtaining the pattern, the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PATTERN\_ERROR`.

The `options` parameter is optional, and defaults to the following values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or
`full`.  The `options.selector` can be `date`, `time` or `date and
time`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this example displays
a popup dialog with text such as `pattern: M/d/yyyy h:mm a`:

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }

### Windows Phone 8 特有の動作

- The `formatLength` supports only `short` and `full` values.

- The `pattern` for `date and time` pattern returns only full datetime format.

- The `timezone` returns the full time zone name.

- The `dst_offset` property is not supported, and always returns zero.


## navigator.globalization.getFirstDayOfWeek

Returns the first day of the week according to the client's user
preferences and calendar.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);

### 解説

The days of the week are numbered starting from 1, where 1 is assumed
to be Sunday.  Returns the day to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `Number` value.

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this displays a
popup dialog with text similar to `day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );


Get the string identifier for the client's current locale setting.

    navigator.globalization.getLocaleName(successCallback, errorCallback);

### 解説

Returns the locale identifier string to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `String` value.

If there is an error getting the locale, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this displays a popup
dialog with the text `locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );


### Windows Phone 8 特有の動作

- Returns the two-letter code defined in ISO 3166 for the current country/region.

## navigator.globalization.getNumberPattern

Returns a pattern string to format and parse numbers according to the client's user preferences.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

### 解説

Returns the pattern to the `successCallback` with a `properties` object
as a parameter. That object contains the following properties:

- __pattern__: The number pattern to format and parse numbers.  The patterns follow [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html). _(String)_

- __symbol__: The symbol to use when formatting and parsing, such as a percent or currency symbol. _(String)_

- __fraction__: The number of fractional digits to use when parsing and formatting numbers. _(Number)_

- __rounding__: The rounding increment to use when parsing and formatting. _(Number)_

- __positive__: The symbol to use for positive numbers when parsing and formatting. _(String)_

- __negative__: The symbol to use for negative numbers when parsing and formatting. _(String)_

- __decimal__: The decimal symbol to use for parsing and formatting. _(String)_

- __grouping__: The grouping symbol to use for parsing and formatting. _(String)_

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PATTERN\_ERROR`.

The `options` parameter is optional, and default values are:

    {type:'decimal'}

The `options.type` can be `decimal`, `percent`, or `currency`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this should display a
popup dialog with text similar to the results that follow:

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

Results:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,


### Windows Phone 8 特有の動作

- The `pattern` property is not supported, and retuens an empty string.

- The `fraction` property is not supported, and returns zero.

## navigator.globalization.getPreferredLanguage

Get the string identifier for the client's current language.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

### 解説

Returns the language identifier string to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `String` value.

If there is an error getting the language, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this should display a
popup dialog with the text `language: English`:

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );


### Windows Phone 8 特有の動作

- Returns the ISO 639-1 two-letter code for the current language.

## navigator.globalization.isDayLightSavingsTime

Indicates whether daylight savings time is in effect for a given date
using the client's time zone and calendar.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);

### 解説

Indicates whether or not daylight savings time is in effect to the
`successCallback` with a `properties` object as a parameter. That object
should have a `dst` property with a `Boolean` value. A `true` value
indicates that daylight savings time is in effect for the given date,
and `false` indicates that it is not.

The inbound parameter `date` should be of type `Date`.

If there is an error reading the date, then the `errorCallback`
executes. The error's expected code is `GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

During the summer, and if the browser is set to a DST-enabled
timezone, this should display a popup dialog with text similar to
`dst: true`:

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );



## navigator.globalization.numberToString

Returns a number formatted as a string according to the client's user preferences.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

### 解説

Returns the formatted number string to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `String` value.

If there is an error formatting the number, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.FORMATTING\_ERROR`.

The `options` parameter is optional, and its default values are:

    {type:'decimal'}

The `options.type` can be 'decimal', 'percent', or 'currency'.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this displays a popup
dialog with text similar to `number: 3.142`:

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );


## navigator.globalization.stringToDate

Parses a date formatted as a string, according to the client's user
preferences and calendar using the time zone of the client, and
returns the corresponding date object.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

### 解説

Returns the date to the success callback with a `properties` object as
a parameter. That object should have the following properties:

- __year__: The four digit year. _(Number)_

- __month__: The month from (0-11). _(Number)_

- __day__: The day from (1-31). _(Number)_

- __hour__: The hour from (0-23). _(Number)_

- __minute__: The minute from (0-59). _(Number)_

- __second__: The second from (0-59). _(Number)_

- __millisecond__: The milliseconds (from 0-999), not available on all platforms. _(Number)_

The inbound `dateString` parameter should be of type `String`.

The `options` parameter is optional, and defaults to the following
values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or
`full`.  The `options.selector` can be `date`, `time` or `date and
time`.

If there is an error parsing the date string, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PARSING\_ERROR`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this displays a
popup dialog with text similar to `month:8 day:25 year:2012`. Note
that the month integer is one less than the string, as the month
integer represents an array index.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );


### Windows Phone 8 特有の動作

- The `formatLength` option supports only `short` and `full` values.

## navigator.globalization.stringToNumber

Parses a number formatted as a string according to the client's user
preferences and returns the corresponding number.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);

### 解説

Returns the number to the `successCallback` with a `properties` object
as a parameter. That object should have a `value` property with a
`Number` value.

If there is an error parsing the number string, then the
`errorCallback` executes with a `GlobalizationError` object as a
parameter. The error's expected code is
`GlobalizationError.PARSING\_ERROR`.

The `options` parameter is optional, and defaults to the following
values:

    {type:'decimal'}

The `options.type` can be `decimal`, `percent`, or `currency`.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this should display a
popup dialog with text similar to `number: 1234.56`:

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );


## GlobalizationError

An object representing a error from the Globalization API.

### プロパティ

- __code__:  One of the following codes representing the error type _(Number)_
  - GlobalizationError.UNKNOWN\_ERROR: 0
  - GlobalizationError.FORMATTING\_ERROR: 1
  - GlobalizationError.PARSING\_ERROR: 2
  - GlobalizationError.PATTERN\_ERROR: 3
- __message__:  A text message that includes the error's explanation and/or details _(String)_

### 解説

This object is created and populated by Cordova, and returned to a callback in the case of an error.

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS

### 例

When the following error callback executes, it displays a
popup dialog with the text similar to `code: 3` and `message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

