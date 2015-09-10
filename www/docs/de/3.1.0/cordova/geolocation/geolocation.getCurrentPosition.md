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

# geolocation.getCurrent<a href="Position/position.html">Position</a>

Gibt das <a href="../device/device.html">Gerät</a> die aktuelle <a href="Position/position.html">Position</a> als ein `<a href="Position/position.html">Position</a>` Objekt.

    navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                             [<a href="parameters/geolocationError.html">geolocationError</a>],
                                             [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);
    

## Parameter

*   **<a href="geolocation.html">Geolocation</a>Success**: der Rückruf, der die aktuelle <a href="Position/position.html">Position</a> übergeben wird.

*   **<a href="geolocation.html">Geolocation</a>Error**: *(Optional)* der Rückruf, der ausgeführt wird, wenn ein Fehler auftritt.

*   **<a href="geolocation.html">Geolocation</a>Options**: *(Optional)* die <a href="geolocation.html">Geolocation</a>-Optionen.

## Beschreibung

`geolocation.getCurrent<a href="Position/position.html">Position</a>`ist eine asynchrone Funktion. Es gibt das <a href="../device/device.html">Gerät</a> aktuelle <a href="Position/position.html">Position</a> auf der `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` Rückruf mit einem `<a href="Position/position.html">Position</a>` Objekt als Parameter. Wenn ein Fehler vorliegt der `<a href="parameters/geolocationError.html">geolocationError</a>` Rückruf wird übergeben ein `<a href="Position/position.html">Position</a>Error` Objekt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // onSuccess Callback
    // This method accepts a <a href="Position/position.html">Position</a> object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a <a href="Position/position.html">Position</a>Error object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(onSuccess, onError);
    

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
            navigator.geolocation.getCurrent<a href="Position/position.html">Position</a>(onSuccess, onError);
        }
    
        // onSuccess <a href="geolocation.html">Geolocation</a>
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
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
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>