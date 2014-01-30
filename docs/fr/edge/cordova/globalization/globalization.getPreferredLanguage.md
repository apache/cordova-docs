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

# globalization.getPreferredLanguage

Retourne l'identifiant correspondant à la langue actuelle du client.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## Description

Transmet l'identifiant de langue en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient une propriété `value` dont la valeur est de type `String`.

Si une erreur survient lors de l'obtention de l'identifiant, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur attendu dans ce cas est `GlobalizationError.UNKNOWN_ERROR`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, une fenêtre popup contenant le texte `language : fr` est affichée :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language : ' + language.value + '\n');},
        function () {alert('Erreur lors de l\'obtention de l\'identifiant du langage\n');}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple getPreferredLanguage</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language : ' + language.value + '\n');},
            function () {alert('Erreur lors de l\'obtention de l\'identifiant du langage\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Cliquer ici pour obtenir l'identifiant du langage</button>
      </body>
    </html>
    

## Particularités de Windows Phone 8

*   Retourne le code à deux lettres ISO 639-1 pour la langue actuelle.