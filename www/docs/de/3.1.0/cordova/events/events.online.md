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

# Online

Dieses Ereignis wird ausgelöst, wenn eine Anwendung online geht, und das Gerät wird mit dem Internet verbunden.

    document.addEventListener("online", yourCallbackFunction, false);
    

## Informationen

Das `online` -Ereignis wird ausgelöst, wenn ein zuvor unverbundenen Gerät eine Netzwerkverbindung zu einem Anwendung Zugriff auf das Internet empfängt. Es stützt sich auf die gleichen Informationen wie die Verbindung-API und wird ausgelöst, wenn der Wert des `connection.type` wird`NONE`.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Tizen
*   Windows 8

## Kleines Beispiel

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
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
    

## iOS Macken

Beim ersten Start die erste `online` Ereignis (falls zutreffend) dauert mindestens eine Sekunde vor dem Feuer `connection.type` ist`UNKNOWN`.

## Windows Phone 7 Macken

Bei der Ausführung im Emulator, der `connection.status` ist immer unbekannt, so wird dieses Ereignis *nicht* Feuer.

## Windows Phone 8 Macken

Der Emulator meldet den Verbindungstyp als `Cellular` , die ändert sich nicht, so dass Ereignisse werden *nicht* Feuer.