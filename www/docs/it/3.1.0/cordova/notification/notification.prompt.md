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

# Notification.prompt

Mostra una finestra di dialogo rapida personalizzabile.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **messaggio**: messaggio finestra di dialogo. *(String)*

*   **promptCallback**: Callback da richiamare quando viene premuto un pulsante. *(Funzione)*

*   **titolo**: dialogo titolo *(String)* (opzionale, default è`Prompt`)

*   **buttonLabels**: matrice di stringhe specificando il pulsante etichette *(Array)* (opzionale, default è`["OK","Cancel"]`)

*   **defaultText**: valore di input predefinito textbox ( `String` ) (opzionale, Default: stringa vuota)

## Descrizione

Il `notification.prompt` metodo visualizza una finestra di dialogo nativa che è più personalizzabile del browser `prompt` funzione.

## promptCallback

Il `promptCallback` viene eseguito quando l'utente preme uno dei pulsanti nella finestra di dialogo richiesta. Il `results` oggetto passato al metodo di callback contiene le seguenti proprietà:

*   **buttonIndex**: l'indice del pulsante premuto. *(Numero)* Nota che l'indice utilizza l'indicizzazione base uno, quindi il valore è `1` , `2` , `3` , ecc.

*   **INPUT1**: il testo immesso nella finestra di dialogo richiesta. *(String)*

## Piattaforme supportate

*   Android
*   iOS

## Esempio rapido

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Stranezze Android

*   Android supporta un massimo di tre pulsanti e ignora di più di quello.

*   Su Android 3.0 e versioni successive, i pulsanti vengono visualizzati in ordine inverso per dispositivi che utilizzano il tema Holo.