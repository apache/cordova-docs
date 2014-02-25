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