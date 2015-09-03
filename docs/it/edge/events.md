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


# Eventi

> Eventi del ciclo di vita di Cordova.

## Tipi di evento

*   deviceready
*   pause
*   resume
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Eventi aggiunti da [cordova-plugin--lo stato della batteria][1]

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/README.md

*   batterycritical
*   batterylow
*   batterystatus

## Eventi aggiunti da [cordova-plugin-rete-informazioni][2]

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/README.md

*   online
*   offline


# deviceready

Quando Cordova è completamente caricato, viene generato l'evento.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Dettagli

Questo evento è essenziale per qualsiasi applicazione. Segnala che il dispositivo di Cordova API hanno caricato e sono pronte accedere.

Cordova è costituito da due basi di codice: nativo e JavaScript. Mentre carica il codice nativo, viene visualizzata un'immagine di caricamento personalizzato. Tuttavia, JavaScript solo carichi una volta caricato il DOM. Questo significa che l'applicazione web potenzialmente può chiamare una funzione JavaScript di Cordova prima il corrispondente codice nativo diventa disponibile.

Il `deviceready` viene generato un evento una volta Cordova ha caricato completamente. Una volta viene generato l'evento, si possono tranquillamente fare chiamate a Cordova APIs. Applicazioni in genere allegare un listener di eventi con `document.addEventListener` una volta che ha caricato il DOM documento HTML.

Il `deviceready` evento si comporta in modo un po' diverso dagli altri. Qualsiasi gestore registrato dopo il `deviceready` evento incendi ha la funzione di callback chiamata immediatamente.

## Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 8
*   Windows 8

## Esempio rapido

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# pause

L'evento viene generato quando un'applicazione viene messo in secondo piano.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Dettagli

Il `pause` evento viene generato quando la piattaforma nativa mette l'applicazione in background, in genere quando si passa a un'altra applicazione.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Esempio rapido

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS stranezze

Nel `pause` gestore, tutte le chiamate all'API Cordova o ai plugin nativo che passa con Objective-C non funzionano, insieme a eventuali chiamate interattive, ad esempio avvisi o `console.log()` . Essi vengono elaborati solo quando l'app riprende, sul loop fase successivo.

L'iOS specifiche `resign` evento è disponibile come alternativa a `pause` e rileva quando gli utenti di abilitare il pulsante di **blocco** bloccare il dispositivo con l'applicazione in esecuzione in primo piano. Se l'app (e dispositivo) è abilitate per il multi-tasking, questo è accoppiato con una successiva `pause` evento, ma solo sotto iOS 5. In effetti, tutte le applicazioni bloccate in iOS 5 che hanno abilitato multitasking sono spinti allo sfondo. Per le applicazioni di rimanere in esecuzione quando bloccato sotto iOS 5, disabilitare multitasking dell'app impostando [UIApplicationExitsOnSuspend][1] su `YES` . Da eseguire quando bloccato su iOS 4, che questa impostazione non importa.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# resume

L'evento viene generato quando un'applicazione viene recuperata dallo sfondo.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Dettagli

Il `resume` evento viene generato quando la piattaforma nativa tira l'applicazione fuori dallo sfondo.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Esempio rapido

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS stranezze

Eventuali funzioni interattive, chiamate da un `pause` gestore eventi eseguire più tardi quando l'app riprende, come segnalato dal `resume` evento. Questi includono avvisi, `console.log()` e tutte le chiamate da plugin o le API, Cordova che passano attraverso l'Objective-C.

*   evento **attivo**
    
    L'iOS specifiche `active` evento è disponibile come alternativa a `resume` e rileva quando gli utenti di disabilitano il pulsante di **blocco** per sbloccare il dispositivo con l'applicazione in esecuzione in primo piano. Se l'app (e dispositivo) è abilitate per il multi-tasking, questo è accoppiato con una successiva `resume` evento, ma solo sotto iOS 5. In effetti, tutte le applicazioni bloccate in iOS 5 che hanno abilitato multitasking sono spinti allo sfondo. Per le applicazioni di rimanere in esecuzione quando bloccato sotto iOS 5, disabilitare multitasking dell'app impostando [UIApplicationExitsOnSuspend][1] su `YES` . Da eseguire quando bloccato su iOS 4, che questa impostazione non importa.

*   evento di **riprendere**
    
    Quando viene chiamato da un `resume` gestore eventi, funzioni interattive come `alert()` bisogno di essere avvolto in un `setTimeout()` con un valore di timeout di zero, altrimenti l'app si blocca. Ad esempio:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# backbutton

L'evento viene generato quando l'utente preme il pulsante indietro.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Dettagli

Per ignorare il comportamento predefinito tasto back, registrare un listener di eventi per il `backbutton` evento, tipicamente chiamando `document.addEventListener` una volta ricevuto il `deviceready` evento. Non è più necessario chiamare qualsiasi altro metodo per ignorare il comportamento del pulsante indietro.

## Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10
*   Windows Phone 8

## Esempio rapido

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

L'evento viene generato quando l'utente preme il tasto menu.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Dettagli

Applicando un gestore eventi esegue l'override il comportamento del pulsante di menu predefinito.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10

## Esempio rapido

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

L'evento viene generato quando l'utente preme il pulsante di ricerca su Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Dettagli

Se è necessario eseguire l'override del comportamento del pulsante ricerca predefinito su Android è possibile registrare un listener di eventi per l'evento 'searchbutton'.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Android

## Esempio rapido

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

L'evento viene generato quando l'utente preme il pulsante di chiamata start.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Dettagli

Se è necessario ignorare il comportamento predefinito inizio chiamata è possibile registrare un listener di eventi per il `startcallbutton` evento.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   BlackBerry 10

## Esempio rapido

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

Questo evento viene generato quando l'utente preme il tasto di fine chiamata.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Dettagli

L'evento esegue l'override del comportamento predefinito fine chiamata.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   BlackBerry 10

## Esempio rapido

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

L'evento viene generato quando l'utente preme il volume basso pulsante.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## Dettagli

Se è necessario eseguire l'override di volume giù il comportamento predefinito è possibile registrare un listener di eventi per il `volumedownbutton` evento.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   BlackBerry 10
*   Android

## Esempio rapido

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

L'evento viene generato quando l'utente preme il tasto volume.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Dettagli

Se è necessario eseguire l'override del comportamento il volume predefinito è possibile registrare un listener di eventi per il `volumeupbutton` evento.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   BlackBerry 10
*   Android

## Esempio rapido

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
