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

MediaError
==========

`MediaError` オブジェクトはエラーが発生時に `mediaError` コールバック関数に渡されます。

プロパティ
----------

- __code:__ 下記のリストの中のあらかじめ定義されたエラーコードが格納されます。
- __message:__ エラーの詳細を説明するエラーメッセージです。

コンスタント
---------

- `MediaError.MEDIA_ERR_ABORTED`
- `MediaError.MEDIA_ERR_NETWORK`
- `MediaError.MEDIA_ERR_DECODE`
- `MediaError.MEDIA_ERR_NONE_SUPPORTED`


概要
-----------

 `MediaError` オブジェクトはエラーが発生した際 `mediaError` コールバック関数を通してユーザーに返されます。
