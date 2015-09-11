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

Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>
===============

このオブジェクトは、ファイルシステムのルートの取得方法を提供します。

メソッド
----------

- __request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>:__ ファイルシステムをリクエストします _(Function)_
- __resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI:__ ローカル URI を使用して <a href="../directoryentry/directoryentry.html">DirectoryEntry</a> または <a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a> を取得します _(Function)_

定数
---------

- `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT`: アプリやユーザーの許可なしに、ユーザエージェントのみでは削除されないような永続的なストレージを表します
- `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.TEMPORARY`: 永続性が保証されていないようなストレージを表します

詳細
-------

`Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>` オブジェクトのメソッドは __window__ オブジェクトに定義されています。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

Request <a href="../fileobj/fileobj.html">File</a> Systemの<a href="../../storage/storage.opendatabase.html">使用例</a>
---------------------------------

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // ファイルシステムをリクエスト
    window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, onError);

Resolve Local <a href="../fileobj/fileobj.html">File</a> System URIの<a href="../../storage/storage.opendatabase.html">使用例</a>
-------------------------------------------

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }

    window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onSuccess, onError);

詳細な<a href="../../storage/storage.opendatabase.html">使用例</a>
------------


    <!DOCTYPE html>
    <html>
      <head>
        <title>Local <a href="../fileobj/fileobj.html">File</a> System の<a href="../../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success, fail);
            window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onResolveSuccess, fail);
        }

        function on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success(fileSystem) {
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
        <h1><a href="../../storage/storage.opendatabase.html">使用例</a></h1>
        <p>Local <a href="../fileobj/fileobj.html">File</a> System</p>
      </body>
    </html>
