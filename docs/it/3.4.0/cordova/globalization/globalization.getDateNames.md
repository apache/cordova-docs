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

Restituisce una matrice di nomi di mesi o giorni della settimana, a seconda delle preferenze dell'utente del client e calendario.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Descrizione

Restituisce la matrice di nomi per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto contiene un `value` proprietà con un `Array` di `String` i valori. I nomi di funzioni matrice a partire da entrambi il primo mese dell'anno o il primo giorno della settimana, a seconda dell'opzione selezionata.

Se c'è un errore ottenendo i nomi, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {tipo: 'largo', voce: 'mesi'}
    

Il valore di `options.type` può essere `narrow` o`wide`.

Il valore di `options.item` può essere `months` o`days`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, in questo esempio viene visualizzata una serie di dodici finestre pop-up, uno al mese, con un testo simile a `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>