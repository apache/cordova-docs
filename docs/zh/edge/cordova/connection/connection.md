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

# 连接

> `connection`对象，通过公开 `navigator.connection` ，提供了有关该设备的移动电话和无线网络连接的信息。

## 属性

*   connection.type

## 常量

*   Connection.UNKNOWN
*   Connection.ETHERNET
*   Connection.WIFI
*   Connection.CELL_2G
*   Connection.CELL_3G
*   Connection.CELL_4G
*   Connection.CELL
*   Connection.NONE

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git
        $ cordova plugin rm org.apache.cordova.core.network-information
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/config.xml) < 功能名称 ="网络状态">< 参数名称 ="android 包"value="org.apache.cordova.NetworkManager"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用权限 android:name="android.permission.INTERNET"/ >< 使用权限 android:name="android.permission.ACCESS_NETWORK_STATE"/ >< 使用权限 android:name="android.permission.READ_PHONE_STATE"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="网络状态">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.network.Network"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="网络状态">< 参数名称 ="ios 包"值 ="CDVConnection"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名称 ="ID_CAP_NETWORKING"/ >< / 功能 >
        
    
    引用：[为 Windows Phone 应用程序清单][1]

*   （在 Tizen`config.xml`)
    
        < 功能名称 = 所需的"http://tizen.org/api/systeminfo"="true"/ >
        
    
    引用： [Tizen Web 应用程序的应用程序清单][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。