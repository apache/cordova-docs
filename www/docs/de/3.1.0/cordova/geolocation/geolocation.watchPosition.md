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

# geolocation.watch<a href="Position/position.html">Position</a>

Uhren für Änderungen an der aktuellen <a href="Position/position.html">Position</a> des <a href="../device/device.html">Gerät</a>s.

    var watchId = navigator.geolocation.watch<a href="Position/position.html">Position</a>(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                                      [<a href="parameters/geolocationError.html">geolocationError</a>],
                                                      [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);
    

## Parameter

*   **<a href="geolocation.html">Geolocation</a>Success**: der Rückruf, der die aktuelle <a href="Position/position.html">Position</a> übergeben wird.

*   **<a href="geolocation.html">Geolocation</a>Error**: (Optional) der Rückruf, der ausgeführt wird, wenn ein Fehler auftritt.

*   **<a href="geolocation.html">Geolocation</a>Options**: (Optional) die <a href="geolocation.html">Geolocation</a>-Optionen.

## Gibt

*   **String**: gibt eine Uhr-Id, die das Uhr Stellung Intervall verweist zurück. Die Uhr-Id sollte verwendet werden, mit `<a href="geolocation.clearWatch.html">geolocation.clearWatch</a>` , gerade für Änderungen zu stoppen.

## Beschreibung

`geolocation.watch<a href="Position/position.html">Position</a>`ist eine asynchrone Funktion. Es gibt das <a href="../device/device.html">Gerät</a> aktuelle <a href="Position/position.html">Position</a> zurück, wenn eine Änderung erkannt wird. Wenn das <a href="../device/device.html">Gerät</a> einen neuen <a href="../storage/storage.html">Speicher</a>ort und ruft die `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` Rückruf führt mit einem `<a href="Position/position.html">Position</a>` Objekt als Parameter. Wenn ein Fehler vorliegt der `<a href="parameters/geolocationError.html">geolocationError</a>` Rückruf führt mit einem `<a href="Position/position.html">Position</a>Error` Objekt als Parameter.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // onSuccess Callback
    //   This method accepts a `<a href="Position/position.html">Position</a>` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a <a href="Position/position.html">Position</a>Error object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, { timeout: 30000 });
    

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
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watch<a href="Position/position.html">Position</a>(onSuccess, onError, options);
        }
    
        // onSuccess <a href="geolocation.html">Geolocation</a>
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a <a href="Position/position.html">Position</a>Error object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>