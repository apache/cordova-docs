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

# CaptureVideoOptions

> 비디오 캡처 구성 옵션을 캡슐화합니다.

## 속성

*   **제한**: 디바이스의 사용자는 단일 캡처 작업에서 캡처할 수 있는 비디오 클립의 최대 수. 값 1 (기본값: 1) 보다 크거나 같아야 합니다.

*   **기간**: 비디오 클립의 최대 기간 초.

## 빠른 예제

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## 블랙베리 WebWorks 단점

*   **기간** 매개 변수가 지원 되지 않으므로 녹음 길이 프로그래밍 방식으로 제한 될 수 없습니다.

## iOS 단점

*   **제한** 매개 변수는 지원 되지 않습니다. 비디오 호출 당 기록 됩니다.