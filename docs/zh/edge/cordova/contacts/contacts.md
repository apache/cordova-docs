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

# 連絡人

> `contacts`物件提供對設備的連絡人資料庫的訪問。

**重要的隱私注：**連絡人資料的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論如何應用程式使用的連絡人資料和它是否被共用與任何其他方。 聯繫資訊被視為敏感，因為它揭示了人與人通信的人們。 因此，除了您的應用程式的隱私權原則，您應強烈考慮提供在您的應用程式訪問或使用連絡人資料 （如果設備作業系統不會這樣做已經） 之前的時間只是通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 請注意有些應用程式市場可能需要您的應用程式提供只是時間的通知，並從訪問連絡人資料之前使用者獲得的許可權。 周圍的連絡人資料將有助於避免使用者混淆使用感知的和濫用的連絡人資料的清晰和易於理解的使用者體驗。 有關詳細資訊，請參閱隱私指南。

## 方法

*   contacts.create
*   contacts.find

## 參數

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## 物件

*   連絡人
*   連絡人姓名
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
        $ cordova plugin rm org.apache.cordova.core.contacts
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml) < 功能名稱 ="連絡人">< 參數名稱 ="android 包"value="org.apache.cordova.ContactManager"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用許可權 android:name="android.permission.GET_ACCOUNTS"/ >< 使用許可權 android:name="android.permission.READ_CONTACTS"/ >< 使用許可權 android:name="android.permission.WRITE_CONTACTS"/ >
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml) < 功能名稱 ="連絡人">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.pim.Contact"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.find"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.identity"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.pim.Address"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.pim.Contact"所需 ="true"版本 ="1.0.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="連絡人">< 參數名稱 ="ios 包"值 ="CDVContacts"/ >< / 功能 >
        

*   Windows Phone
    
        (在 Properties/WPAppManifest.xml) < 功能 >< 功能名稱 ="ID_CAP_CONTACTS"/ >< / 功能 >
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。有關概述，請參見平臺支援。