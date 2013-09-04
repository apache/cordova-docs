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