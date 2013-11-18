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

# globalization.getLocaleName

Retourne l'identifiant correspondant au réglage de langue actuel du client.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## Description

Transmet l'identifiant de langue en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient une propriété `value` dont la valeur est de type `String`.

Si une erreur survient lors de l'obtention de l'identifiant, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur attendu dans ce cas est `GlobalizationError.UNKNOWN_ERROR`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, une fenêtre popup contenant le texte `locale : fr_FR` est affichée.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale : ' + locale.value + '\n');},
        function () {alert('Erreur lors de l\'obtention de l\'identifiant de langue\n');}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple getLocaleName</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Erreur lors de l\'obtention de l\'identifiant de langue\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Cliquer ici pour obtenir l'identifiant de langue</button>
      </body>
    </html>
    

## Particularités de Windows Phone 8

*   Renvoie le code à deux lettres ISO 3166 correspondant au pays ou la région actuel(le).