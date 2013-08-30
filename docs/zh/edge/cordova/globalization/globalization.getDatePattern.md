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

# globalization.getDatePattern

返回一个模式字符串格式化和解析日期根据客户端的用户首选项。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## 说明

返回到模式 `successCallback` 。作为一个参数传递的对象包含以下属性：

*   **模式**： 要格式化和解析日期的日期和时间模式。 模式按照 Unicode 技术标准 #35。 <http://unicode.org/reports/tr35/tr35-4.html>。 *（字符串）*

*   **时区**： 在客户端上的时区的缩写的名称。*（字符串）*

*   **utc_offset**： 客户端的时区和协调通用时间当前区别秒。*（人数）*

*   **dst_offset**： 在客户端的夏之间的秒数的当前夏令时偏移量的时区和客户端的夏时制储蓄的时区。*（人数）*

如果您获取该模式，错误 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.PATTERN\_ERROR`.

`options`参数是可选的并且默认为以下值：

    {formatLength: '短'，选择器： 日期和时间}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或 `full` 。 `options.selector`可以是 `date` ， `time` 或`date and
time`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

当浏览器设置为 `en\_US` 的区域设置，此示例显示弹出式对话框中的文本如 `pattern: M/d/yyyy h:mm a` ：

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 怪癖

*   `formatLength`仅支持 `short` 和 `full` 的值。

*   `pattern`的 `date and time` 模式返回只完整的日期时间格式。

*   `timezone`返回全时区名称。

*   `dst_offset`属性不受支持，并且总是返回零。