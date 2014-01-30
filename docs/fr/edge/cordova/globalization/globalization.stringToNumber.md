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

# globalization.stringToNumber

Retourne un nombre à partir d'une chaîne de caractères contenant un nombre formaté, en tenant compte des préférences utilisateur du client.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Description

Transmet le nombre demandé en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient une propriété `value` dont la valeur est de type `Number`.

Si une erreur survient lors de l'analyse de la chaîne de caractères, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur prévu dans ce cas est `GlobalizationError.PARSING_ERROR`.

Le paramètre `options` est facultatif, sa valeur par défaut est :

    {type:'decimal'}
    

Les valeurs autorisées pour la propriété `options.type` sont `decimal`, `percent` et `currency`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, une fenêtre popup contenant `number : 1234.56` est affichée :

    navigator.globalization.stringToNumber(
        '1234,56',
        function (number) {alert('number : ' + number.value + '\n');},
        function () {alert('Erreur lors de l\'obtention du nombre\n');},
        {type:'decimal'}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple stringToNumber</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234,56',
            function (number) {alert('number : ' + number.value + '\n');},
            function () {alert('Erreur lors de l\'obtention du nombre\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Cliquer ici pour parser le nombre</button>
      </body>
    </html>