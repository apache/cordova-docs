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

# globalization.getDateNames

Retourne un tableau contenant les noms des mois ou jours de la semaine, selon le calendrier et les préférences utilisateur du client.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Description

Transmet le tableau de noms comme paramètre de la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient une propriété `value` contenant un tableau (`Array`) dont les valeurs sont des chaînes de caractères (`String`). Ces chaînes de caractères sont classées dans le tableau à partir du premier mois de l'année ou du premier jour de la semaine, selon l'option choisie.

Si une erreur survient lors de l'obtention des noms, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Dans ce cas, le code d'erreur attendu est `GlobalizationError.UNKNOWN_ERROR`.

Le paramètre `options` est facultatif, sa valeur par défaut est :

    {type:'wide', item:'months'}
    

Les valeurs autorisées pour la propriété `options.type` sont `narrow` et `wide`.

Les valeurs autorisées pour la propriété `options.item` sont `months` et `days`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Exemple court

Si la langue du navigateur est réglée sur `fr_FR`, cet exemple affiche une série de douze fenêtres popup, une par mois, avec contenu ressemblant à `mois : janvier`.

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('mois : ' + names.value[i] + '\n');
            }
        },
        function () { alert('Erreur lors de l\'obtention des noms de mois\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple getDateNames</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('mois : ' + names.value[i] + '\n');
              }
            },
            function () {alert('Erreur lors de l\'obtention des noms de mois\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Cliquer ici pour afficher les mois de l'ann&eacute;e</button>
      </body>
    </html>