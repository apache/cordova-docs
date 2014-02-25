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