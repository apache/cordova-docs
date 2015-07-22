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

# batterylow

Das Ereignis wird ausgelöst, wenn die Batterie der low-Level-Schwellenwert erreicht hat.

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## Informationen

Das Ereignis wird ausgelöst, wenn der Prozentsatz der Akkuladung, die Batterie-Schwelle, gerätespezifische Wert erreicht hat.

Die `batterylow` Handler übergeben wird ein Objekt mit zwei Eigenschaften:

*   **Ebene**: der Prozentsatz der Batterieladung (0-100). *(Anzahl)*

*   **IsPlugged**: ein boolescher Wert, der angibt, ob das Gerät eingesteckt Zoll *(boolesch)*

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   Tizen

## Kleines Beispiel

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
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
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>