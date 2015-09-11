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

# compass.watchHeading

Erhalten Sie in regelmäßigen Abständen die <a href="compass.html">Kompass</a>richtung in Grad.

    var watchID = navigator.compass.watchHeading(<a href="parameters/compassSuccess.html">compassSuccess</a>, <a href="parameters/compassError.html">compassError</a>, [<a href="parameters/compassOptions.html">compassOptions</a>]);
    

## Beschreibung

Der <a href="compass.html">Kompass</a> ist ein Sensor, der erkennt die Richtung oder <a href="../geolocation/Position/position.html">Position</a>, dass das <a href="../device/device.html">Gerät</a> angezeigt wird. Er misst die Überschrift im Grad von 0 bis 359.99.

Die `compass.watchHeading` Ruft das <a href="../device/device.html">Gerät</a> aktuelle Rubrik in regelmäßigen Abständen. Jedes Mal, die Überschrift abgerufen wird, die `headingSuccess` Callback-Funktion wird ausgeführt. Gibt das Intervall in Millisekunden über den `frequency` -Parameter in der `<a href="parameters/compassOptions.html">compassOptions</a>` Objekt.

Die zurückgegebenen Uhren-ID verweist das <a href="compass.html">Kompass</a>-Uhr-Intervall. Die Uhr, die ID kann verwendet werden, mit `<a href="compass.clearWatch.html">compass.clearWatch</a>` , beobachten den <a href="compass.html">Kompass</a> zu stoppen.

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
    
    function onError(<a href="parameters/compassError.html">compassError</a>) {
        alert('Compass error: ' + <a href="parameters/compassError.html">compassError</a>.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
                navigator.<a href="compass.clearWatch.html">compass.clearWatch</a>(watchID);
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
        function onError(<a href="parameters/compassError.html">compassError</a>) {
            alert('Compass error: ' + <a href="parameters/compassError.html">compassError</a>.code);
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

In iOS `compass.watchHeading` erhalten Sie auch aktuelle <a href="../geolocation/Position/position.html">Position</a> des <a href="../device/device.html">Gerät</a>s, wenn es um eine angegebene Anzahl von Grad ändert. Jedes Mal die Überschrift-Änderungen, um die angegebene Anzahl von Grad oder mehr, die `headingSuccess` Rückruffunktion ausgeführt wird. Geben Sie den Grad der Veränderung über die `filter` Parameter in der `<a href="parameters/compassOptions.html">compassOptions</a>` Objekt. Deaktivieren Sie die Uhr wie üblich durch Übermittlung der zurückgegebenen Uhren-ID auf `<a href="compass.clearWatch.html">compass.clearWatch</a>` . Diese Funktion ersetzt die bisher getrennten, nur iOS- `watchHeadingFilter` und `clearWatchFilter` Funktionen, die in Version 1.6 entfernt wurden.

Nur ein `watchHeading` kann in der Tat auf einmal in iOS sein. Wenn ein `watchHeading` benutzt einen Filter Aufrufen von `getCurrentHeading` oder `watchHeading` verwendet den Wert des vorhandenen Filters Überschrift Änderungen festlegen. Überschrift Veränderungen beobachten, mit einem Filter ist effizienter als mit Zeitintervallen.