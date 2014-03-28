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

# 加速度計

> 擷取裝置中的*x*、 *y*和*z*方向運動。

## 方法

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## 參數

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## 物件 （唯讀）

*   加速度

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="加速度計">< 參數名稱 ="android 包"value="org.apache.cordova.AccelListener"/ >< / 功能 >
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml) < 功能名稱 ="加速度計">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.accelerometer.Accelerometer"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.system"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="org.apache.cordova"所需 ="true"版本 ="1.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="加速度計">< 參數名稱 ="ios 包"值 ="CDVAccelerometer"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。