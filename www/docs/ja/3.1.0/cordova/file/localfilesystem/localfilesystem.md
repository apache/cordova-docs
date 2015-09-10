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

このオブジェクトは、ルート ・ <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">ファイル</a> ・ システム</a>を取得する方法を提供します。

## メソッド

*   **requestFileSystem**： <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">ファイル</a> ・ システム</a>を要求します。*(機能)*

*   **resolveLocalFileSystemURI**: 取得、 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` または `<a href="../fileentry/fileentry.html">FileEntry</a>` ローカル URI を使用します。*(機能)*

## 定数

*   `LocalFileSystem.PERSISTENT`: アプリケーションまたはユーザーの許可なくユーザー エージェントによって除去されるべきではない記憶域に対して使用されます。

*   `LocalFileSystem.TEMPORARY`： 永続性の保証なしで<a href="../../storage/storage.html">ストレージ</a>に使用します。

## 詳細

`LocalFileSystem`オブジェクトのメソッドで定義されて、 `window` オブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## <a href="../fileobj/fileobj.html">ファイル</a> システムの簡単な例を要求します。

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## ローカル <a href="../fileobj/fileobj.html">ファイル</a> システム URI のクイック例を解決します。

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## 完全な例

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

> アプリケーション データを格納する<a href="../fileobj/fileobj.html">ファイル</a> システムを要求します。

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **ウィンドウ**: グローバル ウィンドウ オブジェクトへの参照
*   **タイプ**: ローカル <a href="../fileobj/fileobj.html">ファイル</a> システムの種類、LocalFileSystem 定数を参照ください
*   **サイズ**: どのくらいの<a href="../../storage/storage.html">ストレージ</a>容量をバイト、必要とするアプリケーションで想定されることを示します。
*   **successCallback**: <a href="../fileobj/fileobj.html">ファイル</a>システム ・ オブジェクトを使って呼び出されます
*   **解り**: エラー取得する<a href="../fileobj/fileobj.html">ファイル</a>システムが発生した場合に呼び出されます

## <a href="../fileobj/fileobj.html">ファイル</a> システムの簡単な例を要求します。

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);