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

# Koordinaten

Eine Reihe von Eigenschaften, die die geographischen Koordinaten von einer <a href="../Position/position.html">Position</a> zu beschreiben.

## Eigenschaften

*   **Breitengrad**: Latitude in Dezimalgrad. *(Anzahl)*

*   **Länge**: Länge in Dezimalgrad. *(Anzahl)*

*   **Höhe**: Höhe der <a href="../Position/position.html">Position</a> in Meter über dem Ellipsoid. *(Anzahl)*

*   **Genauigkeit**: Genauigkeit der breiten- und Längengrad Koordinaten in Metern. *(Anzahl)*

*   **AltitudeAccuracy**: Genauigkeit der Koordinate Höhe in Metern. *(Anzahl)*

*   **Rubrik**: Fahrtrichtung, angegeben in Grad relativ zu den Norden im Uhrzeigersinn gezählt. *(Anzahl)*

*   **Geschwindigkeit**: aktuelle Geschwindigkeit über Grund des <a href="../../device/device.html">Gerät</a>s, in Metern pro Sekunde angegeben. *(Anzahl)*

## Beschreibung

Die `Coordinates` Objekt ist angefügt das `<a href="../Position/position.html">Position</a>` -Objekt, das Callback-Funktionen in Anforderungen für die aktuelle <a href="../Position/position.html">Position</a> zur Verfügung steht.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // onSuccess Callback
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
    
    // onError Callback
    //
    var onError = function() {
        alert('onError!');
    };
    
    navigator.geolocation.getCurrent<a href="../Position/position.html">Position</a>(onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../geolocation.html">Geolocation</a> <a href="../Position/position.html">Position</a> <a href="../../storage/storage.opendatabase.html">Example</a></title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrent<a href="../Position/position.html">Position</a>(onSuccess, onError);
        }
    
        // Display `<a href="../Position/position.html">Position</a>` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
                            'Longitude: '            + position.coords.longitude        + '<br/>' +
                            'Altitude: '             + position.coords.altitude         + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy         + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
                            'Heading: '              + position.coords.heading          + '<br/>' +
                            'Speed: '                + position.coords.speed            + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    

## Android Macken

**AltitudeAccuracy**: von Android-<a href="../../device/device.html">Gerät</a>en, Rückgabe nicht unterstützt`null`.