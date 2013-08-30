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

分析的数字格式化为根据客户端的用户首选项的字符串并返回相应的号码。

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## 说明

返回到数 `successCallback` 与 `properties` 对象作为参数。对象应具有 `value` 属性与 `Number` 的值。

如果有错误解析的字符串，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.PARSING\_ERROR`.

`options`参数是可选的并且默认为以下值：

    {类型： '十进制'}
    

`options.type`可以是 `decimal` ， `percent` ，或`currency`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

当浏览器设置为 `en\_US` 的区域设置，此时应显示与文本类似于弹出式对话框中 `number: 1234.56` ：

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