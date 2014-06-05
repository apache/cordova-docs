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

# globalization.isDayLightSavingsTime

Indica se l'ora legale è in vigore per una data specifica utilizzando del client fuso orario e calendario.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Descrizione

Indica se è o meno dell'ora legale in vigore alla `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `dst` proprietà con un `Boolean` valore. A `true` il valore indica che l'ora legale è in vigore per la data specificata, e `false` indica che non è.

Il parametro in ingresso `date` dovrebbe essere di tipo`Date`.

Se c'è un errore di lettura della data, allora il `errorCallback` esegue. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Durante l'estate, e se il browser è impostato su un fuso orario abilitato DST, questo dovrebbe visualizzare una finestra di popup con testo simile a `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>