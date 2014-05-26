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

# SQLResultSet

때는 `SQLTransaction` 개체의 `executeSql` 메서드가 호출 되어, 지정 된 콜백을 실행 한 `SQLResultSet` 매개 변수.

## 속성

*   **insertId**: 행의 행 ID는에서 `SQLResultSet` 개체의 SQL 문을 데이터베이스에 삽입 합니다.

*   **rowsAffected**: 행 수 문이 모든 행에 영향을 미치지 않았다 이면 0 SQL 문으로 변경.

*   **행**: 한 `SQLResultSetRowList` 아무 행도 반환 하는 경우 빈 반환 하는 행을 나타내는.

## 세부 정보

때는 `SQLTransaction` 개체의 `executeSql` 메서드가 호출 되어, 지정 된 콜백 실행 한 `SQLResultSet` 세 가지 속성을 포함 하는 매개 변수:

*   `insertId`successly SQL 삽입 문 행 수를 반환 합니다. SQL 어떤 행을 삽입 하지 않는 경우는 `insertId` 설정 되지 않았습니다.

*   `rowsAffected`항상 `` 를 sql `select` 문을. 대 한 `insert` 또는 `update` 문 수를 반환 합니다 행을 수정 합니다.

*   마지막 `SQLResultSetList` SQL select 문에서 반환 된 데이터를 포함 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (OS 6.0 및 높은)
*   iOS
*   Tizen

## SQL 빠른 예제 실행

    기능을 queryDB(tx) {tx.executeSql (' 선택 *에서 데모 ',, querySuccess, errorCB);}
    
    querySuccess (tx, 결과) 함수 {console.log ("행 반환 =" + results.rows.length);
        / /이 되며 진정한 이후 select 문을 그래서 경우 rowsAffected 0 (! results.rowsAffected) {console.log ('행 영향!');
            반환 허위;
        } / / insert 문에 대 한이 속성 마지막 삽입된 행 console.log의 ID를 반환 합니다 ("마지막 삽입 행 ID =" + results.insertId);}
    
    errorCB(err) 함수 {경고 ("SQL 처리 오류:" + err.code);}
    
    var db = window.openDatabase ("데이터베이스", "1.0", "코르도바 데모", 200000);
    db.transaction (queryDB, errorCB);
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > 저장 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 장치 API 라이브러리 로드를 기다립니다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / 데이터베이스를 채울 / / 기능 populateDB(tx) {tx.executeSql ('드롭 테이블 IF EXISTS 데모');
            tx.executeSql (' 만들 테이블 아니라면 존재 데모 (id 고유 데이터)');
            tx.executeSql (' (id, 데이터)로 데모 삽입 값 (1, "첫 행")');
            tx.executeSql ('(id, 데이터)로 데모 삽입 값 (2, "두 번째 행")');
        } / / 데이터베이스 쿼리 / / 기능 queryDB(tx) {tx.executeSql (' 선택 *에서 데모 ',, querySuccess, errorCB);
        } / / 쿼리 성공 콜백 / / querySuccess (tx, 결과) 기능 {console.log ("행 반환 =" + results.rows.length);
            / /이 되며 진정한 이후 select 문을 그래서 경우 rowsAffected 0 (! results.rowsAffected) {console.log ('행 영향!');
                반환 허위;
            } / / insert 문에 대 한이 속성 마지막 삽입된 행 console.log의 ID를 반환 합니다 ("마지막 삽입 행 ID =" + results.insertId);
        } / / 트랜잭션 오류 콜백 / / errorCB(err) 기능 {console.log ("SQL 처리 오류:" + err.code);
        } / / 트랜잭션 성공 콜백 / / successCB() 기능 {var db = window.openDatabase ("데이터베이스", "1.0", "코르도바 데모", 200000);
            db.transaction (queryDB, errorCB);
        } / / 장치 Api 사용할 수 있습니다 / / onDeviceReady() 기능 {var db = window.openDatabase ("데이터베이스", "1.0", "코르도바 데모", 200000);
            db.transaction (populateDB, errorCB, successCB);
        } < / 스크립트 >< / 머리 >< 몸 >< h1 > 예를 들어 < / h 1 >< p > 데이터베이스 < /p >< / 바디 >< / html >