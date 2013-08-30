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

# 联系人

> `contacts`对象提供对设备的联系人数据库的访问。

**重要的隐私注：**联系人数据的收集和使用提出了重要的隐私问题。 您的应用程序的隐私策略应该讨论如何应用程序使用的联系人数据和它是否被共享与任何其他方。 联系信息被视为敏感，因为它揭示了人与人通信的人们。 因此，除了您的应用程序的隐私策略，您应强烈考虑提供在您的应用程序访问或使用联系人数据 （如果设备操作系统不会这样做已经） 之前的时间只是通知。 该通知应提供相同的信息上文指出的并获取该用户的权限 （例如，通过为**确定**并**不感谢**提出的选择）。 请注意有些应用程序市场可能需要您的应用程序提供只是时间的通知，并从访问联系人数据之前用户获得的权限。 周围的联系人数据将有助于避免用户混淆使用感知的和滥用的联系人数据的清晰和易于理解的用户体验。 有关详细信息，请参阅隐私指南。

## 方法

*   contacts.create
*   contacts.find

## 参数

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## 对象

*   联系人
*   联系人姓名
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
        $ cordova plugin rm org.apache.cordova.core.contacts
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/config.xml) < 功能名称 ="联系人">< 参数名称 ="android 包"value="org.apache.cordova.ContactManager"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用权限 android:name="android.permission.GET_ACCOUNTS"/ >< 使用权限 android:name="android.permission.READ_CONTACTS"/ >< 使用权限 android:name="android.permission.WRITE_CONTACTS"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="联系人">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.pim.Contact"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.find"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.identity"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.pim.Address"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.pim.Contact"所需 ="true"版本 ="1.0.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="联系人">< 参数名称 ="ios 包"值 ="CDVContacts"/ >< / 功能 >
        

*   Windows Phone
    
        (在 Properties/WPAppManifest.xml) < 功能 >< 功能名称 ="ID_CAP_CONTACTS"/ >< / 功能 >
        
    
    引用：[为 Windows Phone 应用程序清单][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。