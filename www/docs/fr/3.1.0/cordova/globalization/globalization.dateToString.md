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

# globalization.dateToString

Renvoie une date mise en forme comme une chaîne selon les paramètres régionaux du client et de fuseau horaire.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Description

Retourne la date de mise en forme `String` par une `value` propriété accessible à partir de l'objet passé comme paramètre à la`successCallback`.

Les entrants `date` paramètre doit être de type`Date`.

S'il y a une erreur de mise en forme la date, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING\_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou`full`.

Le `options.selector` peut être `date` , `time` ou`date and time`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Si le navigateur est configuré pour la `en\_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `date: 9/25/2012 4:21PM` en utilisant les options par défaut :

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Le `formatLength` prend en charge uniquement l'option `short` et `full` valeurs.