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

# LocalFileSystem

이 개체는 루트 <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>을 얻을 수 있는 방법을 제공 합니다.

## 메서드

*   **requestFileSystem**: <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>을 요청 합니다. *(기능)*

*   **resolveLocalFileSystemURI**: 검색 된 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` 또는 `<a href="../fileentry/fileentry.html">FileEntry</a>` 로컬 URI를 사용 하 여. *(기능)*

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

## <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a> 빠른 예를 들어 요청

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## 로컬 <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a> URI 빠른 예를 들어 해결

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> 응용 프로그램 데이터를 저장 하는 <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>을 요청 합니다.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **창**: 글로벌 window 개체에 대 한 참조
*   **형식**: 로컬 <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a> 형식, LocalFileSystem 상수 참조
*   **크기**: 바이트에서 저장 공간이 얼마나 필요 기대 하는 응용 프로그램을 나타냅니다
*   **successCallback**: <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a> 개체와 호출
*   **errorCallback**: 오류가 발생 하면 검색 <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a> 호출

## <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a> 빠른 예를 들어 요청

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);