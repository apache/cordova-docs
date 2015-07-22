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

# Offline

Das Ereignis wird ausgelöst, wenn eine Anwendung offline geht, und das Gerät nicht mit dem Internet verbunden ist.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## Informationen

Das `offline` -Ereignis wird ausgelöst, wenn ein bereits angeschlossenes Gerät eine Netzwerkverbindung verliert, so dass eine Anwendung nicht mehr auf das Internet zugreifen kann. Es stützt sich auf die gleichen Informationen wie die Verbindung-API und wird ausgelöst, wenn die `connection.type` ändert sich von `NONE` auf einen anderen Wert.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Tizen
*   Windows 8

## Kleines Beispiel

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Macken

Beim ersten Start dauert das erste offline-Event (falls zutreffend) mindestens eine Sekunde zu schießen.

## Windows Phone 7 Macken

Bei der Ausführung im Emulator, der `connection.status` ist immer unbekannt, so dass dieses Ereignis *nicht* Feuer.

## Windows Phone 8 Macken

Der Emulator meldet den Verbindungstyp als `Cellular` , die wird nicht geändert, so dass das Ereignis *nicht* Feuer.