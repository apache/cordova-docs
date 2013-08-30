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

# 全球化

获取的信息并执行操作特定于用户的区域设置和时区。

## 对象

*   GlobalizationError

## 方法

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## 变量范围

`globalization`对象是一个孩子的 `navigator` 对象，并因此具有全局范围。

    // The global globalization object
    var globalization = navigator.globalization;
    

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git
        $ cordova plugin rm org.apache.cordova.core.globalization
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名称 ="全球化">< 参数名称 ="android 包"value="org.apache.cordova.Globalization"/ >< / 功能 >
        

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。