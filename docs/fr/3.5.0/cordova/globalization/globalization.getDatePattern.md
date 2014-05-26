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

# globalization.getDatePattern

Retourne une chaîne de modèles pour formater et d'analyser les dates selon les préférences de l'utilisateur du client.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Description

Retourne le modèle de la `successCallback` . L'objet passé comme paramètre contient les propriétés suivantes :

*   **modèle**: le modèle de date et d'heure pour formater et analyser des dates. Les modèles suivent Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **fuseau horaire**: l'abréviation du fuseau horaire sur le client. *(String)*

*   **utc_offset**: la différence actuelle en secondes entre le temps universel coordonné et du fuseau horaire du client. *(Nombre)*

*   **DST_OFFSET**: l'offset d'heure actuel en secondes entre non-heure le client du fuseau horaire et l'heure du client sauver du fuseau horaire. *(Nombre)*

S'il y a une erreur, obtenir le modèle, le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PATTERN\_ERROR`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou `full` . Le `options.selector` peut être `date` , `time` ou`date and
time`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cet exemple pour afficher une fenêtre popup avec texte comme `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Le `formatLength` prend uniquement en charge `short` et `full` valeurs.

*   Le `pattern` pour `date and time` modèle retourne uniquement datetime plein format.

*   Le `timezone` retourne le nom de zone à temps plein.

*   La `dst_offset` propriété n'est pas prise en charge, et toujours retourne zéro.