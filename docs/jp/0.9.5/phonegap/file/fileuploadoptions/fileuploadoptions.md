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

FileUploadOptions
========

`FileUploadOptions` オブジェクトはuploadメソッドを実行する際、追加のパラメータを設定する場合に使用します。

プロパティ
----------

- __fileKey:__ フォーム要素の名前を指定します。デフォルトはfileです (DOMString)
- __fileName:__ サーバーに保存する際のファイル名を指定します。デフォルトはimage.jpgです。 (DOMString)
- __mimeType:__ データのMIME形式を指定します。デフォルトはimage/jpegです (DOMString)
- __params:__ その他のHTTPリクエストで送信されるパラメータを指定します (Object)


詳細
-----------

`FileUploadOptions` オブジェクトはuploadメソッドを実行する際、追加のパラメータを設定する場合に使用します。
