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

Indique si l'heure avancée est en vigueur pour une date donnée en utilisant le calendrier et le fuseau horaire du client.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Description

Indique si l'heure avancée est en vigueur à la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `dst` propriété avec une `Boolean` valeur. A `true` valeur indique que l'heure avancée est en vigueur à la date donnée, et `false` indique qu'il ne l'est pas.

Le paramètre entrant `date` doit être de type`Date`.

S'il y a une erreur de lecture de la date, puis le `errorCallback` s'exécute. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Au cours de l'été, et si le navigateur est défini sur un fuseau horaire la DST-activé, il doit afficher une boîte de dialogue contextuelle avec un texte semblable à `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>