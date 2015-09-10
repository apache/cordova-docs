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

# 連絡人

> `contacts`物件提供對<a href="../device/device.html">設備</a>的連絡人<a href="../storage/database/database.html">資料庫</a>的訪問。

**重要的隱私注：**連絡人資料的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論如何應用程式使用的連絡人資料和它是否被共用與任何其他方。 聯繫資訊被視為敏感，因為它揭示了人與人通信的人們。 因此，除了您的應用程式的隱私權原則，您應強烈考慮提供在您的應用程式訪問或使用連絡人資料 （如果<a href="../device/device.html">設備</a>作業系統不會這樣做已經） 之前的時間只是<a href="../notification/notification.html">通知</a>。 該<a href="../notification/notification.html">通知</a>應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 請注意有些應用程式市場可能需要您的應用程式提供只是時間的<a href="../notification/notification.html">通知</a>，並從訪問連絡人資料之前使用者獲得的許可權。 周圍的連絡人資料將有助於避免使用者混淆使用感知的和濫用的連絡人資料的清晰和易於理解的使用者體驗。 有關詳細資訊，請參閱<a href="../../guide/appdev/privacy/index.html">隱私指南</a>。

## 方法

*   <a href="contacts.create.html">contacts.create</a>
*   <a href="contacts.find.html">contacts.find</a>

## 參數

*   <a href="parameters/contactFields.html">contactFields</a>
*   <a href="parameters/contactSuccess.html">contactSuccess</a>
*   <a href="parameters/contactError.html">contactError</a>
*   <a href="parameters/contactFindOptions.html">contactFindOptions</a>

## 物件

*   連絡人
*   <a href="ContactName/contactname.html">連絡人姓名</a>
*   <a href="ContactField/contactfield.html">ContactField</a>
*   <a href="ContactAddress/contactaddress.html">ContactAddress</a>
*   <a href="ContactOrganization/contactorganization.html">ContactOrganization</a>
*   <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>
*   <a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了<a href="../device/device.html">設備</a>級 Api。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   （在 iOS`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。