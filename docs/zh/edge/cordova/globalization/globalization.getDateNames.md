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