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

# device.model

Modellname des Geräts zu erhalten.

    var string = device.model;
    

## Beschreibung

Die `device.model` gibt den Namen der Modell- oder des Geräts zurück. Der Wert wird vom Gerätehersteller festgelegt und kann zwischen den Versionen des gleichen Produkts unterschiedlich sein.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    / / Android: Nexus One gibt "Passion" (Nexus One Codename) / / Motorola Droid returns "Wühlmäuse" / / BlackBerry: Torch 9800 gibt "9800" / / iOS: für das iPad Mini gibt iPad2, 5; iPhone 5 ist iPhone 5,1. Finden Sie unter http://theiphonewiki.com/wiki/index.php?title=Models / / Var-Modell = device.model;
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Android Macken

*   Ruft den [Produktname][1] anstelle des [Modellnamens][2], das ist oft der Codename für die Produktion. Beispielsweise das Nexus One gibt `Passion` , und Motorola Droid gibt`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Tizen Macken

*   Gibt z. B. das Gerätemodell von dem Kreditor zugeordnet,`TIZEN`

## Windows Phone 7 und 8 Macken

*   Gibt das vom Hersteller angegebenen Gerätemodell zurück. Beispielsweise gibt der Samsung-Fokus`SGH-i917`.