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

このプラグインを使用して、ユーザのロケール ( locale ) と タイムゾーン ( timezone ) に基づいた情報の取得、および、それに付随する各種処理を行います。

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

クライアントのロケールとタイムゾーンに基づき、文字列形式の日付を返します。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);

### 解説

`value` プロパティー経由で、`文字列` ( String ) 形式の日付を返します。 `successCallback` にパラメーターとして渡したオブジェクトが、 `value` プロパティーを格納しています

インバウンド ( inbound ) する `date` パラメーターは、 `Date` 型です。

日付のフォーマット時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.FORMATTING\_ERROR` となります。

`options` パラメーターの設定は任意です。デフォルト値を以下に示します。

    {formatLength:'short', selector:'date and time'}

`options.formatLength` は、 `short` 、 `medium` 、 `long` 、 `full` のいづれかとなります。

`options.selector` は、 `date` 、 `time` 、 `date and time` のいづれかとなります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、以下のオプションを使用して、 `date: 9/25/2012 4:21PM` 形式のテキストをポップアップ ダイアログに表示します。

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );

### Windows Phone 8 特有の動作

- `formatLength` オプションでは、 `short` と `full` の値のみサポートします。

## navigator.globalization.getCurrencyPattern

クライアントが行った設定と ISO 4217 通貨コードの選択に基づき、通貨価値のパース処理 ( parse ) と通貨のフォーマット処理 ( format ) を行うときに使用・適用する、文字列形式の パターン ( pattern ) を返します。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

### 解説

`properties` オブジェクトをパラメーターとして使用し、 `successCallback` に パターン ( pattern ) を渡します。オブジェクトは、以下のパラメーターを格納しています。

- __pattern__: 通貨価値のパース処理と通貨のフォーマット処理を行うときに使用する、通貨に関するパターン ( pattern )。 パターンは、 [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html) に準拠しています。 _(String)_

- __code__: パターン ( pattern ) に使用する ISO 4217 の通貨コード _(String)_

- __fraction__: 通貨のパース処理とフォーマット処理を行うときに使用する、小数の桁数 _(Number)_

- __rounding__: 通貨のパース処理とフォーマット処理を行うときに適用する、端数処理 ( 切り捨て・切り上げ ) _(Number)_

- __decimal__: 通貨のパース処理とフォーマット処理を行うときに使用する、小数点の記号 _(String)_

- __grouping__: 通貨のパース処理とフォーマット処理を行うときに使用する、区切り記号 ( grouping symbol/separtor ) _(String)_

インバウンド ( inbound ) する `currencyCode` パラメーターには、ISO 4217 の通貨コードの `定義` ( 文字列 ) を使用します。例 : 'USD'

パターン ( pattern ) の取得時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.FORMATTING\_ERROR` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS

### 例

ブラウザーのロケールを `en\_US` に設定して、また、通貨を US ドルに選択した場合、以下の結果をポップアップ ダイアログに表示します。

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

クライアントが行った設定とカレンダーの選択にに基づき、曜日または月の名が入った配列を返します。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);

### 解説

`properties` オブジェクトをパラメーターとして使用して、曜日または月の名を入れた配列を `successCallback` に渡します。 `配列` ( `文字列` の値が入る ) を使用している `value` プロパティーを、オブジェクトは格納しています。また、この配列には、その年の最初の月名、または、週の最初の曜日名が入っています。どちらかが入るかは、オプション設定に依ります。

月または曜日名の取得時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.UNKNOWN\_ERROR` となります。

`options` パラメーターの設定は任意です。デフォルト値を以下に示します。

    {type:'wide', item:'months'}

`options.type` の値は、 `narrow` または `wide` となります。

`options.item` の値は、 `months` または `days` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、一連の 12 個 ( 1 個あたり ひと月 ) のポップアップ ダイアログ上に、`month: January` に似たテキストを表示します。

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

`successCallback` に パターン ( pattern ) を渡します。そのときにパラメータとして使用するオブジェクトは、以下のプロパティーを格納しています。

- __pattern__: 日付のパース処理とフォーマット処理を行うときに使用する、日時に関するパターン ( pattern )。パターンは、 [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html) に準拠しています。 _(String)_

- __timezone__: クライアントのタイムゾーンの略称 _(String)_

- __utc\_offset__: クライアントのタイムゾーンと協定世界時 ( UTC ) 間の時差 ( 秒単位 ) _(Number)_

- __dst\_offset__: 夏時間 ( DST ) を適用および不適用している、クライアントのタイムゾーン間の時差 ( 秒単位 ) _(Number)_

パターン ( pattern ) の取得時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.PATTERN\_ERROR` となります。

`options` パラメーターの設定は任意です。デフォルト値を以下に示します。

    {formatLength:'short', selector:'date and time'}

`options.formatLength` の値は、 `short` 、 `medium` 、 `long` 、 
`full` のいづれかとなります。 `options.selector` の値は、 `date` 、 `time` 、 `date and time` のいづれかとなります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、 `pattern: M/d/yyyy h:mm a` に似たテキストを表示します。

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }

### Windows Phone 8 特有の動作

- `formatLength` オプションでは、 `short` と `full` の値のみサポートします。

- `date and time` パターン ( pattern ) の `pattern` は、datetime 形式の値を返します。

- `timezone` は、タイムゾーンの名称を返します。

- `dst_offset` プロパティーをサポートしません。常に、「 0 」 を返します。

## navigator.globalization.getFirstDayOfWeek

クライアントの選択肢とカレンダーに基づき、週の最初の曜日を返します。

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);

### 解説

週の曜日には、1 から始まる番号が割り当てられます。1 は、日曜日を指します。 `properties` オブジェクトをパラメーターとして使用して、 `successCallback` に曜日を渡します。このオブジェクトは、 `曜日番号` の値を設定した `value` プロパティーを格納しています。

パターン ( pattern ) の取得時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.UNKNOWN\_ERROR` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、 `day: 1` に似たテキストを表示します。

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );

クライアントの現在のロケール設定に基づき、文字列形式の識別子を取得します。

    navigator.globalization.getLocaleName(successCallback, errorCallback);

### 解説

`properties` オブジェクトをパラメーターとして使用して、文字列形式のロケール識別子 ( locale ID ) を `successCallback` に渡します。このオブジェクトは、 `ロケール識別子` の値を設定した `value` プロパティーを格納しています。

ロケールの取得時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.UNKNOWN\_ERROR` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、 `locale: en\_US` のテキストを表示します。

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );

### Windows Phone 8 特有の動作

- 現在の国と地域に関して、ISO 3166 で定義する 2 桁のコードを返します。

## navigator.globalization.getNumberPattern

クライアントが行った設定に基づき、数値のパース処理 ( parse ) と数値のフォーマット処理 ( format ) を行うときに使用・適用する、文字列形式の パターン ( pattern ) を返します。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

### 解説

`successCallback` に パターン ( pattern ) を渡します。そのときにパラメータとして使用する `properties` オブジェクトは、以下のプロパティーを格納しています。

- __pattern__: 数値のパース処理とフォーマット処理を行うときに使用する、数値に関するパターン ( pattern )。パターンは、 [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html) に準拠しています。 _(String)_

- __symbol__: パース処理とフォーマット処理を行うときに使用する、記号 ( 例 : 通貨記号またはパーセント表示 ) _(String)_

- __fraction__: 数値のパース処理とフォーマット処理を行うときに使用する、小数の桁数 _(Number)_

- __rounding__: 数値のパース処理とフォーマット処理を行うときに適用する、端数処理 ( 切り捨て・切り上げ ) _(Number)_

- __positive__: パース処理とフォーマット処理を行うとき、正の数に使用する記号 _(String)_

- __negative__: パース処理とフォーマット処理を行うとき、負の数に使用する記号 _(String)_

- __decimal__: パース処理とフォーマット処理を行うときに使用する、小数点の記号 _(String)_

- __grouping__: パース処理とフォーマット処理を行うときに使用する、区切り記号 ( grouping symbol/separtor ) _(String)_

パターン ( pattern ) の取得時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.PATTERN\_ERROR` となります。

`options` パラメーターの設定は任意です。デフォルト値を以下に示します。

    {type:'decimal'}

The `options.type` の値は、 `decimal` 、 `percent` 、 `currency` のいづれかとなります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、以下と同じような結果のテキストを表示します。

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

結果 :

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,


### Windows Phone 8 特有の動作

- `pattern` プロパティーをサポートしません。空の文字列を返します。

- `fraction` プロパティーをサポートしません。「 0 」を返します。

## navigator.globalization.getPreferredLanguage

クライアントの現在の言語設定に基づき、文字列形式の識別子を取得します。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

### 解説

`properties` オブジェクトをパラメーターとして使用して、文字列形式の言語識別子 ( language ID ) を `successCallback` に渡します。このオブジェクトは、 `言語識別子` の値を設定した `value` プロパティーを格納しています。

言語情報の取得時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.UNKNOWN\_ERROR` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、 `language: English` のテキストを表示します。

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );


### Windows Phone 8 特有の動作

- 現在の言語に関して、ISO 639-1 で定義する 2 桁のコードを返します。

## navigator.globalization.isDayLightSavingsTime

クライアントのタイムゾーンとカレンダーを使用して、選択した日付に夏時間 ( DST ) を適用するか示します。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);

### 解説

`properties` オブジェクトをパラメーターとして `successCallback` に渡して、夏時間 ( DST ) を適用の有無を示します。 このオブジェクトは、 `Boolean` 値を設定した `dst` プロパティーを格納しています。 `Boolean` 値が `true` の場合、選択した日付に夏時間を適用することを示します。 `false` の場合、夏時間を適用しないことを示します。

インバウンド ( inbound ) する `date` パラメーターは、 `Date` 型です。

日付の読み込み時にエラーが発生した場合、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.UNKNOWN\_ERROR` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

夏時間が有効なタイムゾーンとしてブラウザー設定を行った場合、ポップアップ ダイアログ上に、 `dst: true` に似たテキストを表示します。

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );

## navigator.globalization.numberToString

クライアントの設定に基づき、文字列としてフォーマットを行った数値を返します。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

### 解説

`properties` オブジェクトをパラメーターとして使用して、文字列形式の数値を `successCallback` に渡します。このオブジェクトは、 `文字列` ( String ) の値を設定した `value` プロパティーを格納しています。

数値のフォーマット時にエラーが発生した場合、 `GlobalizationError` オブジェクトをパラメーターとして使用して、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.FORMATTING\_ERROR` となります。

`options` パラメーターの設定は任意です。デフォルト値を以下に示します。

    {type:'decimal'}

`options.type` の値は、 `decimal` 、 `percent` 、 `currency` のいづれかとなります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、 `number: 3.142` に似たテキストを表示します。

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

## navigator.globalization.stringToDate

クライアントの行った設定、および、クライアントが使用しているタイムゾーンのカレンダーに基づき、文字列としてフォーマットした日付のパース処理を行います。そして、パース処理の結果 ( data オブジェクト ) を返します。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

### 解説

`properties` オブジェクトをパラメーターとして使用して、日付を `successCallback` に渡します。このオブジェクトは、以下のプロパティーを格納しています。

- __year__: 西暦 ( 4 桁の数字 ) _(Number)_

- __month__: 月 ( 0-11 ) _(Number)_

- __day__: 日 ( 1-31 ) _(Number)_

- __hour__: 時 ( 0-23 ) _(Number)_

- __minute__: 分 ( 0-59 ) _(Number)_

- __second__: 秒 ( 0-59 ) _(Number)_

- __millisecond__: ミリ秒 ( 0-999 )。一部のプラットフォームでのみ有効。 _(Number)_

インバウンド ( inbound ) する `dateString` パラメーターは、 文字列形式です。

`options`　パラメーターの設定は任意です。デフォルト値を以下に示します。

    {formatLength:'short', selector:'date and time'}

`options.formatLength` の値は、 `short` 、 `medium` 、 `long` 、 
`full` のいづれかとなります。また、 `options.selector` の値は、 `date` 、 `time` 、 `date and　time` のいづれかとなります。

文字列形式の日付の読み込み ( parse ) 時にエラーが発生した場合、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.PARSING\_ERROR` となります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、 `month:8 day:25 year:2012` に似たテキストを表示します。月を示す整数は、配列のインデックスを指す為、実際の文字列の数より、「 1 」だけ少ない数となります。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );


### Windows Phone 8 特有の動作

- `formatLength` オプションでは、 `short` と `full` の値のみサポートします。

## navigator.globalization.stringToNumber

クライアントの行った設定に基づき、文字列としてフォーマットした数値のパース処理を行います。そして、パース処理の結果 ( 数値 ) を返します。

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);

### 解説

`properties` オブジェクトをパラメーターとして使用して、数値を `successCallback` に渡します。このオブジェクトは、 `数値` ( Number ) を設定した `value` プロパティーを格納しています。

文字列形式の数値の読み込み ( parse ) 時にエラーが発生した場合、 `errorCallback` を実行します。このときに使用するエラーコードは、 `GlobalizationError.PARSING\_ERROR` となります。

`options` パラメーターの設定は任意です。デフォルト値を以下に示します。

    {type:'decimal'}

`options.type` の値は、 `decimal` 、 `percent` 、 `currency` のいづれかとなります。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### 例

ブラウザーのロケールを `en\_US` に設定した場合、ポップアップ ダイアログ上に、 `number: 1234.56` に似たテキストを表示します。

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );


## GlobalizationError

Globalization API が返したエラーを示すオブジェクトです。

### プロパティ

- __code__:  エラーの種別を示した、以下のコードのうちの 1 つ _(Number)_
  - GlobalizationError.UNKNOWN\_ERROR: 0
  - GlobalizationError.FORMATTING\_ERROR: 1
  - GlobalizationError.PARSING\_ERROR: 2
  - GlobalizationError.PATTERN\_ERROR: 3
- __message__:  エラーの詳細を示すテキスト形式のメッセージ _(String)_

### 解説

このオブジェクトの生成を Cordova 側で行い、エラー発生時に、コールバックに渡します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- iOS

### 例

以下のコールバックを error 時に実行したとき、ポップアップ ダイアログ上に、 `code: 3` と `message:` に似たテキストを表示します。

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

