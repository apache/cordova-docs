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

# GlobalizationError

Un objet représentant une erreur de l'API Globalization.

## Propriétés

*   **code** : un des codes suivants décrivant le type d'erreur rencontrée *(Number)* 
    *   GlobalizationError.UNKNOWN_ERROR : 0
    *   GlobalizationError.FORMATTING_ERROR : 1
    *   GlobalizationError.PARSING_ERROR : 2
    *   GlobalizationError.PATTERN_ERROR : 3
*   **message** : un message texte comprenant l'explication de l'erreur et/ou des détails à son sujet. *(String)*

## Description

Cet objet est créé et peuplé par Cordova, puis transmis à une fonction callback en cas d'erreur.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS

## Exemple court

Lorsque la fonction callback d'erreur suivante est exécutée, une fenêtre popup contenant par exemple `code : 3` et `message :` est affichée.

    function errorCallback(error) {
        alert('code : ' + error.code + '\n' +
              'message : ' + error.message + '\n');
    };
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Exemple GlobalizationError</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month : ' + date.month +
                ' day : ' + date.day +
                ' year : ' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code : ' + error.code + '\n' +
                'message : ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'pasUneDate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Cliquer ici pour d&eacute;clencher l'erreur</button>
      </body>
    </html>