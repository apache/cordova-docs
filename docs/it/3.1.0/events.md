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
*   pausa
*   curriculum
*   online
*   non in linea
*   BackButton
*   batterycritical
*   batterylow
*   batterystatus
*   pulsante menu
*   SearchButton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## La funzionalità di accesso

A partire dalla versione 3.0, stato batteria implementa di Cordova e altre API a livello di dispositivo come *plugin*. Accesso a tutti gli altri eventi non correlati allo stato della batteria sono abilitati per impostazione predefinita. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, per abilitare o disabilitare gli eventi batteria:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   iOS (in`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   Tizen (in`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Riferimento: il [manifesto dell'applicazione per applicazione Web Tizen][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


# deviceready

Quando Cordova è completamente caricato, viene generato l'evento.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Dettagli

Questo evento è essenziale per qualsiasi applicazione. Segnala che il dispositivo di Cordova API hanno caricato e sono pronte accedere.

Cordova è costituito da due basi di codice: nativo e JavaScript. Mentre carica il codice nativo, viene visualizzata un'immagine di caricamento personalizzato. Tuttavia, JavaScript solo carichi una volta caricato il DOM. Questo significa che l'applicazione web potenzialmente può chiamare una funzione JavaScript di Cordova prima il corrispondente codice nativo è disponibile.

Il `deviceready` viene generato un evento una volta Cordova ha caricato completamente. Una volta viene generato l'evento, si possono tranquillamente fare chiamate a Cordova APIs. Applicazioni in genere allegare un listener di eventi con `document.addEventListener` una volta che ha caricato il DOM documento HTML.

Il `deviceready` evento si comporta in modo un po' diverso dagli altri. Qualsiasi gestore registrato dopo il `deviceready` evento incendi ha la funzione di callback chiamata immediatamente.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
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


# pausa

L'evento viene generato quando un'applicazione viene messo in secondo piano.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Dettagli

Il `pause` evento viene generato quando la piattaforma nativa mette l'applicazione in background, in genere quando si passa a un'altra applicazione.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
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


# curriculum

L'evento viene generato quando un'applicazione viene recuperata dallo sfondo.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Dettagli

Il `resume` evento viene generato quando la piattaforma nativa tira l'applicazione fuori dallo sfondo.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
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


# online

Questo evento viene generato quando un'applicazione va online, e il dispositivo diventa collegato a Internet.

    document.addEventListener("online", yourCallbackFunction, false);
    

## Dettagli

Il `online` evento viene generato quando un dispositivo precedentemente scollegato riceve una connessione di rete per consentire un'accesso di applicazione a Internet. Esso si basa sulle stesse informazioni come l'API di connessione e viene generato quando il valore di `connection.type` diventa`NONE`.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Tizen
*   Windows 8

## Esempio rapido

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS stranezze

Durante l'avvio iniziale, il primo `online` evento (se applicabile) richiede almeno un secondo al fuoco, prima che `connection.type` è`UNKNOWN`.

## Windows Phone 7 capricci

Quando è in esecuzione nell'emulatore, il `connection.status` è sempre sconosciuta, quindi questo evento sarà *non* a fuoco.

## Windows Phone 8 stranezze

L'emulatore riporta il tipo di connessione come `Cellular` , che non cambia, quindi saranno eventi *non* fuoco.


# non in linea

L'evento viene generato quando un'applicazione passa alla modalità offline, e il dispositivo non è connesso a Internet.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## Dettagli

Il `offline` evento viene generato quando un dispositivo precedentemente connesso perde una connessione di rete in modo che un'applicazione non è più possibile accedere a Internet. Esso si basa sulle stesse informazioni come l'API di connessione e viene attivato quando il `connection.type` cambia da `NONE` a qualsiasi altro valore.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Tizen
*   Windows 8

## Esempio rapido

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS stranezze

Durante l'avvio iniziale, il primo evento offline (se applicabile) richiede almeno un secondo al fuoco.

## Windows Phone 7 capricci

Quando è in esecuzione nell'emulatore, il `connection.status` è sempre sconosciuto, così fa di questo evento *non* fuoco.

## Windows Phone 8 stranezze

L'emulatore riporta il tipo di connessione come `Cellular` , che non cambia, così fa l'evento *non* fuoco.


# BackButton

L'evento viene generato quando l'utente preme il pulsante indietro.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Dettagli

Per ignorare il comportamento predefinito tasto back, registrare un listener di eventi per il `backbutton` evento, tipicamente chiamando `document.addEventListener` una volta ricevuto il `deviceready` evento. Non è più necessario chiamare qualsiasi altro metodo per ignorare il comportamento del pulsante indietro.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   Windows Phone 7 e 8

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


# batterycritical

L'evento viene generato quando la batteria ha raggiunto la soglia di livello critico.

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## Dettagli

L'evento viene generato quando la percentuale di carica della batteria ha raggiunto la soglia critica di batteria. Il valore è specifico del dispositivo.

Il `batterycritical` gestore viene passato un oggetto che contiene due proprietà:

*   **livello**: la percentuale di carica della batteria (0-100). *(Numero)*

*   **isPlugged**: un valore booleano che indica se il dispositivo è collegato poll *(Boolean)*

Applicazioni in genere è necessario utilizzare `window.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   Tizen

## Esempio rapido

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterylow

Quando la batteria ha raggiunto la soglia di basso livello, viene generato l'evento.

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## Dettagli

L'evento viene generato quando la percentuale di carica della batteria ha raggiunto la soglia di batteria scarica, il valore specifico del dispositivo.

Il `batterylow` gestore viene passato un oggetto che contiene due proprietà:

*   **livello**: la percentuale di carica della batteria (0-100). *(Numero)*

*   **isPlugged**: un valore booleano che indica se il dispositivo è collegato poll *(Boolean)*

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   Tizen

## Esempio rapido

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
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
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterystatus

Quando c'è un cambiamento di stato della batteria, viene generato l'evento.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Dettagli

Questo evento viene generato quando la percentuale di carica della batteria cambia almeno l'1 per cento, o se il dispositivo è collegato o scollegato.

Il gestore di stato della batteria viene passato un oggetto che contiene due proprietà:

*   **livello**: la percentuale di carica della batteria (0-100). *(Numero)*

*   **isPlugged**: un valore booleano che indica se il dispositivo è collegato poll *(Boolean)*

Applicazioni in genere è necessario utilizzare `window.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   Windows Phone 7 e 8
*   Tizen

## Windows Phone 7 e 8 stranezze

Windows Phone 7 non fornisce le API native per determinare il livello della batteria, così la `level` proprietà non è disponibile. Il `isPlugged` parametro *è* supportato.

## Esempio rapido

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# pulsante menu

L'evento viene generato quando l'utente preme il tasto menu.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Dettagli

Applicando un gestore eventi esegue l'override il comportamento del pulsante di menu predefinito.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `deviceready` evento incendi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)

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


# SearchButton

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

*   BlackBerry WebWorks (OS 5.0 e superiori)

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

*   BlackBerry WebWorks (OS 5.0 e superiori)

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

*   BlackBerry WebWorks (OS 5.0 e superiori)

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

*   BlackBerry WebWorks (OS 5.0 e superiori)

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
