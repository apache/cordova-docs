---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

<a href="../Position/position.html">Position</a>Error
========

`<a href="../Position/position.html">Position</a>Error` オブジェクトは、エラーが発生したときに `<a href="../parameters/geolocationError.html">geolocationError</a>` コールバック関数に渡されます。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します
- __message:__ エラーの内容を表すエラーメッセージを表します

定数
---------

- `<a href="../Position/position.html">Position</a>Error.PERMISSION_DENIED`
- `<a href="../Position/position.html">Position</a>Error.POSITION_UNAVAILABLE`
- `<a href="../Position/position.html">Position</a>Error.TIMEOUT`

概要
-----------

`<a href="../Position/position.html">Position</a>Error` オブジェクトは、位置情報取得に関するエラーが発生したときに `<a href="../parameters/geolocationError.html">geolocationError</a>` コールバック関数を通してユーザーに返されます。

### `<a href="../Position/position.html">Position</a>Error.PERMISSION_DENIED`

ユーザーがアプリケーションに対して、位置情報の取得を許可しなかった場合に返されます。これはプラットフォームに依存します。

### `<a href="../Position/position.html">Position</a>Error.POSITION_UNAVAILABLE`

デバイスが位置を取得できなかった場合に返されます。大抵、これはデバイスがネットワークに接続されていない、および／または衛生情報が取得出来なかったことを意味します。

### `<a href="../Position/position.html">Position</a>Error.TIMEOUT`

デバイスが、 `<a href="../parameters/geolocation.options.html">geolocationOptions</a>` の `timeout` プロパティーによって指定された時間内に位置が取得できなかった場合に返されます。 `geolocation.watch<a href="../Position/position.html">Position</a>` と一緒に使用するとき、このエラーは `<a href="../parameters/geolocationError.html">geolocationError</a>` コールバックの中で毎 `timeout` ミリ秒後呼ばれる可能性があります。
