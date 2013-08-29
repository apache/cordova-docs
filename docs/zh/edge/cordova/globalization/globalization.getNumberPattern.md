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

# globalization.getNumberPattern

返回一个模式字符串格式化和分析数字根据客户端的用户首选项。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## 说明

返回到模式 `successCallback` 与 `properties` 对象作为参数。该对象包含以下属性：

*   **模式**： 要格式化和分析数字的数字模式。 模式按照 Unicode 技术标准 #35。 <http://unicode.org/reports/tr35/tr35-4.html>。 *（字符串）*

*   **符号**： 符号格式设置和分析过程中，如 %或货币符号时使用。*（字符串）*

*   **分数**： 小数位数解析和设置数字格式时要使用的数量。*（人数）*

*   **舍**： 舍递增时分析和格式设置使用。*（人数）*

*   **积极**： 积极数字分析和格式时要使用的符号。*（字符串）*

*   **负面**： 要为负数时分析和格式设置使用的符号。*（字符串）*

*   **十进制**： 小数点符号用于分析和格式设置。*（字符串）*

*   **分组**： 分组符号用于分析和格式设置。*（字符串）*

如果有错误获得该模式，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.PATTERN\_ERROR`.

`options`参数是可选的并且默认值：

    {类型： '十进制'}
    

`options.type`可以是 `decimal` ， `percent` ，或`currency`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

当浏览器设置为 `en\_US` 的区域设置，此时应显示一个弹出对话框与类似的结果，请按照操作的文本：

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

结果:

    图案: #，# 0.# # # 符号：。分数： 0 舍入: 0 积极： 消极：-十进制：。分组：，
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 怪癖

*   `pattern`不支持属性，和 retuens 为空字符串。

*   `fraction`不支持属性，并返回零。