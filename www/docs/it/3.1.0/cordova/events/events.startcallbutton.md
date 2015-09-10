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

# startcallbutton

L'evento viene generato quando l'utente preme il pulsante di chiamata start.

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("startcallbutton", yourCallbackFunction, false);
    

## Dettagli

Se è necessario ignorare il comportamento predefinito inizio chiamata è possibile registrare un listener di eventi per il `startcallbutton` evento.

Applicazioni in genere è necessario utilizzare `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` per fissare un listener di eventi una volta il `<a href="events.deviceready.html">deviceready</a>` evento incendi.

## Piattaforme supportate

*   BlackBerry WebWorks (OS 5.0 e superiori)

## Esempio rapido

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button <a href="../storage/storage.opendatabase.html">Example</a></title>
    
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
            // Register the event listener
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("startcallbutton", onStartCallKeyDown, false);
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