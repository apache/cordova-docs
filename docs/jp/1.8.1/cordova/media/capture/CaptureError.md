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

CaptureError
============

> 失敗したメディアキャプチャー操作のエラーコードをカプセル化します。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します

定数
---------

- CaptureError.`CAPTURE_INTERNAL_ERR`: カメラまたはマイクが画像または音のキャプチャーに失敗した場合。
- CaptureError.`CAPTURE_APPLICATION_BUSY`: カメラアプリまたはオーディオ録音アプリが現在他のキャプチャーリクエストを扱っている場合。
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: API の使用方法が不正であった場合 (例: limit パラメーターの値が1未満である) 。
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: ユーザーが何もキャプチャーせずにカメラアプリやオーディオ録音アプリを終了した場合。
- CaptureError.`CAPTURE_NOT_SUPPORTED`: キャプチャー操作のリクエストがサポートされていない場合。
