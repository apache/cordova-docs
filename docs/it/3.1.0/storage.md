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


# Archiviazione

> Fornisce l'accesso alle opzioni di archiviazione del dispositivo.

Questa API offre opzioni di archiviazione basate su due diverse specifiche W3C:

*   La [Specifica API di archiviazione Web][1] consente di accedere ai dati tramite coppie chiave/valore semplice. Vedere la sezione localStorage per informazioni dettagliate su questa interfaccia.

*   La [Specifica di Database SQL Web][2] offre più tabelle di database completo accessibili tramite query SQL. Una sintesi di questa interfaccia viene visualizzata immediatamente sotto.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova fornisce accesso a entrambe le interfacce per la minoranza di dispositivi che non supportano già li. Altrimenti applicano implementazioni incorporate.

## Metodi

*   openDatabase

## Argomenti

*   database_name
*   database_version
*   database_displayname
*   database_size

## Oggetti

*   Database
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## La funzionalità di accesso

A partire dalla versione 3.0, accesso alle API di archiviazione è costruito in Cordova e non richiedono l'utilizzo di CLI aggiungere plugin come descritto in l'interfaccia della riga di comando.

Se si utilizza il vecchio set di strumenti di Cordova che precedono la CLI, le seguenti impostazioni di configurazione specifiche della piattaforma sono ancora necessari:

*   Android (in`app/res/xml/config.xml`)
    
        < nome funzione = "Storage" >< nome param = "android-pacchetto" value="org.apache.cordova.Storage" / >< / caratteristica >
        

*   BlackBerry WebWorks (in`www/config.xml`)
    
        < presentano id="blackberry.widgetcache" richiesto = versione "vero" = "1.0.0.0" / >
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


# openDatabase

Restituisce un nuovo `Database` oggetto.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Descrizione

Il metodo crea un nuovo Database di SQL Lite e restituisce un `Database` oggetto che consente la manipolazione dei dati.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen

## Esempio rapido

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## Esempio completo

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

Il nome del database.


# database_version

La versione del database.


# database_displayname

Il nome visualizzato del database.


# database_size

La dimensione del database in byte.


# Database

Fornisce accesso a un database SQL.

## Metodi

*   **transazione**: esegue una transazione di database.

*   **changeVersion**: permette di script verificare il numero di versione e cambiarlo quando si aggiorna uno schema automaticamente.

## Dettagli

Il `window.openDatabase()` metodo restituisce un `Database` oggetto.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen

## Rapido esempio di transazione

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
    

## Versione di cambiamento rapido esempio

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

## Esempio completo

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

Consente l'esecuzione di istruzioni SQL sul database.

## Metodi

*   **executeSql**: esegue un'istruzione SQL.

## Dettagli

Chiamare un `Database` metodo di transazione dell'oggetto, passa un `SQLTransaction` oggetto al metodo di callback specificato.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen

## Eseguire SQL rapido esempio

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
    

## Esempio completo

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

Quando un `SQLTransaction` dell'oggetto `executeSql` viene chiamato il metodo, il callback specificato viene eseguito con un `SQLResultSet` parametro.

## Proprietà

*   **insertId**: l'ID della riga della riga che il `SQLResultSet` istruzione SQL dell'oggetto inserito nel database.

*   **rowsAffected**: il numero di righe modificate dall'istruzione SQL, zero se l'istruzione non ha interessato tutte le righe.

*   **righe**: un `SQLResultSetRowList` che rappresentano le righe restituite, vuota se non vengono restituite righe.

## Dettagli

Quando un `SQLTransaction` dell'oggetto `executeSql` viene chiamato il metodo, il callback specificato viene eseguito con un `SQLResultSet` parametro contenente tre proprietà:

*   Il `insertId` restituisce il numero di riga di un'istruzione di inserimento SQL successly. Se l'istruzione SQL non inserisce tutte le righe, il `insertId` non è impostata.

*   Il `rowsAffected` è sempre `` per un SQL `select` istruzione. Per `insert` o `update` dichiarazioni restituisce il numero di righe modificate.

*   Finale `SQLResultSetList` contiene i dati restituiti da un'istruzione select SQL.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen

## Eseguire SQL rapido esempio

    funzione queryDB(tx) {tx.executeSql ('SELECT * dalla DEMO', [], querySuccess, errorCB);}
    
    funzione querySuccess (tx, risultati) {console ("restituite righe =" + results.rows.length);
        / / Questo sarà vero poiché era un'istruzione select e quindi rowsAffected era 0 se (! results.rowsAffected) {console ('No righe interessate!');
            restituire false;
        } / / per un'istruzione insert, questa proprietà restituirà l'ID dell'ultima riga inserita console ("inserita ultima riga ID =" + results.insertId);}
    
    funzione errorCB(err) {alert ("errore durante l'elaborazione SQL:" + err.code);}
    
    var db = window.openDatabase ("Database", "1.0", "Demo Cordova", 200000);
    funzionalità (queryDB, errorCB);
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > esempio di archiviazione < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per librerie API di dispositivo caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / Popolare il database / / function populateDB(tx) {tx.executeSql ('DROP TABLE IF EXISTS DEMO');
            tx.executeSql ('creare tabella se non esiste DEMO (dati univoci, id)');
            tx.executeSql (' inserire in DEMO (id, dati) valori (1, "prima fila")');
            tx.executeSql ('inserire in DEMO (id, dati) valori (2, "Seconda fila")');
        } / / Query sul database / / function queryDB(tx) {tx.executeSql ('SELECT * dalla DEMO', [], querySuccess, errorCB);
        } / / Query il callback di successo / / funzione querySuccess (tx, risultati) {console ("restituite righe =" + results.rows.length);
            / / Questo sarà vero poiché era un'istruzione select e quindi rowsAffected era 0 se (! results.rowsAffected) {console ('No righe interessate!');
                restituire false;
            } / / per un'istruzione insert, questa proprietà restituirà l'ID dell'ultima riga inserita console ("inserita ultima riga ID =" + results.insertId);
        } / / Callback di errore transazione / / function errorCB(err) {console ("errore durante l'elaborazione SQL:" + err.code);
        } / / Callback di successo di transazione / / function successCB() {var db = window.openDatabase ("Database", "1.0", "Demo Cordova", 200000);
            funzionalità (queryDB, errorCB);
        } / / dispositivo API sono disponibili / / function onDeviceReady() {var db = window.openDatabase ("Database", "1.0", "Demo Cordova", 200000);
            funzionalità (populateDB, errorCB, successCB);
        } < / script >< / testa >< corpo >< h1 > esempio < / h1 >< Database p > </p >< / corpo >< / html >


# SQLResultSetRowList

Una delle proprietà della `SQLResultSet` che contiene le righe restituite da una query SQL.

## Proprietà

*   **lunghezza**: il numero di righe restituite dalla query SQL.

## Metodi

*   **elemento**: restituisce la riga in corrispondenza dell'indice specificato rappresentato da un oggetto JavaScript.

## Dettagli

Il `SQLResultSetRowList` contiene i dati restituiti da un SQL `select` istruzione. L'oggetto contiene un `length` proprietà che indica quante righe della `select` istruzione restituisce. Per ottenere una riga di dati, chiamare il `item` metodo per specificare un indice. Esso restituisce un JavaScript `Object` cui proprietà sono le colonne del database il `select` istruzione è stata eseguita.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen

## Eseguire SQL rapido esempio

    funzione queryDB(tx) {tx.executeSql ('SELECT * dalla DEMO', [], querySuccess, errorCB);}
    
    funzione querySuccess (tx, risultati) {var len = results.rows.length;
            console ("tabella DEMO:" len + + "righe trovate.");
            per (var io = 0; i < len; i + +) {console ("riga =" + i + "ID =" +. ID results.rows.item (i) + "dati =" + results.rows.item(i).data);
            errorCB(err) funzione}} {alert ("errore durante l'elaborazione SQL:" + err.code);
        } var db = window.openDatabase ("Database", "1.0", "Demo Cordova", 200000);
        funzionalità (queryDB, errorCB);
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > esempio di archiviazione < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per librerie API di dispositivo caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / Popolare il database / / function populateDB(tx) {tx.executeSql ('DROP TABLE IF EXISTS DEMO');
            tx.executeSql ('creare tabella se non esiste DEMO (dati univoci, id)');
            tx.executeSql (' inserire in DEMO (id, dati) valori (1, "prima fila")');
            tx.executeSql ('inserire in DEMO (id, dati) valori (2, "Seconda fila")');
        } / / Query sul database / / function queryDB(tx) {tx.executeSql ('SELECT * dalla DEMO', [], querySuccess, errorCB);
        } / / Query il callback di successo / / funzione querySuccess (tx, risultati) {var len = results.rows.length;
            console ("tabella DEMO:" len + + "righe trovate.");
            per (var io = 0; i < len; i + +) {console ("riga =" + i + "ID =" +. ID results.rows.item (i) + "dati =" + results.rows.item(i).data);
            }} / / Callback di errore transazione / / function errorCB(err) {console ("errore durante l'elaborazione SQL:" + err.code);
        } / / Callback di successo di transazione / / function successCB() {var db = window.openDatabase ("Database", "1.0", "Demo Cordova", 200000);
            funzionalità (queryDB, errorCB);
        } / / dispositivo API sono disponibili / / function onDeviceReady() {var db = window.openDatabase ("Database", "1.0", "Demo Cordova", 200000);
            funzionalità (populateDB, errorCB, successCB);
        } < / script >< / testa >< corpo >< h1 > esempio < / h1 >< Database p > </p >< / corpo >< / html >


# SQLError

A `SQLError` oggetto viene generata quando si verifica un errore.

## Proprietà

*   **codice**: uno dei codici di errore predefiniti elencati di seguito.

*   **messaggio**: una descrizione dell'errore.

## Costanti

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## Descrizione

Il `SQLError` oggetto viene generata quando si verifica un errore quando si modifica un database.


# localStorage

Fornisce accesso al W3C [interfaccia Web Storage][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Metodi

*   **chiave**: restituisce il nome della chiave nella posizione specificata.

*   **getItem**: restituisce l'elemento identificato dalla chiave specificata.

*   **setItem**: assegna il valore di un elemento con chiave.

*   **removeItem**: rimuove l'elemento identificato dalla chiave specificata.

*   **chiaro**: rimuove tutte le coppie chiave/valore.

## Dettagli

Il `window.localStorage` interfaccia implementa [interfaccia Web Storage sul W3C][2]. Un'app può utilizzarlo per salvare i dati persistenti utilizzando coppie chiave-valore. Il `window.sessionStorage` interfaccia funziona allo stesso modo in ogni aspetto, tranne che tutti i dati sono cancellati ogni volta che l'app si chiude. Ogni database fornisce uno spazio dei nomi separato.

 [2]: http://dev.w3.org/html5/webstorage/

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8

## Esempio rapido chiave

    var keyName = window.localStorage.key(0);
    

## Esempio rapido elemento set

    window.localStorage.setItem("key", "value");
    

## Ottenere rapido esempio di Item

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Rimuovere l'elemento rapido esempio

        window.localStorage.removeItem("key");
    

## Chiaro esempio rapido

        window.localStorage.clear();
    

## Esempio completo

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
    

## Windows Phone 7 capricci

Notazione del punto è *non* disponibile su Windows Phone 7. Assicurarsi di utilizzare `setItem` o `getItem` , piuttosto che accedere a tasti direttamente dall'oggetto di archiviazione, come`window.localStorage.someKey`.
