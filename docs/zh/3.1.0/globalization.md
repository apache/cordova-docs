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


# 全球化

獲取的資訊並執行操作特定于使用者的地區設定和時區。

## 物件

*   GlobalizationError

## 方法

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

## 變數範圍

`globalization`物件是一個孩子的 `navigator` 物件，並因此具有全域範圍。

    // The global globalization object
    var globalization = navigator.globalization;
    

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# globalization.getPreferredLanguage

獲取用戶端的當前語言的字串識別碼。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## 說明

返回到的語言識別項字串 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `String` 的值。

如果有出錯的語言，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN\_ERROR`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，此時應顯示彈出式功能表對話方塊的文本與 `language: English` ：

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## 完整的示例

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
    

## Windows Phone 8 怪癖

*   返回當前語言的 ISO 639-1 兩個字母代碼。


# globalization.getLocaleName

獲取用戶端的目前範圍設置的字串識別碼。

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## 說明

返回到的地區設定識別碼字串 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `String` 的值。

如果有出錯的地區設定，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN\_ERROR`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，這將顯示彈出式對話方塊中的文本`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## 完整的示例

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
    

## Windows Phone 8 怪癖

*   返回為當前的國家地區在 ISO 3166 中定義的兩個字母代碼。


# globalization.dateToString

返回一個日期格式設置為一個字串，根據用戶端的地區設定和時區。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## 說明

返回格式化的日期 `String` 通過 `value` 屬性可從該物件作為一個參數傳遞`successCallback`.

入站 `date` 參數的類型應為`Date`.

如果有錯誤格式日期，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.FORMATTING\_ERROR`.

`options`參數是可選的且其預設值：

    {formatLength: '短'，選擇器： 日期和時間}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或`full`.

`options.selector`可以是 `date` ， `time` 或`date and time`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

如果瀏覽器設置為 `en\_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本 `date: 9/25/2012 4:21PM` 使用預設選項：

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## 完整的示例

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
    

## Windows Phone 8 怪癖

*   `formatLength`選項僅支援 `short` 和 `full` 的值。


# globalization.stringToDate

分析日期格式設置為一個字串，根據用戶端的使用者首選項和日曆使用時區的用戶端，並返回對應的 date 物件。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## 說明

返回的日期與成功回檔到 `properties` 物件作為參數。該物件應具有以下屬性：

*   **一年**： 將四個數字的年份。*（人數）*

*   **月**： 從 （0-11) 月。*（人數）*

*   **一天**： 從 （1-31) 天。*（人數）*

*   **小時**： 從 (0-23) 小時。*（人數）*

*   **分鐘**： 從 (0-59) 分鐘。*（人數）*

*   **第二**： 的第二位 (0-59)。*（人數）*

*   **毫秒**： 的毫秒數 （從 0-999)，在所有平臺上不可用。*（人數）*

入站 `dateString` 參數的類型應為`String`.

`options`參數是可選的並且預設為以下值：

    {formatLength: '短'，選擇器： 日期和時間}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或 `full` 。 `options.selector`可以是 `date` ， `time` 或`date and
time`.

如果有錯誤解析日期字串，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PARSING\_ERROR`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本 `month:8 day:25 year:2012` 。 請注意，整數是一個月比少的字串，作為月整數代表陣列索引。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## 完整的示例

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
    

## Windows Phone 8 怪癖

*   `formatLength`選項僅支援 `short` 和 `full` 的值。


# globalization.getDatePattern

返回一個模式字串格式化和解析日期根據用戶端的使用者首選項。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## 說明

返回到模式 `successCallback` 。作為一個參數傳遞的物件包含以下屬性：

*   **模式**： 要格式化和解析日期的日期和時間模式。 模式按照 Unicode 技術標準 #35。 [HTTP://unicode.org/reports/tr35/tr35-4.html][1]。 *（字串）*

*   **時區**： 在用戶端上的時區的縮寫的名稱。*（字串）*

*   **utc_offset**： 用戶端的時區和協調通用時間當前區別秒。*（人數）*

*   **dst_offset**： 在用戶端的夏之間的秒數的當前夏令時偏移量的時區和用戶端的夏時制儲蓄的時區。*（人數）*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

如果您獲取該模式，錯誤 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PATTERN\_ERROR`.

`options`參數是可選的並且預設為以下值：

    {formatLength: '短'，選擇器： 日期和時間}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或 `full` 。 `options.selector`可以是 `date` ， `time` 或`date and
time`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，此示例顯示彈出式對話方塊中的文本如 `pattern: M/d/yyyy h:mm a` ：

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## 完整的示例

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
    

## Windows Phone 8 怪癖

*   `formatLength`僅支援 `short` 和 `full` 的值。

*   `pattern`的 `date and time` 模式返回只完整的日期時間格式。

*   `timezone`返回全時區名稱。

*   `dst_offset`屬性不受支援，並且總是返回零。


# globalization.getDateNames

返回一個陣列的幾個月的名稱或一周內，根據用戶端的使用者首選項和日曆天。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## 說明

返回的陣列的名稱為 `successCallback` 與 `properties` 物件作為參數。 該物件包含 `value` 屬性與 `Array` 的 `String` 的值。 從任一開始一年或一周內，根據所選的選項的第一天中的第一個月的陣列功能名稱。

如果有錯誤取得名字，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN\_ERROR`.

`options`參數是可選的且其預設值：

    {類型： '寬'、 專案： '月'}
    

值 `options.type` 可以是 `narrow` 或`wide`.

值 `options.item` 可以是 `months` 或`days`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，本示例顯示一系列的十二個彈出對話方塊，每個月，與類似的文本一個 `month: January` ：

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## 完整的示例

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

指示是否夏令時生效是給定日期使用用戶端的時區和日曆。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## 說明

指示是否夏令時生效的是 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `dst` 屬性與 `Boolean` 的值。 A `true` 值指示夏令時實際上是對給定的日期，和 `false` 指示它不是。

入站的參數 `date` 的類型應為`Date`.

如果有錯誤讀取日期，然後 `errorCallback` 執行。錯誤的期望的代碼`GlobalizationError.UNKNOWN\_ERROR`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

在夏天的時候，如果瀏覽器被設置為啟用 DST 時區，這應顯示一個彈出式對話方塊與類似的文本和 `dst: true` ：

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## 完整的示例

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

返回用戶端的使用者首選項和日曆星期的第一天。

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## 說明

周中天的編號 1，從開始位置 1 假定是星期日。 返回到天 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `Number` 的值。

如果有錯誤獲得該模式，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN\_ERROR`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## 完整的示例

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

返回一個數位的格式設置為根據用戶端的使用者首選項的字串。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## 說明

返回到帶格式的數位字串 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `String` 的值。

如果有錯誤格式數，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.FORMATTING\_ERROR`.

`options`參數是可選的且其預設值：

    {類型： '十進位'}
    

`options.type`可以是 '十進位'、 '%' 或 '貨幣'。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本 `number: 3.142` ：

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## 完整的示例

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

分析的數位格式化為根據用戶端的使用者首選項的字串並返回相應的號碼。

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## 說明

返回到數 `successCallback` 與 `properties` 物件作為參數。物件應具有 `value` 屬性與 `Number` 的值。

如果有錯誤解析的字串，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PARSING\_ERROR`.

`options`參數是可選的並且預設為以下值：

    {類型： '十進位'}
    

`options.type`可以是 `decimal` ， `percent` ，或`currency`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，此時應顯示與文本類似于彈出式對話方塊中 `number: 1234.56` ：

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## 完整的示例

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

返回一個模式字串格式化和分析數位根據用戶端的使用者首選項。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## 說明

返回到模式 `successCallback` 與 `properties` 物件作為參數。該物件包含以下屬性：

*   **模式**： 要格式化和分析數位的數位模式。 模式按照 Unicode 技術標準 #35。 [HTTP://unicode.org/reports/tr35/tr35-4.html][1]。 *（字串）*

*   **符號**： 符號格式設置和分析過程中，如 %或貨幣符號時使用。*（字串）*

*   **分數**： 小數位數解析和設置數位格式時要使用的數量。*（人數）*

*   **舍**： 舍遞增時分析和格式設置使用。*（人數）*

*   **積極**： 積極數位分析和格式時要使用的符號。*（字串）*

*   **負面**： 要為負數時分析和格式設置使用的符號。*（字串）*

*   **十進位**： 小數點符號用於分析和格式設置。*（字串）*

*   **分組**： 分組符號用於分析和格式設置。*（字串）*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

如果有錯誤獲得該模式，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PATTERN\_ERROR`.

`options`參數是可選的並且預設值：

    {類型： '十進位'}
    

`options.type`可以是 `decimal` ， `percent` ，或`currency`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

當瀏覽器設置為 `en\_US` 的地區設定，此時應顯示一個彈出對話方塊與類似的結果，請按照操作的文本：

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

    圖案: #，# 0.# # # 符號：。分數： 0 舍入: 0 積極： 消極：-十進位：。分組：，
    

## 完整的示例

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
    

## Windows Phone 8 怪癖

*   `pattern`不支援屬性，和 retuens 為空字串。

*   `fraction`不支援屬性，並返回零。


# globalization.getCurrencyPattern

返回一個模式字串格式化和分析根據用戶端的使用者首選項和 ISO 4217 貨幣代碼貨幣值。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## 說明

返回到模式 `successCallback` 與 `properties` 物件作為參數。該物件應包含以下屬性：

*   **模式**： 要格式化和分析貨幣值的貨幣模式。 模式按照 Unicode 技術標準 #35。 [HTTP://unicode.org/reports/tr35/tr35-4.html][1]。 *（字串）*

*   **代碼**： 模式的 ISO 4217 貨幣代碼。*（字串）*

*   **分數**： 小數位數解析和貨幣的格式時要使用的數量。*（人數）*

*   **舍**： 舍遞增時分析和格式設置使用。*（人數）*

*   **十進位**： 小數點符號用於分析和格式設置。*（字串）*

*   **分組**： 分組符號用於分析和格式設置。*（字串）*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

入站 `currencyCode` 參數應該是 `String` 的 ISO 4217 貨幣代碼，例如 '美元' 之一。

如果有錯誤獲得該模式，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.FORMATTING\_ERROR`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS

## 快速的示例

當瀏覽器設置為 `en\_US` 地區設定和所選的幣種是美元，本示例將顯示一個彈出對話方塊與類似的結果，請按照操作的文本：

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
    

預期的結果：

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## 完整的示例

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

從全球化 API 表示一個錯誤的物件。

## 屬性

*   **代碼**： 表示錯誤類型的以下代碼之一 *（人數）* 
    *   GlobalizationError.UNKNOWN _ 錯誤: 0
    *   GlobalizationError.FORMATTING _ 錯誤： 1
    *   GlobalizationError.PARSING _ 錯誤： 2
    *   GlobalizationError.PATTERN _ 錯誤： 3
*   **消息**： 一條文本消息，包括錯誤的解釋，和/或詳細說明*（字串）*

## 說明

此物件創建和填充的科爾多瓦，並返回到出現錯誤時的回檔。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS

## 快速的示例

以下錯誤回檔執行時，它會顯示彈出式對話方塊中的文本類似于 `code: 3` 和`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## 完整的示例

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
