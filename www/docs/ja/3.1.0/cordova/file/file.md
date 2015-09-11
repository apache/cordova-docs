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

# <a href="fileobj/fileobj.html">ファイル</a>

> 読んで、API を書くし、 [w3c <a href="fileobj/fileobj.html">ファイル</a> api][1]に基づく<a href="fileobj/fileobj.html">ファイル</a> システム階層の移動.

 [1]: http://www.w3.org/TR/FileAPI

## オブジェクト

*   <a href="directoryentry/directoryentry.html">DirectoryEntry</a>
*   <a href="directoryreader/directoryreader.html">DirectoryReader</a>
*   <a href="fileobj/fileobj.html">ファイル</a>
*   <a href="fileentry/fileentry.html">FileEntry</a>
*   <a href="fileerror/fileerror.html">FileError</a>
*   <a href="filereader/filereader.html">FileReader</a>
*   <a href="filesystem/filesystem.html"><a href="fileobj/fileobj.html">ファイル</a> ・ システム</a>
*   <a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">ファイル</a>転送</a>
*   <a href="filetransfererror/filetransfererror.html">FileTransferError</a>
*   <a href="fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>
*   <a href="fileuploadresult/fileuploadresult.html">FileUploadResult</a>
*   <a href="filewriter/filewriter.html">FileWriter</a>
*   <a href="flags/flags.html">フラグ</a>
*   <a href="localfilesystem/localfilesystem.html">LocalFileSystem</a>
*   <a href="metadata/metadata.html">メタデータ</a>

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*として<a href="../device/device.html">デバイス</a> レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">ファイル</a>転送</a>プラグインを使用するには、を個別に追加する必要があります。

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   ブラックベリー WebWorks
    
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
        

*   iOS （`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の<a href="../../guide/overview/index.html">概要</a>のセクションを参照してください。