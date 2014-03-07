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

Connection
==========

> `connection` オブジェクトを通じて、携帯電話ネットワーク及び wifi 接続情報にアクセス出来ます。

このオブジェクトは、 `navigator.network` インターフェース以下からアクセスされます。

プロパティー
----------

- connection.type

定数
---------

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.NONE

WP7 に関する注意点
---------

- __type:__
Windows Phone Emulator は常に navigator.network.connection.type を Connection.UNKNOWN と返します。

iOS に関する注意点
---------

- __type:__
iOS は、デバイスが携帯電話ネットワークに接続しているかどうかだけを返すことができ、タイプは返すことが出来ません。
そのため、もし接続している場合は常に CELL_2G として返されます。

Bada に関する注意点
----------
- Bada は、デバイスが Wifi または CELL_2G 携帯電話ネットワークに接続されているかどうかのみを返します (タイプは返されません) 。
