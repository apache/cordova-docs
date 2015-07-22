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

# globalization.getPreferredLanguage

Obtenir l'identificateur de chaîne pour la langue du client actuel.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## Description

Retourne la chaîne d'identificateur de langue à la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `String` valeur.

S'il y a une erreur d'obtention de la langue, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela doit afficher une boîte de dialogue contextuelle avec le texte `language: English` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getPreferredLanguage Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Retourne le code à deux lettres ISO 639-1 pour la langue actuelle.