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

# ファイル

> 読み取り、書き込みおよび[W3C の File API][1]に基づくファイル システム階層をナビゲートする API.

 [1]: http://www.w3.org/TR/FileAPI

## オブジェクト

*   DirectoryEntry
*   DirectoryReader
*   ファイル
*   FileEntry
*   FileError
*   FileReader
*   ファイル ・ システム
*   ファイル転送
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   フラグ
*   LocalFileSystem
*   メタデータ

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
    

ファイル転送プラグインを使用するには、を個別に追加する必要があります。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml) < 機能名 ="File">< param の名前 =「android パッケージ」value="org.apache.cordova.FileUtils"/></機能 >< 機能名 =「ファイル転送」>< param の名前「android パッケージ」value="org.apache.cordova.FileTransfer ="/></機能 > (app/AndroidManifest.xml) で < 使用許可 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml) < 機能名 =「ファイル」>< param の名前「ブラックベリー パッケージ」value="org.apache.cordova.file.FileManager ="/></機能 >< 機能名 =「ファイル転送」>< param の名前「ブラックベリー パッケージ」value="org.apache.cordova.http.FileTransfer ="/></機能 > (www/config.xml) で < id="blackberry.io.file 機能"必要 ="true"のバージョン =「1.0.0.0」/>< id="blackberry.utils 機能"必要 ="true"のバージョン =「1.0.0.0」/>< id="blackberry.io.dir 機能"必要 ="true"のバージョン ="1.0.0.0 という"/>< 縁: アクセス許可 >< 縁: 許可 > access_shared </リム： 許可 ></リム： アクセス許可 >
        

*   iOS （`config.xml`)
    
        < 機能名 =「ファイル」>< param の名前「ios パッケージ」値を = ="CDVFile"/></機能 >< 機能名 =「ファイル転送」>< param の名前「ios パッケージ」値を = ="CDVFileTransfer"/></機能 >
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。