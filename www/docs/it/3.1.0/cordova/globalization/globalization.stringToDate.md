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

# globalization.stringToDate

Analizza una data formattata come stringa, secondo le preferenze dell'utente e calendario utilizzando il fuso orario del cliente, il cliente e restituisce l'oggetto data corrispondente.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Descrizione

Restituisce la data al metodo di callback con successo un `properties` oggetto come parametro. Tale oggetto dovrebbe avere le seguenti proprietà:

*   **anno**: l'anno a quattro cifre. *(Numero)*

*   **mese**: mese da (0-11). *(Numero)*

*   **giorno**: il giorno da (1-31). *(Numero)*

*   **ora**: l'ora (0-23). *(Numero)*

*   **minuti**: il minuto da (0-59). *(Numero)*

*   **secondo**: il secondo da (0-59). *(Numero)*

*   **millisecondo**: I millisecondi (da 0-999), non disponibili su tutte le piattaforme. *(Numero)*

L'ingresso `dateString` parametro dovrebbe essere di tipo`String`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o `full` . Il `options.selector` può essere `date` , `time` o`date and
time`.

Se c'è un errore di parsing della stringa data, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PARSING\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra di popup con testo simile a `month:8 day:25 year:2012` . Si noti che il mese intero è uno minore di stringa, come l'intero mese rappresenta un indice di matrice.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Il `formatLength` opzione supporta solo `short` e `full` i valori.