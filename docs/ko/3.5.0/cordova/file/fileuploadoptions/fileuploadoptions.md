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

# FileUploadOptions

A `FileUploadOptions` 에 개체를 전달할 수는 `FileTransfer` 개체의 `upload()` 업로드 스크립트에 추가 매개 변수를 지정 하는 방법.

## 속성

*   **fileKey**: form 요소의 이름. 기본값은 `file` . (DOMString)

*   **파일 이름**: 파일 이름을 서버에 파일을 저장할 때 사용 합니다. 기본값은 `image.jpg` . (DOMString)

*   **mimeType**: 업로드 데이터의 mime 형식을. 기본값은 `image/jpeg` . (DOMString)

*   **params**: HTTP 요청에 전달할 선택적 키/값 쌍의 집합. (개체)

*   **chunkedMode**: 청크 스트리밍 모드에서 데이터 업로드를 합니다. 기본값은 `true` . (부울)

*   **헤더**: 헤더 이름/헤더 값의 지도. 배열을 사용 하 여 하나 이상의 값을 지정 합니다. (개체)

## 설명

A `FileUploadOptions` 에 개체를 전달할 수는 `FileTransfer` 개체의 `upload()` 업로드 스크립트에 추가 매개 변수를 지정 하는 방법.

## WP7 특질

*   **chunkedMode:**: WP7에 무시 됩니다.