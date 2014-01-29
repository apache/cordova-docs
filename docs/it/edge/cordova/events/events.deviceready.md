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