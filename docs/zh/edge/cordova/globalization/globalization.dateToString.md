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

返回一个日期格式设置为一个字符串，根据客户端的区域设置和时区。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## 说明

返回格式化的日期 `String` 通过 `value` 属性可从该对象作为一个参数传递`successCallback`.

入站 `date` 参数的类型应为`Date`.

如果有错误格式日期，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.FORMATTING\_ERROR`.

`options`参数是可选的且其默认值：

    {formatLength: '短'，选择器： 日期和时间}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或`full`.

`options.selector`可以是 `date` ， `time` 或`date and time`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

如果浏览器设置为 `en\_US` 的区域设置，这将显示一个弹出对话框与类似的文本 `date: 9/25/2012 4:21PM` 使用默认选项：

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

*   `formatLength`选项仅支持 `short` 和 `full` 的值。