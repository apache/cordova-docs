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