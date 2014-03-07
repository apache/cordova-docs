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

`FileUploadOptions` オブジェクトは upload メソッドを実行する際に FileTransfer オブジェクトに渡して、追加のパラメーターとして設定する場合に使用します。

プロパティー
----------

- __fileKey:__ フォーム要素の名前を指定します。 デフォルトは "file" です (DOMString)
- __fileName:__ サーバーに保存する際のファイル名を指定します。 デフォルトは "image.jpg" です (DOMString)
- __mimeType:__ データの MIME 形式を指定します。 デフォルトは "image/jpeg" です (DOMString)
- __params:__ その他の HTTP リクエストで送信されるパラメーターを指定します (Object)
- __chunkedMode:__ アップロードにチャンクドストリーミングモードを使用するかを指定します。 デフォルトは "true" です (Boolean)
- __headers:__ ヘッダー名 => ヘッダー値の Map を指定します。ヘッダーへ複数の値を設定するには、配列を使用します (Object)


概要
-----------

`FileUploadOptions` オブジェクトは upload メソッドを実行する際に FileTransfer オブジェクトに渡して、追加のパラメーターとして設定する場合に使用します。

WP7 に関する注意点
---------

- __chunkedMode:__
    WP7 ではこの値は無視されます。
