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

# globalization.isDayLightSavingsTime

Indique si l'heure d'été est en vigueur pour une date donnée en utilisant le calendrier et le fuseau horaire du client.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Description

Indique si l'heure d'été est en vigueur ou non en transmettant un objet `properties` en paramètre de la fonction `successCallback`. Cet objet contient une propriété `dst` dont la valeur est de type `Boolean`. Ainsi, `true` indique que l'heure d'été est en vigueur à la date donnée, au contraire `false` indique qu'elle ne l'est pas.

Le paramètre obligatoire `date` doit être de type `Date`.

Si une erreur survient lors de la lecture de la date, la fonction `errorCallback` est exécutée. Le code d'erreur attendu dans ce cas est`GlobalizationError.UNKNOWN_ERROR`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Pendant l'été et si l'heure d'été est activée sur le fuseau horaire actuel du navigateur, une fenêtre popup contenant `dst : true` est affichée :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst : ' + date.dst + '\n');},
        function () {alert('Erreur lors de l\'obtention de la valeur de dst\n');}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple isDayLightSavingsTime</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst : ' + date.dst + '\n');},
            function () {alert('Erreur lors de l\'obtention de la valeur de dst\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Cliquer ici pour v&eacute;rifier si l'heure d'&eacute;t&eacute est en vigueur</button>
      </body>
    </html>