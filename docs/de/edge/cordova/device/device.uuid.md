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

# device.uuid

Des Geräts Universally Unique Identifier ([UUID][1] zu erhalten).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## Beschreibung

Die Details wie eine UUID generiert wird werden vom Gerätehersteller und beziehen sich auf die Plattform oder das Modell des Geräts.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    / / Android: wird eine zufällige 64-Bit-Ganzzahl (als Zeichenfolge, wieder!) / / die ganze Zahl wird beim ersten Start des Geräts erzeugt / / / / BlackBerry: gibt die PIN-Nummer des Gerätes / / Dies ist eine neunstellige eindeutige Ganzzahl (als String, obwohl!) / / / / iPhone: (paraphrasiert aus der Dokumentation zur UIDevice-Klasse) / / liefert eine Reihe von Hash-Werte, die aus mehreren Hardware erstellt identifiziert.
    / / Es ist gewährleistet, dass für jedes Gerät eindeutig sein und kann nicht gebunden werden / / an den Benutzer weitergeleitet.
    / / Windows Phone 7: gibt einen Hash des Gerät + aktueller Benutzer, / / wenn der Benutzer nicht definiert ist, eine Guid generiert und wird weiter bestehen, bis die app deinstalliert wird / / Tizen: gibt das Gerät IMEI (International Mobile Equipment Identity oder IMEI ist eine Zahl / / einzigartig für jedes GSM- und UMTS-Handy.
    var deviceID = device.uuid;
    

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
    

## iOS Quirk

Die `uuid` auf iOS ist nicht eindeutig auf ein Gerät, aber für jede Anwendung, für jede Installation variiert. Es ändert sich, wenn Sie löschen und neu die app installieren, und möglicherweise auch beim iOS zu aktualisieren, oder aktualisieren Sie auch Ihre app pro Version (scheinbaren in iOS 5.1). Die `uuid` ist kein zuverlässiger Wert.

## Windows Phone 7 und 8 Macken

Die `uuid` für Windows Phone 7 die Berechtigung erfordert `ID_CAP_IDENTITY_DEVICE` . Microsoft wird diese Eigenschaft wahrscheinlich bald abzuschaffen. Wenn die Funktion nicht verfügbar ist, generiert die Anwendung eine persistente Guid, die für die Dauer der Installation der Anwendung auf dem Gerät verwaltet wird.