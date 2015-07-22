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