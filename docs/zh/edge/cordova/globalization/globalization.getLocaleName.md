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