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

Analyse un nombre mis en forme comme une chaîne selon les préférences de l'utilisateur du client et renvoie le numéro du correspondant.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Description

Retourne le nombre de la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `Number` valeur.

S'il y a une erreur, l'analyse de la chaîne de numéro, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PARSING\_ERROR`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {type: « decimal »}
    

Le `options.type` peut être `decimal` , `percent` , ou`currency`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela doit afficher une boîte de dialogue contextuelle avec un texte semblable à `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToNumber Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>