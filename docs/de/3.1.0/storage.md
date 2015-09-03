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


# Speicher

> Ermöglicht den Zugriff auf das Gerät Storage-Optionen.

Diese API bietet Storage-Optionen, die auf der Grundlage von zwei verschiedenen W3C-Spezifikationen:

*   Die [Web Storage API-Spezifikation][1] ermöglicht Zugriff auf Daten über einfachen Schlüssel/Wert-Paaren. Finden Sie im Abschnitt über LocalStorage ausführliche auf dieser Schnittstelle.

*   Der [Web SQL Database-Spezifikation][2] bietet Zugriff auf weitere vollwertige Datenbanktabellen über SQL-Abfragen. Eine Zusammenfassung dieser Schnittstelle unmittelbar unterhalb angezeigt wird.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova bietet Zugriff auf beide Schnittstellen für die Minderheit der Geräte, die bereits diese nicht unterstützen. Im übrigen gelten die integrierten Implementierungen.

## Methoden

*   openDatabase

## Argumente

*   database_name
*   database_version
*   database_displayname
*   database_size

## Objekte

*   Datenbank
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## Zugriff auf die Funktion

Ab der Version 3.0 Zugang zum Storage APIs ist in Cordova integriert und erfordert keine mit dem CLI, Plugins hinzufügen, wie in der Command-Line Interface beschrieben.

Wenn Sie einen älteren Satz der Cordova Werkzeuge, die die CLI vorangehen verwenden, sind die folgenden Plattform-spezifische Konfigurationseinstellungen noch erforderlich:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Storage">
            <param name="android-package" value="org.apache.cordova.Storage" />
        </feature>
        

*   BlackBerry WebWorks (in`www/config.xml`)
    
        <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# openDatabase

Gibt eine neue `Database` Objekt.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Beschreibung

Die Methode erstellt eine neue SQL-Lite Datenbank und gibt ein `Database` -Objekt, das Manipulation der Daten ermöglicht.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 6.0 und höher)
*   iOS
*   Tizen

## Kleines Beispiel

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

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

Der Name der Datenbank.


# database_version

Die Version der Datenbank.


# database_displayname

Der Anzeigename der Datenbank.


# database_size

Die Grösse der Datenbank in Bytes.


# Datenbank

Ermöglicht den Zugriff auf eine SQL-Datenbank.

## Methoden

*   **Transaktion**: läuft eine Datenbanktransaktion.

*   **ChangeVersion**: können Skripts automatisch überprüfen die Versionsnummer, und ändern Sie es, wenn ein Schema zu aktualisieren.

## Informationen

Die `window.openDatabase()` -Methode gibt ein `Database` Objekt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 6.0 und höher)
*   iOS
*   Tizen

## Transaktion kurzes Beispiel

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
    

## Änderung Version kleines Beispiel

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

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

Ermöglicht die Ausführung von SQL-Anweisungen für die Datenbank.

## Methoden

*   **ExecuteSql**: führt eine SQL­Anweisung.

## Informationen

Aufrufen einer `Database` -Methode des Objekts Transaktion, Pässe ein `SQLTransaction` Objekt, das die angegebene Callback-Methode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 6.0 und höher)
*   iOS
*   Tizen

## Führen Sie SQL-schnelles-Beispiel

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


# SQLResultSetRowList

Eine der Eigenschaften von den `SQLResultSet` mit den Zeilen aus einer SQL-Abfrage zurückgegeben.

## Eigenschaften

*   **Länge**: die Anzahl der Zeilen, die von der SQL-Abfrage zurückgegeben.

## Methoden

*   **Element**: liefert die Zeile am angegebenen Index durch ein JavaScript-Objekt dargestellt.

## Informationen

Die `SQLResultSetRowList` enthält die Daten aus einer SQL zurückgegeben `select` Anweisung. Das Objekt enthält eine `length` Eigenschaft, die angibt, wie viele Zeilen der `select` Anweisung zurückgegeben. Um eine Zeile mit Daten abzurufen, rufen Sie die `item` -Methode, um einen Index angeben. Es gibt eine JavaScript `Object` deren Eigenschaften sind die Datenbankspalten der `select` Anweisung ausgeführt wurde.

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
        var len = results.rows.length;
            console.log("DEMO table: " + len + " rows found.");
            for (var i=0; i<len; i++){
                console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
            }
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
            var len = results.rows.length;
            console.log("DEMO table: " + len + " rows found.");
            for (var i=0; i<len; i++){
                console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
            }
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


# SQLError

A `SQLError` Objekt wird ausgelöst, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

*   **Nachricht**: eine Beschreibung des Fehlers.

## Konstanten

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## Beschreibung

Das `SQLError` Objekt wird ausgelöst, wenn ein Fehler auftritt, wenn eine Datenbank zu manipulieren.


# localStorage

Ermöglicht den Zugriff auf die W3C [Web-Speicherschnittstelle][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Methoden

*   **Schlüssel**: gibt den Namen des Schlüssels an der angegebenen Position zurück.

*   **GetItem**: gibt das Element mit dem angegebenen Schlüssel identifiziert.

*   **SetItem**: weist eine freigestellte Element Wert.

*   **RemoveItem**: entfernt das Element mit dem angegebenen Schlüssel identifiziert.

*   **Löschen**: entfernt alle Schlüssel/Wert-Paare.

## Informationen

Die `window.localStorage` -Schnittstelle implementiert die W3C [Web-Speicherschnittstelle][2]. Eine app kann damit um persistente Daten mithilfe von Schlüssel-Wert-Paaren zu speichern. Die `window.sessionStorage` Schnittstelle funktioniert genauso in jeder Hinsicht, es sei denn, dass alle Daten jedes Mal die app schließt deaktiviert ist. Jede Datenbank bietet einen separaten Namespace.

 [2]: http://dev.w3.org/html5/webstorage/

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 6.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8

## Schnelle Schlüsselbeispiel

    var keyName = window.localStorage.key(0);
    

## Set Item Beispiel

    window.localStorage.setItem("key", "value");
    

## Element kurzes Beispiel zu erhalten

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Kleines Beispiel Element entfernen

        window.localStorage.removeItem("key");
    

## Kleines Beispiel zu löschen

        window.localStorage.clear();
    

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
    

## Windows Phone 7 Macken

Punktnotation ist *nicht* für Windows Phone 7 verfügbar. Verwenden Sie `setItem` oder `getItem` , anstatt auf Tasten direkt aus dem Speicherobjekt, wie z.B.`window.localStorage.someKey`.
