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

# CaptureError

> 실패 한 미디어 캡처 작업에서 발생 하는 오류 코드를 캡슐화 합니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

## 상수

*   `CaptureError.CAPTURE_INTERNAL_ERR`: 카메라 또는 마이크 캡처 이미지 또는 소리 하지 못했습니다.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: 카메라 또는 오디오 캡처 응용 프로그램은 현재 또 다른 캡처 요청을 제공 하고있다.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: API 잘못 된 사용 (예를 들어, 값 `limit` 보다 작은 하나입니다).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: 사용자는 아무것도 캡처하기 전에 카메라 또는 오디오 캡처 응용 프로그램을 종료 합니다.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: 요청 된 캡처 작업이 지원 되지 않습니다.