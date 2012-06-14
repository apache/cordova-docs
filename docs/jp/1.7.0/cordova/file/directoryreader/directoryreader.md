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

DirectoryReader
===============

ディレクトリの中のファイルとディレクトリをリストアップするオブジェクトです。これは [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) の仕様書で定義されています。

メソッド
-------

- __readEntries__: ディレクトリの中のエントリを読み込みます


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

readEntries
-----------

このディレクトリの中のエントリを読み込みます。

__パラメーター:__

- __successCallback__ - FileEntry と DirectoryEntry オブジェクトの配列を渡すコールバック関数を表します _(Function)_
- __errorCallback__ - ディレクトリリストの取得時にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }

    function fail(error) {
        alert("コンテンツのリストアップ中にエラーが発生しました: " + error.code);
    }

    // directory readerの取得
    var directoryReader = dirEntry.createReader();

    // ディレクトリの中のすべてのエントリのリストを取得
    directoryReader.readEntries(success,fail);
