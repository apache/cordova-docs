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

# device.uuid

Ottenere identificatore del dispositivo univoco universale ([UUID][1]).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## Descrizione

I dettagli di come viene generato un UUID sono determinati dal produttore del dispositivo e sono specifici per la piattaforma o il modello del dispositivo.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    / / Android: restituisce un intero casuale di 64 bit (come stringa, ancora una volta!) / / il numero intero è generato al primo avvio del dispositivo / / / / BlackBerry: restituisce il numero PIN del dispositivo / / questo è un valore integer univoco a nove cifre (come stringa, benchè!) / / / / iPhone: (parafrasato dalla documentazione della classe UIDevice) / / restituisce una stringa di valori hash creata dall'hardware più identifica.
    / / È garantito per essere unica per ogni dispositivo e non può essere legato / / per l'account utente.
    / / Windows Phone 7: restituisce un hash dell'utente corrente, + dispositivo / / se l'utente non è definito, un guid generato e persisterà fino a quando l'applicazione viene disinstallata / / Tizen: restituisce il dispositivo IMEI (International Mobile Equipment Identity o IMEI è un numero / / unico per ogni cellulare GSM e UMTS.
    var deviceID = device.uuid;
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS Quirk

Il `uuid` su iOS non è univoco per un dispositivo, ma varia per ogni applicazione, per ogni installazione. Cambia se si elimina e re-installare l'app, e possibilmente anche quando aggiornare iOS o anche aggiornare l'app per ogni versione (apparente in iOS 5.1). Il `uuid` non è un valore affidabile.

## Windows Phone 7 e 8 stranezze

Il `uuid` per Windows Phone 7 richiede l'autorizzazione `ID_CAP_IDENTITY_DEVICE` . Microsoft probabilmente sarà presto deprecare questa proprietà. Se la funzionalità non è disponibile, l'applicazione genera un guid persistente che viene mantenuto per la durata dell'installazione dell'applicazione sul dispositivo.