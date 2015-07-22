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

# 메타 데이터

파일이 나 디렉터리의 상태에 대 한 정보를 제공 하는 인터페이스.

## 속성

*   **modificationTime**: 때 파일 또는 디렉터리가 마지막으로 수정 된 시간. *(날짜)*

## 세부 정보

`Metadata`개체는 파일이 나 디렉터리의 상태에 대 한 정보를 나타냅니다. 전화는 `DirectoryEntry` 또는 `FileEntry` 개체의 `getMetadata()` 메서드 결과 `Metadata` 인스턴스.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);