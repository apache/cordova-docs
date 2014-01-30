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

Retourne une chaîne de caractères modèle, utile pour formater et parser des dates, en tenant compte des préférences utilisateur du client.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Description

Transmet le modèle demandé à la fonction `successCallback`. Cet objet passé en paramètre contient les propriétés suivantes :

*   **pattern** : le modèle de date et d'heure permettant de formater et parser des dates. Les modèles suivent [Unicode Technical Standard #35][1]. *(String)*

*   **timezone** : le nom abrégé du fuseau horaire du client. *(String)*

*   **utc_offset** : la différence actuelle en secondes entre le fuseau horaire du client et le Temps universel coordonné. *(Number)*

*   **dst_offset** : la différence en secondes entre l'heure d'hiver et l'heure d'été du client. *(Number)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Si une erreur survient lors de l'obtention du modèle demandé, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Le code d'erreur attendu dans ce cas est `GlobalizationError.PATTERN_ERROR`.

Le paramètre `options` est facultatif, sa valeur par défaut est la suivante :

    {formatLength:'short', selector:'date and time'}
    

Les valeurs autorisées pour la propriété `options.formatLength` sont `short`, `medium`, `long` et `full`. Les valeurs autorisées pour la propriété `options.selector` sont `date`, `time` et `date and time`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, cet exemple affiche une fenêtre popup contenant `pattern : dd/MM/yy HH:mm` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern : ' + date.pattern + '\n'); },
            function () { alert('Erreur lors de l\'obtention du modèle\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple getDatePattern</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern : ' + date.pattern + '\n');},
            function () {alert('Erreur lors de l\'obtention du modèle\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Cliquer ici pour obtenir le mod&egrave;le</button>
      </body>
    </html>
    

## Particularités de Windows Phone 8

*   Seules les valeurs `short` et `full` sont supportés pour l'option `formatLength`.

*   La propriété `pattern` d'un modèle `date and time` retourne uniquement le plein format datetime.

*   La propriété `timezone` d'un modèle retourne le nom complet du fuseau horaire.

*   La propriété `dst_offset` d'un modèle n'est pas prise en charge et retourne donc toujours zéro.