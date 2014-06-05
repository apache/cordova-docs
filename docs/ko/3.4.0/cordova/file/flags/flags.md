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

# 플래그

인수를 제공에 `DirectoryEntry` 개체의 `getFile()` 및 `getDirectory()` 를 조회 또는 파일 및 디렉터리를 각각 만드는 방법.

## 속성

*   **만들기**: 그 파일이 나 디렉토리 생성 해야 이미 존재 하지 않는 경우를 나타냅니다. *(부울)*

*   **독점**:는 자체적으로 하지만 함께 사용 하면 효과가 없습니다 `create` 파일 또는 디렉터리 만들기 대상 경로가 이미 존재 하는 경우 실패의 원인. *(부울)*

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    / / 데이터 디렉터리 존재 하지 않는 경우 그것을 만들기.
    dataDir = fileSystem.root.getDirectory ("데이터", {만들기: true});
    
    / / 존재 하지 않는 경우에 잠금 파일을 만듭니다.
    lockFile = dataDir.getFile ("lockfile.txt", {만들기: 사실, 독점: true});