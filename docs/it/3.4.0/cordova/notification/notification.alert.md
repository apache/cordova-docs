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

# Notification.Alert

Mostra una finestra di avviso o la finestra di dialogo personalizzata.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **messaggio**: messaggio finestra di dialogo. *(String)*

*   **alertCallback**: Callback da richiamare quando viene chiusa la finestra di avviso. *(Funzione)*

*   **titolo**: titolo di dialogo. *(String)* (Opzionale, default è`Alert`)

*   **buttonName**: nome del pulsante. *(String)* (Opzionale, default è`OK`)

## Descrizione

La maggior parte delle implementazioni di Cordova una dialogo nativa per questa caratteristica, ma alcune piattaforme utilizzano il browser `alert` funzione, che è in genere meno personalizzabile.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7 e 8 stranezze

*   Non non c'è nessun avviso del browser integrato, ma è possibile associare uno come segue per chiamare `alert()` in ambito globale:
    
        window.alert = navigator.notification.alert;
        

*   Entrambi `alert` e `confirm` sono non di blocco chiamate, risultati di cui sono disponibili solo in modo asincrono.