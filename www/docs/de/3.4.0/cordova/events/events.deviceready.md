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

Das Ereignis wird ausgelöst, wenn Cordova vollständig geladen ist.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Informationen

Dieses Ereignis ist wesentlich für jede Anwendung. Es signalisiert, dass Cordovas Gerät APIs geladen haben und bereit sind, zugreifen.

Cordova besteht aus zwei Codebasen: native und JavaScript. Während der native Code lädt, zeigt eine benutzerdefinierte Lade-Bild. JavaScript lädt jedoch nur wenn das DOM geladen. Dies bedeutet, dass die Web-app möglicherweise eine Cordova JavaScript-Funktion nennen darf, bevor der entsprechende systemeigene Code verfügbar ist.

Das `deviceready` -Ereignis wird ausgelöst, sobald Cordova vollständig geladen hat. Einmal können das Ereignis ausgelöst, Sie sicher Cordova-APIs aufrufen. Anwendungen in der Regel fügen Sie einen Ereignis-Listener mit `document.addEventListener` sobald das HTML-Dokument DOM geladen hat.

Das `deviceready` Ereignis verhält sich etwas anders als von anderen. Ein Ereignishandler registriert nach der `deviceready` -Ereignis ausgelöst hat die Callback-Funktion aufgerufen, sofort.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Vollständiges Beispiel

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