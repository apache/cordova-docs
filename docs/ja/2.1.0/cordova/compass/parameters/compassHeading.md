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

compassHeading
==========

エラーが起きた場合、 `compassSuccess` コールバック関数には `CompassHeading` オブジェクトが返されます。

プロパティー
----------
- __magneticHeading:__ ある瞬間のコンパス方位を磁北を基準に0から359.99の範囲で表します。 _(Number)_
- __trueHeading:__ ある瞬間のコンパス方位を真北を基準に0から359.99の範囲で表します。負の値は、 trueHeading の値が定まっていないことを示しています。 _(Number)_
- __headingAccuracy:__ magneticHeading の値と trueHeading の値との角度の差、偏角を表します。 _(Number)_
- __timestamp:__ コンパス方位を取得した時間を表します。 _(milliseconds)_

概要
-----------

`CompassHeading` オブジェクトは、 `compassSuccess` コールバック関数を通じてユーザーに返されます。

Android に関する注意点
--------------
- trueHeading はサポートされていません。 trueHeading には magneticHeading と同じ値が代入されます。
- このため、 Android では trueHeading と magneticHeading に差が無いので、 headingAccuracy は常に0となります。

iOS に関する注意点
----------

- trueHeading は、位置情報サービスが `navigator.geolocation.watchLocation()` によって稼動している場合にのみ返されます。
- iOS 4より上位のデバイスでは、もしデバイスが横方向などに回転していて、アプリがそれをサポートしていれば、 magneticHeading の値は現在のデバイスの向きに対応して返されます。

