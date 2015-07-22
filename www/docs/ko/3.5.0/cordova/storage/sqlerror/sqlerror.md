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

# SQLError

A `SQLError` 개체 오류가 발생 하면 throw 됩니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

*   **메시지**: 오류 설명.

## 상수

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## 설명

`SQLError`개체는 데이터베이스를 조작 하는 경우 오류가 발생 하면 throw 됩니다.