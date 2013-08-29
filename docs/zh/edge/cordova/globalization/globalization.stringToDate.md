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

# globalization.stringToDate

分析日期格式设置为一个字符串，根据客户端的用户首选项和日历使用时区的客户端，并返回对应的 date 对象。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## 说明

返回的日期与成功回调到 `properties` 对象作为参数。该对象应具有以下属性：

*   **一年**： 将四个数字的年份。*（人数）*

*   **月**： 从 （0-11) 月。*（人数）*

*   **一天**： 从 （1-31) 天。*（人数）*

*   **小时**： 从 (0-23) 小时。*（人数）*

*   **分钟**： 从 (0-59) 分钟。*（人数）*

*   **第二**： 的第二位 (0-59)。*（人数）*

*   **毫秒**： 的毫秒数 （从 0-999)，在所有平台上不可用。*（人数）*

入站 `dateString` 参数的类型应为`String`.

`options`参数是可选的并且默认为以下值：

    {formatLength: '短'，选择器： 日期和时间}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或 `full` 。 `options.selector`可以是 `date` ， `time` 或`date and
time`.

如果有错误解析日期字符串，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.PARSING\_ERROR`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

当浏览器设置为 `en\_US` 的区域设置，这将显示一个弹出对话框与类似的文本 `month:8 day:25 year:2012` 。 请注意，整数是一个月比少的字符串，作为月整数代表数组索引。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 怪癖

*   `formatLength`选项仅支持 `short` 和 `full` 的值。