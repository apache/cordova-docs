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

A `CompassHeading` 개체에 반환 되는 `compassSuccess` 콜백 함수.

## 속성

*   **magneticHeading**: 단일 시점에서 0-359.99에서도 제목. *(수)*

*   **trueHeading**: 단일 시점에서 0-359.99에서에서 지리적 북극을 기준으로 향하고. 음수 값을 나타냅니다 진정한 표제를 확인할 수 없습니다. *(수)*

*   **headingAccuracy**: 보고 된 머리글 사이의 진정한 제목도 편차. *(수)*

*   **타임 스탬프**:이 제목 결정 하는 시간. *(밀리초)*

## 설명

`CompassHeading`개체를 반환 되는 `compassSuccess` 콜백 함수.

## 안 드 로이드 단점

*   `trueHeading`지원 되지 않습니다 하지만 같은 값으로 보고`magneticHeading`

*   `headingAccuracy`항상 0 사이 차이가 있기 때문에 `magneticHeading` 와`trueHeading`.

## iOS 단점

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   IOS 4 기기 및 디바이스의 현재 방향 절대 위치로 참조 하지 머리글 요소 위에 애플 리 케이 션을 위해 지 원하는 그 방향.