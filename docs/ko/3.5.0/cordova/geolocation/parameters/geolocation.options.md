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

# geolocationOptions

선택적 매개 변수는 위치 정보 검색을 사용자 지정 하려면`Position`.

    {maximumAge: 3000, 타임 아웃: 5000, enableHighAccuracy: true};
    

## 옵션

*   **enableHighAccuracy**: 힌트는 응용 프로그램에 필요한 최상의 결과 제공 합니다. 기본적으로 장치를 검색 하려고 한 `Position` 네트워크 기반 방법을 사용 하 여. 이 속성을 설정 `true` 위성 위치 등 보다 정확한 방법을 사용 하 여 프레임 워크. *(부울)*

*   **시간 제한**: 최대 시간의 길이 (밀리초) 호출에서 전달할 수 있는 `geolocation.getCurrentPosition` 또는 `geolocation.watchPosition` 해당까지 `geolocationSuccess` 콜백 실행. 경우는 `geolocationSuccess` 콜백이이 시간 내에서 호출 되지 않습니다는 `geolocationError` 콜백 전달 되는 `PositionError.TIMEOUT` 오류 코드. (함께 사용 하는 경우 `geolocation.watchPosition` , `geolocationError` 콜백 간격에서 호출 될 수 있는 모든 `timeout` 밀리초!) *(수)*

*   **maximumAge**: 밀리초 단위로 지정 된 시간 보다 더 큰 되는 캐시 위치를 수락 합니다. *(수)*

## 안 드 로이드 단점

하지 않는 한 안 드 로이드 2.x 에뮬레이터 위치 결과 반환 하지 않습니다는 `enableHighAccuracy` 옵션을 설정`true`.