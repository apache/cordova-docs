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