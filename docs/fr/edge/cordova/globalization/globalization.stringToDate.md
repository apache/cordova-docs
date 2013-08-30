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

Analyse une date mise en forme comme une chaîne, en fonction des préférences de l'utilisateur et du calendrier en utilisant le fuseau horaire du client, du client et retourne l'objet date correspondante.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Description

Retourne la date du rappel de succès avec un `properties` objet comme paramètre. Cet objet doit avoir les propriétés suivantes :

*   **année**: l'année à quatre chiffres. *(Nombre)*

*   **mois**: le mois de (0-11). *(Nombre)*

*   **jour**: le jour de (1-31). *(Nombre)*

*   **heure**: l'heure du (0-23). *(Nombre)*

*   **minute**: la minute (0-59). *(Nombre)*

*   **deuxième**: la seconde de (0 à 59). *(Nombre)*

*   **milliseconde**: les millisecondes (entre 0 et 999), non disponibles sur toutes les plateformes. *(Nombre)*

Les entrants `dateString` paramètre doit être de type`String`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou `full` . Le `options.selector` peut être `date` , `time` ou`date and
time`.

S'il y a une erreur, l'analyse de la chaîne de date, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PARSING\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `month:8 day:25 year:2012` . Notez que le mois entier est l'un de moins que la chaîne, comme le nombre entier de mois représente un index de tableau.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Le `formatLength` prend en charge uniquement l'option `short` et `full` valeurs.