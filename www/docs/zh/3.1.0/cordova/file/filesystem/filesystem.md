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

# <a href="../fileobj/fileobj.html">檔</a>案系統

此物件表示一個<a href="../fileobj/fileobj.html">檔</a>案系統。

## 屬性

*   **名稱**： <a href="../fileobj/fileobj.html">檔</a>案系統的名稱。*() DOMString*

*   **根**： <a href="../fileobj/fileobj.html">檔</a>案系統的根目錄。*() DirectoryEntry*

## 詳細資訊

`FileSystem`物件表示<a href="../fileobj/fileobj.html">檔</a>案系統的資訊。 <a href="../fileobj/fileobj.html">檔</a>案系統的名稱的公開的<a href="../fileobj/fileobj.html">檔</a>案系統的清單中是唯一的。 根屬性包含 `DirectoryEntry` 物件，表示<a href="../fileobj/fileobj.html">檔</a>案系統的根目錄。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## <a href="../fileobj/fileobj.html">檔</a>案系統快速示例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## 完整的示例

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
            window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
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