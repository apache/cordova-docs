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

Retourne une chaîne de caractères modèle, utile pour formater et parser des devises, en tenant compte des réglages du client et du code ISO 4217 associé.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Description

Transmet le modèle demandé comme paramètre de la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient normalement les propriétés suivantes :

*   **pattern** : le modèle permettant de formater et parser des valeurs monétaires. Les modèles suivent [Unicode Technical Standard #35][1]. *(String)*

*   **code** : le code ISO 4217 de la devise liée au modèle. *(String)*

*   **fraction** : le nombre de chiffres composant la partie décimale à utiliser lors de l'analyse et du formatage de la devise. *(Number)*

*   **rounding** : la valeur de l'incrément d'arrondi à utiliser pour l'analyse et le formatage. *(Number)*

*   **decimal** : le symbole séparant la partie entière de la partie décimale à utiliser pour l'analyse et la mise en forme. *(String)*

*   **grouping** : le symbole séparant les groupes de chiffres à utiliser pour l'analyse et la mise en forme. *(String)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Le paramètre `currencyCode` doit être de type `String` et correspondre à l'un des codes de devise ISO 4217, "USD" par exemple.

Si une erreur survient lors de l'obtention du modèle demandé, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur attendu dans ce cas est `GlobalizationError.FORMATTING_ERROR`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR` et que la devise sélectionnée est le Dollar américain, cet exemple affiche une fenêtre popup contenant des résultats semblables à ceux qui suivent :

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern : '  + pattern.pattern  + '\n' +
                  'code : '     + pattern.code     + '\n' +
                  'fraction : ' + pattern.fraction + '\n' +
                  'rounding : ' + pattern.rounding + '\n' +
                  'decimal : '  + pattern.decimal  + '\n' +
                  'grouping : ' + pattern.grouping);
        },
        function () { alert('Erreur lors de l\'obtention du modèle\n'); }
    );
    

Résultats escomptés :

    pattern : #,##0.00 $
    code : USD
    fraction : 2
    rounding : 0
    decimal : ,
    grouping : 
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple getCurrencyPattern</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern : '  + pattern.pattern  + '\n' +
                                      'code : '     + pattern.code     + '\n' +
                                      'fraction : ' + pattern.fraction + '\n' +
                                      'rounding : ' + pattern.rounding + '\n' +
                                      'decimal : '  + pattern.decimal  + '\n' +
                                      'grouping : ' + pattern.grouping);},
            function () {alert('Erreur lors de l\'obtention du modèle\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Cliquer ici pour obtenir le mod&egrave;le</button>
      </body>
    </html>