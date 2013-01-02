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

LocalFileSystem
===============

このオブジェクトは、ファイルシステムのルートの取得方法を提供します。

メソッド
----------

- __requestFileSystem:__ ファイルシステムをリクエストします _(Function)_
- __resolveLocalFileSystemURI:__ ローカル URI を使用して DirectoryEntry または FileEntry を取得します _(Function)_

定数
---------

- `LocalFileSystem.PERSISTENT`: アプリやユーザーの許可なしに、ユーザエージェントのみでは削除されないような永続的なストレージを表します
- `LocalFileSystem.TEMPORARY`: 永続性が保証されていないようなストレージを表します

詳細
-------

`LocalFileSystem` オブジェクトのメソッドは __window__ オブジェクトに定義されています。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

Request File Systemの使用例
---------------------------------

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // ファイルシステムをリクエスト
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

Resolve Local File System URIの使用例
-------------------------------------------

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }

    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);

詳細な使用例
------------


    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
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

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>Local File System</p>
      </body>
    </html>
