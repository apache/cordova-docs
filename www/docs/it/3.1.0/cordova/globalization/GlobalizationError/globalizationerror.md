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

Un oggetto che rappresenta un errore dall'API di globalizzazione.

## Proprietà

*   **codice**: Uno dei seguenti codici che rappresenta il tipo di errore *(Numero)* 
    *   GlobalizationError.UNKNOWN _ errore: 0
    *   GlobalizationError.FORMATTING _ errore: 1
    *   GlobalizationError.PARSING _ errore: 2
    *   GlobalizationError.PATTERN _ errore: 3
*   **messaggio**: un messaggio di testo che include la spiegazione dell'errore e/o dettagli *(String)*

## Descrizione

Questo oggetto è creato e popolato da Cordova e restituito una richiamata in caso di errore.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS

## Esempio rapido

Quando si esegue il callback di errore seguenti, esso viene visualizzata una finestra popup con il testo simile a `code: 3` e`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Esempio completo

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