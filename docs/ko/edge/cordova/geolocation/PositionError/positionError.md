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

A `PositionError` 개체에 전달 되는 `geolocationError` 콜백 때 오류가 발생 합니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

*   **메시지**: 발생 한 오류 세부 정보를 설명 하는 오류 메시지.

## 상수

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 설명

`PositionError`개체에 전달 되는 `geolocationError` 콜백 함수 geolocation 오류가 발생 한 경우. 그것은 기능 다음 오류 코드:

*   `PositionError.PERMISSION_DENIED`: 사용자 위치 정보를 검색 애플 리 케이 션을 허용 하지 않는 경우 반환 됩니다. 이 플랫폼에 따라 달라 집니다.

*   `PositionError.POSITION_UNAVAILABLE`: 장치 위치를 검색할 수 없을 때 반환 합니다. 일반적으로,이 장치는 네트워크에 연결 되어 있지 않은 또는 위성 수정 프로그램을 얻을 수 없습니다 의미 합니다.

*   `PositionError.TIMEOUT`: 장치에 지정 된 시간 내에서 위치를 검색할 수 없는 경우 반환 되는 `timeout` 에 포함 된 `geolocationOptions` . 함께 사용 될 때 `geolocation.watchPosition` ,이 오류를 반복적으로 전달 될 수는 `geolocationError` 콜백 매 `timeout` 밀리초.