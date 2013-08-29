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

# globalization.getDateNames

返回一个数组的几个月的名称或一周内，根据客户端的用户首选项和日历天。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## 说明

返回的数组的名称为 `successCallback` 与 `properties` 对象作为参数。 该对象包含 `value` 属性与 `Array` 的 `String` 的值。 从任一开始一年或一周内，根据所选的选项的第一天中的第一个月的数组功能名称。

如果有错误取得名字，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.UNKNOWN\_ERROR`.

`options`参数是可选的且其默认值：

    {类型： '宽'、 项目： '月'}
    

值 `options.type` 可以是 `narrow` 或`wide`.

值 `options.item` 可以是 `months` 或`days`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

当浏览器设置为 `en\_US` 的区域设置，本示例显示一系列的十二个弹出对话框，每个月，与类似的文本一个 `month: January` ：

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>