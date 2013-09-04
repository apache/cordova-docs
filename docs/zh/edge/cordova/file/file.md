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

# 檔

> 一個 API，用於讀取、 寫入和導航基於[W3C 檔 API][1]的檔案系統層次結構.

 [1]: http://www.w3.org/TR/FileAPI

## 物件

*   枚舉指定工作組或
*   DirectoryReader
*   檔
*   FileEntry
*   FileError
*   FileReader
*   檔案系統
*   檔案傳輸
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   標誌
*   場合
*   中繼資料

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
    

要使用的檔案傳輸外掛程式必須單獨添加的。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml) < 功能名稱 ="檔">< 參數名稱 ="android 包"value="org.apache.cordova.FileUtils"/ >< / 功能 >< 功能名稱 ="檔案傳輸">< 參數名稱 ="android 包"value="org.apache.cordova.FileTransfer"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用許可權 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/ >
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml) < 功能名稱 ="檔">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.file.FileManager"/ >< / 功能 >< 功能名稱 ="檔案傳輸">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.HTTP.FileTransfer"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.io.file"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.utils"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.io.dir"所需 ="true"版本 ="1.0.0.0"/ >< rim: 許可權 >< rim： 許可證 > access_shared < / rim： 許可證 >< / rim： 許可權 >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="檔">< 參數名稱 ="ios 包"值 ="CDVFile"/ >< / 功能 >< 功能名稱 ="檔案傳輸">< 參數名稱 ="ios 包"值 ="CDVFileTransfer"/ >< / 功能 >
        

一些平臺可能支援此功能，而無需任何特殊的配置。有關概述，請參見平臺支援。