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

# globalization.getDateNames

Retourne un tableau des noms des mois ou jours de la semaine, selon le calendrier et les préférences de l'utilisateur du client.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Description

Retourne le tableau de noms à la `successCallback` avec un `properties` objet comme paramètre. Cet objet contient une `value` propriété avec un `Array` de `String` valeurs. Les noms de fonctionnalités de tableau à partir de soit le premier mois de l'année ou le premier jour de la semaine, selon l'option choisie.

S'il y a une erreur d'obtention des noms, puis les `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {type: « large », item: « mois »}
    

La valeur de `options.type` peut être `narrow` ou`wide`.

La valeur de `options.item` peut être `months` ou`days`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cet exemple affiche une série de douze fenêtres popup, un par mois, avec un texte semblable à `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>