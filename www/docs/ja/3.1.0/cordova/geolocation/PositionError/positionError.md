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

# PositionError

A `PositionError` オブジェクトに渡されます、 `<a href="../parameters/geolocationError.html">geolocationError</a>` コールバック エラーが発生します。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。

*   **メッセージ**: 発生したエラーの詳細を説明するエラー メッセージ。

## 定数

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 説明

`PositionError`オブジェクトに渡されます、 `<a href="../parameters/geolocationError.html">geolocationError</a>` 地理<a href="../Position/position.html">位置</a>情報と、エラーが発生した場合のコールバック関数。

### `PositionError.PERMISSION_DENIED`

ユーザーの<a href="../Position/position.html">位置</a>情報を取得するアプリケーションを許可していない場合に返されます。これはプラットフォームに依存します。

### `PositionError.POSITION_UNAVAILABLE`

<a href="../../device/device.html">デバイス</a>が、<a href="../Position/position.html">位置</a>を取得することができます返されます。一般にこれは、<a href="../../device/device.html">デバイス</a>のネットワーク<a href="../../connection/connection.html">接続</a>や衛星の修正を得ることができません。

### `PositionError.TIMEOUT`

<a href="../../device/device.html">デバイス</a>がで指定された時間内の<a href="../Position/position.html">位置</a>を取得することができるときに返される、 `<a href="../parameters/geolocation.options.html">geolocationOptions</a>` ' `timeout` プロパティ。 使用すると `<a href="../geolocation.watchPosition.html">geolocation.watchPosition</a>` 、このエラーを渡すことができます、 `<a href="../parameters/geolocationError.html">geolocationError</a>` コールバックごと `timeout` (ミリ秒単位)。