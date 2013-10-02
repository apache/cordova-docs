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

# device.model

Ottenere il nome del modello del dispositivo.

    var string = device.model;
    

## Descrizione

Il `device.model` restituisce il nome del modello del dispositivo o del prodotto. Il valore viene impostato dal produttore del dispositivo e può essere differente tra le versioni dello stesso prodotto.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    / / Android: Nexus One restituisce "Passione" (nome in codice Nexus One) / / Motorola Droid restituisce "arvicole" / / BlackBerry: Torch 9800 restituisce "9800" / / iOS: per l'iPad Mini, restituisce iPad2, 5; iPhone 5 è iPhone 5,1. Vedi http://theiphonewiki.com/wiki/index.php?title=Models / / modello var = device.model;
    

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
    

## Stranezze Android

*   Ottiene il [nome del prodotto][1] anziché il [nome del modello][2], che è spesso il nome di codice di produzione. Ad esempio, restituisce il Nexus One `Passion` , e Motorola Droid restituisce`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Tizen stranezze

*   Restituisce il modello di dispositivo assegnato dal fornitore, ad esempio,`TIZEN`

## Windows Phone 7 e 8 stranezze

*   Restituisce il modello di dispositivo specificato dal produttore. Ad esempio, restituisce il Samsung Focus`SGH-i917`.