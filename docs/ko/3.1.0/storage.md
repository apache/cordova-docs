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


# 스토리지

> 장치의 저장소 옵션에 대 한 액세스를 제공합니다.

이 API는 두 가지 다른 W3C 사양에 따라 스토리지 옵션을 제공 합니다.

*   [웹 저장소 API 규격][1] 을 사용 하면 단순한 키/값 쌍을 통해 데이터에 액세스할 수 있습니다. 이 인터페이스에 대 한 자세한 내용은 대 한 localStorage 섹션을 참조 하십시오.

*   [웹 SQL 데이터베이스 사양][2] 더 완전 한 기능의 데이터베이스 테이블 액세스 SQL 쿼리를 통해 제공 합니다. 이 인터페이스의 요약 바로 아래에 나타납니다.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

코르 도우 바 두 인터페이스에 이미 그들을 지원 하지 않는 장치의 소수 민족에 대 한 액세스를 제공 합니다. 그렇지 않으면 기본 구현이 적용 됩니다.

## 메서드

*   openDatabase

## 인수

*   database_name
*   database_version
*   database_displayname
*   database_size

## 개체

*   데이터베이스
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## 기능 액세스

버전 3.0, 저장소 Api에 액세스 하도록 코르도바, 내장 및 명령줄 인터페이스에 설명 된 대로 플러그인을 추가 하는 CLI를 사용 하 여 필요 하지 않습니다.

앞에 CLI 코르도바 도구의 이전 세트를 사용 하는 경우 다음 플랫폼 관련 구성 설정을 여전히 필요 합니다.

*   (안 드 로이드`app/res/xml/config.xml`)
    
        < 기능 이름 "저장소" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.Storage =" / >< / 기능 >
        

*   (블랙베리 WebWorks`www/config.xml`)
    
        < id="blackberry.widgetcache 기능" 필수 = "진정한" 버전 "1.0.0.0" = / >
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.


# openDatabase

새로운 반환 합니다 `Database` 개체.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## 설명

메서드를 사용 하면 새 SQL 라이트 데이터베이스 만들고 반환는 `Database` 수 있는 데이터의 조작 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (OS 6.0 및 높은)
*   iOS
*   Tizen

## 빠른 예제

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open Database</p>
      </body>
    </html>


# database_name

데이터베이스의 이름입니다.


# database_version

데이터베이스의 버전입니다.


# database_displayname

데이터베이스의 표시 이름입니다.


# database_size

바이트에서 데이터베이스의 크기입니다.


# 데이터베이스

SQL 데이터베이스에 대 한 액세스를 제공합니다.

## 메서드

*   **트랜잭션**: 데이터베이스 트랜잭션을 실행 합니다.

*   **changeVersion**: 자동으로 버전 번호를 확인 하 고 스키마를 업데이트할 때 변경 스크립트를 수 있습니다.

## 세부 정보

`window.openDatabase()`메서드가 반환 된 `Database` 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (OS 6.0 및 높은)
*   iOS
*   Tizen

## 트랜잭션 빠른 예제

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
    
    function successCB() {
        alert("success!");
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    

## 변경 버전 빠른 예제

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Transaction error callback
        //
        function errorCB(tx, err) {
            alert("Error processing SQL: "+err);
        }
    
        // Transaction success callback
        //
        function successCB() {
            alert("success!");
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>


# SQLTransaction

데이터베이스에 대해 SQL 문 실행할 수 있습니다.

## 메서드

*   **executeSql**: SQL 문을 실행 합니다.

## 세부 정보

전화는 `Database` 개체의 트랜잭션 메서드, 패스를 `SQLTransaction` 개체는 지정 된 콜백 메서드를.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (OS 6.0 및 높은)
*   iOS
*   Tizen

## SQL 빠른 예제 실행

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err);
    }
    
    function successCB() {
        alert("success!");
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Transaction error callback
        //
        function errorCB(err) {
            alert("Error processing SQL: "+err);
        }
    
        // Transaction success callback
        //
        function successCB() {
            alert("success!");
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>SQLTransaction</p>
      </body>
    </html>


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


# localStorage

W3C의 [웹 스토리지 인터페이스][1] 에 액세스를 제공 합니다.

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## 메서드

*   **키**: 지정된 된 위치에서 키의 이름을 반환 합니다.

*   **getItem**: 지정 된 키로 식별 된 항목을 반환 합니다.

*   **setItem**: 키 항목의 값을 할당 합니다.

*   **removeItem**: 지정 된 키로 식별 된 항목을 제거 합니다.

*   **취소**: 키/값 쌍을 모두 제거 합니다.

## 세부 정보

`window.localStorage`인터페이스는 W3C의 [웹 스토리지 인터페이스][2]를 구현 합니다. 애플 리 케이 션 키-값 쌍을 사용 하 여 영구 데이터를 저장 하는 데 사용할 수 있습니다. `window.sessionStorage`인터페이스는 모든 데이터는 응용 프로그램 종료 때마다 지워집니다 제외 하 고 모든 면에서 동일한 방식으로 작동 합니다. 각 데이터베이스는 별도 네임 스페이스를 제공합니다.

 [2]: http://dev.w3.org/html5/webstorage/

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (OS 6.0 및 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8

## 키 빠른 예제

    var keyName = window.localStorage.key(0);
    

## 설정된 항목 빠른 예제

    window.localStorage.setItem("key", "value");
    

## 항목 빠른 예제를 얻을

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## 빠른 예제 항목 제거

        window.localStorage.removeItem("key");
    

## 빠른 예를 들어 취소

        window.localStorage.clear();
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 단점

점 표기법은 *없습니다* Windows Phone 7에서 사용할 수 있습니다. 사용 하십시오 `setItem` 또는 `getItem` 와 같은 저장소 개체에서 직접 키를 액세스 하는 대신`window.localStorage.someKey`.
