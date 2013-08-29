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

# 文件

> 一个 API，用于读取、 写入和导航基于[W3C 文件 API][1]的文件系统层次结构.

 [1]: http://www.w3.org/TR/FileAPI

## 对象

*   枚举指定工作组或
*   DirectoryReader
*   文件
*   FileEntry
*   FileError
*   FileReader
*   文件系统
*   文件传输
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   标志
*   场合
*   元数据

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
    

要使用的文件传输插件必须单独添加的。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/config.xml) < 功能名称 ="文件">< 参数名称 ="android 包"value="org.apache.cordova.FileUtils"/ >< / 功能 >< 功能名称 ="文件传输">< 参数名称 ="android 包"value="org.apache.cordova.FileTransfer"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用权限 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="文件">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.file.FileManager"/ >< / 功能 >< 功能名称 ="文件传输">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.http.FileTransfer"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.io.file"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.utils"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.io.dir"所需 ="true"版本 ="1.0.0.0"/ >< rim: 权限 >< rim： 许可证 > access_shared < / rim： 许可证 >< / rim： 权限 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="文件">< 参数名称 ="ios 包"值 ="CDVFile"/ >< / 功能 >< 功能名称 ="文件传输">< 参数名称 ="ios 包"值 ="CDVFileTransfer"/ >< / 功能 >
        

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。