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