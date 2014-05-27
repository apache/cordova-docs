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

# globalization.getNumberPattern

Restituisce una stringa per formattare e analizzare i numeri secondo le preferenze dell'utente del client.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Descrizione

Restituisce il modello per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto contiene le seguenti proprietà:

*   **modello**: il modello del numero per formattare e analizzare i numeri. I modelli seguono Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **simbolo**: il simbolo da utilizzare durante la formattazione e l'analisi, come un simbolo di percentuale o valuta. *(String)*

*   **frazione**: il numero di cifre da utilizzare durante l'analisi e la formattazione dei numeri. *(Numero)*

*   **arrotondamento**: l'arrotondamento incrementare per utilizzare quando l'analisi e la formattazione. *(Numero)*

*   **positivo**: il simbolo da utilizzare per i numeri positivi quando l'analisi e la formattazione. *(String)*

*   **negativo**: il simbolo da utilizzare per i numeri negativi quando l'analisi e la formattazione. *(String)*

*   **decimale**: il simbolo decimale da utilizzare per l'analisi e la formattazione. *(String)*

*   **raggruppamenti**: il raggruppamento simbolo da utilizzare per l'analisi e la formattazione. *(String)*

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PATTERN\_ERROR`.

Il `options` parametro è facoltativo e i valori predefiniti sono:

    {tipo: 'decimale'}
    

Il `options.type` può essere `decimal` , `percent` , o`currency`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questo dovrebbe visualizzare una finestra di popup con testo simile ai risultati che seguono:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Risultati:

    Modello: #, # # 0. # # # simbolo:.
    frazione: arrotondamento 0: 0 positivo: negativo: - decimale:.
    raggruppamento:,
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   La `pattern` proprietà non è supportata e retuens una stringa vuota.

*   La `fraction` proprietà non è supportata e restituisce zero.