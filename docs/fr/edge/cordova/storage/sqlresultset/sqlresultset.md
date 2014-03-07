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

Quand un `SQLTransaction` de l'objet `executeSql` est appelée, le callback spécifié s'exécute avec un `SQLResultSet` paramètre.

## Propriétés

*   **insertId**: l'ID de ligne de la ligne qui la `SQLResultSet` instruction de SQL de l'objet insérée dans la base de données.

*   **rowsAffected**: le nombre de lignes modifiées par l'instruction SQL, zéro si l'instruction n'a pas affecté toutes les lignes.

*   **lignes**: un `SQLResultSetRowList` qui représente les lignes retournées, vide si aucune ligne n'est retournée.

## Détails

Quand un `SQLTransaction` de l'objet `executeSql` est appelée, le callback spécifié s'exécute avec un `SQLResultSet` paramètre contenant trois propriétés :

*   Le `insertId` retourne le numéro de ligne d'une instruction d'insertion SQL successly. Si le code SQL n'insère pas de toutes les lignes, le `insertId` n'est pas définie.

*   Le `rowsAffected` est toujours `` pour un SQL `select` déclaration. Pour `insert` ou `update` déclarations, elle retourne le nombre de modification lignes.

*   La finale `SQLResultSetList` contient les données renvoyées par une instruction SQL select.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Paciarelli

## Exécuter SQL exemple rapide

    function queryDB(tx) {tx.executeSql ("SELECT * de démo ', [], querySuccess, errorCB);}
    
    function querySuccess (tx, résultats) {console.log ("retourner des lignes =" + results.rows.length) ;
        / / ce sera vrai puisqu'il s'agissait d'une instruction select et donc rowsAffected était 0 si (! results.rowsAffected) {console.log ("aucune lignes affectées!') ;
            retourne la valeur false ;
        } / / une instruction insert, cette propriété retourne l'ID de la dernière console.log ligne insérée ("inséré dernière ligne ID =" + results.insertId);}
    
    function errorCB(err) {alert ("erreur lors du traitement SQL:" + err.code);}
    
    var db = window.openDatabase ("Database", "1.0", "Cordova Demo", 200000) ;
    DB.transaction (queryDB, errorCB) ;
    

## Exemple complet

    < !DOCTYPE html >< html >< tête >< titre > stockage exemple < / titre >< script type = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< script type = "text/javascript" charset = "utf-8" > / / attendre pour les bibliothèques de périphérique API charger / / document.addEventListener ("deviceready", onDeviceReady, false) ;
    
        / / Remplir la base de données / / function populateDB(tx) {tx.executeSql ("DROP TABLE IF EXISTS démo") ;
            tx.executeSql ("créer TABLE IF NOT existe démo (données uniques, id)") ;
            tx.executeSql (' insérer en démo (id, données) valeurs (1, "première ligne")') ;
            tx.executeSql ("insérer en démo (id, données) valeurs (2,"Seconde ligne")") ;
        } / / Interroger la base de données / / function queryDB(tx) {tx.executeSql ("SELECT * de démo ', [], querySuccess, errorCB) ;
        } / / Interroger le rappel réussi / / function querySuccess (tx, résultats) {console.log ("retourner des lignes =" + results.rows.length) ;
            / / ce sera vrai puisqu'il s'agissait d'une instruction select et donc rowsAffected était 0 si (! results.rowsAffected) {console.log ("aucune lignes affectées!') ;
                retourne la valeur false ;
            } / / une instruction insert, cette propriété retourne l'ID de la dernière console.log ligne insérée ("inséré dernière ligne ID =" + results.insertId) ;
        } / / Rappel erreur de transaction / / function errorCB(err) {console.log ("erreur lors du traitement SQL:" + err.code) ;
        } / / Rappel réussi de transaction / / function successCB() {var db = window.openDatabase ("Database", "1.0", "Cordova Demo", 200000) ;
            DB.transaction (queryDB, errorCB) ;
        } / / périphérique API sont disponibles / / function onDeviceReady() {var db = window.openDatabase ("Database", "1.0", "Cordova Demo", 200000) ;
            DB.transaction (populateDB, errorCB, successCB) ;
        } < /script >< / chef >< corps >< h1 > exemple < / h1 >< p > base de données < /p >< / body >< / html >