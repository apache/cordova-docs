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