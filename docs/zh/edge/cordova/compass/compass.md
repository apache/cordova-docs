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

# 指南针

> 获取该设备的指向的方向。

## 方法

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (已过时)
*   compass.clearWatchFilter (已过时)

## 参数

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git
        $ cordova plugin rm org.apache.cordova.core.device-orientation
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名称 ="罗盘">< 参数名称 ="android 包"value="org.apache.cordova.CompassListener"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="罗盘">< 参数名称 ="ios 包"值 ="CDVLocation"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名称 ="ID_CAP_SENSORS"/ >< / 功能 >
        
    
    引用：[为 Windows Phone 应用程序清单][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。