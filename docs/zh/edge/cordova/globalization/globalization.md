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

獲取的資訊並執行操作特定于使用者的地區設定和時區。

## 物件

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

## 變數範圍

`globalization`物件是一個孩子的 `navigator` 物件，並因此具有全域範圍。

    // The global globalization object
    var globalization = navigator.globalization;
    

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。