---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# Notifica

> Notifiche di dispositivi visivi, acustici e tattili.

## Metodi

*   `notification.alert`
*   `Notification.Confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   iOS (in`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


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


# Notification.Beep

Il dispositivo riproduce un bip sonoro.

    navigator.notification.beep(times);
    

*   **volte**: il numero di volte per ripetere il segnale acustico. *(Numero)*

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8

## Esempio rapido

    // Beep twice!
    navigator.notification.beep(2);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Stranezze Android

*   Android giochi default **Notification ringtone** specificato sotto il pannello **impostazioni/audio e Display** .

## Windows Phone 7 e 8 stranezze

*   Si basa su un file generico bip dalla distribuzione di Cordova.

## Tizen stranezze

*   Tizen implementa bip di riproduzione di un file audio tramite i media API.

*   Il file beep deve essere breve, deve essere situato un `sounds` sottodirectory della directory radice dell'applicazione e deve essere denominato`beep.wav`.


# Notification.vibrate

Vibra il dispositivo per il periodo di tempo specificato.

    navigator.notification.vibrate(milliseconds)
    

*   **tempo**: millisecondi a vibrare il dispositivo, di cui 1000 millisecondi è uguale a 1 secondo. *(Numero)*

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8

## Esempio rapido

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS stranezze

*   **tempo**: ignora il tempo specificato e vibra per un tempo pre-impostato.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 stranezze

vibrare la funzione dell'oggetto navigator

        navigator.vibrate(1000);  // vibrate for 1 second
