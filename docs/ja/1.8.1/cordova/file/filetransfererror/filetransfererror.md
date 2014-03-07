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

FileTransferError
========

`FileTransferError` オブジェクトは、エラーが発生したときエラーコールバック関数に渡されます。

プロパティー
----------

- __code__ 事前に定義された以下のエラーコードのうちの1つを表します (int)
- __source__ ソースの URI を表します (string)
- __target__ ターゲットの URI を表します (string)
- __http_status__ HTTP のステータスコードを表します。この属性は、レスポンスコードが HTTP コネクションから返されたときのみ有効です (int)

定数
---------

- `FileTransferError.FILE_NOT_FOUND_ERR`
- `FileTransferError.INVALID_URL_ERR`
- `FileTransferError.CONNECTION_ERR`

概要
-----------

`FileTransferError` オブジェクトは、ファイルアップロード時にエラーが発生したときエラーコールバック関数に渡されます。
