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