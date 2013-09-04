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

# SQLResultSetRowList

속성 중 하나는 `SQLResultSet` SQL 쿼리에서 반환 된 행을 포함 합니다.

## 속성

*   **길이**: SQL 쿼리에 의해 반환 된 행 수.

## 메서드

*   **항목**: JavaScript 개체가 나타내는 지정된 된 인덱스에서 행을 반환 합니다.

## 세부 정보

`SQLResultSetRowList`SQL에서 반환 된 데이터를 포함 `select` 문. 개체를 포함 한 `length` 속성 행을 나타내는 `select` 문 반환 합니다. 데이터의 행을 가져오려면 호출에 `item` 인덱스를 지정 하는 방법. 자바 스크립트를 반환 합니다 `Object` 속성은 데이터베이스 열에 `select` 문이 실행 되었습니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (OS 6.0 및 높은)
*   iOS
*   Tizen

## SQL 빠른 예제 실행

    기능을 queryDB(tx) {tx.executeSql (' 선택 *에서 데모 ',, querySuccess, errorCB);}
    
    querySuccess (tx, 결과) 함수 {var len = results.rows.length;
            console.log ("데모 테이블:" len + "행 발견.");
            에 대 한 (var i = 0; 나 < 렌; i + +) {console.log ("행 =" + i + "ID =" + results.rows.item (i).id + "데이터 =" + results.rows.item(i).data);
            }} 함수 errorCB(err) {경고 ("SQL 처리 오류:" + err.code);
        } var db = window.openDatabase ("데이터베이스", "1.0", "코르도바 데모", 200000);
        db.transaction (queryDB, errorCB);
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > 저장 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 장치 API 라이브러리 로드를 기다립니다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / 데이터베이스를 채울 / / 기능 populateDB(tx) {tx.executeSql ('드롭 테이블 IF EXISTS 데모');
            tx.executeSql (' 만들 테이블 아니라면 존재 데모 (id 고유 데이터)');
            tx.executeSql (' (id, 데이터)로 데모 삽입 값 (1, "첫 행")');
            tx.executeSql ('(id, 데이터)로 데모 삽입 값 (2, "두 번째 행")');
        } / / 데이터베이스 쿼리 / / 기능 queryDB(tx) {tx.executeSql (' 선택 *에서 데모 ',, querySuccess, errorCB);
        } / / 쿼리 성공 콜백 / / querySuccess (tx, 결과) 기능 {var len = results.rows.length;
            console.log ("데모 테이블:" len + "행 발견.");
            에 대 한 (var i = 0; 나 < 렌; i + +) {console.log ("행 =" + i + "ID =" + results.rows.item (i).id + "데이터 =" + results.rows.item(i).data);
            }} / / 트랜잭션 오류 콜백 / / errorCB(err) 기능 {console.log ("SQL 처리 오류:" + err.code);
        } / / 트랜잭션 성공 콜백 / / successCB() 기능 {var db = window.openDatabase ("데이터베이스", "1.0", "코르도바 데모", 200000);
            db.transaction (queryDB, errorCB);
        } / / 장치 Api 사용할 수 있습니다 / / onDeviceReady() 기능 {var db = window.openDatabase ("데이터베이스", "1.0", "코르도바 데모", 200000);
            db.transaction (populateDB, errorCB, successCB);
        } < / 스크립트 >< / 머리 >< 몸 >< h1 > 예를 들어 < / h 1 >< p > 데이터베이스 < /p >< / 바디 >< / html >