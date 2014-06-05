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

# backbutton

Zdarzenie fires, gdy użytkownik naciśnie przycisk Wstecz.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Szczegóły

Aby zastąpić domyślne zachowanie przycisku wstecz, zarejestrować detektor zdarzeń dla `backbutton` zdarzenia, zazwyczaj przez wywołanie `document.addEventListener` po otrzymaniu `deviceready` zdarzenie. Nie jest konieczne do wywołania innej metody, aby zastąpić zachowanie przycisku wstecz.

## Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   Jeżyna 10
*   Windows Phone 7 i 8

## Szybki przykład

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Przykład pełnego

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
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
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>