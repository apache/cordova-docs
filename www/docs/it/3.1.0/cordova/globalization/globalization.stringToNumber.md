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

# globalization.stringToNumber

Analizza un numero formattato come una stringa secondo le preferenze dell'utente del client e restituisce il numero corrispondente.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Descrizione

Restituisce il numero per il `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `Number` valore.

Se c'è un errore di parsing della stringa di numeri, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PARSING\_ERROR`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {tipo: 'decimale'}
    

Il `options.type` può essere `decimal` , `percent` , o`currency`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questo dovrebbe visualizzare una finestra di popup con testo simile a `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToNumber Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>