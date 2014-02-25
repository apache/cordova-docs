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

# pausa

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