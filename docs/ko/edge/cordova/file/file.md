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

> 읽기, 쓰기 및 [W3C 파일 API][1] 를 기반 파일 시스템 계층 구조를 탐색 하기 위한 API.

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

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
    

파일 전송 플러그인을 사용 하 여 추가 해야 합니다을 별도로.

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml) < 기능 이름 = "파일" >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.FileUtils =" / >< / 기능 >< 기능 이름 "FileTransfer" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.FileTransfer =" / >< / 기능 > (app/AndroidManifest.xml)에서 < 사용 권한 android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml) < 기능 이름 = "파일" >< param 이름을 "블랙베리 패키지" value="org.apache.cordova.file.FileManager =" / >< / 기능 >< 기능 이름 = "FileTransfer" >< param 이름을 "블랙베리 패키지" value="org.apache.cordova.http.FileTransfer =" / >< / 기능 > (www/config.xml)에서 < id="blackberry.io.file 기능" 필요한 = "true" 버전 "1.0.0.0" = / >< id="blackberry.utils 기능" 필요 = "true" 버전 "1.0.0.0" = / >< id="blackberry.io.dir 기능" 필요한 = "true" 버전 "1.0.0.0" = / >< 변죽: 권한 >< 변죽: 허가 > access_shared < / 테두리: 허가 >< / 테두리: 권한 >
        

*   (iOS`config.xml`)
    
        < 기능 이름 = "파일" >< param 이름을 = "ios 패키지" 값 = "CDVFile" / >< / 기능 >< 기능 이름 "FileTransfer" = >< param 이름을 = "ios 패키지" 값 = "CDVFileTransfer" / >< / 기능 >
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. 플랫폼 지원에 대 한 참조.