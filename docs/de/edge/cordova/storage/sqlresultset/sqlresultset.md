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

Wenn eine `SQLTransaction` des Objekts `executeSql` -Methode wird aufgerufen, der angegebene Rückruf führt mit einem `SQLResultSet` Parameter.

## Eigenschaften

*   **InsertId**: die Zeilen-ID der Zeile, die die `SQLResultSet` des Objekts-SQL-Anweisung, die in die Datenbank eingefügt.

*   **RowsAffected**: die Anzahl der Zeilen geändert werden, indem die SQL-Anweisung, die 0 (null), wenn die Anweisung keine Zeilen nicht ausgewirkt hat.

*   **Zeilen**: eine `SQLResultSetRowList` , die die zurückgegebenen Zeilen darstellen, empty, wenn keine Zeilen zurückgegeben werden.

## Informationen

Wenn eine `SQLTransaction` des Objekts `executeSql` -Methode wird aufgerufen, der angegebene Rückruf führt mit einer `SQLResultSet` Parameter mit den drei Eigenschaften:

*   Die `insertId` gibt die Zeilennummer einer successly SQL-Einfügung-Anweisung zurück. Wenn die SQL keine Zeilen einfügen wird die `insertId` nicht festgelegt.

*   Die `rowsAffected` ist immer `` für ein SQL `select` Anweisung. Für `insert` oder `update` es die Anzahl der gibt Anweisungen geänderter Zeilen.

*   Finale `SQLResultSetList` enthält die Daten aus einer SQL-select-Anweisung zurückgegeben.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 6.0 und höher)
*   iOS
*   Tizen

## Führen Sie SQL-schnelles-Beispiel

    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }
    
    function querySuccess(tx, results) {
        console.log("Returned rows = " + results.rows.length);
        // this will be true since it was a select statement and so rowsAffected was 0
        if (!results.rowsAffected) {
            console.log('No rows affected!');
            return false;
        }
        // for an insert statement, this property will return the ID of the last inserted row
        console.log("Last inserted row ID = " + results.insertId);
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(queryDB, errorCB);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Query the database
        //
        function queryDB(tx) {
            tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
        }
    
        // Query the success callback
        //
        function querySuccess(tx, results) {
            console.log("Returned rows = " + results.rows.length);
            // this will be true since it was a select statement and so rowsAffected was 0
            if (!results.rowsAffected) {
                console.log('No rows affected!');
                return false;
            }
            // for an insert statement, this property will return the ID of the last inserted row
            console.log("Last inserted row ID = " + results.insertId);
        }
    
        // Transaction error callback
        //
        function errorCB(err) {
            console.log("Error processing SQL: "+err.code);
        }
    
        // Transaction success callback
        //
        function successCB() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(queryDB, errorCB);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>