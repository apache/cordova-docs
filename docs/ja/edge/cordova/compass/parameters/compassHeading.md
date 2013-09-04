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

# compassHeading

A `CompassHeading` オブジェクトに返される、 `compassSuccess` コールバック関数。

## プロパティ

*   **magneticHeading**: 1 つの時点で 0 359.99 から角度での見出し。*(数)*

*   **trueHeading**: 度 0 359.99 で地理的な北極を基準にして、1 つの時点での見出し。 負の値は真針路を特定できないことを示します。 *(数)*

*   **headingAccuracy**: 報告された見出しと真方位角度偏差。*(数)*

*   **タイムスタンプ**: この見出しを決定した時。*(ミリ秒)*

## 説明

`CompassHeading`オブジェクトに返される、 `compassSuccess` コールバック関数。

## Android の癖

*   `trueHeading`レポートと同じ値はサポートされていません`magneticHeading`

*   `headingAccuracy`常に 0 の間の違いはありませんので、 `magneticHeading` と`trueHeading`.

## iOS の癖

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   IOS 4 デバイスのため、絶対位置に言及していないデバイスの現在の向きで見出し要因上記のアプリ サポートするその方向。