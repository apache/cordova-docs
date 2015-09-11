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

# batterycritical

L'evento viene generato quando la batteria ha raggiunto la soglia di livello critico.

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterycritical", yourCallbackFunction, false);
    

## Dettagli

L'evento viene generato quando la percentuale di carica della batteria ha raggiunto la soglia critica di batteria. Il valore è specifico del dispositivo.

Il `batterycritical` gestore viene passato un oggetto che contiene due proprietà:

*   **livello**: la percentuale di carica della batteria (0-100). *(Numero)*

*   **isPlugged**: un valore booleano che indica se il dispositivo è collegato poll *(Boolean)*

Applicazioni in genere è necessario utilizzare `window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` per fissare un listener di eventi una volta il `<a href="events.deviceready.html">deviceready</a>` evento incendi.

## Piattaforme supportate

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   Tizen

## Esempio rapido

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterycritical", onBatteryCritical, false);
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