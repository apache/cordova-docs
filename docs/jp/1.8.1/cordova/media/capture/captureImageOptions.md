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

CaptureImageOptions
===================

> 画像キャプチャーのオプションをカプセル化します。

プロパティー
----------

- __limit:__ 一つのキャプチャー操作で撮影できる画像の最大値を表します。値は1以上の必要があります (デフォルトは1です) 。
- __mode:__ 選択された画像のモードを表します。値は `capture.supportedImageModes` の中の一つである必要があります。

使用例
-------------

    // キャプチャー操作時の取得画像の最大値を3に制限
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

Android に関する注意点
--------------

- __mode__ パラメーターはサポートされていません。画像のサイズとフォーマットはプログラム的に変更することはできません。しかし、画像サイズはユーザーによって変更することは可能です。画像は JPEG フォーマット (image/jpeg) で保存されます。

BlackBerry WebWorks に関する注意点
--------------------------

- __mode__ パラメーターはサポートされていません。画像のサイズとフォーマットはプログラム的に変更することはできません。しかし、画像サイズはユーザーによって変更することは可能です。画像は JPEG フォーマット (image/jpeg) で保存されます。

iOS に関する注意点
----------

- __limit__ パラメーターはサポートされていません。1つのキャプチャー操作につき1つの画像が撮影されます。
- __mode__ パラメーターはサポートされていません。画像のサイズとフォーマットはプログラム的に変更することはできません。画像は JPEG フォーマット (image/jpeg) で保存されます。
