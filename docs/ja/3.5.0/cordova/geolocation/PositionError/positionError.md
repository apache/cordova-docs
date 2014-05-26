---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# PositionError

A `PositionError` オブジェクトに渡されます、 `geolocationError` コールバック エラーが発生します。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。

*   **メッセージ**: 発生したエラーの詳細を説明するエラー メッセージ。

## 定数

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 説明

`PositionError`オブジェクトに渡されます、 `geolocationError` 地理位置情報と、エラーが発生した場合のコールバック関数。

### `PositionError.PERMISSION_DENIED`

ユーザーの位置情報を取得するアプリケーションを許可していない場合に返されます。これはプラットフォームに依存します。

### `PositionError.POSITION_UNAVAILABLE`

デバイスが、位置を取得することができます返されます。一般にこれは、デバイスのネットワーク接続や衛星の修正を得ることができません。

### `PositionError.TIMEOUT`

デバイスがで指定された時間内の位置を取得することができるときに返される、 `geolocationOptions` ' `timeout` プロパティ。 使用すると `geolocation.watchPosition` 、このエラーを渡すことができます、 `geolocationError` コールバックごと `timeout` (ミリ秒単位)。