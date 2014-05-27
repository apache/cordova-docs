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

# curriculum

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