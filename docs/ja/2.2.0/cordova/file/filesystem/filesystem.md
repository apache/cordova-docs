---
license: Licensed to the Apache Software Foundation (ASF) under one
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

FileSystem
==========

このオブジェクトはファイルシステムを表します。

プロパティー
----------

- __name:__ ファイルシステムの名前を表します _(DOMString)_
- __root:__ ファイルシステムのルートディレクトリを表します _(DirectoryEntry)_

詳細
-------

`FileSystem` オブジェクトはファイルシステムの情報を表します。ファイルシステムの名前は既にあるファイルシステムに対して一意になります。 root プロパティーはファイルシステムのルートディレクトリを表す `DirectoryEntry` オブジェクトを保持します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

File System の使用例
-------------------------

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }

    // ファイルシステムをリクエスト
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }

        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>
