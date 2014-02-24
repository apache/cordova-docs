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

Un objet qui représente une erreur de l'API de la mondialisation.

## Propriétés

*   **code**: Un des codes suivants qui représente le type d'erreur *(Nombre)* 
    *   GlobalizationError.UNKNOWN _ erreur: 0
    *   GlobalizationError.FORMATTING _ erreur: 1
    *   GlobalizationError.PARSING _ erreur: 2
    *   GlobalizationError.PATTERN _ erreur: 3
*   **message**: un message texte qui comprend l'explication de l'erreur et/ou de détails *(String)*

## Description

Cet objet est créé et peuplé de Cordova et retourné à un rappel en cas d'erreur.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS

## Petit exemple

Lorsque le rappel d'erreur suivant s'exécute, il affiche une fenêtre popup avec le texte semblable à `code: 3` et`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Exemple complet

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>