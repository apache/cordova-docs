---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

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