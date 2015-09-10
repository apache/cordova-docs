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

# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `<a href="device.model.html">device.model</a>` instead.

Modellname des <a href="device.html">Gerät</a>s zu erhalten.

    var string = device.name;
    

## Beschreibung

`device.name`Gibt den Namen der Modell- oder des <a href="device.html">Gerät</a>s zurück. Dieser Wert wird vom <a href="device.html">Gerät</a>ehersteller festgelegt und kann zwischen den Versionen des gleichen Produkts unterschiedlich sein.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + <a href="device.model.html">device.model</a>    + '<br />' +
                                'Device Cordova: '  + <a href="device.cordova.html">device.cordova</a>  + '<br />' +
                                'Device Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                'Device UUID: '     + <a href="device.uuid.html">device.uuid</a>     + '<br />' +
                                'Device Version: '  + <a href="device.version.html">device.version</a>  + '<br />';
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

## Windows Phone 7 und 8 Macken

*   Gibt das vom Hersteller angegebenen <a href="device.html">Gerät</a>emodell zurück. Beispielsweise gibt der Samsung-Fokus`SGH-i917`.

## Tizen Macken

*   Gibt z. B. das <a href="device.html">Gerät</a>emodell von dem Kreditor zugeordnet,`TIZEN`