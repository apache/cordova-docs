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