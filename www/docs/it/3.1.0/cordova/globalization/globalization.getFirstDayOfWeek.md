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

# globalization.getFirstDayOfWeek

Restituisce il primo giorno della settimana secondo le preferenze dell'utente del client e calendario.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## Descrizione

I giorni della settimana sono numerati a partire da 1, dove 1 è presupposto per essere domenica. Restituisce il giorno per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `Number` valore.

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra di popup con testo simile a`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>