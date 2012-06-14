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

Metadata
==========

ファイルやディレクトリの状態を提供します。

プロパティー
----------

- __modificationTime:__ ファイルまたはディレクトリの最終更新日時を表します _(Date)_

詳細
-------

`Metadata` オブジェクトは、ファイルやディレクトリの状態を表します。 `DirectoryEntry` または `FileEntry` の __getMetadata__ メソッドを呼び出すことで、 Metadata オブジェクトが取得できます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

使用例
-------------

    function win(metadata) {
        console.log("最終更新日: " + metadata.modificationTime);
    }

    // このエントリーの Metadata オブジェクトを取得
    entry.getMetadata(win, null);
