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

Une des propriétés de le `SQLResultSet` contenant les lignes retournées par une requête SQL.

## Propriétés

*   **longueur**: le nombre de lignes retournées par la requête SQL.

## Méthodes

*   **article**: retourne la ligne à l'index spécifié, représenté par un objet JavaScript.

## Détails

Le `SQLResultSetRowList` contient les données retournées à partir d'un SQL `select` déclaration. L'objet contient un `length` propriété indiquant combien de lignes le `select` instruction renvoie. Pour obtenir une ligne de données, appelez la `item` méthode pour spécifier un index. Elle retourne un JavaScript `Object` dont les propriétés sont les colonnes de base de données la `select` instruction a été exécutée dans.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Paciarelli

## Exécuter SQL exemple rapide

    function queryDB(tx) {tx.executeSql ("SELECT * de démo ', [], querySuccess, errorCB);}
    
    function querySuccess (tx, résultats) {var len = results.rows.length ;
            Console.log ("table de démo:" + len + « lignes trouvées. ») ;
            pour (var j'ai = 0; j'ai < len; i ++) {console.log ("ligne =" + i + "ID =" + results.rows.item (i) .id + "données =" + results.rows.item(i).data) ;
            }} function errorCB(err) {alert ("erreur lors du traitement SQL:" + err.code) ;
        } var db = window.openDatabase ("Database", "1.0", "Cordova Demo", 200000) ;
        DB.transaction (queryDB, errorCB) ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > stockage exemple < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre pour les bibliothèques de périphérique API charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / Remplir la base de données / / function populateDB(tx) {tx.executeSql ("DROP TABLE IF EXISTS démo") ;
            tx.executeSql ("créer TABLE IF NOT existe démo (données uniques, id)") ;
            tx.executeSql (' insérer en démo (id, données) valeurs (1, "première ligne")') ;
            tx.executeSql ("insérer en démo (id, données) valeurs (2,"Seconde ligne")") ;
        } / / Interroger la base de données / / function queryDB(tx) {tx.executeSql ("SELECT * de démo ', [], querySuccess, errorCB) ;
        } / / Interroger le rappel réussi / / function querySuccess (tx, résultats) {var len = results.rows.length ;
            Console.log ("table de démo:" + len + « lignes trouvées. ») ;
            pour (var j'ai = 0; j'ai < len; i ++) {console.log ("ligne =" + i + "ID =" + results.rows.item (i) .id + "données =" + results.rows.item(i).data) ;
            }} / / Rappel erreur de transaction / / function errorCB(err) {console.log ("erreur lors du traitement SQL:" + err.code) ;
        } / / Rappel réussi de transaction / / function successCB() {var db = window.openDatabase ("Database", "1.0", "Cordova Demo", 200000) ;
            DB.transaction (queryDB, errorCB) ;
        } / / périphérique API sont disponibles / / function onDeviceReady() {var db = window.openDatabase ("Database", "1.0", "Cordova Demo", 200000) ;
            DB.transaction (populateDB, errorCB, successCB) ;
        } < /script >< / chef >< corps >< h1 > exemple < / h1 >< p > base de données < /p >< / body >< / html >