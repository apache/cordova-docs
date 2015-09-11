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

# 指南針

> 獲取該<a href="../device/device.html">設備</a>的指向的方向。

## 方法

*   <a href="compass.getCurrentHeading.html">compass.getCurrentHeading</a>
*   <a href="compass.watchHeading.html">compass.watchHeading</a>
*   <a href="compass.clearWatch.html">compass.clearWatch</a>
*   <a href="<a href="compass.watchHeading.html">compass.watchHeading</a>Filter.html"><a href="compass.watchHeading.html">compass.watchHeading</a>Filter</a> (已過時)
*   <a href="<a href="compass.clearWatch.html">compass.clearWatch</a>Filter.html"><a href="compass.clearWatch.html">compass.clearWatch</a>Filter</a> (已過時)

## 參數

*   <a href="parameters/compassSuccess.html">compassSuccess</a>
*   <a href="parameters/compassError.html">compassError</a>
*   <a href="parameters/compassOptions.html">compassOptions</a>
*   <a href="parameters/compassHeading.html">compassHeading</a>

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了<a href="../device/device.html">設備</a>級 Api。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   （在 iOS`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。