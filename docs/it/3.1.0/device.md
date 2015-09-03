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


# Dispositivo

> Il `device` oggetto descrive il dispositivo hardware e software.

## Proprietà

*   device.model
*   Device.Cordova
*   Device
*   Device.UUID
*   Device.Version
*   device.name

## Portata variabile

Poiché `device` viene assegnato il `window` dell'oggetto, è implicitamente in ambito globale.

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

*   Tizen (in`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Riferimento: il [manifesto dell'applicazione per applicazione Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

Ottenere il nome del modello del dispositivo.

    var string = device.name;
    

## Descrizione

`device.name`Restituisce il nome del modello del dispositivo o del prodotto. Questo valore viene impostato dal produttore del dispositivo e può essere differente tra le versioni dello stesso prodotto.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

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
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
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

## Windows Phone 7 e 8 stranezze

*   Restituisce il modello di dispositivo specificato dal produttore. Ad esempio, restituisce il Samsung Focus`SGH-i917`.

## Tizen stranezze

*   Restituisce il modello di dispositivo assegnato dal fornitore, ad esempio,`TIZEN`


# device.cordova

Ottenere la versione di Cordova in esecuzione nel dispositivo.

    var string = device.cordova;
    

## Descrizione

`device.cordova`Restituisce la versione di Cordova in esecuzione nel dispositivo.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    var name = device.cordova;
    

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


# device.platform

Ottenere il nome del sistema operativo del dispositivo.

    var string = device.platform;
    

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

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
    

## Stranezze di blackBerry

Dispositivi possono restituire il numero di versione piattaforma dispositivo anziché il nome di piattaforma. Ad esempio, Storm2 9550 restituisce un valore come`2.13.0.95`.

## Windows Phone 7 capricci

Windows Phone 7 dispositivi segnalano la piattaforma come`WinCE`.

## Windows Phone 8 stranezze

Dispositivi Windows Phone 8 segnalano la piattaforma come`Win32NT`.


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


# device.version

Ottenere la versione del sistema operativo.

    var string = device.version;
    

## Piattaforme supportate

*   Android 2.1 +
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    / / Android: Froyo OS sarebbe tornato "2.2" / / OS Eclair restituirebbe "2.1", "2.0.1" o "2.0" / / versione può restituire anche aggiornare il livello "2.1-update1" / / / / BlackBerry: Torch 9800 con OS 6.0 restituirebbe "6.0.0.600" / / / / iPhone: iOS 3.2 restituisce "3.2" / / / / Windows Phone 7: restituisce il numero di versione corrente del sistema operativo, es. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

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
