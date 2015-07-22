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

# 파일

이 개체에는 단일 파일의 특성이 포함 됩니다.

## 속성

*   **이름**: 파일의 이름. *(DOMString)*

*   **fullPath**: 파일 이름을 포함 한 파일의 전체 경로. *(DOMString)*

*   **유형**: 파일의 mime 형식을. *(DOMString)*

*   **lastModifiedDate**: 파일이 수정 된 마지막 시간. *(날짜)*

*   **크기**: 바이트에서 파일의 크기. *(긴)*

## 메서드

*   **슬라이스**: 읽을 수 파일의 단지 부분을 선택 합니다.

## 세부 정보

`File`개체는 단일 파일의 특성을 포함 합니다. 인스턴스를 얻을 수는 `File` 를 호출 하 여 개체를 `FileEntry` 개체의 `file()` 메서드.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 슬라이스

반환 된 새 `File` 개체를 `FileReader` 파일의 지정 된 부분만 반환 합니다. 음수 값에 대 한 `start` 또는 `end` 파일의 끝에서 측정 됩니다. 인덱스는 현재 슬라이스를 기준으로 배치 됩니다. (아래 전체 예제를 참조 하십시오.)

**매개 변수:**

*   **시작**:을 읽고, 포함 된 첫 번째 바이트의 인덱스.

*   **끝**: 읽기 마지막 한 후 바이트의 인덱스.

**빠른 예제**

    var slicedFile = file.slice(10, 30);
    

**전체 예제**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**지원 되는 플랫폼**

*   안 드 로이드
*   iOS