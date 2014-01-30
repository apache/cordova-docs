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

# globalization.stringToDate

Retourne un objet date construit à partir d'une date contenue dans une chaîne de caractères, en tenant compte des préférences utilisateur, du calendrier et du fuseau horaire du client.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Description

Transmet la date demandée en paramètre à la fonction successCallback sous la forme d'un objet `properties`. Cet objet contient les propriétés suivantes :

*   **year** : le nombre à quatre chiffres représentant l'année. *(Number)*

*   **month** : le numéro du mois compris entre 0 et 11. *(Number)*

*   **day** : le numéro du jour compris entre 1 et 31. *(Number)*

*   **hour** : l'heure comprise entre 0 et 23. *(Number)*

*   **minute** : le nombre de minutes compris entre 0 et 59. *(Number)*

*   **second** : le nombre de secondes compris entre 0 et 59. *(Number)*

*   **millisecond** : le nombre de millisecondes compris entre 0 et 999, pas disponible pour toutes les plates-formes. *(Number)*

Le paramètre `dateString` doit être de type `String`.

Le paramètre `options` est facultatif, sa valeur par défaut est :

    {formatLength:'short', selector:'date and time'}
    

Les valeurs autorisées pour la propriété `options.formatLength` sont `short`, `medium`, `long` et `full`. Les valeurs autorisées pour la propriété `options.selector` sont `date`, `time` et `date and time`.

Si une erreur survient lors de l'analyse de la chaîne de caractères, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur prévu dans ce cas est `GlobalizationError.PARSING_ERROR`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, une fenêtre popup contenant `month : 8, day : 25, year : 2012` est affichée. Notez que l'entier faisant référence au numéro du mois est différent de celui présent dans la chaîne parsée, ceci car il représente un index de tableau.

    navigator.globalization.stringToDate(
        '25/09/2012',
        function (date) {alert('month : ' + date.month + ',' +
                               ' day : '  + date.day + ',' +
                               ' year : ' + date.year + '\n');},
        function () {alert('Erreur lors de l\'obtention de la date\n');},
        {selector: 'date'}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple stringToDate</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '25/09/2012',
            function (date) {alert('month : ' + date.month + ',' +
                                   ' day : '  + date.day + ',' +
                                   ' year : ' + date.year + '\n');},
            function () {alert('Erreur lors de l\'obtention de la date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Cliquer ici pour parser la date</button>
      </body>
    </html>
    

## Particularités de Windows Phone 8

*   Seules les valeurs `short` et `full` sont supportées pour l'option `formatLength`.