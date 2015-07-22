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

# MediaFile.getFormatData

> 검색은 미디어 캡처 파일에 대 한 정보를 서식을 지정 합니다.

    mediaFile.getFormatData (MediaFileDataSuccessCB successCallback, [MediaFileDataErrorCB errorCallback]);
    

## 설명

이 함수는 비동기적으로 미디어 파일에 대 한 형식 정보를 검색 하려고 합니다. 경우, 호출 하는 `MediaFileDataSuccessCB` 와 콜백을 `MediaFileData` 개체. 이 함수 호출 하는 시도가 실패 하는 경우는 `MediaFileDataErrorCB` 콜백.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 블랙베리 WebWorks 단점

그래서 모든 미디어 파일에 대 한 정보에 대 한 API를 제공 하지 않습니다 `MediaFileData` 개체를 기본 값으로 반환 합니다.

## 안 드 로이드 단점

미디어 파일 형식 정보에 액세스할 수 API는 제한, 그래서 모든 `MediaFileData` 속성이 지원 됩니다.

## iOS 단점

미디어 파일 형식 정보에 액세스할 수 API는 제한, 그래서 모든 `MediaFileData` 속성이 지원 됩니다.