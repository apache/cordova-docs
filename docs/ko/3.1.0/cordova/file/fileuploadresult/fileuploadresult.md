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

# FileUploadResult

A `FileUploadResult` 개체의 성공 콜백에 전달 되는 `FileTransfer` 개체의 `upload()` 메서드.

## 속성

*   **bytesSent**: 업로드의 일부로 서버에 보낸 바이트 수. (긴)

*   **responseCode**: 서버에서 반환 된 HTTP 응답 코드. (긴)

*   **응답**: 서버에서 반환 되는 HTTP 응답. (DOMString)

## 설명

`FileUploadResult`개체의 성공 콜백을 통해 반환 되는 `FileTransfer` 개체의 `upload()` 메서드.

## iOS 단점

*   지원 하지 않는 `responseCode` 또는`bytesSent`.