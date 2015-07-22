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