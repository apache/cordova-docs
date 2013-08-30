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

# globalization.numberToString

返回一个数字的格式设置为根据客户端的用户首选项的字符串。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## 说明

返回到带格式的数字字符串 `successCallback` 与 `properties` 对象作为参数。 对象应具有 `value` 属性与 `String` 的值。

如果有错误格式数，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.FORMATTING\_ERROR`.

`options`参数是可选的且其默认值：

    {类型： '十进制'}
    

`options.type`可以是 '十进制'、 '%' 或 '货币'。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

当浏览器设置为 `en\_US` 的区域设置，这将显示一个弹出对话框与类似的文本 `number: 3.142` ：

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>