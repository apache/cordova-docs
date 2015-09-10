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

# <a href="../fileobj/fileobj.html">ファイル</a> ・ システム

このオブジェクトは、<a href="../fileobj/fileobj.html">ファイル</a> ・ システムを表します。

## プロパティ

*   **名前**: <a href="../fileobj/fileobj.html">ファイル</a> システムの名前。*（，）*

*   **ルート**: <a href="../fileobj/fileobj.html">ファイル</a> システムのルート ディレクトリ。*(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

## 詳細

`FileSystem`オブジェクトは、<a href="../fileobj/fileobj.html">ファイル</a> システムに関する情報を表します。 <a href="../fileobj/fileobj.html">ファイル</a> システムの名前は公開されている<a href="../fileobj/fileobj.html">ファイル</a> ・ システムのリストの間でユニークです。 Root プロパティが含まれています、 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` <a href="../fileobj/fileobj.html">ファイル</a>システムのルート ディレクトリを表すオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## <a href="../fileobj/fileobj.html">ファイル</a> システムの簡単な例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, 0, onSuccess, null);
    

## 完全な例

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