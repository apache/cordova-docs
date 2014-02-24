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

# CaptureErrorCB

> 미디어 캡처 작업 중에 오류가 발생 하면 호출 됩니다.

    function captureError( CaptureError error ) { ... };
    

## 설명

이 함수는 오류가 발생 하면 실행 하려고 할 때 미디어 캡처 작업을 실행 합니다. 실패 시나리오 등 캡처 응용 프로그램이, 캡처 작업이 이미 일어나 고 있다, 또는 어떤 미디어 파일 캡처 전에 사용자가 작업을 취소 합니다.

이 함수를 함께 실행 하는 `CaptureError` 는 적절 한 오류를 포함 하는 개체`code`.

## 빠른 예제

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };