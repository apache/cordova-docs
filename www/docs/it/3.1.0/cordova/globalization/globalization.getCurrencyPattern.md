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

# globalization.getCurrencyPattern

Restituisce una stringa per formattare e analizzare i valori di valuta secondo le preferenze dell'utente e il codice ISO 4217 del client.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Descrizione

Restituisce il modello per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto deve contenere le seguenti proprietà:

*   **modello**: il modello valuta per formattare e analizzare i valori di valuta. I modelli seguono Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **codice**: codice per il modello The ISO 4217. *(String)*

*   **frazione**: il numero di cifre da utilizzare durante l'analisi e la formattazione valuta. *(Numero)*

*   **arrotondamento**: l'arrotondamento incrementare per utilizzare quando l'analisi e la formattazione. *(Numero)*

*   **decimale**: il simbolo decimale da utilizzare per l'analisi e la formattazione. *(String)*

*   **raggruppamenti**: il raggruppamento simbolo da utilizzare per l'analisi e la formattazione. *(String)*

L'ingresso `currencyCode` parametro dovrebbe essere un `String` di uno dei codici valuta ISO 4217, ad esempio 'USD'.

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale e la valuta selezionata è dollari degli Stati Uniti, in questo esempio viene visualizzata una finestra di popup con testo simile ai risultati che seguono:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Risultato atteso:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>