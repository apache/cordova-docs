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

# 地理定位

> `geolocation`对象提供对基于设备的 GPS 传感器或推断网络信号的位置数据的访问。

`Geolocation`提供有关该设备的位置，例如纬度和经度信息。 常见的位置信息来源包括全球定位系统 (GPS) 和网络信号，如 IP 地址、 RFID、 WiFi 和蓝牙 MAC 地址和 GSM/CDMA 单元格 Id 从推断出的位置。 没有任何保证，API 返回设备的实际位置。

此 API 基于[W3C 地理定位 API 规范][1]，并只执行已经不提供实现的设备上。

 [1]: http://dev.w3.org/geo/api/spec-source.html

**重要的隐私注：**地理定位数据的收集和使用提出了重要的隐私问题。 您的应用程序的隐私策略应该讨论这款应用程序如何使用地理定位数据，数据是否共享它的任何其他缔约方和的数据 （例如，粗、 细，ZIP 代码级别，等等） 的精度水平。 地理定位数据被普遍认为敏感的因为它能揭示一个人的下落，如果存储中，他或她的旅行史。 因此，除了您的应用程序的隐私策略，您应强烈考虑提供在您的应用程序访问地理定位数据 （如果设备操作系统不会这样做已经） 之前的时间只是通知。 该通知应提供相同的信息上文指出的并获取该用户的权限 （例如，通过为**确定**并**不感谢**提出的选择）。 有关详细信息，请参阅隐私指南。

## 方法

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## 参数

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## 对象 （只读）

*   位置
*   PositionError
*   坐标

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git
        $ cordova plugin rm org.apache.cordova.core.geolocation
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/config.xml) < 功能名称 ="地理定位">< 参数名称 ="android 包"value="org.apache.cordova.GeoBroker"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用权限 android:name="android.permission.ACCESS_COARSE_LOCATION"/ >< 使用权限 android:name="android.permission.ACCESS_FINE_LOCATION"/ >< 使用权限 android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="地理定位">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.geolocation.Geolocation"/ >< / 功能 > (在 www/config.xml) < rim： 权限 >< rim： 许可证 > read_geolocation < / rim： 许可证 >< / rim： 权限 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="地理定位">< 参数名称 ="ios 包"值 ="CDVLocation"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名称 ="ID_CAP_LOCATION"/ >< / 功能 >
        
    
    引用：[为 Windows Phone 应用程序清单][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。