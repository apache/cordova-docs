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

Restituisce una data formattata come stringa secondo le impostazioni locali del client e fuso orario.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Descrizione

Restituisce la data formattata `String` tramite un `value` proprietà accessibile dall'oggetto passato come parametro per la`successCallback`.

L'ingresso `date` parametro dovrebbe essere di tipo`Date`.

Se c'è un errore di formattazione della data, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING\_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o`full`.

Il `options.selector` può essere `date` , `time` o`date and time`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Se il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra di popup con testo simile a `date: 9/25/2012 4:21PM` utilizzando le opzioni di default:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Il `formatLength` opzione supporta solo `short` e `full` i valori.