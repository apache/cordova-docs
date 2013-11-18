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

Retourne une chaîne de caractères modèle, utile pour formater et parser des nombres, en tenant compte des préférences utilisateur du client.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Description

Transmet le modèle demandé en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient les propriétés suivantes :

*   **pattern** : le modèle permettant de formater et parser des nombres. Les modèles suivent [Unicode Technical Standard #35][1]. *(String)*

*   **symbol** : le symbole à utiliser lors de la mise en forme et l'analyse, par exemple le symbole de pourcentage ou un symbole monétaire. *(String)*

*   **fraction** : le nombre de chiffres composant la partie décimale à utiliser lors de l'analyse et du formatage de nombres. *(Number)*

*   **rounding** : la valeur d'incrément d'arrondi à utiliser lors de l'analyse et du formatage. *(Number)*

*   **positive** : le symbole à utiliser lors de l'analyse et du formatage des nombres positifs. *(String)*

*   **negative** : le symbole à utiliser lors de l'analyse et du formatage des nombres négatifs. *(String)*

*   **decimal** : le symbole séparant la partie entière de la partie décimale à utiliser pour l'analyse et la mise en forme. *(String)*

*   **grouping** : le symbole séparant les groupes de chiffres à utiliser pour l'analyse et la mise en forme. *(String)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Si une erreur survient lors de l'obtention du modèle demandé, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur attendu dans ce cas est`GlobalizationError.PATTERN_ERROR`.

Le paramètre `options` est facultatif, sa valeur par défaut est :

    {type:'decimal'}
    

Les valeurs autorisées pour la propriété `options.type` sont `decimal`, `percent` et `currency`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, cet exemple affiche une fenêtre popup contenant des résultats semblables à ceux qui suivent :

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern : '  + pattern.pattern  + '\n' +
                                  'symbol : '   + pattern.symbol   + '\n' +
                                  'fraction : ' + pattern.fraction + '\n' +
                                  'rounding : ' + pattern.rounding + '\n' +
                                  'positive : ' + pattern.positive + '\n' +
                                  'negative : ' + pattern.negative + '\n' +
                                  'decimal : '  + pattern.decimal  + '\n' +
                                  'grouping : ' + pattern.grouping);},
        function () {alert('Erreur lors de l\'obtention du modèle\n');},
        {type:'decimal'}
    );
    

Résultats :

    pattern: #,##0.###
    symbol: 
    fraction: 0
    rounding: 0
    positive: +
    negative: -
    decimal: ,
    grouping: 
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple getNumberPattern</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern : '  + pattern.pattern  + '\n' +
                                      'symbol : '   + pattern.symbol   + '\n' +
                                      'fraction : ' + pattern.fraction + '\n' +
                                      'rounding : ' + pattern.rounding + '\n' +
                                      'positive : ' + pattern.positive + '\n' +
                                      'negative : ' + pattern.negative + '\n' +
                                      'decimal : '  + pattern.decimal  + '\n' +
                                      'grouping : ' + pattern.grouping);},
            function () {alert('Erreur lors de l\'obtention du modèle\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Cliquer ici pour obtenir le mod&egrave;le</button>
      </body>
    </html>
    

## Particularités de Windows Phone 8

*   La propriété `pattern` n'est pas prise en charge et retourne une chaîne vide.

*   La propriété `fraction` n'est pas prise en charge et retourne zéro.