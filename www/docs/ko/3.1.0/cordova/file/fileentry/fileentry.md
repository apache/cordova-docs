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

# FileEntry

[W3C 디렉터리 및 시스템][1] 사양에 정의 된 <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>에 <a href="../fileobj/fileobj.html">파일</a>을 나타냅니다.

 [1]: http://www.w3.org/TR/file-system-api/

## 속성

*   **isFile**: 항상 `true` . *(부울)*

*   **isDirectory**: 항상 `false` . *(부울)*

*   **이름**:의 이름에서 `FileEntry` , 그것에 지도 하는 경로 제외 하 고. *(DOMString)*

*   **fullPath**: 하 루트에서의 전체 절대 경로 `FileEntry` . *(DOMString)*

**참고:** 다음 특성 W3C 사양에 정의 되어 있지만 지원 *되지* 않습니다.

*   **<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>**: <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>에는 `FileEntry` 거주. *(<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>)*

## 메서드

*   **getMetadata**: <a href="../fileobj/fileobj.html">파일</a>에 대 한 <a href="../metadata/metadata.html">메타 데이터</a>를 조회 합니다.

*   **setMetadata**: <a href="../fileobj/fileobj.html">파일</a>에 <a href="../metadata/metadata.html">메타 데이터</a>를 설정 합니다.

*   **moveTo**: <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>에서 다른 <a href="../../geolocation/Position/position.html">위치</a>로 <a href="../fileobj/fileobj.html">파일</a>을 이동 합니다.

*   **copyTo**: <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>에서 다른 <a href="../../geolocation/Position/position.html">위치</a>로 <a href="../fileobj/fileobj.html">파일</a>을 복사 합니다.

*   **toURL**: <a href="../fileobj/fileobj.html">파일</a>을 찾는 데 사용할 수 있는 URL을 반환 합니다.

*   **제거**: <a href="../fileobj/fileobj.html">파일</a>을 삭제 합니다.

*   **getParent**: 상위 디렉토리를 조회 합니다.

*   **createWriter**: 생성 한 `<a href="../filewriter/filewriter.html">FileWriter</a>` 개체를 <a href="../fileobj/fileobj.html">파일</a>에 쓰는 데 사용할 수 있습니다.

*   **<a href="../fileobj/fileobj.html">파일</a>**: 생성 된 `File` <a href="../fileobj/fileobj.html">파일</a> 속성을 포함 하는 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## getMetadata

<a href="../fileobj/fileobj.html">파일</a>에 대 한 <a href="../metadata/metadata.html">메타 데이터</a>를 조회.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **successCallback**: 콜백 전달 되는 `Metadata` 개체. *(기능)*

*   **errorCallback**: 콜백 검색할 때 오류가 발생 하면 실행 되는 `Metadata` . 로 호출을 `<a href="../fileerror/fileerror.html">FileError</a>` 개체. *(기능)*

**빠른 예제**

    success(metadata) 함수 {console.log ("마지막 수정:" + metadata.modificationTime);}
    
    함수 fail(error) {alert(error.code);}
    
    / /이 항목 entry.getMetadata (성공, 실패)에 대 한 <a href="../metadata/metadata.html">메타 데이터</a> 개체를 요청
    

## setMetadata

설정된 <a href="../fileobj/fileobj.html">파일</a>에 <a href="../metadata/metadata.html">메타 데이터</a>입니다.

**현재 iOS 에서만 작동합니다.**

*   이 <a href="../fileobj/fileobj.html">파일</a>의 확장된 특성을 설정 합니다.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **successCallback**: <a href="../metadata/metadata.html">메타 데이터</a>를 설정 하는 콜백. *(기능)*

*   **errorCallback**: 콜백을 <a href="../metadata/metadata.html">메타 데이터</a>를 성공적으로 설정 하지. *(기능)*

*   **metadataObject**: <a href="../metadata/metadata.html">메타 데이터</a>의 키와 값을 포함 하는 개체. *(개체)*

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

*   단지는 `com.apple.MobileBackup` 확장된 특성을 지원 합니다. 값을 설정 `1` iCloud에 백업에서 <a href="../fileobj/fileobj.html">파일</a>을 방지 하기 위해. 값을 설정 `` 를 다시 iCloud에 백업 해야 할 <a href="../fileobj/fileobj.html">파일</a>을 사용 합니다.

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
    
        window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>에서 다른 <a href="../../geolocation/Position/position.html">위치</a>로 <a href="../fileobj/fileobj.html">파일</a>을 이동 합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   현재 하나에서 다른 이름을 제공 하지 않습니다; 하는 경우 부모에 <a href="../fileobj/fileobj.html">파일</a> 이동

*   디렉터리;에 의해 점유 된 경로에 <a href="../fileobj/fileobj.html">파일</a> 이동

또한, 기존 <a href="../fileobj/fileobj.html">파일</a> 위에 <a href="../fileobj/fileobj.html">파일</a>을 이동 하려고 삭제 하 고 해당 <a href="../fileobj/fileobj.html">파일</a>을 대체 합니다.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **부모**: 부모 디렉터리를 <a href="../fileobj/fileobj.html">파일</a>을 이동 합니다. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **새 이름**: <a href="../fileobj/fileobj.html">파일</a>의 새 이름. 현재 이름이 지정 되지 않은 경우 기본값입니다. *(DOMString)*

*   **successCallback**: 새로운 <a href="../fileobj/fileobj.html">파일</a>의 전달 된 콜백 `FileEntry` 개체. *(기능)*

*   **errorCallback**: <a href="../fileobj/fileobj.html">파일</a>을 이동 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `<a href="../fileerror/fileerror.html">FileError</a>` 개체. *(기능)*

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
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>에서 새 <a href="../../geolocation/Position/position.html">위치</a>로 <a href="../fileobj/fileobj.html">파일</a>을 복사 합니다. 오류 결과 애플 리 케이 션을 시도 하는 경우:

*   현재 하나에서 다른 이름이 제공 되지 않은 경우 부모에 <a href="../fileobj/fileobj.html">파일</a>을 복사 합니다.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **부모**: 부모 디렉터리를 <a href="../fileobj/fileobj.html">파일</a>을 복사 합니다. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **새 이름**: <a href="../fileobj/fileobj.html">파일</a>의 새 이름. 현재 이름이 지정 되지 않은 경우 기본값입니다. *(DOMString)*

*   **successCallback**: 새로운 <a href="../fileobj/fileobj.html">파일</a>의 전달 된 콜백 `FileEntry` 개체. *(기능)*

*   **errorCallback**: <a href="../fileobj/fileobj.html">파일</a>을 복사 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `<a href="../fileerror/fileerror.html">FileError</a>` 개체. *(기능)*

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
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## toURL

<a href="../fileobj/fileobj.html">파일</a>을 사용할 수 있는 URL을 반환 합니다.

**빠른 예제**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## 제거

<a href="../fileobj/fileobj.html">파일</a>을 삭제합니다.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **successCallback**: <a href="../fileobj/fileobj.html">파일</a> 삭제 후 실행 되는 콜백. 매개 <a href="../../../plugin_ref/spec.html">변수</a> 없이 호출 됩니다. *(기능)*

*   **errorCallback**: <a href="../fileobj/fileobj.html">파일</a>을 삭제 하려고 할 때 오류가 발생 하면 실행 되는 콜백. 로 호출을 `<a href="../fileerror/fileerror.html">FileError</a>` 개체. *(기능)*

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

부모를 보면 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` <a href="../fileobj/fileobj.html">파일</a>이 포함 된.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **successCallback**: <a href="../fileobj/fileobj.html">파일</a>의 부모에 전달 된 콜백 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` . *(기능)*

*   **errorCallback**: 부모를 검색 하려고 할 때 오류가 발생 하면 실행 되는 콜백 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` . 로 호출을 `<a href="../fileerror/fileerror.html">FileError</a>` 개체. *(기능)*

**빠른 예제**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>
    entry.getParent(success, fail);
    

## createWriter

생성 한 `<a href="../filewriter/filewriter.html">FileWriter</a>` 개체가 나타내는 <a href="../fileobj/fileobj.html">파일</a>은`FileEntry`.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **successCallback**: 콜백 전달 되는 `<a href="../filewriter/filewriter.html">FileWriter</a>` 개체. *(기능)*

*   **errorCallback**:는 <a href="../filewriter/filewriter.html">FileWriter</a> 만들려고 하는 동안 오류가 발생 하는 경우 실행 되는 콜백. 로 호출을 `<a href="../fileerror/fileerror.html">FileError</a>` 개체. *(기능)*

**빠른 예제**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a <a href="../filewriter/filewriter.html">FileWriter</a> to write to the file
    entry.createWriter(success, fail);
    

## <a href="../fileobj/fileobj.html">파일</a>

반환 된 `File` <a href="../fileobj/fileobj.html">파일</a>의 현재 상태를 나타내는 개체가 `FileEntry` 나타냅니다.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **successCallback**: 콜백 전달 되는 `File` 개체. *(기능)*

*   **errorCallback**: 콜백 만들 때 오류가 발생 하면 실행 되는 `File` <a href="../fileobj/fileobj.html">파일</a>이 더 이상 존재 하는 때 같은 개체. 로 호출을 `<a href="../fileerror/fileerror.html">FileError</a>` 개체. *(기능)*

**빠른 예제**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);