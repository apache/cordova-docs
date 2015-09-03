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


# 파일

이 개체에는 단일 파일의 특성이 포함 됩니다.

## 속성

*   **이름**: 파일의 이름. *(DOMString)*

*   **fullPath**: 파일 이름을 포함 한 파일의 전체 경로. *(DOMString)*

*   **유형**: 파일의 mime 형식을. *(DOMString)*

*   **lastModifiedDate**: 파일이 수정 된 마지막 시간. *(날짜)*

*   **크기**: 바이트에서 파일의 크기. *(긴)*

## 메서드

*   **슬라이스**: 읽을 수 파일의 단지 부분을 선택 합니다.

## 세부 정보

`File`개체는 단일 파일의 특성을 포함 합니다. 인스턴스를 얻을 수는 `File` 를 호출 하 여 개체를 `FileEntry` 개체의 `file()` 메서드.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 슬라이스

반환 된 새 `File` 개체를 `FileReader` 파일의 지정 된 부분만 반환 합니다. 음수 값에 대 한 `start` 또는 `end` 파일의 끝에서 측정 됩니다. 인덱스는 현재 슬라이스를 기준으로 배치 됩니다. (아래 전체 예제를 참조 하십시오.)

**매개 변수:**

*   **시작**:을 읽고, 포함 된 첫 번째 바이트의 인덱스.

*   **끝**: 읽기 마지막 한 후 바이트의 인덱스.

**빠른 예제**

    var slicedFile = file.slice(10, 30);
    

**전체 예제**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**지원 되는 플랫폼**

*   안 드 로이드
*   iOS


# FileReader

`FileReader`파일에 대 한 기본 액세스를 허용 합니다.

## 속성

*   **readyState**: 독자의 세 가지 가능한 상태, 어느 쪽이 든 `EMPTY` , `LOADING` 또는`DONE`.

*   **결과**: 읽은 파일의 내용을. *(DOMString)*

*   **오류**: 오류를 포함 하는 개체. *(FileError)*

*   **onloadstart**: 읽기 시작할 때 라고. *(기능)*

*   **onload**: 읽기 성공적으로 완료 될 때 호출 합니다. *(기능)*

*   **onabort**: 읽기를 중단 될 때 호출 합니다. 예를 들어, 호출 하 여는 `abort()` 방법. *(기능)*

*   **onerror**: 읽기 실패 때 호출 합니다. *(기능)*

*   **onloadend**: (중 성공 또는 실패) 요청이 완료 될 때 호출 합니다. *(기능)*

**참고:** 다음 porperty는 지원 되지 않습니다.

*   **onprogress**: 진행의 관점에서 보고, 파일을 읽는 동안 전화 `progress.loaded` / `progress.total` . *(기능)*

## 메서드

*   **중지**: 파일 읽기 중단.

*   **readAsDataURL**: 파일 및 base64 인코딩된 데이터의 URL로 데이터를 반환 합니다.

*   **readAsText**: 읽기 텍스트 파일.

*   **readAsBinaryString**: 이진 파일을 이진 문자열을 반환 합니다.

*   **readAsArrayBuffer**: 파일을 읽기는`ArrayBuffer`.

## 세부 정보

`FileReader`개체 디바이스의 파일 시스템에서 파일을 읽을 수 있는 방법을 제공 합니다. 텍스트 또는 base64 데이터 인코딩 문자열 파일을 읽을 수 있습니다. 수신 하는 이벤트 리스너는 `loadstart` , `progress` , `load` , `loadend` , `error` , 및 `abort` 이벤트.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## readAsDataURL

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

*   **인코딩**: 인코딩 파일의 콘텐츠를 사용 하 여 인코딩. 기본값은 u t f 8입니다.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 중단

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS 단점

*   **인코딩** 매개 변수는 지원 되지 않습니다, 및 효과에 항상 UTF8 인코딩.

## readAsBinaryString

현재 iOS와 안 드 로이드만 지원 합니다.

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

현재 iOS와 안 드 로이드만 지원 합니다.

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);


# FileWriter

개체를 만들고 파일에 데이터를 쓸 수 있습니다.

## 속성

*   **readyState**: 세 가지 가능한 상태 중 하나, 어느 `INIT` , `WRITING` , 또는`DONE`.

*   **파일 이름**: 쓸 파일의 이름. *(DOMString)*

*   **길이**: 쓰여질 파일의 길이. *(긴)*

*   **위치**: 파일 포인터의 현재 위치. *(긴)*

*   **오류**: 오류를 포함 하는 개체. *(FileError)*

*   **onwritestart**: 쓰기 시작할 때 호출 합니다. *(기능)*

*   **onwrite**: 요청이 성공적으로 완료 될 때 호출 합니다. *(기능)*

*   **onabort**: 쓰기를 중단 될 때 호출 합니다. 예를 들어, abort() 메서드를 호출 하 여 합니다. *(기능)*

*   **onerror**: 쓰기 실패 때 호출 합니다. *(기능)*

*   **onwriteend**: (중 성공 또는 실패) 요청이 완료 될 때 호출 합니다. *(기능)*

다음 속성은 지원 *되지 않습니다* :

*   **onprogress**: 진행의 관점에서 보고 파일을 쓰는 동안 전화 `progress.loaded` / `progress.total` . *(기능)*

## 메서드

*   **중지**: 파일 쓰기를 중단 합니다.

*   **추구**: 지정 된 바이트를 파일 포인터를 이동 합니다.

*   **자르기**: 파일 지정된 된 길이에 단축.

*   **쓰기**: 파일에 데이터를 씁니다.

## 세부 정보

`FileWriter`개체 장치 파일 시스템에 u t F-8로 인코딩된 파일을 작성 하는 방법을 제공 합니다. 응용 프로그램에 응답 `writestart` , `progress` , `write` , `writeend` , `error` , 및 `abort` 이벤트.

각 `FileWriter` 는 데이터 쓸 수 있습니다 여러 번 단일 파일에 해당 합니다. `FileWriter`파일의 유지 관리 `position` 및 `length` 특성을 애플 리 케이 션을 허용 하는 `seek` 및 `write` 파일에 아무 데도. 기본적으로는 `FileWriter` 기존 데이터를 덮어쓰면서 파일의 시작 부분을 씁니다. 선택적 설정 `append` 을 부울 `true` 에 `FileWriter` 의 생성자는 파일의 끝에 쓰기.

텍스트 데이터는 아래에 나열 된 모든 플랫폼에서 지원 됩니다. 텍스트 파일에 기록 하기 전에 u t F-8로 인코딩됩니다. 어떤 플랫폼도는 ArrayBuffer 또는 Blob로 전달 될 수 있는 이진 데이터를 지원 합니다.

## 지원 되는 플랫폼

텍스트 및 바이너리 지원:

*   안 드 로이드
*   iOS

텍스트 전용 지원:

*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Windows Phone 7과 8
*   윈도우 8

## 간단한 예를 추구합니다

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 예를 들어 자르기

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 보기 작성

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 이진 쓰기 간단한 예

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 예를 들어 추가

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 예를 들어 중단

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>


# 파일 시스템

이 개체는 파일 시스템을 나타냅니다.

## 속성

*   **이름**: 파일 시스템의 이름. *(DOMString)*

*   **루트**: 파일 시스템의 루트 디렉토리. *(DirectoryEntry)*

## 세부 정보

`FileSystem`개체는 파일 시스템에 대 한 정보를 나타냅니다. 파일 시스템의 이름은 노출된 파일 시스템 목록에서 고유 합니다. 루트 속성에 포함 되어 있는 `DirectoryEntry` 파일 시스템의 루트 디렉터리를 나타내는 개체입니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 파일 시스템 빠른 예제

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>


# FileEntry

[W3C 디렉터리 및 시스템][1] 사양에 정의 된 파일 시스템에 파일을 나타냅니다.

 [1]: http://www.w3.org/TR/file-system-api/

## 속성

*   **isFile**: 항상 `true` . *(부울)*

*   **isDirectory**: 항상 `false` . *(부울)*

*   **이름**:의 이름에서 `FileEntry` , 그것에 지도 하는 경로 제외 하 고. *(DOMString)*

*   **fullPath**: 하 루트에서의 전체 절대 경로 `FileEntry` . *(DOMString)*

**참고:** 다음 특성 W3C 사양에 정의 되어 있지만 지원 *되지* 않습니다.

*   **파일 시스템**: 파일 시스템에는 `FileEntry` 거주. *(파일 시스템)*

## 메서드

*   **getMetadata**: 파일에 대 한 메타 데이터를 조회 합니다.

*   **setMetadata**: 파일에 메타 데이터를 설정 합니다.

*   **moveTo**: 파일 시스템에서 다른 위치로 파일을 이동 합니다.

*   **copyTo**: 파일 시스템에서 다른 위치로 파일을 복사 합니다.

*   **toURL**: 파일을 찾는 데 사용할 수 있는 URL을 반환 합니다.

*   **제거**: 파일을 삭제 합니다.

*   **getParent**: 상위 디렉토리를 조회 합니다.

*   **createWriter**: 생성 한 `FileWriter` 개체를 파일에 쓰는 데 사용할 수 있습니다.

*   **파일**: 생성 된 `File` 파일 속성을 포함 하는 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## getMetadata

파일에 대 한 메타 데이터를 조회.

**매개 변수:**

*   **successCallback**: 콜백 전달 되는 `Metadata` 개체. *(기능)*

*   **errorCallback**: 콜백 검색할 때 오류가 발생 하면 실행 되는 `Metadata` . 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    success(metadata) 함수 {console.log ("마지막 수정:" + metadata.modificationTime);}
    
    함수 fail(error) {alert(error.code);}
    
    / /이 항목 entry.getMetadata (성공, 실패)에 대 한 메타 데이터 개체를 요청
    

## setMetadata

설정된 파일에 메타 데이터입니다.

**현재 iOS 에서만 작동합니다.**

*   이 파일의 확장된 특성을 설정 합니다.

**매개 변수:**

*   **successCallback**: 메타 데이터를 설정 하는 콜백. *(기능)*

*   **errorCallback**: 콜백을 메타 데이터를 성공적으로 설정 하지. *(기능)*

*   **metadataObject**: 메타 데이터의 키와 값을 포함 하는 개체. *(개체)*

**빠른 예제**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS 특질**

*   단지는 `com.apple.MobileBackup` 확장된 특성을 지원 합니다. 값을 설정 `1` iCloud에 백업에서 파일을 방지 하기 위해. 값을 설정 `` 를 다시 iCloud에 백업 해야 할 파일을 사용 합니다.

**빠른 예제**

    function setFileMetadata(localFileSystem, filePath, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetFileWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetFileFail = function() {
            console.log("error getting file")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getFile(filePath, {create: true, exclusive: false}, onGetFileWin, onGetFileFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

파일 시스템에서 다른 위치로 파일을 이동 합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   현재 하나에서 다른 이름을 제공 하지 않습니다; 하는 경우 부모에 파일 이동

*   디렉터리;에 의해 점유 된 경로에 파일 이동

또한, 기존 파일 위에 파일을 이동 하려고 삭제 하 고 해당 파일을 대체 합니다.

**매개 변수:**

*   **부모**: 부모 디렉터리를 파일을 이동 합니다. *(DirectoryEntry)*

*   **새 이름**: 파일의 새 이름. 현재 이름이 지정 되지 않은 경우 기본값입니다. *(DOMString)*

*   **successCallback**: 새로운 파일의 전달 된 콜백 `FileEntry` 개체. *(기능)*

*   **errorCallback**: 파일을 이동 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

파일 시스템에서 새 위치로 파일을 복사 합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   현재 하나에서 다른 이름이 제공 되지 않은 경우 부모에 파일을 복사 합니다.

**매개 변수:**

*   **부모**: 부모 디렉터리를 파일을 복사 합니다. *(DirectoryEntry)*

*   **새 이름**: 파일의 새 이름. 현재 이름이 지정 되지 않은 경우 기본값입니다. *(DOMString)*

*   **successCallback**: 새로운 파일의 전달 된 콜백 `FileEntry` 개체. *(기능)*

*   **errorCallback**: 파일을 복사 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## toURL

파일을 사용할 수 있는 URL을 반환 합니다.

**빠른 예제**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## 제거

파일을 삭제합니다.

**매개 변수:**

*   **successCallback**: 파일 삭제 후 실행 되는 콜백. 매개 변수 없이 호출 됩니다. *(기능)*

*   **errorCallback**: 파일을 삭제 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

부모를 보면 `DirectoryEntry` 파일이 포함 된.

**매개 변수:**

*   **successCallback**: 파일의 부모에 전달 된 콜백 `DirectoryEntry` . *(기능)*

*   **errorCallback**: 부모를 검색 하려고 할 때 오류가 발생 하면 실행 되는 콜백 `DirectoryEntry` . 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

생성 한 `FileWriter` 개체가 나타내는 파일은`FileEntry`.

**매개 변수:**

*   **successCallback**: 콜백 전달 되는 `FileWriter` 개체. *(기능)*

*   **errorCallback**:는 FileWriter 만들려고 하는 동안 오류가 발생 하는 경우 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## 파일

반환 된 `File` 파일의 현재 상태를 나타내는 개체가 `FileEntry` 나타냅니다.

**매개 변수:**

*   **successCallback**: 콜백 전달 되는 `File` 개체. *(기능)*

*   **errorCallback**: 콜백 만들 때 오류가 발생 하면 실행 되는 `File` 파일이 더 이상 존재 하는 때 같은 개체. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);


# DirectoryEntry

이 개체 [W3C 디렉터리 및 시스템][1] 사양에 의해 정의 된 파일 시스템 디렉터리를 나타냅니다.

 [1]: http://www.w3.org/TR/file-system-api/

## 속성

*   **isFile**: 항상 `false` . *(부울)*

*   **isDirectory**: 항상 `true` . *(부울)*

*   **이름**:의 이름에서 `DirectoryEntry` , 그것에 지도 하는 경로 제외 하 고. *(DOMString)*

*   **fullPath**: 하 루트에서의 전체 절대 경로 `DirectoryEntry` . *(DOMString)*

**참고:** 다음 특성 W3C 사양에 정의 되어 있지만 지원 *되지* 않습니다.

*   **파일 시스템**: 파일 시스템에는 `DirectoryEntry` 거주. *(파일 시스템)*

## 메서드

에 다음 메서드를 호출할 수 있는 `DirectoryEntry` 개체:

*   **getMetadata**: 디렉토리에 대 한 메타 데이터를 조회 합니다.

*   **setMetadata**: 디렉터리에 메타 데이터를 설정 합니다.

*   **moveTo**: 파일 시스템에서 다른 위치로 디렉토리를 이동 합니다.

*   **copyTo**: 디렉터리 파일 시스템에 다른 위치에 복사 합니다.

*   **toURL**: 디렉터리를 찾을 수 있도록 URL을 반환 합니다.

*   **제거**: 디렉토리를 삭제 합니다. 디렉토리는 비어 있어야 합니다.

*   **getParent**: 상위 디렉토리를 조회 합니다.

*   **createReader**: 새로운 만들고 `DirectoryReader` 디렉터리에서 항목을 읽을 수 있는.

*   **getDirectory**: 만들기 또는 디렉터리를 조회 합니다.

*   **getFile**: 만들거나 파일을 조회 합니다.

*   **removeRecursively**: 디렉터리와 해당 내용을 모두 삭제 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## getMetadata

디렉터리에 대 한 메타 데이터를 조회 합니다.

**매개 변수:**

*   **successCallback**: 함께 실행할 콜백 함수를 `Metadata` 개체. *(기능)*

*   **errorCallback**: 검색할 때 오류가 발생 하는 경우 실행할 콜백 함수는 `Metadata` . 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    success(metadata) 함수 {console.log ("마지막 수정:" + metadata.modificationTime);}
    
    함수 fail(error) {alert(error.code);}
    
    / /이 항목 entry.getMetadata (성공, 실패)에 대 한 메타 데이터 개체를 요청
    

## setMetadata

디렉토리의 확장 된 특성 또는 메타 데이터를 설정합니다. *현재 iOS 에서만 작동 합니다.*

**매개 변수:**

*   **successCallback**: 메타 데이터가 성공적으로 설정 될 때 실행 되는 콜백. *(기능)*

*   **errorCallback**: 메타 데이터 설정에 실패 했을 때 실행 되는 콜백. *(기능)*

*   **metadataObject**: 메타 데이터의 키와 값을 포함 하는 개체. *(개체)*

**빠른 예제**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS 특질**

*   단지는 `com.apple.MobileBackup` 확장된 특성을 지원 합니다. 값을 설정 `1` iCloud에 백업에서 디렉터리를 방지 하기 위해. 값을 설정 `` 를 iCloud에 백업 디렉터리를 다시 설정 합니다.

**빠른 예제**

    function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetDirectoryWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetDirectoryFail = function() {
            console.log("error getting dir")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getDirectory(subFolder, {create: true, exclusive: false}, onGetDirectoryWin, onGetDirectoryFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);
    

## moveTo

파일 시스템에서 다른 위치로 디렉토리를 이동 합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   어떤 깊이에서 자체 내부 또는 모든 하위 디렉터리를 이동 합니다.

*   그것의 현재 디렉터리에서 다른 이름을 제공 하지 않으면 상위로 디렉터리를 이동 합니다.

*   파일에 의해 점령 경로에 디렉토리를 이동 합니다.

*   비어 있지 않은 디렉터리에 의해 점령 경로에 디렉토리를 이동 합니다.

삭제 하 고 해당 디렉토리를 교체 하려고 기존 빈 디렉터리 위에 디렉터리를 이동 합니다.

**매개 변수:**

*   **부모**: 부모 디렉터리를 디렉터리로 이동 합니다. *(DirectoryEntry)*

*   **새 이름**: 디렉터리의 새 이름. 현재 이름이 지정 되지 않은 경우 기본값입니다. *(DOMString)*

*   **successCallback**: 콜백 함께 실행 되는 `DirectoryEntry` 새 디렉터리에 대 한 개체. *(기능)*

*   **errorCallback**: 디렉터리를 이동 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the directory to a new directory and rename it
        entry.moveTo(parentEntry, newName, success, fail);
    }
    

## copyTo

디렉터리 파일 시스템에 다른 위치에 복사 합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   어떤 깊이에서 자체 내부 디렉터리에 복사 합니다.

*   그것의 현재 디렉터리에서 다른 이름을 제공 하지 않으면 상위로 디렉터리를 복사 합니다.

디렉터리 복사본 항상 재귀, 있으며, 디렉터리의 모든 내용을 복사 합니다.

**매개 변수:**

*   **부모**: 부모 디렉터리 대상 디렉터리를 복사 합니다. *(DirectoryEntry)*

*   **새 이름**: 디렉터리의 새 이름. 현재 이름이 지정 되지 않은 경우 기본값입니다. *(DOMString)*

*   **successCallback**: 콜백 함께 실행 되는 `DirectoryEntry` 새 디렉터리에 대 한 개체. *(기능)*

*   **errorCallback**: 기본 디렉터리에 복사 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the directory to a new directory and rename it
        entry.copyTo(parentEntry, newName, success, fail);
    }
    

## toURL

디렉터리를 찾는 데 사용할 수 있는 URL을 반환 합니다.

**빠른 예제**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## 제거

디렉터리를 삭제합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   비어 있지 않은 디렉터리를 삭제 합니다.

*   파일 시스템의 루트 디렉터리를 삭제 합니다.

**매개 변수:**

*   **successCallback**: 디렉터리 삭제 후 실행 되는 콜백. 매개 변수 없이 호출 됩니다. *(기능)*

*   **errorCallback**: 디렉터리를 삭제 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    함수 success(entry) {console.log ("제거 성공");}
    
    fail(error) 함수 {경고 (' 디렉터리 제거 오류: ' + error.code);}
    
    / / 제거이 디렉토리 entry.remove (성공, 실패);
    

## getParent

부모를 조회 `DirectoryEntry` 디렉터리를 포함 합니다.

**매개 변수:**

*   **successCallback**: 디렉토리의 부모 전달 된 콜백 `DirectoryEntry` . *(기능)*

*   **errorCallback**: 부모를 검색 하려고 할 때 오류가 발생 하면 실행 되는 콜백 `DirectoryEntry` . 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

디렉터리에서 항목을 읽을 새 DirectoryReader을 만듭니다.

**빠른 예제**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

생성 하거나 기존 디렉터리를 조회 합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   아직 존재 하지 않습니다 즉각적인 부모 디렉터리를 만듭니다.

**매개 변수:**

*   **경로**: 조회를 만든 디렉터리 경로를 합니다. 절대 경로 또는 상대 경로에서 `DirectoryEntry` . *(DOMString)*

*   **옵션**: 디렉터리 존재 하지 않는 경우 만들 수 있는지 여부를 지정 하는 옵션. *(플래그)*

*   **successCallback**: 콜백 함께 실행 되는 `DirectoryEntry` 개체. *(기능)*

*   **errorCallback**: 만들기 또는 디렉터리를 조회할 때 오류가 발생 하는 경우 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    success(dirEntry) 함수 {console.log ("디렉터리 이름:" + dirEntry.name);}
    
    fail(error) 함수 {경고 ("를 새 디렉터리를 만들 수 없습니다:" + error.code);}
    
    / / 기존 디렉터리를 검색 하거나 entry.getDirectory을 이미 존재 하지 않는 경우 만들 ("newDir", {만들기: 사실, 독점: false}, 성공, 실패);
    

## getFile

만들거나 파일을 찾습니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   아직 존재 하지 않습니다 즉각적인 부모 파일을 만듭니다.

**매개 변수:**

*   **경로**: 조회 하 여 만든 파일의 경로를. 절대 경로 또는 상대 경로에서 `DirectoryEntry` . *(DOMString)*

*   **옵션**: 존재 하지 않는 경우 파일 생성 여부를 지정 하는 옵션. *(플래그)*

*   **successCallback**: 콜백 전달 되는 `FileEntry` 개체. *(기능)*

*   **errorCallback**: 만들거나 파일을 찾고 때 오류가 발생 하는 경우 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    success(fileEntry) 함수 {console.log ("파일 이름:" + fileEntry.name);}
    
    fail(error) 함수 {경고 ("파일을 검색 하지 못했습니다:" + error.code);}
    
    / / 기존 파일을 검색 하거나 entry.getFile 존재 하지 않는 경우 만들 ("newFile.txt", {만들기: 사실, 독점: false}, 성공, 실패);
    

## removeRecursively

디렉터리 및 해당 내용을 모두 삭제합니다. (예: 제거할 수 없는 파일이 들어 있는 디렉터리를 삭제 하려고) 오류가 발생 한 경우 일부 디렉터리의 내용을 삭제할 수 있습니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   파일 시스템의 루트 디렉터리를 삭제 합니다.

**매개 변수:**

*   **successCallback**: 콜백 후 실행 되는 `DirectoryEntry` 삭제 되었습니다. 매개 변수 없이 호출 됩니다. *(기능)*

*   **errorCallback**: 콜백 삭제 하려고 할 때 오류가 발생 하면 실행 되는 `DirectoryEntry` . 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## 블랙베리 단점

실패 하는 `ControlledAccessException` 는 다음과 같은 경우:

*   응용 프로그램 응용 프로그램의 이전 설치에서 만든 디렉터리에 액세스 하려고 시도 합니다.

> 해결 방법: 임시 디렉터리 수동으로, 또는 다시 설치 하기 전에 응용 프로그램에 의해 청소 됩니다 확인 하십시오.

*   만약 장치가 USB로 연결 되어 있습니다.

> 해결 방법: 장치에서 USB 케이블을 분리 하 고 다시 실행 합니다.


# DirectoryReader

[W3C 디렉터리 및 시스템][1] 사양에 정의 된 파일 및 디렉토리 내에서 디렉토리를 나열 하는 개체입니다.

 [1]: http://www.w3.org/TR/file-system-api/

## 메서드

*   **readEntries**: 디렉터리에서 항목을 읽고.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## readEntries

이 디렉터리 항목을 읽으십시오.

**매개 변수:**

*   **successCallback**: 배열의 전달 된 콜백 `FileEntry` 및 `DirectoryEntry` 개체. *(기능)*

*   **errorCallback**: 디렉터리 목록을 검색할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `FileError` 개체. *(기능)*

**빠른 예제**

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }
    
    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }
    
    // Get a directory reader
    var directoryReader = dirEntry.createReader();
    
    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);


# FileTransfer

`FileTransfer`개체를 사용 하면 업로드 또는 서버에서 파일을 다운로드 합니다.

## 속성

*   **onprogress**:로 불리는 `ProgressEvent` 새로운 양의 데이터를 전송 하는 때마다. *(기능)*

## 메서드

*   **업로드**: 파일을 서버에 보냅니다.

*   **다운로드**: 서버에서 파일을 다운로드 합니다.

*   **중단**: 진행 중인 전송 중단.

## 세부 정보

`FileTransfer`개체를 HTTP 다중 파트 POST 요청을 사용 하 여 원격 서버에 파일을 업로드 하는 방법을 제공 합니다. HTTP 및 HTTPS 프로토콜이 지원 됩니다. 선택적 매개 변수를 전달 하 여 지정할 수 있습니다 한 `FileUploadOptions` 개체는 `upload()` 방법. 성공적으로 업로드에 대 한 `FileUploadResult` 개체 성공 콜백에 전달 됩니다. 오류가 발생 하는 경우는 `FileTransferError` 개체는 오류를 전달 합니다. 그것도 가능 (iOS와 안 드 로이드)에 원격 서버에서 파일을 다운로드 하 여 장치에 저장 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 업로드

**매개 변수:**

*   **filePath**: 장치에서 파일의 전체 경로.

*   **서버**: 인코딩 파일 수신 서버의 URL`encodeURI()`.

*   **successCallback**: 콜백 전달 되는 `Metadata` 개체. *(기능)*

*   **errorCallback**: 콜백 검색에 오류가 발생 하면 실행 되는 `Metadata` . 로 호출을 `FileTransferError` 개체. *(기능)*

*   **옵션**: 파일 이름 및 mimetype 선택적 매개 변수.

*   **trustAllHosts**: 선택적 매개 변수는 기본적으로 `false` . 만약 설정 `true` , 그것은 모든 보안 인증서를 허용 합니다. 이 안 드 로이드 자체 서명 된 보안 인증서를 거부 하기 때문에 유용 합니다. 프로덕션 환경에서 사용 권장 되지 않습니다. 안 드 로이드와 iOS에서 지원. *(부울)*

**빠른 예제**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**전체 예제**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**설정 업로드 헤더**

안 드 로이드와 iOS에서 지원

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**안 드 로이드 단점**

설정에서 `chunkedMode` 옵션을 `false` Nginx 서버에 업로드 하는 문제를 방지 하려면.

## 다운로드

**매개 변수:**

*   **소스**: URL로 인코딩된 파일, 다운로드 서버`encodeURI()`.

*   **대상**: 장치에서 파일의 전체 경로.

*   **successCallback**: 콜백 전달 되는 `FileEntry` 개체. *(기능)*

*   **errorCallback**: 콜백 검색할 때 오류가 발생 하면 실행 되는 `Metadata` . 로 호출을 `FileTransferError` 개체. *(기능)*

*   **trustAllHosts**: 선택적 매개 변수는 기본적으로 `false` . 만약 설정 `true` 후 모든 보안 인증서를 받아들일 것입니다. 안 드 로이드 자체 서명 된 보안 인증서를 거부로 유용 합니다. 프로덕션 환경에서 사용 권장 되지 않습니다. 안 드 로이드와 iOS에서 지원. *(부울)*

*   **옵션**: 선택적 매개 변수를 현재 지 원하는 머리글만 (예: 인증 (기본 인증), 등).

**빠른 예제**

    // !! FilePath 장치 var fileTransfer에 유효한 경로 가정 합니다 = 새로운 FileTransfer();
    var uri = encodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (uri, filePath, function(entry) {console.log ("다운로드 완료:" + entry.fullPath);
        }, {console.log ("다운로드 오류 소스" + error.source); function(error)
            console.log ("다운로드 오류 대상" + error.target);
            console.log ("업로드 오류 코드" + error.code);
        }, false 이면 {헤더: {"권한 부여": "기본 dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}});
    

## 중단

진행 중인 전송을 중단합니다. Onerror 콜백 FileTransferError.ABORT_ERR의 오류 코드는 FileTransferError 개체를 전달 합니다.

**지원 되는 플랫폼**

*   안 드 로이드
*   iOS

**빠른 예제**

    // !! 가정 장치 var 승리에 텍스트 파일을 유효한 URI를 포함 하는 변수 fileURI function(r) = {console.log ("호출할 수 없습니다.");}
    
    실패 하는 var function(error) = {/ / error.code FileTransferError.ABORT_ERR 경고 = = ("오류가 발생 했습니다: 코드 =" + error.code);
        console.log ("업로드 오류 소스" + error.source);
        console.log ("업로드 오류 대상" + error.target);}
    
    var 옵션 = 새로운 FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = 새로운 FileTransfer();
    ft.upload (fileURI encodeURI ("http://some.server.com/upload.php"), 승리, 실패, 옵션);
    ft.abort();
    

## onprogress

새로운 양의 데이터 전송 하는 때마다는 ProgressEvent 함께 호출 됩니다.

**지원 되는 플랫폼**

*   안 드 로이드
*   iOS

**예를 들어**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**단점** -둘 다 안 드 로이드, iOS는 lengthComputable는 `false` gzip 인코딩을 사용 하는 다운로드 합니다.


# FileUploadOptions

A `FileUploadOptions` 에 개체를 전달할 수는 `FileTransfer` 개체의 `upload()` 업로드 스크립트에 추가 매개 변수를 지정 하는 방법.

## 속성

*   **fileKey**: form 요소의 이름. 기본값은 `file` . (DOMString)

*   **파일 이름**: 파일 이름을 서버에 파일을 저장할 때 사용 합니다. 기본값은 `image.jpg` . (DOMString)

*   **mimeType**: 업로드 데이터의 mime 형식을. 기본값은 `image/jpeg` . (DOMString)

*   **params**: HTTP 요청에 전달할 선택적 키/값 쌍의 집합. (개체)

*   **chunkedMode**: 청크 스트리밍 모드에서 데이터 업로드를 합니다. 기본값은 `true` . (부울)

*   **헤더**: 헤더 이름/헤더 값의 지도. 배열을 사용 하 여 하나 이상의 값을 지정 합니다. (개체)

## 설명

A `FileUploadOptions` 에 개체를 전달할 수는 `FileTransfer` 개체의 `upload()` 업로드 스크립트에 추가 매개 변수를 지정 하는 방법.

## WP7 특질

*   **chunkedMode:**: WP7에 무시 됩니다.


# FileUploadResult

A `FileUploadResult` 개체의 성공 콜백에 전달 되는 `FileTransfer` 개체의 `upload()` 메서드.

## 속성

*   **bytesSent**: 업로드의 일부로 서버에 보낸 바이트 수. (긴)

*   **responseCode**: 서버에서 반환 된 HTTP 응답 코드. (긴)

*   **응답**: 서버에서 반환 되는 HTTP 응답. (DOMString)

## 설명

`FileUploadResult`개체의 성공 콜백을 통해 반환 되는 `FileTransfer` 개체의 `upload()` 메서드.

## iOS 단점

*   지원 하지 않는 `responseCode` 또는`bytesSent`.


# 플래그

인수를 제공에 `DirectoryEntry` 개체의 `getFile()` 및 `getDirectory()` 를 조회 또는 파일 및 디렉터리를 각각 만드는 방법.

## 속성

*   **만들기**: 그 파일이 나 디렉토리 생성 해야 이미 존재 하지 않는 경우를 나타냅니다. *(부울)*

*   **독점**:는 자체적으로 하지만 함께 사용 하면 효과가 없습니다 `create` 파일 또는 디렉터리 만들기 대상 경로가 이미 존재 하는 경우 실패의 원인. *(부울)*

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    / / 데이터 디렉터리 존재 하지 않는 경우 그것을 만들기.
    dataDir = fileSystem.root.getDirectory ("데이터", {만들기: true});
    
    / / 존재 하지 않는 경우에 잠금 파일을 만듭니다.
    lockFile = dataDir.getFile ("lockfile.txt", {만들기: 사실, 독점: true});


# LocalFileSystem

이 개체는 루트 파일 시스템을 얻을 수 있는 방법을 제공 합니다.

## 메서드

*   **requestFileSystem**: 파일 시스템을 요청 합니다. *(기능)*

*   **resolveLocalFileSystemURI**: 검색 된 `DirectoryEntry` 또는 `FileEntry` 로컬 URI를 사용 하 여. *(기능)*

## 상수

*   `LocalFileSystem.PERSISTENT`: 응용 프로그램 또는 사용자의 허락 없이 사용자 에이전트에 의해 제거할 수 없습니다 저장을 위해 사용 합니다.

*   `LocalFileSystem.TEMPORARY`: 지 속성 보장과 함께 저장을 위해 사용 합니다.

## 세부 정보

`LocalFileSystem`메서드가 개체에 정의 된 `window` 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 파일 시스템 빠른 예를 들어 요청

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## 로컬 파일 시스템 URI 빠른 예를 들어 해결

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
        }
    
        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> 응용 프로그램 데이터를 저장 하는 파일 시스템을 요청 합니다.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **창**: 글로벌 window 개체에 대 한 참조
*   **형식**: 로컬 파일 시스템 형식, LocalFileSystem 상수 참조
*   **크기**: 바이트에서 저장 공간이 얼마나 필요 기대 하는 응용 프로그램을 나타냅니다
*   **successCallback**: 파일 시스템 개체와 호출
*   **errorCallback**: 오류가 발생 하면 검색 파일 시스템 호출

## 파일 시스템 빠른 예를 들어 요청

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);


# 메타 데이터

파일이 나 디렉터리의 상태에 대 한 정보를 제공 하는 인터페이스.

## 속성

*   **modificationTime**: 때 파일 또는 디렉터리가 마지막으로 수정 된 시간. *(날짜)*

## 세부 정보

`Metadata`개체는 파일이 나 디렉터리의 상태에 대 한 정보를 나타냅니다. 전화는 `DirectoryEntry` 또는 `FileEntry` 개체의 `getMetadata()` 메서드 결과 `Metadata` 인스턴스.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

A `FileError` 파일 API 메서드 중 하나에 오류가 발생 하면 개체를 설정 합니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

## 상수

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## 설명

`FileError`개체는 어떤 파일 API 오류 콜백을 제공 하는 유일한 매개 변수입니다. 오류의 유형을 확인 하려면 비교 그것의 `code` 속성을 위의 목록 중.


# FileTransferError

A `FileTransferError` 오류가 발생 하면 오류 콜백 개체 전달 됩니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된. (수)

*   **소스**: 소스 URI. (문자열)

*   **대상**: 대상 URI. (문자열)

*   **http_status**: HTTP 상태 코드. 이 특성은 응답 코드를 HTTP 연결에서 수신에 사용할 수 있습니다. (수)

## 상수

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## 설명

`FileTransferError`업로드 하거나 파일을 다운로드 하는 경우 오류가 발생 하면 오류 콜백 개체 전달 됩니다.
