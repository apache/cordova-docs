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

# batterystatus

Das Ereignis wird ausgelöst, wenn eine Änderung in den Batteriestatus vorliegt.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Informationen

Dieses Ereignis wird ausgelöst, wenn der Prozentsatz der Akkuladung um mindestens 1 Prozent ändert, oder wenn das Gerät eingesteckt oder "Unplugged".

Der Batterie-Status-Handler wird ein Objekt übergeben, das zwei Eigenschaften enthält:

*   **Ebene**: der Prozentsatz der Batterieladung (0-100). *(Anzahl)*

*   **IsPlugged**: ein boolescher Wert, der angibt, ob das Gerät eingesteckt Zoll *(boolesch)*

Anwendungen sollten in der Regel verwenden `window.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   Windows Phone 7 und 8
*   Tizen

## Windows Phone 7 und 8 Macken

Windows Phone 7 bietet keine systemeigenen APIs um zu bestimmen, Batterie-Niveau, so dass die `level` -Eigenschaft ist nicht verfügbar. Der `isPlugged` -Parameter *wird* unterstützt.

## Kleines Beispiel

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>