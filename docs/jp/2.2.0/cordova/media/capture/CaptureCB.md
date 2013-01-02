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

CaptureCB
=========

> メディアキャプチャー操作が成功した場合に呼び出されます。

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

概要
-----------

この関数は、キャプチャー操作が正常に完了したときに呼び出されます。これは、メディアファイルがキャプチャーされ、ユーザーがメディアキャプチャーアプリを終了した、もしくはキャプチャーの取得制限値に達したという意味です。

それぞれの MediaFile オブジェクトはキャプチャーされたメディアファイルを表します。

使用例
-------------

    // capture コールバック関数
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // ファイルを使用した処理
        }
    };
