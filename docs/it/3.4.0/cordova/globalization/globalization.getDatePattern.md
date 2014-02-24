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

Restituisce una stringa per formattare e analizzare i dati secondo le preferenze dell'utente del client.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Descrizione

Restituisce il modello per la `successCallback` . L'oggetto passato come parametro contiene le seguenti proprietà:

*   **modello**: il modello di data e ora per formattare e analizzare i dati. I modelli seguono Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **fuso orario**: il nome abbreviato del fuso orario sul client. *(String)*

*   **utc_offset**: l'attuale differenza in secondi tra del client fuso orario e tempo universale coordinato. *(Numero)*

*   **DST_OFFSET**: l'offset corrente ora legale in secondi tra non-legale del client di fuso orario e ora legale del cliente risparmio di fuso orario. *(Numero)*

Se c'è un errore per ottenere il modello, il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PATTERN\_ERROR`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o `full` . Il `options.selector` può essere `date` , `time` o`date and
time`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, in questo esempio viene visualizzata una finestra di popup con il testo come `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Esempio completo

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
    

## Windows Phone 8 stranezze

*   Il `formatLength` supporta solo `short` e `full` i valori.

*   La `pattern` per `date and time` modello restituisce solo il formato datetime completo.

*   Il `timezone` restituisce il nome della zona a tempo pieno.

*   La `dst_offset` proprietà non è supportata, e sempre restituisce zero.