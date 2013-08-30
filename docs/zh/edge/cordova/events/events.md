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

# 事件

> 科尔多瓦生命周期事件。

## 事件类型

*   deviceready
*   暂停
*   简历
*   在线
*   脱机
*   backbutton
*   batterycritical
*   batterylow
*   batterystatus
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## 访问功能

版本为 3.0，科尔多瓦实现电池状态和其他设备级 Api 作为*插件*。 默认情况下启用对所有其他不相关的电池状态的事件的访问。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以启用或禁用电池事件：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git
        $ cordova plugin rm org.apache.cordova.core.battery-status
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/config.xml) < 功能名称 ="蓄电池">< 参数名称 ="android 包"value="org.apache.cordova.BatteryListener"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用权限 android:name="android.permission.BROADCAST_STICKY"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="蓄电池">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.battery.Battery"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.app"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.app.event"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.system.event"所需 ="true"版本 ="1.0.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="蓄电池">< 参数名称 ="ios 包"值 ="CDVBattery"/ >< / 功能 >
        

*   （在 Tizen`config.xml`)
    
        < 功能名称 = 所需的"http://tizen.org/api/systeminfo"="true"/ >
        
    
    引用： [Tizen Web 应用程序的应用程序清单][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。