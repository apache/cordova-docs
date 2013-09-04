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

# 相機

> `camera`物件提供對該設備的預設攝像頭應用程式的訪問。

**重要的隱私注：**圖像從一個設備觀景窗的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論應用程式如何使用相機和是否與任何其他方共用錄製的影像。 此外，如果相機的應用程式的使用在使用者介面中不是明顯的應在您的應用程式訪問相機 （如果設備作業系統不會這樣做已經） 之前提供只是在時間的通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 有關詳細資訊，請參閱隱私指南。

## 方法

*   camera.getPicture
*   camera.cleanup

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
        $ cordova plugin rm org.apache.cordova.core.camera
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml) < 功能名稱 ="相機">< 參數名稱 ="android 包"value="org.apache.cordova.CameraLauncher"/ >< / 功能 > (在 app/AndroidManifest) < 使用許可權 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/ >
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml) < 功能名稱 ="相機">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.camera.Camera"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.media.camera"/ >< rim： 許可權 >< rim： 許可證 > use_camera < / rim： 許可證 >< / rim： 許可權 >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="相機">< 參數名稱 ="ios 包"值 ="CDVCamera"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名稱 ="ID_CAP_ISV_CAMERA"/ >< 功能名稱 ="ID_HW_FRONTCAMERA"/ >< / 功能 >
        
    
    引用：[為 Windows Phone 應用程式清單][1]

*   （在 Tizen`config.xml`)
    
        < 功能名稱 = 所需的"HTTP://tizen.org/api/application"="true"/ >< 功能名稱 ="HTTP://tizen.org/api/application.launch"所需 ="true"/ >
        
    
    引用： [Tizen Web 應用程式的應用程式清單][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平臺可能支援此功能，而無需任何特殊的配置。有關概述，請參見平臺支援。