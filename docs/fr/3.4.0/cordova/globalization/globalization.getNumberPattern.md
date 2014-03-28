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

# globalization.getNumberPattern

Retourne une chaîne de modèles pour formater et d'analyser les chiffres selon les préférences de l'utilisateur du client.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Description

Retourne le modèle de la `successCallback` avec un `properties` objet comme paramètre. Cet objet contient les propriétés suivantes :

*   **modèle**: le modèle de numéro de formater et d'analyser les chiffres. Les modèles suivent Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **symbole**: le symbole à utiliser lors de la mise en forme et l'analyse, comme un symbole de pourcentage ou de la monnaie. *(String)*

*   **fraction**: le nombre de chiffres fractionnaires à utiliser lors de l'analyse et de mise en forme des nombres. *(Nombre)*

*   **arrondissement**: l'arrondi incrémenter pour utiliser lors de l'analyse et de mise en forme. *(Nombre)*

*   **positif**: le symbole à utiliser pour les nombres positifs lors de l'analyse et de mise en forme. *(String)*

*   **négatif**: le symbole à utiliser pour les nombres négatifs lors de l'analyse et de mise en forme. *(String)*

*   **décimal**: le symbole décimal à utiliser pour l'analyse et de mise en forme. *(String)*

*   **regroupement**: le symbole de groupe à utiliser pour l'analyse et de mise en forme. *(String)*

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PATTERN\_ERROR`.

Le `options` paramètre est facultatif, et les valeurs par défaut sont :

    {type: « decimal »}
    

Le `options.type` peut être `decimal` , `percent` , ou`currency`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela doit afficher une boîte de dialogue contextuelle avec un texte semblable aux résultats qui suivent :

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Résultats :

    modèle: #, ##0. ### symbole:.
    fraction : arrondi 0: 0 positif : négatif: - décimal:.
    regroupement:,
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   La `pattern` propriété n'est pas prise en charge et retuens une chaîne vide.

*   La `fraction` propriété n'est pas prise en charge et retourne zéro.