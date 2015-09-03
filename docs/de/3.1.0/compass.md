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


# Kompass

> Ruft die Richtung, die das Gerät verweist.

## Methoden

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (veraltet)
*   compass.clearWatchFilter (veraltet)

## Argumente

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   iOS (in`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# compass.getCurrentHeading

Erhalten Sie aktuelle Kompassrichtung.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## Beschreibung

Der Kompass ist ein Sensor, der erkennt die Richtung oder Position, dass das Gerät in der Regel von der Oberseite des Geräts gezeigt wird. Er misst die Überschrift im Grad von 0 bis 359.99, wobei 0 Norden ist.

Die Kompassrichtung Informationen über zurückgegeben ein `CompassHeading` -Objekt unter Verwendung der `compassSuccess` Callback-Funktion.

## Unterstützte Plattformen

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 und 8 (falls verfügbar in Hardware)
*   Windows 8

## Kleines Beispiel

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>


# compass.watchHeading

Erhalten Sie in regelmäßigen Abständen die Kompassrichtung in Grad.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## Beschreibung

Der Kompass ist ein Sensor, der erkennt die Richtung oder Position, dass das Gerät angezeigt wird. Er misst die Überschrift im Grad von 0 bis 359.99.

Die `compass.watchHeading` Ruft das Gerät aktuelle Rubrik in regelmäßigen Abständen. Jedes Mal, die Überschrift abgerufen wird, die `headingSuccess` Callback-Funktion wird ausgeführt. Gibt das Intervall in Millisekunden über den `frequency` -Parameter in der `compassOptions` Objekt.

Die zurückgegebenen Uhren-ID verweist das Kompass-Uhr-Intervall. Die Uhr, die ID kann verwendet werden, mit `compass.clearWatch` , beobachten den Kompass zu stoppen.

## Unterstützte Plattformen

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 und 8 (falls verfügbar in Hardware)
*   Windows 8

## Kleines Beispiel

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS Macken

In iOS `compass.watchHeading` erhalten Sie auch aktuelle Position des Geräts, wenn es um eine angegebene Anzahl von Grad ändert. Jedes Mal die Überschrift-Änderungen, um die angegebene Anzahl von Grad oder mehr, die `headingSuccess` Rückruffunktion ausgeführt wird. Geben Sie den Grad der Veränderung über die `filter` Parameter in der `compassOptions` Objekt. Deaktivieren Sie die Uhr wie üblich durch Übermittlung der zurückgegebenen Uhren-ID auf `compass.clearWatch` . Diese Funktion ersetzt die bisher getrennten, nur iOS- `watchHeadingFilter` und `clearWatchFilter` Funktionen, die in Version 1.6 entfernt wurden.

Nur ein `watchHeading` kann in der Tat auf einmal in iOS sein. Wenn ein `watchHeading` benutzt einen Filter Aufrufen von `getCurrentHeading` oder `watchHeading` verwendet den Wert des vorhandenen Filters Überschrift Änderungen festlegen. Überschrift Veränderungen beobachten, mit einem Filter ist effizienter als mit Zeitintervallen.


# compass.clearWatch

Stoppen Sie, beobachten den Kompass auf der Uhr-ID-Parameter verweist.

    navigator.compass.clearWatch(watchID);
    

*   **WatchID**: die ID zurückgegebener`compass.watchHeading`.

## Unterstützte Plattformen

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 und 8 (falls verfügbar in Hardware)
*   Windows 8

## Kleines Beispiel

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


# compass.watchHeadingFilter

Nicht mehr ab 1.6 unterstützt, finden Sie unter `compass.watchHeading` für die entsprechende Funktionalität.


# compass.clearWatchFilter

Nicht mehr unterstützt ab 1.6. Finden Sie unter`compass.clearWatch`.


# compassSuccess

OnSuccess-Callback-Funktion, die die Kompassrichtung Informationen über ein `compassHeading` Objekt.

    function(heading) {
        // Do something
    }
    

## Parameter

*   **Rubrik**: die Überschrift-Informationen. *(CompassHeading)*

## Beispiel

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

OnError Callback-Funktion für Kompass-Funktionen.

## Beispiel

    function(CompassError) {
        // Handle the error
    }


# compassOptions

Ein optionaler Parameter, um das Abrufen des Kompasses anzupassen.

## Optionen

*   **Häufigkeit**: wie oft die Kompassrichtung in Millisekunden abrufen. *(Anzahl)* (Default: 100)

*   **Filter**: die Veränderung der Grad benötigt, um einen WatchHeading Erfolg Rückruf initiiert. *(Anzahl)*

Android Macken

---

*   `filter`wird nicht unterstützt.

## Tizen Macken

*   `filter`wird nicht unterstützt.

## Windows Phone 7 und 8 Macken

*   `filter`wird nicht unterstützt.


# compassHeading

Ein `CompassHeading` Objekt wird an die `CompassSuccess` Callback-Funktion zurückgegeben.

## Eigenschaften

*   **MagneticHeading**: die Überschrift in Grad von 0-359.99 zu einem einzigen Zeitpunkt. *(Anzahl)*

*   **TrueHeading**: die Überschrift im Verhältnis zu den geografischen Nordpol in Grad 0-359.99 zu einem einzigen Zeitpunkt. Ein negativer Wert bedeutet, dass die wahre Überschrift nicht bestimmt werden kann. *(Anzahl)*

*   **HeadingAccuracy**: die Abweichung in Grad zwischen der gemeldeten Überschrift und die wahre Richtung. *(Anzahl)*

*   **Timestamp**: die Zeit, an dem dieser Rubrik bestimmt war. *(Millisekunden)*

## Beschreibung

Das `CompassHeading` Objekt wird zurückgegeben, um die `compassSuccess` Callback-Funktion.

## Android Macken

*   `trueHeading`wird nicht unterstützt, aber meldet den gleichen Wert wie`magneticHeading`

*   `headingAccuracy`ist immer 0 da es keinen Unterschied zwischen gibt der `magneticHeading` und`trueHeading`.

## iOS Macken

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Für iOS 4 Geräte und oben, Rubrik Faktoren in die aktuelle Ausrichtung des Geräts, nicht in Bezug auf die absolute Position für apps unterstützt, das die Orientierung.


# CompassError

A `CompassError` Objekt wird zurückgegeben, um die `compassError` Callback-Funktion, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

## Konstanten

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## Beschreibung

Wenn ein Fehler auftritt, das `CompassError` -Objekt wird als Parameter übergeben ein `compassError` Callback-Funktion.
