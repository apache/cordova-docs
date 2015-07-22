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

# 파일

> 읽기, API 작성 하 고 [w3c 파일 api][1] 기반 파일 시스템 계층 구조 탐색.

 [1]: http://www.w3.org/TR/FileAPI

## 개체

*   DirectoryEntry
*   DirectoryReader
*   파일
*   FileEntry
*   FileError
*   FileReader
*   파일 시스템
*   FileTransfer
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   플래그
*   LocalFileSystem
*   메타 데이터

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

파일 전송 플러그인을 사용 하 여 추가 해야 합니다을 별도로.

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
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   블랙베리 WebWorks
    
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
        

*   (iOS`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.