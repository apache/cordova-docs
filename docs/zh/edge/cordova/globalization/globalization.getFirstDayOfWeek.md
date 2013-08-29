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

# globalization.getFirstDayOfWeek

返回客户端的用户首选项和日历星期的第一天。

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## 说明

周中天的编号 1，从开始位置 1 假定是星期日。 返回到天 `successCallback` 与 `properties` 对象作为参数。 对象应具有 `value` 属性与 `Number` 的值。

如果有错误获得该模式，然后 `errorCallback` 执行与 `GlobalizationError` 对象作为参数。 错误的期望的代码`GlobalizationError.UNKNOWN\_ERROR`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

当浏览器设置为 `en\_US` 的区域设置，这将显示一个弹出对话框与类似的文本`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>