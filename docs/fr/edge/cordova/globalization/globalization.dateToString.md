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

# globalization.dateToString

Renvoie une date sous la forme d'une chaîne de caractères en tenant compte des réglages de langue et de fuseau horaire du client.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Description

Retourne la date formatée (`String`) via la propriété `value` définie sur l'objet transmis en paramètre à la fonction `successCallback`.

La valeur du premier paramètre, nommé `date`, doit être de type `Date`.

Si une erreur survient lors du formatage de la date, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Dans ce cas, le code d'erreur prévu est `GlobalizationError.FORMATTING_ERROR`.

Le paramètre `options` est facultatif, sa valeur par défaut est :

    {formatLength:'short', selector:'date and time'}
    

Les valeurs autorisées pour la propriété `options.formatLength` sont `short`, `medium`, `long` et `full`.

Les valeurs autorisées pour la propriété `options.selector` sont `date`, `time` et `date and time`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, une fenêtre popup contenant un texte semblable à `date : 25/09/2012 16:21` est affichée (options par défaut) :

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date : ' + date.value + '\n'); },
        function () { alert('Une erreur est survenue lors de l\'utilisation de dateToString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple dateToString</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date : ' + date.value + '\n');},
            function () {alert('Une erreur est survenue lors de l\'utilisation de dateToString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Cliquer ici pour formater la date</button>
      </body>
    </html>
    

## Particularités de Windows Phone 8

*   Seules les valeurs `short` et `full` sont supportées pour l'option `formatLength`.