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

# globalization.getCurrencyPattern

返回一个模式字符串格式化和分析根据客户端的用户首选项和 ISO 4217 货币代码货币值。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## 说明

返回到模式 `successCallback` 与 `properties` 对象作为参数。该对象应包含以下属性：

*   **模式**： 要格式化和分析货币值的货币模式。 模式按照 Unicode 技术标准 #35。 <http://unicode.org/reports/tr35/tr35-4.html>。 *（字符串）*

*   **代码**： 模式的 ISO 4217 货币代码。*（字符串）*

*   **分数**： 小数位数解析和货币的格式时要使用的数量。*（人数）*

*   **舍**： 舍递增时分析和格式设置使用。*（人数）*

*   **十进制**： 小数点符号用于分析和格式设置。*（字符串）*

*   **分组**： 分组符号用于分析和格式设置。*（字符串）*

入站 `currencyCode` 参数应该是 `String` 的 ISO 4217 货币代码，例如 '美元' 之一。

如果有错误获得该模式，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.FORMATTING\_ERROR`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS

## 快速的示例

当浏览器设置为 `en\_US` 区域设置和所选的币种是美元，本示例将显示一个弹出对话框与类似的结果，请按照操作的文本：

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

预期的结果：

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>