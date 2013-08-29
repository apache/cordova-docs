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

从全球化 API 表示一个错误的对象。

## 属性

*   **代码**： 表示错误类型的以下代码之一 *（人数）* 
    *   GlobalizationError.UNKNOWN _ 错误: 0
    *   GlobalizationError.FORMATTING _ 错误： 1
    *   GlobalizationError.PARSING _ 错误： 2
    *   GlobalizationError.PATTERN _ 错误： 3
*   **消息**： 一条文本消息，包括错误的解释，和/或详细说明*（字符串）*

## 说明

此对象创建和填充的科尔多瓦，并返回到出现错误时的回调。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS

## 快速的示例

以下错误回调执行时，它会显示弹出式对话框中的文本类似于 `code: 3` 和`message:`

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