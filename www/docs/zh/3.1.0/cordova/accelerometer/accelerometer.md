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

# <a href="acceleration/acceleration.html">加速度</a>計

> 擷取裝置中的*x*、 *y*和*z*方向運動。

## 方法

*   <a href="accelerometer.getCurrentAcceleration.html">accelerometer.getCurrentAcceleration</a>
*   <a href="accelerometer.watchAcceleration.html">accelerometer.watchAcceleration</a>
*   <a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>

## 參數

*   <a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>
*   <a href="parameters/accelerometerError.html">accelerometerError</a>
*   <a href="parameters/accelerometerOptions.html">accelerometerOptions</a>

## 物件 （唯讀）

*   <a href="acceleration/acceleration.html">加速度</a>

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了<a href="../device/device.html">設備</a>級 Api。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="<a href="acceleration/acceleration.html">加速度</a>計">< 參數名稱 ="android 包"value="org.apache.cordova.AccelListener"/ >< / 功能 >
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml) < 功能名稱 ="<a href="acceleration/acceleration.html">加速度</a>計">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.accelerometer.Accelerometer"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.system"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="org.apache.cordova"所需 ="true"版本 ="1.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="<a href="acceleration/acceleration.html">加速度</a>計">< 參數名稱 ="ios 包"值 ="CDVAccelerometer"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。