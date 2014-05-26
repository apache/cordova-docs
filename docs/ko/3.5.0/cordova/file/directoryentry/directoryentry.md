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