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

# globalization.getFirstDayOfWeek

Retourne le premier jour de la semaine selon le calendrier et les préférences utilisateur du client.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## Description

Les jours de la semaine sont numérotés à partir de 1, où 1 correspond au dimanche. Le jour demandé est transmis en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient une propriété `value` dont la valeur est de type `Number`.

Si une erreur survient lors de l'obtention du jour demandé, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur attendu dans ce cas est `GlobalizationError.UNKNOWN_ERROR`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, une fenêtre popup contenant un texte semblable à `day : 2` est affichée.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day : ' + day.value + '\n');},
        function () {alert('Erreur lors de l\'obtention du jour\n');}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple getFirstDayOfWeek</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day : ' + day.value + '\n');},
            function () {alert('Erreur lors de l\'obtention du jour\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Cliquer ici pour obtenir le num&eacute;ro du premier jour de la semaine</button>
      </body>
    </html>