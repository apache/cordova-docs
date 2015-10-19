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

title: searchbutton
---

# searchbutton

L'evento viene generato quando l'utente preme il pulsante di ricerca su Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Dettagli

Se è necessario eseguire l'override del comportamento del pulsante ricerca predefinito su Android è possibile registrare un listener di eventi per l'evento 'searchbutton'.

Applicazioni in genere è necessario utilizzare `document.addEventListener` per fissare un listener di eventi una volta il `[deviceready](events.deviceready.html)` evento incendi.

## Piattaforme supportate

*   Android

## Esempio rapido

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Esempio completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>