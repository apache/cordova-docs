---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

# 全球化

獲取的資訊並執行操作特定于使用者的地區設定和時區。

## 物件

*   <a href="GlobalizationError/globalizationerror.html">GlobalizationError</a>

## 方法

*   <a href="globalization.getPreferredLanguage.html">globalization.getPreferredLanguage</a>
*   <a href="globalization.getLocaleName.html">globalization.getLocaleName</a>
*   <a href="globalization.dateToString.html">globalization.dateToString</a>
*   <a href="globalization.stringToDate.html">globalization.stringToDate</a>
*   <a href="globalization.getDatePattern.html">globalization.getDatePattern</a>
*   <a href="globalization.getDateNames.html">globalization.getDateNames</a>
*   <a href="globalization.isDayLightSavingsTime.html">globalization.isDayLightSavingsTime</a>
*   <a href="globalization.getFirstDayOfWeek.html">globalization.getFirstDayOfWeek</a>
*   <a href="globalization.numberToString.html">globalization.numberToString</a>
*   <a href="globalization.stringToNumber.html">globalization.stringToNumber</a>
*   <a href="globalization.getNumberPattern.html">globalization.getNumberPattern</a>
*   <a href="globalization.getCurrencyPattern.html">globalization.getCurrencyPattern</a>

## <a href="../../plugin_ref/spec.html">變數</a>範圍

`globalization`物件是一個孩子的 `navigator` 物件，並因此具有全域範圍。

    // The global globalization object
    var globalization = navigator.globalization;
    

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了<a href="../device/device.html">設備</a>級 Api。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。