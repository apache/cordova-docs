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

# ContactError

A `ContactError` 개체에 전달 되는 `contactError` 콜백 때 오류가 발생 합니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

## 상수

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## 설명

`ContactError`개체를 통해 사용자에 게 반환 되는 `contactError` 콜백 함수는 오류가 발생 한 경우.