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

# globalization.numberToString

Renvoie un nombre formaté dans une chaîne de caractères en tenant compte des préférences utilisateur du client.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## Description

Transmet le nombre formaté en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet contient une propriété `value` dont la valeur est de type `String`.

Si une erreur survient lors du formatage du nombre, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur attendu dans ce cas est `GlobalizationError.FORMATTING_ERROR`.

Le paramètre `options` est facultatif, sa valeur par défaut est :

    {type:'decimal'}
    

Les valeurs autorisées pour la propriété `options.type` sont "decimal", "percent" et "currency".

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, une fenêtre popup contenant `number : 3,142` est affichée :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number : ' + number.value + '\n');},
        function () {alert('Erreur lors du formatage du nombre\n');},
        {type:'decimal'}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple numberToString</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number : ' + number.value + '\n');},
            function () {alert('Erreur lors du formatage du nombre\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Cliquer ici pour formater le nombre</button>
      </body>
    </html>