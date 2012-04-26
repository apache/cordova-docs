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

PositionError
========

`PositionError` オブジェクトはエラーが発生した場合に、geolocationError コールバック関数に渡されます。


プロパティ
----------

- __code:__ 下のリストの中のあらかじめ定義されたエラーコードのいずれかが格納されます
- __message:__ エラーの内容を表すエラーメッセージが格納されます

定数
---------

- `PositionError.PERMISSION_DENIED`
- `PositionError.POSITION_UNAVAILABLE`
- `PositionError.TIMEOUT`

概要
-----------

`PositionError` オブジェクトは、geolocationに関するエラーが発生したときに `geolocationError` コールバック関数を通して、ユーザーに返されます。
