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

# 指南針

> 獲取該設備的指向的方向。

## 方法

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (已過時)
*   compass.clearWatchFilter (已過時)

## 參數

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git
        $ cordova plugin rm org.apache.cordova.core.device-orientation
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="羅盤">< 參數名稱 ="android 包"value="org.apache.cordova.CompassListener"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="羅盤">< 參數名稱 ="ios 包"值 ="CDVLocation"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名稱 ="ID_CAP_SENSORS"/ >< / 功能 >
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。有關概述，請參見平臺支援。