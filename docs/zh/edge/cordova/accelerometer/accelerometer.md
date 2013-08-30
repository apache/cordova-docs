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

# 加速度计

> 捕获设备中的*x*、 *y*和*z*方向运动。

## 方法

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## 参数

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## 对象 （只读）

*   加速度

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git
        $ cordova plugin rm org.apache.cordova.core.device-motion
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名称 ="加速度计">< 参数名称 ="android 包"value="org.apache.cordova.AccelListener"/ >< / 功能 >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="加速度计">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.accelerometer.Accelerometer"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.system"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="org.apache.cordova"所需 ="true"版本 ="1.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="加速度计">< 参数名称 ="ios 包"值 ="CDVAccelerometer"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名称 ="ID_CAP_SENSORS"/ >< / 功能 >
        
    
    引用：[为 Windows Phone 应用程序清单][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。