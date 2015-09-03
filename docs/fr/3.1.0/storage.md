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


# Stockage

> Donne accès aux options de stockage de l'appareil.

Cette API offre des options de stockage basées sur deux différentes spécifications de W3C :

*   La [Spécification de l'API Web Storage][1] vous permet d'accéder aux données via des paires clé/valeur simple. Voir la section sur le localStorage pour plus de détails sur cette interface.

*   La [Spécification de base de données SQL Web][2] propose plusieurs tables de base de données complète accessible via des requêtes SQL. Un résumé de cette interface apparaît immédiatement en dessous.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova permet de rejoindre les deux interfaces pour la minorité d'appareils qui ne supportent pas déjà eux. Les implémentations intégrées s'appliquerait par ailleurs.

## Méthodes

*   openDatabase

## Arguments

*   database_name
*   database_version
*   database_displayname
*   database_size

## Objets

*   Base de données
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## Accéder à la fonctionnalité

Depuis la version 3.0, l'accès aux API de stockage est intégré à Cordova et ne nécessite pas d'ajouter des plugins comme décrit dans l'Interface de ligne de commande à l'aide de la CLI.

Si vous utilisez l'ancienne ensemble d'outils de Cordova qui précèdent le CLI, les paramètres de configuration spécifiques à la plate-forme suivants sont toujours nécessaires :

*   Android (dans`app/res/xml/config.xml`)
    
        < nom de la fonction = "Storage" >< param name = "android-package" value="org.apache.cordova.Storage" / >< / fiction >
        

*   BlackBerry WebWorks (dans`www/config.xml`)
    
        < id="blackberry.widgetcache en vedette" requis = "true" version = "1.0.0.0" / >
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# openDatabase

Retourne un nouveau `Database` objet.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Description

La méthode crée une nouvelle base de données du Lite de SQL et retourne un `Database` objet permettant la manipulation des données.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Paciarelli

## Petit exemple

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## Exemple complet

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

Le nom de la base de données.


# database_version

La version de la base de données.


# database_displayname

Le nom complet de la base de données.


# database_size

La taille de la base de données en octets.


# Base de données

Donne accès à une base de données SQL.

## Méthodes

*   **transaction**: exécute une transaction de base de données.

*   **changeVersion**: permet de vérifier le numéro de version et le changer en mettant à jour un schéma automatiquement des scripts.

## Détails

La `window.openDatabase()` méthode retourne un `Database` objet.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Paciarelli

## Petit exemple de transaction

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
    

## Changement Version rapide exemple

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

## Exemple complet

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

Permet l'exécution d'instructions SQL sur la base de données.

## Méthodes

*   **executeSql**: exécute une instruction SQL.

## Détails

Appeler une `Database` méthode de transaction de l'objet, passe un `SQLTransaction` objet à la méthode de rappel spécifiée.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Paciarelli

## Exécuter SQL exemple rapide

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
    

## Exemple complet

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


# SQLError

A `SQLError` objet est levée lorsqu'une erreur survient.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

*   **message**: une description de l'erreur.

## Constantes

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## Description

Le `SQLError` objet est levée lorsqu'une erreur se produit lors de la manipulation d'une base de données.


# localStorage

Fournit l'accès à de la W3C [interface Web Storage][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Méthodes

*   **clé**: renvoie le nom de la clé à la position spécifiée.

*   **getItem**: retourne l'élément identifié par la clé spécifiée.

*   **setItem**: assigne la valeur d'une clé de l'élément.

*   **removeItem**: supprime l'élément identifié par la clé spécifiée.

*   **Effacer**: supprime toutes les paires clé/valeur.

## Détails

Le `window.localStorage` interface implémente du W3C [stockage Web interface][2]. Un soft il permet d'enregistrer des données persistantes à l'aide de paires clé-valeur. Le `window.sessionStorage` interface fonctionne de la même manière à tous les égards, sauf que toutes les données est effacé chaque fois que l'application se ferme. Chaque base de données fournit un espace de noms distinct.

 [2]: http://dev.w3.org/html5/webstorage/

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8

## Exemple rapide clé

    var keyName = window.localStorage.key(0);
    

## Petit exemple Set point

    window.localStorage.setItem("key", "value");
    

## Obtenir le point exemple rapide

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Enlever Item exemple rapide

        window.localStorage.removeItem("key");
    

## Exemple clair rapide

        window.localStorage.clear();
    

## Exemple complet

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
    

## Windows Phone 7 Quirks

Notation par points est *pas* disponible sur Windows Phone 7. N'oubliez pas d'utiliser `setItem` ou `getItem` , plutôt que pour accéder aux touches directement à partir de l'objet de stockage, tels que`window.localStorage.someKey`.
