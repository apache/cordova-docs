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