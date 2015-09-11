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

# <a href="../fileobj/fileobj.html">파일</a> 시스템

이 개체는 <a href="../fileobj/fileobj.html">파일</a> 시스템을 나타냅니다.

## 속성

*   **이름**: <a href="../fileobj/fileobj.html">파일</a> 시스템의 이름. *(DOMString)*

*   **루트**: <a href="../fileobj/fileobj.html">파일</a> 시스템의 루트 디렉토리. *(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

## 세부 정보

`FileSystem`개체는 <a href="../fileobj/fileobj.html">파일</a> 시스템에 대 한 정보를 나타냅니다. <a href="../fileobj/fileobj.html">파일</a> 시스템의 이름은 노출된 <a href="../fileobj/fileobj.html">파일</a> 시스템 목록에서 고유 합니다. 루트 속성에 포함 되어 있는 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` <a href="../fileobj/fileobj.html">파일</a> 시스템의 루트 디렉터리를 나타내는 개체입니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## <a href="../fileobj/fileobj.html">파일</a> 시스템 빠른 예제

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, 0, onSuccess, null);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, 0, onFileSystemSuccess, fail);
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
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>File System</p>
      </body>
    </html>