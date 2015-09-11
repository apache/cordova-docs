---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

# contactFindOptions

선택적 매개 <a href="../../../plugin_ref/spec.html">변수</a>는 `<a href="../contacts.find.html">contacts.find</a>` 메서드, <a href="../contacts.html">연락처</a> <a href="../../storage/database/database.html">데이터베이스</a>에서 반환 된 <a href="../contacts.html">연락처</a>를 필터링 하는 데 사용 합니다.

    {필터: "", 여러: true};
    

## 옵션

*   **필터**: <a href="../contacts.html">연락처</a>를 필터링 하는 데 사용 하는 검색 문자열. *(DOMString)* (기본:`""`)

*   **여러**: 찾기 작업 여러 <a href="../contacts.html">연락처</a>를 반환 합니다 경우 결정 합니다. *(부울)* (기본:`false`)