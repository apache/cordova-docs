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

# FileTransferError

A `FileTransferError` 오류가 발생 하면 오류 콜백 개체 전달 됩니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된. (수)

*   **소스**: 소스 URI. (문자열)

*   **대상**: 대상 URI. (문자열)

*   **http_status**: HTTP 상태 코드. 이 특성은 응답 코드를 HTTP 연결에서 수신에 사용할 수 있습니다. (수)

## 상수

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## 설명

`FileTransferError`업로드 하거나 파일을 다운로드 하는 경우 오류가 발생 하면 오류 콜백 개체 전달 됩니다.