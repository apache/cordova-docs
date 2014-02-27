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

# MediaFileData

> 미디어 파일에 대 한 형식 정보를 캡슐화합니다.

## 속성

*   **코덱**: 실제 형식의 오디오 및 비디오 콘텐츠. (DOMString)

*   **비트 레이트**: 콘텐츠의 평균 비트 전송률. 값은 이미지에 대 한 0. (수)

*   **높이**: 이미지 또는 비디오 픽셀에서의 높이 있습니다. 오디오 클립에 대 한 0입니다. (수)

*   **폭**: 이미지 또는 비디오 픽셀에서의 너비. 오디오 클립에 대 한 0입니다. (수)

*   **기간**: 초에 비디오 또는 사운드 클립의 길이. 값은 이미지에 대 한 0. (수)

## 블랙베리 WebWorks 단점

미디어 파일에 대 한 형식 정보를 제공 하는 없는 API 때문에 `MediaFileData` 에 의해 반환 되는 개체 `MediaFile.getFormatData` 다음과 같은 기본 값을 기능:

*   **코덱**: 안 지원, 및 반환`null`.

*   **비트 레이트**: 안 지원, 및 0을 반환 합니다.

*   **높이**: 안 지원, 및 0을 반환 합니다.

*   **폭**: 안 지원, 및 0을 반환 합니다.

*   **기간**: 안 지원, 및 0을 반환 합니다.

## 안 드 로이드 단점

지원 되는 `MediaFileData` 속성:

*   **코덱**: 안 지원, 및 반환`null`.

*   **비트 레이트**: 안 지원, 및 0을 반환 합니다.

*   **높이**: 지원: 이미지 및 비디오 파일에만.

*   **폭**: 지원: 이미지 및 비디오 파일에만.

*   **기간**: 지원: 오디오 및 비디오 파일을.

## iOS 단점

지원 되는 `MediaFileData` 속성:

*   **코덱**: 안 지원, 및 반환`null`.

*   **비트 레이트**: iOS4 장치 오디오 전용에 대 한 지원. 이미지 및 비디오에 대 한 반환 0입니다.

*   **높이**: 지원: 이미지 및 비디오 파일에만.

*   **폭**: 지원: 이미지 및 비디오 파일에만.

*   **기간**: 지원: 오디오 및 비디오 파일을.