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

# <a href="fileobj/fileobj.html">파일</a>

> 읽기, API 작성 하 고 [w3c <a href="fileobj/fileobj.html">파일</a> api][1] 기반 <a href="filesystem/filesystem.html"><a href="fileobj/fileobj.html">파일</a> 시스템</a> 계층 구조 탐색.

 [1]: http://www.w3.org/TR/FileAPI

## 개체

*   <a href="directoryentry/directoryentry.html">DirectoryEntry</a>
*   <a href="directoryreader/directoryreader.html">DirectoryReader</a>
*   <a href="fileobj/fileobj.html">파일</a>
*   <a href="fileentry/fileentry.html">FileEntry</a>
*   <a href="fileerror/fileerror.html">FileError</a>
*   <a href="filereader/filereader.html">FileReader</a>
*   <a href="filesystem/filesystem.html"><a href="fileobj/fileobj.html">파일</a> 시스템</a>
*   <a href="filetransfer/filetransfer.html">FileTransfer</a>
*   <a href="filetransfererror/filetransfererror.html"><a href="filetransfer/filetransfer.html">FileTransfer</a>Error</a>
*   <a href="fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>
*   <a href="fileuploadresult/fileuploadresult.html">FileUploadResult</a>
*   <a href="filewriter/filewriter.html">FileWriter</a>
*   <a href="flags/flags.html">플래그</a>
*   <a href="localfilesystem/localfilesystem.html">LocalFileSystem</a>
*   <a href="metadata/metadata.html">메타 데이터</a>

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 <a href="../device/device.html">장치</a> 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 <a href="../../guide/cli/index.html">명령줄 인터페이스</a>를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

<a href="fileobj/fileobj.html">파일</a> 전송 플러그인을 사용 하 여 추가 해야 합니다을 별도로.

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="android-package" value="org.apache.cordova.<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="blackberry-package" value="org.apache.cordova.http.<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   (iOS`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="ios-package" value="CDV<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* <a href="../../guide/overview/index.html">개요</a> 섹션에서을 참조 하십시오.