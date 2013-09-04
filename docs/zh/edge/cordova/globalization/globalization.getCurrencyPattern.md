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