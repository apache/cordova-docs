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


# Beschleunigungsmesser

> Erfasst die Bewegung des Geräts in der *x-*, *y-* und *Z*-Richtung.

## Methoden

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## Argumente

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## Objekte (schreibgeschützt)

*   Beschleunigung

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie den CLI `plugin` Befehl, welche im Command-Line Interface beschrieben ist, zum hinzufügen oder entfernen dieses Features für ein Projekt:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

Diese Befehle gelten für alle Zielplattformen, aber die plattformspezifischen Konfigurationseinstellungen müssen, wie unten beschrieben, geändert werden:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.AccelListener" />
        </feature>
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Accelerometer">
            <param name="blackberry-package" value="org.apache.cordova.accelerometer.Accelerometer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="org.apache.cordova" required="true" version="1.0.0" />
        

*   iOS (in`config.xml`)
    
        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Einige Plattformen können dieses Feature unterstützen ohne dass eine besondere Konfiguration notwendig ist. Siehe dazu *Plattform-Unterstützung* in der Übersicht.


# accelerometer.getCurrentAcceleration

Erhalten Sie die aktuelle Beschleunigung entlang der *x-*, *y-*und *Z* -Achsen.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

## Beschreibung

Der Beschleunigungsmesser ist ein Bewegungssensor, der die Änderung (*Delta*) erkennt Bewegung im Verhältnis zu der aktuellen Geräte-Orientierung in drei Dimensionen entlang der *x-*, *y-*und *Z* -Achse.

Diese Beschleunigungswerte werden zurückgegeben die `accelerometerSuccess` Callback-Funktion.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
    

## iOS Macken

*   iOS erkennt nicht das Konzept die aktuelle Beschleunigung zu einem bestimmten Zeitpunkt zu bekommen.

*   Müssen Sie die Beschleunigung zu sehen und erfassen die Daten zu bestimmten Zeitintervallen.

*   So die `getCurrentAcceleration` -Funktion führt zu den letzten Wert berichtet von einer `watchAccelerometer` rufen.


# accelerometer.watchAcceleration

Erhalten Sie in regelmäßigen Abständen die Beschleunigung entlang der *x-*, *y-*und *Z* -Achse.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

## Beschreibung

Der Beschleunigungsmesser ist ein Bewegungssensor, der die Änderung (Delta) erkennt Bewegung relativ zur aktuellen Position. Der Beschleunigungssensor erkennt 3D Bewegung entlang der *x-*, *y-*und *Z* -Achse.

Die `accelerometer.watchAcceleration` -Methode ruft das Gerät an den aktuellen `Acceleration` in regelmäßigen Abständen, Ausführung der `accelerometerSuccess` Callback-Funktion jedes Mal. Gibt das Intervall in Millisekunden über die `acceleratorOptions` des Objekts `frequency` Parameter.

Das zurückgegebene ID Referenzen der Beschleunigungsmesser Uhr Intervall zu sehen und kann mit verwendet werden `accelerometer.clearWatch` , beobachten den Beschleunigungsmesser zu stoppen.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the acceleration
        //
        function startWatch() {
    
            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                                'Acceleration Y: ' + acceleration.y         + '<br />' +
                                'Acceleration Z: ' + acceleration.z         + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
      </body>
    </html>
    

## iOS Macken

Die API ruft die Erfolg-Callback-Funktion im Intervall angefordert, aber schränkt den Bereich der Anforderungen an das Gerät zwischen 40ms und 1000ms. Beispielsweise wenn Sie ein Intervall von 3 Sekunden, (3000ms), beantragen die API fordert Daten vom Gerät jede Sekunde, aber nur den Erfolg-Rückruf führt alle 3 Sekunden.


# accelerometer.clearWatch

Beenden, beobachten die `Acceleration` verwiesen wird, durch die `watchID` Parameter.

    navigator.accelerometer.clearWatch(watchID);
    

*   **WatchID**: die ID zurückgegebener`accelerometer.watchAcceleration`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the acceleration
        //
        function startWatch() {
    
            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
    
            element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                'Acceleration Y: ' + acceleration.y + '<br />' +
                                'Acceleration Z: ' + acceleration.z + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
            <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


# Beschleunigung

Zu einem bestimmten Zeitpunkt erfasste `Beschleunigungsmesser`-Daten.

## Eigenschaften

*   **X**: Betrag der Beschleunigung auf der x-Achse. (in m/s ^ 2) *(Anzahl)*
*   **y**: Betrag der Beschleunigung auf der y-Achse. (in m/s ^ 2) *(Anzahl)*
*   **Z**: Betrag der Beschleunigung auf die z-Achse. (in m/s ^ 2) *(Anzahl)*
*   **Timestamp**: Zeitstempel der Erstellung in Millisekunden. *(DOMTimeStamp)*

## Beschreibung

Ein `Acceleration` Objekt aufgefüllt und von jeder der APIs zurückgegebene `Accelerometer` Methoden. Beschleunigungswerte sind die Auswirkungen der Schwerkraft (9.81 m/s ^ 2), so dass wenn ein Gerät flach und nach oben, *X*, *y liegt*, und *Z* -Werte zurückgegeben werden sollte `` , `` , und`9.81`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>


# accelerometerSuccess

OnSuccess Callback-Funktion, die die `Beschleunigung` Informationen bereitstellt.

    function(acceleration) {
        // Do something
    }
    

## Parameter

*   **acceleration**: Die Beschleunigung in einem einzigen Moment der Zeit. (Beschleunigung)

## Beispiel

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };


# accelerometerError

OnError Callback-Funktion für Beschleunigungsfunktionen.

    function() {
        // Handle the error
    }


# accelerometerOptions

Ein optionaler Parameter, um den Abruf der Beschleunigungswerte anzupassen.

## Optionen

*   **Häufigkeit**: wie oft abgerufen werden die `Acceleration` in Millisekunden. *(Anzahl)* (Default: 10000)
