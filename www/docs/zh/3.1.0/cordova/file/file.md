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

# <a href="fileobj/fileobj.html">檔</a>

> 一個 API，用於讀取、 寫入和導航基於[w3c <a href="fileobj/fileobj.html">檔</a> api][1]的<a href="fileobj/fileobj.html">檔</a>案系統層次結構.

 [1]: http://www.w3.org/TR/FileAPI

## 物件

*   <a href="directoryentry/directoryentry.html">枚舉指定工作組或</a>
*   <a href="directoryreader/directoryreader.html">DirectoryReader</a>
*   <a href="fileobj/fileobj.html">檔</a>
*   <a href="fileentry/fileentry.html">FileEntry</a>
*   <a href="fileerror/fileerror.html">FileError</a>
*   <a href="filereader/filereader.html">FileReader</a>
*   <a href="fileobj/fileobj.html">檔</a>案系統
*   <a href="fileobj/fileobj.html">檔</a>案傳輸
*   <a href="filetransfererror/filetransfererror.html">FileTransferError</a>
*   <a href="fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>
*   <a href="fileuploadresult/fileuploadresult.html">FileUploadResult</a>
*   <a href="filewriter/filewriter.html">FileWriter</a>
*   <a href="flags/flags.html">標誌</a>
*   <a href="localfilesystem/localfilesystem.html">場合</a>
*   <a href="metadata/metadata.html">中繼資料</a>

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了<a href="../device/device.html">設備</a>級 Api。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

要使用的<a href="fileobj/fileobj.html">檔</a>案傳輸外掛程式必須單獨添加的。

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   （在 iOS`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。