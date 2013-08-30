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

# globalization.isDayLightSavingsTime

指示是否夏令时生效是给定日期使用客户端的时区和日历。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## 说明

指示是否夏令时生效的是 `successCallback` 与 `properties` 对象作为参数。 对象应具有 `dst` 属性与 `Boolean` 的值。 A `true` 值指示夏令时实际上是对给定的日期，和 `false` 指示它不是。

入站的参数 `date` 的类型应为`Date`.

如果有错误读取日期，然后 `errorCallback` 执行。错误的期望的代码`GlobalizationError.UNKNOWN\_ERROR`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 8

## 快速的示例

在夏天的时候，如果浏览器被设置为启用 DST 时区，这应显示一个弹出式对话框与类似的文本和 `dst: true` ：

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## 完整的示例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>