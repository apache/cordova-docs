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

# Notification.Confirm

Visualizza una finestra di dialogo conferma personalizzabile.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **messaggio**: messaggio finestra di dialogo. *(String)*

*   **confirmCallback**: Callback da richiamare con l'indice del pulsante premuto (1, 2 o 3) o quando la finestra di dialogo viene chiusa senza una pressione del pulsante (0). *(Funzione)*

*   **titolo**: titolo di dialogo. *(String)* (Opzionale, default è`Confirm`)

*   **buttonLabels**: matrice di stringhe che specificano le etichette dei pulsanti. *(Matrice)* (Opzionale, default è [ `OK,Cancel` ])

## Descrizione

Il `notification.confirm` metodo visualizza una finestra di dialogo nativa che è più personalizzabile del browser `confirm` funzione.

## confirmCallback

Il `confirmCallback` viene eseguito quando l'utente preme uno dei pulsanti nella finestra di dialogo conferma.

Il callback accetta l'argomento `buttonIndex` *(numero)*, che è l'indice del pulsante premuto. Nota che l'indice utilizza l'indicizzazione base uno, quindi il valore è `1` , `2` , `3` , ecc.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

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
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 e 8 stranezze

*   Non non c'è nessuna funzione browser incorporato per `window.confirm` , ma è possibile associare assegnando:
    
        window.confirm = navigator.notification.confirm;
        

*   Chiama al `alert` e `confirm` sono non bloccante, quindi il risultato è disponibile solo in modo asincrono.