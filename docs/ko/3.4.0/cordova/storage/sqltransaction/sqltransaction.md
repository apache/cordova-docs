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