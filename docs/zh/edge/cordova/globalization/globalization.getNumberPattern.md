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