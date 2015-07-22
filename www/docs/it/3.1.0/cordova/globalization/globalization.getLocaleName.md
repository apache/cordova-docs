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

# globalization.getLocaleName

Ottenere l'identificatore di stringa per l'impostazione locale corrente del client.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## Descrizione

Restituisce la stringa dell'identificatore delle impostazioni locali per il `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `String` valore.

Se c'è un errore di ottenere le impostazioni locali, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra popup con il testo`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getLocaleName Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Restituisce il codice di due lettere definito in ISO 3166 per il paese attuale.