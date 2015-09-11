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

# online

Questo evento viene generato quando un'applicazione va online, e il dispositivo diventa collegato a Internet.

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", yourCallbackFunction, false);
    

## Dettagli

Il `online` evento viene generato quando un dispositivo precedentemente scollegato riceve una connessione di rete per consentire un'accesso di applicazione a Internet. Esso si basa sulle stesse informazioni come l'API di connessione e viene generato quando il valore di `<a href="../connection/connection.type.html">connection.type</a>` diventa`NONE`.

Applicazioni in genere è necessario utilizzare `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` per fissare un listener di eventi una volta il `<a href="events.deviceready.html">deviceready</a>` evento incendi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Tizen
*   Windows 8

## Esempio rapido

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", onOnline, false);
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", onDeviceReady, false);
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

Durante l'avvio iniziale, il primo `online` evento (se applicabile) richiede almeno un secondo al fuoco, prima che `<a href="../connection/connection.type.html">connection.type</a>` è`UNKNOWN`.

## Windows Phone 7 capricci

Quando è in esecuzione nell'emulatore, il `connection.status` è sempre sconosciuta, quindi questo evento sarà *non* a fuoco.

## Windows Phone 8 stranezze

L'emulatore riporta il tipo di connessione come `Cellular` , che non cambia, quindi saranno eventi *non* fuoco.