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

<a href="../fileobj/fileobj.html">File</a>System
==========

このオブジェクトはファイルシステムを表します。

プロパティー
----------

- __name:__ ファイルシステムの名前を表します _(DOMString)_
- __root:__ ファイルシステムのルートディレクトリを表します _(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)_

詳細
-------

`<a href="../fileobj/fileobj.html">File</a>System` オブジェクトはファイルシステムの情報を表します。ファイルシステムの名前は既にあるファイルシステムに対して一意になります。 root プロパティーはファイルシステムのルートディレクトリを表す `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` オブジェクトを保持します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

<a href="../fileobj/fileobj.html">File</a> System の<a href="../../storage/storage.opendatabase.html">使用例</a>
-------------------------

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }

    // ファイルシステムをリクエスト
    window.request<a href="../fileobj/fileobj.html">File</a>System(<a href="../localfilesystem/localfilesystem.html">Local<a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, null);

詳細な<a href="../../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../fileobj/fileobj.html">File</a> System の<a href="../../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            window.request<a href="../fileobj/fileobj.html">File</a>System(<a href="../localfilesystem/localfilesystem.html">Local<a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, on<a href="../fileobj/fileobj.html">File</a>SystemSuccess, fail);
        }

        function on<a href="../fileobj/fileobj.html">File</a>SystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1><a href="../../storage/database/database.html">Example</a></h1>
        <p><a href="../fileobj/fileobj.html">File</a> System</p>
      </body>
    </html>
