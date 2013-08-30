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

# globalization.getCurrencyPattern

Retourne une chaîne de modèles pour formater et analyser les valeurs de monnaie selon les préférences de l'utilisateur et du code de devise ISO 4217 du client.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Description

Retourne le modèle de la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit contenir les propriétés suivantes :

*   **modèle**: le modèle de la monnaie de formater et d'analyser les valeurs de devise. Les patrons de suivent la norme technique Unicode #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **code**: code de devise de l'ISO 4217 pour le modèle. *(String)*

*   **fraction**: le nombre de chiffres fractionnaires à utiliser lors de l'analyse et de formatage de devises. *(Nombre)*

*   **arrondissement**: l'arrondi incrémenter pour utiliser lors de l'analyse et de mise en forme. *(Nombre)*

*   **décimal**: le symbole décimal à utiliser pour l'analyse et de mise en forme. *(String)*

*   **regroupement**: le symbole de groupe à utiliser pour l'analyse et de mise en forme. *(String)*

Les entrants `currencyCode` paramètre doit être un `String` de l'un des codes de devise ISO 4217, par exemple « USD ».

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale et la devise sélectionnée est Dollars des États-Unis, cet exemple pour afficher une fenêtre popup avec un texte semblable aux résultats qui suivent :

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Résultat escompté :

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>